
import { Card } from '@/components/ui/card';
import { Heart, Clock, Award } from 'lucide-react';

const BenefitCards = () => {
  const benefits = [
    {
      icon: <div className="w-12 h-12 rounded-full bg-[#d9d3e3] flex items-center justify-center text-2xl">🩺</div>,
      title: "Acompanhamento Profissional",
      description: "Equipe qualificada e treinada para cuidados especializados"
    },
    {
      icon: <Heart className="w-12 h-12 text-rose-500 fill-rose-500" />,
      title: "Qualidade de Vida para o Idoso",
      description: "Promovemos bem-estar e dignidade em cada atendimento"
    },
    {
      icon: <Clock className="w-12 h-12 text-lavender-600" />,
      title: "Suporte 24h",
      description: "Disponibilidade completa quando você mais precisar"
    },
    {
      icon: <Award className="w-12 h-12 text-rose-600" />,
      title: "Excelência no Cuidado",
      description: "Padrão de qualidade reconhecido pelas famílias"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl border-0"
              style={{ backgroundColor: '#d9d3e3' }}
            >
              <div className="flex justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="font-elegant text-xl font-semibold text-lavender-800 mb-4">
                {benefit.title}
              </h3>
              <p className="text-lavender-600 leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitCards;