import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Placeholder para imagens dos materiais - substitua pelos imports das imagens reais
const materials = [
  { id: 1, title: "Material 1", placeholder: true },
  { id: 2, title: "Material 2", placeholder: true },
  { id: 3, title: "Material 3", placeholder: true },
  { id: 4, title: "Material 4", placeholder: true },
  { id: 5, title: "Material 5", placeholder: true },
  { id: 6, title: "Material 6", placeholder: true },
];

const scrollToPricing = () => {
  const pricingSection = document.getElementById("pricing");
  pricingSection?.scrollIntoView({ behavior: "smooth" });
};

const MaterialsCarousel = () => {
  return (
    <section className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          📦 Veja tudo que você vai receber
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Materiais exclusivos para transformar seu estudo bíblico
        </p>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {materials.map((material) => (
                <CarouselItem key={material.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="bg-background rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {material.placeholder ? (
                      <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-center p-4">
                          <span className="text-4xl mb-2 block">📄</span>
                          <p className="text-sm text-muted-foreground">
                            Imagem do material
                          </p>
                        </div>
                      </div>
                    ) : (
                      // Quando tiver imagens reais, use:
                      // <img src={material.image} alt={material.title} className="aspect-[3/4] object-cover" />
                      <div className="aspect-[3/4] bg-muted" />
                    )}
                    <div className="p-4">
                      <p className="font-medium text-foreground text-center">{material.title}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
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

export default MaterialsCarousel;
