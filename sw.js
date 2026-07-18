const CACHE_NAME = 'valo-v13';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.png',
  'favicon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[Service Worker] Purging obsolete cache:', name);
            return caches.delete(name);
          })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const isNavigation = e.request.mode === 'navigate' || 
                       e.request.url.endsWith('index.html') || 
                       e.request.url === self.location.origin + '/';

  // Estrategia Network-First para APIs de tasas e históricos
  if (e.request.url.includes('dolarapi.com') || e.request.url.includes('criptoya.com') || e.request.url.includes('yadio.com')) {
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          return response;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Caching estratégico para el resto de assets
  if (isNavigation) {
    e.respondWith(
      fetch(e.request)
        .catch(() => caches.match('index.html'))
    );
  } else {
    e.respondWith(
      caches.match(e.request)
        .then((cachedResponse) => cachedResponse || fetch(e.request))
    );
  }
});
