const FooterSection = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-background/80 text-sm mb-4">
          © 2024 Mapa Didático da Bíblia. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 text-background/60 text-sm">
          <a href="#" className="hover:text-background">Termos de Uso</a>
          <a href="#" className="hover:text-background">Política de Privacidade</a>
          <a href="#" className="hover:text-background">Contato</a>
        </div>
        <p className="text-background/50 text-xs mt-4">
          Este produto é comercializado com apoio da Hotmart. A plataforma não faz controle editorial 
          prévio dos produtos comercializados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
