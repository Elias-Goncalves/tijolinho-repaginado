import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import setembroAmareloImg from "@/assets/noticia-setembro-amarelo.jpg";
import criatividadeImg from "@/assets/noticia-criatividade.jpg";
import parceriaImg from "@/assets/noticia-parceria.jpg";
const NewsSection = () => {
  const news = [{
    id: 1,
    title: "Setembro Amarelo - OSC Tijolinho inicia atividades lúdicas",
    image: setembroAmareloImg,
    excerpt: "Atividades especiais voltadas para a conscientização sobre saúde mental e prevenção do suicídio.",
    link: "/noticias/setembro-amarelo"
  }, 
  {
    id: 2,
    title: "Na OSC Tijolinho, a criatividade e a consciência caminham juntas!",
    image: criatividadeImg,
    excerpt: "Projetos educativos que estimulam a criatividade das crianças e adolescentes atendidos.",
    link: "/noticias/criatividade-consciencia"
  }, 
  {
    id: 3,
    title: "OSC Tijolinho realiza atividade em parceria com o Instituto Criança é Vida",
    image: parceriaImg,
    excerpt: "Uma importante parceria que amplia o alcance de nossos projetos sociais.",
    link: "/noticias/parceria-instituto"
  }
];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-6 text-orange-500 font-bold md:text-5xl">
            Últimas Notícias
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe as novidades e atividades da OSC Tijolinho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map(article => <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Publicado recentemente</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Button variant="outline" className="group" asChild>
                  <a href={article.link}>
                    Leia Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center">
          <Button size="lg" variant="secondary" asChild>
            <a href="/noticias">
              Ver Todas as Notícias
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default NewsSection;