import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import WhyChoose from '@/components/WhyChoose';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden antialiased">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <HowItWorks />
      <Features />
      <WhyChoose />
      <CallToAction />
      <Footer />
    </main>
  );
}
