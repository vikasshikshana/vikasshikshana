import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://vikasshikshana.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vikas Shikshana Souharda Sahakari Ni. | Hosapete, Karnataka",
    template: "%s | Vikas Shikshana Souharda Sahakari Ni.",
  },
  description:
    "Vikas Shikshana Souharda Sahakari Niyamitha is an education-focused cooperative society based in Hosapete, Karnataka. We empower communities through education, scholarships, skill development, and cooperative values since 2005.",
  keywords: [
    "Vikas Shikshana",
    "Vikas Shikshana Souharda Sahakari",
    "vikasshikshana",
    "vikas shikshana",
    "Hosapete cooperative",
    "Karnataka education cooperative",
    "Souharda Sahakari Hosapete",
    "education society Karnataka",
    "Vikas Yuvaka Mandal",
    "Sahakari Niyamitha Hosapete",
    "cooperative society Bellary",
    "scholarship Karnataka",
  ],
  authors: [{ name: "Vikas Shikshana Souharda Sahakari Ni." }],
  creator: "Vikas Shikshana Souharda Sahakari Ni.",
  publisher: "Vikas Shikshana Souharda Sahakari Ni.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Vikas Shikshana Souharda Sahakari Ni.",
    title: "Vikas Shikshana Souharda Sahakari Ni. | Hosapete, Karnataka",
    description:
      "An education-focused cooperative society in Hosapete, Karnataka, empowering communities through education, scholarships, and skill development since 2005.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vikas Shikshana Souharda Sahakari Ni.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Shikshana Souharda Sahakari Ni. | Hosapete",
    description:
      "An education-focused cooperative society in Hosapete, Karnataka, empowering communities since 2005.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/icon.png", type: "image/png" },
    ],
    apple: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
