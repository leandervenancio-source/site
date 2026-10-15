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
    <div className="font-sans selection:bg-[#E8A33D] selection:text-[#14181B] min-h-screen">
      
      {/* =========================================================================
          1 & 2. HERO (Dark Grafite #14181B)
      ========================================================================= */}
      <section id="topo" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#14181B] text-[#F5F3EE] border-b border-[#F5F3EE]/10">
        {/* Soft Ambient Brand Glow in Petróleo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[560px] bg-[radial-gradient(ellipse_at_top,_#0E4A55_0%,_transparent_70%)] opacity-30 pointer-events-none blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge Oficial */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1B2024] border border-[#F5F3EE]/10 backdrop-blur-md mb-8">
            <img 
              src="/brand/mont-finance-icone-ambar.png" 
              alt="Mont Finance" 
              className="h-4 w-auto object-contain" 
            />
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.18em] text-[#E8A33D]">
              CFO Terceirizado para e-commerce
            </span>
          </div>

          {/* Headline Principal em Instrument Serif com ênfase itálica */}
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#F5F3EE] font-normal leading-[1.08] tracking-tight">
              Seu e-commerce fatura. <br />
              <span className="block mt-1 sm:mt-2">
                Quanto disso vira <em className="font-serif italic font-normal text-[#E8A33D]">lucro e caixa?</em>
              </span>
            </h1>
          </div>

          {/* Frase Central Nova */}
          <p className="text-base sm:text-xl text-[#F5F3EE]/80 font-normal leading-relaxed mb-10 max-w-3xl mx-auto">
            A Mont Finance é o CFO Terceirizado que integra finanças, tributação e capital para aumentar lucro, gerar caixa e reduzir riscos na sua operação.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="#diagnostico" 
              onClick={() => trackCtaClick("hero_primary", "Agendar diagnóstico")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#E8A33D] hover:bg-[#D4932D] text-[#14181B] text-xs font-semibold uppercase tracking-[0.14em] transition-all shadow-[0_4px_16px_rgba(232,163,61,0.25)] hover:shadow-[0_6px_24px_rgba(232,163,61,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Agendar diagnóstico
            </a>
            <a 
              href="#niveis" 
              onClick={() => trackCtaClick("hero_secondary", "Ver os níveis de serviço")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent hover:bg-[#1B2024] text-[#F5F3EE] border border-[#F5F3EE]/20 hover:border-[#E8A33D]/50 text-xs font-semibold uppercase tracking-[0.14em] transition-all"
            >
              Ver os níveis de serviço
            </a>
          </div>

          {/* Qualificação de Público */}
          <p className="text-xs text-[#5B6166] font-mono tracking-wide max-w-2xl mx-auto">
            ✦ Para empresas de e-commerce com faturamento acima de R$ 3 milhões por ano, que fabricam e/ou vendem online, no varejo ou no atacado.
          </p>

        </div>
      </section>

      {/* =========================================================================
          3. FAIXA DE FATOS (Dark Surface #1B2024)
      ========================================================================= */}
      <section className="py-10 border-b border-[#F5F3EE]/10 bg-[#1B2024]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 rounded-xl border border-[#F5F3EE]/05 bg-[#14181B]/40">
              <span className="text-xl sm:text-2xl font-serif text-[#F5F3EE] block mb-1">
                Acima de R$ 3 Mi
              </span>
              <span className="text-xs text-[#5B6166] font-normal leading-snug block">
                Foco em operações com tração e volume de vendas
              </span>
            </div>

            <div className="p-4 rounded-xl border border-[#F5F3EE]/05 bg-[#14181B]/40">
              <span className="text-xl sm:text-2xl font-serif text-[#E8A33D] block mb-1">
                3 Frentes
              </span>
              <span className="text-xs text-[#5B6166] font-normal leading-snug block">
                Finanças, tributação e capital na mesma mesa
              </span>
            </div>

            <div className="p-4 rounded-xl border border-[#F5F3EE]/05 bg-[#14181B]/40">
              <span className="text-xl sm:text-2xl font-serif text-[#F5F3EE] block mb-1">
                Método DAPE
              </span>
              <span className="text-xs text-[#5B6166] font-normal leading-snug block">
                Dados, análise, planejamento e execução com rotina
              </span>
            </div>

            <div className="p-4 rounded-xl border border-[#F5F3EE]/05 bg-[#14181B]/40">
              <span className="text-xl sm:text-2xl font-serif text-[#E8A33D] block mb-1">
                Nacional
              </span>
              <span className="text-xs text-[#5B6166] font-normal leading-snug block">
                Atendimento remoto e executivo em todo o Brasil
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CAUSA ECONÔMICA (Sintoma x Causa) — [SESSÃO CLARA: Papel #F5F3EE]
      ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F5F3EE] text-[#14181B] border-b border-[#14181B]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0E4A55] font-semibold block mb-3">
              Causa econômica
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#14181B] font-normal mb-5 leading-tight">
              O que parece problema de caixa ou de vendas <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#0E4A55]">costuma ter outra origem</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5B6166] font-normal leading-relaxed">
              Antes de decidir vender mais, vale saber onde o dinheiro está ficando. Estes são sintomas que ouvimos de empresários de e-commerce e as causas que costumam estar por trás.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {symptoms.map((item, idx) => (
              <div 
                key={idx} 
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#14181B]/08 hover:border-[#E8A33D] hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="md:w-5/12 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 text-[#B5412F] flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#5B6166] block mb-0.5 font-medium">
                      Você sente:
                    </span>
                    <strong className="text-sm font-semibold text-[#14181B] block">
                      {item.symptom}
                    </strong>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center text-[#5B6166]/60 group-hover:text-[#E8A33D] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>

                <div className="md:w-6/12 flex items-start gap-3 pl-0 md:pl-5 border-t md:border-t-0 md:border-l border-[#14181B]/10 pt-3.5 md:pt-0">
                  <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-200 text-[#0E4A55] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0E4A55] font-semibold block mb-0.5">
                      Pode estar por trás:
                    </span>
                    <p className="text-xs text-[#5B6166] font-normal leading-relaxed">
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
          5. GRÁFICO ILUSTRATIVO & COCKPIT DE ANÁLISE — [SESSÃO ESCURA: Grafite #14181B]
      ========================================================================= */}
      <section id="grafico-100" className="py-12 sm:py-16 lg:py-20 bg-[#14181B] text-[#F5F3EE] border-b border-[#F5F3EE]/10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FinancialCockpit />
        </div>
      </section>

      {/* =========================================================================
          6. TRÊS FRENTES INTEGRADAS & TABELA COMPARATIVA — [SESSÃO CLARA: Papel #F5F3EE]
      ========================================================================= */}
      <section id="frentes" className="py-20 sm:py-28 bg-[#F5F3EE] text-[#14181B] border-b border-[#14181B]/10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0E4A55] font-semibold block mb-3">
              Integração
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#14181B] font-normal mb-5 leading-tight">
              Três frentes que decidem o seu resultado, <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#0E4A55]">tratadas juntas</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5B6166] font-normal leading-relaxed">
              Na maioria das empresas, finanças, tributação e capital são tocadas por pessoas diferentes, que nem sempre conversam. Um CFO Terceirizado coloca tudo na mesma mesa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {threeFronts.map((f, i) => (
              <div 
                key={i} 
                className="p-8 rounded-2xl bg-white border border-[#14181B]/08 hover:border-[#E8A33D] transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-semibold px-3 py-1 rounded-full bg-[#F5F3EE] border border-[#14181B]/10 text-[#0E4A55]">
                      Frente {f.frontNumber}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#E8A33D]"></span>
                  </div>

                  <h3 className="text-2xl font-serif text-[#14181B] font-normal mb-3">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5B6166] font-normal leading-relaxed mb-6">{f.desc}</p>
                </div>

                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick(`frente_${f.title.toLowerCase()}`, `Diagnosticar ${f.title}`)}
                  className="pt-4 border-t border-[#14181B]/10 text-xs font-semibold text-[#0E4A55] hover:text-[#E8A33D] flex items-center gap-1.5 transition-colors"
                >
                  <span>Avaliar {f.title.toLowerCase()} no diagnóstico</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

          {/* Fechamento da Seção Três Frentes */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border-l-4 border-l-[#E8A33D] border border-[#14181B]/08 text-center max-w-4xl mx-auto shadow-sm mb-24">
            <p className="text-sm sm:text-base text-[#14181B]/90 font-serif italic leading-relaxed">
              "O imposto muda o preço que você pode praticar. O prazo de recebimento muda o capital de giro que você precisa. O capital muda o quanto dá para crescer. A diferença está em enxergar essas três frentes ao mesmo tempo."
            </p>
          </div>

          {/* =========================================================================
              NOVO BLOCO COMPARATIVO (Inspirado na Growth Machine: "Nós vs O Mercado")
          ========================================================================= */}
          <div id="comparativo" className="pt-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0E4A55] font-semibold block mb-2">
                Posicionamento
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-[#14181B] font-normal mb-4 leading-tight">
                Por que a contabilidade comum ou uma consultoria teórica <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#0E4A55]">não resolvem o seu caixa?</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6166] font-normal leading-relaxed max-w-2xl mx-auto">
                Enquanto o BPO apenas digita notas e consultores entregam slides e vão embora, a Mont Finance assume a cadeira executiva de finanças do seu e-commerce.
              </p>
            </div>

            {/* Tabela Desktop */}
            <div className="hidden md:block overflow-hidden rounded-2xl bg-white border border-[#14181B]/10 shadow-sm max-w-5xl mx-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#14181B]/10 bg-[#FAF9F6]">
                    <th className="p-4 sm:p-5 text-xs font-mono font-semibold uppercase text-[#5B6166] w-1/4">
                      O que sua operação precisa
                    </th>
                    <th className="p-4 sm:p-5 text-xs font-mono font-bold uppercase text-[#0E4A55] bg-[#E8A33D]/10 border-x border-[#E8A33D]/30 w-1/3">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#E8A33D]" />
                        <span>Mont Finance (CFO Terceirizado)</span>
                      </div>
                    </th>
                    <th className="p-4 sm:p-5 text-xs font-mono font-medium uppercase text-[#5B6166] w-1/5">
                      Contabilidade / BPO
                    </th>
                    <th className="p-4 sm:p-5 text-xs font-mono font-medium uppercase text-[#5B6166] w-1/5">
                      Consultoria Tradicional
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#14181B]/08 text-xs">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-[#14181B] align-top">
                        {row.criteria}
                      </td>
                      <td className="p-4 sm:p-5 bg-[#E8A33D]/05 border-x border-[#E8A33D]/20 text-[#14181B] font-medium align-top leading-relaxed">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#2F705B] shrink-0 mt-0.5" />
                          <span>{row.mont}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-[#5B6166] align-top leading-relaxed">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-[#B5412F] shrink-0 mt-0.5" />
                          <span>{row.bpo}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-[#5B6166] align-top leading-relaxed">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-[#B5412F] shrink-0 mt-0.5" />
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
                <div key={idx} className="p-5 rounded-2xl bg-white border border-[#14181B]/10 shadow-sm space-y-3">
                  <div className="text-xs font-mono uppercase font-bold text-[#0E4A55] border-b border-[#14181B]/08 pb-1.5">
                    {row.criteria}
                  </div>
                  
                  <div className="p-3 rounded-xl bg-[#E8A33D]/10 border border-[#E8A33D]/30 space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#0E4A55] flex items-center gap-1">
                      <Check className="w-3 h-3 text-[#2F705B]" /> Mont Finance
                    </span>
                    <p className="text-xs text-[#14181B] font-medium leading-relaxed">{row.mont}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#5B6166] pt-1">
                    <div className="p-2 rounded-lg bg-[#F5F3EE] border border-[#14181B]/06">
                      <span className="font-semibold block text-[#14181B] mb-0.5">Contabilidade:</span>
                      {row.bpo}
                    </div>
                    <div className="p-2 rounded-lg bg-[#F5F3EE] border border-[#14181B]/06">
                      <span className="font-semibold block text-[#14181B] mb-0.5">Consultoria:</span>
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
          7. DOIS NÍVEIS DE SERVIÇO & CONTRATÁVEL À PARTE — [SESSÃO ESCURA: Grafite #14181B]
      ========================================================================= */}
      <section id="niveis" className="py-20 sm:py-28 bg-[#14181B] text-[#F5F3EE] border-b border-[#F5F3EE]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E8A33D] font-medium block mb-3">
              Níveis de serviço
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F3EE] font-normal mb-5 leading-tight">
              Dois níveis de CFO Terceirizado, <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#F5F3EE]">conforme o momento da empresa</span>
            </h2>
            <p className="text-sm sm:text-base text-[#F5F3EE]/80 font-normal leading-relaxed">
              Os dois começam pela mesma pergunta: qual é o resultado real do negócio e o que fazer com ele. A diferença está na profundidade do acompanhamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
            
            {/* Nível 1 — Controladoria */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1B2024] border border-[#F5F3EE]/10 flex flex-col justify-between hover:border-[#F5F3EE]/25 transition-all shadow-sm">
              <div>
                <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#5B6166] block mb-2">
                  Nível 1
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F5F3EE] font-normal mb-3">Controladoria</h3>
                <p className="text-xs sm:text-sm text-[#F5F3EE]/80 font-normal leading-relaxed mb-6">
                  Visão de CFO sobre os seus números, para você decidir com base em fatos e não em percepção.
                </p>

                <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-[#F5F3EE]/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E8A33D] shrink-0 mt-0.5" />
                    <span>Plano de contas gerencial pensado para e-commerce</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E8A33D] shrink-0 mt-0.5" />
                    <span>DRE gerencial com margem por canal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E8A33D] shrink-0 mt-0.5" />
                    <span>Fluxo de caixa com visão dos próximos meses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E8A33D] shrink-0 mt-0.5" />
                    <span>Indicadores de acompanhamento e leitura mensal com você</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#F5F3EE]/10">
                <span className="text-xs text-[#5B6166] block mb-5 leading-relaxed">
                  <strong className="text-[#F5F3EE]/90">Para quem precisa:</strong> enxergar a margem real e o caixa com clareza e ainda não tem essa base confiável.
                </span>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("nivel_1_controladoria", "Agendar para Nível 1")}
                  className="w-full py-3.5 rounded-full bg-transparent hover:bg-[#14181B] border border-[#F5F3EE]/20 hover:border-[#E8A33D]/50 text-[#F5F3EE] text-xs font-semibold uppercase tracking-[0.14em] text-center block transition-all"
                >
                  Agendar para Nível 1
                </a>
              </div>
            </div>

            {/* Nível 2 — CFO Terceirizado completo */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1B2024] border border-[#E8A33D]/40 hover:border-[#E8A33D] transition-all flex flex-col justify-between shadow-[0_8px_30px_rgba(232,163,61,0.1)]">
              <div>
                <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#E8A33D] block mb-2">
                  Nível 2
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F5F3EE] font-normal mb-3">CFO Terceirizado completo</h3>
                <p className="text-xs sm:text-sm text-[#F5F3EE]/80 font-normal leading-relaxed mb-6">
                  Tudo da Controladoria, mais planejamento financeiro e um CFO como interlocutor direto da sua liderança.
                </p>

                <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-[#F5F3EE]/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E8A33D] shrink-0 mt-0.5" />
                    <span>Tudo o que está no nível Controladoria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E8A33D] shrink-0 mt-0.5" />
                    <span>Orçamento, forecast e análise de variância</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E8A33D] shrink-0 mt-0.5" />
                    <span>Cenários para decisões de estoque, preço, canal e investimento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E8A33D] shrink-0 mt-0.5" />
                    <span>Interlocução estratégica direta com o CFO</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#F5F3EE]/10">
                <span className="text-xs text-[#5B6166] block mb-5 leading-relaxed">
                  <strong className="text-[#F5F3EE]/90">Para quem precisa:</strong> já cresce e precisa de planejamento, cenários e um parceiro estratégico nas decisões financeiras.
                </span>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("nivel_2_cfo_completo", "Agendar para Nível 2")}
                  className="w-full py-3.5 rounded-full bg-[#E8A33D] hover:bg-[#D4932D] text-[#14181B] text-xs font-semibold uppercase tracking-[0.14em] text-center block transition-all shadow-[0_4px_16px_rgba(232,163,61,0.25)] hover:shadow-[0_6px_22px_rgba(232,163,61,0.4)]"
                >
                  Agendar para Nível 2
                </a>
              </div>
            </div>

          </div>

          {/* Bloco Curto: Contratável à parte */}
          <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#14181B]/80 border border-[#F5F3EE]/10">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E8A33D] font-medium block mb-1">
                Contratável à parte
              </span>
              <p className="text-xs text-[#5B6166] font-normal">
                Frentes especializadas que podem ser acionadas de acordo com as necessidades específicas da sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inteligência Tributária */}
              <div className="p-6 rounded-2xl bg-[#1B2024] border border-[#F5F3EE]/10 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-serif text-[#F5F3EE] font-normal mb-2">Inteligência Tributária</h4>
                  <p className="text-xs text-[#F5F3EE]/80 font-normal leading-relaxed mb-4">
                    Revisão de créditos e riscos, planejamento e estrutura tributária, sempre conectados ao efeito em preço, margem e caixa.
                  </p>
                  <ul className="space-y-2 mb-4 text-xs text-[#5B6166]">
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
                  <p className="text-[11px] text-[#5B6166] italic mb-4 leading-relaxed">
                    *Cada análise depende do caso concreto e de validação técnica. Não há resultado garantido.
                  </p>
                </div>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("contratavel_tributario", "Consultar Inteligência Tributária")}
                  className="text-xs font-semibold text-[#E8A33D] hover:text-[#F5F3EE] inline-flex items-center gap-1.5 transition-colors pt-3 border-t border-[#F5F3EE]/10"
                >
                  Consultar no diagnóstico <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Captação de Recursos */}
              <div className="p-6 rounded-2xl bg-[#1B2024] border border-[#F5F3EE]/10 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-serif text-[#F5F3EE] font-normal mb-2">Captação de Recursos</h4>
                  <p className="text-xs text-[#F5F3EE]/80 font-normal leading-relaxed mb-4">
                    Diagnóstico da necessidade de capital, organização dos números e preparação para conversar com instituições financeiras.
                  </p>
                  <ul className="space-y-2 mb-4 text-xs text-[#5B6166]">
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
                  <p className="text-[11px] text-[#5B6166] italic mb-4 leading-relaxed">
                    *Aprovação, taxas e prazos dependem de cada instituição e do perfil da empresa.
                  </p>
                </div>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("contratavel_capital", "Consultar Captação de Recursos")}
                  className="text-xs font-semibold text-[#E8A33D] hover:text-[#F5F3EE] inline-flex items-center gap-1.5 transition-colors pt-3 border-t border-[#F5F3EE]/10"
                >
                  Consultar no diagnóstico <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. MÉTODO DAPE (Dados, Análise, Planejamento, Execução) — [SESSÃO CLARA: Papel #F5F3EE]
      ========================================================================= */}
      <section id="metodo-dape" className="py-20 sm:py-28 bg-[#F5F3EE] text-[#14181B] border-b border-[#14181B]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0E4A55] font-semibold block mb-3">
              Metodologia
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#14181B] font-normal mb-5 leading-tight">
              DAPE: do dado à <em className="italic font-normal text-[#0E4A55]">execução</em>
            </h2>
            <p className="text-sm sm:text-base text-[#5B6166] font-normal leading-relaxed">
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
                  className="absolute w-[68%] h-[68%] border border-dashed border-[#14181B]/20 rounded-full z-0"
                ></motion.div>
                
                <div className="absolute inset-0 z-10">
                  {/* Dados (D) - Top Right */}
                  <div className="absolute top-[26%] right-[26%] translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#E8A33D] text-[#14181B] flex items-center justify-center text-3xl font-serif font-bold shadow-md border-4 border-[#F5F3EE] z-10">
                        D
                      </div>
                      <div className="absolute left-full ml-4 text-left w-[180px]">
                        <div className="text-[#14181B] font-serif text-lg mb-0.5">Dados</div>
                        <div className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#0E4A55] font-semibold mb-1">Organização</div>
                        <p className="text-[11px] text-[#5B6166] font-normal leading-relaxed">Reunimos e organizamos as informações financeiras, comerciais e tributárias da operação.</p>
                      </div>
                    </div>
                  </div>

                  {/* Análise (A) - Bottom Right */}
                  <div className="absolute bottom-[26%] right-[26%] translate-x-1/2 translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#E8A33D] text-[#14181B] flex items-center justify-center text-3xl font-serif font-bold shadow-md border-4 border-[#F5F3EE] z-10">
                        A
                      </div>
                      <div className="absolute left-full ml-4 text-left w-[180px]">
                        <div className="text-[#14181B] font-serif text-lg mb-0.5">Análise</div>
                        <div className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#0E4A55] font-semibold mb-1">Diagnóstico</div>
                        <p className="text-[11px] text-[#5B6166] font-normal leading-relaxed">Identificamos onde estão a margem, o caixa e os riscos, e qual é a causa de cada um.</p>
                      </div>
                    </div>
                  </div>

                  {/* Planejamento (P) - Bottom Left */}
                  <div className="absolute bottom-[26%] left-[26%] -translate-x-1/2 translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#E8A33D] text-[#14181B] flex items-center justify-center text-3xl font-serif font-bold shadow-md border-4 border-[#F5F3EE] z-10">
                        P
                      </div>
                      <div className="absolute right-full mr-4 text-right w-[180px]">
                        <div className="text-[#14181B] font-serif text-lg mb-0.5">Planejamento</div>
                        <div className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#0E4A55] font-semibold mb-1">Prioridades</div>
                        <p className="text-[11px] text-[#5B6166] font-normal leading-relaxed">Transformamos a análise em metas, orçamento e prioridades claras de ação.</p>
                      </div>
                    </div>
                  </div>

                  {/* Execução (E) - Top Left */}
                  <div className="absolute top-[26%] left-[26%] -translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#E8A33D] text-[#14181B] flex items-center justify-center text-3xl font-serif font-bold shadow-md border-4 border-[#F5F3EE] z-10">
                        E
                      </div>
                      <div className="absolute right-full mr-4 text-right w-[180px]">
                        <div className="text-[#14181B] font-serif text-lg mb-0.5">Execução</div>
                        <div className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#0E4A55] font-semibold mb-1">Resultados</div>
                        <p className="text-[11px] text-[#5B6166] font-normal leading-relaxed">Acompanhamos a implementação e ajustamos o rumo com base contínua nos números.</p>
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
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#14181B]/10 shadow-sm">
                    <div className="w-11 h-11 rounded-full bg-[#E8A33D] text-[#14181B] flex items-center justify-center text-xl font-serif font-bold shrink-0">
                      {item.letter}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-0.5">
                        <span className="font-serif text-[#14181B] text-base">{item.title}</span>
                        <span className="text-[9px] font-mono uppercase text-[#0E4A55] font-semibold">{item.sub}</span>
                      </div>
                      <p className="text-xs text-[#5B6166] font-normal leading-relaxed">{item.desc}</p>
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
                <div key={i} className="p-5 rounded-2xl bg-white border border-[#14181B]/10 hover:border-[#E8A33D] shadow-sm transition-all text-left">
                  <div className="text-[#0E4A55] font-serif text-base mb-1">{item.title}</div>
                  <p className="text-[#5B6166] text-xs font-normal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          9. QUEM CONDUZ (Leander Venâncio) — [SESSÃO ESCURA: Grafite #14181B]
      ========================================================================= */}
      <section id="quem-conduz" className="py-20 sm:py-28 bg-[#14181B] text-[#F5F3EE] border-b border-[#F5F3EE]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E8A33D] font-medium block mb-3">
              Liderança
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F5F3EE] font-normal mb-4">
              Quem conduz o advisory
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6166] font-normal leading-relaxed">
              Experiência executiva direta ao lado de fundadores e líderes de empresas em crescimento.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#1B2024] border border-[#F5F3EE]/10 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-sm">
            
            <div className="shrink-0 relative">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border border-[#E8A33D]/30 bg-black/40 shadow-xl relative">
                <img 
                  src="/assets/Foto Leander (2).png" 
                  alt="Leander Venâncio" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="text-left flex-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8A33D] block mb-1 font-medium">
                Fundador & Head Advisor
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F5F3EE] font-normal mb-3">
                Leander Venâncio
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-2.5 py-1 rounded bg-[#14181B] border border-[#F5F3EE]/10 text-[#F5F3EE]/85 text-[11px] font-mono">
                  FGV Finanças
                </span>
                <span className="px-2.5 py-1 rounded bg-[#14181B] border border-[#F5F3EE]/10 text-[#F5F3EE]/85 text-[11px] font-mono">
                  UFG Engenharia
                </span>
                <span className="px-2.5 py-1 rounded bg-[#14181B] border border-[#F5F3EE]/10 text-[#F5F3EE]/85 text-[11px] font-mono">
                  +10 anos em gestão financeira
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#F5F3EE]/80 font-normal leading-relaxed mb-6">
                Mais de 10 anos atuando diretamente ao lado de empresários na organização de números, recomposição de margens e estruturação de capital. Combina o rigor técnico da engenharia com a visão estratégica financeira para transformar a tomada de decisão no e-commerce.
              </p>

              <a 
                href="https://www.linkedin.com/in/leander-ven%C3%A2ncio-9996ab141/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#E8A33D] hover:text-[#F5F3EE] transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-[#E8A33D] group-hover:text-[#F5F3EE] transition-colors" />
                <span>Conectar no LinkedIn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          10 & 11. DIAGNÓSTICO & FAQ — [SESSÃO CLARA: Papel #F5F3EE]
      ========================================================================= */}
      <section id="diagnostico" className="py-20 sm:py-28 bg-[#F5F3EE] text-[#14181B] border-b border-[#14181B]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
            
            {/* Coluna Esquerda: Texto Institucional, Garantias e Contatos */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0E4A55] font-semibold block mb-3">
                Diagnóstico Estratégico
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#14181B] font-normal mb-5 leading-tight">
                Comece entendendo para onde vai o dinheiro da sua operação
              </h2>
              <p className="text-sm sm:text-base text-[#5B6166] font-normal leading-relaxed mb-8">
                O diagnóstico é uma conversa estratégica com um especialista sênior da Mont Finance para mapear as reais alavancas de margem e caixa do seu e-commerce.
              </p>

              {/* 3 Garantias de Baixo Risco (Inspiradas na Growth Machine) */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#14181B]/08 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-[#2F705B] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-[#14181B] block">100% gratuito e sem compromisso</strong>
                    <span className="text-[11px] text-[#5B6166] leading-tight block">Você sai com clareza sobre suas finanças mesmo se decidir não nos contratar.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#14181B]/08 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-teal-50 text-[#0E4A55] flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-[#14181B] block">Raio-X de Margem, Caixa e Estoque</strong>
                    <span className="text-[11px] text-[#5B6166] leading-tight block">Mapeamos exatamente onde estão os vazamentos silenciosos da sua operação.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#14181B]/08 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-amber-50 text-[#E8A33D] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-[#14181B] block">Direcionamento Executivo com Especialista</strong>
                    <span className="text-[11px] text-[#5B6166] leading-tight block">Indicamos se o seu momento pede Controladoria, CFO completo ou outra frente.</span>
                  </div>
                </div>
              </div>

              {/* Caixa de Contato Direto */}
              <div className="p-5 rounded-2xl bg-white border border-[#14181B]/08 space-y-3 text-xs text-[#5B6166] shadow-sm">
                <a 
                  href="https://wa.me/5562999200405" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackWhatsAppClick("diagnostic_contact_box")}
                  className="flex items-center gap-2.5 text-[#14181B] hover:text-[#0E4A55] font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E8A33D]" />
                  <span>WhatsApp direto: (62) 99920-0405</span>
                </a>
                <a 
                  href="mailto:contato@montgestao.com.br" 
                  className="flex items-center gap-2.5 text-[#14181B] hover:text-[#0E4A55] font-medium transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#E8A33D]" />
                  <span>E-mail: contato@montgestao.com.br</span>
                </a>
                <p className="text-[11px] text-[#5B6166] pt-1 leading-relaxed border-t border-[#14181B]/08">
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
              FAQ CURTO (Em fundo Papel)
          ========================================================================= */}
          <div id="faq" className="max-w-4xl mx-auto pt-8 border-t border-[#14181B]/10">
            <div className="text-center mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0E4A55] font-semibold block mb-2">
                Dúvidas comuns
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#14181B] font-normal">
                O que empresários de e-commerce perguntam antes de começar
              </h3>
            </div>

            <div className="divide-y divide-[#14181B]/10 border-y border-[#14181B]/10">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-center justify-between gap-4 py-1 hover:text-[#0E4A55] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-medium text-[#14181B]">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#0E4A55] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#E8A33D]' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="pt-3 pb-1 text-xs sm:text-sm text-[#5B6166] font-normal leading-relaxed">
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
