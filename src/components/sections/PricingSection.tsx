import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import seloGarantia from "@/assets/selo-garantia.webp";

const basicFeatures = [
  { emoji: "📚", text: "Mapa Didático da Bíblia (130+ páginas)" },
  { emoji: "🗺️", text: "Panorama dos 66 Livros" },
  { emoji: "🧠", text: "Mapas Mentais Ilustrados" },
  { emoji: "🎁", text: "10 Bônus Exclusivos" },
  { emoji: "♾️", text: "Acesso Vitalício" },
  { emoji: "🔄", text: "Atualizações Gratuitas" },
];

const premiumFeatures = [
  { emoji: "✅", text: "Tudo do Plano Básico", highlight: true },
  { emoji: "📖", text: "Coleção Completa (300+ mapas)" },
  { emoji: "📊", text: "Estudos Aprofundados" },
  { emoji: "🎁", text: "15 Bônus Premium" },
  { emoji: "💬", text: "Grupo VIP no Telegram" },
  { emoji: "🎯", text: "Suporte Prioritário" },
  { emoji: "📱", text: "Acesso via App Exclusivo" },
  { emoji: "🔔", text: "Novidades em Primeira Mão" },
  { emoji: "📥", text: "Downloads Ilimitados" },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-background py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
          Escolha seu plano
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Investimento único com acesso vitalício
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Plano Básico */}
          <div className="border-2 border-border rounded-2xl p-6 bg-background">
            <div className="text-center mb-6">
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">💜 Básico</h3>
              <p className="text-muted-foreground text-sm mb-4">Ideal para começar</p>
              <div className="mb-2">
                <span className="text-muted-foreground line-through text-lg">R$ 97</span>
              </div>
              <div className="text-4xl font-heading font-bold text-primary">
                R$ 29
              </div>
              <p className="text-muted-foreground text-sm">ou 3x de R$ 10,30</p>
            </div>

            <ul className="space-y-3 mb-6">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <span className="text-xl">{feature.emoji}</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-primary text-primary-foreground font-bold py-6 text-lg">
              QUERO MEU MATERIAL
            </Button>
          </div>

          {/* Plano Premium */}
          <div className="border-4 border-orange-500 rounded-2xl p-6 bg-gradient-to-b from-orange-50 to-yellow-50 relative shadow-2xl transform md:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                MAIS VENDIDO 🔥
              </span>
            </div>

            <div className="text-center mb-6 pt-2">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">💛 Premium</h3>
              <p className="text-orange-600 text-sm font-medium mb-4">Transformação total garantida</p>
              <div className="mb-2">
                <span className="text-muted-foreground line-through text-lg">R$ 197</span>
                <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">-70%</span>
              </div>
              <div className="text-5xl font-heading font-bold text-orange-600">
                R$ 59
              </div>
              <p className="text-muted-foreground text-sm">ou 6x de R$ 11,17</p>
            </div>

            <ul className="space-y-3 mb-6">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className={`flex items-center gap-3 text-sm ${feature.highlight ? 'font-bold text-orange-600' : ''}`}>
                  <span className="text-xl">{feature.emoji}</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 text-lg shadow-lg">
              QUERO MEU MATERIAL
            </Button>
          </div>
        </div>

        {/* Garantia com selo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 p-8 bg-muted rounded-2xl max-w-2xl mx-auto">
          <img 
            src={seloGarantia} 
            alt="Selo de Garantia 7 Dias" 
            className="w-32 h-32 object-contain"
          />
          <div className="text-center md:text-left">
            <h4 className="font-heading text-xl font-bold text-foreground mb-2">Garantia incondicional de 7 dias</h4>
            <p className="text-muted-foreground">
              Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
