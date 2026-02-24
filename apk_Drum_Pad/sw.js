const CACHE_NAME = 'pad-bateria-v1';
const urlsToCache = [
  '/',
  'pad-bateria.html',
  // coloca aqui todos os arquivos que quer cachear (css inline já tá no html)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});