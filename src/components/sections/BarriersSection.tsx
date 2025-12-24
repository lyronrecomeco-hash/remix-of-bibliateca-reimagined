import { Button } from "@/components/ui/button";

const barriers = [
  {
    emoji: "📅",
    title: "Barreira Cronológica",
    description: "A Bíblia não está organizada em ordem cronológica, o que dificulta entender a sequência dos acontecimentos.",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    emoji: "📖",
    title: "Barreira Linguística",
    description: "Termos antigos e traduções podem dificultar a compreensão do verdadeiro significado do texto.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    emoji: "📱",
    title: "Barreira Tecnológica",
    description: "No mundo digital de hoje, manter o foco na leitura se tornou um verdadeiro desafio.",
    gradient: "from-orange-500 to-orange-700",
  },
];

const scrollToPricing = () => {
  const pricingSection = document.getElementById("pricing");
  pricingSection?.scrollIntoView({ behavior: "smooth" });
};

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
            <div key={index} className="bg-background p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className={`w-20 h-20 bg-gradient-to-br ${barrier.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <span className="text-4xl">{barrier.emoji}</span>
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

        {/* CTA */}
        <div className="text-center mt-8">
          <Button 
            onClick={scrollToPricing}
            className="bg-secondary text-secondary-foreground font-bold text-lg py-6 px-10 rounded-lg shadow-lg hover:opacity-90"
          >
            QUERO MEU MATERIAL
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BarriersSection;
