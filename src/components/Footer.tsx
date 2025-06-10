
import React from 'react';
import { Heart, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-gradient-to-br from-lavender-900 to-rose-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <img 
                src="/lovable-uploads/1269a854-0af0-49e2-860f-fdb1a0d3a20e.png" 
                alt="Sweet Legacy" 
                className="h-12 w-auto brightness-0 invert"
              />
              <span className="font-cursive text-2xl font-bold">Sweet Legacy</span>
            </div>
            <p className="text-lavender-100 leading-relaxed mb-6">
              Cuidando com amor, carinho e dedicação dos nossos idosos queridos. 
              Seu legado de amor está em boas mãos.
            </p>
            <div className="flex justify-center md:justify-start">
              <Heart className="w-8 h-8 text-rose-300 fill-rose-300 animate-pulse" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-elegant text-xl font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-5 h-5 text-rose-300" />
                <span className="text-lavender-100">(11) 96577-3996</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <span className="text-2xl">📧</span>
                <span className="text-lavender-100">contato@sweetlegacy.com.br</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <span className="text-2xl">📍</span>
                <span className="text-lavender-100">São Paulo - SP</span>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center">
            <h3 className="font-elegant text-xl font-semibold mb-6">Fale Conosco</h3>
            <p className="text-lavender-100 mb-6">
              Entre em contato conosco agora mesmo pelo WhatsApp
            </p>
            <button 
              onClick={() => window.open('http://wa.me/5511965773996', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              💬 Chamar no WhatsApp
            </button>
          </div>
        </div>

        <div className="border-t border-lavender-700 mt-12 pt-8 text-center">
          <p className="text-lavender-200">
            © 2024 Sweet Legacy. Todos os direitos reservados. Feito com 💜 para cuidar de quem você ama.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
