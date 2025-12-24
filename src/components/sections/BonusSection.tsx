import { Gift } from "lucide-react";

const bonuses = [
  "Guia de Leitura Bíblica em 1 Ano",
  "Cronologia Completa da Bíblia",
  "Mapa das Viagens de Paulo",
  "Guia de Oração Diária",
  "Resumo dos Livros Bíblicos",
  "Devocionais para 30 dias",
  "Plano de Estudo para Famílias",
  "Guia de Memorização de Versículos",
  "Linha do Tempo dos Reis",
  "Mapa da Terra Santa",
];

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
            <div key={index} className="bg-background p-4 rounded-lg shadow-sm flex items-center gap-2">
              <Gift className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">{bonus}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
