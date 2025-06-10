import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'lovescan.app - Links',
  description: 'Todos os links do Love Scan em um só lugar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Analytics/>
      <body>{children}</body>
    </html>
  )
}
