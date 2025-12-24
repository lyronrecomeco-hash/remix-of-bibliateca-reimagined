import { Button } from "@/components/ui/button";
import mockupProduct from "@/assets/mockup-product.png";

const features = [
  { emoji: "📚", text: "Panorama completo dos 66 livros" },
  { emoji: "🗺️", text: "Mapas mentais ilustrados" },
  { emoji: "🧠", text: "Técnicas de memorização" },
  { emoji: "🎨", text: "Design visual atrativo" },
  { emoji: "⏰", text: "Cronologia bíblica" },
  { emoji: "❤️", text: "Devocional diário estruturado" },
];

const scrollToPricing = () => {
  const pricingSection = document.getElementById("pricing");
  pricingSection?.scrollIntoView({ behavior: "smooth" });
};

const ProductSection = () => {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          Conheça o <span className="text-primary">Mapa Didático da Bíblia</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Mais de <strong className="text-foreground">130 páginas</strong> de conteúdo visual que vai transformar 
          sua forma de estudar e entender a Palavra de Deus.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Imagem */}
          <div className="flex justify-center">
            <img 
              src={mockupProduct} 
              alt="Mapa Didático da Bíblia" 
              className="max-w-sm w-full"
            />
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              O que você vai receber:
            </h3>
            
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-700 rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <span className="text-2xl">{feature.emoji}</span>
                </div>
                <span className="text-foreground font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
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

export default ProductSection;
