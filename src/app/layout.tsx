import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaylo.",
  description: "An E-commerce Website",
  icons: {
    icon: [
      { url: "/faviconv2.ico" },
      { url: "/favicon-32x32v2.png", sizes: "32x32" }
    ],
    apple: "/apple-touch-iconv2.png"
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Zaylo – Premium Online Store",
    description: "Shop premium fashion, accessories and lifestyle products.",
    url: "https://zaylo.vercel.app",
    siteName: "Zaylo",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zaylo Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaylo – Premium Online Store",
    description: "Shop premium fashion, accessories and lifestyle products.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body
        style={{
          backgroundColor: "#fcf6ef",
          fontFamily: "monospace",
          paddingTop: "100px"
        }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
