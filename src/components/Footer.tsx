import { Linkedin, Instagram } from "lucide-react";
import { trackWhatsAppClick } from "../lib/analytics";

export function Footer() {
  return (
    <footer className="bg-[#071A1E] text-slate-400 py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-5">
            <a href="#topo" className="inline-block mb-5 group">
              <img 
                src="/brand/mont-finance-logo-menu.png" 
                alt="Mont Finance" 
                className="h-8 w-auto object-contain transition-opacity group-hover:opacity-90" 
              />
            </a>
            <p className="text-xs text-slate-400 max-w-sm font-normal leading-relaxed mb-6">
              CFO Terceirizado para empresas de e-commerce: finanças, estratégia e capital integrados para aumentar o lucro e dar segurança para a sua operação crescer.
            </p>
            <div className="flex space-x-2.5">
              <a 
                href="https://www.instagram.com/leandervenancio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-[#0A272D] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#E8A33D] hover:scale-105 transition-all"
                aria-label="Instagram de Leander Venâncio"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/leander-ven%C3%A2ncio-9996ab141/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-[#0A272D] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#E8A33D] hover:scale-105 transition-all"
                aria-label="LinkedIn de Leander Venâncio"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Três Frentes</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#topo" className="hover:text-[#F5B85D] transition-colors">Finanças</a></li>
              <li><a href="#topo" className="hover:text-[#F5B85D] transition-colors">Estratégia</a></li>
              <li><a href="#topo" className="hover:text-[#F5B85D] transition-colors">Capital</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Navegação</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#topo" className="hover:text-[#F5B85D] transition-colors">Início</a></li>
              <li><a href="#metodo-dape" className="hover:text-[#F5B85D] transition-colors">Método DAPE</a></li>
              <li><a href="#niveis" className="hover:text-[#F5B85D] transition-colors">Pacotes de serviço</a></li>
              <li><a href="#quem-conduz" className="hover:text-[#F5B85D] transition-colors">Quem conduz</a></li>
              <li><a href="#diagnostico" className="hover:text-[#F5B85D] transition-colors">Diagnóstico</a></li>
              <li><a href="#faq" className="hover:text-[#F5B85D] transition-colors">Perguntas frequentes</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Contato</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="mailto:contato@montfinance.com.br" className="hover:text-[#F5B85D] transition-colors whitespace-nowrap">
                  contato@montfinance.com.br
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5562999200405" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackWhatsAppClick("footer")}
                  className="hover:text-[#F5B85D] transition-colors whitespace-nowrap"
                >
                  (62) 99920-0405
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Mont Finance. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-slate-500 max-w-md text-center md:text-right leading-relaxed">
            O conteúdo deste site é informativo e não constitui parecer jurídico, contábil ou tributário. Cada situação exige análise do caso concreto.
          </p>
        </div>
      </div>
    </footer>
  );
}
