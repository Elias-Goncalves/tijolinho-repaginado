import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  BookOpen, 
  Target,
  ArrowRight,
  Palette,
  Calendar,
  FileText,
  Camera,
  Scale
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Galeria",
      description: "Confira os momentos especiais e atividades realizadas",
      link: "/galeria"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Agenda de Eventos",
      description: "Veja nossa programação e participe dos eventos",
      link: "/eventos"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Atualize-se",
      description: "Mantenha-se informado sobre nossas atividades",
      link: "/atualize"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Convênios",
      description: "Conheça nossos parceiros e colaboradores",
      link: "/convenios"
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Projeto de Lei",
      description: "Informações sobre legislação e políticas públicas",
      link: "/projeto-lei"
    }
  ];

  const stats = [
    { number: "500+", label: "Crianças Atendidas" },
    { number: "15", label: "Anos de Atuação" },
    { number: "20+", label: "Projetos Ativos" },
    { number: "100+", label: "Voluntários" }
  ];

  return (
    <>
      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossos Serviços
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore todas as formas de participar e se conectar com nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    Acessar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Nossa Missão
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Acolhimento</h3>
                <p className="text-muted-foreground">
                  Oferecemos um ambiente seguro e acolhedor para crianças e adolescentes
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Educação</h3>
                <p className="text-muted-foreground">
                  Promovemos educação de qualidade e desenvolvimento integral
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Transformação</h3>
                <p className="text-muted-foreground">
                  Trabalhamos para transformar vidas e construir um futuro melhor
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A OSC Tijolinho atende crianças e adolescentes em situação de vulnerabilidade social, 
              concedendo acesso à educação de qualidade, atividades de lazer e formativas. 
              Nosso trabalho é baseado na convicção de que através da educação, cultura e 
              desenvolvimento social podemos aproximar pessoas e transformar realidades.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;