import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bibliosescBanner from "@/assets/bibliosesc-banner.jpg";

const FeaturedProject = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projeto em Destaque
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <Card className="max-w-6xl mx-auto overflow-hidden bg-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto">
              <img
                src={bibliosescBanner}
                alt="BiblioSesc Santana - Biblioteca móvel"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                BiblioSesc Santana
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Uma biblioteca móvel que oferece a qualquer pessoa cadastrada, 
                empréstimo de livros. Além disso, realizamos mediação de leitura, 
                narração de histórias, oficinas, intervenções e apresentações artísticas.
              </p>
              
              <div className="bg-primary/10 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-foreground mb-3">Informações de Atendimento:</h4>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Local:</strong> R. Afonso de Carvalho, 16</p>
                  <p><strong>Horário:</strong> das 10h às 15h</p>
                  <div className="mt-4">
                    <p><strong>Próximos Atendimentos:</strong></p>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                      <p>Fev: 28</p>
                      <p>Março: 13 e 27</p>
                      <p>Abril: 10 e 24</p>
                      <p>Maio: 8 e 22</p>
                      <p>Junho: 5 e 19</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="self-start group">
                Saiba Mais
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedProject;