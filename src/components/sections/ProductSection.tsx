import { BookOpen, Brain, Eye, Map, Clock, Heart } from "lucide-react";
import mockupProduct from "@/assets/mockup-product.png";

const features = [
  { icon: BookOpen, text: "Panorama completo dos 66 livros" },
  { icon: Map, text: "Mapas mentais ilustrados" },
  { icon: Brain, text: "Técnicas de memorização" },
  { icon: Eye, text: "Design visual atrativo" },
  { icon: Clock, text: "Cronologia bíblica" },
  { icon: Heart, text: "Devocional diário estruturado" },
];

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
              <div key={index} className="flex items-center gap-3 bg-muted p-4 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
