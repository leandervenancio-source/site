import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BarChart3,
  PackageSearch,
  PieChart,
  CalendarClock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  DollarSign
} from "lucide-react";
import { trackCtaClick } from "../lib/analytics";

type CockpitTab = "canais" | "skus" | "r100" | "caixa";
type ChannelSimKey = "consolidado" | "site_proprio" | "mercado_livre" | "shopee";

export function FinancialCockpit() {
  const [activeTab, setActiveTab] = useState<CockpitTab>("canais");
  const [selectedChannel, setSelectedChannel] = useState<ChannelSimKey>("consolidado");

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
      label: "Lucro Real por Canal",
      question: "Qual canal coloca lucro no bolso e qual só gera faturamento sem margem?",
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
      label: "Para onde vão R$ 100",
      question: "A cada R$ 100 vendidos, quanto cada custo consome e quanto sobra de lucro?",
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
      cmv: number;
      impostos: number;
      taxas: number;
      frete: number;
      midia: number;
      fixos: number;
      lucro: number;
      insight: string;
    }
  > = {
    consolidado: {
      name: "Média Consolidada",
      subtitle: "Soma de todos os canais da operação",
      cmv: 38,
      impostos: 11,
      taxas: 12,
      frete: 8,
      midia: 13,
      fixos: 7,
      lucro: 11,
      insight:
        "De cada R$ 100 vendidos no consolidado, R$ 89 vão para custos do produto, impostos, taxas, frete, mídia e estrutura, restando R$ 11 de lucro líquido."
    },
    site_proprio: {
      name: "Loja Própria (D2C)",
      subtitle: "Menor taxa de intermediação, maior investimento em tráfego",
      cmv: 35,
      impostos: 10,
      taxas: 4,
      frete: 7,
      midia: 21,
      fixos: 7,
      lucro: 16,
      insight:
        "Na loja própria, a taxa de transação cai para R$ 4, permitindo absorver o investimento em tráfego pago e ainda reter R$ 16 de lucro líquido a cada R$ 100."
    },
    mercado_livre: {
      name: "Mercado Livre",
      subtitle: "Alto volume de vendas com comissão e logística pesadas",
      cmv: 39,
      impostos: 11,
      taxas: 17,
      frete: 10,
      midia: 8,
      fixos: 6,
      lucro: 9,
      insight:
        "Comissão (R$ 17) e frete (R$ 10) consomem R$ 27 de cada R$ 100 vendidos. Sem precificação exata por SKU, promoções derrubam o lucro para zero."
    },
    shopee: {
      name: "Shopee & Outros",
      subtitle: "Pressão por preço baixo e cupons agressivos",
      cmv: 41,
      impostos: 10,
      taxas: 20,
      frete: 9,
      midia: 7,
      fixos: 7,
      lucro: 6,
      insight:
        "Mesmo com giro rápido, taxas (R$ 20) e custo de mercadoria (R$ 41) comprimem a sobra líquida para R$ 6. Exige trava rígida de desconto mínimo."
    }
  };

  const currentSim = channelSimData[selectedChannel];
  const currentTabInfo = tabs.find((t) => t.id === activeTab)!;

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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6 max-w-5xl mx-auto">
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
      <div className="max-w-5xl mx-auto rounded-3xl bg-[#0A272D] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.55)] overflow-hidden">
        
        {/* Barra Superior do Painel com a Pergunta do Empresário */}
        <div className="px-5 sm:px-8 py-4 bg-[#061518] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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
        <div className="p-5 sm:p-8">
          <AnimatePresence mode="wait">
            
            {/* ===================================================================
                TELA 1: LUCRO REAL POR CANAL (DRE POR CANAL DE VENDA)
            =================================================================== */}
            {activeTab === "canais" && (
              <motion.div
                key="screen-canais"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Resumo Geral no Topo (Com CMV Explícito) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  <div className="p-4 rounded-2xl bg-[#071A1E] border border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Faturamento Mensal
                    </span>
                    <span className="text-base sm:text-lg font-extrabold font-mono text-white block">
                      R$ 1.200.000
                    </span>
                    <span className="text-[11px] text-slate-400">100% · Soma dos 3 canais</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#071A1E] border border-rose-500/25">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300 block mb-1">
                      (-) CMV (Mercadoria)
                    </span>
                    <span className="text-base sm:text-lg font-extrabold font-mono text-rose-400 block">
                      - R$ 448.000
                    </span>
                    <span className="text-[11px] text-slate-400">37,3% · Custo da Mercadoria</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#071A1E] border border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      (-) Impostos, Taxas e Ads
                    </span>
                    <span className="text-base sm:text-lg font-extrabold font-mono text-amber-400 block">
                      - R$ 484.000
                    </span>
                    <span className="text-[11px] text-slate-400">40,3% · Variáveis de venda</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#071A1E] border border-[#E8A33D]/30">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5B85D] block mb-1">
                      (=) Margem Contribuição
                    </span>
                    <span className="text-base sm:text-lg font-extrabold font-mono text-[#F5B85D] block">
                      R$ 268.000
                    </span>
                    <span className="text-[11px] text-[#F5B85D]/90">22,3% após variáveis</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 col-span-2 sm:col-span-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                      (=) Lucro Líquido
                    </span>
                    <span className="text-base sm:text-lg font-extrabold font-mono text-emerald-400 block">
                      R$ 142.000
                    </span>
                    <span className="text-[11px] text-emerald-300/90 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> 11,8% livre no bolso
                    </span>
                  </div>
                </div>

                {/* Comparativo Lado a Lado dos 3 Canais */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-200">
                      Comparativo de Rentabilidade Real por Canal (Com CMV separado)
                    </h4>
                    <span className="text-[11px] text-slate-400 hidden sm:inline">
                      Faturar mais nem sempre significa lucrar mais
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Canal 1: Site Próprio */}
                    <div className="p-5 rounded-2xl bg-[#071A1E] border-2 border-emerald-500/40 relative">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                            Maior Lucro Real
                          </span>
                          <h5 className="text-base font-extrabold text-white">Loja Própria (D2C)</h5>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 font-mono text-xs font-extrabold">
                          16,5% lucro
                        </span>
                      </div>

                      <div className="space-y-2 text-xs font-mono border-t border-white/10 pt-3">
                        <div className="flex justify-between text-slate-300">
                          <span>Vendas no canal:</span>
                          <strong className="text-white">R$ 420.000</strong>
                        </div>
                        <div className="flex justify-between text-rose-300">
                          <span>(-) CMV (Mercadoria):</span>
                          <span>- R$ 147.000 (35%)</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>(-) Impostos, Taxa e Frete:</span>
                          <span>- R$ 88.200</span>
                        </div>
                        <div className="flex justify-between text-amber-300">
                          <span>(-) Tráfego Pago (Ads):</span>
                          <span>- R$ 48.200</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-white/10 text-emerald-400 font-bold text-sm">
                          <span>(=) Lucro do Canal:</span>
                          <span>+ R$ 69.300</span>
                        </div>
                      </div>
                    </div>

                    {/* Canal 2: Mercado Livre */}
                    <div className="p-5 rounded-2xl bg-[#071A1E] border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5B85D] block">
                            Maior Volume Bruto
                          </span>
                          <h5 className="text-base font-extrabold text-white">Mercado Livre</h5>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-[#E8A33D]/15 text-[#F5B85D] font-mono text-xs font-extrabold">
                          11,2% lucro
                        </span>
                      </div>

                      <div className="space-y-2 text-xs font-mono border-t border-white/10 pt-3">
                        <div className="flex justify-between text-slate-300">
                          <span>Vendas no canal:</span>
                          <strong className="text-white">R$ 510.000</strong>
                        </div>
                        <div className="flex justify-between text-rose-300">
                          <span>(-) CMV (Mercadoria):</span>
                          <span>- R$ 193.800 (38%)</span>
                        </div>
                        <div className="flex justify-between text-rose-400">
                          <span>(-) Imposto, Comissão e Full:</span>
                          <span>- R$ 193.800</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>(-) Mídia Interna:</span>
                          <span>- R$ 35.700</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-white/10 text-[#F5B85D] font-bold text-sm">
                          <span>(=) Lucro do Canal:</span>
                          <span>+ R$ 57.100</span>
                        </div>
                      </div>
                    </div>

                    {/* Canal 3: Shopee & Outros */}
                    <div className="p-5 rounded-2xl bg-[#071A1E] border border-rose-500/30">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block">
                            Alerta de Margem Baixa
                          </span>
                          <h5 className="text-base font-extrabold text-white">Shopee & Outros</h5>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-300 font-mono text-xs font-extrabold">
                          5,8% lucro
                        </span>
                      </div>

                      <div className="space-y-2 text-xs font-mono border-t border-white/10 pt-3">
                        <div className="flex justify-between text-slate-300">
                          <span>Vendas no canal:</span>
                          <strong className="text-white">R$ 270.000</strong>
                        </div>
                        <div className="flex justify-between text-rose-300">
                          <span>(-) CMV (Mercadoria):</span>
                          <span>- R$ 107.200 (40%)</span>
                        </div>
                        <div className="flex justify-between text-rose-400">
                          <span>(-) Imposto, Taxa e Cupom:</span>
                          <span>- R$ 96.500</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>(-) Mídia / Destaque:</span>
                          <span>- R$ 21.600</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-white/10 text-rose-300 font-bold text-sm">
                          <span>(=) Lucro do Canal:</span>
                          <span>+ R$ 15.600</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Box Didático: Decisão do CFO */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0E4A55]/60 to-[#071A1E] border border-[#E8A33D]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#E8A33D] text-[#071A1E] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F5B85D] block mb-0.5">
                        Decisão prática no rito mensal com o CFO
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        A <strong>Loja Própria</strong> vende menos que o Mercado Livre, mas entrega <strong>R$ 12.200 a mais de lucro puro</strong>. Já na <strong>Shopee</strong>, cupons estão corroendo a margem — ajustamos a tabela de preço em +5% para recuperar lucro imediato.
                      </p>
                    </div>
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
                        <span className="text-[11px] text-slate-400">Giro de estoque: 22 dias</span>
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
                        <span className="text-[11px] text-slate-400">Alto volume, mas frete + devolução comem tudo</span>
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
                          <span className="text-[10px] text-slate-400 block">Capital Travado</span>
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
                TELA 3: DECOMPOSIÇÃO DE R$ 100 VENDIDOS
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
                      Simulador: Para onde vão cada R$ 100,00 vendidos?
                    </span>
                    <span className="text-xs text-slate-400">
                      Clique nos canais ao lado para comparar a mordida de cada custo:
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

                {/* Barra de Proporção Visual de R$ 100 */}
                <div className="p-5 rounded-2xl bg-[#071A1E] border border-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {currentSim.name}: <span className="text-slate-400 font-normal">{currentSim.subtitle}</span>
                    </span>
                    <span className="text-sm font-mono font-extrabold text-emerald-400">
                      Sobra Líquida: R$ {currentSim.lucro},00 de cada R$ 100,00
                    </span>
                  </div>

                  {/* Barra Segmentada Grande */}
                  <div className="h-7 w-full rounded-xl bg-[#0A272D] overflow-hidden flex shadow-inner p-0.5 gap-0.5 mb-5">
                    <div
                      style={{ width: `${currentSim.cmv}%` }}
                      className="bg-rose-500 h-full rounded-l-lg flex items-center justify-center text-[10px] font-mono font-bold text-white transition-all duration-500"
                      title="Custo do Produto (CMV)"
                    >
                      R${currentSim.cmv}
                    </div>
                    <div
                      style={{ width: `${currentSim.impostos}%` }}
                      className="bg-purple-500 h-full flex items-center justify-center text-[10px] font-mono font-bold text-white transition-all duration-500"
                      title="Impostos"
                    >
                      R${currentSim.impostos}
                    </div>
                    <div
                      style={{ width: `${currentSim.taxas}%` }}
                      className="bg-orange-500 h-full flex items-center justify-center text-[10px] font-mono font-bold text-white transition-all duration-500"
                      title="Taxas e Comissões"
                    >
                      {currentSim.taxas >= 8 ? `R$${currentSim.taxas}` : ""}
                    </div>
                    <div
                      style={{ width: `${currentSim.frete}%` }}
                      className="bg-sky-500 h-full flex items-center justify-center text-[10px] font-mono font-bold text-white transition-all duration-500"
                      title="Frete e Logística"
                    >
                      {currentSim.frete >= 8 ? `R$${currentSim.frete}` : ""}
                    </div>
                    <div
                      style={{ width: `${currentSim.midia}%` }}
                      className="bg-[#E8A33D] h-full flex items-center justify-center text-[10px] font-mono font-bold text-[#071A1E] transition-all duration-500"
                      title="Mídia / Ads"
                    >
                      R${currentSim.midia}
                    </div>
                    <div
                      style={{ width: `${currentSim.fixos}%` }}
                      className="bg-slate-500 h-full flex items-center justify-center text-[10px] font-mono font-bold text-white transition-all duration-500"
                      title="Despesas Fixas"
                    >
                      R${currentSim.fixos}
                    </div>
                    <div
                      style={{ width: `${currentSim.lucro}%` }}
                      className="bg-emerald-500 h-full rounded-r-lg flex items-center justify-center text-[10px] font-mono font-extrabold text-[#071A1E] transition-all duration-500"
                      title="Lucro Líquido"
                    >
                      R${currentSim.lucro}
                    </div>
                  </div>

                  {/* 7 Blocos Didáticos da Decomposição */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 text-left">
                    <div className="p-3 rounded-xl bg-[#0A272D] border border-rose-500/30">
                      <span className="w-2 h-2 rounded-full bg-rose-500 inline-block mr-1.5"></span>
                      <span className="text-[10px] font-bold uppercase text-rose-300">1. CMV</span>
                      <strong className="text-sm font-mono font-extrabold text-white block mt-1">
                        - R$ {currentSim.cmv},00
                      </strong>
                      <span className="text-[10px] text-slate-400">Mercadoria vendida</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0A272D] border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-purple-500 inline-block mr-1.5"></span>
                      <span className="text-[10px] font-bold uppercase text-slate-300">2. Impostos</span>
                      <strong className="text-sm font-mono font-extrabold text-white block mt-1">
                        - R$ {currentSim.impostos},00
                      </strong>
                      <span className="text-[10px] text-slate-400">ICMS, DIFAL, PIS/COF</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0A272D] border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-orange-500 inline-block mr-1.5"></span>
                      <span className="text-[10px] font-bold uppercase text-slate-300">3. Taxas</span>
                      <strong className="text-sm font-mono font-extrabold text-white block mt-1">
                        - R$ {currentSim.taxas},00
                      </strong>
                      <span className="text-[10px] text-slate-400">Comissão / Gateway</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0A272D] border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-sky-500 inline-block mr-1.5"></span>
                      <span className="text-[10px] font-bold uppercase text-slate-300">4. Frete</span>
                      <strong className="text-sm font-mono font-extrabold text-white block mt-1">
                        - R$ {currentSim.frete},00
                      </strong>
                      <span className="text-[10px] text-slate-400">Envio e logística</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0A272D] border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-[#E8A33D] inline-block mr-1.5"></span>
                      <span className="text-[10px] font-bold uppercase text-slate-300">5. Mídia (Ads)</span>
                      <strong className="text-sm font-mono font-extrabold text-white block mt-1">
                        - R$ {currentSim.midia},00
                      </strong>
                      <span className="text-[10px] text-slate-400">Meta, Google, Mktp</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0A272D] border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-slate-400 inline-block mr-1.5"></span>
                      <span className="text-[10px] font-bold uppercase text-slate-300">6. Fixos</span>
                      <strong className="text-sm font-mono font-extrabold text-white block mt-1">
                        - R$ {currentSim.fixos},00
                      </strong>
                      <span className="text-[10px] text-slate-400">Equipe e estrutura</span>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/15 border-2 border-emerald-500/50 col-span-2 sm:col-span-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block mr-1.5"></span>
                      <span className="text-[10px] font-extrabold uppercase text-emerald-300">(=) Lucro</span>
                      <strong className="text-base font-mono font-extrabold text-emerald-400 block mt-1">
                        + R$ {currentSim.lucro},00
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
