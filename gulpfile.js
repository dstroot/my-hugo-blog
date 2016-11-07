/* jshint node: true */
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
var pagespeed     = require('psi');
var exec          = require('child_process').exec;
var critical      = require('critical');

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
  js: [
    // Highlight JS
    'static/lib/highlight/src/highlight.js',
    'static/lib/highlight/src/languages/bash.js',
    'static/lib/highlight/src/languages/css.js',
    'static/lib/highlight/src/languages/dockerfile.js',
    'static/lib/highlight/src/languages/go.js',
    'static/lib/highlight/src/languages/javascript.js',
    'static/lib/highlight/src/languages/json.js',
    'static/lib/highlight/src/languages/scss.js',
    'static/lib/highlight/src/languages/xml.js',
    'static/lib/highlight/src/languages/yaml.js'
  ],
  lint: [
    'static/js/*.js',
    'gulpfile.js'
  ],
  html: [
    'docs/**/*.html',  // TODO     'docs/**/*.html',
    '!docs/lib/**/*.html'   // ignore
  ],
  css: [
    'assets/css/myblog.css',               // Main CSS file built from main.less
    'assets/css/font-awesome.css',         // Font Awesome Fonts
    'assets/css/pygments-manni.css'        // Code syntax highlighting
  ],
  scss: [
    'scss/**/*.scss'
  ]
};

/**
 * Clean
 */

gulp.task('clean', function () {
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
    autoprefixer({browsers: ['last 2 versions']}),
    cssnano({safe: true}),
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
 * Process Scripts
 */

// gulp.task('scripts', function () {
//   return gulp.src(paths.js)                 // Read .js files
//     .pipe($.concat(pkg.name + '.js'))       // Concatenate .js files
//     .pipe(gulp.dest('./static/js'))         // Save main.js here
//     .pipe($.rename({ suffix: '.min' }))     // Add .min suffix
//     .pipe($.uglify({ outSourceMap: true })) // Minify the .js
//     .pipe($.header(banner, { pkg : pkg }))  // Add banner
//     .pipe($.size({ title: 'JS:' }))         // What size are we at?
//     .pipe(gulp.dest('./static/js'))         // Save minified .js
//     .pipe($.livereload());                  // Initiate a reload
// });

gulp.task('scripts', function (cb) {
  return exec('cd static/lib/highlight && node tools/build.js -t browser bash css dockerfile go json scss xml yaml', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb();  // finished task
  });
});

/**
 * Move results of Highlight build
 */

gulp.task('move', function (cb) {
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
  exec('hugo', function (err, stdout, stderr) {
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
 * Inline Critical CSS
 */

gulp.task('copystyles', function () {
  return gulp.src(['assets/css/myblog.css'])
    .pipe($.rename({
      basename: 'site' // site.css
    }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('critical', ['copystyles'], function () {
    critical.generateInline({
        base: '_site/',
        src: 'index.html',
        // css: ['_site/assets/css/myblog.css'],
        styleTarget: 'assets/css/main.css',
        htmlTarget: 'index.html',
        width: 1000,
        height: 1000,
        minify: true
      });
  });

/**
 * Upload to S3
 */

gulp.task('s3', function (cb) {
  exec('s3_website push', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);  // finished task
  });
});


// var s3 = require('gulp-s3-upload')({
//   key:       process.env.S3_ID,
//   secret:    process.env.S3_SECRET
// });
//
//
// gulp.task('s3', function() {
//   gulp.src('./_site/**/*.*')
//   .pipe(s3({
//     bucket: 'danstroot.com', //  Required
//     acl:    'public-read'    //  Optional ACL permissions, defaults to public-read.
//   }));
// });


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
 * Build Task
 *   - Build all the things...
 */

gulp.task('default', function (cb) {
  runSequence(
    'clean',
    ['styles', 'scripts', 'images'],
    'hugo',
    'htmlhint',
    'htmlminify',
    cb);
});

/**
 * Default Task
 */

gulp.task('watch', ['build'], function () {
  gulp.watch(paths.scss, ['styles']);
});
