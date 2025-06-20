
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import background from '../img/background.jpg'

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={background}
          alt="Cuidado com amor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lavender-900/70 via-lavender-800/60 to-rose-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Floating Hearts */}
          <div className="absolute -top-10 left-10 animate-float">
            <Heart className="w-8 h-8 text-rose-300 fill-rose-300" />
          </div>
          <div className="absolute -top-5 right-20 animate-float" style={{ animationDelay: '1s' }}>
            <Heart className="w-6 h-6 text-lavender-300 fill-lavender-300" />
          </div>
          <div className="absolute top-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
            <Heart className="w-5 h-5 text-rose-200 fill-rose-200" />
          </div>

          <h1 className="font-cursive text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Cuidar de quem cuidou de nós
            <span className="block text-rose-300">é honrar um legado</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-lavender-100 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Apoio profissional e humanizado aos idosos que você ama
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={() => window.open('http://wa.me/5511965773996', '_blank')}
              size="lg"
              className="btn-gradient rounded-full px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Solicite um Orçamento
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path 
            d="M1200 120L0 16.48V120H1200Z" 
            fill="url(#gradient1)"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(248 246 255)" />
              <stop offset="100%" stopColor="rgb(254 242 242)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
