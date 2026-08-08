import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import HowItWorks from '@/components/HowItWorks';
import AppSection from '@/components/AppSection';
import Features from '@/components/Features';
import WhyChoose from '@/components/WhyChoose';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050914] text-slate-100 overflow-x-hidden antialiased">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <HowItWorks />
      <AppSection />
      <Features />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Contact />
      <CallToAction />
      <Footer />
      <FloatingCallButton />
    </main>
  );
}
