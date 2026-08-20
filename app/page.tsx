import dynamic from 'next/dynamic';
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

const ReactWaterWaveWrapper = dynamic(() => import('@/components/ReactWaterWaveWrapper'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden antialiased">
      <Navbar />
      <ReactWaterWaveWrapper imageUrl="/images/exact-hero-bg.png" dropRadius={25} perturbance={0.03}>
        <Hero />
      </ReactWaterWaveWrapper>
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
