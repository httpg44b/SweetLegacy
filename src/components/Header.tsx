
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1269a854-0af0-49e2-860f-fdb1a0d3a20e.png" 
              alt="Sweet Legacy" 
              className="h-12 w-auto"
            />
            <span className="font-cursive text-2xl font-bold text-gradient">Sweet Legacy</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-lavender-700 hover:text-rose-500 transition-colors duration-200"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-lavender-700 hover:text-rose-500 transition-colors duration-200"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('por-que-escolher')}
              className="text-lavender-700 hover:text-rose-500 transition-colors duration-200"
            >
              Por que escolher
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-lavender-700 hover:text-rose-500 transition-colors duration-200"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-lavender-700 hover:text-rose-500 transition-colors duration-200"
            >
              Contato
            </button>
          </nav>

          <Button 
            onClick={() => window.open('http://wa.me/5511965773996', '_blank')}
            className="btn-gradient rounded-full px-6 py-2 font-medium"
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
