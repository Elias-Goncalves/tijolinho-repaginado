import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Share2 } from "lucide-react";
import notaFiscalBanner from "@/assets/nota-fiscal-banner.png";

const ArticleContent = () => {
  return (
    <article className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Título do artigo */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Quer apoiar a OSC Tijolinho sem precisar depositar um real do seu bolso? 
            <span className="text-primary"> Você pode!</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </header>

        {/* Imagem principal */}
        <div className="mb-12">
          <img
            src={notaFiscalBanner}
            alt="Banner Nota Fiscal Paulista - Você pode apoiar a OSC Tijolinho sem precisar depositar um real do seu bolso"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Conteúdo do artigo */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Por meio do sistema da Nota Fiscal Paulista você consegue, pois todos os créditos 
            gerados pelos cupons fiscais serão direcionados à nossa entidade.
          </p>

          <Card className="mb-8 bg-muted/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Como fazer o cadastro?</h2>
              <ol className="space-y-4 text-foreground">
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</span>
                  <span>Acesse o sistema como consumidor por meio de seu CPF e senha ou com certificado digital</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</span>
                  <span>Clique em "Entidades", e selecione "Doação de cupom fiscal com CPF"</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</span>
                  <span>Coloque todos os dados solicitados e a partir disso todas as suas compras realizadas com CPF serão direcionadas para a OSC TIJOLINHO</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          <p className="text-lg text-foreground mb-8 font-medium">
            Viu só como é fácil? Ajude o nosso trabalho!
          </p>

          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <p className="text-foreground mb-4">
              Para fazer a doação, baixe o aplicativo ou entre no site:
            </p>
            <Button asChild className="mb-4">
              <a 
                href="https://portal.fazenda.sp.gov.br/servicos/nfp/Paginas/Guia-doacao_aplicativo.aspx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Acessar Portal da Fazenda SP
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="bg-secondary/10 p-8 rounded-lg mb-8">
            <p className="text-lg text-foreground leading-relaxed">
              A OSC Tijolinho atende crianças e adolescentes em situação de vulnerabilidade social 
              e concede acesso à educação de qualidade, atividades de lazer e formativas.
            </p>
          </div>

          <div className="text-center py-8">
            <p className="text-xl font-bold text-primary mb-4">
              Seja um doador automático em 2025, seremos sempre gratos
            </p>
            <p className="text-lg text-foreground">
              Forte abraço e um <strong>FELIZ 2025!</strong>
            </p>
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-primary to-primary/80 p-8 rounded-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Compartilhe esta notícia</h3>
            <p className="mb-6">Ajude a divulgar essa forma simples de apoiar a OSC Tijolinho</p>
            <Button variant="secondary" className="inline-flex items-center">
              <Share2 className="mr-2 h-4 w-4" />
              Compartilhar
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleContent;