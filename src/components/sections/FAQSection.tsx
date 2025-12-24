import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O material é físico ou digital?",
    answer: "O material é 100% digital, em formato PDF de alta qualidade. Você recebe acesso imediato após a confirmação do pagamento e pode acessar de qualquer dispositivo.",
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "Seu acesso é vitalício! Uma vez que você adquire o material, ele é seu para sempre, incluindo todas as atualizações futuras.",
  },
  {
    question: "Funciona para quem nunca estudou a Bíblia?",
    answer: "Sim! É especialmente recomendado para iniciantes. O método visual foi desenvolvido para tornar o estudo bíblico acessível e fácil de compreender.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu investimento.",
  },
  {
    question: "Posso imprimir o material?",
    answer: "Com certeza! O material foi otimizado tanto para visualização digital quanto para impressão de alta qualidade.",
  },
  {
    question: "Como recebo o acesso após a compra?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um email com as instruções de acesso através da plataforma Hotmart.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          Dúvidas Frequentes
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-4 bg-background"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
