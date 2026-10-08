import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  TrendingUp, 
  BarChart3, 
  Layers, 
  DollarSign, 
  Scale, 
  Landmark, 
  AlertTriangle, 
  Check, 
  Phone, 
  Mail,
  ShieldCheck,
  Building2,
  Users,
  Compass,
  Laptop,
  Coins,
  Cpu,
  Calendar,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { useState } from "react";
import { DiagnosticForm } from "../components/DiagnosticForm";

type ChannelType = "consolidado" | "mercado_livre" | "site_proprio" | "shopee";
type CockpitView = "dre" | "fluxo" | "ciclo";

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedChannel, setSelectedChannel] = useState<ChannelType>("consolidado");
  const [cockpitView, setCockpitView] = useState<CockpitView>("dre");

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

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
      tag: "Exemplo Ilustrativo Geral",
      venda: 100,
      cmv: 38,
      midia: 18,
      impostos: 11,
      taxas: 12,
      frete: 8,
      margem: 13,
      percentual: "13.0%",
      insight: "De cada 100 reais de venda, sobram 13 de margem de contribuição depois de comissão, frete, devoluções, impostos, mídia e custo do produto. Exemplo ilustrativo, com números hipotéticos: a proporção real muda por canal, produto e período, e é isso que o diagnóstico mostra."
    },
    site_proprio: {
      name: "Site Próprio (D2C)",
      tag: "Shopify / VTEX / Nuvemshop",
      venda: 100,
      cmv: 33,
      midia: 25,
      impostos: 10,
      taxas: 4,
      frete: 7,
      margem: 21,
      percentual: "21.0%",
      insight: "No e-commerce próprio não há comissões de marketplace, mas o custo de tráfego pago (CAC/ROAS) exige controle rigoroso diário para não queimar a margem de contribuição."
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
      insight: "Volume alto com margem comprimida: comissões de até 19% somadas a coparticipação em frete obrigatório exigem precificação cirúrgica por anúncio para não gerar faturamento com prejuízo oculto."
    },
    shopee: {
      name: "Shopee & Outros",
      tag: "Marketplaces Secundários",
      venda: 100,
      cmv: 41,
      midia: 8,
      impostos: 10,
      taxas: 20,
      frete: 11,
      margem: 10,
      percentual: "10.0%",
      insight: "Taxas agressivas somadas a frete reverso e devoluções. Um CFO Terceirizado aponta imediatamente quais SKUs devem ou não continuar nesses canais para preservar o caixa."
    }
  };

  const activeChannel = channelData[selectedChannel];

  const symptoms = [
    {
      symptom: "Fatura bem, mas o caixa não acompanha.",
      cause: "Prazo de recebimento longo, estoque parado ou margem menor do que a percebida."
    },
    {
      symptom: "Antecipar recebível virou rotina.",
      cause: "Capital de giro mal dimensionado e ciclo financeiro que pede uma estrutura de capital melhor."
    },
    {
      symptom: "Vende muito em marketplace e sobra pouco.",
      cause: "Comissão, frete, devoluções e mídia somados corroendo a margem por canal."
    },
    {
      symptom: "Decide pela percepção.",
      cause: "Falta de uma DRE gerencial confiável e de indicadores que mostrem o resultado real de cada decisão."
    },
    {
      symptom: "O crédito é caro ou difícil de conseguir.",
      cause: "Números desorganizados para apresentar a bancos e risco tributário que pesa na análise."
    }
  ];

  const fourFronts = [
    {
      frontNumber: "01",
      title: "Gestão",
      desc: "Margem por canal e por produto, mix de canais, estoque e giro, orçamento e metas."
    },
    {
      frontNumber: "02",
      title: "Finanças",
      desc: "DRE gerencial, fluxo de caixa, ciclo financeiro e indicadores que sustentam a decisão."
    },
    {
      frontNumber: "03",
      title: "Tributação",
      desc: "Créditos, riscos e estrutura tributária vistos pelo efeito em preço, margem e caixa.",
      link: "/consultoria-tributaria",
      linkText: "Conhecer Consultoria Tributária"
    },
    {
      frontNumber: "04",
      title: "Capital",
      desc: "Quanto de capital a operação precisa, de que forma captar e como chegar preparado aos bancos.",
      link: "/solucoes-de-capital",
      linkText: "Conhecer Soluções de Capital"
    }
  ];

  const dapeSteps = [
    {
      letter: "D",
      title: "Dados",
      desc: "Reunimos e organizamos as informações financeiras, comerciais e tributárias da operação."
    },
    {
      letter: "A",
      title: "Análise",
      desc: "Identificamos onde estão a margem, o caixa e os riscos, e qual é a causa de cada um."
    },
    {
      letter: "P",
      title: "Planejamento",
      desc: "Transformamos a análise em metas, orçamento e prioridades."
    },
    {
      letter: "E",
      title: "Execução",
      desc: "Acompanhamos a implementação e ajustamos o rumo com base nos números."
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

  const platforms = [
    "Mercado Livre",
    "Shopify",
    "VTEX",
    "Shopee",
    "Amazon",
    "Bling ERP",
    "Tiny ERP",
    "Nuvemshop",
    "Magalu",
    "Omie"
  ];

  return (
    <div className="bg-[#090A0F] text-white font-sans selection:bg-[#d4af37] selection:text-black min-h-screen">
      
      {/* =========================================================================
          1. TOPO & HERO (Copy Original Aprovada + Identidade Visual Mont Finance)
      ========================================================================= */}
      <section id="topo" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/[0.08]">
        
        {/* Soft Ambient Gold/Champagne Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-[radial-gradient(ellipse_at_top,_#d4af37_0%,_transparent_65%)] opacity-15 pointer-events-none blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Tag de Topo com a Logo Oficial */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#d4af37]/30 backdrop-blur-md mb-8">
            <img 
              src="/favicon.png" 
              alt="Mont Finance" 
              className="h-4 w-auto object-contain drop-shadow-[0_0_6px_rgba(212,175,55,0.5)]" 
            />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              CFO Terceirizado para e-commerce
            </span>
          </div>

          {/* Headline Principal da Copy Original */}
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
              Seu e-commerce fatura. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#E5C378] to-[#D4AF37]">
                Quanto disso vira lucro e caixa?
              </span>
            </h1>
          </div>

          {/* Subtítulo da Copy Original */}
          <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
            A Mont Finance é o CFO Terceirizado que integra gestão, finanças, tributação e capital para aumentar lucro, gerar caixa e reduzir riscos na sua operação.
          </p>

          {/* Botões de Ação com Cores da Identidade Visual */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="#diagnostico" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#d4af37] hover:bg-[#c5a059] text-black text-xs font-bold uppercase tracking-[0.15em] transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.02]"
            >
              Agendar diagnóstico
            </a>
            <a 
              href="#niveis-de-servico" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/15 hover:border-[#d4af37]/40 text-xs font-bold uppercase tracking-[0.15em] transition-all"
            >
              Ver os níveis de serviço
            </a>
          </div>

          {/* Qualificação de Público da Copy */}
          <p className="text-xs text-zinc-400 font-mono tracking-wide max-w-2xl mx-auto mb-14">
            ✦ Para empresas de e-commerce com faturamento acima de R$ 3 milhões por ano, que fabricam e/ou vendem online, no varejo ou no atacado.
          </p>

          {/* Ribbon Visual com Estética Fintech Minimalista */}
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] bg-gradient-to-b from-[#0E1118] to-[#090A0F] p-3 sm:p-5 max-w-5xl mx-auto shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
            <div className="relative rounded-2xl overflow-hidden bg-black/60 border border-white/5 p-8 sm:p-12 text-left flex flex-col md:flex-row items-center justify-between gap-8">
              
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37]">
                    Mont Finance · Performance Financeira
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                  Gestão · Finanças · Tributação · Capital
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  Quatro frentes que decidem o seu resultado, tratadas juntas para transformar o caos de números do comércio eletrônico em margem líquida e caixa sustentável.
                </p>
              </div>

              <div className="shrink-0 flex items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-[#d4af37]/20">
                <img 
                  src="/favicon.png" 
                  alt="Mont Finance Emblem" 
                  className="h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" 
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. CARROSSEL DE PLATAFORMAS (Visual Tech & Startup Minimalista)
      ========================================================================= */}
      <section className="py-12 border-b border-white/[0.08] bg-[#0E1118]/40 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Inteligência integrada aos principais marketplaces, ERPs e plataformas de e-commerce
          </p>
        </div>

        {/* Marquee Wrapper com Máscaras de Gradiente */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#090A0F] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#090A0F] to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee py-2 flex items-center gap-12">
            {[...platforms, ...platforms].map((platform, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] whitespace-nowrap text-zinc-400 hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                <span className="text-xs font-mono font-medium tracking-wider">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. GRÁFICO ILUSTRATIVO: PARA ONDE VAI CADA R$ 100 VENDIDOS
      ========================================================================= */}
      <section id="grafico-100" className="py-24 sm:py-32 border-b border-white/[0.08] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-3">
              Gráfico ilustrativo
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-5 leading-tight">
              Para onde vai cada R$ 100 vendidos
            </h2>
            <p className="text-base text-zinc-300 font-light leading-relaxed">
              Exemplo ilustrativo com números hipotéticos: de cada 100 reais de venda, sobram 13 de margem de contribuição depois de comissão, frete, devoluções, impostos, mídia e custo do produto.
            </p>
          </div>

          {/* Cockpit Interativo com a Estética Minimalista */}
          <div className="rounded-3xl bg-[#0E1118] border border-white/[0.08] shadow-[0_30px_100px_rgba(0,0,0,0.6)] overflow-hidden">
            
            {/* Barra de Topo do Cockpit */}
            <div className="px-6 sm:px-8 py-5 bg-black/40 border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src="/favicon.png" alt="Mont" className="h-5 w-auto object-contain" />
                <div>
                  <span className="text-xs font-mono text-zinc-200 font-semibold uppercase tracking-wider block">
                    Mont Finance · Decomposição de Margem de Contribuição
                  </span>
                  <span className="text-[11px] text-zinc-400 font-light">
                    Exemplo ilustrativo com números hipotéticos
                  </span>
                </div>
              </div>

              {/* Seletor de Canais */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 overflow-x-auto">
                {(["consolidado", "site_proprio", "mercado_livre", "shopee"] as ChannelType[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedChannel(key)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                      selectedChannel === key 
                        ? "bg-[#d4af37] text-black font-bold shadow-md" 
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {channelData[key].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Corpo do Cockpit */}
            <div className="p-6 sm:p-10">
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-8 pb-8 border-b border-white/[0.08]">
                <div>
                  <span className="px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 mb-2 inline-block">
                    {activeChannel.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    Simulação dos R$ 100 Faturados
                  </h3>
                </div>

                <div className="bg-white/[0.03] border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
                      Margem de Contribuição Líquida
                    </span>
                    <span className="text-3xl font-mono font-bold text-[#d4af37]">
                      R$ {activeChannel.margem.toFixed(2)} ({activeChannel.percentual})
                    </span>
                  </div>
                </div>
              </div>

              {/* Barra Progressiva Waterfall */}
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs font-mono text-zinc-400 mb-2.5">
                  <span>Venda Bruta: R$ 100,00</span>
                  <span className="text-[#d4af37] font-semibold">Sobra de Margem: R$ {activeChannel.margem.toFixed(2)}</span>
                </div>
                <div className="h-4 w-full rounded-full bg-zinc-800 overflow-hidden flex shadow-inner">
                  <div style={{ width: `${activeChannel.cmv}%` }} className="bg-rose-500 h-full" title="Custo do Produto (CMV)"></div>
                  <div style={{ width: `${activeChannel.midia}%` }} className="bg-amber-500 h-full" title="Mídia & Tráfego"></div>
                  <div style={{ width: `${activeChannel.impostos}%` }} className="bg-purple-500 h-full" title="Impostos"></div>
                  <div style={{ width: `${activeChannel.taxas}%` }} className="bg-blue-500 h-full" title="Comissões & Taxas"></div>
                  <div style={{ width: `${activeChannel.frete}%` }} className="bg-orange-500 h-full" title="Frete & Devoluções"></div>
                  <div style={{ width: `${activeChannel.margem}%` }} className="bg-[#d4af37] h-full" title="Margem de Contribuição"></div>
                </div>
              </div>

              {/* Grade de Custos */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">(-) Custo Produto</span>
                  <span className="text-base font-mono font-bold text-rose-400">- R$ {activeChannel.cmv.toFixed(2)}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">(-) Mídia & Ads</span>
                  <span className="text-base font-mono font-bold text-amber-400">- R$ {activeChannel.midia.toFixed(2)}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">(-) Impostos</span>
                  <span className="text-base font-mono font-bold text-purple-400">- R$ {activeChannel.impostos.toFixed(2)}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">(-) Comissões</span>
                  <span className="text-base font-mono font-bold text-blue-400">- R$ {activeChannel.taxas.toFixed(2)}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">(-) Frete & Devoluções</span>
                  <span className="text-base font-mono font-bold text-orange-400">- R$ {activeChannel.frete.toFixed(2)}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30">
                  <span className="text-[10px] font-mono text-[#d4af37] font-bold block mb-1">(=) Margem Real</span>
                  <span className="text-base font-mono font-bold text-[#E5C378]">+ R$ {activeChannel.margem.toFixed(2)}</span>
                </div>
              </div>

              {/* Nota de rodapé do gráfico da copy original */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs text-zinc-400 font-light leading-relaxed">
                *Exemplo ilustrativo, com números hipotéticos. A proporção real muda por canal, produto e período, e é isso que o diagnóstico mostra.
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. CAUSA ECONÔMICA (Copy Original Aprovada)
      ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0E1118]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-3">
              Causa econômica
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6">
              O que parece problema de caixa ou de vendas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                costuma ter outra origem
              </span>
            </h2>
            <p className="text-base text-zinc-300 font-light leading-relaxed">
              Antes de decidir vender mais, vale saber onde o dinheiro está ficando. Estes são sintomas que ouvimos de empresários de e-commerce e as causas que costumam estar por trás.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {symptoms.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-7 rounded-2xl bg-[#0E1118] border border-white/[0.08] hover:border-[#d4af37]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="md:w-5/12 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-0.5">
                      Você sente:
                    </span>
                    <strong className="text-sm font-semibold text-white block">
                      {item.symptom}
                    </strong>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center text-zinc-600 group-hover:text-[#d4af37] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>

                <div className="md:w-6/12 flex items-start gap-3.5 pl-0 md:pl-6 border-t md:border-t-0 md:border-l border-white/[0.08] pt-4 md:pt-0">
                  <div className="w-8 h-8 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] font-bold block mb-0.5">
                      Pode estar por trás:
                    </span>
                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
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
          5. INTEGRAÇÃO: O QUE NOS DIFERENCIA (As Quatro Frentes da Copy)
      ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-3">
              Integração · O que nos diferencia
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6">
              Quatro frentes que decidem o seu resultado, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#E5C378] to-[#D4AF37]">
                tratadas juntas
              </span>
            </h2>
            <p className="text-base text-zinc-300 font-light leading-relaxed">
              Na maioria das empresas, gestão, finanças, tributação e capital são tocadas por pessoas diferentes, que nem sempre conversam. Um CFO Terceirizado coloca tudo na mesma mesa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {fourFronts.map((f, i) => (
              <div 
                key={i} 
                className="p-8 rounded-3xl bg-[#0E1118] border border-white/[0.08] hover:border-[#d4af37]/40 transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-zinc-300">
                      Frente {f.frontNumber}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed mb-6">{f.desc}</p>
                </div>

                {f.link && (
                  <Link 
                    to={f.link} 
                    className="pt-4 border-t border-white/[0.08] text-xs font-bold text-[#d4af37] hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>{f.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Citação de Integração da Copy Original */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#d4af37]/10 via-white/[0.02] to-transparent border border-[#d4af37]/20 text-center max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-zinc-200 font-light leading-relaxed italic">
              "O imposto muda o preço que você pode praticar. O prazo de recebimento muda o capital de giro que você precisa. O capital muda o quanto dá para crescer. A diferença está em enxergar essas quatro frentes ao mesmo tempo."
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. NÍVEIS DE SERVIÇO (Copy Original Aprovada)
      ========================================================================= */}
      <section id="niveis-de-servico" className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0E1118]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-3">
              Níveis de serviço
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6">
              Dois níveis de CFO Terceirizado, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                conforme o momento da empresa
              </span>
            </h2>
            <p className="text-base text-zinc-300 font-light leading-relaxed">
              Os dois começam pela mesma pergunta: qual é o resultado real do negócio e o que fazer com ele. A diferença está na profundidade do acompanhamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            
            {/* Nível 1 — Controladoria */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1118] border border-white/[0.08] flex flex-col justify-between hover:border-white/20 transition-all">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-2">
                  Nível 1
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">Controladoria</h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed mb-8">
                  Visão de CFO sobre os seus números, para você decidir com base em fatos e não em percepção.
                </p>

                <ul className="space-y-4 mb-8 text-sm text-zinc-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Plano de contas gerencial pensado para e-commerce</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>DRE gerencial com margem por canal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Fluxo de caixa com visão dos próximos meses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Indicadores de acompanhamento e leitura mensal com você</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <span className="text-xs text-zinc-400 block mb-6">
                  <strong>Para quem precisa:</strong> enxergar a margem real e o caixa com clareza e ainda não tem essa base confiável.
                </span>
                <a 
                  href="#diagnostico" 
                  className="w-full py-4 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/15 text-white text-xs font-bold uppercase tracking-[0.15em] text-center block transition-all"
                >
                  Agendar para Nível 1
                </a>
              </div>
            </div>

            {/* Nível 2 — CFO Terceirizado completo */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1118] border-2 border-[#d4af37] relative flex flex-col justify-between shadow-[0_20px_50px_rgba(212,175,55,0.15)]">
              
              <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-[#d4af37] text-black text-[10px] font-mono font-bold uppercase tracking-widest shadow-md">
                Mais Escolhido
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d4af37] block mb-2">
                  Nível 2
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">CFO Terceirizado completo</h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed mb-8">
                  Tudo da Controladoria, mais planejamento financeiro e um CFO como interlocutor direto da sua liderança.
                </p>

                <ul className="space-y-4 mb-8 text-sm text-zinc-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Tudo o que está no nível Controladoria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Orçamento, forecast e análise de variância</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Cenários para decisões de estoque, preço, canal e investimento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Interlocução estratégica direta com o CFO</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <span className="text-xs text-zinc-400 block mb-6">
                  <strong>Para quem precisa:</strong> já cresce e precisa de planejamento, cenários e um parceiro estratégico nas decisões financeiras.
                </span>
                <a 
                  href="#diagnostico" 
                  className="w-full py-4 rounded-full bg-[#d4af37] hover:bg-[#c5a059] text-black text-xs font-bold uppercase tracking-[0.15em] text-center block transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  Agendar para Nível 2
                </a>
              </div>
            </div>

          </div>

          {/* Serviços contratados à parte */}
          <div className="max-w-5xl mx-auto p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold block mb-4">
              Serviços contratados à parte
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#090A0F] border border-white/[0.08]">
                <h4 className="text-base font-bold text-white mb-2">Inteligência Tributária</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                  Revisão de créditos e riscos, planejamento e estrutura tributária, sempre conectados ao efeito em margem e caixa.
                </p>
                <Link to="/consultoria-tributaria" className="text-xs font-bold text-[#d4af37] hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  Ver Consultoria Tributária <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-[#090A0F] border border-white/[0.08]">
                <h4 className="text-base font-bold text-white mb-2">Captação de Recursos</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                  Diagnóstico da necessidade de capital, preparação para captação e relacionamento com instituições financeiras.
                </p>
                <Link to="/solucoes-de-capital" className="text-xs font-bold text-[#d4af37] hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  Ver Soluções de Capital <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. MÉTODO DAPE (Diagrama Circular / Orbital Original com os 3 Cards)
      ========================================================================= */}
      <section id="metodo-dape" className="py-24 sm:py-32 border-b border-white/[0.08] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-3">
              Metodologia
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6">
              DAPE: do dado à <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#E5C378] to-[#D4AF37]">execução</span>
            </h2>
            <p className="text-base text-zinc-300 font-light leading-relaxed">
              Um método próprio para sair do número solto e chegar à decisão que muda o resultado.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left side: Framework Circular (Desktop View) */}
            <div className="lg:col-span-9 relative">
              <div className="hidden md:flex relative w-full max-w-[420px] lg:max-w-[560px] mx-auto aspect-square items-center justify-center">
                
                {/* Rotating Dashed Circle Connector */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[68%] h-[68%] border border-dashed border-white/20 rounded-full z-0"
                ></motion.div>
                
                <div className="absolute inset-0 z-10">
                  {/* Execução (E) - Top Left */}
                  <div className="absolute top-[26%] left-[26%] -translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="relative group">
                        <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-2xl lg:text-4xl font-black shadow-2xl shadow-black/50 border-4 border-[#090A0F] relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                          E
                        </div>
                      </div>
                      <div className="absolute right-full mr-4 text-right w-[160px] lg:w-[220px]">
                        <div className="text-white font-display font-bold text-xl lg:text-2xl leading-none mb-1">Execução</div>
                        <div className="text-[9px] lg:text-[10px] tracking-[0.3em] uppercase text-[#d4af37] font-black mb-1.5">Resultados</div>
                        <p className="text-[11px] lg:text-xs text-white/60 leading-relaxed font-light">Rotinas, processos, acompanhamento de tarefas e uso de metodologias ágeis.</p>
                      </div>
                    </div>
                  </div>

                  {/* Dados (D) - Top Right */}
                  <div className="absolute top-[26%] right-[26%] translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="relative group">
                        <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-2xl lg:text-4xl font-black shadow-2xl shadow-black/50 border-4 border-[#090A0F] relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                          D
                        </div>
                      </div>
                      <div className="absolute left-full ml-4 text-left w-[160px] lg:w-[220px]">
                        <div className="text-white font-display font-bold text-xl lg:text-2xl leading-none mb-1">Dados</div>
                        <div className="text-[9px] lg:text-[10px] tracking-[0.3em] uppercase text-[#d4af37] font-black mb-1.5">Informação</div>
                        <p className="text-[11px] lg:text-xs text-white/60 leading-relaxed font-light">Sistema, processos de registro, indicadores, conciliações e controles padronizados.</p>
                      </div>
                    </div>
                  </div>

                  {/* Planejamento (P) - Bottom Left */}
                  <div className="absolute bottom-[26%] left-[26%] -translate-x-1/2 translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="relative group">
                        <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-2xl lg:text-4xl font-black shadow-2xl shadow-black/50 border-4 border-[#090A0F] relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                          P
                        </div>
                      </div>
                      <div className="absolute right-full mr-4 text-right w-[160px] lg:w-[220px]">
                        <div className="text-white font-display font-bold text-xl lg:text-2xl leading-none mb-1">Planejamento</div>
                        <div className="text-[9px] lg:text-[10px] tracking-[0.3em] uppercase text-[#d4af37] font-black mb-1.5">Prioridades</div>
                        <p className="text-[11px] lg:text-xs text-white/60 leading-relaxed font-light">Definição de objetivos, estratégias, projetos e planos de ação.</p>
                      </div>
                    </div>
                  </div>

                  {/* Análise (A) - Bottom Right */}
                  <div className="absolute bottom-[26%] right-[26%] translate-x-1/2 translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="relative group">
                        <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-2xl lg:text-4xl font-black shadow-2xl shadow-black/50 border-4 border-[#090A0F] relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                          A
                        </div>
                      </div>
                      <div className="absolute left-full ml-4 text-left w-[160px] lg:w-[220px]">
                        <div className="text-white font-display font-bold text-xl lg:text-2xl leading-none mb-1">Análise</div>
                        <div className="text-[9px] lg:text-[10px] tracking-[0.3em] uppercase text-[#d4af37] font-black mb-1.5">Inteligência</div>
                        <p className="text-[11px] lg:text-xs text-white/60 leading-relaxed font-light">Diagnóstico, causas-efeitos, tendências, oportunidades, indicadores e relatórios.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile View (Vertical List) */}
              <div className="md:hidden space-y-4 py-4">
                {[
                  { 
                    letter: "D", 
                    title: "Dados", 
                    subtitle: "Informação", 
                    desc: "Sistema, processos de registro, indicadores, conciliações e controles padronizados." 
                  },
                  { 
                    letter: "A", 
                    title: "Análise", 
                    subtitle: "Inteligência", 
                    desc: "Diagnóstico, causas-efeitos, tendências, oportunidades, indicadores e relatórios." 
                  },
                  { 
                    letter: "P", 
                    title: "Planejamento", 
                    subtitle: "Prioridades", 
                    desc: "Definição de objetivos, estratégias, projetos e planos de ação." 
                  },
                  { 
                    letter: "E", 
                    title: "Execução", 
                    subtitle: "Resultados", 
                    desc: "Rotinas, processos, acompanhamento de tarefas e uso de metodologias ágeis." 
                  }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#0E1118] border border-white/[0.08]"
                  >
                    <div 
                      className="w-14 h-14 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-2xl font-black border-4 border-[#090A0F] mb-3 shadow-xl"
                    >
                      {item.letter}
                    </div>
                    <div className="font-display font-bold text-xl mb-1 text-white">{item.title}</div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-[#d4af37] font-black mb-2">{item.subtitle}</div>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light max-w-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: 3 Cards */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              {[
                { title: "Cultura Data-Driven", desc: "Decisões e equipes guiadas por dados e indicadores claros." },
                { title: "Gestão Ágil", desc: "Processos dinâmicos que eliminam gargalos e aceleram a execução." },
                { title: "Cultura de Melhoria Contínua", desc: "Ações e processos são constantemente aprimorados em busca da excelência." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#0E1118] border border-white/[0.08] hover:border-[#d4af37]/30 transition-all duration-300 text-left">
                  <div className="text-[#d4af37] font-display font-bold text-base mb-2">{item.title}</div>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          8. DIAGNÓSTICO E FORMULÁRIO (Copy Original Aprovada)
      ========================================================================= */}
      <section id="diagnostico" className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0E1118]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Coluna Esquerda: Informações do Diagnóstico */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-3">
                Diagnóstico
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Comece entendendo para onde vai o dinheiro da sua operação
              </h2>
              <p className="text-base text-zinc-300 font-light leading-relaxed mb-8">
                O diagnóstico é uma conversa com um especialista da Mont Finance sobre a situação do seu e-commerce.
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
                  *Os resultados variam conforme o caso de cada empresa. Nenhum resultado é garantido.
                </p>
              </div>
            </div>

            {/* Coluna Direita: Formulário */}
            <div className="lg:col-span-7">
              <DiagnosticForm />
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          9. PERGUNTAS FREQUENTES (Copy Original Aprovada)
      ========================================================================= */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-3">
              Perguntas frequentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              O que empresários de e-commerce perguntam antes de começar
            </h2>
          </div>

          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-5">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 py-2 hover:text-[#d4af37] transition-colors"
                >
                  <span className="text-base font-semibold text-white">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#d4af37] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-white' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="pt-3 pb-2 text-sm text-zinc-300 font-light leading-relaxed">
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
