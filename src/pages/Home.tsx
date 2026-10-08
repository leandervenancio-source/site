import { motion } from "motion/react";
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
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { DiagnosticForm } from "../components/DiagnosticForm";

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

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
      icon: BarChart3,
      desc: "Margem por canal e por produto, mix de canais, estoque e giro, orçamento e metas."
    },
    {
      title: "Finanças",
      icon: DollarSign,
      desc: "DRE gerencial, fluxo de caixa, ciclo financeiro e indicadores que sustentam a decisão."
    },
    {
      title: "Tributação",
      icon: Scale,
      desc: "Créditos, riscos e estrutura tributária vistos pelo efeito em preço, margem e caixa.",
      link: "/consultoria-tributaria",
      linkText: "Ver Consultoria Tributária"
    },
    {
      title: "Capital",
      icon: Landmark,
      desc: "Quanto de capital a operação precisa, de que forma captar e como chegar preparado aos bancos.",
      link: "/solucoes-de-capital",
      linkText: "Ver Soluções de Capital"
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

  return (
    <div className="bg-obsidian text-white font-sans selection:bg-accent-premium selection:text-obsidian overflow-x-hidden">
      
      {/* =========================================================================
          1. HERO SECTION
      ========================================================================= */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Glow & Atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-premium via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Top Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-premium/15 border border-accent-premium/40 text-accent-premium text-xs font-bold tracking-[0.25em] uppercase mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent-premium animate-pulse"></span>
                CFO Terceirizado para e-commerce
              </span>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-light leading-[1.12] tracking-tight text-white mb-8">
                <span className="md:whitespace-nowrap">Seu e-commerce fatura.</span>{" "}
                <br className="hidden md:block" />
                <span className="md:whitespace-nowrap">Quanto disso vira <span className="font-serif italic text-accent-premium font-normal">lucro e caixa?</span></span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-white/85 font-light leading-relaxed mb-6 max-w-3xl mx-auto">
                A Mont Finance é o CFO Terceirizado que integra gestão, finanças, tributação e capital para aumentar lucro, gerar caixa e reduzir riscos na sua operação.
              </p>

              <p className="text-xs sm:text-sm text-accent-premium/90 font-medium mb-10 tracking-wide max-w-2xl mx-auto">
                ✦ Para empresas de e-commerce com faturamento acima de R$ 3 milhões por ano, que fabricam e/ou vendem online, no varejo ou no atacado.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a 
                  href="#diagnostico" 
                  className="w-full sm:w-auto px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium hover:bg-white transition-all duration-300 rounded-full shadow-[0_0_35px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] hover:scale-[1.02]"
                >
                  Agendar Diagnóstico
                </a>
                <a 
                  href="#niveis-de-servico" 
                  className="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-white/90 hover:text-white border border-white/20 hover:border-accent-premium transition-all duration-300 rounded-full hover:bg-white/[0.04]"
                >
                  Ver os Níveis de Serviço
                </a>
              </div>

            </motion.div>

          </div>

          {/* =========================================================================
              GRÁFICO ILUSTRATIVO: PARA ONDE VAI CADA R$ 100 VENDIDOS
          ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-6 sm:p-10 rounded-3xl bg-[#121620] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-accent-premium font-bold block mb-1">
                    Exemplo Ilustrativo · Estrutura Econômica do E-commerce
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-white">
                    Para onde vai cada <span className="font-serif italic text-accent-premium">R$ 100 vendidos?</span>
                  </h3>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs text-white/50 block">Margem de Contribuição Final</span>
                  <span className="text-2xl font-mono font-bold text-accent-premium">R$ 13,00 (13%)</span>
                </div>
              </div>

              {/* Waterfall Bar Visual */}
              <div className="space-y-4 mb-8">
                {/* 1. Venda Bruta */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono text-white/80">
                    <span>Venda Bruta (Faturamento)</span>
                    <span className="font-bold text-white">R$ 100,00</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-white rounded-full w-full"></div>
                  </div>
                </div>

                {/* Deductions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-white/50 block">(-) Custo Produto (CMV)</span>
                    <span className="text-sm font-mono font-semibold text-rose-400">R$ 38,00</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-white/50 block">(-) Mídia & Tráfego</span>
                    <span className="text-sm font-mono font-semibold text-rose-400">R$ 18,00</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-white/50 block">(-) Impostos</span>
                    <span className="text-sm font-mono font-semibold text-rose-400">R$ 11,00</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-white/50 block">(-) Comissões / Gateway</span>
                    <span className="text-sm font-mono font-semibold text-rose-400">R$ 12,00</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-white/50 block">(-) Frete & Devoluções</span>
                    <span className="text-sm font-mono font-semibold text-rose-400">R$ 8,00</span>
                  </div>
                </div>

                {/* Result Highlight Card */}
                <div className="p-4 rounded-2xl bg-accent-premium/10 border border-accent-premium/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-premium/20 flex items-center justify-center text-accent-premium">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white">Sobra Real no Caixa da Operação</h4>
                      <p className="text-xs text-white/60">Após todos os custos variáveis diretos</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-mono font-bold text-accent-premium">+ R$ 13,00</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-white/50 font-light leading-relaxed">
                *Exemplo ilustrativo com números hipotéticos: de cada 100 reais de venda, sobram 13 de margem de contribuição depois de comissão, frete, devoluções, impostos, mídia e custo do produto. A proporção real muda por canal, produto e período, e é isso que o diagnóstico mostra.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          2. CAUSA ECONÔMICA (SINTOMAS VS. CAUSAS)
      ========================================================================= */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Causa Econômica
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-6">
              O que parece problema de caixa ou de vendas <br />
              <span className="italic text-accent-premium font-serif">costuma ter outra origem.</span>
            </h2>
            <p className="text-base text-white/80 font-light leading-relaxed">
              Antes de decidir vender mais, vale saber onde o dinheiro está ficando. Estes são sintomas que ouvimos de empresários de e-commerce e as causas que costumam estar por trás:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {symptoms.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-7 rounded-2xl bg-obsidian border border-white/10 hover:border-accent-premium/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="md:w-5/12 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">Você sente</span>
                    <strong className="text-sm font-medium text-white block mt-0.5">{item.symptom}</strong>
                  </div>
                </div>

                <div className="hidden md:block text-accent-premium/40">
                  <ChevronRight className="w-5 h-5" />
                </div>

                <div className="md:w-6/12 flex items-start gap-3 pl-0 md:pl-4 border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0">
                  <div className="w-6 h-6 rounded-full bg-accent-premium/15 text-accent-premium flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent-premium block">Pode estar por trás</span>
                    <p className="text-xs text-white/80 font-light mt-0.5 leading-relaxed">{item.cause}</p>
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
      <section className="py-24 lg:py-32 bg-obsidian relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Integração · O Que Nos Diferencia
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-6">
              Quatro frentes que decidem o seu resultado, <br />
              <span className="italic text-accent-premium font-serif">tratadas juntas.</span>
            </h2>
            <p className="text-base text-white/80 font-light leading-relaxed">
              Na maioria das empresas, gestão, finanças, tributação e capital são tocadas por pessoas diferentes, que nem sempre conversam. Um CFO Terceirizado coloca tudo na mesma mesa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {fourFronts.map((f, i) => (
              <div 
                key={i} 
                className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl hover:border-accent-premium/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent-premium/15 flex items-center justify-center text-accent-premium mb-6">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-white mb-3">{f.title}</h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed mb-6">{f.desc}</p>
                </div>
                {f.link && (
                  <Link 
                    to={f.link} 
                    className="pt-4 border-t border-white/10 text-xs font-bold uppercase tracking-wider text-accent-premium hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    {f.linkText} <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Statement Box */}
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-accent-premium/10 via-white/[0.03] to-transparent border border-accent-premium/30 text-center">
            <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed italic">
              "O imposto muda o preço que você pode praticar. O prazo de recebimento muda o capital de giro que você precisa. O capital muda o quanto dá para crescer. A diferença está em enxergar essas quatro frentes ao mesmo tempo."
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. NÍVEIS DE SERVIÇO (CONTROLADORIA VS CFO TERCEIRIZADO COMPLETO)
      ========================================================================= */}
      <section id="niveis-de-servico" className="py-24 lg:py-32 bg-white/[0.02] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Níveis de Serviço
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-6">
              Dois níveis de CFO Terceirizado, <br />
              <span className="italic text-accent-premium font-serif">conforme o momento da empresa.</span>
            </h2>
            <p className="text-base text-white/80 font-light leading-relaxed">
              Os dois começam pela mesma pergunta: qual é o resultado real do negócio e o que fazer com ele. A diferença está na profundidade do acompanhamento.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            
            {/* Nível 1 - Controladoria */}
            <div className="p-8 sm:p-10 rounded-3xl bg-obsidian border border-white/10 flex flex-col justify-between hover:border-accent-premium/40 transition-all">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent-premium font-bold block mb-2">
                  Nível 1
                </span>
                <h3 className="text-2xl font-display font-medium text-white mb-3">Controladoria</h3>
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
                <span className="text-xs text-white/50 block mb-4">
                  <strong>Indicado para:</strong> quem precisa enxergar a margem real e o caixa com clareza e ainda não tem essa base confiável.
                </span>
                <a 
                  href="#diagnostico" 
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-widest text-white border border-white/20 hover:border-accent-premium hover:text-accent-premium rounded-full text-center block transition-colors"
                >
                  Diagnosticar para Nível 1
                </a>
              </div>
            </div>

            {/* Nível 2 - CFO Terceirizado Completo */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#141824] border border-accent-premium/40 relative flex flex-col justify-between shadow-2xl">
              <div className="absolute top-5 right-6 px-3 py-1 rounded-full bg-accent-premium/20 border border-accent-premium/40 text-[10px] font-mono uppercase tracking-widest text-accent-premium font-bold">
                Mais Procurado
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent-premium font-bold block mb-2">
                  Nível 2
                </span>
                <h3 className="text-2xl font-display font-medium text-white mb-3">CFO Terceirizado Completo</h3>
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
                    <span>Cenários para decisões de estoque, preço, canal e investimento em mídia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0 mt-0.5" />
                    <span>Interlocução estratégica direta e contínua com o CFO</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs text-white/50 block mb-4">
                  <strong>Indicado para:</strong> quem já cresce e precisa de planejamento, cenários e um parceiro estratégico nas decisões financeiras.
                </span>
                <a 
                  href="#diagnostico" 
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-widest text-obsidian bg-accent-premium hover:bg-white rounded-full text-center block transition-colors font-bold shadow-lg shadow-accent-premium/20"
                >
                  Diagnosticar para Nível 2
                </a>
              </div>
            </div>

          </div>

          {/* Serviços Contratados à Parte */}
          <div className="max-w-5xl mx-auto p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-premium font-bold block mb-4">
              Serviços Contratados à Parte
            </span>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-obsidian/70 border border-white/10">
                <h4 className="text-base font-display font-medium text-white mb-2">Inteligência Tributária</h4>
                <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
                  Revisão de créditos e riscos, planejamento e estrutura tributária, sempre conectados ao efeito em margem e caixa.
                </p>
                <Link to="/consultoria-tributaria" className="text-xs font-bold text-accent-premium hover:underline inline-flex items-center gap-1">
                  Saiba mais sobre a Consultoria Tributária <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-5 rounded-2xl bg-obsidian/70 border border-white/10">
                <h4 className="text-base font-display font-medium text-white mb-2">Captação de Recursos (Capital)</h4>
                <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
                  Diagnóstico da necessidade de capital, preparação para captação e relacionamento com instituições financeiras.
                </p>
                <Link to="/solucoes-de-capital" className="text-xs font-bold text-accent-premium hover:underline inline-flex items-center gap-1">
                  Saiba mais sobre as Soluções de Capital <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. MÉTODO DAPE (DO DADO À EXECUÇÃO)
      ========================================================================= */}
      <section className="py-24 lg:py-32 bg-obsidian relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Método DAPE · Metodologia Proprietária
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-6">
              DAPE: do dado à <span className="italic text-accent-premium font-serif">execução.</span>
            </h2>
            <p className="text-base text-white/80 font-light leading-relaxed">
              Um método próprio para sair do número solto e chegar à decisão que muda o resultado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {dapeSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-accent-premium/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent-premium/15 flex items-center justify-center text-accent-premium font-display font-bold text-2xl mb-6 group-hover:scale-110 transition-transform">
                    {step.letter}
                  </div>
                  <h3 className="text-xl font-display font-medium text-white mb-3">
                    {step.letter} — {step.title}
                  </h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. DIAGNÓSTICO & FORMULÁRIO (ENTENDA PARA ONDE VAI O DINHEIRO)
      ========================================================================= */}
      <section id="diagnostico" className="py-24 lg:py-32 bg-[#0e121a] relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Context */}
            <div className="lg:col-span-6">
              <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                Diagnóstico Estratégico
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-6 leading-tight">
                Comece entendendo para onde vai <br />
                <span className="font-serif italic text-accent-premium">o dinheiro da sua operação.</span>
              </h2>
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-8">
                O diagnóstico é uma conversa estratégica com um especialista da Mont Finance sobre a situação do seu e-commerce:
              </p>

              <div className="space-y-4 mb-8 text-sm text-white/85 font-light">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0 mt-0.5" />
                  <span>Mapeamos o que você já sabe e o que ainda não enxerga sobre margem, caixa, estoque e tributos.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0 mt-0.5" />
                  <span>Indicamos por onde começar e se faz sentido a Controladoria, o CFO Terceirizado completo ou outra frente.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0 mt-0.5" />
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
                <p className="text-[11px] text-white/40 pt-1">
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
      <section className="py-24 bg-obsidian relative border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
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
                className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all"
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
