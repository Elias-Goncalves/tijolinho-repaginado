import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsHero from "@/components/NewsHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Share2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import setembroAmareloImg from "@/assets/noticia-setembro-amarelo.jpg";

const SetembroAmarelo = () => {
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
                  src={setembroAmareloImg} 
                  alt="Setembro Amarelo - OSC Tijolinho inicia atividades lúdicas"
                  className="w-full h-full object-cover"
                />
              </div>

              <CardContent className="p-8">
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Setembro de 2024</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Setembro Amarelo - OSC Tijolinho inicia atividades lúdicas
                </h1>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    A OSC Tijolinho realizou uma atividade lúdica em referência ao Setembro Amarelo, 
                    mês dedicado à valorização da vida e à prevenção do suicídio.
                  </p>

                  <p>
                    Na dinâmica, diversas bexigas foram fixadas em um mural, cada uma representando 
                    uma dor ou queixa. Ao longo da atividade, os participantes foram levantando e 
                    estourando as bexigas, simbolizando a possibilidade de expressar e liberar 
                    sentimentos que muitas vezes ficam guardados.
                  </p>

                  <p>
                    A ação reforçou a importância de acolher as emoções, abrir espaço para o diálogo 
                    e valorizar a vida, destacando que nenhum peso precisa ser carregado sozinho.
                  </p>
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
                    <h3 className="font-bold text-foreground mb-3">Sobre a OSC Tijolinho</h3>
                    <p className="text-muted-foreground">
                      A OSC Tijolinho desenvolve projetos sociais voltados para crianças e adolescentes, 
                      promovendo atividades educativas, culturais e de conscientização que contribuem 
                      para o desenvolvimento integral dos participantes.
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

export default SetembroAmarelo;