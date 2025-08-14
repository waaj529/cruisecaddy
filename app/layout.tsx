import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://cruisecaddy.com'),
  title: 'Caddy Cruise - Pink Cadillac Boat Tours in Sarasota | BYOB Cruise Experience',
  description: 'Experience Sarasota Bay like never before! Join our unique BYOB cruise tours on a pink Cadillac-shaped boat. 2-hour and 4-hour tours available. Book your unforgettable adventure today!',
  keywords: 'Sarasota boat tours, BYOB cruise, pink Cadillac boat, Sarasota Bay, cruise tours Florida, unique boat experience',
  openGraph: {
    title: 'Caddy Cruise - Pink Cadillac Boat Tours in Sarasota',
    description: 'Cruise Sarasota Bay in a unique pink Cadillac boat. BYOB friendly tours with unforgettable views!',
    url: 'https://cruisecaddy.com',
    siteName: 'Caddy Cruise',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Setmore booking widget script (anchor rendered where needed) */}
        <Script
          id="setmore_script"
          src="https://assets.setmore.com/integration/static/setmoreIframeLive.js"
          strategy="afterInteractive"
        />
        {/* Hidden Setmore anchor to trigger in-page booking popup; href will be overwritten per service */}
        <a
          id="Setmore_button_iframe"
          href="https://caddycruise.setmore.com"
          style={{ display: 'none' }}
          aria-hidden="true"
        >
          Book with Setmore
        </a>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}