import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BarChart3,
  PackageSearch,
  PieChart,
  CalendarClock,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  DollarSign,
  RefreshCw,
  Calendar,
  SlidersHorizontal,
  Megaphone,
  TrendingUp,
  Info
} from "lucide-react";
import { trackCtaClick } from "../lib/analytics";

type CockpitTab = "canais" | "skus" | "r100" | "caixa";
type ChannelSimKey = "consolidado" | "site_proprio" | "mercado_livre" | "shopee";

// 30 dias de barras empilhadas para o gráfico "Vendas por dia x meta" (em milhares R$, escala máx 80k)
const dailySalesBars = [
  { label: "seg 01/06", site: 31.2, loja: 3.4, shopee: 6.5, ml: 12.4 },
  { label: "ter 02/06", site: 34.8, loja: 3.8, shopee: 7.1, ml: 13.5 },
  { label: "qua 03/06", site: 32.5, loja: 3.2, shopee: 6.8, ml: 12.9 },
  { label: "qui 04/06", site: 36.1, loja: 4.0, shopee: 7.4, ml: 14.2 },
  { label: "sex 05/06", site: 39.4, loja: 4.5, shopee: 8.1, ml: 15.6 },
  { label: "sáb 06/06", site: 28.0, loja: 2.9, shopee: 5.8, ml: 11.0 },
  { label: "dom 07/06", site: 25.4, loja: 1.8, shopee: 5.2, ml: 9.8 },
  { label: "seg 08/06", site: 33.6, loja: 3.6, shopee: 6.9, ml: 13.1 },
  { label: "ter 09/06", site: 37.2, loja: 4.1, shopee: 7.8, ml: 14.6 },
  { label: "qua 10/06", site: 41.5, loja: 4.4, shopee: 8.6, ml: 16.2 },
  { label: "qui 11/06", site: 38.0, loja: 3.9, shopee: 7.5, ml: 14.8 },
  { label: "sex 12/06", site: 44.2, loja: 4.8, shopee: 9.2, ml: 17.4 },
  { label: "sáb 13/06", site: 29.5, loja: 3.1, shopee: 6.0, ml: 11.4 },
  { label: "dom 14/06", site: 26.8, loja: 2.0, shopee: 5.4, ml: 10.2 },
  { label: "seg 15/06", site: 35.1, loja: 3.7, shopee: 7.2, ml: 13.8 },
  { label: "ter 16/06", site: 36.9, loja: 3.9, shopee: 7.6, ml: 14.1 },
  { label: "qua 17/06", site: 31.8, loja: 3.3, shopee: 6.4, ml: 12.3 },
  { label: "qui 18/06", site: 34.2, loja: 3.6, shopee: 7.0, ml: 13.4 },
  { label: "sex 19/06", site: 37.6, loja: 4.2, shopee: 7.7, ml: 14.9 },
  { label: "sáb 20/06", site: 27.4, loja: 2.8, shopee: 5.6, ml: 10.8 },
  { label: "dom 21/06", site: 24.9, loja: 1.9, shopee: 5.1, ml: 9.6 },
  { label: "seg 22/06", site: 33.0, loja: 3.5, shopee: 6.7, ml: 12.8 },
  { label: "ter 23/06", site: 35.8, loja: 3.8, shopee: 7.3, ml: 13.9 },
  { label: "qua 24/06", site: 34.0, loja: 3.5, shopee: 6.9, ml: 13.2 },
  { label: "qui 25/06", site: 38.4, loja: 4.1, shopee: 7.9, ml: 15.0 },
  { label: "sex 26/06", site: 40.6, loja: 4.3, shopee: 8.3, ml: 15.8 },
  { label: "sáb 27/06", site: 28.9, loja: 3.0, shopee: 5.9, ml: 11.2 },
  { label: "dom 28/06", site: 26.1, loja: 2.1, shopee: 5.3, ml: 10.1 },
  { label: "seg 29/06", site: 36.5, loja: 3.9, shopee: 7.5, ml: 14.3 },
  { label: "ter 30/06", site: 39.1, loja: 4.2, shopee: 8.0, ml: 15.2 }
];

const attainmentRowsDia = [
  { dia: "seg 01/06", vendido: "R$ 53.500,00", meta: "R$ 70.000,00", pct: "76,4%" },
  { dia: "ter 02/06", vendido: "R$ 59.200,00", meta: "R$ 70.000,00", pct: "84,6%" },
  { dia: "qua 03/06", vendido: "R$ 55.400,00", meta: "R$ 70.000,00", pct: "79,1%" },
  { dia: "qui 04/06", vendido: "R$ 61.700,00", meta: "R$ 70.000,00", pct: "88,1%" },
  { dia: "sex 05/06", vendido: "R$ 67.600,00", meta: "R$ 70.000,00", pct: "96,6%" },
  { dia: "sáb 06/06", vendido: "R$ 47.700,00", meta: "R$ 70.000,00", pct: "68,1%" },
  { dia: "dom 07/06", vendido: "R$ 42.200,00", meta: "R$ 70.000,00", pct: "60,3%" },
  { dia: "seg 08/06", vendido: "R$ 57.200,00", meta: "R$ 70.000,00", pct: "81,7%" }
];

const attainmentRowsCanal = [
  { dia: "Site Próprio", vendido: "R$ 964.320,00", meta: "R$ 1.200.000,00", pct: "80,4%" },
  { dia: "Mercado Livre", vendido: "R$ 382.650,00", meta: "R$ 450.000,00", pct: "85,0%" },
  { dia: "Shopee", vendido: "R$ 196.840,00", meta: "R$ 300.000,00", pct: "65,6%" },
  { dia: "Loja Física", vendido: "R$ 104.610,00", meta: "R$ 150.000,00", pct: "69,7%" }
];

export function FinancialCockpit() {
  const [activeTab, setActiveTab] = useState<CockpitTab>("canais");
  const [selectedChannel, setSelectedChannel] = useState<ChannelSimKey>("consolidado");
  const [chartPeriod, setChartPeriod] = useState<"Dia" | "Semana" | "Mês">("Dia");
  const [attainmentView, setAttainmentView] = useState<"Dia" | "Canal">("Dia");

  const tabs: {
    id: CockpitTab;
    badge: string;
    label: string;
    question: string;
    icon: typeof BarChart3;
  }[] = [
    {
      id: "canais",
      badge: "Visão 01",
      label: "Vendas por Canal & ROAS",
      question: "Como estão o faturamento, ticket médio, investimento em mídia e atingimento de meta por canal?",
      icon: BarChart3
    },
    {
      id: "skus",
      badge: "Visão 02",
      label: "Curva ABC & Estoque",
      question: "Quais produtos dão lucro, quais dão prejuízo oculto e onde o dinheiro está parado?",
      icon: PackageSearch
    },
    {
      id: "r100",
      badge: "Visão 03",
      label: "Margem & Custos por Canal",
      question: "De todo o faturamento de cada canal, quanto o CMV, impostos, taxas e mídia consomem e quanto vira lucro?",
      icon: PieChart
    },
    {
      id: "caixa",
      badge: "Visão 04",
      label: "Previsão de Caixa 90d",
      question: "Como pagar fornecedores e crescer sem depender de antecipação de recebíveis?",
      icon: CalendarClock
    }
  ];

  const channelSimData: Record<
    ChannelSimKey,
    {
      name: string;
      subtitle: string;
      faturamento: string;
      cmvPct: number;
      cmvVal: string;
      impostosPct: number;
      impostosVal: string;
      taxasPct: number;
      taxasVal: string;
      fretePct: number;
      freteVal: string;
      midiaPct: number;
      midiaVal: string;
      fixosPct: number;
      fixosVal: string;
      lucroPct: number;
      lucroVal: string;
      insight: string;
    }
  > = {
    consolidado: {
      name: "Média Consolidada",
      subtitle: "Faturamento Total: R$ 1.648.420",
      faturamento: "R$ 1.648.420",
      cmvPct: 38,
      cmvVal: "R$ 626.400",
      impostosPct: 11,
      impostosVal: "R$ 181.326",
      taxasPct: 10,
      taxasVal: "R$ 164.842",
      fretePct: 8,
      freteVal: "R$ 131.874",
      midiaPct: 11,
      midiaVal: "R$ 186.200",
      fixosPct: 8,
      fixosVal: "R$ 131.874",
      lucroPct: 14,
      lucroVal: "R$ 225.904",
      insight:
        "Dos R$ 1.648.420 faturados na operação, R$ 626.400 (38%) vão para o CMV (mercadoria) e R$ 796.116 para impostos, taxas, frete, mídia e estrutura — gerando R$ 225.904 (13,7%) de lucro líquido real."
    },
    site_proprio: {
      name: "Loja Própria (D2C)",
      subtitle: "Faturamento do Canal: R$ 964.320",
      faturamento: "R$ 964.320",
      cmvPct: 35,
      cmvVal: "R$ 337.512",
      impostosPct: 11,
      impostosVal: "R$ 106.075",
      taxasPct: 4,
      taxasVal: "R$ 38.573",
      fretePct: 7,
      freteVal: "R$ 67.502",
      midiaPct: 16,
      midiaVal: "R$ 154.291",
      fixosPct: 8,
      fixosVal: "R$ 77.146",
      lucroPct: 19,
      lucroVal: "R$ 183.221",
      insight:
        "Na Loja Própria (R$ 964.320), a taxa de gateway é de apenas R$ 38.573 (4%), permitindo investir R$ 154.291 em tráfego pago e ainda gerar R$ 183.221 (19%) de lucro líquido — 81% de todo o lucro da empresa."
    },
    mercado_livre: {
      name: "Mercado Livre",
      subtitle: "Faturamento do Canal: R$ 382.650",
      faturamento: "R$ 382.650",
      cmvPct: 41,
      cmvVal: "R$ 156.887",
      impostosPct: 11,
      impostosVal: "R$ 42.092",
      taxasPct: 17,
      taxasVal: "R$ 65.051",
      fretePct: 10,
      freteVal: "R$ 38.265",
      midiaPct: 5,
      midiaVal: "R$ 19.132",
      fixosPct: 8,
      fixosVal: "R$ 30.612",
      lucroPct: 8,
      lucroVal: "R$ 30.611",
      insight:
        "Dos R$ 382.650 vendidos no Mercado Livre, comissão (R$ 65.051) e frete Full (R$ 38.265) consomem R$ 103.316 (27%), deixando R$ 30.611 (8%) de sobra líquida."
    },
    shopee: {
      name: "Shopee & Outros",
      subtitle: "Faturamento do Canal: R$ 301.450",
      faturamento: "R$ 301.450",
      cmvPct: 44,
      cmvVal: "R$ 132.001",
      impostosPct: 11,
      impostosVal: "R$ 33.159",
      taxasPct: 20,
      taxasVal: "R$ 61.218",
      fretePct: 9,
      freteVal: "R$ 26.107",
      midiaPct: 4,
      midiaVal: "R$ 12.777",
      fixosPct: 8,
      fixosVal: "R$ 24.116",
      lucroPct: 4,
      lucroVal: "R$ 12.072",
      insight:
        "Mesmo faturando R$ 301.450, o peso do CMV (R$ 132.001 · 44%) somado às comissões e cupons (R$ 61.218 · 20%) comprime o lucro líquido do canal para apenas R$ 12.072 (4%)."
    }
  };

  const currentSim = channelSimData[selectedChannel];
  const currentTabInfo = tabs.find((t) => t.id === activeTab)!;
  const activeAttainmentRows = attainmentView === "Dia" ? attainmentRowsDia : attainmentRowsCanal;

  return (
    <div className="w-full">
      {/* =========================================================================
          CABEÇALHO DA SEÇÃO
      ========================================================================= */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-wider text-[#F5B85D] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
          Visão Executiva para Tomada de Decisão
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
          Os indicadores que mostram onde está{" "}
          <span className="text-[#F5B85D]">o lucro real do seu e-commerce</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
          Chega de planilhas confusas que ninguém lê. Veja exemplos ilustrativos das 4 leituras essenciais que o CFO Terceirizado coloca na sua mesa todo mês para você decidir com segurança:
        </p>
      </div>

      {/* =========================================================================
          SELETOR INTERATIVO NO TOPO (4 TELAS DE DECISÃO)
      ========================================================================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6 max-w-6xl mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer flex flex-col justify-between ${
                isActive
                  ? "bg-gradient-to-br from-[#0E4A55] to-[#0A272D] border-2 border-[#E8A33D] shadow-[0_12px_30px_rgba(232,163,61,0.2)] -translate-y-0.5"
                  : "bg-[#0A272D]/70 border-white/10 hover:border-white/25 hover:bg-[#0A272D]"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span
                  className={`text-[10px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    isActive ? "bg-[#E8A33D] text-[#071A1E]" : "bg-white/10 text-slate-400"
                  }`}
                >
                  {tab.badge}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? "text-[#F5B85D]" : "text-slate-400"}`} />
              </div>
              <span className={`text-xs sm:text-sm font-extrabold block leading-snug ${isActive ? "text-white" : "text-slate-300"}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* =========================================================================
          PAINEL EXECUTIVO PRINCIPAL (TELA DIDÁTICA E ATRATIVA)
      ========================================================================= */}
      <div className="max-w-6xl mx-auto rounded-3xl bg-[#0A272D] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.55)] overflow-hidden">
        
        {/* Barra Superior do Painel com a Pergunta do Empresário */}
        <div className="px-5 sm:px-7 py-3.5 bg-[#061518] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/15"></div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#F5B85D] block">
                Pergunta que este indicador responde:
              </span>
              <p className="text-xs sm:text-sm font-bold text-white">
                “{currentTabInfo.question}”
              </p>
            </div>
          </div>

          <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 shrink-0 self-start sm:self-center">
            Cenário Ilustrativo · E-commerce
          </span>
        </div>

        {/* Corpo Dinâmico das 4 Visões */}
        <div className="p-4 sm:p-7">
          <AnimatePresence mode="wait">
            
            {/* ===================================================================
                TELA 1: VENDAS POR CANAL (ESTRUTURA FIEL À IMAGEM NA IDENTIDADE MONT FINANCE)
            =================================================================== */}
            {activeTab === "canais" && (
              <motion.div
                key="screen-canais"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {/* Header Interno do Dashboard: "Vendas por Canal" + Controles de Período */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-white/10">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                      Vendas por Canal
                    </h3>
                    <p className="text-xs text-slate-300">
                      Faturamento, pedidos e ticket médio de cada canal, com investimento em mídia e ROI
                    </p>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      Atualizado hoje às 14:20
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1.5 rounded-xl bg-[#071A1E] border border-white/15 text-[11px] font-semibold text-slate-200 inline-flex items-center gap-1.5">
                      <RefreshCw className="w-3.5 h-3.5 text-[#F5B85D]" />
                      Atualizar
                    </span>

                    <div className="px-3 py-1.5 rounded-xl bg-[#071A1E] border border-white/15 text-[11px] text-slate-300 inline-flex items-center gap-3">
                      <Calendar className="w-3.5 h-3.5 text-[#E8A33D] shrink-0" />
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block leading-none">
                          Período analisado
                        </span>
                        <strong className="text-white font-mono text-[11px]">01 – 30 jun 2026</strong>
                      </div>
                      <span className="h-5 w-px bg-white/10"></span>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block leading-none">
                          Comparado com
                        </span>
                        <strong className="text-slate-200 font-mono text-[11px]">01 – 31 mai 2026</strong>
                      </div>
                    </div>

                    <span className="px-3 py-1.5 rounded-xl bg-[#071A1E] border border-white/15 text-[11px] font-semibold text-slate-200 inline-flex items-center gap-1.5">
                      <SlidersHorizontal className="w-3.5 h-3.5 text-[#F5B85D]" />
                      Filtros
                    </span>
                  </div>
                </div>

                {/* LINHA 1: 3 MACRO CARDS (VENDAS | INVESTIMENTO | ROAS) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5">
                  
                  {/* Card 1: VENDAS */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#071A1E] border border-white/12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                          <DollarSign className="w-3.5 h-3.5 text-[#E8A33D]" />
                          VENDAS
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-[#E8A33D]/15 border border-[#E8A33D]/30 text-[#F5B85D] text-[10px] font-bold">
                          78% da meta
                        </span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                        R$ 1.648.420,00
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Meta R$ 2.100 mil · <strong className="text-slate-200">faltam R$ 451,6 mil</strong>
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-3.5 mt-3.5 border-t border-white/10 text-[11px]">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Pedidos</span>
                        <strong className="text-white font-mono">8.497</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Ticket médio</span>
                        <strong className="text-white font-mono">R$ 194,00</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">vs mês passado</span>
                        <strong className="text-emerald-400 font-mono">▲ 18%</strong>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: INVESTIMENTO */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#071A1E] border border-white/12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                          <Megaphone className="w-3.5 h-3.5 text-[#E8A33D]" />
                          INVESTIMENTO
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-slate-300 text-[10px] font-bold">
                          78% da verba
                        </span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                        R$ 186.200,00
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Verba R$ 240,0 mil · <strong className="text-slate-200">sobram R$ 53,8 mil</strong>
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-3.5 mt-3.5 border-t border-white/10 text-[11px]">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Facebook</span>
                        <strong className="text-white font-mono">R$ 108,0 mil</strong>{" "}
                        <span className="text-[10px] text-slate-400">· 58%</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Google</span>
                        <strong className="text-white font-mono">R$ 59,6 mil</strong>{" "}
                        <span className="text-[10px] text-slate-400">· 32%</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">TikTok</span>
                        <strong className="text-white font-mono">R$ 18,6 mil</strong>{" "}
                        <span className="text-[10px] text-slate-400">· 10%</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: ROAS */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#071A1E] border border-[#E8A33D]/35 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#F5B85D] flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5 text-[#E8A33D]" />
                          ROAS
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-[#E8A33D]/15 border border-[#E8A33D]/30 text-[#F5B85D] text-[10px] font-bold">
                          Retorno Mídia
                        </span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#F5B85D] tracking-tight">
                        8,85x
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Cada R$ 1 em anúncio virou <strong className="text-white">R$ 8,85</strong>
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-3.5 mt-3.5 border-t border-white/10 text-[11px]">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Meta de ROAS</span>
                        <strong className="text-white font-mono">8,0x</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Venda em mídia</span>
                        <strong className="text-white font-mono">11,3%</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">ROAS mês passado</span>
                        <strong className="text-slate-200 font-mono">7,4x</strong>
                      </div>
                    </div>
                  </div>

                </div>

                {/* LINHA 2: 4 CARDS DE CANAIS (SITE | LOJA FÍSICA | SHOPEE | MERCADO LIVRE) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  
                  {/* Canal 1: SITE */}
                  <div className="p-4 rounded-2xl bg-[#071A1E] border border-white/12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-white flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
                          SITE
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 text-[10px] font-mono font-bold">
                          80%
                        </span>
                      </div>
                      <div className="text-xl font-extrabold font-mono text-white">
                        R$ 964.320,00
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        Meta R$ 1.200 mil · <strong className="text-slate-200">faltam R$ 235,7 mil</strong>
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 pt-3 mt-3 border-t border-white/10 text-[10px]">
                      <div>
                        <span className="text-slate-400 block">Pedidos</span>
                        <strong className="text-white font-mono">4.423</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Ticket médio</span>
                        <strong className="text-white font-mono">R$ 218</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">vs mês ant.</span>
                        <strong className="text-emerald-400 font-mono">▲ 22%</strong>
                      </div>
                    </div>
                  </div>

                  {/* Canal 2: LOJA FÍSICA */}
                  <div className="p-4 rounded-2xl bg-[#071A1E] border border-white/12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-white flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                          LOJA FÍSICA
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-300 text-[10px] font-mono font-bold">
                          70%
                        </span>
                      </div>
                      <div className="text-xl font-extrabold font-mono text-white">
                        R$ 104.610,00
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        Meta R$ 150 mil · <strong className="text-slate-200">faltam R$ 45,4 mil</strong>
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 pt-3 mt-3 border-t border-white/10 text-[10px]">
                      <div>
                        <span className="text-slate-400 block">Pedidos</span>
                        <strong className="text-white font-mono">397</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Ticket médio</span>
                        <strong className="text-white font-mono">R$ 263</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">vs mês ant.</span>
                        <strong className="text-emerald-400 font-mono">▲ 11%</strong>
                      </div>
                    </div>
                  </div>

                  {/* Canal 3: SHOPEE */}
                  <div className="p-4 rounded-2xl bg-[#071A1E] border border-white/12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-white flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                          SHOPEE
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-rose-500/15 text-rose-300 text-[10px] font-mono font-bold">
                          66%
                        </span>
                      </div>
                      <div className="text-xl font-extrabold font-mono text-white">
                        R$ 196.840,00
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        Meta R$ 300 mil · <strong className="text-slate-200">faltam R$ 103,2 mil</strong>
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 pt-3 mt-3 border-t border-white/10 text-[10px]">
                      <div>
                        <span className="text-slate-400 block">Pedidos</span>
                        <strong className="text-white font-mono">1.491</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Ticket médio</span>
                        <strong className="text-white font-mono">R$ 132</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">vs mês ant.</span>
                        <strong className="text-emerald-400 font-mono">▲ 8%</strong>
                      </div>
                    </div>
                  </div>

                  {/* Canal 4: MERCADO LIVRE */}
                  <div className="p-4 rounded-2xl bg-[#071A1E] border border-[#E8A33D]/35 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-white flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D]"></span>
                          MERCADO LIVRE
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-[#E8A33D]/20 text-[#F5B85D] text-[10px] font-mono font-bold">
                          85%
                        </span>
                      </div>
                      <div className="text-xl font-extrabold font-mono text-white">
                        R$ 382.650,00
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        Meta R$ 450 mil · <strong className="text-slate-200">faltam R$ 67,4 mil</strong>
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 pt-3 mt-3 border-t border-white/10 text-[10px]">
                      <div>
                        <span className="text-slate-400 block">Pedidos</span>
                        <strong className="text-white font-mono">2.186</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Ticket médio</span>
                        <strong className="text-white font-mono">R$ 175</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">vs mês ant.</span>
                        <strong className="text-emerald-400 font-mono">▲ 19%</strong>
                      </div>
                    </div>
                  </div>

                </div>

                {/* LINHA 3: GRÁFICO "VENDAS POR DIA X META" (ESQUERDA) + TABELA "ATINGIMENTO" (DIREITA) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
                  
                  {/* Esquerda: Vendas por dia x meta */}
                  <div className="lg:col-span-7 p-4 sm:p-5 rounded-2xl bg-[#071A1E] border border-white/12 flex flex-col justify-between">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs sm:text-sm font-extrabold text-white">
                          Vendas por dia x meta
                        </h4>
                        <Info className="w-3.5 h-3.5 text-slate-500" />
                      </div>

                      <div className="inline-flex rounded-lg bg-[#0A272D] p-0.5 border border-white/10 text-[10px] font-bold">
                        {(["Dia", "Semana", "Mês"] as const).map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setChartPeriod(p)}
                            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                              chartPeriod === p
                                ? "bg-[#0E4A55] text-white shadow-xs"
                                : "text-slate-400 hover:text-white"
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Área do Gráfico com Eixo Y, Linha Tracejada de Meta (70,0k) e 30 Barras Empilhadas */}
                    <div className="relative pl-8 pr-1 pt-2 pb-1">
                      {/* Labels do Eixo Y */}
                      <div className="absolute left-0 top-2 bottom-6 flex flex-col justify-between text-[9px] font-mono text-slate-500">
                        <span>80k</span>
                        <span>60k</span>
                        <span>40k</span>
                        <span>20k</span>
                        <span>0</span>
                      </div>

                      {/* Linhas de grade horizontais + Linha de Meta 70,0k */}
                      <div className="relative h-44 border-b border-white/10 flex items-end justify-between gap-[3px] sm:gap-1 pt-4">
                        {/* Linhas de grade */}
                        <div className="absolute inset-x-0 top-0 border-t border-white/5 pointer-events-none"></div>
                        <div className="absolute inset-x-0 top-1/4 border-t border-white/5 pointer-events-none"></div>
                        <div className="absolute inset-x-0 top-2/4 border-t border-white/5 pointer-events-none"></div>
                        <div className="absolute inset-x-0 top-3/4 border-t border-white/5 pointer-events-none"></div>

                        {/* Linha Tracejada da Meta Diária (70,0k de 80k = 87.5% de altura, ou 12.5% do topo) */}
                        <div
                          className="absolute inset-x-0 border-t-2 border-dashed border-slate-400/70 z-10 pointer-events-none flex items-center justify-center"
                          style={{ top: "12.5%" }}
                        >
                          <span className="px-2 py-0.5 -mt-5 rounded bg-[#071A1E] text-[9px] font-mono font-bold text-slate-200 border border-white/10">
                            Meta 70,0k
                          </span>
                        </div>

                        {/* 30 Barras Empilhadas */}
                        {dailySalesBars.map((d, idx) => {
                          // Escala em relação a 80k máximo
                          const siteH = (d.site / 80) * 100;
                          const shopeeH = (d.shopee / 80) * 100;
                          const mlH = (d.ml / 80) * 100;
                          const lojaH = (d.loja / 80) * 100;
                          return (
                            <div
                              key={idx}
                              className="flex-1 h-full flex flex-col justify-end items-center group relative"
                              title={`${d.label}: R$ ${(d.site + d.shopee + d.ml + d.loja).toFixed(1)}k`}
                            >
                              <div className="w-full flex flex-col-reverse rounded-t-xs overflow-hidden">
                                <div style={{ height: `${siteH * 1.5}px` }} className="w-full bg-teal-400"></div>
                                <div style={{ height: `${shopeeH * 1.5}px` }} className="w-full bg-orange-500"></div>
                                <div style={{ height: `${mlH * 1.5}px` }} className="w-full bg-[#E8A33D]"></div>
                                <div style={{ height: `${lojaH * 1.5}px` }} className="w-full bg-rose-500"></div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Eixo X Datas */}
                      <div className="flex justify-between text-[8px] sm:text-[9px] font-mono text-slate-500 pt-1.5">
                        <span>seg 01/06</span>
                        <span className="hidden sm:inline">qui 04/06</span>
                        <span>seg 08/06</span>
                        <span className="hidden sm:inline">qui 11/06</span>
                        <span>seg 15/06</span>
                        <span className="hidden sm:inline">qui 18/06</span>
                        <span>seg 22/06</span>
                        <span className="hidden sm:inline">qui 25/06</span>
                        <span>ter 30/06</span>
                      </div>
                    </div>

                    {/* Legenda Inferior */}
                    <div className="flex flex-wrap items-center gap-3 pt-3 mt-2 border-t border-white/10 text-[10px] text-slate-300">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-teal-400"></span> Site
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500"></span> Loja física
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span> Shopee
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#E8A33D]"></span> Mercado Livre
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-3 border-t-2 border-dashed border-slate-400"></span> Meta
                      </span>
                    </div>
                  </div>

                  {/* Direita: Tabela de Atingimento */}
                  <div className="lg:col-span-5 p-4 sm:p-5 rounded-2xl bg-[#071A1E] border border-white/12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-xs sm:text-sm font-extrabold text-white">
                            Atingimento
                          </h4>
                          <Info className="w-3.5 h-3.5 text-slate-500" />
                        </div>

                        <div className="inline-flex rounded-lg bg-[#0A272D] p-0.5 border border-white/10 text-[10px] font-bold">
                          {(["Dia", "Canal"] as const).map((v) => (
                            <button
                              key={v}
                              type="button"
                              onClick={() => setAttainmentView(v)}
                              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                                attainmentView === v
                                  ? "bg-[#0E4A55] text-white shadow-xs"
                                  : "text-slate-400 hover:text-white"
                              }`}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse font-mono text-[11px]">
                          <thead>
                            <tr className="border-b border-white/10 text-[9px] uppercase tracking-wider text-slate-400">
                              <th className="py-2 pr-2">{attainmentView === "Dia" ? "DIA" : "CANAL"}</th>
                              <th className="py-2 px-2 text-right">VENDIDO</th>
                              <th className="py-2 px-2 text-right">META</th>
                              <th className="py-2 pl-2 text-right">%</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {activeAttainmentRows.map((r, i) => (
                              <tr key={i} className="hover:bg-white/[0.02]">
                                <td className="py-2 pr-2 text-slate-300 whitespace-nowrap font-sans font-medium">
                                  {r.dia}
                                </td>
                                <td className="py-2 px-2 text-right font-bold text-white whitespace-nowrap">
                                  {r.vendido}
                                </td>
                                <td className="py-2 px-2 text-right text-slate-400 whitespace-nowrap">
                                  {r.meta}
                                </td>
                                <td
                                  className={`py-2 pl-2 text-right font-bold whitespace-nowrap ${
                                    r.pct.startsWith("8") || r.pct.startsWith("9")
                                      ? "text-[#F5B85D]"
                                      : "text-rose-400"
                                  }`}
                                >
                                  {r.pct}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                            <tr className="border-t-2 border-white/15 font-extrabold text-white">
                              <td className="pt-2.5 pr-2 font-sans">Total</td>
                              <td className="pt-2.5 px-2 text-right">R$ 1.648.420,00</td>
                              <td className="pt-2.5 px-2 text-right text-slate-300">R$ 2.100.000,00</td>
                              <td className="pt-2.5 pl-2 text-right text-[#F5B85D]">78,5%</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Box Didático: Decisão do CFO */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0E4A55]/60 to-[#071A1E] border border-[#E8A33D]/40 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E8A33D] text-[#071A1E] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F5B85D] block mb-0.5">
                      Leitura e Plano de Ação do CFO sobre este painel
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      O <strong>Site Próprio (80% da meta) e o Mercado Livre (85% da meta)</strong> puxam o crescimento com ROAS consolidado de <strong>8,85x</strong> (acima da meta de 8,0x), enquanto a <strong>Shopee está em 66% da meta</strong> com ticket médio de R$ 132. Ação imediata: direcionar os R$ 53,8 mil restantes de verba de mídia para kits de maior ticket no Site Próprio para bater os R$ 2,10M com máxima margem líquida.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ===================================================================
                TELA 2: CURVA ABC DE PRODUTOS & ESTOQUE PARADO
            =================================================================== */}
            {activeTab === "skus" && (
              <motion.div
                key="screen-skus"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* KPIs de Produto e Estoque */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                      Curva A (20% dos SKUs)
                    </span>
                    <span className="text-xl font-extrabold font-mono text-white block">
                      74% do Lucro Total
                    </span>
                    <span className="text-xs text-emerald-300/90">Giro rápido (26 dias) · Proteger contra falta</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300 block mb-1">
                      SKUs "Falsos Campeões"
                    </span>
                    <span className="text-xl font-extrabold font-mono text-rose-400 block">
                      14 SKUs no Prejuízo
                    </span>
                    <span className="text-xs text-rose-300/90">Alto volume de vendas, mas margem negativa</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#E8A33D]/15 border border-[#E8A33D]/40">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5B85D] block mb-1">
                      Dinheiro Parado (Curva C &gt; 90 dias)
                    </span>
                    <span className="text-xl font-extrabold font-mono text-[#F5B85D] block">
                      R$ 310.000 travados
                    </span>
                    <span className="text-xs text-slate-300">Potencial de virar caixa via queima planejada</span>
                  </div>
                </div>

                {/* Tabela Didática de SKUs */}
                <div className="rounded-2xl bg-[#071A1E] border border-white/10 overflow-hidden">
                  <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#E8A33D]" />
                      Raio-X de Margem por Produto (Unit Economics)
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                      Preço - (CMV + Imposto + Taxa + Frete + Devolução + Ads)
                    </span>
                  </div>

                  <div className="divide-y divide-white/10 text-xs">
                    {/* Linha 1: Campeão Real */}
                    <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                      <div className="md:col-span-4">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold uppercase mr-2">
                          Curva A · Estrela
                        </span>
                        <strong className="text-white font-bold block mt-1">
                          Kit Linha Premium (SKU #104)
                        </strong>
                        <span className="text-[11px] text-slate-400">Giro de estoque: 22 dias · CMV: 33%</span>
                      </div>
                      <div className="md:col-span-4 font-mono grid grid-cols-2 gap-2 bg-white/5 p-2.5 rounded-xl">
                        <div>
                          <span className="text-[10px] text-slate-400 block">Venda Mensal</span>
                          <strong className="text-white">R$ 245.000</strong>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 block">Margem Líquida</span>
                          <strong className="text-emerald-400">+24,5% (+R$ 60k)</strong>
                        </div>
                      </div>
                      <div className="md:col-span-4 flex items-center gap-2 text-emerald-300 font-semibold">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                        <span>Escalar verba de mídia e manter estoque de segurança.</span>
                      </div>
                    </div>

                    {/* Linha 2: Falso Campeão (Dreno de Lucro) */}
                    <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-center bg-rose-500/[0.04]">
                      <div className="md:col-span-4">
                        <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono text-[10px] font-bold uppercase mr-2">
                          Alerta · Falso Campeão
                        </span>
                        <strong className="text-white font-bold block mt-1">
                          Item Promocional Marketplace (SKU #289)
                        </strong>
                        <span className="text-[11px] text-slate-400">CMV: 48% + Frete e devolução comem a margem</span>
                      </div>
                      <div className="md:col-span-4 font-mono grid grid-cols-2 gap-2 bg-white/5 p-2.5 rounded-xl border border-rose-500/30">
                        <div>
                          <span className="text-[10px] text-slate-400 block">Venda Mensal</span>
                          <strong className="text-white">R$ 180.000</strong>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 block">Margem Líquida</span>
                          <strong className="text-rose-400">-4,2% (-R$ 7,5k)</strong>
                        </div>
                      </div>
                      <div className="md:col-span-4 flex items-center gap-2 text-rose-300 font-semibold">
                        <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                        <span>Cada venda dá prejuízo: reajustar preço em +9% ou pausar Ads.</span>
                      </div>
                    </div>

                    {/* Linha 3: Estoque Travado Curva C */}
                    <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                      <div className="md:col-span-4">
                        <span className="px-2 py-0.5 rounded bg-[#E8A33D]/20 text-[#F5B85D] font-mono text-[10px] font-bold uppercase mr-2">
                          Curva C · Caixa Parado
                        </span>
                        <strong className="text-white font-bold block mt-1">
                          Coleção Anterior / Baixo Giro (42 SKUs)
                        </strong>
                        <span className="text-[11px] text-slate-400">Parado no galpão há 115 dias</span>
                      </div>
                      <div className="md:col-span-4 font-mono grid grid-cols-2 gap-2 bg-white/5 p-2.5 rounded-xl">
                        <div>
                          <span className="text-[10px] text-slate-400 block">CMV Imobilizado</span>
                          <strong className="text-[#F5B85D]">R$ 310.000</strong>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 block">Custo Financeiro</span>
                          <strong className="text-rose-400">-R$ 6,2k/mês</strong>
                        </div>
                      </div>
                      <div className="md:col-span-4 flex items-center gap-2 text-[#F5B85D] font-semibold">
                        <DollarSign className="w-4 h-4 shrink-0 text-[#E8A33D]" />
                        <span>Criar combo de liquidação para transformar estoque em dinheiro vivo.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Box Didático: Decisão do CFO */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0E4A55]/60 to-[#071A1E] border border-[#E8A33D]/40 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E8A33D] text-[#071A1E] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F5B85D] block mb-0.5">
                      Por que todo dono de e-commerce precisa dessa tela?
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      Muitas lojas quebram comprando mais estoque de produtos que vendem muito mas dão prejuízo (como o SKU #289), enquanto deixam R$ 310 mil parados em itens Curva C. Corrigir isso aumenta o lucro imediatamente.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ===================================================================
                TELA 3: DECOMPOSIÇÃO DOS NÚMEROS REAIS POR CANAL (COM CMV EM DESTAQUE)
            =================================================================== */}
            {activeTab === "r100" && (
              <motion.div
                key="screen-r100"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Seletor de Canal interno */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-white block">
                      Raio-X de Resultado: Para onde vai o faturamento de cada canal?
                    </span>
                    <span className="text-xs text-slate-400">
                      Clique nos canais ao lado para comparar os valores reais de CMV, taxas, mídia e lucro líquido:
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#071A1E] border border-white/10">
                    {(["consolidado", "site_proprio", "mercado_livre", "shopee"] as ChannelSimKey[]).map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedChannel(key)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          selectedChannel === key
                            ? "bg-[#E8A33D] text-[#071A1E] shadow-sm"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        {channelSimData[key].name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Barra de Proporção Visual dos Números Reais do Canal */}
                <div className="p-5 rounded-2xl bg-[#071A1E] border border-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {currentSim.name}: <span className="text-slate-300 font-mono font-semibold">{currentSim.subtitle}</span>
                    </span>
                    <span className="text-sm font-mono font-extrabold text-emerald-400">
                      Sobra Líquida: {currentSim.lucroVal} ({currentSim.lucroPct}% do faturamento)
                    </span>
                  </div>

                  {/* Barra Segmentada Grande */}
                  <div className="h-7 w-full rounded-xl bg-[#0A272D] overflow-hidden flex shadow-inner p-0.5 gap-0.5 mb-5">
                    <div
                      style={{ width: `${currentSim.cmvPct}%` }}
                      className="bg-rose-500 h-full rounded-l-lg flex items-center justify-center text-[10px] font-mono font-bold text-white transition-all duration-500"
                      title={`CMV: ${currentSim.cmvVal} (${currentSim.cmvPct}%)`}
                    >
                      CMV {currentSim.cmvPct}%
                    </div>
                    <div
                      style={{ width: `${currentSim.impostosPct}%` }}
                      className="bg-purple-500 h-full flex items-center justify-center text-[10px] font-mono font-bold text-white transition-all duration-500"
                      title={`Impostos: ${currentSim.impostosVal} (${currentSim.impostosPct}%)`}
                    >
                      {currentSim.impostosPct}%
                    </div>
                    <div
                      style={{ width: `${currentSim.taxasPct}%` }}
                      className="bg-orange-500 h-full flex items-center justify-center text-[10px] font-mono font-bold text-white transition-all duration-500"
                      title={`Taxas e Comissões: ${currentSim.taxasVal} (${currentSim.taxasPct}%)`}
                    >
                      {currentSim.taxasPct >= 7 ? `${currentSim.taxasPct}%` : ""}
                    </div>
                    <div
                      style={{ width: `${currentSim.fretePct}%` }}
                      className="bg-sky-500 h-full flex items-center justify-center text-[10px] font-mono font-bold text-white transition-all duration-500"
                      title={`Frete e Logística: ${currentSim.freteVal} (${currentSim.fretePct}%)`}
                    >
                      {currentSim.fretePct >= 7 ? `${currentSim.fretePct}%` : ""}
                    </div>
                    <div
                      style={{ width: `${currentSim.midiaPct}%` }}
                      className="bg-[#E8A33D] h-full flex items-center justify-center text-[10px] font-mono font-bold text-[#071A1E] transition-all duration-500"
                      title={`Mídia / Ads: ${currentSim.midiaVal} (${currentSim.midiaPct}%)`}
                    >
                      {currentSim.midiaPct >= 6 ? `${currentSim.midiaPct}%` : ""}
                    </div>
                    <div
                      style={{ width: `${currentSim.fixosPct}%` }}
                      className="bg-slate-500 h-full flex items-center justify-center text-[10px] font-mono font-bold text-white transition-all duration-500"
                      title={`Despesas Fixas: ${currentSim.fixosVal} (${currentSim.fixosPct}%)`}
                    >
                      {currentSim.fixosPct}%
                    </div>
                    <div
                      style={{ width: `${currentSim.lucroPct}%` }}
                      className="bg-emerald-500 h-full rounded-r-lg flex items-center justify-center text-[10px] font-mono font-extrabold text-[#071A1E] transition-all duration-500"
                      title={`Lucro Líquido: ${currentSim.lucroVal} (${currentSim.lucroPct}%)`}
                    >
                      {currentSim.lucroPct}%
                    </div>
                  </div>

                  {/* 7 Blocos Didáticos da Decomposição com Valores Reais */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 text-left">
                    <div className="p-3 rounded-xl bg-[#0A272D] border border-rose-500/30">
                      <div className="flex items-center justify-between gap-1">
                        <div>
                          <span className="w-2 h-2 rounded-full bg-rose-500 inline-block mr-1.5"></span>
                          <span className="text-[10px] font-bold uppercase text-rose-300">1. CMV</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-rose-300">{currentSim.cmvPct}%</span>
                      </div>
                      <strong className="text-xs sm:text-sm font-mono font-extrabold text-white block mt-1">
                        - {currentSim.cmvVal}
                      </strong>
                      <span className="text-[10px] text-slate-400">Custo Mercadoria</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0A272D] border border-white/10">
                      <div className="flex items-center justify-between gap-1">
                        <div>
                          <span className="w-2 h-2 rounded-full bg-purple-500 inline-block mr-1.5"></span>
                          <span className="text-[10px] font-bold uppercase text-slate-300">2. Impostos</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">{currentSim.impostosPct}%</span>
                      </div>
                      <strong className="text-xs sm:text-sm font-mono font-extrabold text-white block mt-1">
                        - {currentSim.impostosVal}
                      </strong>
                      <span className="text-[10px] text-slate-400">ICMS, DIFAL, PIS/COF</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0A272D] border border-white/10">
                      <div className="flex items-center justify-between gap-1">
                        <div>
                          <span className="w-2 h-2 rounded-full bg-orange-500 inline-block mr-1.5"></span>
                          <span className="text-[10px] font-bold uppercase text-slate-300">3. Taxas</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">{currentSim.taxasPct}%</span>
                      </div>
                      <strong className="text-xs sm:text-sm font-mono font-extrabold text-white block mt-1">
                        - {currentSim.taxasVal}
                      </strong>
                      <span className="text-[10px] text-slate-400">Comissão / Gateway</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0A272D] border border-white/10">
                      <div className="flex items-center justify-between gap-1">
                        <div>
                          <span className="w-2 h-2 rounded-full bg-sky-500 inline-block mr-1.5"></span>
                          <span className="text-[10px] font-bold uppercase text-slate-300">4. Frete</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">{currentSim.fretePct}%</span>
                      </div>
                      <strong className="text-xs sm:text-sm font-mono font-extrabold text-white block mt-1">
                        - {currentSim.freteVal}
                      </strong>
                      <span className="text-[10px] text-slate-400">Envio e logística</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0A272D] border border-white/10">
                      <div className="flex items-center justify-between gap-1">
                        <div>
                          <span className="w-2 h-2 rounded-full bg-[#E8A33D] inline-block mr-1.5"></span>
                          <span className="text-[10px] font-bold uppercase text-slate-300">5. Mídia (Ads)</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">{currentSim.midiaPct}%</span>
                      </div>
                      <strong className="text-xs sm:text-sm font-mono font-extrabold text-white block mt-1">
                        - {currentSim.midiaVal}
                      </strong>
                      <span className="text-[10px] text-slate-400">Meta, Google, Mktp</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0A272D] border border-white/10">
                      <div className="flex items-center justify-between gap-1">
                        <div>
                          <span className="w-2 h-2 rounded-full bg-slate-400 inline-block mr-1.5"></span>
                          <span className="text-[10px] font-bold uppercase text-slate-300">6. Fixos</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">{currentSim.fixosPct}%</span>
                      </div>
                      <strong className="text-xs sm:text-sm font-mono font-extrabold text-white block mt-1">
                        - {currentSim.fixosVal}
                      </strong>
                      <span className="text-[10px] text-slate-400">Equipe e estrutura</span>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/15 border-2 border-emerald-500/50 col-span-2 sm:col-span-1">
                      <div className="flex items-center justify-between gap-1">
                        <div>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block mr-1.5"></span>
                          <span className="text-[10px] font-extrabold uppercase text-emerald-300">(=) Lucro</span>
                        </div>
                        <span className="text-[10px] font-mono font-extrabold text-emerald-300">{currentSim.lucroPct}%</span>
                      </div>
                      <strong className="text-xs sm:text-sm font-mono font-extrabold text-emerald-400 block mt-1">
                        + {currentSim.lucroVal}
                      </strong>
                      <span className="text-[10px] text-emerald-300 font-semibold">Sobra no bolso</span>
                    </div>
                  </div>
                </div>

                {/* Box Didático: Decisão do CFO */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0E4A55]/60 to-[#071A1E] border border-[#E8A33D]/40 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E8A33D] text-[#071A1E] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F5B85D] block mb-0.5">
                      Leitura do CFO ({currentSim.name})
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {currentSim.insight}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ===================================================================
                TELA 4: PREVISÃO DE CAIXA 90 DIAS & CICLO FINANCEIRO
            =================================================================== */}
            {activeTab === "caixa" && (
              <motion.div
                key="screen-caixa"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* KPIs de Caixa e Ciclo */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-4 rounded-2xl bg-[#071A1E] border border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Saldo Hoje em Conta
                    </span>
                    <span className="text-lg sm:text-xl font-extrabold font-mono text-white block">
                      R$ 380.000
                    </span>
                    <span className="text-[11px] text-slate-400">Disponível imediato</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#071A1E] border border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Ciclo Financeiro Atual
                    </span>
                    <span className="text-lg sm:text-xl font-extrabold font-mono text-[#F5B85D] block">
                      34 dias
                    </span>
                    <span className="text-[11px] text-slate-400">Paga no dia 35 · Recebe no dia 69</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#071A1E] border border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Economia com Juros
                    </span>
                    <span className="text-lg sm:text-xl font-extrabold font-mono text-emerald-400 block">
                      + R$ 22.400/mês
                    </span>
                    <span className="text-[11px] text-emerald-300/90">Sem antecipar recebíveis</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                      Caixa Projetado (90 dias)
                    </span>
                    <span className="text-lg sm:text-xl font-extrabold font-mono text-emerald-400 block">
                      R$ 695.000
                    </span>
                    <span className="text-[11px] text-emerald-300">+R$ 315k de geração livre</span>
                  </div>
                </div>

                {/* Gráfico Didático de Previsibilidade Semanal + Ciclo */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  {/* Coluna 1: Projeção de Caixa 8 Semanas */}
                  <div className="lg:col-span-7 p-5 rounded-2xl bg-[#071A1E] border border-white/10 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h5 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                          Previsão de Entradas vs. Saídas (Próximas Semanas)
                        </h5>
                        <span className="text-[11px] text-slate-400">
                          Antecipa picos de fornecedores e impostos antes de acontecerem
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] font-mono">
                        <span className="flex items-center gap-1 text-emerald-400 font-bold">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Entradas
                        </span>
                        <span className="flex items-center gap-1 text-rose-400 font-bold">
                          <span className="w-2 h-2 rounded-full bg-rose-400"></span> Saídas
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-2.5 items-end h-36 pt-4 pb-2 border-b border-white/10">
                      {[
                        { label: "Sem 1", inH: 65, outH: 48, status: "ok" },
                        { label: "Sem 2", inH: 72, outH: 52, status: "ok" },
                        { label: "Sem 3 (Dia 15)", inH: 68, outH: 86, status: "alert" },
                        { label: "Sem 4", inH: 85, outH: 55, status: "ok" },
                        { label: "Sem 5", inH: 80, outH: 50, status: "ok" },
                        { label: "Sem 6", inH: 95, outH: 58, status: "ok" }
                      ].map((w, i) => (
                        <div key={i} className="flex flex-col items-center h-full justify-end">
                          <div className="w-full flex items-end justify-center gap-1.5 h-full">
                            <div
                              style={{ height: `${w.inH}%` }}
                              className="w-3 sm:w-3.5 bg-emerald-500 rounded-t-md transition-all"
                            ></div>
                            <div
                              style={{ height: `${w.outH}%` }}
                              className={`w-3 sm:w-3.5 rounded-t-md transition-all ${
                                w.status === "alert" ? "bg-amber-400 ring-2 ring-amber-400/40" : "bg-rose-500/80"
                              }`}
                            ></div>
                          </div>
                          <span
                            className={`text-[9px] font-mono mt-1.5 ${
                              w.status === "alert" ? "text-[#F5B85D] font-bold" : "text-slate-400"
                            }`}
                          >
                            {w.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 flex items-center justify-between text-[11px] text-slate-300">
                      <span>
                        <strong className="text-[#F5B85D]">✦ Semana 3 (Dia 15):</strong> Pico de Fornecedores + Impostos reprogramado sem usar cheque especial.
                      </span>
                    </div>
                  </div>

                  {/* Coluna 2: Régua do Ciclo Financeiro */}
                  <div className="lg:col-span-5 p-5 rounded-2xl bg-[#071A1E] border border-white/10 flex flex-col justify-between">
                    <div>
                      <h5 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white mb-1">
                        Por que o caixa aperta quando a venda cresce?
                      </h5>
                      <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                        No e-commerce, você paga o fornecedor antes de receber do marketplace. O CFO reduz esse descasamento:
                      </p>

                      <div className="space-y-3 text-xs font-mono">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                          <span className="text-slate-300">1. Tempo em Estoque (PME):</span>
                          <strong className="text-white">51 dias</strong>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                          <span className="text-slate-300">2. Prazo Recebimento (PMR):</span>
                          <strong className="text-white">+ 18 dias</strong>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                          <span className="text-slate-300">3. Prazo Fornecedor (PMP):</span>
                          <strong className="text-emerald-400">- 35 dias</strong>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 rounded-xl bg-[#E8A33D]/15 border border-[#E8A33D]/40 flex items-center justify-between font-mono text-xs">
                      <span className="text-[#F5B85D] font-bold">Descasamento (NCG):</span>
                      <strong className="text-white text-sm">34 dias financiados</strong>
                    </div>
                  </div>
                </div>

                {/* Box Didático: Decisão do CFO */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0E4A55]/60 to-[#071A1E] border border-[#E8A33D]/40 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E8A33D] text-[#071A1E] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F5B85D] block mb-0.5">
                      Decisão prática no rito mensal com o CFO
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      Com o fluxo projetado para 90 dias, renegociamos o prazo dos fornecedores Curva A de 28 para 42 dias e estancamos <strong>R$ 22.400/mês que eram perdidos com taxas de antecipação de recebíveis</strong> — valor que vai direto para o lucro líquido.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Rodapé do Painel com CTA Contextual */}
        <div className="px-5 sm:px-8 py-4 bg-[#061518] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] sm:text-xs text-slate-400 text-center sm:text-left">
            *Painéis ilustrativos com números hipotéticos. Construímos essa clareza sobre os números reais da sua operação.
          </span>
          <a
            href="#diagnostico"
            onClick={() => trackCtaClick("cockpit_cta", "Ter essa visão na minha empresa")}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] hover:from-[#F5B85D] hover:to-[#E8A33D] text-[#071A1E] text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
          >
            <span>Ter essa visão na minha empresa</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </div>
  );
}
