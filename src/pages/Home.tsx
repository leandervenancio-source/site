import { motion } from "motion/react";
import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  AlertTriangle, 
  Check, 
  Phone, 
  Mail,
  Linkedin,
  Shield,
  Coins,
  TrendingUp,
  BarChart3,
  Scale
} from "lucide-react";
import { DiagnosticForm } from "../components/DiagnosticForm";
import { FinancialCockpit } from "../components/FinancialCockpit";
import { trackCtaClick, trackWhatsAppClick } from "../lib/analytics";

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

  const threeFronts = [
    {
      frontNumber: "01",
      title: "Finanças",
      desc: "DRE gerencial, margem por canal e por produto, fluxo de caixa, estoque e giro, orçamento e indicadores que sustentam a decisão."
    },
    {
      frontNumber: "02",
      title: "Tributação",
      desc: "Créditos, riscos e estrutura tributária vistos pelo efeito em preço, margem e caixa."
    },
    {
      frontNumber: "03",
      title: "Capital",
      desc: "Quanto de capital a operação precisa, de que forma captar e como chegar preparado aos bancos."
    }
  ];

  const faqs = [
    {
      q: "O que é um CFO Terceirizado?",
      a: "É um profissional de finanças em nível de diretoria que atua na sua empresa sem fazer parte do quadro fixo. Ele cuida da visão financeira estratégica, como margem, caixa, planejamento, risco e capital, e leva esse conhecimento para as decisões do dia a dia."
    },
    {
      q: "A Mont Finance substitui a minha contabilidade?",
      a: "Não. A contabilidade cuida das obrigações fiscais e legais. A Mont Finance trabalha ao lado dela, usando os números para apoiar decisões de finanças, tributação e capital."
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
    <div className="bg-[#090A0F] text-white font-sans selection:bg-[#d4af37] selection:text-black min-h-screen">
      
      {/* =========================================================================
          1 & 2. HERO (Copy Oficial Briefing v2)
      ========================================================================= */}
      <section id="topo" className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-white/[0.08]">
        {/* Soft Ambient Gold Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] bg-[radial-gradient(ellipse_at_top,_#d4af37_0%,_transparent_65%)] opacity-15 pointer-events-none blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge Oficial */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#d4af37]/30 backdrop-blur-md mb-8">
            <img 
              src="/favicon.png" 
              alt="Mont Finance" 
              className="h-4 w-auto object-contain drop-shadow-[0_0_6px_rgba(212,175,55,0.4)]" 
            />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              CFO Terceirizado para e-commerce
            </span>
          </div>

          {/* Headline Principal */}
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
              Seu e-commerce fatura. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#E5C378] to-[#D4AF37]">
                Quanto disso vira lucro e caixa?
              </span>
            </h1>
          </div>

          {/* Frase Central Nova */}
          <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
            A Mont Finance é o CFO Terceirizado que integra finanças, tributação e capital para aumentar lucro, gerar caixa e reduzir riscos na sua operação.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="#diagnostico" 
              onClick={() => trackCtaClick("hero_primary", "Agendar diagnóstico")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#d4af37] hover:bg-[#c5a059] text-black text-xs font-bold uppercase tracking-[0.15em] transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.02]"
            >
              Agendar diagnóstico
            </a>
            <a 
              href="#niveis" 
              onClick={() => trackCtaClick("hero_secondary", "Ver os níveis de serviço")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/15 hover:border-[#d4af37]/40 text-xs font-bold uppercase tracking-[0.15em] transition-all"
            >
              Ver os níveis de serviço
            </a>
          </div>

          {/* Qualificação de Público */}
          <p className="text-xs text-zinc-400 font-mono tracking-wide max-w-2xl mx-auto">
            ✦ Para empresas de e-commerce com faturamento acima de R$ 3 milhões por ano, que fabricam e/ou vendem online, no varejo ou no atacado.
          </p>

        </div>
      </section>

      {/* =========================================================================
          3. FAIXA DE FATOS (Foco > 3M, 3 Frentes, Método DAPE, Nacional)
      ========================================================================= */}
      <section className="py-10 border-b border-white/[0.08] bg-[#0E1118]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01]">
              <span className="text-xl sm:text-2xl font-display font-bold text-white block mb-1">
                Acima de R$ 3 Mi
              </span>
              <span className="text-xs text-zinc-400 font-light leading-snug block">
                Foco em operações com tração e volume de vendas
              </span>
            </div>

            <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01]">
              <span className="text-xl sm:text-2xl font-display font-bold text-[#d4af37] block mb-1">
                3 Frentes
              </span>
              <span className="text-xs text-zinc-400 font-light leading-snug block">
                Finanças, tributação e capital na mesma mesa
              </span>
            </div>

            <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01]">
              <span className="text-xl sm:text-2xl font-display font-bold text-white block mb-1">
                Método DAPE
              </span>
              <span className="text-xs text-zinc-400 font-light leading-snug block">
                Dados, análise, planejamento e execução com rotina
              </span>
            </div>

            <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01]">
              <span className="text-xl sm:text-2xl font-display font-bold text-[#d4af37] block mb-1">
                Nacional
              </span>
              <span className="text-xs text-zinc-400 font-light leading-snug block">
                Atendimento remoto e executivo em todo o Brasil
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CAUSA ECONÔMICA (Sintoma x Causa)
      ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08] bg-[#090A0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-3">
              Causa econômica
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-5 leading-tight">
              O que parece problema de caixa ou de vendas <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                costuma ter outra origem
              </span>
            </h2>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Antes de decidir vender mais, vale saber onde o dinheiro está ficando. Estes são sintomas que ouvimos de empresários de e-commerce e as causas que costumam estar por trás.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3.5">
            {symptoms.map((item, idx) => (
              <div 
                key={idx} 
                className="p-5 sm:p-6 rounded-2xl bg-[#0E1118] border border-white/[0.08] hover:border-[#d4af37]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="md:w-5/12 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
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

                <div className="md:w-6/12 flex items-start gap-3 pl-0 md:pl-5 border-t md:border-t-0 md:border-l border-white/[0.08] pt-3.5 md:pt-0">
                  <div className="w-7 h-7 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
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
          5. GRÁFICO ILUSTRATIVO & COCKPIT DE ANÁLISE (Estilo O2inc · Mont Finance)
      ========================================================================= */}
      <section id="grafico-100" className="py-20 sm:py-28 border-b border-white/[0.08] bg-[#0E1118]/40 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FinancialCockpit />
        </div>
      </section>

      {/* =========================================================================
          6. TRÊS FRENTES INTEGRADAS (Finanças, Tributação e Capital)
      ========================================================================= */}
      <section id="frentes" className="py-20 sm:py-28 border-b border-white/[0.08] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-3">
              Integração
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-5">
              Três frentes que decidem o seu resultado, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#E5C378] to-[#D4AF37]">
                tratadas juntas
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Na maioria das empresas, finanças, tributação e capital são tocadas por pessoas diferentes, que nem sempre conversam. Um CFO Terceirizado coloca tudo na mesma mesa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {threeFronts.map((f, i) => (
              <div 
                key={i} 
                className="p-8 rounded-2xl bg-[#0E1118] border border-white/[0.08] hover:border-[#d4af37]/40 transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-zinc-300">
                      Frente {f.frontNumber}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">{f.desc}</p>
                </div>

                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick(`frente_${f.title.toLowerCase()}`, `Diagnosticar ${f.title}`)}
                  className="pt-4 border-t border-white/[0.08] text-xs font-semibold text-[#d4af37] hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Avaliar {f.title.toLowerCase()} no diagnóstico</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

          {/* Fechamento da Seção Três Frentes */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#d4af37]/10 via-white/[0.02] to-transparent border border-[#d4af37]/20 text-center max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-zinc-200 font-light leading-relaxed italic">
              "O imposto muda o preço que você pode praticar. O prazo de recebimento muda o capital de giro que você precisa. O capital muda o quanto dá para crescer. A diferença está em enxergar essas três frentes ao mesmo tempo."
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. DOIS NÍVEIS DE SERVIÇO & CONTRATÁVEL À PARTE
      ========================================================================= */}
      <section id="niveis" className="py-20 sm:py-28 border-b border-white/[0.08] bg-[#0E1118]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-3">
              Níveis de serviço
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-5">
              Dois níveis de CFO Terceirizado, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                conforme o momento da empresa
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Os dois começam pela mesma pergunta: qual é o resultado real do negócio e o que fazer com ele. A diferença está na profundidade do acompanhamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
            
            {/* Nível 1 — Controladoria */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1118] border border-white/[0.08] flex flex-col justify-between hover:border-white/20 transition-all">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-2">
                  Nível 1
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">Controladoria</h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                  Visão de CFO sobre os seus números, para você decidir com base em fatos e não em percepção.
                </p>

                <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-zinc-300">
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
                <span className="text-xs text-zinc-400 block mb-5 leading-relaxed">
                  <strong>Para quem precisa:</strong> enxergar a margem real e o caixa com clareza e ainda não tem essa base confiável.
                </span>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("nivel_1_controladoria", "Agendar para Nível 1")}
                  className="w-full py-3.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/15 text-white text-xs font-bold uppercase tracking-[0.15em] text-center block transition-all"
                >
                  Agendar para Nível 1
                </a>
              </div>
            </div>

            {/* Nível 2 — CFO Terceirizado completo (SEM selo Mais Escolhido) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1118] border border-[#d4af37]/40 hover:border-[#d4af37] transition-all flex flex-col justify-between shadow-[0_15px_40px_rgba(212,175,55,0.1)]">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d4af37] block mb-2">
                  Nível 2
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">CFO Terceirizado completo</h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                  Tudo da Controladoria, mais planejamento financeiro e um CFO como interlocutor direto da sua liderança.
                </p>

                <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-zinc-300">
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
                <span className="text-xs text-zinc-400 block mb-5 leading-relaxed">
                  <strong>Para quem precisa:</strong> já cresce e precisa de planejamento, cenários e um parceiro estratégico nas decisões financeiras.
                </span>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("nivel_2_cfo_completo", "Agendar para Nível 2")}
                  className="w-full py-3.5 rounded-full bg-[#d4af37] hover:bg-[#c5a059] text-black text-xs font-bold uppercase tracking-[0.15em] text-center block transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                >
                  Agendar para Nível 2
                </a>
              </div>
            </div>

          </div>

          {/* Bloco Curto: Contratável à parte (Tom de processo, sem promessa) */}
          <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08]">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold block mb-1">
                Contratável à parte
              </span>
              <p className="text-xs text-zinc-400 font-light">
                Frentes especializadas que podem ser acionadas de acordo com as necessidades específicas da sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inteligência Tributária */}
              <div className="p-6 rounded-2xl bg-[#090A0F] border border-white/[0.08] flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Inteligência Tributária</h4>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed mb-4">
                    Revisão de créditos e riscos, planejamento e estrutura tributária, sempre conectados ao efeito em preço, margem e caixa.
                  </p>
                  <ul className="space-y-2 mb-4 text-xs text-zinc-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                      Levantamento de possíveis créditos tributários
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                      Revisão do enquadramento e da estrutura tributária
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                      Tributação na formação de preço por canal
                    </li>
                  </ul>
                  <p className="text-[11px] text-zinc-500 italic mb-4 leading-relaxed">
                    *Cada análise depende do caso concreto e de validação técnica. Não há resultado garantido.
                  </p>
                </div>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("contratavel_tributario", "Consultar Inteligência Tributária")}
                  className="text-xs font-bold text-[#d4af37] hover:text-white inline-flex items-center gap-1.5 transition-colors pt-3 border-t border-white/[0.06]"
                >
                  Consultar no diagnóstico <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Captação de Recursos */}
              <div className="p-6 rounded-2xl bg-[#090A0F] border border-white/[0.08] flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Captação de Recursos</h4>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed mb-4">
                    Diagnóstico da necessidade de capital, organização dos números e preparação para conversar com instituições financeiras.
                  </p>
                  <ul className="space-y-2 mb-4 text-xs text-zinc-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                      Diagnóstico do endividamento e do custo do capital
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                      Preparação dos números para análise de crédito
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                      Relacionamento com bancos e outras instituições
                    </li>
                  </ul>
                  <p className="text-[11px] text-zinc-500 italic mb-4 leading-relaxed">
                    *Aprovação, taxas e prazos dependem de cada instituição e do perfil da empresa.
                  </p>
                </div>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("contratavel_capital", "Consultar Captação de Recursos")}
                  className="text-xs font-bold text-[#d4af37] hover:text-white inline-flex items-center gap-1.5 transition-colors pt-3 border-t border-white/[0.06]"
                >
                  Consultar no diagnóstico <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. MÉTODO DAPE (Dados, Análise, Planejamento, Execução)
      ========================================================================= */}
      <section id="metodo-dape" className="py-20 sm:py-28 border-b border-white/[0.08] relative overflow-hidden bg-[#090A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-3">
              Metodologia
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-5">
              DAPE: do dado à <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#E5C378] to-[#D4AF37]">execução</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Um método próprio para sair do número solto e chegar à decisão que muda o resultado.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Diagrama Orbital Circular Desktop */}
            <div className="lg:col-span-8 relative">
              <div className="hidden md:flex relative w-full max-w-[460px] mx-auto aspect-square items-center justify-center">
                
                {/* Rotating Dashed Circle Connector */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[68%] h-[68%] border border-dashed border-white/20 rounded-full z-0"
                ></motion.div>
                
                <div className="absolute inset-0 z-10">
                  {/* Dados (D) - Top Right */}
                  <div className="absolute top-[26%] right-[26%] translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-3xl font-black shadow-2xl border-4 border-[#090A0F] z-10">
                        D
                      </div>
                      <div className="absolute left-full ml-4 text-left w-[180px]">
                        <div className="text-white font-display font-bold text-lg mb-0.5">Dados</div>
                        <div className="text-[9px] tracking-[0.25em] uppercase text-[#d4af37] font-bold mb-1">Organização</div>
                        <p className="text-[11px] text-zinc-400 font-light leading-relaxed">Reunimos e organizamos as informações financeiras, comerciais e tributárias da operação.</p>
                      </div>
                    </div>
                  </div>

                  {/* Análise (A) - Bottom Right */}
                  <div className="absolute bottom-[26%] right-[26%] translate-x-1/2 translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-3xl font-black shadow-2xl border-4 border-[#090A0F] z-10">
                        A
                      </div>
                      <div className="absolute left-full ml-4 text-left w-[180px]">
                        <div className="text-white font-display font-bold text-lg mb-0.5">Análise</div>
                        <div className="text-[9px] tracking-[0.25em] uppercase text-[#d4af37] font-bold mb-1">Diagnóstico</div>
                        <p className="text-[11px] text-zinc-400 font-light leading-relaxed">Identificamos onde estão a margem, o caixa e os riscos, e qual é a causa de cada um.</p>
                      </div>
                    </div>
                  </div>

                  {/* Planejamento (P) - Bottom Left */}
                  <div className="absolute bottom-[26%] left-[26%] -translate-x-1/2 translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-3xl font-black shadow-2xl border-4 border-[#090A0F] z-10">
                        P
                      </div>
                      <div className="absolute right-full mr-4 text-right w-[180px]">
                        <div className="text-white font-display font-bold text-lg mb-0.5">Planejamento</div>
                        <div className="text-[9px] tracking-[0.25em] uppercase text-[#d4af37] font-bold mb-1">Prioridades</div>
                        <p className="text-[11px] text-zinc-400 font-light leading-relaxed">Transformamos a análise em metas, orçamento e prioridades claras de ação.</p>
                      </div>
                    </div>
                  </div>

                  {/* Execução (E) - Top Left */}
                  <div className="absolute top-[26%] left-[26%] -translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-3xl font-black shadow-2xl border-4 border-[#090A0F] z-10">
                        E
                      </div>
                      <div className="absolute right-full mr-4 text-right w-[180px]">
                        <div className="text-white font-display font-bold text-lg mb-0.5">Execução</div>
                        <div className="text-[9px] tracking-[0.25em] uppercase text-[#d4af37] font-bold mb-1">Resultados</div>
                        <p className="text-[11px] text-zinc-400 font-light leading-relaxed">Acompanhamos a implementação e ajustamos o rumo com base contínua nos números.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile View (Sequência D-A-P-E) */}
              <div className="md:hidden space-y-3 py-2">
                {[
                  { letter: "D", title: "Dados", sub: "Organização", desc: "Reunimos e organizamos as informações financeiras, comerciais e tributárias da operação." },
                  { letter: "A", title: "Análise", sub: "Diagnóstico", desc: "Identificamos onde estão a margem, o caixa e os riscos, e qual é a causa de cada um." },
                  { letter: "P", title: "Planejamento", sub: "Prioridades", desc: "Transformamos a análise em metas, orçamento e prioridades claras de ação." },
                  { letter: "E", title: "Execução", sub: "Resultados", desc: "Acompanhamos a implementação e ajustamos o rumo com base contínua nos números." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#0E1118] border border-white/[0.08]">
                    <div className="w-11 h-11 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-xl font-black shrink-0">
                      {item.letter}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-0.5">
                        <span className="font-display font-bold text-white text-base">{item.title}</span>
                        <span className="text-[9px] font-mono uppercase text-[#d4af37] font-bold">{item.sub}</span>
                      </div>
                      <p className="text-xs text-zinc-300 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cards Laterais de Cultura */}
            <div className="lg:col-span-4 flex flex-col gap-3.5">
              {[
                { title: "Cultura Data-Driven", desc: "Decisões e equipes guiadas por dados reais e indicadores confiáveis, sem achismos." },
                { title: "Gestão Ágil", desc: "Processos dinâmicos que eliminam gargalos operacionais e aceleram a tomada de decisão." },
                { title: "Melhoria Contínua", desc: "Ações e indicadores são constantemente ajustados em busca da rentabilidade do caixa." }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#0E1118] border border-white/[0.08] hover:border-[#d4af37]/30 transition-all text-left">
                  <div className="text-[#d4af37] font-display font-bold text-sm mb-1">{item.title}</div>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          9. QUEM CONDUZ (Leander Venâncio, Fundador e Head Advisor)
      ========================================================================= */}
      <section id="quem-conduz" className="py-20 sm:py-28 border-b border-white/[0.08] bg-[#0E1118]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-3">
              Liderança
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Quem conduz o advisory
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              Experiência executiva direta ao lado de fundadores e líderes de empresas em crescimento.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1118] border border-white/[0.08] flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            <div className="shrink-0 relative">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-black/50 shadow-2xl relative">
                <img 
                  src="/assets/Foto Leander (2).png" 
                  alt="Leander Venâncio" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="text-left flex-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37] block mb-1 font-bold">
                Fundador & Head Advisor
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                Leander Venâncio
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-zinc-300 text-[11px] font-mono">
                  FGV Finanças
                </span>
                <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-zinc-300 text-[11px] font-mono">
                  UFG Engenharia
                </span>
                <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-zinc-300 text-[11px] font-mono">
                  +10 anos em gestão financeira
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                Mais de 10 anos atuando diretamente ao lado de empresários na organização de números, recomposição de margens e estruturação de capital. Combina o rigor técnico da engenharia com a visão estratégica financeira para transformar a tomada de decisão no e-commerce.
              </p>

              <a 
                href="https://www.linkedin.com/in/leander-ven%C3%A2ncio-9996ab141/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] hover:text-white transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-[#d4af37] group-hover:text-white transition-colors" />
                <span>Conectar no LinkedIn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          10. DIAGNÓSTICO (Texto + WhatsApp + E-mail + Formulário)
      ========================================================================= */}
      <section id="diagnostico" className="py-20 sm:py-28 border-b border-white/[0.08] bg-[#090A0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Coluna Esquerda: Texto Institucional e Contatos */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-3">
                Diagnóstico
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-5 leading-tight">
                Comece entendendo para onde vai o dinheiro da sua operação
              </h2>
              <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                O diagnóstico é uma conversa com um especialista da Mont Finance sobre a situação do seu e-commerce.
              </p>

              <div className="space-y-3.5 mb-8 text-xs text-zinc-300">
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

              <div className="p-5 rounded-2xl bg-[#0E1118] border border-white/[0.08] space-y-3 text-xs text-zinc-300">
                <a 
                  href="https://wa.me/5562999200405" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackWhatsAppClick("diagnostic_contact_box")}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>WhatsApp: (62) 99920-0405</span>
                </a>
                <a 
                  href="mailto:contato@montgestao.com.br" 
                  className="flex items-center gap-2.5 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#d4af37]" />
                  <span>E-mail: contato@montgestao.com.br</span>
                </a>
                <p className="text-[11px] text-zinc-500 pt-1 leading-relaxed border-t border-white/[0.06]">
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
          11. FAQ CURTO (6 Perguntas Oficiais do Briefing v2)
      ========================================================================= */}
      <section id="faq" className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
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
                  className="w-full text-left flex items-center justify-between gap-4 py-1 hover:text-[#d4af37] transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#d4af37] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-white' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="pt-3 pb-1 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
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
