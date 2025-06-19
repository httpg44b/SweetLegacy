import React from "react";
import profileImage from "../img/about.png"; // Ajuste o caminho conforme seu projeto

const AboutUs: React.FC = () => {
  return (
    <section id="sobre-nos" className="bg-[#FFF8F6] py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt="Fundadora da Sweet Legacy"
            className="rounded-2xl shadow-xl w-80 h-auto object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B6B] mb-6 font-cursive">
            Sobre Nós
          </h2>
          <div className="text-[#5F3DC4] text-lg space-y-4 leading-relaxed">
            <p>
              A Sweet Legacy nasceu da minha experiência pessoal e transformadora
              em cuidar de idosos. Em 2023, estive na Itália, onde tive o privilégio
              de cuidar da Maria Tereza e do Giovanni. Foi ali que descobri, de
              verdade, minha vocação: oferecer cuidado com carinho, dignidade e
              respeito àqueles que construíram tantas histórias ao longo da vida.
            </p>
            <p>
              Cuidar deles foi mais do que um trabalho — foi uma troca profunda.
              Tornaram-se amigos, mestres e inspiração. Ao retornar ao Brasil,
              continuei cuidando de outros idosos, com o mesmo amor e dedicação.
              E então, percebi que era hora de dar um novo passo: criar minha
              própria agência, com um propósito claro e um nome que carrega o que
              mais acredito.
            </p>
            <p>
              <strong>Sweet Legacy</strong> significa “Doce Legado”. Para mim,
              essa é a essência do que fazemos: honrar a trajetória, as memórias
              e o legado das pessoas que cuidamos.
            </p>
            <p>
              Se você está procurando uma empresa de confiança, que trate seus pais
              ou entes queridos com o respeito e o carinho que eles merecem,
              eu te convido a conhecer a Sweet Legacy. Vamos conversar sobre como
              podemos ajudar você a proporcionar conforto, segurança e afeto a
              quem tanto já fez por você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
