import type { Metadata, Viewport } from "next"
import { DM_Sans, Fraunces } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" })

export const metadata: Metadata = {
  title: "CHIKEUN – Ayam Segar & Produk Ayam",
  description: "CHIKEUN menyediakan ayam segar dan produk ayam berkualitas untuk kebutuhan rumah tangga, UMKM kuliner, restoran, katering, dan bisnis makanan.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://chikeun.id"),
  alternates: { canonical: "/" },
  openGraph: { title: "CHIKEUN – Ayam Segar & Produk Ayam", description: "Ayam segar berkualitas untuk kebutuhan rumah dan usaha.", type: "website" },
  twitter: { card: "summary_large_image", title: "CHIKEUN – Ayam Segar & Produk Ayam", description: "Ayam segar berkualitas untuk kebutuhan rumah dan usaha." },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: "#f7f5ed", width: "device-width", initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body className={`${dmSans.variable} ${fraunces.variable}`}>{children}</body></html>
}
