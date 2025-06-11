import React from 'react';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Administração de medicações orais",
      image: "https://i.postimg.cc/fRqdwVbC/card1.webp",
      description: "Controle rigoroso de horários e dosagens"
    },
    {
      title: "Monitoramento de sinais vitais",
      image: "https://i.postimg.cc/g0NG9hkc/card2.webp",
      description: "Acompanhamento constante da saúde"
    },
    {
      title: "Cuidadores para Alzheimer e Parkinson",
      image: "https://i.postimg.cc/52j0m1Bk/card3.webp",
      description: "Especialização em cuidados neurológicos"
    },
    {
      title: "Acompanhamento em deslocamentos e passeios",
      image: "https://i.postimg.cc/3wkQ6xNz/card4.webp",
      description: "Segurança e companhia em atividades externas"
    },
    {
      title: "Acompanhamento hospitalar",
      image: "https://i.postimg.cc/GhhQC7nn/card5.webp",
      description: "Presença reconfortante em momentos difíceis"
    },
    {
      title: "Rotinas de higiene pessoal",
      image: "https://i.postimg.cc/0jf3WzRg/card6.webp",
      description: "Cuidados com dignidade e respeito"
    },
    {
      title: "Preparo de refeições e necessidades cotidianas",
      image: "https://i.postimg.cc/nL8qwZ4T/card7.webp",
      description: "Alimentação saudável e cuidados domésticos"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-lavender-50/50 to-rose-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cursive text-4xl md:text-5xl font-bold text-gradient mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-lavender-700 max-w-2xl mx-auto">
            Oferecemos uma gama completa de cuidados personalizados para garantir o bem-estar dos nossos idosos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              style={{ backgroundColor: '#f4a79b' }}
              className="overflow-hidden border-none shadow-none hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl"
            >
              <div className="relative h-50 w-full flex items-center justify-center">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="max-w-full max-h-full object-contain p-4"
                  style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>
              <div className="p-6">
                <h3 className="font-elegant text-lg font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/90">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
