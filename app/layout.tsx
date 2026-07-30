import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tanki Meter by Inflection - Smart IoT Water Pump Controller',
  description: 'Fail-safe overlay water pump controller. Real-time float level sensing, dry-run protection, 230V AC voltage monitoring, and mobile app control.',
  keywords: 'Tanki Meter, Inflection IoT, smart water tank, motor controller, dry run protection, water level sensor, float sensor',
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
