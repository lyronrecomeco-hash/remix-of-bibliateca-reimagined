import { Button } from "@/components/ui/button";

const bonuses = [
  { emoji: "📖", text: "Guia de Leitura Bíblica em 1 Ano" },
  { emoji: "📅", text: "Cronologia Completa da Bíblia" },
  { emoji: "🗺️", text: "Mapa das Viagens de Paulo" },
  { emoji: "🙏", text: "Guia de Oração Diária" },
  { emoji: "📝", text: "Resumo dos Livros Bíblicos" },
  { emoji: "💭", text: "Devocionais para 30 dias" },
  { emoji: "👨‍👩‍👧", text: "Plano de Estudo para Famílias" },
  { emoji: "🧠", text: "Guia de Memorização de Versículos" },
  { emoji: "👑", text: "Linha do Tempo dos Reis" },
  { emoji: "🌍", text: "Mapa da Terra Santa" },
];

const scrollToPricing = () => {
  const pricingSection = document.getElementById("pricing");
  pricingSection?.scrollIntoView({ behavior: "smooth" });
};

const BonusSection = () => {
  return (
    <section className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground text-center mb-2">
          🎁 E tem mais!
        </h2>
        <p className="text-center text-secondary-foreground/80 mb-8">
          Comprando hoje você ainda leva <strong>10 BÔNUS EXCLUSIVOS</strong>:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-background p-4 rounded-lg shadow-md flex items-center gap-3 hover:shadow-lg transition-shadow">
              <span className="text-2xl">{bonus.emoji}</span>
              <span className="text-sm font-medium text-foreground">{bonus.text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button 
            onClick={scrollToPricing}
            className="bg-primary text-primary-foreground font-bold text-lg py-6 px-10 rounded-lg shadow-lg hover:opacity-90"
          >
            QUERO MEU MATERIAL
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
