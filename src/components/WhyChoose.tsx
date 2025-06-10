
import React from 'react';
import { Heart } from 'lucide-react';

const WhyChoose = () => {
  return (
    <section id="por-que-escolher" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Heart className="w-20 h-20 text-lavender-400 fill-lavender-400" />
        </div>
        <div className="absolute top-40 right-20">
          <Heart className="w-16 h-16 text-rose-400 fill-rose-400" />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <Heart className="w-24 h-24 text-lavender-300 fill-lavender-300" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cursive text-4xl md:text-5xl font-bold text-gradient mb-12">
            Por Que Escolher a Sweet Legacy?
          </h2>
          
          <div className="card-gradient rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="prose prose-lg mx-auto text-lavender-700 leading-relaxed space-y-6">
              <p className="text-lg md:text-xl">
                À medida que nossos entes queridos envelhecem, suas necessidades de cuidado tornam-se mais particulares e exigem atenção especial. É por isso que a Sweet Legacy conta com uma equipe treinada e comprometida, oferecendo suporte personalizado para idosos e pessoas que necessitam de assistência.
              </p>
              
              <p className="text-lg md:text-xl">
                Nossos cuidadores estão disponíveis para atender da forma que melhor se adapte à sua rotina, seja de maneira temporária, contínua ou apenas em situações específicas. Com serviços totalmente flexíveis, ajustados às necessidades individuais, proporcionamos mais qualidade de vida, tranquilidade e bem-estar tanto para quem recebe o cuidado quanto para suas famílias.
              </p>
              
              <p className="text-lg md:text-xl font-medium">
                Na Sweet Legacy, cuidamos com carinho, respeito e dedicação, preservando o legado de amor e cuidado que sua família merece. 💜
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
