
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Qual a importância do cuidado domiciliar?",
      answer: "O cuidado domiciliar permite que o idoso permaneça em seu ambiente familiar, mantendo sua rotina e vínculos afetivos. Isso contribui significativamente para o bem-estar emocional e físico, além de proporcionar um atendimento mais personalizado e humanizado."
    },
    {
      question: "Quem é o cuidador de idosos?",
      answer: "O cuidador de idosos é um profissional qualificado e treinado para oferecer assistência personalizada a pessoas da terceira idade. Nossa equipe é composta por profissionais experientes, empáticos e dedicados, que passam por capacitação contínua para garantir o melhor cuidado possível."
    },
    {
      question: "Quais os locais em que o serviço está disponível?",
      answer: "Atendemos toda a região metropolitana de São Paulo e cidades próximas. Para consultar disponibilidade em sua localidade específica, entre em contato conosco pelo WhatsApp. Nosso objetivo é levar nossos cuidados especializados onde quer que você precise."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-rose-50/50 to-lavender-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cursive text-4xl md:text-5xl font-bold text-gradient mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-lavender-700">
              Esclarecemos suas principais dúvidas sobre nossos serviços
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-gradient rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="font-elegant text-lg font-semibold text-lavender-800 hover:text-rose-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lavender-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
