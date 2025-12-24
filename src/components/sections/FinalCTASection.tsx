import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          Não deixe para depois!
        </h2>
        <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
          Milhares de cristãos já transformaram sua relação com a Palavra de Deus. 
          Comece sua jornada de transformação agora mesmo!
        </p>
        
        <Button className="bg-secondary text-secondary-foreground font-bold text-lg py-6 px-10 rounded-lg">
          QUERO MEU MAPA AGORA!
        </Button>

        <p className="text-primary-foreground/70 text-sm mt-4">
          ✓ Acesso imediato &nbsp;&nbsp; ✓ Garantia de 7 dias &nbsp;&nbsp; ✓ Pagamento seguro
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
