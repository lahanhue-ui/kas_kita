# Kas Kita — Aplikasi Keuangan

Tampilan web Kas Kita untuk GitHub Pages. Data, login, dan perhitungan tetap berjalan di
Google Apps Script + Google Spreadsheet milik Anda. Repo ini hanya berisi tampilannya.

```
GitHub Pages (index.html)  ──fetch──▶  Apps Script (Code.gs, doPost)  ──▶  Google Spreadsheet
```

## Isi repo

| File | Fungsi |
|---|---|
| `index.html` | Seluruh aplikasi (tampilan + logika halaman) |
| `manifest.webmanifest`, `sw.js` | Agar bisa dipasang di layar utama ponsel seperti aplikasi |
| `icons/` | Logo, favicon, ikon aplikasi |

## Pemasangan

1. **Perbarui Apps Script.** Tempel `Code.gs` versi terbaru (sudah berisi fungsi `doPost`) ke
   project Apps Script Anda, simpan, lalu **Deploy → Manage deployments → ✏️ → Version: New version → Deploy**.
   Salin URL aplikasi web yang berakhiran `/exec`.
2. **Isi URL di `index.html`.** Cari baris berikut, lalu tempel URL `/exec` di antara tanda kutip:
   ```js
   const API_URL = '';
   ```
   menjadi
   ```js
   const API_URL = 'https://script.google.com/macros/s/AKfy.../exec';
   ```
3. **Buat repo GitHub** (mis. `kaskita`), lalu unggah semua file ini termasuk folder `icons`
   (**Add file → Upload files**, seret semua file, **Commit changes**).
4. **Aktifkan GitHub Pages:** **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
   Setelah 1–2 menit aplikasi tersedia di `https://<username>.github.io/kaskita/`.

## Catatan

- Jika `API_URL` dibiarkan kosong, aplikasi berjalan dalam **mode pratinjau** dengan data contoh.
- Setiap kali `Code.gs` diubah, buat **New version** pada deployment yang sama agar URL tidak berubah.
- Pengaturan deployment Apps Script harus: *Execute as: Me*, *Who has access: Anyone*.
- Domain sendiri: **Settings → Pages → Custom domain**, lalu ikuti petunjuk DNS dari GitHub.
- Repo publik berarti kode tampilan bisa dilihat orang, tetapi **data tetap aman**: semua data hanya
  bisa diakses setelah login, dan kata sandi tersimpan sebagai hash di spreadsheet Anda.
