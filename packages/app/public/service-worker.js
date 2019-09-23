const cacheName = 'retros';

const filesToCache = [
  '/',
  './index.html',
  './fonts/**.*',
  './img/**.*',
  './icons/**.*',
  './css/**.*',
  './js/**.*'
];

/* Start the service worker and cache all of the app's content */
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  )
})

/* Serve cached content when offline */
// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  )
})
