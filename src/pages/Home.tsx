import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ArrowUpRight,
  Sparkles,
  Phone, 
  Mail
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
      tag: "Visão Geral",
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
      tag: "Canal Direto",
      venda: 100,
      cmv: 33,
      midia: 25,
      impostos: 10,
      taxas: 4,
      frete: 7,
      margem: 21,
      percentual: "21.0%",
      insight: "No e-commerce próprio não há comissões de marketplace, mas o custo de tráfego pago (CAC/ROAS) exige controle diário para não corroer a margem de contribuição."
    },
    mercado_livre: {
      name: "Mercado Livre",
      tag: "Marketplace Core",
      venda: 100,
      cmv: 39,
      midia: 11,
      impostos: 11,
      taxas: 18,
      frete: 9,
      margem: 12,
      percentual: "12.0%",
      insight: "Volume alto com margem comprimida: comissões elevadas e frete obrigatório exigem precificação por SKU para evitar faturamento que dá prejuízo invisível."
    },
    shopee: {
      name: "Shopee / Magalu",
      tag: "Canais Secundários",
      venda: 100,
      cmv: 41,
      midia: 8,
      impostos: 10,
      taxas: 20,
      frete: 11,
      margem: 10,
      percentual: "10.0%",
      insight: "Taxas agressivas somadas à taxa de devolução e frete reverso. Um CFO dedicado aponta quais produtos devem ou não continuar nestes canais."
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
      title: "Gestão",
      desc: "Margem por canal e por produto, mix de canais, estoque e giro, orçamento e metas."
    },
    {
      title: "Finanças",
      desc: "DRE gerencial, fluxo de caixa, ciclo financeiro e indicadores que sustentam a decisão."
    },
    {
      title: "Tributação",
      desc: "Créditos, riscos e estrutura tributária vistos pelo efeito em preço, margem e caixa.",
      link: "/consultoria-tributaria",
      linkText: "Consultoria Tributária"
    },
    {
      title: "Capital",
      desc: "Quanto de capital a operação precisa, de que forma captar e como chegar preparado aos bancos.",
      link: "/solucoes-de-capital",
      linkText: "Soluções de Capital"
    }
  ];

  const dapeSteps = [
    {
      step: "01",
      letter: "D",
      title: "Dados",
      desc: "Reunimos e organizamos as informações financeiras, comerciais e tributárias da operação."
    },
    {
      step: "02",
      letter: "A",
      title: "Análise",
      desc: "Identificamos onde estão a margem, o caixa e os riscos, e qual é a causa de cada um."
    },
    {
      step: "03",
      letter: "P",
      title: "Planejamento",
      desc: "Transformamos a análise em metas, orçamento e prioridades."
    },
    {
      step: "04",
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

  return (
    <div className="bg-[#090A0F] text-zinc-100 font-sans selection:bg-white selection:text-black min-h-screen">
      
      {/* =========================================================================
          1. HERO SECTION (Minimalist Tech Startup Style)
      ========================================================================= */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 border-b border-white/[0.08]">
        {/* Subtle, soft top light glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Minimalist Status Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs font-mono mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>CFO Terceirizado para e-commerce</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium tracking-tight text-white mb-6 leading-[1.08]">
              Seu e-commerce fatura. <br />
              <span className="text-zinc-400 font-normal">Quanto disso vira lucro e caixa?</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
              A Mont Finance é o CFO Terceirizado que integra gestão, finanças, tributação e capital para aumentar lucro, gerar caixa e reduzir riscos na sua operação.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
              <a 
                href="#diagnostico" 
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-medium tracking-wide transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Agendar diagnóstico</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a 
                href="#niveis-de-servico" 
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900/90 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 text-xs font-medium transition-all"
              >
                Ver os níveis de serviço
              </a>
            </div>

            {/* ICP Audience Tag */}
            <p className="text-xs text-zinc-500 font-mono tracking-wide max-w-xl mx-auto">
              Para empresas de e-commerce com faturamento acima de R$ 3 milhões por ano, que fabricam e/ou vendem online, no varejo ou no atacado.
            </p>
          </motion.div>

        </div>

        {/* =========================================================================
            GRÁFICO ILUSTRATIVO: PARA ONDE VAI CADA R$ 100 VENDIDOS (Minimalist SaaS UI)
        ========================================================================= */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="rounded-2xl bg-[#0E1118] border border-white/[0.08] overflow-hidden shadow-2xl">
            
            {/* Top Bar with Channel Controls */}
            <div className="px-5 py-3.5 border-b border-white/[0.06] bg-black/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
                <span className="text-xs font-mono text-zinc-400">Exemplo ilustrativo: estrutura de custos</span>
              </div>

              {/* Minimal Channel Pills */}
              <div className="flex items-center gap-1 overflow-x-auto">
                {(["consolidado", "site_proprio", "mercado_livre", "shopee"] as ChannelType[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedChannel(key)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                      selectedChannel === key 
                        ? "bg-white text-black font-medium" 
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                    }`}
                  >
                    {channelData[key].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Para onde vai cada R$ 100 vendidos?
                  </h3>
                  <span className="text-xs text-zinc-400 font-mono">{activeChannel.tag}</span>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs text-zinc-500 font-mono block">Margem de Contribuição</span>
                  <span className="text-2xl font-mono font-medium text-emerald-400">
                    R$ {activeChannel.margem.toFixed(2)} ({activeChannel.percentual})
                  </span>
                </div>
              </div>

              {/* Monochrome Minimalist Progress Bar */}
              <div className="mb-6">
                <div className="h-2 w-full rounded-full bg-zinc-900 overflow-hidden flex">
                  <div style={{ width: `${activeChannel.cmv}%` }} className="bg-zinc-700 h-full" title={`CMV: R$ ${activeChannel.cmv}`}></div>
                  <div style={{ width: `${activeChannel.midia}%` }} className="bg-zinc-600 h-full" title={`Mídia: R$ ${activeChannel.midia}`}></div>
                  <div style={{ width: `${activeChannel.impostos}%` }} className="bg-zinc-500 h-full" title={`Impostos: R$ ${activeChannel.impostos}`}></div>
                  <div style={{ width: `${activeChannel.taxas}%` }} className="bg-zinc-400 h-full" title={`Taxas: R$ ${activeChannel.taxas}`}></div>
                  <div style={{ width: `${activeChannel.frete}%` }} className="bg-zinc-300 h-full" title={`Frete: R$ ${activeChannel.frete}`}></div>
                  <div style={{ width: `${activeChannel.margem}%` }} className="bg-emerald-400 h-full" title={`Margem: R$ ${activeChannel.margem}`}></div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
                <div className="p-3 rounded-xl bg-black/30 border border-white/[0.04]">
                  <span className="text-[11px] text-zinc-500 block">Custo Produto (CMV)</span>
                  <span className="text-sm font-mono font-medium text-zinc-300">- R$ {activeChannel.cmv.toFixed(2)}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/[0.04]">
                  <span className="text-[11px] text-zinc-500 block">Mídia & Tráfego</span>
                  <span className="text-sm font-mono font-medium text-zinc-300">- R$ {activeChannel.midia.toFixed(2)}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/[0.04]">
                  <span className="text-[11px] text-zinc-500 block">Impostos</span>
                  <span className="text-sm font-mono font-medium text-zinc-300">- R$ {activeChannel.impostos.toFixed(2)}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/[0.04]">
                  <span className="text-[11px] text-zinc-500 block">Comissões</span>
                  <span className="text-sm font-mono font-medium text-zinc-300">- R$ {activeChannel.taxas.toFixed(2)}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/[0.04]">
                  <span className="text-[11px] text-zinc-500 block">Frete & Devoluções</span>
                  <span className="text-sm font-mono font-medium text-zinc-300">- R$ {activeChannel.frete.toFixed(2)}</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                  <span className="text-[11px] text-emerald-400/80 block">Margem Caixa</span>
                  <span className="text-sm font-mono font-medium text-emerald-400">+ R$ {activeChannel.margem.toFixed(2)}</span>
                </div>
              </div>

              {/* Minimal Note */}
              <p className="text-xs text-zinc-500 font-normal leading-relaxed border-t border-white/[0.04] pt-4">
                {activeChannel.insight}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CAUSA ECONÔMICA (Minimalist Comparison List)
      ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
              Causa econômica
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white mb-4">
              O que parece problema de caixa ou de vendas costuma ter outra origem
            </h2>
            <p className="text-sm text-zinc-400 font-normal leading-relaxed">
              Antes de decidir vender mais, vale saber onde o dinheiro está ficando. Estes são sintomas que ouvimos de empresários de e-commerce e as causas que costumam estar por trás:
            </p>
          </div>

          <div className="border-t border-white/[0.08] divide-y divide-white/[0.06]">
            {symptoms.map((item, idx) => (
              <div 
                key={idx} 
                className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start group hover:bg-white/[0.01] transition-colors px-2 rounded-lg"
              >
                <div className="md:col-span-5">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                    Você sente:
                  </span>
                  <p className="text-sm font-medium text-white leading-snug">
                    {item.symptom}
                  </p>
                </div>

                <div className="md:col-span-7">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                    Pode estar por trás:
                  </span>
                  <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                    {item.cause}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. INTEGRAÇÃO (AS 4 FRENTES)
      ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
              Integração · O que nos diferencia
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white mb-4">
              Quatro frentes que decidem o seu resultado, tratadas juntas
            </h2>
            <p className="text-sm text-zinc-400 font-normal leading-relaxed">
              Na maioria das empresas, gestão, finanças, tributação e capital são tocadas por pessoas diferentes, que nem sempre conversam. Um CFO Terceirizado coloca tudo na mesma mesa.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {fourFronts.map((f, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-[#0E1118] border border-white/[0.06] hover:border-white/[0.15] transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-medium text-white mb-2">{f.title}</h3>
                  <p className="text-xs text-zinc-400 font-normal leading-relaxed mb-4">{f.desc}</p>
                </div>

                {f.link && (
                  <Link 
                    to={f.link} 
                    className="text-xs text-zinc-300 hover:text-white inline-flex items-center gap-1 font-medium pt-2 transition-colors"
                  >
                    <span>{f.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Minimalist Statement Callout */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.06]">
            <p className="text-sm text-zinc-300 font-normal leading-relaxed">
              O imposto muda o preço que você pode praticar. O prazo de recebimento muda o capital de giro que você precisa. O capital muda o quanto dá para crescer. A diferença está em enxergar essas quatro frentes ao mesmo tempo.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. NÍVEIS DE SERVIÇO (Clean Pricing/Tier Layout)
      ========================================================================= */}
      <section id="niveis-de-servico" className="py-20 sm:py-28 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
              Níveis de serviço
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white mb-4">
              Dois níveis de CFO Terceirizado, conforme o momento da empresa
            </h2>
            <p className="text-sm text-zinc-400 font-normal leading-relaxed">
              Os dois começam pela mesma pergunta: qual é o resultado real do negócio e o que fazer com ele. A diferença está na profundidade do acompanhamento.
            </p>
          </div>

          {/* 2 Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Nível 1 - Controladoria */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0E1118] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                  Nível 1
                </span>
                <h3 className="text-2xl font-medium text-white mb-2">Controladoria</h3>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed mb-6">
                  Visão de CFO sobre os seus números, para você decidir com base em fatos e não em percepção.
                </p>

                <ul className="space-y-3 mb-8 text-xs text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                    <span>Plano de contas gerencial pensado para e-commerce</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                    <span>DRE gerencial com margem por canal</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                    <span>Fluxo de caixa com visão dos próximos meses</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                    <span>Indicadores de acompanhamento e leitura mensal com você</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <p className="text-xs text-zinc-500 mb-5">
                  Para quem precisa enxergar a margem real e o caixa com clareza e ainda não tem essa base confiável.
                </p>
                <a 
                  href="#diagnostico" 
                  className="w-full py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-medium transition-all text-center block"
                >
                  Agendar para Nível 1
                </a>
              </div>
            </div>

            {/* Nível 2 - CFO Terceirizado Completo */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0E1118] border border-white/[0.18] flex flex-col justify-between relative shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Nível 2
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300">
                    Completo
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-white mb-2">CFO Terceirizado completo</h3>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed mb-6">
                  Tudo da Controladoria, mais planejamento financeiro e um CFO como interlocutor direto da sua liderança.
                </p>

                <ul className="space-y-3 mb-8 text-xs text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                    <span>Tudo o que está no nível Controladoria</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                    <span>Orçamento, forecast e análise de variância</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                    <span>Cenários para decisões de estoque, preço, canal e investimento</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                    <span>Interlocução estratégica direta com o CFO</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <p className="text-xs text-zinc-500 mb-5">
                  Para quem já cresce e precisa de planejamento, cenários e um parceiro estratégico nas decisões financeiras.
                </p>
                <a 
                  href="#diagnostico" 
                  className="w-full py-2.5 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-medium transition-all text-center block shadow-sm"
                >
                  Agendar para Nível 2
                </a>
              </div>
            </div>

          </div>

          {/* Serviços contratados à parte */}
          <div className="rounded-2xl bg-zinc-950/60 border border-white/[0.06] p-6 sm:p-7">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-4">
              Serviços contratados à parte
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-white mb-1">Inteligência Tributária</h4>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed mb-3">
                  Revisão de créditos e riscos, planejamento e estrutura tributária, sempre conectados ao efeito em margem e caixa.
                </p>
                <Link to="/consultoria-tributaria" className="text-xs text-zinc-300 hover:text-white inline-flex items-center gap-1 font-medium">
                  Ver Consultoria Tributária <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div>
                <h4 className="text-sm font-medium text-white mb-1">Captação de Recursos</h4>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed mb-3">
                  Diagnóstico da necessidade de capital, preparação para captação e relacionamento com instituições financeiras.
                </p>
                <Link to="/solucoes-de-capital" className="text-xs text-zinc-300 hover:text-white inline-flex items-center gap-1 font-medium">
                  Ver Soluções de Capital <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. MÉTODO DAPE (Minimalist Linear Process)
      ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
              Método DAPE · Metodologia
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white mb-4">
              DAPE: do dado à execução
            </h2>
            <p className="text-sm text-zinc-400 font-normal leading-relaxed">
              Um método próprio para sair do número solto e chegar à decisão que muda o resultado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dapeSteps.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-[#0E1118] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-mono font-medium text-white">
                      {item.letter}
                    </span>
                    <span className="text-xs font-mono text-zinc-600">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-white mb-2">
                    {item.letter} — {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. DIAGNÓSTICO & FORMULÁRIO (Clean Split)
      ========================================================================= */}
      <section id="diagnostico" className="py-20 sm:py-28 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Context */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
                Diagnóstico
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white mb-4 leading-tight">
                Comece entendendo para onde vai o dinheiro da sua operação
              </h2>
              <p className="text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                O diagnóstico é uma conversa com um especialista da Mont Finance sobre a situação do seu e-commerce.
              </p>

              <ul className="space-y-3.5 mb-8 text-xs text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Mapeamos o que você já sabe e o que ainda não enxerga sobre margem, caixa, estoque e tributos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Indicamos por onde começar e se faz sentido a Controladoria, o CFO Terceirizado completo ou outra frente.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Você sai com clareza sobre os próximos passos, mesmo que decida não contratar.</span>
                </li>
              </ul>

              <p className="text-xs text-zinc-600 font-mono mb-6">
                Os resultados variam conforme o caso de cada empresa. Nenhum resultado é garantido.
              </p>

              <div className="space-y-2 text-xs text-zinc-400 border-t border-white/[0.06] pt-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-zinc-500" />
                  <span>(62) 99920-0405</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  <span>contato@montgestao.com.br</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <DiagnosticForm />
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          7. PERGUNTAS FREQUENTES (FAQ)
      ========================================================================= */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
              Perguntas frequentes
            </span>
            <h2 className="text-3xl font-display font-medium text-white">
              O que empresários de e-commerce perguntam antes de começar
            </h2>
          </div>

          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-4">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 py-2 hover:text-white transition-colors"
                >
                  <span className="text-sm font-medium text-zinc-200">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-white' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="pt-2 pb-3 text-xs text-zinc-400 font-normal leading-relaxed">
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
