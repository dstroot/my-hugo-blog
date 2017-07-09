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

var precacheConfig = [["2010/01/15/lessons-from-haiti--never-under-estimate-ease-of-use/index.html","2a40e47f197e8b563d8c7cbc633387a3"],["2010/01/29/ipad-goes-corporate/index.html","42e5ea325a134ceb6846eb8bdc5c756a"],["2010/04/28/ipad-security-vulnerability-fingerprints/index.html","c9019c3c005d2d61e3362a3e75e36a94"],["2011/06/10/the-corporate-icloud/index.html","6b7d0abc0bf143b4647bfeba08a0b3df"],["2011/12/22/the-corporate-icloud-part-2/index.html","b62d7f05d436db4be37e4812c60ec0f1"],["2012/01/03/transparency-wins/index.html","0985abdbd27d91d3bc9e63400e8b2473"],["2012/04/30/20.5-million-hits-a-day-using-an-amazon-micro-server-15-a-month-and-node.js/index.html","00d283bb8a525fe653616bf3aac59d35"],["2012/05/02/apple-reaches-for-greatness-without-apology/index.html","5d4098dbdcbd89b71b52af59ad59c3e6"],["2012/10/11/tedx-orange-coast-2012/index.html","67901748b30bb67bf3eed1406592a90d"],["2012/10/21/minority-report-and-big-data/index.html","8ac0f17cd5bda1658c18fe4d149eefc4"],["2012/11/16/risk-mitigation-costs-too-much/index.html","6e8789bae04c219e8d603883a9bec739"],["2013/07/25/hosting-your-blog-on-amazon-s3/index.html","c446574153235b6a7cf576e025642b9a"],["2013/07/30/great-web-product-images-placeit/index.html","d925a331313d3e3abc407bdad269a69d"],["2013/08/01/only-usain-bolt-looks-at-the-clock/index.html","9a83f31b39b7ed919b320915e389caf5"],["2013/10/04/work-like-hell/index.html","415f539887c2e797a74a2c10ece55173"],["2013/10/15/intrinsic-bias/index.html","b6880600050cf8bd1c781e124a9468a2"],["2013/10/30/apples-astounding-capital-expenditures/index.html","4152525fdd860d49ecb525187f111034"],["2013/12/31/responsive-design-vs.-mobile-first/index.html","8c079b1a260454761974410149302fb8"],["2014/01/02/supercomputer-weather-visualization-in-a-browser/index.html","b0f724a3c67419c4227b4d8e7c9b33c9"],["2014/01/03/technology-adoption-curves-vs.-birth-year-and-life-expectancy/index.html","b92a9a52e970a5960baaf2bb95b63410"],["2014/01/13/ny-fintech-community-is-thriving/index.html","9a765ea1c87c19731b838f6970ce4a6a"],["2014/01/22/awkward-bill-gates-notices-jimmy-fallon-uses-a-mac/index.html","87d6c4e08fd6d078751592e1eea9420f"],["2014/01/22/billion-dollar-march-madness-bracket/index.html","b7361ba7dce7813b8e0fb9ac97773cda"],["2014/01/28/facebook-saves-a-billion-dollars-via-open-compute-designs/index.html","f9525db7cacb8a7e6fb2766304d8e6c3"],["2014/02/01/fixing-windows-8/index.html","b14b83faff8f6f8fd2936c7b3ebbda1f"],["2014/02/07/a-soul-crushing-exercise/index.html","0a21e7b112bf9f777a5efb9e94ce05fe"],["2014/02/18/ipv6-gets-real/index.html","de251b560feb1d18394aa7f88a90456b"],["2014/02/24/happy-birthday-steve/index.html","560bfa34c25d590d7912fc7eb9487366"],["2014/03/14/enterprise-search-2014/index.html","91839790a01ae173a538d41408206931"],["2014/05/05/virtual-machines-vs-containers/index.html","bd99043aa164da65112a749b4fb3840a"],["2014/06/29/coreos-thousands-of-machines-and-millions-of-docker-containers...-no-hypervisor-needed./index.html","73810dedc54468d5ce2dee52bec8b213"],["2014/07/01/from-open-government-to-open-corporation/index.html","a29791bb61bcb6e443623759f866b2c0"],["2014/08/12/usas-digital-playbook/index.html","720333ad27b118bbaf130c82345d7006"],["2014/11/10/president-obamas-plan-for-a-free-and-open-internet/index.html","da035d899299ac700ea6e6ec0f59d376"],["2015/01/13/keep-it-simple...-ux-design/index.html","bbb19abb9574ef280e76d245c8cd7288"],["2015/01/22/make-big-bets/index.html","540fd10ee51c6a7eba49ed0bdfeb2b57"],["2015/05/25/the-new-new-microsoft/index.html","4c0b9b03a88db0ce4665c05aad4ade51"],["2015/06/15/fintech-startups-tug-the-industry-forward/index.html","3934ddd68b5db774fc9b8222426f922f"],["2015/09/06/why-automate-code-reviews/index.html","59428900103d62671f0d383fa4740c08"],["2015/09/26/is-it-secure/index.html","e4d69039b9bd1d5e5b8ff611d22aa91e"],["2015/10/03/proprietary-software-is-an-unsafe-building-material/index.html","2b5b58523e6a20cb99543bfbb8fda7dc"],["2016/10/29/microsoft-surface-studio-is-mindblowing/index.html","1f8363381799ef0921db36672f3076be"],["2016/10/30/free-to-believe-anything/index.html","dfc0e447a971578040dd7138db788908"],["2016/11/07/there-is-no-such-thing-as-not-voting/index.html","c4838d00e917ed032be2a2dd8f1bc16e"],["2016/11/16/if-you-are-in-san-francisco-go-visit-moma/index.html","930d4feae1d8cef1889b182084c07578"],["2017/01/10/i-feel-the-need-for-speed/index.html","16c7deb97973cac9a0511546d0866092"],["2017/03/19/the-man-least-likely-to-succeed-in-politics/index.html","27f73dad03fff145eb3d6ea46abcbf30"],["2017/04/10/the-inside-out-corporation/index.html","6ee3d78a20587a146cfbde1a355edd50"],["2017/07/09/internet--smarter-people/index.html","61ee832b49d26b942109fcd8b13a68be"],["404.html","f6e1f1903e603ea213d3c43052e8e797"],["about/index.html","c500aee65f645599253e749473e20865"],["css/highlight/agate.css","7f28a9ef3dcc7caccff7db1a970c4146"],["css/highlight/androidstudio.css","fb012626bafd286510d32da815dae448"],["css/highlight/arduino-light.css","3ef21498e387f16a18d5c84a38f2fee4"],["css/highlight/arta.css","887a0bf6afa7d18345cca9efa953c5a6"],["css/highlight/ascetic.css","8261c76b2ccc05b5c30c8819dc00d0bc"],["css/highlight/atelier-cave-dark.css","f1dae0dbba7560c12248875443c74371"],["css/highlight/atelier-cave-light.css","9256fbbdfaff0072230520af192aad3f"],["css/highlight/atelier-dune-dark.css","391a079f58af65849adcfd9633977b73"],["css/highlight/atelier-dune-light.css","55742192acd0c1251d51501639d973d9"],["css/highlight/atelier-estuary-dark.css","91b58915eaf5e3963d33e025d611339b"],["css/highlight/atelier-estuary-light.css","102a02c63ee6e7a167fd4649fdea5520"],["css/highlight/atelier-forest-dark.css","16d819beb6b738e4d25e11a7a597e39d"],["css/highlight/atelier-forest-light.css","b13acbe66b59f8e8359fd5a71972047e"],["css/highlight/atelier-heath-dark.css","9893d785b025f568c0677850a352105e"],["css/highlight/atelier-heath-light.css","f29d5cacd0d706554b4ad76a28e264a9"],["css/highlight/atelier-lakeside-dark.css","f0f1440ca9806a40e30313e22020ba89"],["css/highlight/atelier-lakeside-light.css","41b8800ab750ac31e518662a65d50f5f"],["css/highlight/atelier-plateau-dark.css","a19508e88383a760eb6b24d10397942c"],["css/highlight/atelier-plateau-light.css","2dc4b0714cbfa90a6fc7961969e0d497"],["css/highlight/atelier-savanna-dark.css","330e555af80e73b85f274a1d863b3f8b"],["css/highlight/atelier-savanna-light.css","cd192c5e7fbc7016519c60d48f66163b"],["css/highlight/atelier-seaside-dark.css","c16263748102028fb7255965bb6b41eb"],["css/highlight/atelier-seaside-light.css","63b489d3b2eb3b47e05afdeb16c10d22"],["css/highlight/atelier-sulphurpool-dark.css","99e131428f8d3b64e544c95adf233362"],["css/highlight/atelier-sulphurpool-light.css","bed6547f425e1e107f48ea32ec5997f1"],["css/highlight/atom-one-dark.css","e04d3287a76f861ed154658b42210d11"],["css/highlight/atom-one-light.css","3f9c7dcab0b31d9be9a2a2f3b83b8012"],["css/highlight/brown-paper.css","a930babb854f14289e9478057d02b9ea"],["css/highlight/codepen-embed.css","b94ddd27ed9b5ee64cd7d2cf69971d9a"],["css/highlight/color-brewer.css","0d7683a0a7a61c4b6a9ab6cdd16d52c4"],["css/highlight/darcula.css","f9623bae84c777825530f258b5cc3db9"],["css/highlight/dark.css","b3ac3eb7d91ebc25946f13897cd54e5e"],["css/highlight/darkula.css","64ee4b42047005efd6b45fa9ef2ba08a"],["css/highlight/default.css","db8ce58adfb1b685bd575fb9395d5ddb"],["css/highlight/docco.css","732506eba1c4a6752b7847358aaa2070"],["css/highlight/dracula.css","9612f9a1a214540e0e006d6231f11e2b"],["css/highlight/far.css","0e2fb50b6cc56c032ccc6bd482568068"],["css/highlight/foundation.css","71dac932272c550cf0e10faf2140876f"],["css/highlight/github-gist.css","c026a94dab146076149d9ef29595aeee"],["css/highlight/github.css","bf6c14925e66edb1526b6c9489b3c042"],["css/highlight/googlecode.css","a6c3e3d282eff14600ac0e1b8e495419"],["css/highlight/grayscale.css","6421024db18cc169592c8c3572da6a6a"],["css/highlight/gruvbox-dark.css","0b9af0515eaadb6f3495e71e97afb775"],["css/highlight/gruvbox-light.css","26be44ab273eb7e58a64a7e251a57160"],["css/highlight/hopscotch.css","23d32658b74128ba7ce9eb3cee79e889"],["css/highlight/hybrid.css","80b6f0c55c156f49216935f0648303d0"],["css/highlight/idea.css","74e2ebedfeee50ee3c8f9de23d271d1c"],["css/highlight/ir-black.css","69136cd05c4071f33526fbbef6a065fb"],["css/highlight/kimbie.dark.css","f4a1c8c40077e5b549cfb6e093c79607"],["css/highlight/kimbie.light.css","a3ce8b7a8dc2c830ca5cf6beec6c305a"],["css/highlight/magula.css","6a66369d1ba8339c89d9346584a5cfca"],["css/highlight/mono-blue.css","24cb5263fcdd1c70c3030baf887356e9"],["css/highlight/monokai-sublime.css","0c8b4c0e8a584e7142b08d914644cd9d"],["css/highlight/monokai.css","ad2b15c2189d3cdedbd68a1668bd1a52"],["css/highlight/obsidian.css","a153d314a30c1bf56a667f64891bf044"],["css/highlight/ocean.css","801c05eb37c92c65a173298c376adff2"],["css/highlight/paraiso-dark.css","23225068974ac9c4975f3a7dee4bd0dc"],["css/highlight/paraiso-light.css","cef05b6b5b147da65ed777d544b46a26"],["css/highlight/pojoaque.css","098bd1ae7b9956fe3f134a01f0144daa"],["css/highlight/purebasic.css","2d5d3ab76c6c3a2b308ca0bc71009cec"],["css/highlight/qtcreator_dark.css","36e7bda0ef39f396cd88fb319016b1b8"],["css/highlight/qtcreator_light.css","04c1d5880d03d4a21b9998286e6fbeeb"],["css/highlight/railscasts.css","b4f8ae4bf950f9f9b496d997b63cb0d5"],["css/highlight/rainbow.css","c89d491aca4854e11d180be0e6db0108"],["css/highlight/school-book.css","b1c0e6ad217403971d33eefb4478aad7"],["css/highlight/solarized-dark.css","82ff075b2124d9b007ac4caf40f8d3a9"],["css/highlight/solarized-light.css","5a0ca255fce9de83dde16a0f27d788fe"],["css/highlight/sunburst.css","8080a738bd7872fa6057be63c871b564"],["css/highlight/tomorrow-night-blue.css","e9b96cc5dfe48bfcf9e25f6ce6058d20"],["css/highlight/tomorrow-night-bright.css","b08807e46c95ad4737cfc54974327557"],["css/highlight/tomorrow-night-eighties.css","feb9048a966c65eb3b0bfee2cce720fd"],["css/highlight/tomorrow-night.css","d372a77090f6a07251dfce573d121ee2"],["css/highlight/tomorrow.css","8662c2c36baa70886e0dc5bedecabadd"],["css/highlight/vs.css","16693ba77ee7403d1a75594dc134235f"],["css/highlight/xcode.css","994ccc71a8d23d56a3bb90766b4e2784"],["css/highlight/xt256.css","4a4c814919b0109dd837458276cf3307"],["css/highlight/zenburn.css","28d5b9497037a12cb5a15644fea2f1c3"],["css/styles.css","92507388b706f3c4755259e99dca3db3"],["css/styles.min.css","bc2c65f4d156dad0d717111f0babdb31"],["favicon.png","a39490ed7c379d13b082338e3eaa1f9e"],["fonts/icomoon.eot","adb7107ca257d406adbe4767e0b7031e"],["fonts/icomoon.svg","a77f2ed4a728da2fdac0d8dafbf98842"],["fonts/icomoon.ttf","520bbfbaec72753976a5c3dddf3eb6da"],["fonts/icomoon.woff","2e42509121803fccaa9091966edb4103"],["img/3d-printing.jpg","ab36751edd35ce8fe893fe1b52f9cf9d"],["img/AdoptioRatesofTech.png","c3523652b07137e15d60757987d3c671"],["img/CloudFront_Management_Console.png","20a091f4d3c075ce4308af1e9dbb7bd8"],["img/Elvis-Nixon.png","80a1854c38975da383d1ca4c2ac080ed"],["img/Facebook-research.png","fe6ad06cd62e981d89703700b870b519"],["img/Google_Enterprise_Search.png","2c44bbd4ee38c09ce3ad99b8e6624945"],["img/IPv6-google.jpg","ede07636c784d30e47fa61e56bdec785"],["img/Nix-presenting-research.png","422f403c8005ae91f9fbf311548f958d"],["img/SmartCarLock.png","d5d53a07a4a9314084e963282908d4fa"],["img/SteveJobsCloseUp-lg.jpg","2c34ff6d9f259d6d65ef3d873f6869bd"],["img/SteveJobsCloseUp.jpg","9b391ee2bce058b14f0bb83f50b2b3c5"],["img/Surface_Pro_3.png","d8eb260734e970b2b5024b9d0586b1f9"],["img/Surface_Studio.jpg","443e04e384cc91126c7786066d6aa70f"],["img/Surface_Studio2x.jpg","b6246b24ced4558a012bb410132b5fbd"],["img/TEDx-logo-lg.jpg","72c10eb66c8f84fa6306f892a1f54a7b"],["img/TEDx-logo.jpg","15a1b4c1bdb2101264ac628c89150408"],["img/USDS_Playbook.png","8270a961ba3d7ca39702407d801491cf"],["img/Usain-Bolt-Opt.jpg","844787db740aed804073983b9521eb9f"],["img/VICTORIA_BECKHAM.png","3c4d4465e8e0ba67f320c9a82cfd4df0"],["img/adoption_curve.jpg","0117548cbe5a16d4b50e08d691c8d3b1"],["img/adoption_curve_lg.jpg","68c93a9787a292966737921095348dcc"],["img/african_children.jpg","e33d1948e119f6e6945a94717dc680f7"],["img/auth0_logo.png","80087d1fabbb31e1bf746688798248b5"],["img/badge-pattern-bg.png","07c83dde76c570c7be46d5bfc3f896b1"],["img/bias.jpg","7de58d375fae1f40e8324fc0e513fcf5"],["img/billgates.jpg","92356ea061ef9979a9143c48f873c4d1"],["img/billguard.png","bb59193af2f09d13f2d15d0df3c3ce05"],["img/bing-bg-01.jpg","919e4196e4d76a4d4f4372e2616bf741"],["img/blog.jpg","a4e940d3f7e72a8e5e3c85cb55632f49"],["img/breezi_placeit.png","f79c79cb443c60e43165dae46eba772a"],["img/breezi_placeit2.jpg","e8fcf850ddd154a2360312cf88230aa4"],["img/breezi_placeit2.png","5ff2ec2639d8228ad4788e88a7ee685c"],["img/coffee.gif","938693c69ebf6d82f4167b1e8bb4e7c7"],["img/comic.png","ac5dd1256e5c4c34e6c2630411f2caca"],["img/commandlinetools.png","33ba8c354c2869494fe96568ddfb5f28"],["img/computer-woman.jpg","8255af69859c5c419fc4db45093742d1"],["img/confused_ape.jpg","ca5494036dd3b0cd7d5ecaab7082784f"],["img/coreos-action.png","edbdc488a2308802a5579652600b0091"],["img/coreos-logo.png","b3edb62c7d5427ed66f42e8e330ef8b3"],["img/data_catalog.png","f84d06193804277873b136d20ac157b0"],["img/data_gov.png","0cd02381da55e193dd7f5845284aff45"],["img/dfw.jpg","8ae16bf15812dfd9105e14c08c619c4b"],["img/docker.png","8062590f89bf19de439f6d10bafe896e"],["img/dockervsvm.png","23ace80d79a66757473942d5a56be610"],["img/earth_wind_map-lg.jpg","79c171444863e821f6a437e7acc97fdc"],["img/earth_wind_map.jpg","5b7b83c9358e555cc7398d1353d99cfe"],["img/earth_wind_map.png","59220e47de93474dd31782b5de42143c"],["img/edison.jpg","44937edd250d6af742917f0c4c55d949"],["img/elon-musk-lg.jpg","66648a4cec1871fbe153a28fc5f431fa"],["img/elon-musk.jpg","d2ee477286c20d2018b206aef021d5a7"],["img/face_lg.jpg","526aa1527b9439eb2ebfe430fd26de26"],["img/face_sm.jpg","c5996a5481679a29fd85e60287269be5"],["img/fb-server.jpg","12f9618af9d97c6994214ca3beca08c3"],["img/goals.png","888a910b5acab6e5bec70ab255df69d1"],["img/goals_metric.png","e2fc7ba361217ef2d223e074d731caf1"],["img/google_docs.jpg","95a571a5a5beff1122e21eccae2aa601"],["img/grey_background_bg.jpg","a7c95942e8fa508e81f1bd85eac81df9"],["img/haiti.jpg","683838d1ee0c416ad24ef2c6cb658beb"],["img/iSpaceship.jpg","608584282df0333919cc7c4f62128582"],["img/iap-lead_2x.png","8c86bb1d29879f9e052cdd156b5bf10d"],["img/icloud.jpg","7d45c2463b682df2e7856799cf109b41"],["img/icloud2.jpg","1354cfdd766573de7d33418adfdc664d"],["img/internet.jpg","a4a118df38fcf9dddbba40900c723aa5"],["img/iphone5.png","7d172e8d260c1f17b93b368dc5768071"],["img/iron_man.png","635b6a1f09755cd0caa54eb2bbceb477"],["img/krochet-kids.jpg","d610b19f95c47e6d2195727c27ff0be8"],["img/macbook_air.png","e7469cdc34f354d456a4215cdbb6df8d"],["img/man-tablet.jpg","d3cbd2e51410d7d0760f4b6e1353fab0"],["img/minorityreport.jpg","f43c78e18b8bcb12713369caf35f08dd"],["img/ncaa-brackets.jpg","d05d4ea679ba75923746c119e36933ae"],["img/new-ui.jpg","f5334163b30ab3f2411a43aa1a25954e"],["img/not_me.jpg","b2a9e39e038265ce3010af258da152f8"],["img/not_me_@2x.jpg","ee53412b4dd0286f1fc8a46134d859b9"],["img/notme.jpg","cc7dcf35dd24a24634a8a41915528569"],["img/notme_@2x.jpg","d2098e95208b792936fe96684edf9aeb"],["img/obama_internet.png","aea487b4907796fbc05e2a64265c19d1"],["img/ocean.png","7d62b9a26287bd53013493780896318d"],["img/okta_logo.svg","e0da7b16ee9fccf850fb8ec6ed5c0359"],["img/onelogin_logo.png","6867e5545b45ec4205cd1240ba661a5c"],["img/open_data.png","cebe7c8fb46a917d58593f88b9745aa8"],["img/ping_logo.png","8dc53df7057607a859698e245b6c6520"],["img/prime-air.jpg","15e26389beec3aca7284cc3ec75573ba"],["img/satya-nadella-microsoft-ceo.jpg","ff23b8b384e8ab4f54e08170862a9c46"],["img/sfmoma.jpg","5c4d54993a94ea991c5e765a87d5ba38"],["img/skeleton-sm.jpg","3b0fc61e1736c44427f77f516224542f"],["img/skeleton.png","90af912ae5cc7ec6070b7cb93e616274"],["img/socrata.png","3d12ea931d3069df4da971799762aab1"],["img/soulcrushing.jpg","5a9e6778650adfbe0c486df3b6545aa6"],["img/speed.png","d5246ef66100ddeb68b26930c4c6172a"],["img/tumblr_this-is-the-thyme.gif","938693c69ebf6d82f4167b1e8bb4e7c7"],["img/userlist.png","5ae63554858899ac01aeb1aac55ff92f"],["img/volkswagen.jpg","33b763bb2638f92d7003cca5a70b44f0"],["img/what.gif","aa8a709dc22707cf77541fa8425cb43b"],["img/windows8.jpg","ed521c65a17bc0a91385cea879c2f612"],["index.html","97de9b474ff1f4e03d096cdbc6f01a7f"],["js/highlight.pack.js","c41f2bf6c781ef1bd24720bf67e5e0a4"],["js/loadjs.min.js","4cafb6974ea866946c0defb86bdb02e9"],["js/service-worker-registration.js","3448a74b245edc5121c18dac382d780c"],["launcher-icon-0-75x.png","16c9271fb11dcf56d22693070eaf7e44"],["launcher-icon-1-5x.png","a2a5566874d24aea1ae2c945ba99e0ca"],["launcher-icon-1x.png","7275d173c3eb54cf6ad0e6b8a3215622"],["launcher-icon-2x.png","8c34077503e2c6d8acedd34d06ebb3c7"],["launcher-icon-3x.png","408812183c6f630c5eec0744b17a799d"],["launcher-icon-4x.png","568c24e87c49d9a265f15f9399788b71"],["page/1/index.html","2bc87b2b290cb5de402f618a800bf20e"],["page/10/index.html","9d5adbaa4fa4210cebaf9952613febd0"],["page/2/index.html","b07acd2a46280929b67b81ee202a276e"],["page/3/index.html","8eeb7a60ddb996f779366b257ab2aa20"],["page/4/index.html","fd664a5c73d97d9f18ae52660d91c31a"],["page/5/index.html","e34ea6fe6da75d19f1e175e1828c040e"],["page/6/index.html","b1c07e3aede87fe8f98d6ad8153e36b4"],["page/7/index.html","8b1b534364366c52a23917b15236aa86"],["page/8/index.html","f5a0d97a64ae1f1271c785964ac5c018"],["page/9/index.html","d77154a848664748410d0252bd1ee343"],["post/index.html","9960d2a553d68f873d2616e85feb4756"]];
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




