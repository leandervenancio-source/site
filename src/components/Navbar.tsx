import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import { trackCtaClick } from "../lib/analytics";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#071A1E]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Oficial Mont Finance */}
          <a href="#topo" className="flex items-center group">
            <img
              src="/brand/mont-finance-logo-menu.png"
              alt="Mont Finance"
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </a>

          {/* Único Botão do Topo: Agendar Diagnóstico */}
          <div className="flex items-center">
            <a
              href="#diagnostico"
              onClick={() => trackCtaClick("navbar", "Agendar diagnóstico")}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] hover:from-[#D4932D] hover:to-[#E8A33D] text-[#071A1E] text-xs font-bold uppercase tracking-wider transition-all shadow-[0_4px_16px_rgba(232,163,61,0.3)] hover:shadow-[0_6px_22px_rgba(232,163,61,0.5)] hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Solicitar Diagnóstico</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
