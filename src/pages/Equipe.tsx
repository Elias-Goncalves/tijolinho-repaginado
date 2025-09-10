import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin } from "lucide-react";

const Equipe = () => {
  const equipe = [
    {
      nome: "Mariana Santos",
      cargo: "Coordenadora Pedagógica",
      area: "Educação",
      descricao: "Especialista em educação infantil com 15 anos de experiência. Coordena todos os projetos educacionais da OSC.",
      email: "mariana@tijolinho.org.br",
      telefone: "(11) 99999-1111",
      foto: "/placeholder.svg",
      especialidades: ["Pedagogia", "Psicopedagogia", "Gestão Educacional"],
    },
    {
      nome: "Carlos Ribeiro",
      cargo: "Assistente Social",
      area: "Desenvolvimento Social",
      descricao: "Graduado em Serviço Social, atua no acompanhamento familiar e desenvolvimento de políticas sociais.",
      email: "carlos@tijolinho.org.br",
      telefone: "(11) 99999-2222",
      foto: "/placeholder.svg",
      especialidades: ["Serviço Social", "Políticas Públicas", "Família"],
    },
    {
      nome: "Ana Beatriz Lima",
      cargo: "Psicóloga",
      area: "Desenvolvimento Humano",
      descricao: "Especialista em psicologia comunitária, oferece suporte psicológico aos participantes dos projetos.",
      email: "ana@tijolinho.org.br",
      telefone: "(11) 99999-3333",
      foto: "/placeholder.svg",
      especialidades: ["Psicologia Comunitária", "Terapia Familiar", "Adolescentes"],
    },
    {
      nome: "Rafael Costa",
      cargo: "Coordenador de Projetos",
      area: "Gestão",
      descricao: "Responsável pela gestão e execução dos projetos, com experiência em ONGs e terceiro setor.",
      email: "rafael@tijolinho.org.br",
      telefone: "(11) 99999-4444",
      foto: "/placeholder.svg",
      especialidades: ["Gestão de Projetos", "Captação de Recursos", "Parcerias"],
    },
    {
      nome: "Juliana Ferreira",
      cargo: "Arte-educadora",
      area: "Cultura e Arte",
      descricao: "Graduada em Artes Visuais, desenvolve oficinas de arte e cultura para crianças e jovens.",
      email: "juliana@tijolinho.org.br",
      telefone: "(11) 99999-5555",
      foto: "/placeholder.svg",
      especialidades: ["Artes Visuais", "Arte-educação", "Cultura Popular"],
    },
    {
      nome: "Pedro Almeida",
      cargo: "Coordenador de Tecnologia",
      area: "Inovação",
      descricao: "Especialista em tecnologia social, desenvolve soluções digitais para ampliar o impacto dos projetos.",
      email: "pedro@tijolinho.org.br",
      telefone: "(11) 99999-6666",
      foto: "/placeholder.svg",
      especialidades: ["Tecnologia Social", "Desenvolvimento Web", "Inovação"],
    },
    {
      nome: "Lucia Mendes",
      cargo: "Bibliotecária",
      area: "Educação",
      descricao: "Responsável pelo projeto BiblioSesc e todas as atividades relacionadas à mediação de leitura.",
      email: "lucia@tijolinho.org.br",
      telefone: "(11) 99999-7777",
      foto: "/placeholder.svg",
      especialidades: ["Biblioteconomia", "Mediação de Leitura", "Literatura Infantil"],
    },
    {
      nome: "Fernando Silva",
      cargo: "Educador Físico",
      area: "Esporte e Saúde",
      descricao: "Desenvolve atividades esportivas e de promoção da saúde para todas as faixas etárias.",
      email: "fernando@tijolinho.org.br",
      telefone: "(11) 99999-8888",
      foto: "/placeholder.svg",
      especialidades: ["Educação Física", "Esporte Comunitário", "Saúde Coletiva"],
    },
  ];

  const areas = [...new Set(equipe.map(pessoa => pessoa.area))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Conheça Nossa Equipe
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Profissionais dedicados e qualificados que trabalham diariamente para transformar vidas e aproximar pessoas.
              </p>
            </div>

            {/* Filtros por área */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Todos
              </Badge>
              {areas.map((area) => (
                <Badge key={area} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  {area}
                </Badge>
              ))}
            </div>

            {/* Grid da equipe */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {equipe.map((pessoa, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <Avatar className="w-20 h-20 mx-auto mb-4">
                        <AvatarImage src={pessoa.foto} alt={pessoa.nome} />
                        <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                          {pessoa.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {pessoa.nome}
                      </h3>
                      <p className="text-primary font-semibold mb-2">
                        {pessoa.cargo}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {pessoa.area}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {pessoa.descricao}
                    </p>

                    {/* Especialidades */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-foreground mb-2">Especialidades:</p>
                      <div className="flex flex-wrap gap-1">
                        {pessoa.especialidades.map((esp, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {esp}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contato */}
                    <div className="border-t border-border pt-4 space-y-2">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Mail className="w-3 h-3 mr-2 flex-shrink-0" />
                        <span className="truncate">{pessoa.email}</span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Phone className="w-3 h-3 mr-2 flex-shrink-0" />
                        <span>{pessoa.telefone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Seção de valores da equipe */}
            <div className="mt-20">
              <Card className="max-w-4xl mx-auto">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Nossa Filosofia de Trabalho
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-bold text-primary mb-2">Colaboração</h3>
                      <p className="text-sm text-muted-foreground">
                        Trabalhamos em equipe, valorizando a diversidade de conhecimentos e experiências.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">Inovação</h3>
                      <p className="text-sm text-muted-foreground">
                        Buscamos constantemente novas formas de abordar os desafios sociais.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">Compromisso</h3>
                      <p className="text-sm text-muted-foreground">
                        Dedicação integral aos nossos projetos e às pessoas que atendemos.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Equipe;