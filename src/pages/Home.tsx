import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Layers, 
  PieChart, 
  Landmark, 
  Scale, 
  Clock, 
  AlertTriangle, 
  ChevronDown, 
  Check, 
  Phone, 
  Mail,
  Zap,
  Building2,
  Receipt,
  Coins,
  SearchCheck,
  ChevronRight,
  Sliders,
  Sparkles,
  ArrowUpRight,
  TrendingDown,
  Activity,
  Cpu,
  Layers3,
  Compass
} from "lucide-react";
import { useState } from "react";
import { DiagnosticForm } from "../components/DiagnosticForm";

type ChannelType = "consolidado" | "mercado_livre" | "site_proprio" | "shopee";

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedChannel, setSelectedChannel] = useState<ChannelType>("consolidado");

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Dados do Simulador Interativo de DRE (Fintech Interactive Waterfall)
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
    insight: string;
  }> = {
    consolidado: {
      name: "Mix Consolidado",
      tag: "Visão Geral da Operação",
      venda: 100,
      cmv: 38,
      midia: 18,
      impostos: 11,
      taxas: 12,
      frete: 8,
      margem: 13,
      percentual: "13.0%",
      insight: "Exemplo ilustrativo: de cada R$ 100 vendidos, sobram R$ 13 de margem de contribuição depois de comissões, frete, devoluções, impostos, mídia e custo do produto. A proporção real muda por canal, produto e período — e é isso que o diagnóstico mostra."
    },
    site_proprio: {
      name: "Site Próprio (D2C)",
      tag: "Shopify / VTEX / Tray",
      venda: 100,
      cmv: 33,
      midia: 25,
      impostos: 10,
      taxas: 4,
      frete: 7,
      margem: 21,
      percentual: "21.0%",
      insight: "No e-commerce próprio não há comissões de marketplace, mas o custo de tráfego (CAC/ROAS) exige controle rigoroso diário para não queimar a margem de contribuição."
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
      percentual: "12.0%",
      insight: "Volume alto com margem comprimida: comissões de até 19% + frete obrigatório exigem precificação cirúrgica por SKU para não gerar faturamento que dá prejuízo invisível."
    },
    shopee: {
      name: "Shopee / Magalu",
      tag: "Marketplaces Secundários",
      venda: 100,
      cmv: 41,
      midia: 8,
      impostos: 10,
      taxas: 20,
      frete: 11,
      margem: 10,
      percentual: "10.0%",
      insight: "Taxas agressivas combinadas com alta taxa de devolução e frete reverso. Um CFO dedicado aponta imediatamente quais produtos devem ou não continuar nesses canais."
    }
  };

  const activeChannel = channelData[selectedChannel];

  const symptoms = [
    {
      code: "SINTOMA-01",
      symptom: "Fatura bem, mas o caixa não acompanha.",
      cause: "Prazo de recebimento longo, estoque parado ou margem menor do que a percebida.",
      metric: "Giro de Estoque & Ciclo Financeiro"
    },
    {
      code: "SINTOMA-02",
      symptom: "Antecipar recebível virou rotina.",
      cause: "Capital de giro mal dimensionado e ciclo financeiro que pede uma estrutura de capital melhor.",
      metric: "Custo de Antecipação & Liquidez"
    },
    {
      code: "SINTOMA-03",
      symptom: "Vende muito em marketplace e sobra pouco.",
      cause: "Comissão, frete, devoluções e mídia somados corroendo a margem por canal.",
      metric: "Margem de Contribuição Líquida"
    },
    {
      code: "SINTOMA-04",
      symptom: "Decide pela percepção.",
      cause: "Falta de uma DRE gerencial confiável e de indicadores que mostrem o resultado real de cada decisão.",
      metric: "DRE Gerencial em Tempo Real"
    },
    {
      code: "SINTOMA-05",
      symptom: "O crédito é caro ou difícil de conseguir.",
      cause: "Números desorganizados para apresentar a bancos e risco tributário que pesa na análise.",
      metric: "Governança & Rating Bancário"
    }
  ];

  const fourFronts = [
    {
      title: "Gestão",
      subtitle: "Eficiência de Canais & Estoque",
      icon: BarChart3,
      desc: "Margem por canal e por produto, mix de canais, estoque e giro, orçamento e metas.",
      kpi: "Controle por SKU & Canal"
    },
    {
      title: "Finanças",
      subtitle: "Previsibilidade de Caixa",
      icon: DollarSign,
      desc: "DRE gerencial, fluxo de caixa, ciclo financeiro e indicadores que sustentam a decisão.",
      kpi: "Projeção a 90 Dias"
    },
    {
      title: "Tributação",
      subtitle: "Inteligência Fiscal & Créditos",
      icon: Scale,
      desc: "Créditos, riscos e estrutura tributária vistos pelo efeito em preço, margem e caixa.",
      link: "/consultoria-tributaria",
      linkText: "Consultoria Tributária",
      kpi: "Redução Legal da Carga"
    },
    {
      title: "Capital",
      subtitle: "Funding Estruturado",
      icon: Landmark,
      desc: "Quanto de capital a operação precisa, de que forma captar e como chegar preparado aos bancos.",
      link: "/solucoes-de-capital",
      linkText: "Soluções de Capital",
      kpi: "Alongamento de Dívida"
    }
  ];

  const dapeSteps = [
    {
      letter: "D",
      title: "Dados",
      badge: "Fase 01",
      desc: "Reunimos e organizamos as informações financeiras, comerciais e tributárias da operação.",
      tags: ["Integração ERP", "Conciliação", "Padronização"]
    },
    {
      letter: "A",
      title: "Análise",
      badge: "Fase 02",
      desc: "Identificamos onde estão a margem, o caixa e os riscos, e qual é a causa de cada um.",
      tags: ["DRE por Canal", "Custos Ocultos", "Margem Real"]
    },
    {
      letter: "P",
      title: "Planejamento",
      badge: "Fase 03",
      desc: "Transformamos a análise em metas, orçamento e prioridades.",
      tags: ["Orçamento Anual", "Forecast", "Cenários de Caixa"]
    },
    {
      letter: "E",
      title: "Execução",
      badge: "Fase 04",
      desc: "Acompanhamos a implementação e ajustamos o rumo com base nos números.",
      tags: ["Rituais Semanais", "Ajuste Contínuo", "Comitê Executivo"]
    }
  ];

  const faqs = [
    {
      q: "O que é um CFO Terceirizado?",
      a: "É um profissional de finanças em nível de diretoria que atua na sua empresa sem fazer parte do quadro fixo. Ele cuida da visão financeira estratégica, como margem, caixa, planejamento, risco e capital, e leva esse conhecimento para as decisões do dia a dia."
    },
    {
      q: "A Mont Finance substitui a minha contabilidade?",
      a: "Não. A contabilidade cuida das obrigações fiscais e legais. A Mont Finance trabalha ao lado dela, usando os números para apoiar decisões de gestão, finanças, tributação e capital."
    },
    {
      q: "Qual a diferença entre Controladoria e CFO Terceirizado completo?",
      a: "A Controladoria entrega a base de decisão: DRE gerencial, fluxo de caixa e indicadores. O CFO Terceirizado completo soma planejamento (orçamento, forecast e variância) e a interlocução estratégica direta com o CFO."
    },
    {
      q: "Preciso ter uma estrutura financeira pronta para começar?",
      a: "Não. Parte do trabalho é organizar os dados. Quanto mais informação você tiver, mais rápido avançamos, mas o diagnóstico existe justamente para mostrar o ponto de partida."
    },
    {
      q: "Vocês também atuam com impostos e crédito?",
      a: "Sim, como serviços contratados à parte: Inteligência Tributária e Captação de Recursos. Tributos e capital afetam diretamente margem e caixa, por isso aparecem conectados à análise financeira."
    },
    {
      q: "O diagnóstico garante algum resultado?",
      a: "Não. Ele mostra a situação atual e as prioridades. O resultado depende do caso concreto e da execução das decisões tomadas."
    }
  ];

  return (
    <div className="bg-[#090C15] text-white font-sans selection:bg-accent-premium selection:text-obsidian overflow-x-hidden relative">
      
      {/* Background Tech Grid & Atmosphere Lighting */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:44px_44px]"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_0%,#d4af37_0%,transparent_70%)] blur-[100px]"></div>

      {/* =========================================================================
          1. HERO SECTION (Fintech + Boutique Advisory)
      ========================================================================= */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Fintech Interactive Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl text-accent-premium text-xs font-mono font-medium tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:border-accent-premium/40 transition-all cursor-default">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]"></span>
                <span className="text-white/80 font-sans tracking-normal">Financial OS ·</span>
                <span>CFO Terceirizado para e-commerce</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light leading-[1.12] tracking-tight text-white mb-8">
                <span className="md:whitespace-nowrap">Seu e-commerce fatura.</span>{" "}
                <br className="hidden md:block" />
                <span className="md:whitespace-nowrap">Quanto disso vira <span className="font-serif italic text-accent-premium font-normal">lucro e caixa?</span></span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed mb-6 max-w-3xl mx-auto">
                A Mont Finance é o CFO Terceirizado que integra gestão, finanças, tributação e capital para aumentar lucro, gerar caixa e reduzir riscos na sua operação.
              </p>

              {/* Qualification Pill */}
              <div className="inline-block px-5 py-2 rounded-xl bg-white/[0.02] border border-white/5 mb-10">
                <p className="text-xs sm:text-sm text-accent-premium/90 font-mono tracking-wide">
                  ✦ Para empresas de e-commerce com faturamento acima de R$ 3 milhões por ano, que fabricam e/ou vendem online, no varejo ou no atacado.
                </p>
              </div>

              {/* Modern Action Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a 
                  href="#diagnostico" 
                  className="w-full sm:w-auto px-9 py-4 text-xs font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium hover:bg-white transition-all duration-300 rounded-full shadow-[0_0_35px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] hover:scale-[1.02] flex items-center justify-center gap-2 group"
                >
                  <span>Agendar Diagnóstico</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#niveis-de-servico" 
                  className="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-white/90 hover:text-white border border-white/15 hover:border-accent-premium/50 backdrop-blur-md transition-all duration-300 rounded-full hover:bg-white/[0.04]"
                >
                  Ver os Níveis de Serviço
                </a>
              </div>

            </motion.div>

          </div>

          {/* =========================================================================
              FINTECH COCKPIT: INTERACTIVE DRE WATERFALL (R$ 100 VENDIDOS)
          ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-3xl bg-[#0F1322]/90 border border-white/10 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden">
              
              {/* Terminal / App Header */}
              <div className="px-6 py-4 bg-white/[0.02] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-xs font-mono text-white/40 ml-2">mont-finance / simulador-dre-ecommerce</span>
                </div>

                {/* Channel Selector Pills (Interactive) */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 self-start sm:self-auto overflow-x-auto max-w-full">
                  {(["consolidado", "site_proprio", "mercado_livre", "shopee"] as ChannelType[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedChannel(key)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                        selectedChannel === key 
                          ? "bg-accent-premium text-obsidian font-bold shadow-md shadow-accent-premium/20" 
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {channelData[key].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Cockpit Body */}
              <div className="p-6 sm:p-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-8 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-accent-premium/15 text-accent-premium border border-accent-premium/30">
                        {activeChannel.tag}
                      </span>
                      <span className="text-xs text-white/40 font-mono">Simulador Econômico</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
                      Para onde vai cada <span className="font-serif italic text-accent-premium">R$ 100 vendidos?</span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                    <div>
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Margem de Contribuição</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-mono font-bold text-accent-premium">R$ {activeChannel.margem.toFixed(2)}</span>
                        <span className="text-xs font-mono text-emerald-400">({activeChannel.percentual})</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-accent-premium/15 flex items-center justify-center text-accent-premium">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Fintech Multi-segment Waterfall Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center text-xs font-mono text-white/60 mb-2">
                    <span>Faturamento Bruto: R$ {activeChannel.venda.toFixed(2)}</span>
                    <span className="text-accent-premium">Resultado Líquido Operacional</span>
                  </div>
                  
                  {/* Visual Bar with Colored Portions */}
                  <div className="h-4 w-full rounded-full bg-white/10 overflow-hidden flex shadow-inner">
                    <div style={{ width: `${activeChannel.cmv}%` }} className="bg-rose-500/80 h-full" title={`CMV: R$ ${activeChannel.cmv}`}></div>
                    <div style={{ width: `${activeChannel.midia}%` }} className="bg-amber-500/80 h-full" title={`Mídia: R$ ${activeChannel.midia}`}></div>
                    <div style={{ width: `${activeChannel.impostos}%` }} className="bg-purple-500/80 h-full" title={`Impostos: R$ ${activeChannel.impostos}`}></div>
                    <div style={{ width: `${activeChannel.taxas}%` }} className="bg-blue-500/80 h-full" title={`Taxas: R$ ${activeChannel.taxas}`}></div>
                    <div style={{ width: `${activeChannel.frete}%` }} className="bg-orange-500/80 h-full" title={`Frete: R$ ${activeChannel.frete}`}></div>
                    <div style={{ width: `${activeChannel.margem}%` }} className="bg-emerald-400 h-full" title={`Margem: R$ ${activeChannel.margem}`}></div>
                  </div>
                </div>

                {/* Deductions Bento Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-rose-500/30 transition-colors">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      <span className="text-[10px] font-mono text-white/50">Custo Produto</span>
                    </div>
                    <span className="text-base font-mono font-semibold text-rose-400">- R$ {activeChannel.cmv.toFixed(2)}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-colors">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span className="text-[10px] font-mono text-white/50">Mídia & Tráfego</span>
                    </div>
                    <span className="text-base font-mono font-semibold text-amber-400">- R$ {activeChannel.midia.toFixed(2)}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      <span className="text-[10px] font-mono text-white/50">Impostos</span>
                    </div>
                    <span className="text-base font-mono font-semibold text-purple-400">- R$ {activeChannel.impostos.toFixed(2)}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-colors">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span className="text-[10px] font-mono text-white/50">Comissões</span>
                    </div>
                    <span className="text-base font-mono font-semibold text-blue-400">- R$ {activeChannel.taxas.toFixed(2)}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-colors">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      <span className="text-[10px] font-mono text-white/50">Frete & Devoluções</span>
                    </div>
                    <span className="text-base font-mono font-semibold text-orange-400">- R$ {activeChannel.frete.toFixed(2)}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">Margem Caixa</span>
                    </div>
                    <span className="text-base font-mono font-bold text-emerald-300">+ R$ {activeChannel.margem.toFixed(2)}</span>
                  </div>
                </div>

                {/* Insight Callout */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-accent-premium/15 flex items-center justify-center text-accent-premium shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent-premium font-semibold block mb-0.5">
                      Diagnóstico do CFO Mont Finance
                    </span>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      {activeChannel.insight}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          2. CAUSA ECONÔMICA (SINTOMAS VS. CAUSAS)
      ========================================================================= */}
      <section className="py-24 bg-white/[0.015] border-y border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-premium font-mono tracking-[0.25em] uppercase text-xs mb-3 block">
              Diagnóstico de Causa Econômica
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-6">
              O que parece problema de caixa ou de vendas <br />
              <span className="italic text-accent-premium font-serif">costuma ter outra origem.</span>
            </h2>
            <p className="text-base text-white/75 font-light leading-relaxed">
              Antes de decidir vender mais, vale saber onde o dinheiro está ficando. Estes são sintomas que ouvimos de empresários de e-commerce e as causas que costumam estar por trás:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {symptoms.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-7 rounded-2xl bg-[#0F1322]/80 border border-white/10 hover:border-accent-premium/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-5 group backdrop-blur-md"
              >
                {/* Left: What the owner feels */}
                <div className="md:w-5/12 flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">
                      {item.code} · Você sente
                    </span>
                    <strong className="text-sm font-medium text-white block mt-0.5">
                      {item.symptom}
                    </strong>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-8 text-accent-premium/40">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-accent-premium" />
                </div>

                {/* Right: The real cause behind it */}
                <div className="md:w-6/12 flex items-start gap-3.5 pl-0 md:pl-5 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0">
                  <div className="w-7 h-7 rounded-lg bg-accent-premium/15 border border-accent-premium/30 text-accent-premium flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-accent-premium block">
                        Causa Raiz Oculta
                      </span>
                      <span className="text-[9px] font-mono text-white/30 hidden sm:block">
                        {item.metric}
                      </span>
                    </div>
                    <p className="text-xs text-white/80 font-light mt-0.5 leading-relaxed">
                      {item.cause}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. INTEGRAÇÃO (AS 4 FRENTES QUE DECIDEM SEU RESULTADO)
      ========================================================================= */}
      <section className="py-24 lg:py-32 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-premium font-mono tracking-[0.25em] uppercase text-xs mb-3 block">
              Integração · O Que Nos Diferencia
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-6">
              Quatro frentes que decidem o seu resultado, <br />
              <span className="italic text-accent-premium font-serif">tratadas juntas.</span>
            </h2>
            <p className="text-base text-white/75 font-light leading-relaxed">
              Na maioria das empresas, gestão, finanças, tributação e capital são tocadas por pessoas diferentes, que nem sempre conversam. Um CFO Terceirizado coloca tudo na mesma mesa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {fourFronts.map((f, i) => (
              <div 
                key={i} 
                className="p-8 bg-[#0F1322]/80 border border-white/10 rounded-3xl hover:border-accent-premium/40 transition-all duration-300 flex flex-col justify-between backdrop-blur-md group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent-premium/15 border border-accent-premium/30 flex items-center justify-center text-accent-premium group-hover:scale-110 transition-transform">
                      <f.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                      Frente 0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-medium text-white mb-1">{f.title}</h3>
                  <span className="text-xs font-mono text-accent-premium block mb-4">{f.subtitle}</span>
                  <p className="text-xs text-white/70 font-light leading-relaxed mb-6">{f.desc}</p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/40">✦ {f.kpi}</span>
                  {f.link && (
                    <Link 
                      to={f.link} 
                      className="text-xs font-mono font-bold text-accent-premium hover:text-white flex items-center gap-1 transition-colors"
                    >
                      Acessar <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Statement Box */}
          <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-accent-premium/15 via-white/[0.02] to-transparent border border-accent-premium/30 text-center backdrop-blur-md">
            <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed italic">
              "O imposto muda o preço que você pode praticar. O prazo de recebimento muda o capital de giro que você precisa. O capital muda o quanto dá para crescer. A diferença está em enxergar essas quatro frentes ao mesmo tempo."
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. NÍVEIS DE SERVIÇO (TIERS FINTECH: CONTROLADORIA VS CFO COMPLETO)
      ========================================================================= */}
      <section id="niveis-de-servico" className="py-24 lg:py-32 bg-white/[0.015] border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-premium font-mono tracking-[0.25em] uppercase text-xs mb-3 block">
              Níveis de Serviço
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-6">
              Dois níveis de CFO Terceirizado, <br />
              <span className="italic text-accent-premium font-serif">conforme o momento da empresa.</span>
            </h2>
            <p className="text-base text-white/75 font-light leading-relaxed">
              Os dois começam pela mesma pergunta: qual é o resultado real do negócio e o que fazer com ele. A diferença está na profundidade do acompanhamento.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            
            {/* Nível 1 - Controladoria */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0F1322]/80 border border-white/10 flex flex-col justify-between hover:border-accent-premium/40 transition-all backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-white/40 font-bold px-3 py-1 rounded-full bg-white/5 border border-white/5">
                    Nível 01
                  </span>
                  <span className="text-xs font-mono text-accent-premium">Decisão com Base em Fatos</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-3">Controladoria</h3>
                <p className="text-sm text-white/70 font-light leading-relaxed mb-8">
                  Visão de CFO sobre os seus números, para você decidir com base em fatos e não em percepção.
                </p>

                <ul className="space-y-4 mb-8 text-sm text-white/85 font-light">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0 mt-0.5" />
                    <span>Plano de contas gerencial pensado para e-commerce</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0 mt-0.5" />
                    <span>DRE gerencial com margem por canal (site próprio, marketplaces, atacado)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0 mt-0.5" />
                    <span>Fluxo de caixa com visão dos próximos meses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0 mt-0.5" />
                    <span>Indicadores de acompanhamento e leitura mensal com você</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs text-white/50 block mb-5">
                  <strong>Indicado para:</strong> quem precisa enxergar a margem real e o caixa com clareza e ainda não tem essa base confiável.
                </span>
                <a 
                  href="#diagnostico" 
                  className="w-full py-4 text-xs font-mono font-bold uppercase tracking-widest text-white border border-white/20 hover:border-accent-premium hover:text-accent-premium rounded-full text-center block transition-all hover:bg-white/[0.02]"
                >
                  Diagnosticar para Nível 1
                </a>
              </div>
            </div>

            {/* Nível 2 - CFO Terceirizado Completo */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#141A2D] to-[#0D1220] border border-accent-premium/50 relative flex flex-col justify-between shadow-[0_20px_60px_rgba(212,175,55,0.1)] backdrop-blur-xl">
              <div className="absolute top-6 right-6 px-3.5 py-1 rounded-full bg-accent-premium/20 border border-accent-premium/40 text-[10px] font-mono uppercase tracking-widest text-accent-premium font-bold">
                Boutique Full Advisory
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent-premium font-bold px-3 py-1 rounded-full bg-accent-premium/15 border border-accent-premium/30">
                    Nível 02
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-3">CFO Terceirizado Completo</h3>
                <p className="text-sm text-white/70 font-light leading-relaxed mb-8">
                  Tudo da Controladoria, mais planejamento financeiro e um CFO como interlocutor direto da sua liderança.
                </p>

                <ul className="space-y-4 mb-8 text-sm text-white/85 font-light">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0 mt-0.5" />
                    <span>Tudo o que está no nível Controladoria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0 mt-0.5" />
                    <span>Orçamento, forecast e análise rigorosa de variância</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0 mt-0.5" />
                    <span>Cenários para decisões de estoque, preço, canal e investimento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0 mt-0.5" />
                    <span>Interlocução estratégica direta e contínua com o CFO</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs text-white/50 block mb-5">
                  <strong>Indicado para:</strong> quem já cresce e precisa de planejamento, cenários e um parceiro estratégico nas decisões financeiras.
                </span>
                <a 
                  href="#diagnostico" 
                  className="w-full py-4 text-xs font-mono font-bold uppercase tracking-widest text-obsidian bg-accent-premium hover:bg-white rounded-full text-center block transition-all font-bold shadow-lg shadow-accent-premium/20 hover:scale-[1.01]"
                >
                  Diagnosticar para Nível 2
                </a>
              </div>
            </div>

          </div>

          {/* Serviços Contratados à Parte */}
          <div className="max-w-5xl mx-auto p-8 rounded-3xl bg-[#0F1322]/60 border border-white/10 backdrop-blur-md">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-premium font-bold block mb-4">
              Módulos Complementares Especializados
            </span>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-premium/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Scale className="w-5 h-5 text-accent-premium" />
                  <h4 className="text-base font-display font-medium text-white">Inteligência Tributária</h4>
                </div>
                <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
                  Revisão de créditos e riscos, planejamento e estrutura tributária, sempre conectados ao efeito em margem e caixa.
                </p>
                <Link to="/consultoria-tributaria" className="text-xs font-mono font-semibold text-accent-premium hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  Saiba mais sobre a Consultoria Tributária <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-premium/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Landmark className="w-5 h-5 text-accent-premium" />
                  <h4 className="text-base font-display font-medium text-white">Captação de Recursos (Capital)</h4>
                </div>
                <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
                  Diagnóstico da necessidade de capital, preparação para captação e relacionamento com instituições financeiras.
                </p>
                <Link to="/solucoes-de-capital" className="text-xs font-mono font-semibold text-accent-premium hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  Saiba mais sobre as Soluções de Capital <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. MÉTODO DAPE (PIPELINE: DO DADO À EXECUÇÃO)
      ========================================================================= */}
      <section className="py-24 lg:py-32 bg-transparent relative border-t border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-premium font-mono tracking-[0.25em] uppercase text-xs mb-3 block">
              Método DAPE · Pipeline Proprietário
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-6">
              DAPE: do dado à <span className="italic text-accent-premium font-serif">execução.</span>
            </h2>
            <p className="text-base text-white/75 font-light leading-relaxed">
              Um método próprio para sair do número solto e chegar à decisão que muda o resultado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {dapeSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-3xl bg-[#0F1322]/80 border border-white/10 hover:border-accent-premium/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent-premium/15 border border-accent-premium/30 flex items-center justify-center text-accent-premium font-mono font-bold text-2xl group-hover:scale-110 transition-transform">
                      {step.letter}
                    </div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-medium text-white mb-3">
                    {step.letter} — {step.title}
                  </h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {step.tags.map((t, tIdx) => (
                    <span key={tIdx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-white/50 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. DIAGNÓSTICO & FORMULÁRIO (ENTENDA PARA ONDE VAI O DINHEIRO)
      ========================================================================= */}
      <section id="diagnostico" className="py-24 lg:py-32 bg-[#0c101c] relative border-t border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Context */}
            <div className="lg:col-span-6">
              <span className="text-accent-premium font-mono tracking-[0.25em] uppercase text-xs mb-3 block">
                Diagnóstico Estratégico Preliminar
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-6 leading-tight">
                Comece entendendo para onde vai <br />
                <span className="font-serif italic text-accent-premium">o dinheiro da sua operação.</span>
              </h2>
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-8">
                O diagnóstico é uma conversa estratégica com um especialista da Mont Finance sobre a situação do seu e-commerce:
              </p>

              <div className="space-y-4 mb-8 text-sm text-white/85 font-light">
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-accent-premium/20 text-accent-premium flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Mapeamos o que você já sabe e o que ainda não enxerga sobre margem, caixa, estoque e tributos.</span>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-accent-premium/20 text-accent-premium flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Indicamos por onde começar e se faz sentido a Controladoria, o CFO Terceirizado completo ou outra frente.</span>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-accent-premium/20 text-accent-premium flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Você sai com clareza sobre os próximos passos, mesmo que decida não contratar.</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3 text-xs text-white/70">
                <div className="flex items-center gap-2 text-white">
                  <Phone className="w-4 h-4 text-accent-premium" />
                  <span>WhatsApp Comercial: <strong>(62) 99920-0405</strong></span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Mail className="w-4 h-4 text-accent-premium" />
                  <span>E-mail: <strong>contato@montgestao.com.br</strong></span>
                </div>
                <p className="text-[11px] text-white/40 pt-1 font-mono">
                  *Os resultados variam conforme o caso de cada empresa. Nenhum resultado é garantido.
                </p>
              </div>
            </div>

            {/* Right Column: Diagnostic Form */}
            <div className="lg:col-span-6">
              <DiagnosticForm />
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          7. PERGUNTAS FREQUENTES (FAQ)
      ========================================================================= */}
      <section className="py-24 bg-transparent relative border-t border-white/10 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-accent-premium font-mono tracking-[0.25em] uppercase text-xs mb-3 block">
              Dúvidas Comuns
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-white">
              O que empresários de e-commerce <br />
              <span className="italic text-accent-premium font-serif">perguntam antes de começar</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-white/10 bg-[#0F1322]/80 backdrop-blur-md overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-base font-display font-medium text-white">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-accent-premium shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-white/70 font-light leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
