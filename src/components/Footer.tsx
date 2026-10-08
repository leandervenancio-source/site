import { Linkedin, Instagram } from "lucide-react";
import { trackWhatsAppClick } from "../lib/analytics";

export function Footer() {
  return (
    <footer className="bg-[#090A0F] text-zinc-400 py-16 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-5">
            <a href="#topo" className="flex items-center gap-2.5 mb-4 group inline-flex">
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
            <p className="text-xs text-zinc-400 max-w-sm font-normal leading-relaxed mb-6">
              CFO Terceirizado para empresas de e-commerce: finanças, tributação e capital integrados para aumentar lucro, gerar caixa e reduzir riscos.
            </p>
            <div className="flex space-x-2">
              <a 
                href="https://www.instagram.com/leandervenancio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="Instagram de Leander Venâncio"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/leander-ven%C3%A2ncio-9996ab141/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="LinkedIn de Leander Venâncio"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-200 mb-4">Três Frentes</h3>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#frentes" className="hover:text-white transition-colors">Finanças</a></li>
              <li><a href="#frentes" className="hover:text-white transition-colors">Tributação</a></li>
              <li><a href="#frentes" className="hover:text-white transition-colors">Capital</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-200 mb-4">Navegação</h3>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="#topo" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#niveis" className="hover:text-white transition-colors">Níveis de serviço</a></li>
              <li><a href="#metodo-dape" className="hover:text-white transition-colors">Método DAPE</a></li>
              <li><a href="#quem-conduz" className="hover:text-white transition-colors">Quem conduz</a></li>
              <li><a href="#diagnostico" className="hover:text-white transition-colors">Diagnóstico</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas frequentes</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-200 mb-4">Contato</h3>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="mailto:contato@montgestao.com.br" className="hover:text-white transition-colors break-all">
                  contato@montgestao.com.br
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5562999200405" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackWhatsAppClick("footer")}
                  className="hover:text-white transition-colors"
                >
                  (62) 99920-0405
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/[0.08] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Mont Finance. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-zinc-500 max-w-md text-center md:text-right leading-relaxed">
            O conteúdo deste site é informativo e não constitui parecer jurídico, contábil ou tributário. Cada situação exige análise do caso concreto.
          </p>
        </div>
      </div>
    </footer>
  );
}
