import parceiros1 from "@/assets/parceiros-1.png";
import parceiros2 from "@/assets/parceiros-2.png";
import parceiros3 from "@/assets/parceiros-3.png";
import parceiros4 from "@/assets/parceiros-4.png";
import parceiros5 from "@/assets/parceiros-5.png";
import parceiros6 from "@/assets/parceiros-6.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PartnersSection = () => {
  const partnerLogos = [
    { name: "SESC São Paulo", src: parceiros1 },
    { name: "Fundação Tide Setúbal", src: parceiros2 },
    { name: "Instituto Criança é Vida", src: parceiros3 },
    { name: "Prefeitura de São Paulo", src: parceiros4 },
    { name: "Governo do Estado", src: parceiros5 },
    { name: "Parceiro 6", src: parceiros6 },
  ];

  return (
    <section id="parceiros" className="py-20 bg-background">
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

        <div className="max-w-6xl mx-auto">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {partnerLogos.map((partner, index) => (
                <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="bg-white rounded-lg shadow-lg p-6 h-32 flex items-center justify-center">
                    <img
                      src={partner.src}
                      alt={`Logo ${partner.name}`}
                      className="max-w-full max-h-full object-contain "
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
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
    </section>
  );
};

export default PartnersSection;