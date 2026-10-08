import { motion } from "motion/react";
import { DiagnosticForm } from "../components/DiagnosticForm";
import { Check, Phone, Mail, ShieldCheck } from "lucide-react";

export function Diagnostic() {
  return (
    <div className="bg-[#090A0F] text-white min-h-screen pt-36 pb-32 relative overflow-hidden font-sans selection:bg-[#d4af37] selection:text-black">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-[radial-gradient(ellipse_at_top,_#d4af37_0%,_transparent_65%)] opacity-15 pointer-events-none blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#d4af37]/30 backdrop-blur-md mb-8">
              <img 
                src="/favicon.png" 
                alt="Mont Finance" 
                className="h-4 w-auto object-contain drop-shadow-[0_0_6px_rgba(212,175,55,0.5)]" 
              />
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                Diagnóstico Estratégico
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-6 leading-tight">
              Comece entendendo para onde vai o dinheiro da sua operação.
            </h1>
            
            <p className="text-base text-zinc-300 font-light leading-relaxed mb-8">
              O diagnóstico é uma conversa estratégica com um especialista da Mont Finance sobre a situação e os vazamentos de margem do seu e-commerce.
            </p>

            <div className="space-y-4 mb-8 text-xs text-zinc-300">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Mapeamos o que você já sabe e o que ainda não enxerga sobre margem, caixa, estoque e tributos.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Indicamos por onde começar e se faz sentido a Controladoria, o CFO Terceirizado completo ou outra frente.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Você sai com clareza sobre os próximos passos, mesmo que decida não contratar.</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>WhatsApp: (62) 99920-0405</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <span>contato@montgestao.com.br</span>
              </div>
              <p className="text-[11px] text-zinc-500 pt-1">
                *Para operações de e-commerce com faturamento anual acima de R$ 3 milhões. Nenhum resultado é garantido.
              </p>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <DiagnosticForm />
          </motion.div>

        </div>

      </div>
    </div>
  );
}
