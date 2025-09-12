import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, CreditCard, PiggyBank, Users } from "lucide-react";
const DonationSection = () => {
  const donationOptions = [{
    icon: <CreditCard className="h-8 w-8 text-white stroke-white" />,
    title: "Doação Online",
    description: "Faça sua doação de forma rápida e segura através do nosso site",
    action: "Doar Agora"
  }, {
    icon: <PiggyBank className="h-8 w-8 text-white stroke-white" />,
    title: "Nota Fiscal Paulista",
    description: "Doe seus créditos da Nota Fiscal Paulista sem custo adicional",
    action: "Saiba Como"
  }, {
    icon: <Users className="h-8 w-8 text-white stroke-white" />,
    title: "Seja Voluntário",
    description: "Doe seu tempo e conhecimento para nossos projetos",
    action: "Participe"
  }];
  return <section id="donation" className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-12 w-12 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Como Você Pode Ajudar
            </h2>
          </div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Existem várias formas de contribuir com nosso trabalho e fazer a diferença 
            na vida de crianças e adolescentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {donationOptions.map((option, index) => <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {option.title}
                </h3>
                <p className="opacity-90 mb-6 text-slate-50">
                  {option.description}
                </p>
                <Button variant="secondary" className="w-full">
                  {option.action}
                </Button>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center">
          <p className="text-lg mb-6 opacity-90">
            Seja um doador automático em 2023, seremos sempre gratos!
          </p>
          <Button size="lg" variant="secondary" className="px-12">
            Quero Ajudar Agora
          </Button>
        </div>
      </div>
    </section>;
};
export default DonationSection;