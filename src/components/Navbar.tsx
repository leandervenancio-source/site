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
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled 
        ? "bg-[#090A0F]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5" 
        : "bg-transparent py-5"
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Minimalist Tech Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img 
              src="/favicon.png" 
              alt="Mont Finance" 
              className="h-7 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]" 
            />
            <div className="flex items-baseline tracking-tight text-base font-sans">
              <span className="font-semibold text-white">mont</span>
              <span className="font-normal text-[#d4af37] ml-1">finance</span>
            </div>
          </Link>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7">
            {mainTabs.map((tab) => {
              const active = tab.isActive(location.pathname);
              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  className={cn(
                    "text-xs font-medium tracking-wide transition-colors py-1",
                    active ? "text-[#d4af37] font-semibold" : "text-zinc-400 hover:text-white"
                  )}
                >
                  {tab.name}
                </Link>
              );
            })}
          </nav>

          {/* Minimalist Action CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/diagnostico"
              className="px-5 py-2 rounded-full bg-[#d4af37] hover:bg-[#c5a059] text-black text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)] flex items-center gap-1.5"
            >
              <span>Diagnóstico</span>
              <ArrowRight className="w-3 h-3 text-black" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#090A0F]/95 backdrop-blur-2xl border-b border-white/[0.08] px-6 py-6 transition-all">
          <div className="space-y-3">
            {mainTabs.map((tab) => {
              const active = tab.isActive(location.pathname);
              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    active ? "bg-white/[0.06] text-white" : "text-zinc-400 hover:text-white hover:bg-white/[0.02]"
                  )}
                >
                  {tab.name}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-white/[0.08]">
              <Link
                to="/diagnostico"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-medium transition-all text-center block"
              >
                Agendar Diagnóstico
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
