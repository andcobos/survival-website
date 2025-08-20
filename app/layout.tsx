import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const siteUrl = "https://tactival.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tactival - Essential Gear & Knowledge",
  description:
    "Your trusted source for survival gear, EDC essentials, and wilderness knowledge. Quality equipment and expert guidance for modern survivalists.",
  keywords:
    "survival gear, EDC, everyday carry, wilderness, tactical, outdoor equipment, survival skills, bushcraft",
  authors: [{ name: "Tactival Team" }],
  creator: "Tactival",
  publisher: "Tactival",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Tactival - Essential Gear & Knowledge",
    description:
      "Your trusted source for survival gear, EDC essentials, and wilderness knowledge.",
    siteName: "Tactival",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tactival - Essential Gear & Knowledge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tactival - Essential Gear & Knowledge",
    description:
      "Your trusted source for survival gear, EDC essentials, and wilderness knowledge.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased opacity-100`}>
      <body className="bg-[#0F1517] text-[#E6ECEA] min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
