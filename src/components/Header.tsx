import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import tijolinhoLogo from "@/assets/tijolinho-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isApresentacaoOpen, setIsApresentacaoOpen] = useState(false);

  const menuItems = [
    { name: "HOME", href: "/" },
    { 
      name: "APRESENTAÇÃO", 
      href: "#",
      submenu: [
        { name: "Diretoria", href: "/diretoria" },
        { name: "Currículo", href: "/curriculo" },
        { name: "Quem Somos", href: "/quem-somos" },
        { name: "Conheça a Equipe", href: "/equipe" },
      ]
    },
    { name: "PROJETOS", href: "#projetos" },
    { name: "FAÇA UMA DOAÇÃO", href: "#doacao" },
    { name: "PATROCINADORES", href: "#" },
    { name: "PARCEIROS", href: "#parceiros" },
    { name: "PRESTAÇÃO DE CONTAS", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="w-full">
        {/* Top bar with logo */}
        <div className="flex items-center justify-center py-6 border-b border-border bg-white">
          <div className="flex items-center gap-4">
            <img 
              src={tijolinhoLogo} 
              alt="OSC Tijolinho - Aproximando pessoas" 
              className="h-20 w-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-primary">Tijolinho</h1>
              <p className="text-sm md:text-base text-primary font-medium">Aproximando Pessoas</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-primary w-full">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              {/* Desktop menu */}
              <div className="hidden md:flex items-center space-x-6 mx-auto">
                {menuItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <a
                      href={item.href}
                      className="text-white hover:text-white/80 transition-colors font-medium text-sm flex items-center"
                      onClick={item.submenu ? (e) => {
                        e.preventDefault();
                        setIsApresentacaoOpen(!isApresentacaoOpen);
                      } : undefined}
                    >
                      {item.name}
                      {item.submenu && (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </a>
                    {item.submenu && (
                      <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-primary border-t border-primary-foreground/20">
              <div className="px-4 py-2 space-y-2">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="block text-white hover:text-white/80 transition-colors font-medium text-sm py-2"
                      onClick={item.submenu ? (e) => {
                        e.preventDefault();
                        setIsApresentacaoOpen(!isApresentacaoOpen);
                      } : () => setIsMenuOpen(false)}
                    >
                      {item.name}
                      {item.submenu && (
                        <ChevronDown className="ml-1 h-4 w-4 inline" />
                      )}
                    </a>
                    {item.submenu && isApresentacaoOpen && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-white/80 hover:text-white transition-colors text-sm py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;