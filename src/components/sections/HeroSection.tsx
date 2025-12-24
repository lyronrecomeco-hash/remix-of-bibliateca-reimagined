import { Button } from "@/components/ui/button";
import mockupProduct from "@/assets/mockup-product.png";

const HeroSection = () => {
  return (
    <section className="bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Banner Topo */}
        <div className="bg-primary text-primary-foreground text-center py-3 px-4 rounded-lg mb-8">
          <p className="text-sm md:text-base font-semibold">
            🔥 <span className="text-secondary">OFERTA ESPECIAL</span> - Apenas hoje com 60% de desconto!
          </p>
        </div>

        {/* Headline Principal */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
            A leitura diária da Bíblia tem o poder de{" "}
            <span className="text-primary">transformar</span> a forma como você vive!
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            Uma pesquisa feita com mais de 40.000 entrevistados comprovou que a constância na leitura bíblica 
            diminui a solidão, momentos de irritação, conflitos no casamento e na relação com os filhos, 
            e também potencializa em pelo menos <strong className="text-foreground">3x a disposição pra pregar o evangelho</strong> e caminhar em comunhão.
          </p>

          <p className="text-lg md:text-xl font-semibold text-foreground">
            Comece hoje com ajuda do best-seller{" "}
            <span className="text-primary">Mapa Didático da Bíblia</span>!
          </p>
        </div>

        {/* Imagem do Produto */}
        <div className="flex justify-center mb-8">
          <img 
            src={mockupProduct} 
            alt="Mapa Didático da Bíblia - Material Completo" 
            className="max-w-md w-full"
          />
        </div>

        {/* Descrição */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Um método fácil, inovador e eficiente, <strong className="text-foreground">aprovado por milhares de cristãos</strong>, 
            para aprender, revisar e memorizar a Palavra de Deus através de um panorama completo e ilustrado. 
            Você nunca mais vai poder dizer que não consegue entender a Bíblia!
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-secondary text-secondary-foreground font-bold text-lg py-6 px-10 rounded-lg shadow-lg hover:opacity-90">
            QUERO MEU MAPA AGORA!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
