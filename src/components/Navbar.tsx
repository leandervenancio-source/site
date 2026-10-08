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
          ? "bg-[#090A0F]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo & Wordmark */}
          <a href="#topo" className="flex items-center gap-2.5 group">
            <img
              src="/favicon.png"
              alt="Mont Finance"
              className="h-7 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
            />
            <div className="flex items-baseline tracking-tight text-base font-sans">
              <span className="font-semibold text-white">mont</span>
              <span className="font-normal text-[#d4af37] ml-1">finance</span>
            </div>
          </a>

          {/* Único Botão do Topo: Agendar Diagnóstico */}
          <div className="flex items-center">
            <a
              href="#diagnostico"
              onClick={() => trackCtaClick("navbar", "Agendar diagnóstico")}
              className="px-5 py-2.5 rounded-full bg-[#d4af37] hover:bg-[#c5a059] text-black text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center gap-1.5"
            >
              <span>Agendar diagnóstico</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
