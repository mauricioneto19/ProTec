import React from 'react';
import UrgencyTimer from './components/UrgencyTimer';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import BenefitsSection from './components/BenefitsSection';
import IncludedSection from './components/IncludedSection';
import PenDriveSection from './components/PenDriveSection';
import HowItWorksSection from './components/HowItWorksSection';
import ProblemsSection from './components/ProblemsSection';
import TestimonialsSection from './components/TestimonialsSection';
import OfferSection from './components/OfferSection';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <UrgencyTimer />
      <Header />
      <VideoSection />
      <BenefitsSection />
      <ProblemsSection />
      <IncludedSection />
      <PenDriveSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;