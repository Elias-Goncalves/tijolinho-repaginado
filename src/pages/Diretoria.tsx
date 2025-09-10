import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Diretoria = () => {
  const diretores = [
    {
      nome: "Maria Silva Santos",
      cargo: "Presidente",
      email: "presidente@tijolinho.org.br",
      telefone: "(11) 99999-9999",
      foto: "/placeholder.svg",
    },
    {
      nome: "João Carlos Oliveira",
      cargo: "Vice-Presidente",
      email: "vice@tijolinho.org.br",
      telefone: "(11) 88888-8888",
      foto: "/placeholder.svg",
    },
    {
      nome: "Ana Paula Costa",
      cargo: "Secretária",
      email: "secretaria@tijolinho.org.br",
      telefone: "(11) 77777-7777",
      foto: "/placeholder.svg",
    },
    {
      nome: "Carlos Eduardo Lima",
      cargo: "Tesoureiro",
      email: "tesouraria@tijolinho.org.br",
      telefone: "(11) 66666-6666",
      foto: "/placeholder.svg",
    },
    {
      nome: "Fernanda Rodrigues",
      cargo: "Conselheira Fiscal",
      email: "conselho@tijolinho.org.br",
      telefone: "(11) 55555-5555",
      foto: "/placeholder.svg",
    },
    {
      nome: "Roberto Souza",
      cargo: "Conselheiro Fiscal",
      email: "conselho2@tijolinho.org.br",
      telefone: "(11) 44444-4444",
      foto: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Diretoria
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Conheça os membros da diretoria da OSC Tijolinho, responsáveis pela gestão e direcionamento estratégico da organização.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {diretores.map((diretor, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={diretor.foto} alt={diretor.nome} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                        {diretor.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {diretor.nome}
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      {diretor.cargo}
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <strong>Email:</strong> {diretor.email}
                      </p>
                      <p>
                        <strong>Telefone:</strong> {diretor.telefone}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Mandato da Diretoria
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    A atual diretoria foi eleita em assembleia geral realizada em janeiro de 2024, 
                    com mandato de 2 anos, conforme estabelecido no estatuto da organização.
                  </p>
                  <p className="text-muted-foreground">
                    Próxima eleição: <strong>Janeiro de 2026</strong>
                  </p>
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

export default Diretoria;