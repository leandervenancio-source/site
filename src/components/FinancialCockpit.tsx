import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, 
  ArrowUpRight, 
  Calendar, 
  Filter, 
  Layers, 
  DollarSign, 
  BarChart3, 
  ShieldCheck,
  CheckCircle2,
  Clock,
  PackageCheck
} from "lucide-react";

type CockpitTab = "dre" | "fluxo" | "ciclo" | "r100";
type ChannelType = "consolidado" | "site_proprio" | "mercado_livre" | "shopee";

export function FinancialCockpit() {
  const [activeTab, setActiveTab] = useState<CockpitTab>("dre");
  const [selectedChannel, setSelectedChannel] = useState<ChannelType>("consolidado");

  const channelData: Record<ChannelType, {
    name: string;
    tag: string;
    venda: number;
    cmv: number;
    midia: number;
    impostos: number;
    taxas: number;
    frete: number;
    margem: number;
    percentual: string;
  }> = {
    consolidado: {
      name: "Mix Consolidado",
      tag: "Exemplo Geral",
      venda: 100,
      cmv: 38,
      midia: 18,
      impostos: 11,
      taxas: 12,
      frete: 8,
      margem: 13,
      percentual: "13.0%"
    },
    site_proprio: {
      name: "Site Próprio (D2C)",
      tag: "Shopify / VTEX / Nuvem",
      venda: 100,
      cmv: 33,
      midia: 25,
      impostos: 10,
      taxas: 4,
      frete: 7,
      margem: 21,
      percentual: "21.0%"
    },
    mercado_livre: {
      name: "Mercado Livre",
      tag: "Full & Coletas",
      venda: 100,
      cmv: 39,
      midia: 11,
      impostos: 11,
      taxas: 18,
      frete: 9,
      margem: 12,
      percentual: "12.0%"
    },
    shopee: {
      name: "Shopee & Outros",
      tag: "Marketplaces Gerais",
      venda: 100,
      cmv: 41,
      midia: 8,
      impostos: 10,
      taxas: 20,
      frete: 11,
      margem: 10,
      percentual: "10.0%"
    }
  };

  const activeChannel = channelData[selectedChannel];

  // Headings dinâmicos conforme a aba selecionada (estilo O2inc)
  const tabHeaders: Record<CockpitTab, { tag: string; title: string; subtitle: string }> = {
    dre: {
      tag: "DRE Gerencial por Canal",
      title: "DRE analítico para e-commerce: visualize seus lucros e margens com clareza.",
      subtitle: "Decomposição gerencial por canal de venda (Site Próprio, Mercado Livre, Shopee) para entender onde a operação realmente gera resultado e onde o lucro está vazando."
    },
    fluxo: {
      tag: "Previsão de Fluxo de Caixa",
      title: "Saiba com facilidade a previsão do seu fluxo de caixa dos próximos dias ou meses.",
      subtitle: "Projeção dinâmica de entradas, saídas e saldo acumulado a 30, 60 e 90 dias para antecipar descasamentos e eliminar a necessidade de antecipações caras."
    },
    ciclo: {
      tag: "Ciclo Financeiro & Capital de Giro",
      title: "Ciclo financeiro sob controle: do faturamento ao caixa, com a necessidade de capital de giro sempre clara.",
      subtitle: "Prazos médios de estoque, recebimento de recebíveis e pagamento a fornecedores integrados para calcular a real necessidade de capital de giro (NCG)."
    },
    r100: {
      tag: "Simulação de R$ 100 Vendidos",
      title: "Para onde vão R$ 100 vendidos: decomposição de custos e margem por canal.",
      subtitle: "Exemplo ilustrativo com números hipotéticos: de cada R$ 100 de venda bruta, veja quanto sobra de margem de contribuição após CMV, mídia, taxas e fretes."
    }
  };

  const currentHeader = tabHeaders[activeTab];

  return (
    <div className="w-full">
      {/* Dynamic Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-3">
          {currentHeader.tag}
        </span>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-4 leading-tight">
          {currentHeader.title}
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
          {currentHeader.subtitle}
        </p>
      </div>

      {/* =========================================================================
          MOCKUP LAPTOP COM CARDS FLUTUANTES (Estilo O2inc + Identidade Mont Finance)
      ========================================================================= */}
      <div className="relative max-w-5xl mx-auto px-2 sm:px-6">
        
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[radial-gradient(ellipse_at_center,_#d4af37_0%,_transparent_70%)] opacity-10 pointer-events-none blur-3xl"></div>

        {/* -----------------------------------------------------------------------
            CARDS FLUTUANTES 3D (DESKTOP)
        ----------------------------------------------------------------------- */}
        <AnimatePresence mode="wait">
          {activeTab === "dre" && (
            <motion.div
              key="badges-dre"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:block pointer-events-none"
            >
              {/* Badge 1: Receita Bruta (Top Left) */}
              <div className="absolute -left-12 top-10 z-30 p-3.5 rounded-2xl bg-[#0E1118]/95 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left min-w-[190px]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-0.5">
                  Receita Bruta
                </span>
                <span className="text-lg font-mono font-bold text-white block">
                  R$ 3.840.000
                </span>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
                  <TrendingUp className="w-3 h-3" /> +18.4% no trimestre
                </span>
              </div>

              {/* Badge 2: EBITDA (Top Center-Right) */}
              <div className="absolute left-[38%] -top-7 z-30 px-5 py-2.5 rounded-2xl bg-[#0E1118]/95 backdrop-blur-xl border border-[#d4af37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] font-bold block mb-0.5">
                  EBITDA Gerencial
                </span>
                <span className="text-xl font-mono font-extrabold text-white">
                  19,4% <span className="text-xs text-zinc-400 font-normal">(R$ 745.000)</span>
                </span>
              </div>

              {/* Badge 3: Resultado Líquido (Top Right) */}
              <div className="absolute -right-10 top-12 z-30 p-3.5 rounded-2xl bg-[#0E1118]/95 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left min-w-[180px]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-0.5">
                  Resultado Líquido
                </span>
                <span className="text-lg font-mono font-bold text-[#d4af37] block">
                  12,4% Real
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">
                  Livre de distorções
                </span>
              </div>

              {/* Badge 4: Margem de Contribuição (Bottom Left) */}
              <div className="absolute -left-10 bottom-16 z-30 p-3.5 rounded-2xl bg-[#0E1118]/95 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left min-w-[190px]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] font-bold block mb-0.5">
                  Margem Contribuição
                </span>
                <span className="text-lg font-mono font-bold text-white block">
                  34,2% Médio
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">
                  Após CMV, mídia e frete
                </span>
              </div>
            </motion.div>
          )}

          {activeTab === "fluxo" && (
            <motion.div
              key="badges-fluxo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:block pointer-events-none"
            >
              {/* Badge 1: Horizonte Projetado (Top Left) */}
              <div className="absolute -left-12 top-10 z-30 p-3.5 rounded-2xl bg-[#0E1118]/95 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left min-w-[180px]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-0.5">
                  Horizonte de Análise
                </span>
                <span className="text-base font-mono font-bold text-white block">
                  Próximos 90 dias
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">
                  Projeção dia a dia
                </span>
              </div>

              {/* Badge 2: Saldo Final Projetado (Bottom Right) */}
              <div className="absolute -right-12 bottom-14 z-30 p-4 rounded-2xl bg-[#0E1118]/95 backdrop-blur-xl border border-[#d4af37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left min-w-[210px]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] font-bold block mb-1">
                  Projeção do Mês
                </span>
                <div className="space-y-1 text-xs font-mono">
                  <div className="flex justify-between gap-4">
                    <span className="text-zinc-400">Saldo:</span>
                    <strong className="text-white">R$ 842.150</strong>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-emerald-400">Entradas:</span>
                    <span className="text-emerald-300">R$ 1.420.300</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-rose-400">Saídas:</span>
                    <span className="text-rose-300">R$ 1.185.000</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "ciclo" && (
            <motion.div
              key="badges-ciclo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:block pointer-events-none"
            >
              {/* Badge 1: Ciclo Financeiro (Top Center) */}
              <div className="absolute left-[38%] -top-7 z-30 px-5 py-2.5 rounded-2xl bg-[#0E1118]/95 backdrop-blur-xl border border-[#d4af37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] font-bold block mb-0.5">
                  Ciclo Financeiro Total
                </span>
                <span className="text-xl font-mono font-extrabold text-white">
                  32 dias <span className="text-xs text-zinc-400 font-normal">(-14 dias otimizados)</span>
                </span>
              </div>

              {/* Badge 2: Giro de Estoque (Left) */}
              <div className="absolute -left-12 top-14 z-30 p-3.5 rounded-2xl bg-[#0E1118]/95 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left min-w-[180px]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-0.5">
                  Giro de Estoque (PME)
                </span>
                <span className="text-lg font-mono font-bold text-white block">
                  52 dias
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">
                  SKUs A/B priorizados
                </span>
              </div>

              {/* Badge 3: Necessidade de Capital (Right) */}
              <div className="absolute -right-10 bottom-16 z-30 p-3.5 rounded-2xl bg-[#0E1118]/95 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left min-w-[190px]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] font-bold block mb-0.5">
                  Capital de Giro (NCG)
                </span>
                <span className="text-lg font-mono font-bold text-white block">
                  R$ 680.000
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">
                  Coberto sem juros caros
                </span>
              </div>
            </motion.div>
          )}

          {activeTab === "r100" && (
            <motion.div
              key="badges-r100"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:block pointer-events-none"
            >
              {/* Badge Margem */}
              <div className="absolute -right-10 top-12 z-30 p-4 rounded-2xl bg-[#0E1118]/95 backdrop-blur-xl border border-[#d4af37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left min-w-[190px]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] font-bold block mb-0.5">
                  Margem de Contribuição
                </span>
                <span className="text-xl font-mono font-bold text-[#E5C378] block">
                  R$ {activeChannel.margem.toFixed(2)} ({activeChannel.percentual})
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">
                  Livre para custos fixos
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* -----------------------------------------------------------------------
            ESTRUTURA DO LAPTOP (CHASSIS & TELA)
        ----------------------------------------------------------------------- */}
        <div className="relative rounded-t-2xl sm:rounded-t-3xl bg-[#141722] p-2 sm:p-3.5 border-2 border-zinc-700/80 shadow-[0_30px_100px_rgba(0,0,0,0.9)] z-20">
          
          {/* Câmera / Notch do Laptop */}
          <div className="flex items-center justify-center gap-1.5 pb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 border border-zinc-600"></span>
          </div>

          {/* Tela do Dashboard */}
          <div className="rounded-xl bg-[#0B0E14] border border-white/10 overflow-hidden text-left min-h-[380px] sm:min-h-[460px] flex flex-col justify-between">
            
            {/* Top Bar do Sistema BI */}
            <div className="px-4 sm:px-6 py-3 bg-[#080A0E] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <img src="/favicon.png" alt="Mont" className="h-3.5 w-auto" />
                  <span className="font-semibold text-white">Mont Finance BI</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-[#d4af37]">E-commerce Intelligence</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-[#d4af37]" />
                  2025 · Consolidado
                </span>
              </div>
            </div>

            {/* Conteúdo Dinâmico da Tela conforme a Aba */}
            <div className="p-4 sm:p-7 flex-grow">
              <AnimatePresence mode="wait">
                
                {/* 1. VIEW: DRE GERENCIAL */}
                {activeTab === "dre" && (
                  <motion.div
                    key="tab-dre"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* Top KPI Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">Receita Líquida</span>
                        <span className="text-base sm:text-xl font-mono font-bold text-white">R$ 3.417.600</span>
                        <span className="text-[10px] font-mono text-zinc-400 block mt-1">Após devoluções</span>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">(-) CMV / Custo</span>
                        <span className="text-base sm:text-xl font-mono font-bold text-rose-400">36,5%</span>
                        <span className="text-[10px] font-mono text-zinc-400 block mt-1">R$ 1.247.400</span>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30">
                        <span className="text-[10px] font-mono uppercase text-[#d4af37] font-bold block mb-1">Margem Contribuição</span>
                        <span className="text-base sm:text-xl font-mono font-bold text-[#FAF9F6]">34,2%</span>
                        <span className="text-[10px] font-mono text-[#d4af37] block mt-1">R$ 1.313.280</span>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">Lucro Líquido Real</span>
                        <span className="text-base sm:text-xl font-mono font-bold text-emerald-400">12,4%</span>
                        <span className="text-[10px] font-mono text-zinc-400 block mt-1">R$ 476.000</span>
                      </div>
                    </div>

                    {/* Gráfico Waterfall da DRE */}
                    <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/[0.06]">
                      <div className="flex justify-between items-center mb-4 text-xs font-mono">
                        <span className="text-zinc-300 font-semibold">Cascata Analítica de Resultado (P&L)</span>
                        <span className="text-zinc-500 text-[11px]">Valores Gerenciais em %</span>
                      </div>

                      {/* Barras Horizontais Comparativas */}
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-zinc-300">Receita Bruta Faturada</span>
                            <span className="text-white font-bold">100% (R$ 3.840k)</span>
                          </div>
                          <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-zinc-200 to-white w-full rounded-full"></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-zinc-400">(-) Deduções e Impostos sobre Venda</span>
                            <span className="text-purple-400">-11,0%</span>
                          </div>
                          <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                            <div className="h-full bg-purple-500 w-[11%] rounded-full"></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-zinc-400">(-) Custo das Mercadorias Vendidas (CMV)</span>
                            <span className="text-rose-400">-36,5%</span>
                          </div>
                          <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                            <div className="h-full bg-rose-500 w-[36.5%] rounded-full"></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-zinc-400">(-) Mídia, Comissões e Fretes por Canal</span>
                            <span className="text-amber-400">-18,3%</span>
                          </div>
                          <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                            <div className="h-full bg-amber-500 w-[18.3%] rounded-full"></div>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-white/[0.06]">
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-[#d4af37] font-bold">(=) Margem de Contribuição Consolidada</span>
                            <span className="text-[#FAF9F6] font-bold">34,2% (R$ 1.313k)</span>
                          </div>
                          <div className="h-3.5 rounded-full bg-zinc-800 overflow-hidden">
                            <div className="h-full bg-[#d4af37] w-[34.2%] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Breakdown por Canais */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-zinc-400">Site Próprio (D2C)</span>
                        <span className="text-emerald-400 font-bold">41,2% margem</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-zinc-400">Mercado Livre</span>
                        <span className="text-amber-400 font-bold">28,5% margem</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-zinc-400">Shopee & Outros</span>
                        <span className="text-zinc-300 font-bold">22,0% margem</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. VIEW: FLUXO DE CAIXA */}
                {activeTab === "fluxo" && (
                  <motion.div
                    key="tab-fluxo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* Top KPI Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">Saldo Atual</span>
                        <span className="text-base sm:text-xl font-mono font-bold text-white">R$ 520.400</span>
                        <span className="text-[10px] font-mono text-emerald-400 block mt-1">Disponível em contas</span>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">Entradas Previstas</span>
                        <span className="text-base sm:text-xl font-mono font-bold text-emerald-400">R$ 1.420.300</span>
                        <span className="text-[10px] font-mono text-zinc-400 block mt-1">Cartões e marketplaces</span>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">Saídas Comprometidas</span>
                        <span className="text-base sm:text-xl font-mono font-bold text-rose-400">R$ 1.185.000</span>
                        <span className="text-[10px] font-mono text-zinc-400 block mt-1">Fornecedores, ads e folha</span>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30">
                        <span className="text-[10px] font-mono uppercase text-[#d4af37] font-bold block mb-1">Saldo Projetado 30d</span>
                        <span className="text-base sm:text-xl font-mono font-bold text-[#FAF9F6]">R$ 842.150</span>
                        <span className="text-[10px] font-mono text-emerald-400 block mt-1">+R$ 321.750 gerados</span>
                      </div>
                    </div>

                    {/* Gráfico de Barras Semanais de Caixa */}
                    <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/[0.06]">
                      <div className="flex justify-between items-center mb-6 text-xs font-mono">
                        <span className="text-zinc-300 font-semibold">Projeção Semanal de Entradas vs Saídas & Saldo</span>
                        <div className="flex items-center gap-3 text-[10px]">
                          <span className="flex items-center gap-1.5 text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Entradas</span>
                          <span className="flex items-center gap-1.5 text-rose-400"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Saídas</span>
                          <span className="flex items-center gap-1.5 text-[#d4af37]"><span className="w-2 h-2 rounded-full bg-[#d4af37]"></span> Saldo Acumulado</span>
                        </div>
                      </div>

                      {/* Simulação Visual do Gráfico de Caixa */}
                      <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4 items-end h-40 pt-4 border-b border-zinc-800">
                        {[
                          { sem: "Sem 1", in: 85, out: 60, bal: "R$ 610k" },
                          { sem: "Sem 2", in: 95, out: 70, bal: "R$ 690k" },
                          { sem: "Sem 3", in: 110, out: 95, bal: "R$ 720k" },
                          { sem: "Sem 4", in: 125, out: 80, bal: "R$ 842k" },
                          { sem: "Sem 5", in: 90, out: 65, bal: "R$ 895k" },
                          { sem: "Sem 6", in: 105, out: 75, bal: "R$ 960k" },
                          { sem: "Sem 7", in: 130, out: 100, bal: "R$ 1.020k" },
                          { sem: "Sem 8", in: 140, out: 85, bal: "R$ 1.140k" },
                        ].map((item, i) => (
                          <div key={i} className="flex flex-col items-center h-full justify-end group">
                            <div className="w-full flex items-end justify-center gap-1 sm:gap-1.5 h-full">
                              <div style={{ height: `${item.in * 0.9}%` }} className="w-2 sm:w-3 bg-emerald-500/80 hover:bg-emerald-400 rounded-t-sm transition-all" title={`Entradas: ${item.in}`}></div>
                              <div style={{ height: `${item.out * 0.9}%` }} className="w-2 sm:w-3 bg-rose-500/80 hover:bg-rose-400 rounded-t-sm transition-all" title={`Saídas: ${item.out}`}></div>
                            </div>
                            <span className="text-[9px] font-mono text-zinc-500 mt-2">{item.sem}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-3 text-[11px] font-mono text-zinc-400">
                        <span>✦ Ponto Crítico de Caixa identificado no Dia 18 — 100% coberto pelo planejamento financeiro.</span>
                        <span className="text-emerald-400 font-semibold">Zero antecipação bancária cara</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. VIEW: CICLO FINANCEIRO & CAPITAL */}
                {activeTab === "ciclo" && (
                  <motion.div
                    key="tab-ciclo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* Top KPI Cards (PME, PMR, PMP, Ciclo) */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">Giro Estoque (PME)</span>
                        <span className="text-base sm:text-xl font-mono font-bold text-white">52 dias</span>
                        <span className="text-[10px] font-mono text-emerald-400 block mt-1">Estoque ativo</span>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">Recebimento (PMR)</span>
                        <span className="text-base sm:text-xl font-mono font-bold text-white">18 dias</span>
                        <span className="text-[10px] font-mono text-zinc-400 block mt-1">Marketplaces & cartões</span>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">Fornecedores (PMP)</span>
                        <span className="text-base sm:text-xl font-mono font-bold text-[#d4af37]">38 dias</span>
                        <span className="text-[10px] font-mono text-zinc-400 block mt-1">Prazo de pagamento</span>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30">
                        <span className="text-[10px] font-mono uppercase text-[#d4af37] font-bold block mb-1">Ciclo Financeiro Real</span>
                        <span className="text-base sm:text-xl font-mono font-bold text-[#FAF9F6]">32 dias</span>
                        <span className="text-[10px] font-mono text-emerald-400 block mt-1">PME + PMR - PMP</span>
                      </div>
                    </div>

                    {/* Timeline do Ciclo Operacional vs Financeiro */}
                    <div className="p-5 rounded-xl bg-black/40 border border-white/[0.06]">
                      <span className="text-xs font-mono text-zinc-300 font-semibold block mb-4">
                        Linha do Tempo: Do Pagamento ao Caixa Efetivo
                      </span>

                      <div className="relative pt-6 pb-4">
                        {/* Linha mestra */}
                        <div className="h-1.5 w-full bg-zinc-800 rounded-full relative">
                          {/* Segmento financiado (gap de caixa) */}
                          <div className="absolute left-[54%] w-[46%] h-full bg-[#d4af37] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                        </div>

                        {/* Marcos temporais */}
                        <div className="grid grid-cols-4 gap-2 pt-4 text-xs font-mono">
                          <div>
                            <span className="text-[#d4af37] font-bold block">Dia 0</span>
                            <span className="text-zinc-400 text-[11px]">Compra de Estoque</span>
                          </div>
                          <div>
                            <span className="text-white font-bold block">Dia 38</span>
                            <span className="text-zinc-400 text-[11px]">Pagamento Fornecedor (PMP)</span>
                          </div>
                          <div>
                            <span className="text-white font-bold block">Dia 52</span>
                            <span className="text-zinc-400 text-[11px]">Venda e Envio (PME)</span>
                          </div>
                          <div className="text-right">
                            <span className="text-emerald-400 font-bold block">Dia 70</span>
                            <span className="text-zinc-400 text-[11px]">Recebimento no Caixa</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-[#d4af37]/5 border border-[#d4af37]/20 mt-4 text-[11px] font-mono text-zinc-300 leading-relaxed">
                        ✦ <strong>Necessidade de Capital de Giro (NCG):</strong> Durante 32 dias (do dia 38 ao dia 70), a empresa precisa financiar sua operação. O papel do CFO Terceirizado é encurtar esse ciclo e dimensionar o volume de capital com o menor custo financeiro.
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 4. VIEW: SIMULAÇÃO R$ 100 */}
                {activeTab === "r100" && (
                  <motion.div
                    key="tab-r100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* Canal Selector */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
                          {activeChannel.tag}
                        </span>
                        <span className="text-xs font-mono text-zinc-400">Simulação dos R$ 100 Faturados</span>
                      </div>

                      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 overflow-x-auto">
                        {(["consolidado", "site_proprio", "mercado_livre", "shopee"] as ChannelType[]).map((key) => (
                          <button
                            key={key}
                            onClick={() => setSelectedChannel(key)}
                            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                              selectedChannel === key 
                                ? "bg-[#d4af37] text-black font-bold shadow-md" 
                                : "text-zinc-400 hover:text-white"
                            }`}
                          >
                            {channelData[key].name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Waterfall Bar */}
                    <div>
                      <div className="flex justify-between items-center text-xs font-mono text-zinc-400 mb-2">
                        <span>Venda Bruta: R$ 100,00</span>
                        <span className="text-[#d4af37] font-semibold">Margem: R$ {activeChannel.margem.toFixed(2)} ({activeChannel.percentual})</span>
                      </div>
                      <div className="h-4 w-full rounded-full bg-zinc-800 overflow-hidden flex shadow-inner">
                        <div style={{ width: `${activeChannel.cmv}%` }} className="bg-rose-500 h-full" title="Custo do Produto"></div>
                        <div style={{ width: `${activeChannel.midia}%` }} className="bg-amber-500 h-full" title="Mídia & Tráfego"></div>
                        <div style={{ width: `${activeChannel.impostos}%` }} className="bg-purple-500 h-full" title="Impostos"></div>
                        <div style={{ width: `${activeChannel.taxas}%` }} className="bg-blue-500 h-full" title="Comissões & Taxas"></div>
                        <div style={{ width: `${activeChannel.frete}%` }} className="bg-orange-500 h-full" title="Frete & Devoluções"></div>
                        <div style={{ width: `${activeChannel.margem}%` }} className="bg-[#d4af37] h-full" title="Margem de Contribuição"></div>
                      </div>
                    </div>

                    {/* Grade de Custos */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[10px] font-mono text-zinc-400 block mb-0.5">(-) CMV / Custo</span>
                        <span className="text-sm font-mono font-bold text-rose-400">- R$ {activeChannel.cmv.toFixed(2)}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[10px] font-mono text-zinc-400 block mb-0.5">(-) Mídia & Ads</span>
                        <span className="text-sm font-mono font-bold text-amber-400">- R$ {activeChannel.midia.toFixed(2)}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[10px] font-mono text-zinc-400 block mb-0.5">(-) Impostos</span>
                        <span className="text-sm font-mono font-bold text-purple-400">- R$ {activeChannel.impostos.toFixed(2)}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[10px] font-mono text-zinc-400 block mb-0.5">(-) Comissões</span>
                        <span className="text-sm font-mono font-bold text-blue-400">- R$ {activeChannel.taxas.toFixed(2)}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[10px] font-mono text-zinc-400 block mb-0.5">(-) Fretes</span>
                        <span className="text-sm font-mono font-bold text-orange-400">- R$ {activeChannel.frete.toFixed(2)}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30">
                        <span className="text-[10px] font-mono text-[#d4af37] font-bold block mb-0.5">(=) Margem Real</span>
                        <span className="text-sm font-mono font-bold text-[#E5C378]">+ R$ {activeChannel.margem.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] text-zinc-400 font-light leading-relaxed">
                      *Exemplo ilustrativo, com números hipotéticos: a proporção real muda por canal, produto e período, e é isso que o diagnóstico mostra.
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>

          {/* Base do Laptop (Hinges & Notch) */}
          <div className="h-3 w-full bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 rounded-b-xl shadow-lg relative flex items-center justify-center">
            <div className="w-20 h-1 bg-zinc-900 rounded-full"></div>
          </div>
        </div>

      </div>

      {/* =========================================================================
          SELETOR EM PÍLULAS INFERIOR (Estilo O2inc)
      ========================================================================= */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-10 sm:mt-14 max-w-4xl mx-auto px-4">
        {[
          { id: "dre", label: "DRE Gerencial" },
          { id: "fluxo", label: "Fluxo de Caixa" },
          { id: "ciclo", label: "Ciclo Financeiro" },
          { id: "r100", label: "Simulação R$ 100" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as CockpitTab)}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
              activeTab === tab.id
                ? "border-2 border-[#d4af37] text-white bg-[#d4af37]/15 shadow-[0_0_20px_rgba(212,175,55,0.35)] scale-105"
                : "border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 bg-white/[0.02]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

    </div>
  );
}
