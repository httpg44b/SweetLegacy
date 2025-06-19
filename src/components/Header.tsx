import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import './styles.css';
import logo from '../img/logo.png';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="headerContainer">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              id="logo"
              src={logo}
              alt="Sweet Legacy" 
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-lg">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="botHead text-lavender-700 hover:text-rose-500 transition-colors duration-200"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="botHead text-lavender-700 hover:text-rose-500 transition-colors duration-200"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('por-que-escolher')}
              className="botHead text-lavender-700 hover:text-rose-500 transition-colors duration-200"
            >
              Por que escolher?
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="botHead text-lavender-700 hover:text-rose-500 transition-colors duration-200"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="botHead text-lavender-700 hover:text-rose-500 transition-colors duration-200"
            >
              Contato
            </button>
            <button 
              onClick={() => scrollToSection('sobre-nos')}
              className="botHead text-lavender-700 hover:text-rose-500 transition-colors duration-200"
            >
              Sobre Nós
            </button>
          </nav>

          <Button 
            onClick={() => window.open('http://wa.me/5511965773996', '_blank')}
            className="btn-gradient mr-6"
          >
            FALE CONOSCO
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
