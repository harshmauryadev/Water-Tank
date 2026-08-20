import type { Metadata, Viewport } from 'next';
import './globals.css';
import dynamic from 'next/dynamic';
import PWAInstaller from '../components/PWAInstaller';
import FloatingSocialSidebar from '../components/FloatingSocialSidebar';

const WaterRippleEffect = dynamic(() => import('../components/WaterRippleEffect'), {
  ssr: false,
});

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-[#14B8A6] selection:text-white"
        suppressHydrationWarning
      >
        <WaterRippleEffect />
        {children}
        <FloatingSocialSidebar />
        <PWAInstaller />
      </body>
    </html>
  );
}
