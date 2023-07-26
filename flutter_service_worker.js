'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "05fa3f3e963da579d3b420feb04e68d3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7fbef0c03c855470566f25810b40cf8a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c8c326d81e4d7119e88dc704ded6f9cb",
".git/logs/refs/heads/master": "c8c326d81e4d7119e88dc704ded6f9cb",
".git/objects/02/aa32b4ca842771fffc67ca71863536eb0bb692": "8ad55b06eda48d2f89774c87be44d31a",
".git/objects/04/1ddbc1886d1f81293c17150f944c2d826e2341": "e40cb1075780efd7ec5e8d107a04cab6",
".git/objects/0e/4c4e27e075ddcc3e8d498f8b463d13d50cc1b7": "bc0cc03fdc230d0e3faef2158b383417",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/3160d87dbd0eac234ace5c250d5f49e6f89497": "c2834f93fb40589cfc2f5135e997729b",
".git/objects/23/913ae1ab688a3ef29af07294013e18e6e1157e": "043feb4fe3bb135d119cfa3354700c8f",
".git/objects/27/9fc1e3a0d86bbc3701f441c2d1aa7c650276d8": "f68afed7e6e632fa31a694374f8dde79",
".git/objects/28/99fa7dc68d21dc9137ca458991d1bd50dc47c1": "2053c7641e5cb89a0fe8680af9fc3d19",
".git/objects/2f/cd26d8281bf807e593908fe273a7a51039c549": "2725e0d25173506a7c2cc7958251f2d8",
".git/objects/31/f2e67bf32da6adfb5ba5e8a2c3a049a4d2fd7b": "72719bb79a5afb87091f3a9aa839c313",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/a02bacae999c6a2bc48f74e378e98192d2cf42": "86025f6e5e074d057c714ff7d137b788",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/fb8716058b7a96021e6379abb63f244684a945": "5786b80103e02e3b5ed7581f4676f846",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5e/4b3c3bacf545fc06198d776f785799424a93fa": "1adaffcd0f1d2000c81f079e7f5727bf",
".git/objects/65/6db66684354d3b5bca92e5c395e1ffcdf4a472": "2ff96512a6010bfd397902a11d325c79",
".git/objects/67/205530716a0060f9739acdfe02041122d3740e": "92df9b565e7f8ce439bc149b643f2297",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/71/15e17f6eec18bb4029f579b2604bd20ad83f75": "24a236c33b714c95e8408b67701117c7",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/e4201af6378ac87bf9e118fbab6553c7fd355c": "6424d0690fca72c41d98dc807b8854a0",
".git/objects/76/55ebd4ed5e87d85a6adb67c9591fb2c79018a0": "8fb946ff308318752e4a5d105a40fe47",
".git/objects/79/56f390bebaa4bdefbff5aab351dac2d3e1b1f4": "2ba68c06502ebe74b9b5c1307fea22e7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/c381b8235a399021f668b70dc6a0a2f1cd97f8": "3a34ae59095da40dd1f806eba0479365",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/b7015e7f75008a29abb878ded9c265ed449344": "887ff33dc1e4e96c04fcce0655285fd8",
".git/objects/90/ddc301c9b07b6a254f7e128d00de1ffc440b45": "013f74ea8906c27683676d587f02a21d",
".git/objects/9e/ae5fbbcc3882c7a6e7eabc21a52765d4512d39": "86f11f19ae4f41f487bf2ccd36dc2171",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/e771414a32a148fbe81ec704ea1db760d41494": "6192937099dddb5b07c14583763ea9c2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/fc97a314286016cfd121e4fff6ebfb4b90df04": "bc7a2ce2f6194246fe92c9f67918086c",
".git/objects/af/e1fc4e2532ba7571c7a664545d7993c60b9253": "132a8fd2d191463e5f2c48584a4fd710",
".git/objects/b0/441f5bd0d3dcdf395e202754d0ae908a37dbb1": "3bbc90961c53d6161a306b26a1e170d5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/a03b0d7f2a269a4dac15c812ae000b87c2a6a0": "edd848260e3c556727075ec78180d593",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d7eaa6ce53d5f2da3134add000d94e7b22eddd": "e83630aa8551b5c2a4a2c2a222b3b0b2",
".git/objects/e2/8a8373067419c7fec89fc78ca44c0197e77ace": "51212de197954890ada69dd9061ae9e1",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/141c1116941db2a0b15e7a39384ffa1d14a37c": "a57957d14a8c59775bff3fe7c1ae7cff",
".git/objects/ea/ce24a03c42f721453fe3d9940dc51c81ea60ee": "5bd2dd28e3e01544d57cfc1124daa65f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/252b3fd77a7e750bca4eb7a4344ff86cf4260c": "48a36e3486d52f3ac8537891a4700cfe",
".git/objects/fc/5ee92b165fc915e6c29d8bc83f439fe9ba2747": "b1fb7225c0e2a105100cc258c956aea4",
".git/objects/fd/3740395fdb43b6a09872f7b3c145b8ebc731a1": "dec974b50dd69bff7d759b7bddd582d4",
".git/refs/heads/master": "36058ba56173f4a256e7d4d199604e81",
"assets/AssetManifest.json": "14b9901a7cb0e2449423ea6a3e65f620",
"assets/assets/c%2523_logo.png": "e8460f0d8b9df01e9460bfd1ade0e8c8",
"assets/assets/dart_logo.png": "c979b430b2da155059ebc0a22b0a26ac",
"assets/assets/expressjs.png": "8a0b1338936f3d3e6ba00784130527ed",
"assets/assets/firebase_logo.png": "c24b6b9c0fcd84c7b258879880472660",
"assets/assets/flutter_logo.png": "70135fb5474e65fa678024389564b59e",
"assets/assets/fonts/Montserrat-VariableFont_wght.ttf": "52a37115b1d8d5d6ae0b0e373e692c9d",
"assets/assets/fonts/Oswald-VariableFont_wght.ttf": "ca399fd2286e6d1e50bd65bd950b33ef",
"assets/assets/github.png": "bb04d77a846e6beca811c4be1d8e3442",
"assets/assets/git_logo.png": "ab40d02f0aa8bf85de12fd45bda5b0c0",
"assets/assets/google_map.png": "e232c77edda461d9a4a2a7184293606d",
"assets/assets/hackerrank.png": "4e8cd32a4abaa7f088929c03bf9b01ce",
"assets/assets/instagram.png": "82351f7d047150af38104b5468bde238",
"assets/assets/kiet.jpg": "ee906d2ffd6d4dca31bb71cc17902b28",
"assets/assets/linkedin.png": "f76e903c2bf4fb0c8ed64eccc0972e2e",
"assets/assets/mongodb.png": "95a159ff13e5784dc37dcaa8b9344fb2",
"assets/assets/mysql_logo.png": "22053d1b7574fc820199fe97e0744714",
"assets/assets/nodejs.jpg": "d5404dc1115ab25beab7f1b7363c37a6",
"assets/assets/p1.png": "ed1165ff3b608f7fb4be9f349484714b",
"assets/assets/postman_logo.png": "df4716aaf3cc5b918aa6eec27b66a0d9",
"assets/assets/project1.PNG": "8667962738fd69258099896f8bb9216c",
"assets/assets/restapi.jpeg": "4ab6044d099c6d96d8e44df5dfac2722",
"assets/assets/sql.png": "3ba741de8d02bf7d4d0efdd38dea06b9",
"assets/FontManifest.json": "4477e41bcbd04b3be2c08ba461166282",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "dd09cda92efa4ff9e77b3b43caaa4fc6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "73d0c7246d842630fe3f6cecf13104eb",
"/": "73d0c7246d842630fe3f6cecf13104eb",
"main.dart.js": "ba111b34c690ffbe4fd6f456476e6e91",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
