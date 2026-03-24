const CACHE_NAME = 'fm-planer-v1';
self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME));
});
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
