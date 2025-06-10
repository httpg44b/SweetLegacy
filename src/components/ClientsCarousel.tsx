
import React from 'react';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ClientsCarousel = () => {
  const clients = [
    { name: "Dona Verda", age: "65 anos", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Seu Francisco", age: "78 anos", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Dona Maria", age: "82 anos", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Sr. Alberto", age: "70 anos", image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Dona Lourdes", age: "75 anos", image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
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

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {clients.map((client, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="card-gradient overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl">
                    <div className="relative h-80 md:h-96 overflow-hidden">
                      <img 
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="font-elegant text-xl md:text-2xl font-semibold mb-2">
                          {client.name}
                        </h3>
                        <p className="text-lg opacity-90">
                          {client.age}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
