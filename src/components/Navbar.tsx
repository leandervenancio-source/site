import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
];

const materialsLink = { name: "Conteúdos", path: "/materiais" };

const solutionLinks = [
  { name: "Performance Program", path: "/performance-program", badge: "Carro-Chefe" },
  { name: "Assessoria de Crédito", path: "/assessoria-credito", badge: "Capital" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
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
              montgestão
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:text-accent-premium",
                  location.pathname === link.path ? "text-accent-premium" : "text-branco/60"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Solutions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:text-accent-premium flex items-center gap-1.5 py-2",
                  location.pathname.includes("program") || location.pathname.includes("credito")
                    ? "text-accent-premium" 
                    : "text-branco/60"
                )}
              >
                Soluções <ChevronDown className={cn("h-3 w-3 transition-transform duration-300", solutionsOpen && "rotate-180")} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 transition-all duration-300 origin-top",
                  solutionsOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="bg-obsidian border border-white/10 rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                  {solutionLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setSolutionsOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-[11px] font-semibold tracking-wider text-branco/75 hover:text-branco hover:bg-white/[0.06] rounded-xl transition-all duration-200 group/item"
                    >
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-md bg-accent-premium/15 text-accent-premium border border-accent-premium/30 font-bold">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to={materialsLink.path}
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:text-accent-premium",
                location.pathname === materialsLink.path ? "text-accent-premium" : "text-branco/60"
              )}
            >
              {materialsLink.name}
            </Link>

            <Link
              to="/diagnostico"
              className="group relative inline-flex items-center justify-center px-7 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium rounded-full overflow-hidden transition-all duration-500 shadow-lg shadow-accent-premium/20 hover:shadow-accent-premium/40 hover:scale-[1.02]"
            >
              <span className="relative z-10">Diagnóstico Estratégico</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
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
          <div className="px-5 pt-5 pb-8 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors border-b border-white/5",
                  location.pathname === link.path ? "text-accent-premium" : "text-branco/70 hover:text-accent-premium"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-b border-white/5 pb-2">
              <span className="block px-3 pt-3 pb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-accent-premium">
                Soluções
              </span>
              <div className="pl-3 space-y-1">
                {solutionLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-2 text-xs font-medium text-branco/70 hover:text-accent-premium"
                  >
                    <span>{link.name}</span>
                    <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded bg-accent-premium/10 text-accent-premium">
                      {link.badge}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to={materialsLink.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors border-b border-white/5",
                location.pathname === materialsLink.path ? "text-accent-premium" : "text-branco/70 hover:text-accent-premium"
              )}
            >
              {materialsLink.name}
            </Link>
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
