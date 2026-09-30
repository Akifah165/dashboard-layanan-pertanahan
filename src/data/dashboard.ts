export type Service = {
  rank: number;
  name: string;
  y2025: number;
  y2026: number;
};

export const dashboardData = {
  source: "Pusdatin · s.d. September 2026",
  eva: [
    { label: "PPh", y2025: 11.04, y2026: 6.34 },
    { label: "BPHTB", y2025: 17.43, y2026: 16.43 },
    { label: "PNBP", y2025: 2.21, y2026: 2.22 },
    { label: "Hak Tanggungan", y2025: 677.98, y2026: 636.57 },
  ],
  totalEva: { y2025: 708.66, y2026: 661.56 },
  certifiedParcels: 97_168_227,
  registeredParcels: 129_585_582,
  totalServices: { y2025: 5_999_659, y2026: 5_978_571 },
  topServiceTotal: { y2025: 5_321_863, y2026: 5_227_645 },
  servicePeriod: "Jan–Sep (YoY)",
  topServices: [
    { rank: 1, name: "Pengecekan Sertipikat", y2025: 2_377_488, y2026: 2_370_895 },
    { rank: 2, name: "Peralihan Hak – Jual Beli", y2025: 732_206, y2026: 761_582 },
    { rank: 3, name: "Hak Tanggungan", y2025: 728_435, y2026: 671_033 },
    { rank: 4, name: "Roya", y2025: 594_520, y2026: 568_518 },
    { rank: 5, name: "Informasi Nilai Tanah atau Nilai Aset Properti", y2025: 202_204, y2026: 197_945 },
    { rank: 6, name: "Perubahan Hak Atas Tanah", y2025: 187_563, y2026: 169_124 },
    { rank: 7, name: "Surat Keterangan Pendaftaran Tanah", y2025: 138_900, y2026: 138_104 },
    { rank: 8, name: "Peralihan Hak – Pewarisan", y2025: 132_782, y2026: 138_297 },
    { rank: 9, name: "Pengukuran dan Pemetaan Kadastral", y2025: 123_939, y2026: 116_915 },
    { rank: 10, name: "Pemecahan Bidang", y2025: 103_826, y2026: 95_232 },
  ] satisfies Service[],
  electronicCertificates: {
    accumulated: 9_544_951,
    year2026: 2_851_500,
    janSep2025: 2_487_884,
    janSep2026: 2_826_359,
  },
};

export const formatNumber = (value: number) => new Intl.NumberFormat("id-ID").format(value);
export const formatTrillion = (value: number) => `${value.toFixed(2).replace(".", ",")} T`;
export const percentChange = (previous: number, current: number) => ((current - previous) / previous) * 100;
