import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, 
  Calendar, 
  CheckCircle2,
  Clock
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
      subtitle: "Decomposição por canal de venda (Site Próprio, Mercado Livre, Shopee) para enxergar onde a operação gera resultado real."
    },
    fluxo: {
      tag: "Previsão de Fluxo de Caixa",
      title: "Saiba com facilidade a previsão do seu fluxo de caixa dos próximos dias ou meses.",
      subtitle: "Projeção dinâmica de entradas, saídas e saldo acumulado a 30, 60 e 90 dias para antecipar descasamentos com segurança."
    },
    ciclo: {
      tag: "Ciclo Financeiro & Capital de Giro",
      title: "Ciclo financeiro sob controle: do faturamento ao caixa, com a necessidade de capital sempre clara.",
      subtitle: "Prazos médios de estoque, recebimento e fornecedores integrados para dimensionar a real necessidade de capital de giro (NCG)."
    },
    r100: {
      tag: "Simulação de R$ 100 Vendidos",
      title: "Para onde vão R$ 100 vendidos: decomposição de custos e margem por canal.",
      subtitle: "Exemplo ilustrativo com números hipotéticos: veja quanto sobra de margem de contribuição após CMV, mídia, taxas e fretes."
    }
  };

  const currentHeader = tabHeaders[activeTab];

  return (
    <div className="w-full">
      {/* Header Compacto (Ideal para telas de notebook) */}
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#d4af37] font-bold block mb-1.5">
          {currentHeader.tag}
        </span>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white mb-2 leading-tight">
          {currentHeader.title}
        </h2>
        <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-xl mx-auto">
          {currentHeader.subtitle}
        </p>
      </div>

      {/* =========================================================================
          MOCKUP LAPTOP COM CARDS FLUTUANTES (Escala otimizada para viewport)
      ========================================================================= */}
      <div className="relative max-w-4xl mx-auto px-2 sm:px-6">
        
        {/* Glow de fundo suave */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[radial-gradient(ellipse_at_center,_#d4af37_0%,_transparent_70%)] opacity-10 pointer-events-none blur-3xl"></div>

        {/* -----------------------------------------------------------------------
            CARDS FLUTUANTES 3D (COMPACTOS PARA CABER NA TELA)
        ----------------------------------------------------------------------- */}
        <AnimatePresence mode="wait">
          {activeTab === "dre" && (
            <motion.div
              key="badges-dre"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block pointer-events-none"
            >
              {/* Badge 1: Receita Bruta (Top Left) */}
              <div className="absolute -left-10 top-6 z-30 p-2.5 px-3 rounded-xl bg-[#0E1118]/95 backdrop-blur-xl border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.8)] text-left min-w-[160px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 block">
                  Receita Bruta
                </span>
                <span className="text-base font-mono font-bold text-white block">
                  R$ 3.840.000
                </span>
                <span className="text-[9px] text-emerald-400 font-mono flex items-center gap-1">
                  <TrendingUp className="w-2.5 h-2.5" /> +18.4% tri
                </span>
              </div>

              {/* Badge 2: EBITDA (Top Center) */}
              <div className="absolute left-[40%] -top-5 z-30 px-3.5 py-1.5 rounded-xl bg-[#0E1118]/95 backdrop-blur-xl border border-[#d4af37]/40 shadow-[0_15px_35px_rgba(0,0,0,0.8)] text-center">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#d4af37] font-bold block">
                  EBITDA Gerencial
                </span>
                <span className="text-base font-mono font-extrabold text-white">
                  19,4% <span className="text-[10px] text-zinc-400 font-normal">(R$ 745k)</span>
                </span>
              </div>

              {/* Badge 3: Resultado Líquido (Top Right) */}
              <div className="absolute -right-8 top-6 z-30 p-2.5 px-3 rounded-xl bg-[#0E1118]/95 backdrop-blur-xl border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.8)] text-left min-w-[150px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 block">
                  Resultado Líquido
                </span>
                <span className="text-base font-mono font-bold text-[#d4af37] block">
                  12,4% Real
                </span>
                <span className="text-[9px] text-zinc-400 font-mono">
                  Livre de distorções
                </span>
              </div>

              {/* Badge 4: Margem de Contribuição (Bottom Left) */}
              <div className="absolute -left-8 bottom-10 z-30 p-2.5 px-3 rounded-xl bg-[#0E1118]/95 backdrop-blur-xl border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.8)] text-left min-w-[160px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#d4af37] font-bold block">
                  Margem Contribuição
                </span>
                <span className="text-base font-mono font-bold text-white block">
                  34,2% Médio
                </span>
                <span className="text-[9px] text-zinc-400 font-mono">
                  Após CMV e mídia
                </span>
              </div>
            </motion.div>
          )}

          {activeTab === "fluxo" && (
            <motion.div
              key="badges-fluxo"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block pointer-events-none"
            >
              {/* Badge 1: Horizonte */}
              <div className="absolute -left-10 top-6 z-30 p-2.5 px-3 rounded-xl bg-[#0E1118]/95 backdrop-blur-xl border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.8)] text-left min-w-[150px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 block">
                  Horizonte
                </span>
                <span className="text-sm font-mono font-bold text-white block">
                  Próximos 90 dias
                </span>
                <span className="text-[9px] text-emerald-400 font-mono">
                  Projeção diária
                </span>
              </div>

              {/* Badge 2: Saldo Final Projetado */}
              <div className="absolute -right-10 bottom-8 z-30 p-3 rounded-xl bg-[#0E1118]/95 backdrop-blur-xl border border-[#d4af37]/40 shadow-[0_15px_35px_rgba(0,0,0,0.8)] text-left min-w-[180px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#d4af37] font-bold block mb-1">
                  Projeção do Mês
                </span>
                <div className="space-y-0.5 text-[11px] font-mono">
                  <div className="flex justify-between gap-3">
                    <span className="text-zinc-400">Saldo:</span>
                    <strong className="text-white">R$ 842.150</strong>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-emerald-400">Entradas:</span>
                    <span className="text-emerald-300">R$ 1.420k</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-rose-400">Saídas:</span>
                    <span className="text-rose-300">R$ 1.185k</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "ciclo" && (
            <motion.div
              key="badges-ciclo"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block pointer-events-none"
            >
              {/* Badge 1: Ciclo Financeiro (Top Center) */}
              <div className="absolute left-[40%] -top-5 z-30 px-3.5 py-1.5 rounded-xl bg-[#0E1118]/95 backdrop-blur-xl border border-[#d4af37]/40 shadow-[0_15px_35px_rgba(0,0,0,0.8)] text-center">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#d4af37] font-bold block">
                  Ciclo Financeiro Total
                </span>
                <span className="text-base font-mono font-extrabold text-white">
                  32 dias <span className="text-[10px] text-zinc-400 font-normal">(-14 dias otimizados)</span>
                </span>
              </div>

              {/* Badge 2: Giro de Estoque */}
              <div className="absolute -left-10 top-8 z-30 p-2.5 px-3 rounded-xl bg-[#0E1118]/95 backdrop-blur-xl border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.8)] text-left min-w-[150px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 block">
                  Giro Estoque (PME)
                </span>
                <span className="text-base font-mono font-bold text-white block">
                  52 dias
                </span>
                <span className="text-[9px] text-zinc-400 font-mono">
                  Curva A/B/C
                </span>
              </div>

              {/* Badge 3: Capital de Giro */}
              <div className="absolute -right-8 bottom-10 z-30 p-2.5 px-3 rounded-xl bg-[#0E1118]/95 backdrop-blur-xl border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.8)] text-left min-w-[160px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#d4af37] font-bold block">
                  Capital de Giro (NCG)
                </span>
                <span className="text-base font-mono font-bold text-white block">
                  R$ 680.000
                </span>
                <span className="text-[9px] text-emerald-400 font-mono">
                  Sem juros caros
                </span>
              </div>
            </motion.div>
          )}

          {activeTab === "r100" && (
            <motion.div
              key="badges-r100"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block pointer-events-none"
            >
              <div className="absolute -right-8 top-8 z-30 p-3 rounded-xl bg-[#0E1118]/95 backdrop-blur-xl border border-[#d4af37]/40 shadow-[0_15px_35px_rgba(0,0,0,0.8)] text-left min-w-[170px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#d4af37] font-bold block">
                  Margem de Contribuição
                </span>
                <span className="text-base font-mono font-bold text-[#E5C378] block">
                  R$ {activeChannel.margem.toFixed(2)} ({activeChannel.percentual})
                </span>
                <span className="text-[9px] text-zinc-400 font-mono">
                  Sobra líquida por R$ 100
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* -----------------------------------------------------------------------
            ESTRUTURA DO LAPTOP (CHASSIS COMPACTO COM MEDIDAS DE ALTURA REDUZIDAS)
        ----------------------------------------------------------------------- */}
        <div className="relative rounded-t-2xl bg-[#141722] p-2 sm:p-2.5 border-2 border-zinc-700/80 shadow-[0_20px_70px_rgba(0,0,0,0.9)] z-20">
          
          {/* Câmera do Laptop */}
          <div className="flex items-center justify-center pb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 border border-zinc-600"></span>
          </div>

          {/* Tela do Dashboard (min-h compacto) */}
          <div className="rounded-xl bg-[#0B0E14] border border-white/10 overflow-hidden text-left min-h-[290px] sm:min-h-[340px] flex flex-col justify-between">
            
            {/* Top Bar do Sistema BI */}
            <div className="px-3.5 sm:px-5 py-2.5 bg-[#080A0E] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                </div>
                <div className="h-3.5 w-px bg-white/10 hidden sm:block"></div>
                <div className="flex items-center gap-1.5 text-zinc-300 text-[11px]">
                  <img src="/favicon.png" alt="Mont" className="h-3 w-auto" />
                  <span className="font-semibold text-white">Mont Finance BI</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-[#d4af37]">E-commerce</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 flex items-center gap-1">
                  <Calendar className="w-2.5 h-2.5 text-[#d4af37]" />
                  2025 · Consolidado
                </span>
              </div>
            </div>

            {/* Conteúdo da Tela */}
            <div className="p-3.5 sm:p-5 flex-grow">
              <AnimatePresence mode="wait">
                
                {/* 1. VIEW: DRE GERENCIAL */}
                {activeTab === "dre" && (
                  <motion.div
                    key="tab-dre"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {/* Top KPI Cards Compactos */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[9px] font-mono uppercase text-zinc-400 block">Receita Líquida</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-white">R$ 3.417.600</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[9px] font-mono uppercase text-zinc-400 block">(-) CMV / Custo</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-rose-400">36,5%</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30">
                        <span className="text-[9px] font-mono uppercase text-[#d4af37] font-bold block">Margem Contribuição</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#FAF9F6]">34,2% (R$ 1,31M)</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[9px] font-mono uppercase text-zinc-400 block">Lucro Líquido Real</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400">12,4%</span>
                      </div>
                    </div>

                    {/* Gráfico Waterfall Compacto */}
                    <div className="p-3 sm:p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                      <div className="flex justify-between items-center mb-2.5 text-[11px] font-mono">
                        <span className="text-zinc-300 font-semibold">Cascata Analítica de Resultado (P&L)</span>
                        <span className="text-zinc-500 text-[10px]">Valores Gerenciais em %</span>
                      </div>

                      <div className="space-y-2 text-[11px]">
                        <div>
                          <div className="flex justify-between font-mono mb-0.5">
                            <span className="text-zinc-300">Receita Bruta Faturada</span>
                            <span className="text-white font-bold">100% (R$ 3.840k)</span>
                          </div>
                          <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-zinc-200 to-white w-full rounded-full"></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between font-mono mb-0.5">
                            <span className="text-zinc-400">(-) CMV / Custo de Produto</span>
                            <span className="text-rose-400">-36,5%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                            <div className="h-full bg-rose-500 w-[36.5%] rounded-full"></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between font-mono mb-0.5">
                            <span className="text-zinc-400">(-) Mídia, Comissões e Fretes</span>
                            <span className="text-amber-400">-18,3%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                            <div className="h-full bg-amber-500 w-[18.3%] rounded-full"></div>
                          </div>
                        </div>

                        <div className="pt-1.5 border-t border-white/[0.06]">
                          <div className="flex justify-between font-mono mb-0.5">
                            <span className="text-[#d4af37] font-bold">(=) Margem de Contribuição</span>
                            <span className="text-[#FAF9F6] font-bold">34,2% (R$ 1.313k)</span>
                          </div>
                          <div className="h-2.5 rounded-full bg-zinc-800 overflow-hidden">
                            <div className="h-full bg-[#d4af37] w-[34.2%] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.4)]"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Breakdown por Canais */}
                    <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
                      <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-zinc-400">Site Próprio (D2C)</span>
                        <span className="text-emerald-400 font-bold">41,2% margem</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-zinc-400">Mercado Livre</span>
                        <span className="text-amber-400 font-bold">28,5% margem</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
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
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {/* Top KPI Cards Compactos */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[9px] font-mono uppercase text-zinc-400 block">Saldo Atual</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-white">R$ 520.400</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[9px] font-mono uppercase text-zinc-400 block">Entradas Previstas</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400">R$ 1.420.300</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[9px] font-mono uppercase text-zinc-400 block">Saídas Previstas</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-rose-400">R$ 1.185.000</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30">
                        <span className="text-[9px] font-mono uppercase text-[#d4af37] font-bold block">Saldo Projetado 30d</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#FAF9F6]">R$ 842.150</span>
                      </div>
                    </div>

                    {/* Gráfico de Barras Semanais de Caixa */}
                    <div className="p-3 sm:p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                      <div className="flex justify-between items-center mb-3 text-[11px] font-mono">
                        <span className="text-zinc-300 font-semibold">Projeção Semanal: Entradas vs Saídas</span>
                        <div className="flex items-center gap-2.5 text-[9px]">
                          <span className="flex items-center gap-1 text-emerald-400"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Entradas</span>
                          <span className="flex items-center gap-1 text-rose-400"><span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Saídas</span>
                        </div>
                      </div>

                      {/* Altura compacta h-28 */}
                      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3 items-end h-28 pt-2 border-b border-zinc-800">
                        {[
                          { sem: "Sem 1", in: 85, out: 60 },
                          { sem: "Sem 2", in: 95, out: 70 },
                          { sem: "Sem 3", in: 110, out: 95 },
                          { sem: "Sem 4", in: 125, out: 80 },
                          { sem: "Sem 5", in: 90, out: 65 },
                          { sem: "Sem 6", in: 105, out: 75 },
                          { sem: "Sem 7", in: 130, out: 100 },
                          { sem: "Sem 8", in: 140, out: 85 },
                        ].map((item, i) => (
                          <div key={i} className="flex flex-col items-center h-full justify-end">
                            <div className="w-full flex items-end justify-center gap-1 h-full">
                              <div style={{ height: `${item.in * 0.85}%` }} className="w-2 bg-emerald-500/80 rounded-t-sm"></div>
                              <div style={{ height: `${item.out * 0.85}%` }} className="w-2 bg-rose-500/80 rounded-t-sm"></div>
                            </div>
                            <span className="text-[8px] font-mono text-zinc-500 mt-1">{item.sem}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pt-2 text-[10px] font-mono text-zinc-400">
                        <span>✦ Ponto Crítico de Caixa (Dia 18) 100% mapeado e coberto</span>
                        <span className="text-emerald-400 font-semibold">Sem custo de antecipação</span>
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
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {/* Top KPI Cards Compactos */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[9px] font-mono uppercase text-zinc-400 block">Giro Estoque (PME)</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-white">52 dias</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[9px] font-mono uppercase text-zinc-400 block">Recebimento (PMR)</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-white">18 dias</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[9px] font-mono uppercase text-zinc-400 block">Fornecedores (PMP)</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#d4af37]">38 dias</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30">
                        <span className="text-[9px] font-mono uppercase text-[#d4af37] font-bold block">Ciclo Financeiro</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#FAF9F6]">32 dias</span>
                      </div>
                    </div>

                    {/* Timeline Compacta */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                      <span className="text-[11px] font-mono text-zinc-300 font-semibold block mb-2">
                        Linha do Tempo: PME + PMR - PMP = Ciclo de Caixa
                      </span>

                      <div className="relative pt-4 pb-2">
                        <div className="h-1.5 w-full bg-zinc-800 rounded-full relative">
                          <div className="absolute left-[54%] w-[46%] h-full bg-[#d4af37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.5)]"></div>
                        </div>

                        <div className="grid grid-cols-4 gap-1 pt-2.5 text-[10px] font-mono">
                          <div>
                            <span className="text-[#d4af37] font-bold block">Dia 0</span>
                            <span className="text-zinc-500">Compra</span>
                          </div>
                          <div>
                            <span className="text-white font-bold block">Dia 38</span>
                            <span className="text-zinc-500">Pagamento (PMP)</span>
                          </div>
                          <div>
                            <span className="text-white font-bold block">Dia 52</span>
                            <span className="text-zinc-500">Venda (PME)</span>
                          </div>
                          <div className="text-right">
                            <span className="text-emerald-400 font-bold block">Dia 70</span>
                            <span className="text-zinc-500">Recebimento</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-2 rounded-lg bg-[#d4af37]/5 border border-[#d4af37]/20 mt-2 text-[10px] font-mono text-zinc-300 leading-relaxed">
                        ✦ <strong>Necessidade de Capital de Giro (NCG):</strong> Gap de 32 dias financiado com estrutura ótima e menor custo de capital.
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
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {/* Canal Selector */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
                          {activeChannel.tag}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400">Simulação R$ 100</span>
                      </div>

                      <div className="flex items-center gap-1 p-0.5 rounded-lg bg-white/5 border border-white/10 overflow-x-auto">
                        {(["consolidado", "site_proprio", "mercado_livre", "shopee"] as ChannelType[]).map((key) => (
                          <button
                            key={key}
                            onClick={() => setSelectedChannel(key)}
                            className={`px-2.5 py-1 rounded text-[10px] font-mono transition-all whitespace-nowrap ${
                              selectedChannel === key 
                                ? "bg-[#d4af37] text-black font-bold shadow-sm" 
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
                      <div className="flex justify-between items-center text-[11px] font-mono text-zinc-400 mb-1.5">
                        <span>Venda Bruta: R$ 100,00</span>
                        <span className="text-[#d4af37] font-semibold">Margem: R$ {activeChannel.margem.toFixed(2)} ({activeChannel.percentual})</span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-zinc-800 overflow-hidden flex shadow-inner">
                        <div style={{ width: `${activeChannel.cmv}%` }} className="bg-rose-500 h-full" title="Custo"></div>
                        <div style={{ width: `${activeChannel.midia}%` }} className="bg-amber-500 h-full" title="Mídia"></div>
                        <div style={{ width: `${activeChannel.impostos}%` }} className="bg-purple-500 h-full" title="Impostos"></div>
                        <div style={{ width: `${activeChannel.taxas}%` }} className="bg-blue-500 h-full" title="Comissões"></div>
                        <div style={{ width: `${activeChannel.frete}%` }} className="bg-orange-500 h-full" title="Frete"></div>
                        <div style={{ width: `${activeChannel.margem}%` }} className="bg-[#d4af37] h-full" title="Margem"></div>
                      </div>
                    </div>

                    {/* Grade de Custos Compacta */}
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[9px] font-mono text-zinc-400 block">(-) CMV</span>
                        <span className="text-xs font-mono font-bold text-rose-400">- R$ {activeChannel.cmv.toFixed(2)}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[9px] font-mono text-zinc-400 block">(-) Mídia</span>
                        <span className="text-xs font-mono font-bold text-amber-400">- R$ {activeChannel.midia.toFixed(2)}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[9px] font-mono text-zinc-400 block">(-) Impostos</span>
                        <span className="text-xs font-mono font-bold text-purple-400">- R$ {activeChannel.impostos.toFixed(2)}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[9px] font-mono text-zinc-400 block">(-) Taxas</span>
                        <span className="text-xs font-mono font-bold text-blue-400">- R$ {activeChannel.taxas.toFixed(2)}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-[9px] font-mono text-zinc-400 block">(-) Fretes</span>
                        <span className="text-xs font-mono font-bold text-orange-400">- R$ {activeChannel.frete.toFixed(2)}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30">
                        <span className="text-[9px] font-mono text-[#d4af37] font-bold block">(=) Margem</span>
                        <span className="text-xs font-mono font-bold text-[#E5C378]">+ R$ {activeChannel.margem.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[10px] text-zinc-400 font-light leading-relaxed">
                      *Exemplo ilustrativo com números hipotéticos: a proporção real varia por canal e produto.
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>

          {/* Base do Laptop */}
          <div className="h-2.5 w-full bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 rounded-b-xl shadow-lg relative flex items-center justify-center">
            <div className="w-16 h-0.5 bg-zinc-900 rounded-full"></div>
          </div>
        </div>

      </div>

      {/* =========================================================================
          SELETOR EM PÍLULAS INFERIOR (COMPACTO)
      ========================================================================= */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 max-w-3xl mx-auto px-4">
        {[
          { id: "dre", label: "DRE Gerencial" },
          { id: "fluxo", label: "Fluxo de Caixa" },
          { id: "ciclo", label: "Ciclo Financeiro" },
          { id: "r100", label: "Simulação R$ 100" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as CockpitTab)}
            className={`px-4 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
              activeTab === tab.id
                ? "border-2 border-[#d4af37] text-white bg-[#d4af37]/15 shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-105"
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
