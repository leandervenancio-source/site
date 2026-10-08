import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
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
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 pointer-events-none">
      <nav className={cn(
        "max-w-7xl mx-auto rounded-full transition-all duration-500 pointer-events-auto px-6 py-3.5 flex justify-between items-center",
        scrolled 
          ? "bg-[#090C15]/85 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl" 
          : "bg-white/[0.02] border border-white/5 backdrop-blur-md"
      )}>
        {/* Brand Logo - Fintech + Boutique */}
        <div className="flex-shrink-0 flex items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 rounded-lg bg-accent-premium/15 border border-accent-premium/40 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-accent-premium animate-pulse shadow-[0_0_8px_#d4af37]"></span>
            </div>
            <div className="flex items-baseline gap-1 text-xl tracking-tight">
              <span className="font-sans font-black tracking-tight text-white group-hover:text-accent-premium transition-colors">mont</span>
              <span className="font-sans font-light tracking-wider text-accent-premium text-lg">finance</span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Menu - 3 Service Tabs + Content */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-black/40 border border-white/10 p-1.5 rounded-full">
          {mainTabs.map((tab) => {
            const active = tab.isActive(location.pathname);
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-mono transition-all duration-300",
                  active 
                    ? "bg-white/10 text-white font-semibold shadow-sm border border-white/10" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/diagnostico"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-obsidian bg-accent-premium rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Diagnóstico <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-accent-premium focus:outline-none p-1.5 rounded-lg bg-white/5 border border-white/10"
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto rounded-3xl bg-[#090C15]/95 border border-white/10 shadow-2xl backdrop-blur-2xl p-6 pointer-events-auto">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-premium font-semibold block px-3 py-1">
              Serviços & Soluções
            </span>

            {mainTabs.map((tab) => {
              const active = tab.isActive(location.pathname);
              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-2xl text-xs font-mono tracking-wider transition-colors",
                    active ? "bg-accent-premium/15 text-accent-premium font-bold border border-accent-premium/30" : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {tab.name}
                </Link>
              );
            })}

            <Link
              to="/diagnostico"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3.5 mt-4 text-xs font-mono font-bold uppercase tracking-wider text-obsidian bg-accent-premium text-center hover:bg-white transition-colors rounded-full shadow-lg shadow-accent-premium/20"
            >
              Agendar Diagnóstico Estratégico
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
