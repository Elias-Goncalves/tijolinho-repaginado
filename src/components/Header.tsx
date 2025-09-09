import { useState } from "react";
import { Menu, X } from "lucide-react";
import tijolinhoLogo from "@/assets/tijolinho-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", href: "#" },
    { name: "APRESENTAÇÃO", href: "#" },
    { name: "PROJETOS", href: "#" },
    { name: "FAÇA UMA DOAÇÃO", href: "#" },
    { name: "PATROCINADORES", href: "#" },
    { name: "PARCEIROS", href: "#" },
    { name: "PRESTAÇÃO DE CONTAS", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar with logo */}
        <div className="flex items-center justify-center py-4 border-b border-border">
          <img 
            src={tijolinhoLogo} 
            alt="OSC Tijolinho - Aproximando pessoas" 
            className="h-16 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="bg-primary">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6 mx-auto">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-white/80 transition-colors font-medium text-sm"
                >
                  {item.name}
                </a>
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

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-primary border-t border-primary-foreground/20">
              <div className="px-4 py-2 space-y-2">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-white hover:text-white/80 transition-colors font-medium text-sm py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
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