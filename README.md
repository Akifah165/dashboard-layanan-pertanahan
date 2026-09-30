# Ringkasan Layanan Pertanahan

Dashboard satu halaman ATR/BPN untuk merangkum EVA layanan, volume transaksi, pendaftaran tanah, dan sertipikat elektronik.

## Menjalankan

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:3000`. Untuk membuat dan menjalankan build produksi, gunakan `pnpm build` lalu `pnpm start`.

## Struktur

- `src/data/dashboard.ts` — angka statis dari bahan Google Slides, tipe data, dan formatter angka.
- `src/app/page.tsx` — dashboard, visualisasi perbandingan, pilihan layanan, dan tabel detail.
- `src/app/globals.css` — tema visual dan breakpoint desktop, tablet, serta mobile.

Angka sengaja dipisahkan dari komponen agar mudah diganti dengan sumber API/database. Jika data dinamis ditambahkan, pertahankan normalisasi struktur `dashboardData` dan formatter yang sama agar komponen dapat terus dipakai.
