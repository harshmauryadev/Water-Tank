import type { Metadata, Viewport } from 'next';
import './globals.css';
import PWAInstaller from '../components/PWAInstaller';
import FloatingSocialSidebar from '../components/FloatingSocialSidebar';

export const metadata: Metadata = {
  title: 'Tanki Meter Pro - Smart IoT Water Pump Controller',
  description: 'Fail-safe overlay water pump controller. Real-time float level sensing, dry-run protection, 230V AC voltage monitoring, and mobile app control.',
  keywords: 'Tanki Meter, Inflection IoT, smart water tank, motor controller, dry run protection, water level sensor, float sensor',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Tanki Meter',
  },
  icons: {
    icon: '/icons/icon-192.png',
    apple: '/icons/icon-192.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0284c7',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#050914] text-slate-100 antialiased selection:bg-teal-500 selection:text-white">
        {children}
        <FloatingSocialSidebar />
        <PWAInstaller />
      </body>
    </html>
  );
}
