import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ringkasan Layanan Pertanahan · ATR/BPN",
  description: "Dashboard ringkasan layanan pertanahan, nilai ekonomi, dan sertipikasi tanah elektronik.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
