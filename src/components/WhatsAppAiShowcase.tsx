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
    replyHeader: "📊 Fechamento parcial do mês (até hoje às 14h):",
    replyLines: [
      { label: "💰 Receita Bruta:", value: "R$ 1.648.420 (+18% vs. mês ant.)" },
      { label: "📦 CMV (Mercadoria):", value: "- R$ 626.400 (38,0%)" },
      { label: "🧾 Impostos + Taxas + Frete:", value: "- R$ 478.042 (29,0%)" },
      { label: "📣 Mídia (Meta + Google):", value: "- R$ 186.200 (ROAS 8,85x)" },
      { label: "🏢 Despesas Fixas:", value: "- R$ 131.874 (8,0%)" },
      { label: "✅ Lucro Líquido Real:", value: "R$ 225.904 (13,7% · +2,4 p.p.)" }
    ],
    replyTip:
      "O Site Próprio sozinho gerou 81% do seu lucro (margem de 19%). Realocando R$ 25 mil da verba restante para kits de maior ticket no Site, você fecha o mês acima de R$ 265 mil de lucro líquido.",
    source: "Fonte: DRE Gerencial + ERP · Atualizado agora"
  },
  {
    id: "canal",
    chip: "Qual canal está dando mais margem hoje?",
    question: "Qual canal está deixando mais margem líquida hoje?",
    timeUser: "15:04",
    timeBot: "15:04",
    replyHeader: "🏆 Ranking de rentabilidade líquida (após CMV, impostos, taxas, frete e ads):",
    replyLines: [
      { label: "1️⃣ Site Próprio:", value: "19,0% · R$ 183.221 (Ticket R$ 218)" },
      { label: "2️⃣ Mercado Livre:", value: "8,0% · R$ 30.611 (Taxa+Frete 27%)" },
      { label: "3️⃣ Shopee:", value: "4,0% · R$ 12.072 (Taxa+Cupom 20%)" }
    ],
    replyTip:
      "Na Shopee, 14 SKUs promocionais estão com margem negativa (-4,2%) por causa de cupom + frete. Pausar Ads nesses 14 itens e reajustar o preço em +9% recupera R$ 18.400/mês direto no seu lucro.",
    source: "Fonte: BI Canais + Marketplaces · Atualizado agora"
  },
  {
    id: "caixa",
    chip: "Como está meu caixa para os próximos 30 dias?",
    question: "Como está a previsão do meu caixa para os próximos 30 dias?",
    timeUser: "09:32",
    timeBot: "09:32",
    replyHeader: "💸 Projeção de Fluxo de Caixa (próximos 30 dias):",
    replyLines: [
      { label: "🏦 Saldo disponível hoje:", value: "R$ 380.000" },
      { label: "📥 Entradas previstas:", value: "+ R$ 1.190.500 (Site + ML + Shopee)" },
      { label: "📤 Saídas previstas:", value: "- R$ 1.058.500 (Fornec. + Imp. + Ads)" },
      { label: "⚠️ Alerta no Dia 15:", value: "Pico de R$ 148.500 (Fornecedor A + ICMS)" },
      { label: "✅ Saldo projetado em 30d:", value: "R$ 512.000 (+R$ 132k livre)" }
    ],
    replyTip:
      "O repasse de R$ 94 mil do Mercado Livre cai só no dia 16. Mantendo R$ 50 mil de reserva na conta até o dia 15, você paga tudo em dia e economiza R$ 22.400/mês sem antecipar recebíveis.",
    source: "Fonte: Fluxo de Caixa 90d + Bancos · Atualizado agora"
  },
  {
    id: "estoque",
    chip: "Quais SKUs estão com estoque parado?",
    question: "Quanto tenho parado em estoque de baixo giro (Curva C)?",
    timeUser: "11:47",
    timeBot: "11:47",
    replyHeader: "📦 Diagnóstico de Estoque Parado (Curva C · +90 dias sem giro):",
    replyLines: [
      { label: "🔒 Capital travado (CMV):", value: "R$ 310.000 em 42 SKUs" },
      { label: "⏳ Tempo médio no galpão:", value: "115 dias sem venda" },
      { label: "🔥 Custo financeiro mensal:", value: "- R$ 6.200/mês drenando caixa" },
      { label: "🎯 Maiores gargalos:", value: "Coleção Anterior (R$ 142k) e Linha Basic (R$ 98k)" }
    ],
    replyTip:
      "Montando um combo 'Leve 3' com 20% OFF no Site Próprio para sua base de CRM, você transforma ~R$ 190 mil desse estoque em caixa vivo em 30 dias — sem canibalizar os produtos Curva A.",
    source: "Fonte: ERP Estoque + Curva ABC · Atualizado agora"
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
