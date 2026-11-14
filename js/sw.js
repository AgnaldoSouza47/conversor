const CACHE_NAME = 'conversor-v1';
const ASSETS = [
  'conversor de medidas.html',
  'conversor.css',
  'manifest.json',
  'aplicativo-movel icon 192.png',
  'aplicativo-movel icon 512.png'
];

// Instala o aplicativo e guarda os arquivos no cache offline
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Busca os arquivos direto do cache quando estiver offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});