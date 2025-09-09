import parceirosImg from "@/assets/parceiros.png";

const PartnersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Parceiros
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Juntos, construímos uma rede de apoio que fortalece nossos projetos e amplia nosso impacto social
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <img
              src={parceirosImg}
              alt="Logos dos parceiros da OSC Tijolinho"
              className="w-full h-auto"
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Agradecemos a todos os parceiros que acreditam em nosso trabalho e contribuem 
              para a transformação de vidas através da educação e desenvolvimento social.
            </p>
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-foreground font-medium">
                Quer ser nosso parceiro? Entre em contato conosco e descubra como sua 
                organização pode fazer parte desta rede de transformação social.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;