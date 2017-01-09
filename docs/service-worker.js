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

var precacheConfig = [["2010/01/15/lessons-from-haiti--never-under-estimate-ease-of-use/index.html","33dda4b891a3cd995b60d65d75c3680d"],["2010/01/29/ipad-goes-corporate/index.html","85073f78ed3db369df9141dcfa279d6c"],["2010/04/28/ipad-security-vulnerability-fingerprints/index.html","79af9ddf30a8521298e6bdb30c0995b9"],["2011/06/10/the-corporate-icloud/index.html","98c33dbd7f11820c4ce042d0c19c8fcc"],["2011/12/22/the-corporate-icloud-part-2/index.html","0a4a06815e8a913b413ab26aadb6a3f9"],["2012/01/03/transparency-wins/index.html","40108277503aa64e64c30e1059d8dcda"],["2012/04/30/20.5-million-hits-a-day-using-an-amazon-micro-server-15-a-month-and-node.js/index.html","d93c16bb87fd4e443883e7884577fba7"],["2012/05/02/apple-reaches-for-greatness-without-apology/index.html","b9e2dc017a6f36444ab6633dfc58ec2f"],["2012/10/11/tedx-orange-coast-2012/index.html","f5c875a99c739f951ffe3b7a8bc406ad"],["2012/10/21/minority-report-and-big-data/index.html","a9652d1b83ad69a44a409fd741da48b8"],["2012/11/16/risk-mitigation-costs-too-much/index.html","058ccadcbb2726b4d6db0ae10b93f12d"],["2013/07/25/hosting-your-blog-on-amazon-s3/index.html","e201e2c1906d3e38046d9ba97d2b49b4"],["2013/07/30/great-web-product-images-placeit/index.html","20ccdff256c694d62c418101f2192e74"],["2013/08/01/only-usain-bolt-looks-at-the-clock/index.html","5db5307b591b501f62f67ca155f7c7e9"],["2013/10/04/work-like-hell/index.html","3de7ef8e80deff2f2b13f4f40924a890"],["2013/10/15/intrinsic-bias/index.html","b86242590b786a2aa028d30a09630668"],["2013/10/30/apples-astounding-capital-expenditures/index.html","a798a2a9a83cc0719748a7267b7fc920"],["2013/12/31/responsive-design-vs.-mobile-first/index.html","ea36ce6d692363b90b82c63528e9cfb1"],["2014/01/02/supercomputer-weather-visualization-in-a-browser/index.html","fb8023766d65520c0dd8fb80539181ad"],["2014/01/03/technology-adoption-curves-vs.-birth-year-and-life-expectancy/index.html","2b6c3a93a3f616d6e5aebbf96dd7be68"],["2014/01/13/ny-fintech-community-is-thriving/index.html","403a048085566a0564aae27d4ed21a49"],["2014/01/22/awkward-bill-gates-notices-jimmy-fallon-uses-a-mac/index.html","19d81f8121038910eb0ee1190dbc3bb9"],["2014/01/22/billion-dollar-march-madness-bracket/index.html","cbefbc893babb53bc493e8a826ebd784"],["2014/01/28/facebook-saves-a-billion-dollars-via-open-compute-designs/index.html","7912d1815f7b1e2951bc2cf5089aaac8"],["2014/02/01/fixing-windows-8/index.html","b859dd13c6478f52a5fdcecbd62c9563"],["2014/02/07/a-soul-crushing-exercise/index.html","81b83bd224af11884021e2c2f0f9f5ca"],["2014/02/18/ipv6-gets-real/index.html","3819fb5623a0690a2aad1d42cfc84ef1"],["2014/02/24/happy-birthday-steve/index.html","a11d865b80e3b906ccd2bf334b667bf1"],["2014/03/14/enterprise-search-2014/index.html","cb49bebd4840b8b7a312c6d9f616e4b4"],["2014/05/05/virtual-machines-vs-containers/index.html","daf1884a894842935a8c685928e7902a"],["2014/06/29/coreos-thousands-of-machines-and-millions-of-docker-containers...-no-hypervisor-needed./index.html","3772f946428781e8dc3544d192fae0f7"],["2014/07/01/from-open-government-to-open-corporation/index.html","aeda9c3a4289b285b5d1fd52aea22bfc"],["2014/08/12/usas-digital-playbook/index.html","eb684d87f2a5ad6c064cc60d066beb68"],["2014/11/10/president-obamas-plan-for-a-free-and-open-internet/index.html","73a8fdba5a43ff61701ede4c57ac3aaa"],["2015/01/13/keep-it-simple...-ux-design/index.html","33dff86e020db43fbc4b4fdaad002e6f"],["2015/01/22/make-big-bets/index.html","abd1efe160a41a5b0ce6a45a9a91d600"],["2015/05/25/the-new-new-microsoft/index.html","c5cabac8efe54313b33d0ce72effc02f"],["2015/06/15/fintech-startups-tug-the-industry-forward/index.html","6989e6819ecb64b1a5b52db2618655cc"],["2015/09/06/why-automate-code-reviews/index.html","89154ddd6057775153276bcd2c60eec5"],["2015/09/26/is-it-secure/index.html","ed2e80e32e2b45f751b82e3727f15367"],["2015/10/03/proprietary-software-is-an-unsafe-building-material/index.html","6643d51c9aee28f2fb0570784133c12d"],["2016/10/29/microsoft-surface-studio-is-mindblowing/index.html","92dd0dec1d36c75fa86051a1b60672dc"],["2016/10/30/free-to-believe-anything/index.html","41660a70b84f87a61101bc52b708d7f2"],["2016/11/07/there-is-no-such-thing-as-not-voting/index.html","ee56774f5cdc95b350a8f64852a0068d"],["2016/11/16/if-you-are-in-san-francisco-go-visit-moma/index.html","aa5526387220edda540802cc22171520"],["2016/11/16/if-you-are-in-san-francisco...-sfmoma/index.html","2f0c49e911c5661addd36995a1aa1e5c"],["404.html","303ecb44e226c34e0059b4118d31423d"],["about/index.html","5068c5501fa5b107116f56fe98669b84"],["css/highlight/agate.css","7f28a9ef3dcc7caccff7db1a970c4146"],["css/highlight/androidstudio.css","fb012626bafd286510d32da815dae448"],["css/highlight/arduino-light.css","3ef21498e387f16a18d5c84a38f2fee4"],["css/highlight/arta.css","887a0bf6afa7d18345cca9efa953c5a6"],["css/highlight/ascetic.css","8261c76b2ccc05b5c30c8819dc00d0bc"],["css/highlight/atelier-cave-dark.css","f1dae0dbba7560c12248875443c74371"],["css/highlight/atelier-cave-light.css","9256fbbdfaff0072230520af192aad3f"],["css/highlight/atelier-dune-dark.css","391a079f58af65849adcfd9633977b73"],["css/highlight/atelier-dune-light.css","55742192acd0c1251d51501639d973d9"],["css/highlight/atelier-estuary-dark.css","91b58915eaf5e3963d33e025d611339b"],["css/highlight/atelier-estuary-light.css","102a02c63ee6e7a167fd4649fdea5520"],["css/highlight/atelier-forest-dark.css","16d819beb6b738e4d25e11a7a597e39d"],["css/highlight/atelier-forest-light.css","b13acbe66b59f8e8359fd5a71972047e"],["css/highlight/atelier-heath-dark.css","9893d785b025f568c0677850a352105e"],["css/highlight/atelier-heath-light.css","f29d5cacd0d706554b4ad76a28e264a9"],["css/highlight/atelier-lakeside-dark.css","f0f1440ca9806a40e30313e22020ba89"],["css/highlight/atelier-lakeside-light.css","41b8800ab750ac31e518662a65d50f5f"],["css/highlight/atelier-plateau-dark.css","a19508e88383a760eb6b24d10397942c"],["css/highlight/atelier-plateau-light.css","2dc4b0714cbfa90a6fc7961969e0d497"],["css/highlight/atelier-savanna-dark.css","330e555af80e73b85f274a1d863b3f8b"],["css/highlight/atelier-savanna-light.css","cd192c5e7fbc7016519c60d48f66163b"],["css/highlight/atelier-seaside-dark.css","c16263748102028fb7255965bb6b41eb"],["css/highlight/atelier-seaside-light.css","63b489d3b2eb3b47e05afdeb16c10d22"],["css/highlight/atelier-sulphurpool-dark.css","99e131428f8d3b64e544c95adf233362"],["css/highlight/atelier-sulphurpool-light.css","bed6547f425e1e107f48ea32ec5997f1"],["css/highlight/atom-one-dark.css","e04d3287a76f861ed154658b42210d11"],["css/highlight/atom-one-light.css","3f9c7dcab0b31d9be9a2a2f3b83b8012"],["css/highlight/brown-paper.css","a930babb854f14289e9478057d02b9ea"],["css/highlight/codepen-embed.css","b94ddd27ed9b5ee64cd7d2cf69971d9a"],["css/highlight/color-brewer.css","0d7683a0a7a61c4b6a9ab6cdd16d52c4"],["css/highlight/darcula.css","f9623bae84c777825530f258b5cc3db9"],["css/highlight/dark.css","b3ac3eb7d91ebc25946f13897cd54e5e"],["css/highlight/darkula.css","64ee4b42047005efd6b45fa9ef2ba08a"],["css/highlight/default.css","db8ce58adfb1b685bd575fb9395d5ddb"],["css/highlight/docco.css","732506eba1c4a6752b7847358aaa2070"],["css/highlight/dracula.css","9612f9a1a214540e0e006d6231f11e2b"],["css/highlight/far.css","0e2fb50b6cc56c032ccc6bd482568068"],["css/highlight/foundation.css","71dac932272c550cf0e10faf2140876f"],["css/highlight/github-gist.css","c026a94dab146076149d9ef29595aeee"],["css/highlight/github.css","bf6c14925e66edb1526b6c9489b3c042"],["css/highlight/googlecode.css","a6c3e3d282eff14600ac0e1b8e495419"],["css/highlight/grayscale.css","6421024db18cc169592c8c3572da6a6a"],["css/highlight/gruvbox-dark.css","0b9af0515eaadb6f3495e71e97afb775"],["css/highlight/gruvbox-light.css","26be44ab273eb7e58a64a7e251a57160"],["css/highlight/hopscotch.css","23d32658b74128ba7ce9eb3cee79e889"],["css/highlight/hybrid.css","80b6f0c55c156f49216935f0648303d0"],["css/highlight/idea.css","74e2ebedfeee50ee3c8f9de23d271d1c"],["css/highlight/ir-black.css","69136cd05c4071f33526fbbef6a065fb"],["css/highlight/kimbie.dark.css","f4a1c8c40077e5b549cfb6e093c79607"],["css/highlight/kimbie.light.css","a3ce8b7a8dc2c830ca5cf6beec6c305a"],["css/highlight/magula.css","6a66369d1ba8339c89d9346584a5cfca"],["css/highlight/mono-blue.css","24cb5263fcdd1c70c3030baf887356e9"],["css/highlight/monokai-sublime.css","0c8b4c0e8a584e7142b08d914644cd9d"],["css/highlight/monokai.css","ad2b15c2189d3cdedbd68a1668bd1a52"],["css/highlight/obsidian.css","a153d314a30c1bf56a667f64891bf044"],["css/highlight/ocean.css","801c05eb37c92c65a173298c376adff2"],["css/highlight/paraiso-dark.css","23225068974ac9c4975f3a7dee4bd0dc"],["css/highlight/paraiso-light.css","cef05b6b5b147da65ed777d544b46a26"],["css/highlight/pojoaque.css","098bd1ae7b9956fe3f134a01f0144daa"],["css/highlight/purebasic.css","2d5d3ab76c6c3a2b308ca0bc71009cec"],["css/highlight/qtcreator_dark.css","36e7bda0ef39f396cd88fb319016b1b8"],["css/highlight/qtcreator_light.css","04c1d5880d03d4a21b9998286e6fbeeb"],["css/highlight/railscasts.css","b4f8ae4bf950f9f9b496d997b63cb0d5"],["css/highlight/rainbow.css","c89d491aca4854e11d180be0e6db0108"],["css/highlight/school-book.css","b1c0e6ad217403971d33eefb4478aad7"],["css/highlight/solarized-dark.css","82ff075b2124d9b007ac4caf40f8d3a9"],["css/highlight/solarized-light.css","5a0ca255fce9de83dde16a0f27d788fe"],["css/highlight/sunburst.css","8080a738bd7872fa6057be63c871b564"],["css/highlight/tomorrow-night-blue.css","e9b96cc5dfe48bfcf9e25f6ce6058d20"],["css/highlight/tomorrow-night-bright.css","b08807e46c95ad4737cfc54974327557"],["css/highlight/tomorrow-night-eighties.css","feb9048a966c65eb3b0bfee2cce720fd"],["css/highlight/tomorrow-night.css","d372a77090f6a07251dfce573d121ee2"],["css/highlight/tomorrow.css","8662c2c36baa70886e0dc5bedecabadd"],["css/highlight/vs.css","16693ba77ee7403d1a75594dc134235f"],["css/highlight/xcode.css","994ccc71a8d23d56a3bb90766b4e2784"],["css/highlight/xt256.css","4a4c814919b0109dd837458276cf3307"],["css/highlight/zenburn.css","28d5b9497037a12cb5a15644fea2f1c3"],["css/styles.css","aef4f7f1a0c9bb266ef366b7ee2bc696"],["css/styles.min.css","c07f651ccd906d6abe446bfe89e8aaf1"],["favicon.png","a39490ed7c379d13b082338e3eaa1f9e"],["fonts/icomoon.eot","adb7107ca257d406adbe4767e0b7031e"],["fonts/icomoon.svg","a77f2ed4a728da2fdac0d8dafbf98842"],["fonts/icomoon.ttf","520bbfbaec72753976a5c3dddf3eb6da"],["fonts/icomoon.woff","2e42509121803fccaa9091966edb4103"],["img/3d-printing.jpg","ab36751edd35ce8fe893fe1b52f9cf9d"],["img/AdoptioRatesofTech.png","c3523652b07137e15d60757987d3c671"],["img/CloudFront_Management_Console.png","20a091f4d3c075ce4308af1e9dbb7bd8"],["img/Google_Enterprise_Search.png","2c44bbd4ee38c09ce3ad99b8e6624945"],["img/IPv6-google.jpg","ede07636c784d30e47fa61e56bdec785"],["img/SmartCarLock.png","d5d53a07a4a9314084e963282908d4fa"],["img/SteveJobsCloseUp-lg.jpg","2c34ff6d9f259d6d65ef3d873f6869bd"],["img/SteveJobsCloseUp.jpg","9b391ee2bce058b14f0bb83f50b2b3c5"],["img/Surface_Pro_3.png","d8eb260734e970b2b5024b9d0586b1f9"],["img/Surface_Studio.jpg","443e04e384cc91126c7786066d6aa70f"],["img/Surface_Studio2x.jpg","b6246b24ced4558a012bb410132b5fbd"],["img/TEDx-logo-lg.jpg","72c10eb66c8f84fa6306f892a1f54a7b"],["img/TEDx-logo.jpg","15a1b4c1bdb2101264ac628c89150408"],["img/USDS_Playbook.png","8270a961ba3d7ca39702407d801491cf"],["img/Usain-Bolt-Opt.jpg","844787db740aed804073983b9521eb9f"],["img/VICTORIA_BECKHAM.png","3c4d4465e8e0ba67f320c9a82cfd4df0"],["img/adoption_curve.jpg","0117548cbe5a16d4b50e08d691c8d3b1"],["img/adoption_curve_lg.jpg","68c93a9787a292966737921095348dcc"],["img/african_children.jpg","e33d1948e119f6e6945a94717dc680f7"],["img/badge-pattern-bg.png","07c83dde76c570c7be46d5bfc3f896b1"],["img/bias.jpg","7de58d375fae1f40e8324fc0e513fcf5"],["img/billgates.jpg","92356ea061ef9979a9143c48f873c4d1"],["img/billguard.png","bb59193af2f09d13f2d15d0df3c3ce05"],["img/bing-bg-01.jpg","919e4196e4d76a4d4f4372e2616bf741"],["img/blog.jpg","a4e940d3f7e72a8e5e3c85cb55632f49"],["img/breezi_placeit.png","f79c79cb443c60e43165dae46eba772a"],["img/breezi_placeit2.jpg","e8fcf850ddd154a2360312cf88230aa4"],["img/breezi_placeit2.png","5ff2ec2639d8228ad4788e88a7ee685c"],["img/coffee.gif","938693c69ebf6d82f4167b1e8bb4e7c7"],["img/comic.png","ac5dd1256e5c4c34e6c2630411f2caca"],["img/commandlinetools.png","33ba8c354c2869494fe96568ddfb5f28"],["img/computer-woman.jpg","8255af69859c5c419fc4db45093742d1"],["img/confused_ape.jpg","ca5494036dd3b0cd7d5ecaab7082784f"],["img/coreos-action.png","edbdc488a2308802a5579652600b0091"],["img/coreos-logo.png","b3edb62c7d5427ed66f42e8e330ef8b3"],["img/data_catalog.png","f84d06193804277873b136d20ac157b0"],["img/data_gov.png","0cd02381da55e193dd7f5845284aff45"],["img/dfw.jpg","8ae16bf15812dfd9105e14c08c619c4b"],["img/docker.png","8062590f89bf19de439f6d10bafe896e"],["img/dockervsvm.png","23ace80d79a66757473942d5a56be610"],["img/earth_wind_map-lg.jpg","79c171444863e821f6a437e7acc97fdc"],["img/earth_wind_map.jpg","5b7b83c9358e555cc7398d1353d99cfe"],["img/earth_wind_map.png","4fcf27c4d69ccf931a84eb5c2357c035"],["img/edison.jpg","44937edd250d6af742917f0c4c55d949"],["img/elon-musk-lg.jpg","66648a4cec1871fbe153a28fc5f431fa"],["img/elon-musk.jpg","d2ee477286c20d2018b206aef021d5a7"],["img/face_sm.jpg","c5996a5481679a29fd85e60287269be5"],["img/fb-server.jpg","12f9618af9d97c6994214ca3beca08c3"],["img/goals.png","888a910b5acab6e5bec70ab255df69d1"],["img/goals_metric.png","e2fc7ba361217ef2d223e074d731caf1"],["img/google_docs.jpg","95a571a5a5beff1122e21eccae2aa601"],["img/grey_background_bg.jpg","a7c95942e8fa508e81f1bd85eac81df9"],["img/haiti.jpg","683838d1ee0c416ad24ef2c6cb658beb"],["img/iSpaceship.jpg","608584282df0333919cc7c4f62128582"],["img/icloud.jpg","7d45c2463b682df2e7856799cf109b41"],["img/icloud2.jpg","1354cfdd766573de7d33418adfdc664d"],["img/iphone5.png","7d172e8d260c1f17b93b368dc5768071"],["img/iron_man.png","635b6a1f09755cd0caa54eb2bbceb477"],["img/krochet-kids.jpg","d610b19f95c47e6d2195727c27ff0be8"],["img/macbook_air.png","e7469cdc34f354d456a4215cdbb6df8d"],["img/man-tablet.jpg","d3cbd2e51410d7d0760f4b6e1353fab0"],["img/minorityreport.jpg","f43c78e18b8bcb12713369caf35f08dd"],["img/ncaa-brackets.jpg","d05d4ea679ba75923746c119e36933ae"],["img/new-ui.jpg","f5334163b30ab3f2411a43aa1a25954e"],["img/not_me.jpg","b2a9e39e038265ce3010af258da152f8"],["img/not_me_@2x.jpg","ee53412b4dd0286f1fc8a46134d859b9"],["img/notme.jpg","cc7dcf35dd24a24634a8a41915528569"],["img/notme_@2x.jpg","d2098e95208b792936fe96684edf9aeb"],["img/obama_internet.png","aea487b4907796fbc05e2a64265c19d1"],["img/open_data.png","cebe7c8fb46a917d58593f88b9745aa8"],["img/prime-air.jpg","60f6ec4751607692db75d9eabeeb4aa1"],["img/satya-nadella-microsoft-ceo.jpg","ff23b8b384e8ab4f54e08170862a9c46"],["img/sfmoma.jpg","5c4d54993a94ea991c5e765a87d5ba38"],["img/skeleton-sm.jpg","3b0fc61e1736c44427f77f516224542f"],["img/skeleton.png","90af912ae5cc7ec6070b7cb93e616274"],["img/socrata.png","3d12ea931d3069df4da971799762aab1"],["img/soulcrushing.jpg","5a9e6778650adfbe0c486df3b6545aa6"],["img/tumblr_this-is-the-thyme.gif","938693c69ebf6d82f4167b1e8bb4e7c7"],["img/volkswagen.jpg","33b763bb2638f92d7003cca5a70b44f0"],["img/what.gif","aa8a709dc22707cf77541fa8425cb43b"],["img/windows8.jpg","ed521c65a17bc0a91385cea879c2f612"],["index.html","983fd9b03321ec9790badace82a8b771"],["js/highlight.pack.js","c41f2bf6c781ef1bd24720bf67e5e0a4"],["js/loadjs.min.js","4cafb6974ea866946c0defb86bdb02e9"],["js/service-worker-registration.js","3448a74b245edc5121c18dac382d780c"],["launcher-icon-0-75x.png","16c9271fb11dcf56d22693070eaf7e44"],["launcher-icon-1-5x.png","a2a5566874d24aea1ae2c945ba99e0ca"],["launcher-icon-1x.png","7275d173c3eb54cf6ad0e6b8a3215622"],["launcher-icon-2x.png","8c34077503e2c6d8acedd34d06ebb3c7"],["launcher-icon-3x.png","408812183c6f630c5eec0744b17a799d"],["launcher-icon-4x.png","568c24e87c49d9a265f15f9399788b71"],["page/1/index.html","37d27090de696b5a00588d1301df2103"],["page/2/index.html","dc465a261aa4a49d8baf48360d881792"],["page/3/index.html","5a8441737ce04cc79b608236c0cb7750"],["page/4/index.html","999e13a6f176b4f92935ab3e63b6ce4e"],["page/5/index.html","a4e919d3c05edfd913b0675bb196b13e"],["page/6/index.html","f037aace64c59def075ec6edfa48bc3a"],["page/7/index.html","ce80ca47ff63264252212072ee952804"],["page/8/index.html","672613e935cf039f42108c62b72a77ac"],["page/9/index.html","0bd714a2df642dc8a7b8e71e60aa5913"],["post/index.html","0417c384e5c6eede88b3f8950b0010c4"]];
var cacheName = 'sw-precache-v2-myblog-' + (self.registration ? self.registration.scope : '');




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




