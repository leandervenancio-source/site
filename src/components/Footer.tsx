import { Linkedin, Instagram } from "lucide-react";
import { trackWhatsAppClick } from "../lib/analytics";

export function Footer() {
  return (
    <footer className="bg-[#14181B] text-[#5B6166] py-16 border-t border-[#F5F3EE]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-5">
            <a href="#topo" className="inline-block mb-5 group">
              <img 
                src="/brand/mont-finance-serifa-horizontal-branco.png" 
                alt="Mont Finance" 
                className="h-8 w-auto object-contain transition-opacity group-hover:opacity-90" 
              />
            </a>
            <p className="text-xs text-[#5B6166] max-w-sm font-normal leading-relaxed mb-6">
              CFO Terceirizado para empresas de e-commerce: finanças, tributação e capital integrados para aumentar lucro, gerar caixa e reduzir riscos.
            </p>
            <div className="flex space-x-2">
              <a 
                href="https://www.instagram.com/leandervenancio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-[#1B2024] border border-[#F5F3EE]/10 flex items-center justify-center text-[#5B6166] hover:text-[#F5F3EE] hover:border-[#E8A33D]/40 transition-colors"
                aria-label="Instagram de Leander Venâncio"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/leander-ven%C3%A2ncio-9996ab141/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-[#1B2024] border border-[#F5F3EE]/10 flex items-center justify-center text-[#5B6166] hover:text-[#F5F3EE] hover:border-[#E8A33D]/40 transition-colors"
                aria-label="LinkedIn de Leander Venâncio"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#F5F3EE] mb-4">Três Frentes</h3>
            <ul className="space-y-2.5 text-xs text-[#5B6166]">
              <li><a href="#frentes" className="hover:text-[#F5F3EE] transition-colors">Finanças</a></li>
              <li><a href="#frentes" className="hover:text-[#F5F3EE] transition-colors">Tributação</a></li>
              <li><a href="#frentes" className="hover:text-[#F5F3EE] transition-colors">Capital</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#F5F3EE] mb-4">Navegação</h3>
            <ul className="space-y-2.5 text-xs text-[#5B6166]">
              <li><a href="#topo" className="hover:text-[#F5F3EE] transition-colors">Início</a></li>
              <li><a href="#niveis" className="hover:text-[#F5F3EE] transition-colors">Níveis de serviço</a></li>
              <li><a href="#metodo-dape" className="hover:text-[#F5F3EE] transition-colors">Método DAPE</a></li>
              <li><a href="#quem-conduz" className="hover:text-[#F5F3EE] transition-colors">Quem conduz</a></li>
              <li><a href="#diagnostico" className="hover:text-[#F5F3EE] transition-colors">Diagnóstico</a></li>
              <li><a href="#faq" className="hover:text-[#F5F3EE] transition-colors">Perguntas frequentes</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#F5F3EE] mb-4">Contato</h3>
            <ul className="space-y-2.5 text-xs text-[#5B6166]">
              <li>
                <a href="mailto:contato@montgestao.com.br" className="hover:text-[#F5F3EE] transition-colors break-all">
                  contato@montgestao.com.br
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5562999200405" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackWhatsAppClick("footer")}
                  className="hover:text-[#F5F3EE] transition-colors"
                >
                  (62) 99920-0405
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#F5F3EE]/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-[#5B6166]">
          <p>
            &copy; {new Date().getFullYear()} Mont Finance. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-[#5B6166] max-w-md text-center md:text-right leading-relaxed">
            O conteúdo deste site é informativo e não constitui parecer jurídico, contábil ou tributário. Cada situação exige análise do caso concreto.
          </p>
        </div>
      </div>
    </footer>
  );
}
