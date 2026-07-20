const CACHE_NAME = 'valo-v20';
const ASSETS = [
  './',
  'index.html',
  'manifest.json',
  'icon.png',
  'favicon.png'
];

self.addEventListener('message', (e) => {
  if (e.data && e.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

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
            console.log('[Service Worker Valo] Eliminando caché obsoleta:', name);
            return caches.delete(name);
          })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const isNavigation = e.request.mode === 'navigate' || 
                       e.request.url.endsWith('index.html') || 
                       e.request.url.endsWith('/valo/') ||
                       e.request.url.endsWith('/valo') ||
                       e.request.url === self.location.origin + '/';

  const isApiRequest = e.request.url.includes('dolarapi.com') ||
                       e.request.url.includes('criptoya.com') ||
                       e.request.url.includes('yadio.io');

  if (isNavigation || isApiRequest) {
    // Estrategia Network-First: Intentar red primero para obtener siempre el último despliegue o tasas reales al día.
    // Si falla (offline en iOS/Android), servir desde la caché guardada.
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          if (response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
          }
          return response;
        })
        .catch(() => {
          return caches.match(e.request).then((res) => {
            return res || caches.match('index.html') || caches.match('./');
          });
        })
    );
  } else {
    // Para recursos estáticos (imágenes, manifest, etc.), Cache-First con fallback de red
    e.respondWith(
      caches.match(e.request).then((res) => {
        return res || fetch(e.request).then((response) => {
          if (response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
          }
          return response;
        });
      })
    );
  }
});
