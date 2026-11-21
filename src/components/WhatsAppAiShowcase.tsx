import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageCircle,
  CheckCheck,
  Sparkles,
  Mic,
  Send,
  Database
} from "lucide-react";

interface AiScenario {
  id: string;
  chip: string;
  question: string;
  timeUser: string;
  timeBot: string;
  replyIntro: string;
  kpis: { label: string; value: string; accent?: string }[];
  replyTip: string;
  source: string;
}

const scenarios: AiScenario[] = [
  {
    id: "lucro",
    chip: "Quanto sobrou de lucro líquido este mês?",
    question: "Quanto sobrou de lucro líquido no mês até hoje?",
    timeUser: "14:18",
    timeBot: "14:18",
    replyIntro:
      "No consolidado do mês até agora, sua operação faturou R$ 1.648.420 com sobra líquida real de R$ 225.904 (13,7%):",
    kpis: [
      { label: "Faturamento", value: "R$ 1,64M", accent: "text-white" },
      { label: "CMV (38%)", value: "- R$ 626,4k", accent: "text-rose-300" },
      { label: "Lucro Líquido", value: "+ R$ 225,9k", accent: "text-emerald-400" }
    ],
    replyTip:
      "Destaque: o Site Próprio gerou 81% de todo o lucro (margem de 19%).",
    source: "DRE Gerencial + ERP · Atualizado agora"
  },
  {
    id: "canal",
    chip: "Qual canal está dando mais margem hoje?",
    question: "Qual canal está deixando mais margem líquida hoje?",
    timeUser: "15:04",
    timeBot: "15:04",
    replyIntro:
      "Comparando margem líquida após CMV, impostos, taxas, frete e mídia, o ranking de rentabilidade está assim:",
    kpis: [
      { label: "Site Próprio", value: "19% lucro", accent: "text-emerald-400" },
      { label: "Mercado Livre", value: "8% lucro", accent: "text-[#F5B85D]" },
      { label: "Shopee", value: "4% lucro", accent: "text-rose-300" }
    ],
    replyTip:
      "Atenção: cupons e comissão na Shopee estão consumindo 20% da venda. Vale revisar o desconto mínimo.",
    source: "BI Canais + Marketplaces · Atualizado agora"
  },
  {
    id: "caixa",
    chip: "Como está meu caixa para os próximos 30 dias?",
    question: "Como está a previsão do meu caixa para os próximos 30 dias?",
    timeUser: "09:32",
    timeBot: "09:32",
    replyIntro:
      "Seu caixa projetado fecha positivo em R$ 512.000 sem precisar antecipar recebíveis, mas há um ponto de atenção no dia 15:",
    kpis: [
      { label: "Saldo Hoje", value: "R$ 380,0k", accent: "text-white" },
      { label: "Pico Dia 15", value: "- R$ 148,5k", accent: "text-[#F5B85D]" },
      { label: "Saldo 30d", value: "R$ 512,0k", accent: "text-emerald-400" }
    ],
    replyTip:
      "O repasse do Mercado Livre entra dia 16. Recomendo segurar R$ 45k em conta para cobrir fornecedores no dia 15.",
    source: "Fluxo de Caixa 90d + Bancos · Atualizado agora"
  },
  {
    id: "estoque",
    chip: "Quais SKUs estão com estoque parado?",
    question: "Quanto tenho parado em estoque de baixo giro (Curva C)?",
    timeUser: "11:47",
    timeBot: "11:47",
    replyIntro:
      "Você tem R$ 310.000 em CMV imobilizado em 42 SKUs da Curva C parados há mais de 90 dias no galpão:",
    kpis: [
      { label: "CMV Parado", value: "R$ 310,0k", accent: "text-[#F5B85D]" },
      { label: "SKUs Curva C", value: "42 itens", accent: "text-white" },
      { label: "Custo Mensal", value: "- R$ 6,2k/mês", accent: "text-rose-300" }
    ],
    replyTip:
      "Se fizermos um combo de liquidação com 20% OFF no Site Próprio, você libera ~R$ 190k em caixa vivo em 30 dias.",
    source: "ERP Estoque + Curva ABC · Atualizado agora"
  }
];

export function WhatsAppAiShowcase() {
  const [activeId, setActiveId] = useState<string>(scenarios[0].id);
  const current = scenarios.find((s) => s.id === activeId) || scenarios[0];

  return (
    <div className="mt-10 pt-10 border-t border-white/10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* COLUNA ESQUERDA: EXPLICAÇÃO + PERGUNTAS CLICÁVEIS */}
        <div className="lg:col-span-5 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/15 border border-[#25D366]/35 text-[10px] font-mono font-bold uppercase tracking-wider text-[#4ade80] mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>IA Financeira no seu WhatsApp</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3 text-balance">
            Pergunte o que quiser aos seus números{" "}
            <span className="text-[#F5B85D]">direto no WhatsApp</span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
            Sem abrir planilhas nem logar em sistemas complexos. Nossa IA lê o seu ERP, DRE, CMV e fluxo de caixa e responde em segundos no seu WhatsApp — por texto ou áudio.
          </p>

          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
            Teste clicando em uma pergunta:
          </span>

          <div className="flex flex-col gap-2">
            {scenarios.map((s) => {
              const isSelected = s.id === activeId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveId(s.id)}
                  className={`px-3.5 py-2.5 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between gap-2 border ${
                    isSelected
                      ? "bg-[#0E4A55] border-[#E8A33D] text-white shadow-[0_6px_20px_rgba(232,163,61,0.18)]"
                      : "bg-[#0A272D]/80 border-white/10 text-slate-300 hover:border-white/25 hover:text-white"
                  }`}
                >
                  <span>“{s.chip}”</span>
                  <Sparkles
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isSelected ? "text-[#F5B85D]" : "text-slate-500"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* COLUNA DIREITA: SIMULADOR INTERATIVO DE WHATSAPP */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-[#061518] border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.55)] overflow-hidden">
            
            {/* Header Estilo WhatsApp */}
            <div className="px-4 sm:px-5 py-3 bg-[#0A272D] border-b border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-[#061518] border border-[#E8A33D]/60 flex items-center justify-center shrink-0">
                  <img
                    src="/brand/mont-finance-icone-ambar.png"
                    alt="Mont AI"
                    className="w-6 h-6 object-contain"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] ring-2 ring-[#0A272D]"></span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <strong className="text-xs sm:text-sm font-extrabold text-white">
                      Mont AI · WhatsApp
                    </strong>
                    <span className="px-1.5 py-0.5 rounded bg-[#E8A33D]/20 text-[#F5B85D] text-[8px] font-mono font-black uppercase">
                      24/7
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#4ade80] block">
                    online · conectado ao ERP, DRE e Bancos
                  </span>
                </div>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-slate-300">
                <Database className="w-3 h-3 text-[#F5B85D]" />
                Dado Vivo
              </span>
            </div>

            {/* Corpo do Chat */}
            <div className="p-4 sm:p-5 space-y-3.5 min-h-[295px] flex flex-col justify-between bg-[radial-gradient(ellipse_at_top_right,_rgba(14,74,85,0.22)_0%,_transparent_70%)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="space-y-3.5"
                >
                  {/* Mensagem do Gestor (Direita) */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-tr-sm bg-[#0E4A55] border border-teal-400/25 text-white shadow-md">
                      <p className="text-xs sm:text-sm font-medium leading-snug">
                        {current.question}
                      </p>
                      <div className="flex items-center justify-end gap-1 mt-1 text-[9px] font-mono text-teal-200/80">
                        <span>{current.timeUser}</span>
                        <CheckCheck className="w-3 h-3 text-sky-300" />
                      </div>
                    </div>
                  </div>

                  {/* Resposta da Mont AI (Esquerda) */}
                  <div className="flex justify-start">
                    <div className="w-full sm:max-w-[92%] p-4 rounded-2xl rounded-tl-sm bg-[#0A272D] border border-[#E8A33D]/35 text-slate-200 shadow-lg space-y-3">
                      <p className="text-xs sm:text-[13px] leading-relaxed text-slate-100">
                        {current.replyIntro}
                      </p>

                      {/* Mini KPI Cards dentro da resposta do WhatsApp */}
                      <div className="grid grid-cols-3 gap-2">
                        {current.kpis.map((kpi, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-xl bg-[#061518] border border-white/10"
                          >
                            <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block truncate">
                              {kpi.label}
                            </span>
                            <strong
                              className={`text-xs sm:text-sm font-mono font-extrabold block mt-0.5 ${
                                kpi.accent || "text-white"
                              }`}
                            >
                              {kpi.value}
                            </strong>
                          </div>
                        ))}
                      </div>

                      <p className="text-[11px] sm:text-xs text-slate-300 leading-snug pt-1 border-t border-white/10">
                        <strong className="text-[#F5B85D]">✦ Insight:</strong>{" "}
                        {current.replyTip}
                      </p>

                      <div className="flex items-center justify-between gap-2 text-[9px] font-mono text-slate-400 pt-0.5">
                        <span className="truncate">{current.source}</span>
                        <span className="shrink-0">{current.timeBot}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Barra de Input Estilo WhatsApp */}
            <div className="px-4 py-2.5 bg-[#0A272D] border-t border-white/10 flex items-center gap-2.5">
              <div className="flex-1 px-3.5 py-2 rounded-full bg-[#061518] border border-white/10 text-[11px] text-slate-400 truncate">
                Pergunte por texto ou áudio no seu WhatsApp...
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center shrink-0">
                <Mic className="w-3.5 h-3.5" />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-[#061518] flex items-center justify-center shrink-0">
                <Send className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
