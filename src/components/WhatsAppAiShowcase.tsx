import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageCircle,
  CheckCheck,
  Sparkles,
  Mic,
  Phone,
  Video,
  MoreVertical,
  Smile,
  Paperclip,
  Camera
} from "lucide-react";

interface AiScenario {
  id: string;
  chip: string;
  question: string;
  timeUser: string;
  timeBot: string;
  replyHeader: string;
  replyLines: { label: string; value: string }[];
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
    replyHeader: "Resumo consolidado do mês até agora:",
    replyLines: [
      { label: "💰 Faturamento:", value: "R$ 1.648.420" },
      { label: "📦 CMV (38%):", value: "- R$ 626.400" },
      { label: "📈 Lucro líquido real:", value: "R$ 225.904 (13,7%)" }
    ],
    replyTip:
      "O Site Próprio gerou 81% de todo o lucro do mês (margem líquida de 19%).",
    source: "Fonte: DRE Gerencial + ERP"
  },
  {
    id: "canal",
    chip: "Qual canal está dando mais margem hoje?",
    question: "Qual canal está deixando mais margem líquida hoje?",
    timeUser: "15:04",
    timeBot: "15:04",
    replyHeader: "Ranking de margem líquida (após CMV, taxas, frete e ads):",
    replyLines: [
      { label: "🟢 Site Próprio:", value: "19% (R$ 183,2 mil)" },
      { label: "🟡 Mercado Livre:", value: "8% (R$ 30,6 mil)" },
      { label: "🔴 Shopee:", value: "4% (R$ 12,1 mil)" }
    ],
    replyTip:
      "Cupons e comissão na Shopee estão consumindo 20% da venda. Vale travar o desconto mínimo.",
    source: "Fonte: BI Canais + Marketplaces"
  },
  {
    id: "caixa",
    chip: "Como está meu caixa para os próximos 30 dias?",
    question: "Como está a previsão do meu caixa para os próximos 30 dias?",
    timeUser: "09:32",
    timeBot: "09:32",
    replyHeader: "Projeção de caixa para os próximos 30 dias:",
    replyLines: [
      { label: "🏦 Saldo hoje em conta:", value: "R$ 380.000" },
      { label: "⚠️ Pico de saídas (dia 15):", value: "- R$ 148.500" },
      { label: "✅ Saldo projetado (30d):", value: "R$ 512.000" }
    ],
    replyTip:
      "O repasse do Mercado Livre cai no dia 16. Segure R$ 45 mil em conta para pagar fornecedores sem antecipar recebível.",
    source: "Fonte: Fluxo de Caixa 90d + Bancos"
  },
  {
    id: "estoque",
    chip: "Quais SKUs estão com estoque parado?",
    question: "Quanto tenho parado em estoque de baixo giro (Curva C)?",
    timeUser: "11:47",
    timeBot: "11:47",
    replyHeader: "Raio-X de estoque parado (+90 dias sem giro):",
    replyLines: [
      { label: "📦 CMV imobilizado:", value: "R$ 310.000" },
      { label: "🏷️ Quantidade Curva C:", value: "42 SKUs" },
      { label: "📉 Custo financeiro:", value: "- R$ 6.200/mês" }
    ],
    replyTip:
      "Um combo de liquidação com 20% OFF no Site Próprio libera ~R$ 190 mil em caixa vivo em 30 dias.",
    source: "Fonte: ERP Estoque + Curva ABC"
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

        {/* COLUNA DIREITA: VISUAL OFICIAL CLÁSSICO DO WHATSAPP */}
        <div className="lg:col-span-7">
          <div className="rounded-[26px] bg-[#EFEAE2] border-4 border-white/15 shadow-[0_28px_70px_rgba(0,0,0,0.65)] overflow-hidden max-w-[560px] mx-auto">
            
            {/* Top Bar Verde Oficial do WhatsApp (#075E54) */}
            <div className="px-4 py-3 bg-[#075E54] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative w-10 h-10 rounded-full bg-[#071A1E] border-2 border-[#E8A33D] flex items-center justify-center shrink-0 shadow-xs">
                  <img
                    src="/brand/mont-finance-icone-ambar.png"
                    alt="Mont Finance IA"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <strong className="text-sm font-bold text-white block truncate leading-tight">
                    Mont Finance · IA
                  </strong>
                  <span className="text-[11px] text-[#D9FDD3] block truncate">
                    online
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/90 shrink-0">
                <Video className="w-4 h-4" />
                <Phone className="w-4 h-4" />
                <MoreVertical className="w-4 h-4" />
              </div>
            </div>

            {/* Área de Mensagens com Papel de Parede Clássico Bege do WhatsApp (#EFEAE2) */}
            <div
              className="p-4 sm:p-5 min-h-[325px] flex flex-col justify-between relative"
              style={{
                backgroundColor: "#EFEAE2",
                backgroundImage:
                  "radial-gradient(rgba(11,20,26,0.06) 1px, transparent 1px), radial-gradient(rgba(11,20,26,0.04) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                backgroundPosition: "0 0, 11px 11px"
              }}
            >
              {/* Pill de Data "HOJE" estilo WhatsApp */}
              <div className="flex justify-center mb-3">
                <span className="px-3 py-1 rounded-lg bg-white/90 text-[#54656F] text-[10px] font-semibold uppercase tracking-wide shadow-xs">
                  Hoje
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 flex-1 flex flex-col justify-center"
                >
                  {/* Bolha Enviada pelo Gestor (Verde Claro Oficial #D9FDD3) */}
                  <div className="flex justify-end">
                    <div className="relative max-w-[84%] px-3.5 py-2 rounded-lg rounded-tr-none bg-[#D9FDD3] text-[#111B21] shadow-[0_1px_2px_rgba(0,0,0,0.13)]">
                      <p className="text-[13px] font-medium leading-snug pr-12">
                        {current.question}
                      </p>
                      <span className="absolute bottom-1.5 right-2.5 inline-flex items-center gap-1 text-[10px] text-[#667781]">
                        {current.timeUser}
                        <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />
                      </span>
                    </div>
                  </div>

                  {/* Bolha Recebida da Mont Finance IA (Branca Oficial #FFFFFF) */}
                  <div className="flex justify-start">
                    <div className="relative max-w-[92%] sm:max-w-[88%] px-3.5 py-2.5 rounded-lg rounded-tl-none bg-white text-[#111B21] shadow-[0_1px_2px_rgba(0,0,0,0.13)] space-y-2 text-[13px] leading-relaxed">
                      <p className="font-bold text-[#111B21]">
                        {current.replyHeader}
                      </p>

                      <div className="space-y-1 pl-0.5">
                        {current.replyLines.map((line, idx) => (
                          <div key={idx} className="text-[12.5px]">
                            <span className="text-[#3B4A54]">{line.label} </span>
                            <strong className="text-[#111B21] font-extrabold">
                              {line.value}
                            </strong>
                          </div>
                        ))}
                      </div>

                      <p className="text-[12.5px] text-[#3B4A54] pt-1.5 border-t border-slate-200/80">
                        <strong className="text-[#075E54]">💡 Recomendação:</strong>{" "}
                        {current.replyTip}
                      </p>

                      <div className="flex items-end justify-between gap-3 pt-0.5">
                        <span className="text-[10.5px] italic text-[#667781]">
                          {current.source}
                        </span>
                        <span className="text-[10px] text-[#667781] shrink-0">
                          {current.timeBot}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Barra Inferior Oficial do WhatsApp (#F0F2F5) */}
            <div className="px-3 py-2.5 bg-[#F0F2F5] border-t border-slate-200/70 flex items-center gap-2.5">
              <div className="flex items-center gap-2.5 text-[#54656F] pl-1">
                <Smile className="w-5 h-5" />
                <Paperclip className="w-5 h-5" />
              </div>

              <div className="flex-1 px-4 py-2 rounded-full bg-white text-xs text-[#667781] flex items-center justify-between gap-2 shadow-2xs">
                <span className="truncate">Mensagem</span>
                <Camera className="w-4 h-4 shrink-0 text-[#54656F]" />
              </div>

              <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Mic className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
