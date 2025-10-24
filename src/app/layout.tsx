import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gator AI - The Future of AI Engineering Built at UF",
  description: "Harnessing HiPerGator's supercomputing power to train sovereign AI agents, automate research, and build the next generation of intelligence — right here on campus.",
  keywords: ["AI", "artificial intelligence", "University of Florida", "HiPerGator", "machine learning", "research", "sovereign AI"],
  authors: [{ name: "Gator AI Labs" }],
  creator: "Gator AI Labs",
  publisher: "University of Florida",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gator-ai.uf.edu',
    title: 'Gator AI - The Future of AI Engineering Built at UF',
    description: 'Harnessing HiPerGator\'s supercomputing power to train sovereign AI agents, automate research, and build the next generation of intelligence — right here on campus.',
    siteName: 'Gator AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gator AI - University of Florida',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gator AI - The Future of AI Engineering Built at UF',
    description: 'Harnessing HiPerGator\'s supercomputing power to train sovereign AI agents, automate research, and build the next generation of intelligence — right here on campus.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
