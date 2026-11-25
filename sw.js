// Service worker minimal: membuat Kas Kita bisa dipasang sebagai aplikasi.
// Sengaja TIDAK menyimpan cache, agar data keuangan selalu terbaru dari server.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
