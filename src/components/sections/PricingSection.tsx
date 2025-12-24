import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";

const basicFeatures = [
  "Mapa Didático da Bíblia (130+ páginas)",
  "Panorama dos 66 Livros",
  "Mapas Mentais Ilustrados",
  "10 Bônus Exclusivos",
  "Acesso Vitalício",
  "Atualizações Gratuitas",
];

const completeFeatures = [
  "Tudo do Plano Básico",
  "Coleção Completa (300+ mapas)",
  "Estudos Aprofundados",
  "15 Bônus Premium",
  "Grupo VIP no Telegram",
  "Suporte Prioritário",
];

const PricingSection = () => {
  return (
    <section className="bg-background py-12">
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
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Básico</h3>
              <p className="text-muted-foreground text-sm mb-4">Ideal para começar</p>
              <div className="mb-2">
                <span className="text-muted-foreground line-through text-lg">R$ 97</span>
              </div>
              <div className="text-4xl font-heading font-bold text-primary">
                R$ 37
              </div>
              <p className="text-muted-foreground text-sm">ou 4x de R$ 10,28</p>
            </div>

            <ul className="space-y-3 mb-6">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-green shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-primary text-primary-foreground font-bold py-6">
              QUERO O BÁSICO
            </Button>
          </div>

          {/* Plano Completo */}
          <div className="border-2 border-primary rounded-2xl p-6 bg-primary/5 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold">
                MAIS POPULAR
              </span>
            </div>

            <div className="text-center mb-6">
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Completo</h3>
              <p className="text-primary text-sm font-medium mb-4">Transformação total</p>
              <div className="mb-2">
                <span className="text-muted-foreground line-through text-lg">R$ 197</span>
              </div>
              <div className="text-4xl font-heading font-bold text-primary">
                R$ 97
              </div>
              <p className="text-muted-foreground text-sm">ou 6x de R$ 18,54</p>
            </div>

            <ul className="space-y-3 mb-6">
              {completeFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-green shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-secondary text-secondary-foreground font-bold py-6">
              QUERO O COMPLETO
            </Button>
          </div>
        </div>

        {/* Garantia */}
        <div className="flex items-center justify-center gap-4 mt-8 p-6 bg-muted rounded-xl max-w-xl mx-auto">
          <Shield className="w-16 h-16 text-green shrink-0" />
          <div>
            <h4 className="font-heading font-bold text-foreground">Garantia de 7 Dias</h4>
            <p className="text-sm text-muted-foreground">
              Se não ficar satisfeito, devolvemos 100% do seu investimento. Sem perguntas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
