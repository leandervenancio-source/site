import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, 
  Calendar, 
  CheckCircle2
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
      tag: "Canal Próprio / Loja Virtual",
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
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-wider text-[#F5B85D] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
          {currentHeader.tag}
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3 leading-tight">
          {currentHeader.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
          {currentHeader.subtitle}
        </p>
      </div>

      {/* =========================================================================
          MOCKUP LAPTOP COM CARDS FLUTUANTES (Escala otimizada para viewport)
      ========================================================================= */}
      <div className="relative max-w-4xl mx-auto px-2 sm:px-6">
        
        {/* Glow de fundo suave */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[radial-gradient(ellipse_at_center,_#0E4A55_0%,_transparent_70%)] opacity-20 pointer-events-none blur-3xl"></div>

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
              <div className="absolute -left-10 top-6 z-30 p-2.5 px-3 rounded-xl bg-[#0A323A]/95 backdrop-blur-xl border border-[#0E4A55] shadow-2xl text-left min-w-[160px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#A0B1B5] block">
                  Receita Bruta
                </span>
                <span className="text-base font-mono font-bold text-[#F5F3EE] block">
                  R$ 3.840.000
                </span>
                <span className="text-[9px] text-[#2F705B] font-mono flex items-center gap-1 font-semibold">
                  <TrendingUp className="w-2.5 h-2.5" /> +18.4% tri
                </span>
              </div>

              {/* Badge 2: EBITDA (Top Center) */}
              <div className="absolute left-[40%] -top-5 z-30 px-3.5 py-1.5 rounded-xl bg-[#0A323A]/95 backdrop-blur-xl border border-[#E8A33D]/60 shadow-2xl text-center">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#E8A33D] font-medium block">
                  EBITDA Gerencial
                </span>
                <span className="text-base font-mono font-bold text-[#F5F3EE]">
                  19,4% <span className="text-[10px] text-[#A0B1B5] font-normal">(R$ 745k)</span>
                </span>
              </div>

              {/* Badge 3: Resultado Líquido (Top Right) */}
              <div className="absolute -right-8 top-6 z-30 p-2.5 px-3 rounded-xl bg-[#0A323A]/95 backdrop-blur-xl border border-[#0E4A55] shadow-2xl text-left min-w-[150px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#A0B1B5] block">
                  Resultado Líquido
                </span>
                <span className="text-base font-mono font-bold text-[#E8A33D] block">
                  12,4% Real
                </span>
                <span className="text-[9px] text-[#A0B1B5] font-mono">
                  Livre de distorções
                </span>
              </div>

              {/* Badge 4: Margem de Contribuição (Bottom Left) */}
              <div className="absolute -left-8 bottom-10 z-30 p-2.5 px-3 rounded-xl bg-[#0A323A]/95 backdrop-blur-xl border border-[#0E4A55] shadow-2xl text-left min-w-[160px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#E8A33D] font-medium block">
                  Margem Contribuição
                </span>
                <span className="text-base font-mono font-bold text-[#F5F3EE] block">
                  34,2% Médio
                </span>
                <span className="text-[9px] text-[#A0B1B5] font-mono">
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
              <div className="absolute -left-10 top-6 z-30 p-2.5 px-3 rounded-xl bg-[#0A323A]/95 backdrop-blur-xl border border-[#0E4A55] shadow-2xl text-left min-w-[150px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#A0B1B5] block">
                  Horizonte
                </span>
                <span className="text-sm font-mono font-bold text-[#F5F3EE] block">
                  Próximos 90 dias
                </span>
                <span className="text-[9px] text-[#2F705B] font-mono font-semibold">
                  Projeção diária
                </span>
              </div>

              {/* Badge 2: Saldo Final Projetado */}
              <div className="absolute -right-10 bottom-8 z-30 p-3 rounded-xl bg-[#0A323A]/95 backdrop-blur-xl border border-[#E8A33D]/60 shadow-2xl text-left min-w-[180px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#E8A33D] font-medium block mb-1">
                  Projeção do Mês
                </span>
                <div className="space-y-0.5 text-[11px] font-mono">
                  <div className="flex justify-between gap-3">
                    <span className="text-[#A0B1B5]">Saldo:</span>
                    <strong className="text-[#F5F3EE]">R$ 842.150</strong>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#2F705B]">Entradas:</span>
                    <span className="text-[#2F705B]/90">R$ 1.420k</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-[#B5412F]">Saídas:</span>
                    <span className="text-[#B5412F]/90">R$ 1.185k</span>
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
              <div className="absolute left-[40%] -top-5 z-30 px-3.5 py-1.5 rounded-xl bg-[#0A323A]/95 backdrop-blur-xl border border-[#E8A33D]/50 shadow-2xl text-center">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#E8A33D] font-medium block">
                  Ciclo Financeiro Total
                </span>
                <span className="text-base font-mono font-bold text-[#F5F3EE]">
                  32 dias <span className="text-[10px] text-[#A0B1B5] font-normal">(-14 dias otimizados)</span>
                </span>
              </div>

              {/* Badge 2: Giro de Estoque */}
              <div className="absolute -left-10 top-8 z-30 p-2.5 px-3 rounded-xl bg-[#0A323A]/95 backdrop-blur-xl border border-[#0E4A55] shadow-2xl text-left min-w-[150px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#A0B1B5] block">
                  Giro Estoque (PME)
                </span>
                <span className="text-base font-mono font-bold text-[#F5F3EE] block">
                  52 dias
                </span>
                <span className="text-[9px] text-[#A0B1B5] font-mono">
                  Curva A/B/C
                </span>
              </div>

              {/* Badge 3: Capital de Giro */}
              <div className="absolute -right-8 bottom-10 z-30 p-2.5 px-3 rounded-xl bg-[#0A323A]/95 backdrop-blur-xl border border-[#0E4A55] shadow-2xl text-left min-w-[160px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#E8A33D] font-medium block">
                  Capital de Giro (NCG)
                </span>
                <span className="text-base font-mono font-bold text-[#F5F3EE] block">
                  R$ 680.000
                </span>
                <span className="text-[9px] text-[#2F705B] font-mono font-semibold">
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
              <div className="absolute -right-8 top-8 z-30 p-3 rounded-xl bg-[#0A323A]/95 backdrop-blur-xl border border-[#E8A33D]/50 shadow-2xl text-left min-w-[170px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#E8A33D] font-medium block">
                  Margem de Contribuição
                </span>
                <span className="text-base font-mono font-bold text-[#E8A33D] block">
                  R$ {activeChannel.margem.toFixed(2)} ({activeChannel.percentual})
                </span>
                <span className="text-[9px] text-[#A0B1B5] font-mono">
                  Sobra líquida por R$ 100
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* -----------------------------------------------------------------------
            ESTRUTURA DO LAPTOP (CHASSIS COMPACTO EM PETRÓLEO ESCURO)
        ----------------------------------------------------------------------- */}
        <div className="relative rounded-t-2xl bg-[#0A323A] p-2 sm:p-2.5 border border-[#0E4A55]/50 shadow-2xl z-20">
          
          {/* Câmera do Laptop */}
          <div className="flex items-center justify-center pb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#07252B] border border-[#0E4A55]"></span>
          </div>

          {/* Tela do Dashboard (min-h compacto) */}
          <div className="rounded-xl bg-[#07252B] border border-[#0E4A55]/40 overflow-hidden text-left min-h-[290px] sm:min-h-[340px] flex flex-col justify-between">
            
            {/* Top Bar do Sistema BI */}
            <div className="px-3.5 sm:px-5 py-2.5 bg-[#061F24] border-b border-[#0E4A55]/30 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#B5412F]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#E8A33D]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#2F705B]"></span>
                </div>
                <div className="h-3.5 w-px bg-[#0E4A55]/50 hidden sm:block"></div>
                <div className="flex items-center gap-1.5 text-[#F5F3EE]/80 text-[11px]">
                  <img src="/brand/mont-finance-icone-ambar.png" alt="Mont" className="h-3.5 w-auto" />
                  <span className="font-semibold text-[#F5F3EE]">Mont Finance BI</span>
                  <span className="text-[#A0B1B5]">/</span>
                  <span className="text-[#E8A33D]">E-commerce</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-[#A0B1B5]">
                <span className="px-2 py-0.5 rounded bg-[#0A323A] border border-[#0E4A55]/40 flex items-center gap-1 text-[#F5F3EE]/70">
                  <Calendar className="w-2.5 h-2.5 text-[#E8A33D]" />
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
                      <div className="p-2 sm:p-2.5 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40">
                        <span className="text-[9px] font-mono uppercase text-[#A0B1B5] block">Receita Líquida</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#F5F3EE]">R$ 3.417.600</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40">
                        <span className="text-[9px] font-mono uppercase text-[#A0B1B5] block">(-) CMV / Custo</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#B5412F]">36,5%</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-[#E8A33D]/10 border border-[#E8A33D]/40">
                        <span className="text-[9px] font-mono uppercase text-[#E8A33D] font-medium block">Margem Contribuição</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#F5F3EE]">34,2% (R$ 1,31M)</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40">
                        <span className="text-[9px] font-mono uppercase text-[#A0B1B5] block">Lucro Líquido Real</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#2F705B]">12,4%</span>
                      </div>
                    </div>

                    {/* Gráfico Waterfall Compacto */}
                    <div className="p-3 sm:p-4 rounded-xl bg-[#061F24] border border-[#0E4A55]/30">
                      <div className="flex justify-between items-center mb-2.5 text-[11px] font-mono">
                        <span className="text-[#F5F3EE]/90 font-medium">Cascata Analítica de Resultado (P&L)</span>
                        <span className="text-[#A0B1B5] text-[10px]">Valores Gerenciais em %</span>
                      </div>

                      <div className="space-y-2 text-[11px]">
                        <div>
                          <div className="flex justify-between font-mono mb-0.5">
                            <span className="text-[#A0B1B5]">Receita Bruta Faturada</span>
                            <span className="text-[#F5F3EE] font-bold">100% (R$ 3.840k)</span>
                          </div>
                          <div className="h-2 rounded-full bg-[#0A323A] overflow-hidden">
                            <div className="h-full bg-[#F5F3EE] w-full rounded-full"></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between font-mono mb-0.5">
                            <span className="text-[#A0B1B5]">(-) CMV / Custo de Produto</span>
                            <span className="text-[#B5412F] font-semibold">-36,5%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-[#0A323A] overflow-hidden">
                            <div className="h-full bg-[#B5412F] w-[36.5%] rounded-full"></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between font-mono mb-0.5">
                            <span className="text-[#A0B1B5]">(-) Mídia, Comissões e Fretes</span>
                            <span className="text-[#E8A33D] font-semibold">-18,3%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-[#0A323A] overflow-hidden">
                            <div className="h-full bg-[#E8A33D] w-[18.3%] rounded-full"></div>
                          </div>
                        </div>

                        <div className="pt-1.5 border-t border-[#0E4A55]/30">
                          <div className="flex justify-between font-mono mb-0.5">
                            <span className="text-[#E8A33D] font-semibold">(=) Margem de Contribuição</span>
                            <span className="text-[#F5F3EE] font-bold">34,2% (R$ 1.313k)</span>
                          </div>
                          <div className="h-2.5 rounded-full bg-[#0A323A] overflow-hidden">
                            <div className="h-full bg-[#E8A33D] w-[34.2%] rounded-full shadow-[0_0_8px_rgba(232,163,61,0.4)]"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Breakdown por Canais */}
                    <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
                      <div className="p-2 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40 flex items-center justify-between">
                        <span className="text-[#A0B1B5]">Site Próprio (D2C)</span>
                        <span className="text-[#2F705B] font-bold">41,2% margem</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40 flex items-center justify-between">
                        <span className="text-[#A0B1B5]">Mercado Livre</span>
                        <span className="text-[#E8A33D] font-bold">28,5% margem</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40 flex items-center justify-between">
                        <span className="text-[#A0B1B5]">Shopee & Outros</span>
                        <span className="text-[#F5F3EE]/80 font-bold">22,0% margem</span>
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
                      <div className="p-2 sm:p-2.5 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40">
                        <span className="text-[9px] font-mono uppercase text-[#A0B1B5] block">Saldo Atual</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#F5F3EE]">R$ 520.400</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40">
                        <span className="text-[9px] font-mono uppercase text-[#A0B1B5] block">Entradas Previstas</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#2F705B]">R$ 1.420.300</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40">
                        <span className="text-[9px] font-mono uppercase text-[#A0B1B5] block">Saídas Previstas</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#B5412F]">R$ 1.185.000</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-[#E8A33D]/10 border border-[#E8A33D]/40">
                        <span className="text-[9px] font-mono uppercase text-[#E8A33D] font-medium block">Saldo Projetado 30d</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#F5F3EE]">R$ 842.150</span>
                      </div>
                    </div>

                    {/* Gráfico de Barras Semanais de Caixa */}
                    <div className="p-3 sm:p-4 rounded-xl bg-[#061F24] border border-[#0E4A55]/30">
                      <div className="flex justify-between items-center mb-3 text-[11px] font-mono">
                        <span className="text-[#F5F3EE]/90 font-medium">Projeção Semanal: Entradas vs Saídas</span>
                        <div className="flex items-center gap-2.5 text-[9px]">
                          <span className="flex items-center gap-1 text-[#2F705B] font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-[#2F705B]"></span> Entradas</span>
                          <span className="flex items-center gap-1 text-[#B5412F] font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-[#B5412F]"></span> Saídas</span>
                        </div>
                      </div>

                      {/* Altura compacta h-28 */}
                      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3 items-end h-28 pt-2 border-b border-[#0E4A55]/30">
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
                              <div style={{ height: `${item.in * 0.85}%` }} className="w-2 bg-[#2F705B] rounded-t-sm"></div>
                              <div style={{ height: `${item.out * 0.85}%` }} className="w-2 bg-[#B5412F] rounded-t-sm"></div>
                            </div>
                            <span className="text-[8px] font-mono text-[#A0B1B5] mt-1">{item.sem}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pt-2 text-[10px] font-mono text-[#A0B1B5]">
                        <span>✦ Ponto Crítico de Caixa (Dia 18) 100% mapeado e coberto</span>
                        <span className="text-[#2F705B] font-semibold">Sem custo de antecipação</span>
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
                      <div className="p-2 sm:p-2.5 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40">
                        <span className="text-[9px] font-mono uppercase text-[#A0B1B5] block">Giro Estoque (PME)</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#F5F3EE]">52 dias</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40">
                        <span className="text-[9px] font-mono uppercase text-[#A0B1B5] block">Recebimento (PMR)</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#F5F3EE]">18 dias</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40">
                        <span className="text-[9px] font-mono uppercase text-[#A0B1B5] block">Fornecedores (PMP)</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#E8A33D]">38 dias</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-[#E8A33D]/10 border border-[#E8A33D]/40">
                        <span className="text-[9px] font-mono uppercase text-[#E8A33D] font-medium block">Ciclo Financeiro</span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#F5F3EE]">32 dias</span>
                      </div>
                    </div>

                    {/* Timeline Compacta */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#061F24] border border-[#0E4A55]/30">
                      <span className="text-[11px] font-mono text-[#F5F3EE]/90 font-medium block mb-2">
                        Linha do Tempo: PME + PMR - PMP = Ciclo de Caixa
                      </span>

                      <div className="relative pt-4 pb-2">
                        <div className="h-1.5 w-full bg-[#0A323A] rounded-full relative">
                          <div className="absolute left-[54%] w-[46%] h-full bg-[#E8A33D] rounded-full shadow-[0_0_8px_rgba(232,163,61,0.4)]"></div>
                        </div>

                        <div className="grid grid-cols-4 gap-1 pt-2.5 text-[10px] font-mono">
                          <div>
                            <span className="text-[#E8A33D] font-bold block">Dia 0</span>
                            <span className="text-[#A0B1B5]">Compra</span>
                          </div>
                          <div>
                            <span className="text-[#F5F3EE] font-bold block">Dia 38</span>
                            <span className="text-[#A0B1B5]">Pagamento (PMP)</span>
                          </div>
                          <div>
                            <span className="text-[#F5F3EE] font-bold block">Dia 52</span>
                            <span className="text-[#A0B1B5]">Venda (PME)</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[#2F705B] font-bold block">Dia 70</span>
                            <span className="text-[#A0B1B5]">Recebimento</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-2 rounded-lg bg-[#E8A33D]/05 border border-[#E8A33D]/20 mt-2 text-[10px] font-mono text-[#F5F3EE]/80 leading-relaxed">
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
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#0E4A55]/30">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider bg-[#E8A33D]/10 text-[#E8A33D] border border-[#E8A33D]/20 font-medium">
                          {activeChannel.tag}
                        </span>
                        <span className="text-[11px] font-mono text-[#A0B1B5]">Simulação R$ 100</span>
                      </div>

                      <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40 overflow-x-auto">
                        {(["consolidado", "site_proprio", "mercado_livre", "shopee"] as ChannelType[]).map((key) => (
                          <button
                            key={key}
                            onClick={() => setSelectedChannel(key)}
                            className={`px-2.5 py-1 rounded text-[10px] font-mono transition-all whitespace-nowrap ${
                              selectedChannel === key 
                                ? "bg-[#E8A33D] text-[#07252B] font-bold shadow-sm" 
                                : "text-[#A0B1B5] hover:text-[#F5F3EE]"
                            }`}
                          >
                            {channelData[key].name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Waterfall Bar */}
                    <div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-[#A0B1B5] mb-1.5">
                        <span>Venda Bruta: R$ 100,00</span>
                        <span className="text-[#E8A33D] font-semibold">Margem: R$ {activeChannel.margem.toFixed(2)} ({activeChannel.percentual})</span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-[#0A323A] overflow-hidden flex shadow-inner">
                        <div style={{ width: `${activeChannel.cmv}%` }} className="bg-[#B5412F] h-full" title="Custo"></div>
                        <div style={{ width: `${activeChannel.midia}%` }} className="bg-[#E8A33D] h-full" title="Mídia"></div>
                        <div style={{ width: `${activeChannel.impostos}%` }} className="bg-[#0E4A55] h-full" title="Impostos"></div>
                        <div style={{ width: `${activeChannel.taxas}%` }} className="bg-sky-600 h-full" title="Comissões"></div>
                        <div style={{ width: `${activeChannel.frete}%` }} className="bg-orange-600 h-full" title="Frete"></div>
                        <div style={{ width: `${activeChannel.margem}%` }} className="bg-[#2F705B] h-full" title="Margem"></div>
                      </div>
                    </div>

                    {/* Grade de Custos Compacta */}
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      <div className="p-2 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40">
                        <span className="text-[9px] font-mono text-[#A0B1B5] block">(-) CMV</span>
                        <span className="text-xs font-mono font-bold text-[#B5412F]">- R$ {activeChannel.cmv.toFixed(2)}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40">
                        <span className="text-[9px] font-mono text-[#A0B1B5] block">(-) Mídia</span>
                        <span className="text-xs font-mono font-bold text-[#E8A33D]">- R$ {activeChannel.midia.toFixed(2)}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40">
                        <span className="text-[9px] font-mono text-[#A0B1B5] block">(-) Impostos</span>
                        <span className="text-xs font-mono font-bold text-teal-400">- R$ {activeChannel.impostos.toFixed(2)}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40">
                        <span className="text-[9px] font-mono text-[#A0B1B5] block">(-) Taxas</span>
                        <span className="text-xs font-mono font-bold text-sky-400">- R$ {activeChannel.taxas.toFixed(2)}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40">
                        <span className="text-[9px] font-mono text-[#A0B1B5] block">(-) Fretes</span>
                        <span className="text-xs font-mono font-bold text-orange-400">- R$ {activeChannel.frete.toFixed(2)}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#2F705B]/15 border border-[#2F705B]/30">
                        <span className="text-[9px] font-mono text-[#2F705B] font-bold block">(=) Margem</span>
                        <span className="text-xs font-mono font-bold text-[#2F705B]">+ R$ {activeChannel.margem.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#0A323A] border border-[#0E4A55]/40 text-[10px] text-[#A0B1B5] font-normal leading-relaxed">
                      *Exemplo ilustrativo com números hipotéticos: a proporção real varia por canal e produto.
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>

          {/* Base do Laptop */}
          <div className="h-2.5 w-full bg-gradient-to-r from-[#07252B] via-[#0E4A55] to-[#07252B] rounded-b-xl shadow-lg relative flex items-center justify-center">
            <div className="w-16 h-0.5 bg-[#0A323A] rounded-full"></div>
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
            className={`px-4 py-1.5 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase transition-all duration-300 ${
              activeTab === tab.id
                ? "border-2 border-[#E8A33D] text-[#07252B] bg-[#E8A33D] shadow-[0_2px_12px_rgba(232,163,61,0.3)] scale-105"
                : "border border-[#0E4A55]/60 text-[#A0B1B5] hover:text-[#F5F3EE] hover:border-[#E8A33D]/60 bg-[#0A323A]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

    </div>
  );
}
