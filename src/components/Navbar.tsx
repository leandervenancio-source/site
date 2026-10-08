import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const mainTabs = [
  { 
    name: "Performance Financeira", 
    path: "/", 
    isActive: (p: string) => p === "/" || p === "/performance-program" 
  },
  { 
    name: "Soluções de Capital", 
    path: "/solucoes-de-capital", 
    isActive: (p: string) => p === "/solucoes-de-capital" || p === "/assessoria-credito" 
  },
  { 
    name: "Consultoria Tributária", 
    path: "/consultoria-tributaria", 
    isActive: (p: string) => p === "/consultoria-tributaria" 
  },
  { 
    name: "Conteúdos", 
    path: "/materiais", 
    isActive: (p: string) => p === "/materiais" 
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-500",
      scrolled ? "bg-obsidian/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl" : "bg-transparent py-7"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-sans text-2xl lg:text-3xl font-black tracking-tighter lowercase text-branco hover:text-accent-premium transition-all duration-500 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-premium animate-pulse"></span>
              mont finance
            </Link>
          </div>
          
          {/* Desktop Menu - 3 Service Tabs + Content + CTA */}
          <div className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {mainTabs.map((tab) => {
              const active = tab.isActive(location.pathname);
              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  className={cn(
                    "text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-accent-premium relative py-1",
                    active ? "text-accent-premium" : "text-branco/65"
                  )}
                >
                  {tab.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-premium rounded-full"></span>
                  )}
                </Link>
              );
            })}

            <Link
              to="/diagnostico"
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium rounded-full overflow-hidden transition-all duration-500 shadow-lg shadow-accent-premium/20 hover:shadow-accent-premium/40 hover:scale-[1.02]"
            >
              <span className="relative z-10">Diagnóstico Estratégico</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </div>

          {/* Medium Screens (md to lg) fallback to compact spacing */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            {mainTabs.slice(0, 3).map((tab) => {
              const active = tab.isActive(location.pathname);
              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-accent-premium",
                    active ? "text-accent-premium" : "text-branco/65"
                  )}
                >
                  {tab.name}
                </Link>
              );
            })}
            <Link
              to="/diagnostico"
              className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-obsidian bg-accent-premium rounded-full"
            >
              Diagnóstico
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-branco hover:text-accent-premium focus:outline-none p-2"
              aria-label="Abrir menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-obsidian border-b border-white/10 absolute w-full left-0 top-full shadow-2xl backdrop-blur-2xl">
          <div className="px-5 pt-5 pb-8 space-y-2">
            <div className="text-[10px] uppercase tracking-[0.25em] text-accent-premium font-bold px-3 pt-2 pb-1">
              Serviços & Soluções
            </div>

            {mainTabs.map((tab) => {
              const active = tab.isActive(location.pathname);
              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors border-b border-white/5",
                    active ? "text-accent-premium bg-white/[0.03] rounded-lg" : "text-branco/70 hover:text-accent-premium"
                  )}
                >
                  {tab.name}
                </Link>
              );
            })}

            <Link
              to="/diagnostico"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 mt-6 text-xs font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium text-center hover:bg-white transition-colors rounded-full shadow-lg shadow-accent-premium/20"
            >
              Diagnóstico Estratégico
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
