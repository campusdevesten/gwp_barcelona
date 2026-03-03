// ─── SERVICE WORKER — sw.js ─────────────────────────────
// Enables offline mode by caching the app's core files.
// You don't need to edit this unless you add new static files.

const CACHE_NAME = 'barcelona-trip-v1';

// Files to cache (update this list if you add new pages/assets)
const FILES_TO_CACHE = [
  '.',
  'index.html',
  'styles.css',
  'script.js',
  'manifest.json'
];

// ─── INSTALL: cache files ──────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching app files...');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// ─── ACTIVATE: remove old caches ───────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
});

// ─── FETCH: serve from cache, fall back to network ─────
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      // If in cache and it's one of our files, serve it
      if (cached) return cached;
      // Otherwise go to network (e.g. map tiles, fonts)
      return fetch(event.request);
    })
  );
});
