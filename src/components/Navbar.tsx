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
          ? "bg-[#07252B]/95 backdrop-blur-xl border-b border-[#0E4A55]/60 py-3.5 shadow-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Oficial Mont Finance */}
          <a href="#topo" className="flex items-center group">
            <img
              src="/brand/mont-finance-serifa-horizontal-branco.png"
              alt="Mont Finance"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:opacity-95"
            />
          </a>

          {/* Único Botão do Topo: Agendar Diagnóstico */}
          <div className="flex items-center">
            <a
              href="#diagnostico"
              onClick={() => trackCtaClick("navbar", "Agendar diagnóstico")}
              className="px-5 py-2.5 rounded-full bg-[#E8A33D] hover:bg-[#D4932D] text-[#07252B] text-xs font-semibold uppercase tracking-wider transition-all shadow-[0_2px_12px_rgba(232,163,61,0.25)] hover:shadow-[0_4px_20px_rgba(232,163,61,0.4)] flex items-center gap-1.5"
            >
              <span>Agendar diagnóstico</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#07252B]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
