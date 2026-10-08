import { Link } from "react-router-dom";
import { Linkedin, Instagram, ArrowRight, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-obsidian text-branco py-16 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-4">
            <Link to="/" className="font-sans text-3xl font-black tracking-tighter lowercase text-branco mb-4 block hover:text-accent-premium transition-all duration-500">
              mont finance
            </Link>
            <p className="text-branco/50 max-w-sm mt-4 text-sm font-light leading-relaxed">
              CFO Terceirizado para empresas de e-commerce: gestão, finanças, tributação e capital integrados para aumentar lucro, gerar caixa e reduzir riscos.
            </p>
            <div className="flex space-x-3 mt-8">
              {[
                { icon: Instagram, href: "https://www.instagram.com/leandervenancio/" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/leander-ven%C3%A2ncio-9996ab141/" },
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-branco/50 hover:text-accent-premium hover:border-accent-premium/40 transition-all duration-300">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-display text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-accent-premium">Serviços & Soluções</h3>
            <ul className="space-y-3.5">
              <li><Link to="/" className="text-branco/50 hover:text-accent-premium text-xs font-light transition-all duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Performance Financeira (CFO)</Link></li>
              <li><Link to="/solucoes-de-capital" className="text-branco/50 hover:text-accent-premium text-xs font-light transition-all duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Captação de Recursos</Link></li>
              <li><Link to="/consultoria-tributaria" className="text-branco/50 hover:text-accent-premium text-xs font-light transition-all duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Inteligência Tributária</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-display text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-accent-premium">Navegação</h3>
            <ul className="space-y-3.5">
              <li><Link to="/" className="text-branco/50 hover:text-accent-premium text-xs font-light transition-all duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Início</Link></li>
              <li><a href="/#niveis-de-servico" className="text-branco/50 hover:text-accent-premium text-xs font-light transition-all duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Níveis de Serviço</a></li>
              <li><a href="/#diagnostico" className="text-branco/50 hover:text-accent-premium text-xs font-light transition-all duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Diagnóstico</a></li>
              <li><Link to="/materiais" className="text-branco/50 hover:text-accent-premium text-xs font-light transition-all duration-300 flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Conteúdos</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-display text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-accent-premium">Contato Direto</h3>
            <ul className="space-y-3.5">
              <li><a href="mailto:contato@montgestao.com.br" className="text-branco/50 hover:text-accent-premium text-xs font-light transition-all duration-300 break-all">contato@montgestao.com.br</a></li>
              <li><a href="https://wa.me/message/NRXMFPWG6DUZB1" target="_blank" rel="noopener noreferrer" className="text-branco/50 hover:text-accent-premium text-xs font-light transition-all duration-300">(62) 99920-0405</a></li>
              <li className="pt-2 text-[11px] text-branco/30 font-mono">Atendimento Nacional para E-commerce</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-branco/30 text-[10px] font-mono tracking-wide">
          <p>
            &copy; {new Date().getFullYear()} Mont Finance. Todos os direitos reservados.
          </p>
          <p className="max-w-xl text-center md:text-right text-[10px] text-white/30 leading-relaxed">
            O conteúdo deste site é informativo e não constitui parecer jurídico, contábil ou tributário. Cada situação exige análise do caso concreto.
          </p>
        </div>
      </div>
    </footer>
  );
}
