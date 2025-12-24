import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import ForYouSection from "@/components/sections/ForYouSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BarriersSection from "@/components/sections/BarriersSection";
import ProductSection from "@/components/sections/ProductSection";
import BonusSection from "@/components/sections/BonusSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mapa Didático da Bíblia - Aprenda e Memorize a Palavra de Deus</title>
        <meta 
          name="description" 
          content="Método visual com mapas mentais para você aprender, revisar e memorizar a Bíblia. Mais de 130 páginas com panorama completo dos 66 livros." 
        />
      </Helmet>

      <main className="min-h-screen bg-background">
        <HeroSection />
        <ForYouSection />
        <TestimonialsSection />
        <BarriersSection />
        <ProductSection />
        <BonusSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
