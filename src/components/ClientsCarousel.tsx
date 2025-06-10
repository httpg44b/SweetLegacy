
import React from 'react';
import { Card } from '@/components/ui/card';

const ClientsCarousel = () => {
  const clients = [
    { name: "Dona Verda", age: "65 anos", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
    { name: "Seu Francisco", age: "78 anos", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
    { name: "Dona Maria", age: "82 anos", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
    { name: "Sr. Alberto", age: "70 anos", image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
    { name: "Dona Lourdes", age: "75 anos", image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cursive text-4xl md:text-5xl font-bold text-gradient mb-6">
            Nossos Clientes Queridos
          </h2>
          <p className="text-xl text-lavender-700 max-w-2xl mx-auto">
            Cada pessoa que cuidamos é especial e única para nós
          </p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
          {clients.map((client, index) => (
            <Card 
              key={index}
              className="card-gradient min-w-[280px] p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-lavender-200">
                <img 
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-elegant text-lg font-semibold text-lavender-800 mb-2">
                {client.name}
              </h3>
              <p className="text-lavender-600">
                {client.age}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ClientsCarousel;
