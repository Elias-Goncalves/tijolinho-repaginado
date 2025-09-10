import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Quem Somos
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Somos uma organização dedicada a aproximar pessoas através da educação, cultura e desenvolvimento social.
              </p>
            </div>

            {/* Nossa História */}
            <div className="max-w-4xl mx-auto mb-20">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                    Nossa História
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      A OSC Tijolinho nasceu em 2018 com o propósito de criar pontes entre pessoas e oportunidades. 
                      Fundada por um grupo de educadores e assistentes sociais comprometidos com a transformação social, 
                      nossa organização tem suas raízes na região norte de São Paulo.
                    </p>
                    <p>
                      O nome "Tijolinho" representa nossa filosofia: cada ação, cada projeto, cada pessoa atendida 
                      é como um tijolo na construção de uma sociedade mais justa e igualitária. Tijolo por tijolo, 
                      construímos pontes que aproximam pessoas e criam oportunidades.
                    </p>
                    <p>
                      Ao longo dos anos, evoluímos de uma pequena iniciativa local para uma organização reconhecida 
                      municipalmente, mantendo sempre nossos valores fundamentais: transparência, respeito, 
                      solidariedade e compromisso com a educação.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Missão, Visão e Valores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Missão */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Nossa Missão
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Promover o desenvolvimento social, educacional e cultural de crianças, jovens e adultos, 
                    criando oportunidades de crescimento pessoal e profissional através de projetos inovadores 
                    e parcerias estratégicas.
                  </p>
                </CardContent>
              </Card>

              {/* Visão */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Nossa Visão
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser referência em transformação social na região norte de São Paulo, 
                    reconhecida pela excelência em projetos educacionais e pela capacidade 
                    de aproximar pessoas e construir pontes para um futuro melhor.
                  </p>
                </CardContent>
              </Card>

              {/* Valores */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Nossos Valores
                  </h3>
                  <div className="text-muted-foreground leading-relaxed">
                    <p className="mb-2"><strong>Transparência:</strong> Em todas as ações</p>
                    <p className="mb-2"><strong>Respeito:</strong> À diversidade e dignidade</p>
                    <p className="mb-2"><strong>Solidariedade:</strong> Na construção coletiva</p>
                    <p><strong>Excelência:</strong> Na prestação de serviços</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impacto Social */}
            <div className="mt-20">
              <Card className="max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                    Nosso Impacto Social
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                      <p className="text-muted-foreground">Pessoas Atendidas</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">50+</div>
                      <p className="text-muted-foreground">Eventos Realizados</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">15</div>
                      <p className="text-muted-foreground">Parcerias Ativas</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">8</div>
                      <p className="text-muted-foreground">Bairros Atendidos</p>
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

export default QuemSomos;