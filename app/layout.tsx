import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AquaSense Pro - Smart Water Tank Monitoring & Automation',
  description: 'Real-time water tank level monitoring, leak detection, automated pump control, and water usage analytics for smart homes & industrial facilities.',
  keywords: 'smart water tank, water monitor, automated water pump, leak sensor, IoT water level',
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
      </body>
    </html>
  );
}
