import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://cruisecaddy.com'),
  title: 'Cruisecaddy - Pink Cadillac Boat Tours in Sarasota | BYOB Cruise Experience',
  description: 'Experience Sarasota Bay like never before! Join our unique BYOB cruise tours on a pink Cadillac-shaped boat. 2-hour and 4-hour tours available. Book your unforgettable adventure today!',
  keywords: 'Sarasota boat tours, BYOB cruise, pink Cadillac boat, Sarasota Bay, cruise tours Florida, unique boat experience',
  openGraph: {
    title: 'Cruisecaddy - Pink Cadillac Boat Tours in Sarasota',
    description: 'Cruise Sarasota Bay in a unique pink Cadillac boat. BYOB friendly tours with unforgettable views!',
    url: 'https://cruisecaddy.com',
    siteName: 'Cruisecaddy',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}