
import React from 'react';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Administração de medicações orais",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Controle rigoroso de horários e dosagens"
    },
    {
      title: "Monitoramento de sinais vitais",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Acompanhamento constante da saúde"
    },
    {
      title: "Cuidadores para Alzheimer e Parkinson",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Especialização em cuidados neurológicos"
    },
    {
      title: "Acompanhamento em deslocamentos e passeios",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Segurança e companhia em atividades externas"
    },
    {
      title: "Acompanhamento hospitalar",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Presença reconfortante em momentos difíceis"
    },
    {
      title: "Rotinas de higiene pessoal",
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Cuidados com dignidade e respeito"
    },
    {
      title: "Preparo de refeições e necessidades cotidianas",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
              className="card-gradient overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="font-elegant text-lg font-semibold text-lavender-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-lavender-600">
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
