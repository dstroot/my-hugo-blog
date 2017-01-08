/* jshint node: true */
/* eslint-env node */

'use strict';

// Install: you must install gulp both globally *and* locally.
// Make sure you `$ npm install -g gulp`
//
//
// Steps:
// 1) compile scss to css
// 2) inline css to head partial
// 3) build hugo
// 4) run HTML hint
// 4) minify HTML

/**
 * Dependencies
 */

var gulp          = require('gulp');
var $             = require('gulp-load-plugins')({ lazy: true });
var del           = require('del');
var runSequence   = require('run-sequence');
var pngcrush      = require('imagemin-pngcrush');
var terminus      = require('terminus');
var exec          = require('child_process').exec;

/**
 * Banner
 */

var pkg = require('./package.json');
var banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''
].join('\n');

/**
 * Paths
 */

var paths = {
  clean: [
    'static/js/myblog*.js',
    'static/css/*.css',
    'static/css/*.map',
    'docs/**',
    '!docs',
    '!docs/CNAME'
  ],
  js: [],
  lint: [
    'gulpfile.js'
  ],
  html: [
    'docs/**/*.html',
    '!docs/lib/**/*.html'   // ignore
  ],
  scss: [
    'scss/**/*.scss'
  ]
};

/**
 * Clean
 */

gulp.task('clean', function () {
  var del           = require('del');
  del(paths.clean);
});


/**
 * Process CSS
 */

gulp.task('styles', function () {
  var postcss      = require('gulp-postcss');
  var sourcemaps   = require('gulp-sourcemaps');
  var autoprefixer = require('autoprefixer');
  var cssnano      = require('cssnano');
  var sass         = require('gulp-sass');

  var processors = [
    autoprefixer({ browsers: ['last 2 versions'] }),
    cssnano({ safe: true })
  ];

  return gulp.src('scss/styles.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(gulp.dest('./static/css'))        // Save CSS here
    .pipe($.rename({ suffix: '.min' }))     // Add .min suffix
    .pipe(postcss(processors))
    // .pipe($.header(banner, { pkg : pkg }))  // Add banner
    .pipe($.size({ title: 'CSS:' }))        // What size are we at?
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('static/css/'));
});

/**
 * Build Highlight.js with the language packs needed.
 */

gulp.task('compile', function (cb) {
  exec('cd static/lib/highlight && node tools/build.js -t browser bash css dockerfile go json scss xml yaml', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb();  // finished task
  });
});

/**
 * Move results of Highlight.js build
 */

gulp.task('scripts', ['compile'], function () {
  gulp.src('static/lib/highlight/build/highlight.pack.js')
    .pipe(gulp.dest('./static/js'));
  return gulp.src('static/lib/highlight/src/styles/*.css')
    .pipe(gulp.dest('./static/css/highlight'));
});

/**
 * Process Images
 */

gulp.task('images', function () {
  return gulp.src('static/img/*.{png,jpg,gif}')
    .pipe($.changed('./static/img'))        // Only process new/changed
    .pipe($.imagemin({                      // Compress images
      progressive: true,   // JPG
      interlaced: true,    // GIF
      svgoPlugins: [{ removeViewBox: false }],  // SVG
      use: [pngcrush()]    // PNG
    }))
    .on('error', console.error)
    .pipe(gulp.dest('./static/img'));      // Write processed images
});

/**
 * JSHint Files
 */

gulp.task('lint', function () {
  return gulp.src(paths.lint)               // Read .js files
    .pipe($.jshint())                       // lint .js files
    .pipe($.jshint.reporter('jshint-stylish'));
});

/**
 * JSCS Files
 */

gulp.task('jscs', function () {
  return gulp.src(paths.lint)               // Read .js files
    .pipe($.jscs())                         // jscs .js files
    .on('error', function (e) {
      $.util.log(e.message);
      $.jscs().end();
    })
    .pipe(terminus.devnull({ objectMode: true }));
});

/**
 * Hugo
 */

gulp.task('hugo', function (cb) {
  return exec('hugo', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb();  // finished task
  });
});

/**
 * Validate HTML
 */

gulp.task('htmlhint', function () {
  return gulp.src(paths.html)
    .pipe($.htmlhint())
    .pipe($.htmlhint.reporter());
});

/**
 * HTML Minify
 */

gulp.task('htmlminify', function () {
  return gulp.src(paths.html)
    .pipe($.htmlmin({
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeCommentsFromCDATA: true,
      removeOptionalTags: true,
      removeComments: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('./docs'));
});


/**
 * Service Worker Setup
 * See:
 *   https://github.com/GoogleChrome/sw-precache
 *   https://github.com/w3c/ServiceWorker/blob/master/explainer.md
 *   https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
 *   https://github.com/kappataumu/letsencrypt-cloudflare-hook
 *   http://kappataumu.com/articles/letsencrypt-cloudflare-dns-01-hook.html
 *   https://developers.google.com/web/updates/2015/10/splashscreen?hl=en
 *   https://www.chromestatus.com/samples
 *
 * This task will create app/service-worker.js, which your client
 * pages need to register before it can take control of your site's
 * pages. service-worker-registration.js is a ready-to- use script
 * to handle registration.
 *
 * Service workers will not work unless your site is served via ssl.
 * Since we are using github pages (which don't allow your own cert)
 * we will also use cloudflare so that we can have ssl.
 */

gulp.task('generate-service-worker', function (callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'docs';


  var config = {
    cacheId: pkg.name,
    // If handleFetch is false (i.e. because this is called from generate-service-worker-dev), then
    // the service worker will precache resources but won't actually serve them.
    // This allows you to test precaching behavior without worry about the cache preventing your
    // local changes from being picked up during the development cycle.
    handleFetch: false,
    logger: $.util.log,
    runtimeCaching: [{
      // See https://github.com/GoogleChrome/sw-toolbox#methods
      urlPattern: /runtime-caching/,
      handler: 'cacheFirst',
      // See https://github.com/GoogleChrome/sw-toolbox#options
      options: {
        cache: {
          maxEntries: 1,
          name: 'runtime-cache'
        }
      }
    }],
    staticFileGlobs: [
      // rootDir + '/css/**.css',
      // rootDir + '/**.html',
      // rootDir + '/images/**.*',
      // rootDir + '/js/**.js',
      rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'
    ],
    stripPrefix: rootDir + '/',
    // verbose defaults to false, but for the purposes of this demo, log more.
    verbose: false
  };

  swPrecache.write(path.join(rootDir, 'service-worker.js'), config, callback);

  // swPrecache.write(`${rootDir}/service-worker.js`), {
  //   staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
  //   stripPrefix: rootDir
  // }, callback);
});

/**
 * Git it!
 */

gulp.task('git', function (cb) {
  return exec('git pull && git add -A && git commit -m "update" && git push', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb();  // finished task
  });
});


/**
 * Default Task
 *   - Build all the things...
 */

gulp.task('default', function (cb) {
  runSequence(
    'clean',
    ['styles', 'images', 'lint', 'jscs'],  // , 'scripts'
    'hugo',
    'htmlminify',
    cb);
});

/**
 * Watch Task
 */

gulp.task('watch', function () {
  gulp.watch(paths.scss, ['styles']);
});
