import { Check } from "lucide-react";

const benefits = [
  {
    text: "Sente dificuldade na leitura da Bíblia, não sabe por onde começar, não consegue entender com clareza o que está escrito e esquece rapidamente o que foi lido;",
  },
  {
    text: "Quer fazer da leitura da Bíblia um hábito e criar constância no seu devocional através de uma didática leve, inovadora e eficiente, e um design atrativo que torna o estudo divertido;",
  },
  {
    text: "É mãe/pai e deseja ter propriedade para aplicar e levar princípios cristãos ao coração do seu filho(a) enquanto cria tempo de qualidade em família.",
  },
];

const audiences = ["Para adultos", "Para crianças", "Para todas as idades"];

const ForYouSection = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-8">
          O Mapa Didático da Bíblia é pra você que:
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 bg-primary-foreground/10 p-4 rounded-lg">
              <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
              <p className="text-primary-foreground text-sm md:text-base leading-relaxed">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {audiences.map((audience, index) => (
            <span 
              key={index}
              className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold"
            >
              {audience}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
