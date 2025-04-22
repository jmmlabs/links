import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "Jacob Meyer | Links",
  description: "Connect with Jacob Meyer across various platforms",
  generator: "Next.js",
  applicationName: "Jacob Meyer Links",
  keywords: ["Jacob Meyer", "Links", "Portfolio", "Web3", "Product Manager", "Founder"],
  authors: [{ name: "Jacob Meyer", url: "https://www.jmmlabs.xyz" }],
  creator: "Jacob Meyer",
  publisher: "JMM Labs",
  metadataBase: new URL("https://links.jmmlabs.xyz"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://links.jmmlabs.xyz",
    title: "Jacob Meyer | Links",
    description: "Connect with Jacob Meyer across various platforms",
    siteName: "Jacob Meyer Links",
    images: [
      {
        url: "/profpic.jpeg",
        width: 800,
        height: 800,
        alt: "Jacob Meyer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacob Meyer | Links",
    description: "Connect with Jacob Meyer across various platforms",
    creator: "@Jacob___Meyer",
    images: ["/profpic.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
