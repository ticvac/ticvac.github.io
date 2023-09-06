'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3024407cdf8015187594931f8df978f3",
"index.html": "fd4422912f152c5d171e551bbdd56367",
"/": "fd4422912f152c5d171e551bbdd56367",
"CNAME": "031351901967aa2052f6d8f3fb103b18",
"main.dart.js": "173a6cbe64e1cbefe6362db8b736d27f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b72f1d3b270823c30c30e19d970f2c3f",
".git/config": "6d4ed8cd0392ad9bf83afb3796b48391",
".git/objects/95/b06dc43f6221425227c14af1eb2aa84c4f684a": "4791867ac3fe2c2c1d560557709a57ae",
".git/objects/3e/3009504e0eede426a107d009cb39dfec5bc81c": "f3287eb4ab9d180b23a9a88f37b3253e",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/9b13ce76ba2750b5329b1f2aba6092df529b1e": "176d94c746c108454c18858ec477fce8",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/c3961dc1fd91715b7b875cb907a6a97ea03b82": "5564b4345f9faa1f687e51c8dc31321e",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/94/c3ff055a419ec55fe424bcab4f875c053eaf2d": "aa84c958797dbe2938886caaa2dbdfd8",
".git/objects/60/72d7e047d2183c64c6553cc2c5cb12013c42ee": "ccaaf9894c988260db74a3ffc6c73ba6",
".git/objects/05/b0dd203fad4f3a006076515121973b03b02738": "64b61c4a7e93b569775f79513aecdab4",
".git/objects/02/9c287e09edd62eadf05a6c2bc3c84304df62e6": "58a3d810b921f159ce99049ea052785c",
".git/objects/b5/8225f1c72dbe9c38e232c45c030539dc5ce24b": "972879cfa172efb64f5a1d6dea3b16f0",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/0e4a18114d295bd46c96b435701e7efa055d66": "03f9eb12bbae9110ffaf9b632694c12f",
".git/objects/bb/e4d049db77ed3f616dfc42ebe69cdcd58b6997": "3c4309ad0dd2ec57f329508a47cd5c3e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b3/01f90c1b6813c1ce3017fdb6f00dd93685d006": "dcb82fd291eb5667dcf9fdb2ee5c12fe",
".git/objects/b3/b7ee7f90107d3b5b01a5964efae19a217eecd0": "a56767282d16b285870e90686c1b7a6c",
".git/objects/b4/c8da2b8c383d3d0d6e5419207f0318e6d87be3": "5ff572944cb6b384d32a81d3181d27b2",
".git/objects/a5/ac4e3e49015b41f2b87350a24fc97c8096b123": "2be70738097b47ffad2efd3620a03e4d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/09c54be68305b5f91566dcbeca1312a959ef39": "dff0589daa1d97ea227ad9a00fa476c4",
".git/objects/ab/539ff668125824e04b74b847a72a1c37a59058": "378f24b179fb1f9f7c2ef2c3087578eb",
".git/objects/ab/adc1f2bde40f2145bf980a4dc119dda7b89d33": "46df0c9f2b1cd70d77d5a9d4c6b4f307",
".git/objects/e5/027af7aa77c8e850373c84e7133b734ccc2733": "12321848a26bc95cbd515efd818a443d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/99424ae0d25a5d803e0593382ed64f6886f439": "0db232d36b8e2324f9b89ea0755c21ee",
".git/objects/c9/1da6707e5ba172df8f71e145db211049526cbc": "3607c4a3be3ae93d67c27a6f6692d4fb",
".git/objects/fc/71dc90d0e461af03896f3a709676f739b8d9e4": "aca87a493637b28cf68bd4afda7f7432",
".git/objects/f2/446f9966f81e68fe39033c15db43dd02a0ed04": "dbc40677e9de20fbb9f6fdb2b2b5d290",
".git/objects/f5/bfa15bf90b17f59e0f5c1223a06133166bae13": "3e44ff041ec6f92f4c1a8a71675895dd",
".git/objects/e3/f5912fb0ae77420e914be5fd096cc6e88a8b5e": "8e1bee44bf21d88173ef2b1653aa5263",
".git/objects/c6/471b08457d701d555f2e1cb62387008f0fb25f": "8cab91bed910ebe40d9f25132d845305",
".git/objects/20/2befe6e4d24bd610091a33827b56ae8e1e6d3e": "bb83f6fe0a154a715b0fec640be50bf0",
".git/objects/20/6dc26848c26cc58f68e29c15b37445cb0abb3a": "99d71895c0c1a5a29fee9fb9c2aa110a",
".git/objects/27/0428ac80e7824d7b08801dc35fbe0ca87e2772": "6e33ddd38c3146c12d383e17277410e6",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1a/d1de10196b413771734016a28e9b4edd288d60": "7f4095d2b391cd57167eafd32a7406e3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/525efaeccac11d7ccb557ed645d0a231cfedde": "2465fc8b43af505a1451b48c7a2c510f",
".git/objects/5d/7f5c354ef11ebf244e8aa33777226bdd19b12a": "018ff91b79d1d1de6789f74e68603887",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3a/d9df9efac9476e3c317a942113940ab612a92e": "0653848a5ec9656f0e3c13358a7f6a34",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/06/90ba38b8aff75c9ef8b78d7740103a9e36f73f": "caba7abe30404861fb1a3782bc3f07cb",
".git/objects/6c/e8063be9d9178d2a0e780669aac2cd52f585b3": "92bba652761ca2bba4db9f0bd9ba942c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3d87b47bbdbcfdbe8e6909e51b7a822969ff01": "7e5d272a009e19b9d037234f833868f0",
".git/objects/af/34f5286a967a45f26bbe37667bcf52e4a89629": "8c3c84dde97e6cc94b45a7c95c6fb6c5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/c1d67830b2c0496448b7e9693580fae17effed": "8ad11c6d6d0ad735f744e3df0752fa47",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/c10865a8eaa54f85f182bdb200558ec77188f8": "ef004e4ba1a31d8e63d6924692f6eaa2",
".git/objects/ff/b2f75cdb204afc23dd36838a74df03ce4fdf7b": "14b0e1fea3f08152153e55ff85cee3b5",
".git/objects/c5/c3656b9018d7b2b649067f44072a9dfb4e54a4": "657e4038eb6fdcf63e690b169e723822",
".git/objects/c5/9e4e729a85d363634f5cbc47db0adeb4ce07ee": "bd9f8e0c93cc9966faed4839b5e13edb",
".git/objects/c2/8737aac7a7cd6da10ce1ca4837635c5b5bf83b": "9e2d17446d01bca3f785e8f3c5426958",
".git/objects/f6/3853e214d88922eb33a91096c33799cebee279": "404975aa956ac10fb51a0c46947d19ad",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/f8/065b280602c0cf60409fe177c6dd1b38775bcb": "c9f735a823f292934ffdb658f26b1bde",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/ec18e44bfb38300aa510e339486caf0537c33d": "8aae211c209f2e955a65153a331c2609",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4a/9fa1fcd580f6183c49dd254eea10a80443feef": "e5c75658fa3a042a60542f51659dc08a",
".git/objects/4a/e80319ece8e245e81057f0b8992ca880c664b9": "c7ff5d47c4d93ed4c5e7e2c5f1edefda",
".git/objects/23/defc5244151919ba645059e12c34f81320b836": "3fa18a215424dc72069ac47c745b26f1",
".git/objects/15/b1801a00c26fb68568273217df8e783761aba2": "c59cf3df2a2f84452af4e0fe00d4d854",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/47/cca834abedc20a59c003e1df9e8beb2b53a1ed": "2e44ccfb2016f321b3de95e9807f462a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/25/9d2aca9d9e2546f7caeb6c7249208c5123f298": "e77c6ce1223e793e70abeb5c02129d00",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "96fda691b849e2ce4d93525e6b5b5cf5",
".git/logs/refs/heads/main": "96fda691b849e2ce4d93525e6b5b5cf5",
".git/logs/refs/remotes/origin/main": "23ddaf29fe0265a333d46458d884493a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bf38d66627924fde45944b11bf5efcb8",
".git/refs/remotes/origin/main": "bf38d66627924fde45944b11bf5efcb8",
".git/index": "4da08b8f9c4ecd1ed199df3fbba87f43",
".git/FETCH_HEAD": "e23aecc8db78e839d64304da5000164e",
"assets/AssetManifest.json": "c4e6d91703572280525595ed95e6753f",
"assets/loading.gif": "f17fc155cd2647f830f0c9dcfe17bd5d",
"assets/NOTICES": "f8813fed44aa2fc877687d8a6ba7ad31",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "4bdbfc00ee520ac11dbdcd0dd016c45f",
"assets/fonts/MaterialIcons-Regular.otf": "e9901fb416330fe89f5305294f9e679f",
"assets/assets/images/pozadi_predmety.png": "aa3fcfc6e50adaf080d5777dd2ec3b33",
"assets/assets/images/initial_page/einstein.png": "5111627743953faca9cd2c00625dc3be",
"assets/assets/images/initial_page/stats-watch.png": "9ce6d791ad234b6cf570b350f58bc179",
"assets/assets/images/initial_page/stats-clients.png": "cdf3c4c291590a1853515b182d073a92",
"assets/assets/images/initial_page/stats-hatrow.png": "f137fb776175629c83d569d3c7b1355d",
"assets/assets/images/header_bg_green.png": "5c78f248a0b541081d5d12b5053ff5df",
"assets/assets/images/einstein.png": "5111627743953faca9cd2c00625dc3be",
"assets/assets/images/header_bg_blue.png": "9c3b1fbb09736fb8b35cd0db420cb595",
"assets/assets/images/logo_white/logo16.png": "99a419a84be6159629ea86a3159e3c64",
"assets/assets/images/logo_white/logo15.png": "5ac2920256723bd779a331ccc8ad69b1",
"assets/assets/images/logo_white/logo14.png": "a4c7dcd04fe72346239da4e588482413",
"assets/assets/images/logo_white/logo10.png": "2e8b76322620244ef8714aa31a02cb90",
"assets/assets/images/logo_white/logo11.png": "ff5aa07a2eeeb8ff8435e8bc8f4319fc",
"assets/assets/images/logo_white/logo13.png": "ef270efc908b3f12cbbe4fd7acdd0635",
"assets/assets/images/logo_white/logo12.png": "91f4062abbf718ca93424887b61c49b8",
"assets/assets/images/logo_white/logo9.png": "edff484f62b4a0a8895a7e71c7dacc3b",
"assets/assets/images/logo_white/logo8.png": "31e04be1732941328fd3d6de0b18a90c",
"assets/assets/images/logo_white/logo0.png": "a1cb5ab14925d0672f3074c6bfc9128b",
"assets/assets/images/logo_white/logo1.png": "aeed5b65c9fe82c870e7fc7116b1a20d",
"assets/assets/images/logo_white/logo3.png": "f4bce8fece6f925625a49c886a579cc6",
"assets/assets/images/logo_white/logo2.png": "bbf6578c6e4c0ec935ebbb67f545ffbe",
"assets/assets/images/logo_white/logo6.png": "b76addc5266dbd3c7998543e159580b5",
"assets/assets/images/logo_white/logo7.png": "b73a939d53d67b4a6c60ada9f4427f0b",
"assets/assets/images/logo_white/logo5.png": "946a8333496126927f36092c432f0aff",
"assets/assets/images/logo_white/logo4.png": "496e5a250e6d033843e2ece441390ae2",
"assets/assets/fonts/hand_mono.ttf": "e7f6fa53158519d78331313458e8d312",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
