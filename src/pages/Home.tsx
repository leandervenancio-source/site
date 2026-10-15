import { motion } from "motion/react";
import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  AlertTriangle, 
  Check, 
  X,
  Phone, 
  Mail,
  Linkedin,
  ShieldCheck,
  Target,
  Sparkles
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

  const comparisonRows = [
    {
      criteria: "Papel na sua empresa",
      mont: "Senta na mesa de decisão como CFO: orienta precificação, corte de desperdícios e alocação de caixa.",
      bpo: "Operacional burocrático: digita boletos, emite notas e concilia contas sem analisar o negócio.",
      consultoria: "Teórico e distante: entrega uma planilha pesada ou slides e você executa sozinho."
    },
    {
      criteria: "Especialização em E-commerce",
      mont: "100% focado na dinâmica digital: taxas de marketplace, frete, devoluções, estoque e NCG.",
      bpo: "Atendimento genérico: trata sua loja online igual a uma padaria ou escritório.",
      consultoria: "Modelos tradicionais corporativos que ignoram o descasamento de caixa do e-commerce."
    },
    {
      criteria: "Três Frentes Integradas",
      mont: "Finanças, Tributação e Capital analisados juntos para maximizar margem e preservar caixa.",
      bpo: "Olha apenas a guia de imposto a pagar, sem analisar o impacto tributário na margem por canal.",
      consultoria: "Analisa custos isolados sem conexão com planejamento tributário e crédito bancário."
    },
    {
      criteria: "Rotina e Acompanhamento",
      mont: "Presença contínua: reuniões executivas mensais, leitura de variância e forecast dos próximos meses.",
      bpo: "Visão pelo retrovisor: fecha o balancete fiscal semanas após o mês terminar.",
      consultoria: "Projeto pontual com início e fim, sem acompanhamento da implementação prática."
    },
    {
      criteria: "Foco no Resultado Final",
      mont: "Lucro líquido real no bolso, previsibilidade no fluxo de caixa e redução estrutural de riscos.",
      bpo: "Apenas conformidade legal para evitar multas de órgãos fiscais.",
      consultoria: "Foco na entrega do relatório contratado, independentemente do caixa melhorar."
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
    <div className="font-sans selection:bg-[#E8A33D] selection:text-[#071A1E] min-h-screen bg-[#071A1E]">
      
      {/* =========================================================================
          1 & 2. HERO — [ESTILO GROWTH MACHINE: Dark Mesh, Gradient Headline, High-Impact CTAs]
      ========================================================================= */}
      <section id="topo" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-[#051214] via-[#071A1E] to-[#0A272D] text-white border-b border-white/10">
        
        {/* Glow de Fundo e Malha Tecnológica */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[620px] bg-[radial-gradient(ellipse_at_top,_rgba(14,74,85,0.5)_0%,_rgba(232,163,61,0.12)_45%,_transparent_75%)] opacity-70 pointer-events-none blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge Estilo Growth Machine com Ponto Pulsante */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E8A33D]/10 border border-[#E8A33D]/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(232,163,61,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#E8A33D] animate-pulse"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E8A33D]">
              CFO Terceirizado para e-commerce
            </span>
          </div>

          {/* Headline Principal em Manrope ExtraBold com Gradiente */}
          <div className="max-w-4xl mx-auto mb-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
              Seu e-commerce fatura. <br />
              <span className="block mt-2 gradiente font-extrabold">
                Quanto disso vira lucro e caixa?
              </span>
            </h1>
          </div>

          {/* Frase Central Nova */}
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-3xl mx-auto">
            A Mont Finance é o CFO Terceirizado que integra finanças, tributação e capital para aumentar lucro, gerar caixa e reduzir riscos na sua operação.
          </p>

          {/* CTAs de Alto Impacto Estilo Growth Machine */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="#diagnostico" 
              onClick={() => trackCtaClick("hero_primary", "Agendar diagnóstico")}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] hover:from-[#D4932D] hover:to-[#E8A33D] text-[#071A1E] text-xs font-extrabold uppercase tracking-wider transition-all shadow-[0_8px_30px_rgba(232,163,61,0.35)] hover:shadow-[0_12px_36px_rgba(232,163,61,0.5)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <span>Agendar diagnóstico gratuito</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
            <a 
              href="#niveis" 
              onClick={() => trackCtaClick("hero_secondary", "Ver os níveis de serviço")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>Ver os níveis de serviço</span>
            </a>
          </div>

          {/* Qualificação de Público */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 max-w-2xl mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#E8A33D] shrink-0" />
            <span>Para empresas de e-commerce com faturamento acima de R$ 3 milhões por ano.</span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. FAIXA DE IMPACTO / FATOS — [ESTILO GROWTH MACHINE: Counter Cards com Glow]
      ========================================================================= */}
      <section className="py-12 border-b border-white/10 bg-[#061417]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            
            <div className="p-6 rounded-2xl border border-white/10 bg-[#0A272D]/60 backdrop-blur-sm shadow-lg hover:border-[#E8A33D]/40 hover:-translate-y-1 transition-all">
              <span className="text-2xl sm:text-3xl font-extrabold text-white block mb-1 tracking-tight">
                Acima de R$ 3 Mi
              </span>
              <span className="text-xs text-slate-400 font-medium leading-snug block">
                Foco em operações com tração e volume de vendas
              </span>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0A272D]/60 backdrop-blur-sm shadow-lg hover:border-[#E8A33D]/40 hover:-translate-y-1 transition-all">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#E8A33D] block mb-1 tracking-tight">
                3 Frentes
              </span>
              <span className="text-xs text-slate-400 font-medium leading-snug block">
                Finanças, tributação e capital na mesma mesa
              </span>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0A272D]/60 backdrop-blur-sm shadow-lg hover:border-[#E8A33D]/40 hover:-translate-y-1 transition-all">
              <span className="text-2xl sm:text-3xl font-extrabold text-white block mb-1 tracking-tight">
                Método DAPE
              </span>
              <span className="text-xs text-slate-400 font-medium leading-snug block">
                Dados, análise, planejamento e execução com rotina
              </span>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0A272D]/60 backdrop-blur-sm shadow-lg hover:border-[#E8A33D]/40 hover:-translate-y-1 transition-all">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#E8A33D] block mb-1 tracking-tight">
                Nacional
              </span>
              <span className="text-xs text-slate-400 font-medium leading-snug block">
                Atendimento remoto e executivo em todo o Brasil
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CAUSA ECONÔMICA (Sintoma x Causa) — [SESSÃO CLARA ESTILO GROWTH MACHINE]
      ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F4F6F7] text-slate-900 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E4A55]/10 border border-[#0E4A55]/30 text-[11px] font-bold uppercase tracking-wider text-[#0E4A55] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A55]"></span>
              Causa Econômica
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              O que parece problema de caixa ou de vendas <br className="hidden sm:inline" />
              <span className="text-[#0E4A55]">costuma ter outra origem</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Antes de decidir vender mais, vale saber onde o dinheiro está ficando. Estes são sintomas que ouvimos de empresários de e-commerce e as causas que costumam estar por trás.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {symptoms.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0E4A55] hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 group"
              >
                <div className="md:w-5/12 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 text-[#EF4444] flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Você sente:
                    </span>
                    <strong className="text-sm font-bold text-slate-900 block leading-snug">
                      {item.symptom}
                    </strong>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center text-slate-300 group-hover:text-[#0E4A55] transition-colors">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>

                <div className="md:w-6/12 flex items-start gap-3.5 pl-0 md:pl-5 border-t md:border-t-0 md:border-l border-slate-100 pt-3.5 md:pt-0">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-200 text-[#0E4A55] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E4A55] block mb-0.5">
                      Pode estar por trás:
                    </span>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
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
          5. GRÁFICO ILUSTRATIVO & COCKPIT DE ANÁLISE — [SESSÃO ESCURA: #071A1E]
      ========================================================================= */}
      <section id="grafico-100" className="py-16 sm:py-24 bg-[#071A1E] text-white border-b border-white/10 relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0E4A55]/30 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FinancialCockpit />
        </div>
      </section>

      {/* =========================================================================
          6. TRÊS FRENTES INTEGRADAS & TABELA COMPARATIVA — [SESSÃO CLARA: #F4F6F7]
      ========================================================================= */}
      <section id="frentes" className="py-20 sm:py-28 bg-[#F4F6F7] text-slate-900 border-b border-slate-200 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E4A55]/10 border border-[#0E4A55]/30 text-[11px] font-bold uppercase tracking-wider text-[#0E4A55] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A55]"></span>
              Três Frentes Integradas
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              Três frentes que decidem o seu resultado, <br className="hidden sm:inline" />
              <span className="text-[#0E4A55]">tratadas juntas</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Na maioria das empresas, finanças, tributação e capital são tocadas por pessoas diferentes, que nem sempre conversam. Um CFO Terceirizado coloca tudo na mesma mesa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {threeFronts.map((f, i) => (
              <div 
                key={i} 
                className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0E4A55] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-[#0E4A55]/05 to-transparent rounded-bl-full pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-[#0E4A55]/40 tracking-tight font-mono">
                      0{f.frontNumber}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D] ring-4 ring-[#E8A33D]/20"></span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    {f.desc}
                  </p>
                </div>

                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick(`frente_${f.title.toLowerCase()}`, `Diagnosticar ${f.title}`)}
                  className="pt-4 border-t border-slate-100 text-xs font-bold text-[#0E4A55] hover:text-[#E8A33D] flex items-center justify-between transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Avaliar {f.title.toLowerCase()} no diagnóstico</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            ))}
          </div>

          {/* Fechamento da Seção Três Frentes (Banner Callout Moderno) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border-l-4 border-l-[#0E4A55] border border-slate-200/90 shadow-sm max-w-4xl mx-auto mb-24">
            <p className="text-sm sm:text-base text-slate-800 font-semibold italic leading-relaxed text-center">
              "O imposto muda o preço que você pode praticar. O prazo de recebimento muda o capital de giro que você precisa. O capital muda o quanto dá para crescer. A diferença está em enxergar essas três frentes ao mesmo tempo."
            </p>
          </div>

          {/* =========================================================================
              BLOCO COMPARATIVO (Estilo Growth Machine: "Nós vs O Mercado")
          ========================================================================= */}
          <div id="comparativo" className="pt-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E4A55]/10 border border-[#0E4A55]/30 text-[11px] font-bold uppercase tracking-wider text-[#0E4A55] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A55]"></span>
                Posicionamento
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
                Por que a contabilidade comum ou uma consultoria teórica <br className="hidden sm:inline" />
                <span className="text-[#0E4A55]">não resolvem o seu caixa?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                Enquanto o BPO apenas digita notas fiscais e consultores entregam slides e vão embora, a Mont Finance assume a cadeira executiva de finanças do seu e-commerce com você.
              </p>
            </div>

            {/* Tabela Desktop */}
            <div className="hidden md:block overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl max-w-5xl mx-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/70">
                    <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/4">
                      O que sua operação precisa
                    </th>
                    <th className="p-5 text-xs font-extrabold uppercase tracking-wider text-white bg-[#0E4A55] border-x border-[#0E4A55] w-1/3 shadow-sm">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#E8A33D]" />
                        <span>Mont Finance (CFO Terceirizado)</span>
                      </div>
                    </th>
                    <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/5">
                      Contabilidade / BPO
                    </th>
                    <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/5">
                      Consultoria Tradicional
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-5 font-bold text-slate-800 align-top">
                        {row.criteria}
                      </td>
                      <td className="p-5 bg-[#0E4A55]/05 border-x border-[#0E4A55]/15 text-slate-900 font-semibold align-top leading-relaxed">
                        <div className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{row.mont}</span>
                        </div>
                      </td>
                      <td className="p-5 text-slate-500 font-normal align-top leading-relaxed">
                        <div className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span>{row.bpo}</span>
                        </div>
                      </td>
                      <td className="p-5 text-slate-500 font-normal align-top leading-relaxed">
                        <div className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span>{row.consultoria}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Versão Mobile (Cards de Comparação) */}
            <div className="md:hidden space-y-4">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                    {row.criteria}
                  </div>
                  
                  <div className="p-3.5 rounded-xl bg-[#0E4A55]/08 border border-[#0E4A55]/30 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E4A55] flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" /> Mont Finance
                    </span>
                    <p className="text-xs text-slate-900 font-semibold leading-relaxed">{row.mont}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500 pt-1">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="font-bold block text-slate-700 mb-0.5">Contabilidade:</span>
                      {row.bpo}
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="font-bold block text-slate-700 mb-0.5">Consultoria:</span>
                      {row.consultoria}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          7. DOIS NÍVEIS DE SERVIÇO & CONTRATÁVEL À PARTE — [SESSÃO ESCURA: #071A1E]
      ========================================================================= */}
      <section id="niveis" className="py-20 sm:py-28 bg-[#071A1E] text-white border-b border-white/10 relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#E8A33D]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-wider text-[#F5B85D] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
              Níveis de Serviço
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Dois níveis de CFO Terceirizado, <br className="hidden sm:inline" />
              <span className="text-[#F5B85D]">conforme o momento da empresa</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Os dois começam pela mesma pergunta: qual é o resultado real do negócio e o que fazer com ele. A diferença está na profundidade do acompanhamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
            
            {/* Nível 1 — Controladoria */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0A272D]/90 border border-white/10 hover:border-white/20 flex flex-col justify-between transition-all duration-300 shadow-xl group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-slate-300">
                    Nível 1
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  Controladoria
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6">
                  Visão de CFO sobre os seus números, para você decidir com base em fatos e não em percepção.
                </p>

                <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>Plano de contas gerencial pensado para e-commerce</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>DRE gerencial com margem por canal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>Fluxo de caixa com visão dos próximos meses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>Indicadores de acompanhamento e leitura mensal com você</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs text-slate-400 block mb-5 leading-relaxed">
                  <strong className="text-slate-200">Para quem precisa:</strong> enxergar a margem real e o caixa com clareza e ainda não tem essa base confiável.
                </span>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("nivel_1_controladoria", "Agendar para Nível 1")}
                  className="w-full py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-extrabold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all"
                >
                  <span>Agendar para Nível 1</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Nível 2 — CFO Terceirizado completo */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0A272D] border-2 border-[#E8A33D] transition-all flex flex-col justify-between shadow-[0_0_50px_rgba(232,163,61,0.2)] relative">
              <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] text-[#071A1E] text-[10px] font-black uppercase tracking-wider shadow-md">
                Mais Completo
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E8A33D]/20 text-[#F5B85D]">
                    Nível 2
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  CFO Terceirizado completo
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6">
                  Tudo da Controladoria, mais planejamento financeiro e um CFO como interlocutor direto da sua liderança.
                </p>

                <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span className="font-semibold text-white">Tudo o que está no nível Controladoria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>Orçamento, forecast e análise de variância</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>Cenários para decisões de estoque, preço, canal e investimento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>Interlocução estratégica direta com o CFO</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs text-slate-400 block mb-5 leading-relaxed">
                  <strong className="text-slate-200">Para quem precisa:</strong> já cresce e precisa de planejamento, cenários e um parceiro estratégico nas decisões financeiras.
                </span>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("nivel_2_cfo_completo", "Agendar para Nível 2")}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] hover:from-[#F5B85D] hover:to-[#E8A33D] text-[#071A1E] text-xs font-black uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(232,163,61,0.35)] hover:scale-[1.02]"
                >
                  <span>Agendar para Nível 2</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </a>
              </div>
            </div>

          </div>

          {/* Bloco Curto: Contratável à parte */}
          <div className="max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#071A1E] border border-white/10 shadow-2xl">
            <div className="mb-8 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5B85D] block mb-1">
                Contratável à parte
              </span>
              <p className="text-xs sm:text-sm text-slate-300 font-normal">
                Frentes especializadas que podem ser acionadas de acordo com as necessidades específicas da sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inteligência Tributária */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0A272D] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-extrabold text-white tracking-tight mb-2">
                    Inteligência Tributária
                  </h4>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed mb-5">
                    Revisão de créditos e riscos, planejamento e estrutura tributária, sempre conectados ao efeito em preço, margem e caixa.
                  </p>
                  <ul className="space-y-2.5 mb-5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
                      Levantamento de possíveis créditos tributários
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
                      Revisão do enquadramento e da estrutura tributária
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
                      Tributação na formação de preço por canal
                    </li>
                  </ul>
                  <p className="text-[11px] text-slate-400 italic mb-4 leading-relaxed">
                    *Cada análise depende do caso concreto e de validação técnica. Não há resultado garantido.
                  </p>
                </div>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("contratavel_tributario", "Consultar Inteligência Tributária")}
                  className="text-xs font-bold text-[#F5B85D] hover:text-white inline-flex items-center gap-1.5 transition-colors pt-4 border-t border-white/10"
                >
                  Consultar no diagnóstico <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Captação de Recursos */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0A272D] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-extrabold text-white tracking-tight mb-2">
                    Captação de Recursos
                  </h4>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed mb-5">
                    Diagnóstico da necessidade de capital, organização dos números e preparação para conversar com instituições financeiras.
                  </p>
                  <ul className="space-y-2.5 mb-5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
                      Diagnóstico do endividamento e do custo do capital
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
                      Preparação dos números para análise de crédito
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
                      Relacionamento com bancos e outras instituições
                    </li>
                  </ul>
                  <p className="text-[11px] text-slate-400 italic mb-4 leading-relaxed">
                    *Aprovação, taxas e prazos dependem de cada instituição e do perfil da empresa.
                  </p>
                </div>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("contratavel_capital", "Consultar Captação de Recursos")}
                  className="text-xs font-bold text-[#F5B85D] hover:text-white inline-flex items-center gap-1.5 transition-colors pt-4 border-t border-white/10"
                >
                  Consultar no diagnóstico <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. MÉTODO DAPE (Dados, Análise, Planejamento, Execução) — [SESSÃO CLARA: #F4F6F7]
      ========================================================================= */}
      <section id="metodo-dape" className="py-20 sm:py-28 bg-[#F4F6F7] text-slate-900 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E4A55]/10 border border-[#0E4A55]/30 text-[11px] font-bold uppercase tracking-wider text-[#0E4A55] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A55]"></span>
              Metodologia Exclusiva
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              DAPE: do dado bruto à <br className="hidden sm:inline" />
              <span className="text-[#0E4A55]">execução que gera caixa</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Um método próprio para sair do número solto e chegar à decisão que muda o resultado.
            </p>
          </div>

          {/* 4 Cards de Etapas do Método DAPE (Grid Moderno Estilo Growth Machine) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              {
                step: "01",
                letter: "D",
                title: "Dados",
                subtitle: "Organização",
                desc: "Reunimos e organizamos as informações financeiras, comerciais e tributárias da operação."
              },
              {
                step: "02",
                letter: "A",
                title: "Análise",
                subtitle: "Diagnóstico",
                desc: "Identificamos onde estão a margem, o caixa e os riscos, e qual é a causa de cada um."
              },
              {
                step: "03",
                letter: "P",
                title: "Planejamento",
                subtitle: "Prioridades",
                desc: "Transformamos a análise em metas, orçamento e prioridades claras de ação."
              },
              {
                step: "04",
                letter: "E",
                title: "Execução",
                subtitle: "Resultados",
                desc: "Acompanhamos a implementação e ajustamos o rumo com base contínua nos números."
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0E4A55] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-2xl bg-[#0E4A55] text-white flex items-center justify-center text-lg font-black font-mono shadow-sm">
                      {item.letter}
                    </span>
                    <span className="text-xs font-black font-mono text-slate-300">
                      ETAPA {item.step}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E4A55] block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cards de Cultura e Princípios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Cultura Data-Driven", desc: "Decisões e equipes guiadas por dados reais e indicadores confiáveis, sem achismos." },
              { title: "Gestão Ágil", desc: "Processos dinâmicos que eliminam gargalos operacionais e aceleram a tomada de decisão." },
              { title: "Melhoria Contínua", desc: "Ações e indicadores são constantemente ajustados em busca da rentabilidade do caixa." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/70 border border-slate-200/80 hover:bg-white hover:border-[#0E4A55] transition-all">
                <div className="text-[#0E4A55] font-extrabold text-base tracking-tight mb-1.5">{item.title}</div>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. QUEM CONDUZ (Leander Venâncio) — [SESSÃO ESCURA: #071A1E]
      ========================================================================= */}
      <section id="quem-conduz" className="py-20 sm:py-28 bg-[#071A1E] text-white border-b border-white/10 relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0E4A55]/25 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-wider text-[#F5B85D] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
              Liderança & Advisory
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Quem conduz o advisory
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Experiência executiva direta ao lado de fundadores e líderes de empresas em crescimento.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#0A272D] border border-white/10 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl">
            
            <div className="shrink-0 relative">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-[#E8A33D]/60 bg-[#071A1E] shadow-2xl relative">
                <img 
                  src="/assets/Foto Leander (2).png" 
                  alt="Leander Venâncio" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="text-left flex-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#F5B85D] block mb-1">
                Fundador & Head Advisor
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Leander Venâncio
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-200 text-xs font-bold font-mono">
                  FGV Finanças
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-200 text-xs font-bold font-mono">
                  UFG Engenharia
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-200 text-xs font-bold font-mono">
                  +10 anos em gestão financeira
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6">
                Mais de 10 anos atuando diretamente ao lado de empresários na organização de números, recomposição de margens e estruturação de capital. Combina o rigor técnico da engenharia com a visão estratégica financeira para transformar a tomada de decisão no e-commerce.
              </p>

              <a 
                href="https://www.linkedin.com/in/leander-ven%C3%A2ncio-9996ab141/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-bold text-[#F5B85D] hover:text-white transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-[#F5B85D] group-hover:text-white transition-colors" />
                <span>Conectar no LinkedIn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          10 & 11. DIAGNÓSTICO & FAQ — [SESSÃO CLARA: #F4F6F7]
      ========================================================================= */}
      <section id="diagnostico" className="py-20 sm:py-28 bg-[#F4F6F7] text-slate-900 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
            
            {/* Coluna Esquerda: Texto Institucional, Garantias e Contatos */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E4A55]/10 border border-[#0E4A55]/30 text-[11px] font-bold uppercase tracking-wider text-[#0E4A55] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A55]"></span>
                Diagnóstico Estratégico
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
                Comece entendendo para onde vai o <span className="text-[#0E4A55]">dinheiro da sua operação</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
                O diagnóstico é uma conversa estratégica com um especialista sênior da Mont Finance para mapear as reais alavancas de margem e caixa do seu e-commerce.
              </p>

              {/* 3 Garantias de Baixo Risco (Inspiradas na Growth Machine) */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-slate-900 block mb-0.5">100% gratuito e sem compromisso</strong>
                    <span className="text-xs text-slate-500 leading-relaxed block">Você sai com clareza sobre suas finanças mesmo se decidir não nos contratar.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <div className="w-7 h-7 rounded-xl bg-teal-50 text-[#0E4A55] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Target className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-slate-900 block mb-0.5">Raio-X de Margem, Caixa e Estoque</strong>
                    <span className="text-xs text-slate-500 leading-relaxed block">Mapeamos exatamente onde estão os vazamentos silenciosos da sua operação.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <div className="w-7 h-7 rounded-xl bg-amber-50 text-[#E8A33D] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Sparkles className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-slate-900 block mb-0.5">Direcionamento Executivo com Especialista</strong>
                    <span className="text-xs text-slate-500 leading-relaxed block">Indicamos se o seu momento pede Controladoria, CFO completo ou outra frente.</span>
                  </div>
                </div>
              </div>

              {/* Caixa de Contato Direto */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 space-y-3.5 text-xs text-slate-600 shadow-sm">
                <a 
                  href="https://wa.me/5562999200405" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackWhatsAppClick("diagnostic_contact_box")}
                  className="flex items-center gap-3 text-slate-800 hover:text-[#0E4A55] font-bold transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>WhatsApp direto: (62) 99920-0405</span>
                </a>
                <a 
                  href="mailto:contato@montgestao.com.br" 
                  className="flex items-center gap-3 text-slate-800 hover:text-[#0E4A55] font-bold transition-colors break-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#E8A33D] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>E-mail: contato@montgestao.com.br</span>
                </a>
                <p className="text-[11px] text-slate-400 pt-2 leading-relaxed border-t border-slate-100">
                  *Os resultados variam conforme o caso de cada empresa. Nenhum resultado é garantido.
                </p>
              </div>
            </div>

            {/* Coluna Direita: Formulário */}
            <div className="lg:col-span-7">
              <DiagnosticForm theme="light" />
            </div>

          </div>

          {/* =========================================================================
              FAQ CURTO (Em fundo Claro Moderno)
          ========================================================================= */}
          <div id="faq" className="max-w-4xl mx-auto pt-8 border-t border-slate-200">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E4A55]/10 border border-[#0E4A55]/30 text-[11px] font-bold uppercase tracking-wider text-[#0E4A55] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A55]"></span>
                Dúvidas Comuns
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                O que empresários de e-commerce perguntam antes de começar
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-center justify-between gap-4 p-5 sm:p-6 hover:text-[#0E4A55] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-800">{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <ChevronDown className={`w-4 h-4 text-slate-600 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#0E4A55]' : ''}`} />
                    </div>
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
