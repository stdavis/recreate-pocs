var cacheName = 'tiles';

this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName)
  );
});

// TODO: handle cache size getting too big and refreshing the cache with new data
// from the server
this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request).then(function (response) {
        return caches.open(cacheName).then(function (cache) {
          cache.put(event.request, response.clone());
          console.log('resource cached');
          return response;
        });
      });
    })
  );
});
