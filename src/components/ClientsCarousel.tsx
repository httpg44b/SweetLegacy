import React from 'react';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin } from 'lucide-react';

const ClientsCarousel = () => {
  const clients = [
    {
      name: "Maria Tereza",
      age: "80 anos",
      country: "Itália",
      image: new URL('../img/mariatereza.jpg', import.meta.url).href
    },
    {
      name: "Francisco",
      age: "82 anos",
      country: "Itália",
      image: new URL('../img/francisco.jpg', import.meta.url).href
    },
    {
      name: "Giovanna",
      age: "73 anos",
      country: "Itália",
      image: new URL('../img/giovanna.jpg', import.meta.url).href
    },
    {
      name: "Lourdes",
      age: "85 anos",
      country: "Itália",
      image: new URL('../img/lourdes.jpg', import.meta.url).href
    }
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

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem key={index} className="w-full">
                  <Card className="card-gradient overflow-hidden shadow-xl transition-all duration-300 transform rounded-3xl">
                    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                      <img 
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="font-elegant text-2xl font-semibold mb-2">
                          {client.name}
                        </h3>
                        <p className="text-lg opacity-90">{client.age}</p>
                        <div className="flex items-center gap-2 mt-1 text-white/80">
                          <MapPin className="w-4 h-4" />
                          <span>{client.country}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
