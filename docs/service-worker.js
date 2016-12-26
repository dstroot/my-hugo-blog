/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2010/01/15/lessons-from-haiti---never-under-estimate-ease-of-use/index.html","a54fc3a13e1ef75f87faa82a4644db10"],["2010/01/15/lessons-from-haiti--never-under-estimate-ease-of-use/index.html","012ca24e63c4da0296d99d7c1b7cf409"],["2010/01/29/ipad-goes-corporate/index.html","dc6775f1e5935f88353907ed296727ed"],["2010/04/28/ipad-security-vulnerability-fingerprints/index.html","a237455070d81f9cf72ff16a237f57f1"],["2011/06/10/the-corporate-icloud/index.html","4efd647866eaeb5fa9861aa05c754a86"],["2011/12/22/the-corporate-icloud-part-2/index.html","40f636e8b5a61f7c1c0079f1d82cd2e2"],["2012/01/03/transparency-wins/index.html","bfd8caef2848edf46c87d593a0bd573b"],["2012/04/30/20.5-million-hits-a-day-using-an-amazon-micro-server-15-a-month-and-node.js/index.html","69dba35c4082c28d1223ad53e856d4f7"],["2012/05/02/apple-reaches-for-greatness-without-apology/index.html","70041a9b67c022edf5f2ecb0bbd42c5c"],["2012/10/11/tedx-orange-coast-2012/index.html","7b69e3894b0b68cab3764da24c114f11"],["2012/10/21/minority-report-and-big-data/index.html","054adb71bcbc53ff6f55faa976e02d54"],["2012/11/16/risk-mitigation-costs-too-much/index.html","313a819d1d33b9c6a9173892ba775be0"],["2013/07/25/hosting-your-blog-on-amazon-s3/index.html","01158d6123623ff53c0d950c57da4d22"],["2013/07/25/hosting-your-blog-on-s3/index.html","807aa6b710c32153103185dc79ddab31"],["2013/07/30/great-web-product-images-placeit/index.html","776699d614ba7d5b5829c88a53301ff1"],["2013/08/01/only-usain-bolt-looks-at-the-clock/index.html","d5f2405df49791b1730da46b50f5d700"],["2013/10/04/work-like-hell/index.html","74b0ec6de3f37b44975c199e91f22746"],["2013/10/15/intrinsic-bias/index.html","5adc7f7f818541482e51ea8b2b4cdd4a"],["2013/10/30/apples-astounding-capital-expenditures/index.html","f46fae371d4224b515b68cc2e3aac37e"],["2013/12/31/responsive-design-vs.-mobile-first/index.html","6803f773bbcfb8ce89e73caf15609a5b"],["2014/01/02/supercomputer-weather-visualization-in-a-browser/index.html","7c055093885d08c6c8efa000e9aa6048"],["2014/01/03/technology-adoption-curves-vs.-birth-year-and-life-expectancy/index.html","97837045733e05071e969b97ef638c01"],["2014/01/13/ny-fintech-community-is-thriving/index.html","c9bdb08aa66f7b3836acfd406f91cf59"],["2014/01/22/awkward-bill-gates-notices-jimmy-fallon-uses-a-mac/index.html","a2d5480c794f0ce6e1739aae6a1e7ad0"],["2014/01/22/billion-dollar-march-madness-bracket/index.html","8f069dec435a3364227fdade8fe8d024"],["2014/01/28/facebook-saves-a-billion-dollars-via-open-compute-designs/index.html","10d8fc6e1fc439bfb44caac391544db3"],["2014/02/01/fixing-windows-8/index.html","63982ae76716b5cc9e168cbc3c04247b"],["2014/02/07/a-soul-crushing-exercise/index.html","5e7e1f68b49462b83e75c1792c3f596a"],["2014/02/18/ipv6-gets-real/index.html","3720e0b0c6ba0594da9f6c9697900422"],["2014/02/24/happy-birthday-steve/index.html","c1bff6c3025c95324f647270bf30b512"],["2014/03/14/enterprise-search-2014/index.html","ca9a7361fa6fd00bdedea479e7f6a914"],["2014/05/05/virtual-machines-vs-containers/index.html","d3cd6de8c579b8249878f99d0a06dbd2"],["2014/06/29/coreos-thousands-of-machines-and-millions-of-docker-containers...-no-hypervisor-needed./index.html","5f2cb331a52deee27ecdd7d227e9226b"],["2014/07/01/from-open-government-to-open-corporation/index.html","690cfed1ea3cdaa5f210fafc5bf3091d"],["2014/08/12/usas-digital-playbook/index.html","8b65d5ff08c437407b69556743a2d747"],["2014/11/10/president-obamas-plan-for-a-free-and-open-internet/index.html","050c6b74c78b1f63144ead93b3cccaaa"],["2015/01/13/keep-it-simple...-ux-design/index.html","3b27297f58e4a03d905c1f6feec35896"],["2015/01/22/make-big-bets/index.html","cce579991f2607b46c8cbe622794715c"],["2015/05/25/the-new-new-microsoft/index.html","33bbb444358b9a966f4d1c798e340b6b"],["2015/06/15/fintech-startups-tug-the-industry-forward/index.html","fb5e957c40db3cf9bfdd6504bfd4d38c"],["2015/09/06/why-automate-code-reviews/index.html","f9e1dabfda3a7a9966c5691c4030a43a"],["2015/09/26/is-it-secure/index.html","f476c2843a9c808fd042ac9b26b84a04"],["2015/10/03/proprietary-software-is-an-unsafe-building-material/index.html","5b925831c23a5484b244e7c5d9f58c91"],["2016/10/29/microsoft-surface-studio-is-mindblowing/index.html","d20f8cec31b7007f567f8dd942101f4b"],["2016/10/30/free-to-believe-anything/index.html","fe75749d97bc524a4fa89db49a746a46"],["2016/11/07/there-is-no-such-thing-as-not-voting/index.html","6e1ad8828043b5817e866c4ec9ec2f81"],["2016/11/16/if-you-are-in-san-francisco...-sfmoma/index.html","8fb7e1d4d13aaa787cd5350ad9dd9c02"],["404.html","fc2ec595d03a66b074fb67f66953a607"],["about/index.html","220f20aa5bbefcbed0758356addbf827"],["css/highlight/agate.css","7f28a9ef3dcc7caccff7db1a970c4146"],["css/highlight/androidstudio.css","fb012626bafd286510d32da815dae448"],["css/highlight/arduino-light.css","3ef21498e387f16a18d5c84a38f2fee4"],["css/highlight/arta.css","887a0bf6afa7d18345cca9efa953c5a6"],["css/highlight/ascetic.css","8261c76b2ccc05b5c30c8819dc00d0bc"],["css/highlight/atelier-cave-dark.css","f1dae0dbba7560c12248875443c74371"],["css/highlight/atelier-cave-light.css","9256fbbdfaff0072230520af192aad3f"],["css/highlight/atelier-dune-dark.css","391a079f58af65849adcfd9633977b73"],["css/highlight/atelier-dune-light.css","55742192acd0c1251d51501639d973d9"],["css/highlight/atelier-estuary-dark.css","91b58915eaf5e3963d33e025d611339b"],["css/highlight/atelier-estuary-light.css","102a02c63ee6e7a167fd4649fdea5520"],["css/highlight/atelier-forest-dark.css","16d819beb6b738e4d25e11a7a597e39d"],["css/highlight/atelier-forest-light.css","b13acbe66b59f8e8359fd5a71972047e"],["css/highlight/atelier-heath-dark.css","9893d785b025f568c0677850a352105e"],["css/highlight/atelier-heath-light.css","f29d5cacd0d706554b4ad76a28e264a9"],["css/highlight/atelier-lakeside-dark.css","f0f1440ca9806a40e30313e22020ba89"],["css/highlight/atelier-lakeside-light.css","41b8800ab750ac31e518662a65d50f5f"],["css/highlight/atelier-plateau-dark.css","a19508e88383a760eb6b24d10397942c"],["css/highlight/atelier-plateau-light.css","2dc4b0714cbfa90a6fc7961969e0d497"],["css/highlight/atelier-savanna-dark.css","330e555af80e73b85f274a1d863b3f8b"],["css/highlight/atelier-savanna-light.css","cd192c5e7fbc7016519c60d48f66163b"],["css/highlight/atelier-seaside-dark.css","c16263748102028fb7255965bb6b41eb"],["css/highlight/atelier-seaside-light.css","63b489d3b2eb3b47e05afdeb16c10d22"],["css/highlight/atelier-sulphurpool-dark.css","99e131428f8d3b64e544c95adf233362"],["css/highlight/atelier-sulphurpool-light.css","bed6547f425e1e107f48ea32ec5997f1"],["css/highlight/atom-one-dark.css","e04d3287a76f861ed154658b42210d11"],["css/highlight/atom-one-light.css","3f9c7dcab0b31d9be9a2a2f3b83b8012"],["css/highlight/brown-paper.css","a930babb854f14289e9478057d02b9ea"],["css/highlight/codepen-embed.css","b94ddd27ed9b5ee64cd7d2cf69971d9a"],["css/highlight/color-brewer.css","0d7683a0a7a61c4b6a9ab6cdd16d52c4"],["css/highlight/darcula.css","f9623bae84c777825530f258b5cc3db9"],["css/highlight/dark.css","b3ac3eb7d91ebc25946f13897cd54e5e"],["css/highlight/darkula.css","64ee4b42047005efd6b45fa9ef2ba08a"],["css/highlight/default.css","db8ce58adfb1b685bd575fb9395d5ddb"],["css/highlight/docco.css","732506eba1c4a6752b7847358aaa2070"],["css/highlight/dracula.css","9612f9a1a214540e0e006d6231f11e2b"],["css/highlight/far.css","0e2fb50b6cc56c032ccc6bd482568068"],["css/highlight/foundation.css","71dac932272c550cf0e10faf2140876f"],["css/highlight/github-gist.css","c026a94dab146076149d9ef29595aeee"],["css/highlight/github.css","bf6c14925e66edb1526b6c9489b3c042"],["css/highlight/googlecode.css","a6c3e3d282eff14600ac0e1b8e495419"],["css/highlight/grayscale.css","6421024db18cc169592c8c3572da6a6a"],["css/highlight/gruvbox-dark.css","0b9af0515eaadb6f3495e71e97afb775"],["css/highlight/gruvbox-light.css","26be44ab273eb7e58a64a7e251a57160"],["css/highlight/hopscotch.css","23d32658b74128ba7ce9eb3cee79e889"],["css/highlight/hybrid.css","80b6f0c55c156f49216935f0648303d0"],["css/highlight/idea.css","74e2ebedfeee50ee3c8f9de23d271d1c"],["css/highlight/ir-black.css","69136cd05c4071f33526fbbef6a065fb"],["css/highlight/kimbie.dark.css","f4a1c8c40077e5b549cfb6e093c79607"],["css/highlight/kimbie.light.css","a3ce8b7a8dc2c830ca5cf6beec6c305a"],["css/highlight/magula.css","6a66369d1ba8339c89d9346584a5cfca"],["css/highlight/mono-blue.css","24cb5263fcdd1c70c3030baf887356e9"],["css/highlight/monokai-sublime.css","0c8b4c0e8a584e7142b08d914644cd9d"],["css/highlight/monokai.css","ad2b15c2189d3cdedbd68a1668bd1a52"],["css/highlight/obsidian.css","a153d314a30c1bf56a667f64891bf044"],["css/highlight/ocean.css","801c05eb37c92c65a173298c376adff2"],["css/highlight/paraiso-dark.css","23225068974ac9c4975f3a7dee4bd0dc"],["css/highlight/paraiso-light.css","cef05b6b5b147da65ed777d544b46a26"],["css/highlight/pojoaque.css","098bd1ae7b9956fe3f134a01f0144daa"],["css/highlight/purebasic.css","2d5d3ab76c6c3a2b308ca0bc71009cec"],["css/highlight/qtcreator_dark.css","36e7bda0ef39f396cd88fb319016b1b8"],["css/highlight/qtcreator_light.css","04c1d5880d03d4a21b9998286e6fbeeb"],["css/highlight/railscasts.css","b4f8ae4bf950f9f9b496d997b63cb0d5"],["css/highlight/rainbow.css","c89d491aca4854e11d180be0e6db0108"],["css/highlight/school-book.css","b1c0e6ad217403971d33eefb4478aad7"],["css/highlight/solarized-dark.css","82ff075b2124d9b007ac4caf40f8d3a9"],["css/highlight/solarized-light.css","5a0ca255fce9de83dde16a0f27d788fe"],["css/highlight/sunburst.css","8080a738bd7872fa6057be63c871b564"],["css/highlight/tomorrow-night-blue.css","e9b96cc5dfe48bfcf9e25f6ce6058d20"],["css/highlight/tomorrow-night-bright.css","b08807e46c95ad4737cfc54974327557"],["css/highlight/tomorrow-night-eighties.css","feb9048a966c65eb3b0bfee2cce720fd"],["css/highlight/tomorrow-night.css","d372a77090f6a07251dfce573d121ee2"],["css/highlight/tomorrow.css","8662c2c36baa70886e0dc5bedecabadd"],["css/highlight/vs.css","16693ba77ee7403d1a75594dc134235f"],["css/highlight/xcode.css","994ccc71a8d23d56a3bb90766b4e2784"],["css/highlight/xt256.css","4a4c814919b0109dd837458276cf3307"],["css/highlight/zenburn.css","28d5b9497037a12cb5a15644fea2f1c3"],["css/styles.css","eea6af630f2679f90750316efad60a76"],["css/styles.min.css","b987a63de7f4c45e1057d29b4f2648c9"],["favicon.png","a39490ed7c379d13b082338e3eaa1f9e"],["fonts/icomoon.eot","adb7107ca257d406adbe4767e0b7031e"],["fonts/icomoon.svg","a77f2ed4a728da2fdac0d8dafbf98842"],["fonts/icomoon.ttf","520bbfbaec72753976a5c3dddf3eb6da"],["fonts/icomoon.woff","2e42509121803fccaa9091966edb4103"],["img/3d-printing.jpg","ab36751edd35ce8fe893fe1b52f9cf9d"],["img/AdoptioRatesofTech.png","c3523652b07137e15d60757987d3c671"],["img/CloudFront_Management_Console.png","20a091f4d3c075ce4308af1e9dbb7bd8"],["img/Google_Enterprise_Search.png","2c44bbd4ee38c09ce3ad99b8e6624945"],["img/IPv6-google.jpg","ede07636c784d30e47fa61e56bdec785"],["img/SmartCarLock.png","e90ee306f24dfb2437d7d69f38dda9ee"],["img/SteveJobsCloseUp-lg.jpg","2c34ff6d9f259d6d65ef3d873f6869bd"],["img/SteveJobsCloseUp.jpg","9b391ee2bce058b14f0bb83f50b2b3c5"],["img/Surface_Pro_3.png","d8eb260734e970b2b5024b9d0586b1f9"],["img/Surface_Studio.jpg","ace735bd6967d2a7ae6fb66ef42ecfd4"],["img/Surface_Studio2x.jpg","4fd4f30153b77945b3a280cb4c413cdb"],["img/TEDx-logo-lg.jpg","72c10eb66c8f84fa6306f892a1f54a7b"],["img/TEDx-logo.jpg","15a1b4c1bdb2101264ac628c89150408"],["img/USDS_Playbook.png","ff97b266eb6b7612c951e2e781719017"],["img/Usain-Bolt-Opt.jpg","844787db740aed804073983b9521eb9f"],["img/VICTORIA_BECKHAM.png","a5e11ae3a20b6cfeacdbef604a4817a9"],["img/adoption_curve.jpg","0117548cbe5a16d4b50e08d691c8d3b1"],["img/adoption_curve_lg.jpg","68c93a9787a292966737921095348dcc"],["img/african_children.jpg","be1697877b8e11ee7b411b9ccf430775"],["img/badge-pattern-bg.png","07c83dde76c570c7be46d5bfc3f896b1"],["img/bias.jpg","7de58d375fae1f40e8324fc0e513fcf5"],["img/billgates.jpg","92356ea061ef9979a9143c48f873c4d1"],["img/billguard.png","a5cb0180a19fd566c5f8c15732332819"],["img/bing-bg-01.jpg","919e4196e4d76a4d4f4372e2616bf741"],["img/blog.jpg","a4e940d3f7e72a8e5e3c85cb55632f49"],["img/breezi_placeit.png","f79c79cb443c60e43165dae46eba772a"],["img/breezi_placeit2.jpg","e8fcf850ddd154a2360312cf88230aa4"],["img/breezi_placeit2.png","5ff2ec2639d8228ad4788e88a7ee685c"],["img/coffee.gif","938693c69ebf6d82f4167b1e8bb4e7c7"],["img/comic.png","fdf7efae64169f4b050f38bb10fee6a6"],["img/commandlinetools.png","33ba8c354c2869494fe96568ddfb5f28"],["img/computer-woman.jpg","8255af69859c5c419fc4db45093742d1"],["img/confused_ape.jpg","ca5494036dd3b0cd7d5ecaab7082784f"],["img/coreos-action.png","edbdc488a2308802a5579652600b0091"],["img/coreos-logo.png","b3edb62c7d5427ed66f42e8e330ef8b3"],["img/data_catalog.png","f84d06193804277873b136d20ac157b0"],["img/data_gov.png","0cd02381da55e193dd7f5845284aff45"],["img/dfw.jpg","e0a8b243aee14234141d6cd0356c41c3"],["img/docker.png","8062590f89bf19de439f6d10bafe896e"],["img/dockervsvm.png","23ace80d79a66757473942d5a56be610"],["img/earth_wind_map-lg.jpg","79c171444863e821f6a437e7acc97fdc"],["img/earth_wind_map.jpg","5b7b83c9358e555cc7398d1353d99cfe"],["img/earth_wind_map.png","e0547bb781e3256ef9fa6491a19f0c29"],["img/edison.jpg","44937edd250d6af742917f0c4c55d949"],["img/elon-musk-lg.jpg","66648a4cec1871fbe153a28fc5f431fa"],["img/elon-musk.jpg","d2ee477286c20d2018b206aef021d5a7"],["img/fb-server.jpg","12f9618af9d97c6994214ca3beca08c3"],["img/goals.png","888a910b5acab6e5bec70ab255df69d1"],["img/goals_metric.png","e2fc7ba361217ef2d223e074d731caf1"],["img/google_docs.jpg","95a571a5a5beff1122e21eccae2aa601"],["img/grey_background_bg.jpg","a7c95942e8fa508e81f1bd85eac81df9"],["img/haiti.jpg","683838d1ee0c416ad24ef2c6cb658beb"],["img/iSpaceship.jpg","608584282df0333919cc7c4f62128582"],["img/icloud.jpg","7d45c2463b682df2e7856799cf109b41"],["img/icloud2.jpg","1354cfdd766573de7d33418adfdc664d"],["img/iphone5.png","7d172e8d260c1f17b93b368dc5768071"],["img/iron_man.png","db2e5c48c84bda8a3ad5e9c3984794a3"],["img/krochet-kids.jpg","bff533978bc3ca55308c086c39d98dbd"],["img/macbook_air.png","e7469cdc34f354d456a4215cdbb6df8d"],["img/man-tablet.jpg","d3cbd2e51410d7d0760f4b6e1353fab0"],["img/minorityreport.jpg","f43c78e18b8bcb12713369caf35f08dd"],["img/ncaa-brackets.jpg","d05d4ea679ba75923746c119e36933ae"],["img/new-ui.jpg","f5334163b30ab3f2411a43aa1a25954e"],["img/not_me.jpg","b2a9e39e038265ce3010af258da152f8"],["img/not_me_@2x.jpg","ee53412b4dd0286f1fc8a46134d859b9"],["img/notme.jpg","cc7dcf35dd24a24634a8a41915528569"],["img/notme_@2x.jpg","d2098e95208b792936fe96684edf9aeb"],["img/obama_internet.png","ec5e978e8b40f046fb2e19075138fe9e"],["img/open_data.png","cebe7c8fb46a917d58593f88b9745aa8"],["img/prime-air.jpg","4f1021486857cadda289784b51ec86bc"],["img/satya-nadella-microsoft-ceo.jpg","86cfc6afe36b9170afaaee8fc9a0c199"],["img/sfmoma.jpg","5ad89b5d3be5c9976d774e2644f07856"],["img/skeleton-sm.jpg","3b0fc61e1736c44427f77f516224542f"],["img/skeleton.png","90af912ae5cc7ec6070b7cb93e616274"],["img/socrata.png","3d12ea931d3069df4da971799762aab1"],["img/soulcrushing.jpg","5a9e6778650adfbe0c486df3b6545aa6"],["img/tumblr_mg8vidU2tJ1s2fq15o1_1280.jpg","3ecbe7b39db507a0fa097725705b3bab"],["img/tumblr_this-is-the-thyme.gif","938693c69ebf6d82f4167b1e8bb4e7c7"],["img/volkswagen.jpg","43f15d6f9a0c191315b854d0bc3fbc06"],["img/what.gif","aa8a709dc22707cf77541fa8425cb43b"],["img/windows8.jpg","ed521c65a17bc0a91385cea879c2f612"],["index.html","fb960d73e2824130e352fcd6fcf1b70a"],["js/highlight.pack.js","c41f2bf6c781ef1bd24720bf67e5e0a4"],["js/loadjs.min.js","4cafb6974ea866946c0defb86bdb02e9"],["js/service-worker-registration.js","3448a74b245edc5121c18dac382d780c"],["launcher-icon-0-75x.png","16c9271fb11dcf56d22693070eaf7e44"],["launcher-icon-1-5x.png","a2a5566874d24aea1ae2c945ba99e0ca"],["launcher-icon-1x.png","7275d173c3eb54cf6ad0e6b8a3215622"],["launcher-icon-2x.png","8c34077503e2c6d8acedd34d06ebb3c7"],["launcher-icon-3x.png","408812183c6f630c5eec0744b17a799d"],["launcher-icon-4x.png","568c24e87c49d9a265f15f9399788b71"],["lib/highlight/build/demo/demo.js","5705082670d50519d5d304c13930c1fc"],["lib/highlight/build/demo/index.html","ed7f9d1fe87ba536fe1295b4cf2fc9e1"],["lib/highlight/build/demo/jquery-2.1.1.min.js","e40ec2161fe7993196f23c8a07346306"],["lib/highlight/build/demo/perfect-scrollbar.min.css","e25fee33c48bcb44cd01e59fb5669886"],["lib/highlight/build/demo/perfect-scrollbar.min.js","4c100a4d63c4e117bb6b269dcc5fc01a"],["lib/highlight/build/demo/style.css","90980746ad8d4dac0c39c9978d19ac5c"],["lib/highlight/build/demo/styles/agate.css","1b2f14d59b0bd1393f7974da89724107"],["lib/highlight/build/demo/styles/androidstudio.css","756ddc975a329a15c3b00342ef1f1ad1"],["lib/highlight/build/demo/styles/arduino-light.css","2e4660a0d923e3b7b35f25eb9d8bcfd7"],["lib/highlight/build/demo/styles/arta.css","99add1fb3bc79053b2449c66bf95d262"],["lib/highlight/build/demo/styles/ascetic.css","e11906a3b9cb8372ccf116ce9dd7b5b1"],["lib/highlight/build/demo/styles/atelier-cave-dark.css","396f1fc6c2a27951589d77e1701108c5"],["lib/highlight/build/demo/styles/atelier-cave-light.css","0bef73cd2b70b26809160ed2e3af647f"],["lib/highlight/build/demo/styles/atelier-dune-dark.css","81e297e5400542f4405b9c45c074102a"],["lib/highlight/build/demo/styles/atelier-dune-light.css","28770d71d07493061e0ce2ba0327b727"],["lib/highlight/build/demo/styles/atelier-estuary-dark.css","4a10fa7a86e7896ce0db8219c9b238a4"],["lib/highlight/build/demo/styles/atelier-estuary-light.css","5fa5a1043595f90e9a3cd7680f638259"],["lib/highlight/build/demo/styles/atelier-forest-dark.css","78c22ac882d2fd640ec1cde18830095b"],["lib/highlight/build/demo/styles/atelier-forest-light.css","419b87113b95401924e3c081a3198f8d"],["lib/highlight/build/demo/styles/atelier-heath-dark.css","c1fd04def40efff79bbcf6c534fdf5d2"],["lib/highlight/build/demo/styles/atelier-heath-light.css","5dec0881f95de58b4c851e479b300c6a"],["lib/highlight/build/demo/styles/atelier-lakeside-dark.css","80394765a2c350f5da8b0c96446b367e"],["lib/highlight/build/demo/styles/atelier-lakeside-light.css","a58e9759370524b93893eb6178f56399"],["lib/highlight/build/demo/styles/atelier-plateau-dark.css","d06841263b9533e73ed5d60eea9b270c"],["lib/highlight/build/demo/styles/atelier-plateau-light.css","fca6fb773e6728ec6633730df4e6a3ae"],["lib/highlight/build/demo/styles/atelier-savanna-dark.css","9b3582bf114475b7bdfb5761553153f1"],["lib/highlight/build/demo/styles/atelier-savanna-light.css","e5f17f967858be91ca4912e40fb329b0"],["lib/highlight/build/demo/styles/atelier-seaside-dark.css","b8d33b937f6e16a1bdf2e00cba4f5605"],["lib/highlight/build/demo/styles/atelier-seaside-light.css","469358aec89523ec9c5087bbb7539b76"],["lib/highlight/build/demo/styles/atelier-sulphurpool-dark.css","e4223d70efd0bddfeb848487c1f9c6dc"],["lib/highlight/build/demo/styles/atelier-sulphurpool-light.css","44c84ed3a622208f301a9f51860d6a60"],["lib/highlight/build/demo/styles/atom-one-dark.css","5379dff7fda6f38afafc6789c5035953"],["lib/highlight/build/demo/styles/atom-one-light.css","960c455e3f2b21ead75ca4b903a61c24"],["lib/highlight/build/demo/styles/brown-paper.css","7fd79f7fa30ce2a7d9d16f49fecd9026"],["lib/highlight/build/demo/styles/brown-papersq.png","82cd9f5d6e9f0e3f3de24eaab6671d88"],["lib/highlight/build/demo/styles/codepen-embed.css","ef0bde64b9a07549660de38e993bfa29"],["lib/highlight/build/demo/styles/color-brewer.css","556abf31c8638a18d607a5cd9736b8af"],["lib/highlight/build/demo/styles/darcula.css","8a6072619645538993a1698c2b7de1ee"],["lib/highlight/build/demo/styles/dark.css","9ba070bae213795c76bbed5708bdc12d"],["lib/highlight/build/demo/styles/darkula.css","14a5918aada89aa79073a7068bf1dca9"],["lib/highlight/build/demo/styles/default.css","5133d11fbaf87d3978cf403eba33c764"],["lib/highlight/build/demo/styles/docco.css","1b42e416916f5910140542fa01466a90"],["lib/highlight/build/demo/styles/dracula.css","5dc02981c13f47a59ced8fc2a0805e9a"],["lib/highlight/build/demo/styles/far.css","c7d511dfea92a5d7e484f35d05f76c77"],["lib/highlight/build/demo/styles/foundation.css","16f78b69a9c240d61381e377c72308e4"],["lib/highlight/build/demo/styles/github-gist.css","9fc965431b1efbbe70958daf332c71ba"],["lib/highlight/build/demo/styles/github.css","943b6142495d52350f5638d61e859da4"],["lib/highlight/build/demo/styles/googlecode.css","237d8647baa1c5cb17c230fb08dbee7a"],["lib/highlight/build/demo/styles/grayscale.css","02716e0cfdd4163533e038c2eaed3c9b"],["lib/highlight/build/demo/styles/gruvbox-dark.css","7fde3db6b5255bcd75ff02a643ef7d5d"],["lib/highlight/build/demo/styles/gruvbox-light.css","93158f185c5edb186544397c69e55e32"],["lib/highlight/build/demo/styles/hopscotch.css","11d3ef4ec8c4cba36eb4360e25e2b6c6"],["lib/highlight/build/demo/styles/hybrid.css","84560a1973a73368225eae295d6fe355"],["lib/highlight/build/demo/styles/idea.css","22977fd061bee5aae68639b49162c4c5"],["lib/highlight/build/demo/styles/ir-black.css","c3ebd6946b250f145558e0390d26e6bd"],["lib/highlight/build/demo/styles/kimbie.dark.css","f3dd5fc452d8554bfb656892c06a8df7"],["lib/highlight/build/demo/styles/kimbie.light.css","8a3a257353bb28ee467c0039ba3a1995"],["lib/highlight/build/demo/styles/magula.css","f52b8dd4c813d30c39a0a28dce1796ad"],["lib/highlight/build/demo/styles/mono-blue.css","592543600c48e7321e6c210c5bcf0391"],["lib/highlight/build/demo/styles/monokai-sublime.css","2bd355b6557c287e187e95122cedf766"],["lib/highlight/build/demo/styles/monokai.css","78231e40f7b9c5c300a046376aab3093"],["lib/highlight/build/demo/styles/obsidian.css","80b7e6053e84ceec2dc1684486de2371"],["lib/highlight/build/demo/styles/ocean.css","b3b7672b48fec21ad76a8cb595294861"],["lib/highlight/build/demo/styles/paraiso-dark.css","4cb8c139c36b053bc7ecef3449636e00"],["lib/highlight/build/demo/styles/paraiso-light.css","bda4b072e6fe97591c83789aa01b51ee"],["lib/highlight/build/demo/styles/pojoaque.css","2703242fa3eeea9bd0306fe264fda8ff"],["lib/highlight/build/demo/styles/pojoaque.jpg","8c391d520d67f644c146dcfaee1eb25f"],["lib/highlight/build/demo/styles/purebasic.css","3eae6db8bc98d5de4666b83f06d03978"],["lib/highlight/build/demo/styles/qtcreator_dark.css","b529dd896b95337af800636a5432ae0e"],["lib/highlight/build/demo/styles/qtcreator_light.css","1974a4376b1094aa6d34d24233587cc5"],["lib/highlight/build/demo/styles/railscasts.css","c9b1a62e9a8089347476da33f8c336ee"],["lib/highlight/build/demo/styles/rainbow.css","76c1138423bacc6324b267be39a55493"],["lib/highlight/build/demo/styles/school-book.css","fb698b60a08950015ef0afeb8a2fc7b4"],["lib/highlight/build/demo/styles/school-book.png","069f91d8694b98ca01fb750760f1563d"],["lib/highlight/build/demo/styles/solarized-dark.css","f4e20c4f5e211150ceda8709fd25f808"],["lib/highlight/build/demo/styles/solarized-light.css","9af29c6cb4ace2c2062f6d421f7553aa"],["lib/highlight/build/demo/styles/sunburst.css","055f4f31724df8954e61148904c278a5"],["lib/highlight/build/demo/styles/tomorrow-night-blue.css","fb09f918395f4b3168f05fcb52aa8cef"],["lib/highlight/build/demo/styles/tomorrow-night-bright.css","233b7f7257890f7970976ba36182ff1c"],["lib/highlight/build/demo/styles/tomorrow-night-eighties.css","8c6b1b07b07dbd5f2159c1545df17654"],["lib/highlight/build/demo/styles/tomorrow-night.css","5807a79f6adee1da80bc7d3bda73d11c"],["lib/highlight/build/demo/styles/tomorrow.css","868c5f3808696aae50b47ebe9198bd66"],["lib/highlight/build/demo/styles/vs.css","5398bac30348e70f4dad5bf75e798c0b"],["lib/highlight/build/demo/styles/xcode.css","b57cd70bbb554ff824064fbda5f8a8d7"],["lib/highlight/build/demo/styles/xt256.css","1a7c178525b144003eca042c63194fe4"],["lib/highlight/build/demo/styles/zenburn.css","ad6a19aa0dd641060d8b31ed7cec6f2a"],["lib/highlight/build/highlight.pack.js","c41f2bf6c781ef1bd24720bf67e5e0a4"],["page/1/index.html","bc91699c274a67b16fe7465bc1f02b65"],["page/2/index.html","50639f45bcf840bc05eb0d350e64f64d"],["page/3/index.html","ebbb462b7c6887b420401277721c3f5f"],["page/4/index.html","af4bb350def9deeb412560e19c0d75c0"],["page/5/index.html","b2c2b1e82bc9cca46edbd753925f69a8"],["page/6/index.html","a288df60f396cd15b61bea99358e9860"],["page/7/index.html","242c7facb46ba564d0f591c2ffe28a7f"],["page/8/index.html","af3da856621a8fbd12b494a55e15457c"],["page/9/index.html","f10b9286c5b0ba2e92d1febd691cda13"],["post/index.html","84f9b2438ee9123503350e0b9b0da65f"]];
var cacheName = 'sw-precache-v2-myblog-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||d.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||d.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||d.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||d.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);l=l?l.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),d.preCacheItems=d.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var l,d=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){return t?t:o.fetchAndCache(e,n)})})}var o=e("../helpers");t.exports=r},{"../helpers":1}],8:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e)})}var o=e("../helpers");t.exports=r},{"../helpers":1}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var o,s,a=[];if(c){var u=new Promise(function(n){o=setTimeout(function(){t.match(e).then(function(e){e&&n(e)})},1e3*c)});a.push(u)}var f=i.fetchAndCache(e,n).then(function(e){if(o&&clearTimeout(o),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return a.push(f),Promise.race(a)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e){for(var t,n=[],r=0,o=0,i="";null!=(t=x.exec(e));){var c=t[0],s=t[1],a=t.index;if(i+=e.slice(o,a),o=a+c.length,s)i+=s[1];else{var f=e[o],h=t[2],p=t[3],l=t[4],d=t[5],g=t[6],m=t[7];i&&(n.push(i),i="");var v=null!=h&&null!=f&&f!==h,w="+"===g||"*"===g,y="?"===g||"*"===g,b=t[2]||"/",E=l||d||(m?".*":"[^"+b+"]+?");n.push({name:p||r++,prefix:h||"",delimiter:b,optional:y,repeat:w,partial:v,asterisk:!!m,pattern:u(E)})}}return o<e.length&&(i+=e.substr(o)),i&&n.push(i),n}function o(e){return s(r(e))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(m(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){for(var o=r(e),i=g(o,n),c=0;c<o.length;c++)"string"!=typeof o[c]&&t.push(o[c]);return f(i,t)}function g(e,t){t=t||{};for(var n=t.strict,r=t.end!==!1,o="",i=e[e.length-1],c="string"==typeof i&&/\/$/.test(i),s=0;s<e.length;s++){var u=e[s];if("string"==typeof u)o+=a(u);else{var f=a(u.prefix),p="(?:"+u.pattern+")";u.repeat&&(p+="(?:"+f+p+")*"),p=u.optional?u.partial?f+"("+p+")?":"(?:"+f+"("+p+"))?":f+"("+p+")",o+=p}}return n||(o=(c?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=r?"$":n&&c?"":"(?=\\/|$)",new RegExp("^"+o,h(t))}function m(e,t,n){return t=t||[],v(t)?n||(n={}):(n=t,t=[]),e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=m,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=g;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/runtime-caching/, toolbox.cacheFirst, {"cache":{"maxEntries":1,"name":"runtime-cache"}});




