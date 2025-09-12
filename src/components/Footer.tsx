import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import tijolinhoLogoCircle from "@/assets/tijolinho-logo-circle.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <img 
              src={tijolinhoLogoCircle} 
              alt="OSC Tijolinho" 
              className="h-16 w-16 mx-auto md:mx-0 mb-4"
            />
            <h3 className="text-xl font-bold mb-3">OSC Tijolinho</h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Atendemos crianças e adolescentes em situação de vulnerabilidade social, 
              concedendo acesso à educação de qualidade, atividades de lazer e formativas.
            </p>
          </div>

          {/* Contato */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span className="text-secondary-foreground/80">11-951603000</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <img src="src/assets/whatsapp.svg" color="#ee6911" />
                <span className="text-secondary-foreground/80"><a href="https://api.whatsapp.com/send?phone=5511951603000"/>Whatsapp</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span className="text-secondary-foreground/80">contato@tijolinho.org.br</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span className="text-secondary-foreground/80">São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos e Redes Sociais */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <a href="#" className="bg-primary hover:bg-primary/80 p-3 rounded-full transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-primary hover:bg-primary/80 p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-primary hover:bg-primary/80 p-3 rounded-full transition-colors">
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-secondary-foreground/80">@ongtijolinho</p>
              <p className="text-secondary-foreground/80">www.tijolinho.org.br</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground/60 text-center md:text-left mb-4 md:mb-0">
              Todos os direitos reservados © 2025
            </p>
            <div className="flex space-x-6">
              <a href="/politica-privacidade" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-uso" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="/transparencia" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Transparência
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;