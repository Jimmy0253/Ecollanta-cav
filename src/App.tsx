import { useCallback, useState } from 'react';
import { ProductItem } from './data/ecollantaData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { VideoSection } from './components/VideoSection';
import { CommitmentSection } from './components/CommitmentSection';
import { ProductsSection } from './components/ProductsSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ProcessSection } from './components/ProcessSection';
import { WhyUsSection } from './components/WhyUsSection';
import { InnovationSection } from './components/InnovationSection';
import { PricingSection } from './components/PricingSection';
import { PurposeSection } from './components/PurposeSection';
import { ContactFooter } from './components/ContactFooter';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(
    null
  );
  const [preselectedInterest, setPreselectedInterest] = useState('');

  const handleNavigate = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    target.scrollIntoView({
      behavior: prefersReduced ? 'auto' : 'smooth',
      block: 'start',
    });
  }, []);

  const handleConsultInterest = useCallback(
    (interestLabel: string) => {
      setSelectedProduct(null);
      setPreselectedInterest(interestLabel);
      handleNavigate('contacto');
    },
    [handleNavigate]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F2] text-[#292929]">
      <Navbar onNavigate={handleNavigate} />

      <main className="flex-1">
        <HeroSection onNavigate={handleNavigate} />
        <StorySection />
        <VideoSection />
        <CommitmentSection />
        <ProductsSection onSelectProduct={setSelectedProduct} />
        <ProcessSection />
        <WhyUsSection />
        <InnovationSection onSelectCustomization={handleConsultInterest} />
        <PricingSection onConsultProduct={handleConsultInterest} />
        <PurposeSection onNavigate={handleNavigate} />
      </main>

      <ContactFooter
        preselectedInterest={preselectedInterest}
        onNavigate={handleNavigate}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquireProduct={handleConsultInterest}
      />
    </div>
  );
}
