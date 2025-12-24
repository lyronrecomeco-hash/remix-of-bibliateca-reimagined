import { Globe, Languages, Smartphone } from "lucide-react";

const barriers = [
  {
    icon: Globe,
    title: "Barreira Cronológica",
    description: "A Bíblia não está organizada em ordem cronológica, o que dificulta entender a sequência dos acontecimentos.",
  },
  {
    icon: Languages,
    title: "Barreira Linguística",
    description: "Termos antigos e traduções podem dificultar a compreensão do verdadeiro significado do texto.",
  },
  {
    icon: Smartphone,
    title: "Barreira Tecnológica",
    description: "No mundo digital de hoje, manter o foco na leitura se tornou um verdadeiro desafio.",
  },
];

const BarriersSection = () => {
  return (
    <section className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          Por que tantas pessoas têm dificuldade em{" "}
          <span className="text-primary">ler a Bíblia?</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Existem três grandes barreiras que impedem as pessoas de manterem uma leitura consistente:
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {barriers.map((barrier, index) => (
            <div key={index} className="bg-background p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <barrier.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {barrier.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {barrier.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarriersSection;
