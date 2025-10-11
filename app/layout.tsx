import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'kwsites.co.uk',
  icons: { icon: '/kwsites-logo.svg' },
  verification: {
    google: 'ORz6tB0hkB7rktH63i-lP3KX7fzkZVGtfVpSHJfE5cY',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
