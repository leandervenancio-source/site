import { Link } from "react-router-dom";
import { Linkedin, Instagram, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-obsidian text-branco py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-premium/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-6">
            <Link to="/" className="font-display text-3xl font-bold tracking-tight text-branco mb-4 block hover:text-accent-premium transition-all duration-500">
              Leander <span className="font-serif italic font-light text-accent-premium">Venâncio</span>
            </Link>
            <p className="text-branco/40 max-w-md mt-4 text-sm lg:text-base font-light leading-relaxed">
              Advisor estratégico focado em estruturar empresas de alto faturamento através do <span className="text-branco font-normal">Modelo de Gestão Integral (MGI)</span>.
            </p>
            <div className="flex space-x-4 mt-8">
              {[
                { icon: Instagram, href: "https://www.instagram.com/leandervenancio/" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/leander-ven%C3%A2ncio-9996ab141/" },
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-branco/40 hover:text-accent-premium hover:border-accent-premium/50 transition-all duration-500">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-display text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-accent-premium">Navegação</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-branco/40 hover:text-accent-premium text-sm font-light transition-all duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Home</Link></li>
              <li><Link to="/diagnostico" className="text-branco/40 hover:text-accent-premium text-sm font-light transition-all duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Diagnóstico</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-accent-premium">Contato</h3>
            <ul className="space-y-4">
              <li><a href="mailto:contato@leandervenancio.com.br" className="text-branco/40 hover:text-accent-premium text-sm font-light transition-all duration-300 break-all">contato@leandervenancio.com.br</a></li>
              <li><a href="https://wa.me/message/NRXMFPWG6DUZB1" target="_blank" rel="noopener noreferrer" className="text-branco/40 hover:text-accent-premium text-sm font-light transition-all duration-300">(62) 999200405</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-branco/20 text-[10px] font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Leander Venâncio. Todos os direitos reservados.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-branco/20 hover:text-branco/40 text-[10px] font-bold uppercase tracking-widest transition-colors">Privacidade</a>
            <a href="#" className="text-branco/20 hover:text-branco/40 text-[10px] font-bold uppercase tracking-widest transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
