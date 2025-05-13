import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HeroSection from './components/home/HeroSection';
import FeatureSection from './components/home/FeatureSection';
import ServerStats from './components/home/ServerStats';
import VipSection from './components/vip/VipSection';
import FactionsSection from './components/faction/FactionsSection';
import GallerySection from './components/home/GallerySection';
import ContactSection from './components/contact/ContactSection';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServerStats />
        <FeatureSection />
        <VipSection />
        <FactionsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;