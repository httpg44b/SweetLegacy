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
    { name: "Dona Verda", age: "65 anos", image: "https://images.pexels.com/photos/18429461/pexels-photo-18429461/free-photo-of-mulher-cama-leito-comendo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
    { name: "Seu Francisco", age: "78 anos", image: "https://i.postimg.cc/yxH3cJpc/cliente.webp" },
    { name: "Dona Maria", age: "82 anos", image: "https://images.pexels.com/photos/16364307/pexels-photo-16364307/free-photo-of-mulheres-bebida-drink-vidro.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
    { name: "Sr. Alberto", age: "70 anos", image: "https://images.pexels.com/photos/7551661/pexels-photo-7551661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Dona Lourdes", age: "75 anos", image: "https://images.pexels.com/photos/18429416/pexels-photo-18429416/free-photo-of-mulher-cama-leito-sentado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
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
                        <p className="text-lg opacity-90">
                          {client.age}
                        </p>
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
