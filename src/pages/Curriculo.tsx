import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Curriculo = () => {
  const marcos = [
    {
      ano: "2018",
      titulo: "Fundação da OSC Tijolinho",
      descricao: "Início das atividades com foco em educação e desenvolvimento social na região de Santana, São Paulo.",
    },
    {
      ano: "2019",
      titulo: "Primeiro Projeto BiblioSesc",
      descricao: "Lançamento da biblioteca móvel em parceria com o SESC, levando livros e cultura à comunidade.",
    },
    {
      ano: "2020",
      titulo: "Adaptação à Pandemia",
      descricao: "Desenvolvimento de projetos remotos e distribuição de cestas básicas durante a pandemia de COVID-19.",
    },
    {
      ano: "2021",
      titulo: "Expansão dos Serviços",
      descricao: "Ampliação das atividades com oficinas de arte, tecnologia e capacitação profissional.",
    },
    {
      ano: "2022",
      titulo: "Parcerias Estratégicas",
      descricao: "Estabelecimento de parcerias com Instituto Criança é Vida e outras organizações do terceiro setor.",
    },
    {
      ano: "2023",
      titulo: "Reconhecimento Municipal",
      descricao: "Certificação como organização de utilidade pública municipal, reconhecendo o impacto social dos projetos.",
    },
    {
      ano: "2024",
      titulo: "Modernização Digital",
      descricao: "Lançamento do novo site e implementação de sistemas digitais para melhor gestão e transparência.",
    },
  ];

  const conquistas = [
    "Mais de 2.000 crianças e jovens atendidos",
    "15 parcerias ativas com organizações locais",
    "50+ eventos culturais realizados",
    "100% de transparência na prestação de contas",
    "Certificação de Utilidade Pública Municipal",
    "Presença em 8 bairros da região norte de SP",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nosso Currículo Institucional
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Uma trajetória de dedicação ao desenvolvimento social e educacional, construindo pontes entre pessoas e oportunidades.
              </p>
            </div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Nossa Trajetória
              </h2>
              <div className="space-y-8">
                {marcos.map((marco, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <Badge variant="outline" className="text-primary border-primary text-lg px-4 py-2">
                        {marco.ano}
                      </Badge>
                    </div>
                    <Card className="flex-1">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {marco.titulo}
                        </h3>
                        <p className="text-muted-foreground">
                          {marco.descricao}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Conquistas */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Principais Conquistas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {conquistas.map((conquista, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                      <p className="text-foreground font-medium">{conquista}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certificações */}
            <div className="mt-20">
              <Card className="max-w-4xl mx-auto">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Certificações e Reconhecimentos
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="font-bold text-primary mb-2">CNPJ</h3>
                      <p className="text-sm text-muted-foreground">
                        Pessoa Jurídica de Direito Privado sem fins lucrativos
                      </p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="font-bold text-primary mb-2">Utilidade Pública</h3>
                      <p className="text-sm text-muted-foreground">
                        Certificação Municipal - 2023
                      </p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="font-bold text-primary mb-2">Transparência</h3>
                      <p className="text-sm text-muted-foreground">
                        100% das contas públicas e auditadas
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

export default Curriculo;