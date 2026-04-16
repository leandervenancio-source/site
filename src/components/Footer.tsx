import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-obsidian text-branco py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-premium/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
          <div className="md:col-span-6">
            <Link to="/" className="font-display text-3xl font-bold tracking-tight text-branco mb-8 block hover:text-accent-premium transition-all duration-500">
              Leander <span className="font-serif italic font-light text-accent-premium">Venâncio</span>
            </Link>
            <p className="text-branco/40 max-w-md mt-8 text-lg font-light leading-relaxed">
              Advisor estratégico focado em estruturar empresas de alto faturamento através do <span className="text-branco font-normal">Modelo de Gestão Integral (MGI)</span>.
            </p>
            <div className="flex space-x-6 mt-12">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-12 h-12 rounded-full glass flex items-center justify-center text-branco/40 hover:text-accent-premium hover:border-accent-premium/50 transition-all duration-500">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-display text-[10px] font-bold tracking-[0.3em] uppercase mb-10 text-accent-premium">Navegação</h3>
            <ul className="space-y-6">
              <li><Link to="/" className="text-branco/40 hover:text-accent-premium text-sm font-light transition-all duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Home</Link></li>
              {/* <li><Link to="/materiais" className="text-branco/40 hover:text-accent-premium text-sm font-light transition-all duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Materiais Gratuitos</Link></li> */}
              <li><Link to="/diagnostico" className="text-branco/40 hover:text-accent-premium text-sm font-light transition-all duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Diagnóstico</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display text-[10px] font-bold tracking-[0.3em] uppercase mb-10 text-accent-premium">Contato</h3>
            <ul className="space-y-6">
              <li><a href="mailto:contato@leandervenancio.com.br" className="text-branco/40 hover:text-accent-premium text-sm font-light transition-all duration-300 break-all">contato@leandervenancio.com.br</a></li>
              <li className="text-branco/40 text-sm font-light">(62) 999200405</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-32 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-branco/20 text-[10px] font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Leander Venâncio. Todos os direitos reservados.
          </p>
          <div className="flex space-x-12">
            <a href="#" className="text-branco/20 hover:text-branco/40 text-[10px] font-bold uppercase tracking-widest transition-colors">Privacidade</a>
            <a href="#" className="text-branco/20 hover:text-branco/40 text-[10px] font-bold uppercase tracking-widest transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
