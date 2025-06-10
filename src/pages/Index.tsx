
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BenefitCards from '@/components/BenefitCards';
import WhyChoose from '@/components/WhyChoose';
import Services from '@/components/Services';
import ClientsCarousel from '@/components/ClientsCarousel';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BenefitCards />
      <WhyChoose />
      <Services />
      <ClientsCarousel />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
