import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
];

const materialsLink = { name: "Materiais Gratuitos", path: "/materiais" };

const solutionLinks = [
  { name: "Advisory Program", path: "/advisory-program" },
  { name: "Performance Program", path: "/performance-program" },
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
      scrolled ? "bg-obsidian/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-branco hover:text-accent-premium transition-all duration-500">
              Leander <span className="font-serif italic font-light text-accent-premium">Venâncio</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:text-accent-premium",
                  location.pathname === link.path ? "text-accent-premium" : "text-branco/50"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:text-accent-premium flex items-center gap-1",
                  location.pathname.startsWith("/programa") ? "text-accent-premium" : "text-branco/50"
                )}
                onMouseEnter={() => setSolutionsOpen(true)}
              >
                Soluções <ChevronDown className={cn("h-3 w-3 transition-transform duration-500", solutionsOpen && "rotate-180")} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 glass rounded-3xl p-2 shadow-2xl transition-all duration-500 origin-top",
                  solutionsOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                )}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                {solutionLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setSolutionsOpen(false)}
                    className="block px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-branco/60 hover:text-accent-premium hover:bg-white/5 rounded-2xl transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* <Link
              to={materialsLink.path}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:text-accent-premium",
                location.pathname === materialsLink.path ? "text-accent-premium" : "text-branco/50"
              )}
            >
              {materialsLink.name}
            </Link> */}

            <Link
              to="/diagnostico"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium rounded-full overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10">Agendar Diagnóstico</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-branco hover:text-accent-premium focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-azul-noite border-b border-branco/10 absolute w-full left-0 top-full">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-4 text-sm font-bold uppercase tracking-[0.15em] transition-colors border-b border-branco/5",
                  location.pathname === link.path ? "text-accent-premium" : "text-branco/70 hover:text-accent-premium"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-b border-branco/5">
                <button 
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                    className="w-full flex justify-between items-center px-3 py-4 text-sm font-bold uppercase tracking-[0.15em] text-branco/70 hover:text-accent-premium"
                >
                    Soluções <ChevronDown className="h-4 w-4" />
                </button>
                {solutionsOpen && (
                    <div className="pl-6 space-y-2 pb-4">
                        {solutionLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => {setIsOpen(false); setSolutionsOpen(false);}}
                                className="block py-2 text-xs font-bold uppercase tracking-[0.15em] text-branco/50 hover:text-accent-premium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            {/* <Link
              to={materialsLink.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-4 text-sm font-bold uppercase tracking-[0.15em] transition-colors border-b border-branco/5",
                location.pathname === materialsLink.path ? "text-accent-premium" : "text-branco/70 hover:text-accent-premium"
              )}
            >
              {materialsLink.name}
            </Link> */}
            <Link
              to="/diagnostico"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 mt-6 text-sm font-bold uppercase tracking-[0.15em] text-obsidian bg-accent-premium text-center hover:bg-accent-premium/90 transition-colors rounded-full"
            >
              Agendar Diagnóstico
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
