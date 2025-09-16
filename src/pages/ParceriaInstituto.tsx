import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsHero from "@/components/NewsHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Share2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import parceriaImg from "@/assets/noticia-parceria.jpg";

const ParceriaInstituto = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <NewsHero />
        
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/noticias" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Notícias
            </Link>

            <article className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={parceriaImg} 
                  alt="OSC Tijolinho realiza atividade em parceria com o Instituto Criança é Vida"
                  className="w-full h-full object-cover"
                />
              </div>

              <CardContent className="p-8">
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Agosto de 2024</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  OSC Tijolinho realiza atividade em parceria com o Instituto Criança é Vida
                </h1>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    Em parceria com o Instituto Criança é Vida, a OSC Tijolinho está desenvolvendo 
                    o projeto <strong>Crescer com Valores – Nosso Papel para uma Sociedade Melhor</strong>. 
                    A iniciativa busca fortalecer princípios fundamentais para a convivência, abordando 
                    temas como respeito, gentileza, amizade, lealdade, confiança, consumismo, conflitos, 
                    paciência e generosidade.
                  </p>

                  <p>
                    Esta parceria representa um importante passo no fortalecimento dos valores essenciais 
                    para a formação de cidadãos conscientes e comprometidos com uma sociedade mais justa 
                    e solidária.
                  </p>

                  <p>
                    O projeto visa trabalhar de forma lúdica e educativa com crianças e adolescentes, 
                    promovendo reflexões sobre o papel de cada um na construção de um ambiente social 
                    mais harmonioso e respeitoso.
                  </p>

                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h3 className="font-bold text-foreground mb-3">Valores trabalhados no projeto:</h3>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-muted-foreground">
                      <li>• Respeito</li>
                      <li>• Gentileza</li>
                      <li>• Amizade</li>
                      <li>• Lealdade</li>
                      <li>• Confiança</li>
                      <li>• Paciência</li>
                      <li>• Generosidade</li>
                      <li>• Consciência sobre consumismo</li>
                      <li>• Resolução de conflitos</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Compartilhe esta notícia</h3>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Compartilhar
                      </Button>
                    </div>
                  </div>
                </div>

                <Card className="mt-8 bg-secondary/10">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-3">Sobre a parceria</h3>
                    <p className="text-muted-foreground">
                      A parceria entre a OSC Tijolinho e o Instituto Criança é Vida fortalece o 
                      trabalho de formação integral de crianças e adolescentes, unindo esforços 
                      para promover valores essenciais para uma sociedade melhor.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ParceriaInstituto;