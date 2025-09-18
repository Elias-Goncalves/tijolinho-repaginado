import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsHero from "@/components/NewsHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Share2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import criatividadeImg from "@/assets/noticia-criatividade.jpg";

const CriatividadeConsciencia = () => {
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
                  src={criatividadeImg} 
                  alt="Na OSC Tijolinho, a criatividade e a consciência caminham juntas!"
                  className="w-full h-full object-cover"
                />
              </div>

              <CardContent className="p-8">
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Agosto de 2024</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Na OSC Tijolinho, a criatividade e a consciência caminham juntas!
                </h1>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    Os adolescentes da OSC Tijolinho - CJ desenvolveram uma maquete inspirada no 
                    Palco Quebrada do Festival The Town, símbolo importante da valorização da música 
                    periférica e de artistas que trazem a voz e a cultura das periferias para o 
                    centro das atenções.
                  </p>

                  <p>
                    A atividade foi realizada dentro das oficinas de arte e cultura, artesanato e 
                    sócioeducativas, utilizando materiais reciclados. Mais do que exercitar a 
                    imaginação e a habilidade com as mãos, o processo também abriu espaço para 
                    refletirmos sobre a importância do cuidado com o meio ambiente e sobre como a 
                    arte pode ser uma poderosa ferramenta de transformação social.
                  </p>

                  <p>
                    Cada detalhe construído representa não só aprendizado técnico, mas também a força 
                    simbólica de um palco que traduz a identidade e o talento da periferia.
                  </p>

                  <p>
                    Esse trabalho fez parte da exposição Arte Sustentável que ocorreu no dia 29/08 
                    no @senacjabaquara
                  </p>

                  <p>
                    Foi um momento de troca, criação e pertencimento — onde os jovens puderam enxergar 
                    o quanto suas expressões e ideias têm valor.
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
                      A OSC Tijolinho promove oficinas de arte, cultura e artesanato como ferramentas 
                      de transformação social, incentivando a criatividade e a consciência ambiental 
                      entre crianças e adolescentes.
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

export default CriatividadeConsciencia;