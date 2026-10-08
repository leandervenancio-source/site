import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#090A0F] text-zinc-400 py-16 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <span className="w-2 h-2 rounded-sm bg-white group-hover:bg-zinc-300 transition-colors"></span>
              <div className="flex items-baseline tracking-tight text-base font-sans">
                <span className="font-semibold text-white">mont</span>
                <span className="font-normal text-zinc-400 ml-1">finance</span>
              </div>
            </Link>
            <p className="text-xs text-zinc-400 max-w-sm font-normal leading-relaxed mb-6">
              CFO Terceirizado para empresas de e-commerce: gestão, finanças, tributação e capital integrados para aumentar lucro, gerar caixa e reduzir riscos.
            </p>
            <div className="flex space-x-2">
              <a 
                href="https://www.instagram.com/leandervenancio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/leander-ven%C3%A2ncio-9996ab141/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-200 mb-4">Serviços</h3>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><Link to="/" className="hover:text-white transition-colors">Performance Financeira</Link></li>
              <li><Link to="/solucoes-de-capital" className="hover:text-white transition-colors">Soluções de Capital</Link></li>
              <li><Link to="/consultoria-tributaria" className="hover:text-white transition-colors">Consultoria Tributária</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-200 mb-4">Links</h3>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><a href="/#niveis-de-servico" className="hover:text-white transition-colors">Níveis de serviço</a></li>
              <li><a href="/#diagnostico" className="hover:text-white transition-colors">Diagnóstico</a></li>
              <li><Link to="/materiais" className="hover:text-white transition-colors">Conteúdos</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-200 mb-4">Contato</h3>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="mailto:contato@montgestao.com.br" className="hover:text-white transition-colors break-all">contato@montgestao.com.br</a></li>
              <li><a href="https://wa.me/message/NRXMFPWG6DUZB1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">(62) 99920-0405</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/[0.08] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Mont Finance. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-zinc-500 max-w-md text-center md:text-right">
            O conteúdo deste site é informativo e não constitui parecer jurídico, contábil ou tributário. Cada situação exige análise do caso concreto.
          </p>
        </div>
      </div>
    </footer>
  );
}
