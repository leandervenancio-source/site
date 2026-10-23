import { motion } from "motion/react";
import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  AlertTriangle, 
  Check, 
  X,
  Linkedin,
  ShieldCheck,
  Target,
  Sparkles
} from "lucide-react";
import { DiagnosticForm } from "../components/DiagnosticForm";
import { FinancialCockpit } from "../components/FinancialCockpit";
import { DapeCycle } from "../components/DapeCycle";
import { trackCtaClick } from "../lib/analytics";

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const economicCauses = [
    {
      symptom: "Fatura bem, mas o caixa não acompanha.",
      cause: "Estoque parado e descasamento entre compras e recebimentos.",
      gain: "Sobra de caixa real com NCG equilibrada e estoque no giro certo."
    },
    {
      symptom: "Antecipar recebível virou rotina para pagar contas.",
      cause: "Ciclo financeiro invertido e juros drenando a margem da empresa.",
      gain: "Fim da dependência de antecipação e retenção do lucro líquido."
    },
    {
      symptom: "Volume alto em marketplaces e sobra quase nada.",
      cause: "Comissões, frete, devoluções e mídia corroendo a margem por SKU.",
      gain: "DRE por canal e SKU para cortar o que sangra e lucrar de verdade."
    },
    {
      symptom: "Decisões tomadas na intuição ou pelo saldo do banco.",
      cause: "Falta de DRE gerencial, orçamento anual e previsão de caixa.",
      gain: "Rito mensal com o CFO, leitura de variância e decisões embasadas."
    },
    {
      symptom: "Crédito bancário caro, limite baixo ou recusa.",
      cause: "Demonstrações desorganizadas que não refletem a força do negócio.",
      gain: "Dossiê financeiro executivo para negociar taxas menores com bancos."
    }
  ];

  const clientLogos = [
    { name: "Mafit", src: "/clientes/logo-mafit-white.png", className: "h-7 sm:h-9" },
    { name: "Valentt", src: "/clientes/logo-valentt-white.png", className: "h-6 sm:h-8" },
    { name: "Multlens", src: "/clientes/logo-multlens-white.png", className: "h-11 sm:h-13" },
    { name: "Paredão Tintas", src: "/clientes/logo-paredao-white.png", className: "h-8 sm:h-10" },
    { name: "Evolução Informática", src: "/clientes/logo-evolucao-white.png", className: "h-7 sm:h-9" },
    { name: "Inove Gôndolas", src: "/clientes/logo-inove-white.png", className: "h-9 sm:h-11" },
    { name: "Vantagro", src: "/clientes/logo-vantagro-white.png", className: "h-11 sm:h-14" },
    { name: "M", src: "/clientes/logo-m-white.png", className: "h-9 sm:h-11" }
  ];

  const comparisonRows = [
    {
      criteria: "Papel na sua empresa",
      mont: "Senta na mesa de decisão como CFO: orienta precificação, corte de desperdícios e alocação de caixa.",
      tradicional: "Operacional burocrático: cumpre guias fiscais e conciliação bancária sem analisar o negócio.",
      consultoria: "Teórico e distante: entrega uma planilha pesada ou slides e você executa sozinho."
    },
    {
      criteria: "Especialização em E-commerce",
      mont: "100% focado na dinâmica digital: taxas de marketplace, frete, devoluções, estoque e NCG.",
      tradicional: "Atendimento genérico: trata sua loja online igual a uma padaria ou escritório.",
      consultoria: "Modelos tradicionais corporativos que ignoram o descasamento de caixa do e-commerce."
    },
    {
      criteria: "Três Frentes Integradas",
      mont: "Finanças, Estratégia e Capital analisados juntos para maximizar margem, clareza e caixa.",
      tradicional: "Olha apenas a guia de imposto a pagar, sem visão estratégica ou análise de margem por canal.",
      consultoria: "Analisa custos isolados sem conexão com estratégia prática e crédito bancário."
    },
    {
      criteria: "Rotina e Acompanhamento",
      mont: "Presença contínua: reuniões executivas mensais, leitura de variância e forecast dos próximos meses.",
      tradicional: "Visão pelo retrovisor: fecha o balancete fiscal semanas após o mês terminar.",
      consultoria: "Projeto pontual com início e fim, sem acompanhamento da implementação prática."
    },
    {
      criteria: "Foco no Resultado Final",
      mont: "Lucro líquido real no bolso, previsibilidade no fluxo de caixa e redução estrutural de riscos.",
      tradicional: "Apenas conformidade legal para evitar multas de órgãos fiscais.",
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
      a: "Não. A contabilidade cuida das obrigações fiscais e legais. A Mont Finance trabalha ao lado dela, usando os números para apoiar decisões de finanças, estratégia e capital."
    },
    {
      q: "Qual a diferença entre o CFO Pro e o CFO Full?",
      a: "O CFO Pro contempla o CFO Terceirizado com a controladoria da empresa organizada, identificando qual canal e produto dão lucro de verdade, quanto caixa está parado e para onde o dinheiro vai, com FP&A (orçamento, forecast, variância) e um rito mensal de decisão acompanhado. O CFO Full inclui tudo do CFO Pro, mais a execução financeira dirigida pelo CFO, na qual a rotina financeira do dia a dia é conduzida sob a direção do CFO, liberando seu tempo para focar no negócio."
    },
    {
      q: "Preciso ter uma estrutura financeira pronta para começar?",
      a: "Não. Parte do trabalho é organizar os dados. Quanto mais informação você tiver, mais rápido avançamos, mas o diagnóstico existe justamente para mostrar o ponto de partida."
    },
    {
      q: "Vocês também atuam com tributação, crédito e projetos pontuais?",
      a: "Sim. A Inteligência Tributária (entregue com parceiros) e a Captação de Recursos (assessoria de crédito e capital) são frentes contratáveis à parte. Também realizamos projetos pontuais de Advisory para Planejamento Estratégico, Valuation e M&A."
    },
    {
      q: "O diagnóstico garante algum resultado?",
      a: "Não. Ele mostra a situação atual e as prioridades. O resultado depende do caso concreto e da execução das decisões tomadas."
    }
  ];

  return (
    <div className="font-sans selection:bg-[#E8A33D] selection:text-[#071A1E] min-h-screen bg-[#071A1E]">
      
      {/* =========================================================================
          1 & 2. HERO — [PROPORÇÃO NOTEBOOK: Full Viewport, Centered Layout, Balanced Elements]
      ========================================================================= */}
      <section id="topo" className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-20 lg:pb-10 overflow-hidden bg-gradient-to-b from-[#051214] via-[#071A1E] to-[#0A272D] text-white border-b border-white/10">
        
        {/* Vídeo de Fundo Realista: Consultor Estratégico com Cliente Analisando Dashboard */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/videos/hero-consultant-poster.jpg"
            className="w-full h-full object-cover object-center opacity-60 sm:opacity-70 filter contrast-110 brightness-95"
          >
            <source src="/videos/hero-consultant-dashboard.mp4" type="video/mp4" />
          </video>
          {/* Overlay em Gradiente com Blend Sofisticado para Contraste e Legibilidade Perfeitos */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#051214]/80 via-[#071A1E]/55 to-[#071A1E]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(7,26,30,0.5)_0%,_transparent_75%)]"></div>
          {/* Malha Tecnológica Sutil */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center my-auto">
          
          {/* Badge Estilo Growth Machine com Ponto Pulsante */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8A33D]/10 border border-[#E8A33D]/30 backdrop-blur-md mb-4 sm:mb-6 shadow-[0_0_20px_rgba(232,163,61,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#E8A33D] animate-pulse"></span>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#E8A33D]">
              CFO Terceirizado para e-commerce
            </span>
          </div>

          {/* Headline Principal em Manrope ExtraBold com Gradiente */}
          <div className="max-w-4xl mx-auto mb-4 sm:mb-5">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              Seu e-commerce fatura. <br />
              <span className="block mt-1.5 gradiente font-extrabold">
                Quanto disso vira lucro e caixa?
              </span>
            </h1>
          </div>

          {/* Frase Central Nova */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200/95 font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
            A Mont Finance é o CFO Terceirizado que integra finanças, estratégia e capital para aumentar lucro, gerar caixa e reduzir riscos na sua operação.
          </p>

          {/* CTAs de Alto Impacto Estilo Growth Machine */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6 w-full sm:w-auto">
            <a 
              href="#diagnostico" 
              onClick={() => trackCtaClick("hero_primary", "Agendar diagnóstico")}
              className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] hover:from-[#D4932D] hover:to-[#E8A33D] text-[#071A1E] text-xs font-extrabold uppercase tracking-wider transition-all shadow-[0_8px_24px_rgba(232,163,61,0.35)] hover:shadow-[0_12px_32px_rgba(232,163,61,0.5)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <span>Agendar diagnóstico gratuito</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
            <a 
              href="#niveis" 
              onClick={() => trackCtaClick("hero_secondary", "Conhecer pacotes de CFO")}
              className="w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>Conhecer os pacotes de CFO</span>
            </a>
          </div>

          {/* Qualificação de Público */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-slate-300 max-w-2xl mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#E8A33D] shrink-0" />
            <span>Para empresas de e-commerce com faturamento acima de R$ 3 milhões por ano.</span>
          </div>

        </div>
      </section>


      {/* =========================================================================
          3.1 LOGOS DE CLIENTES & OPERAÇÕES — [CARROSSEL CONTÍNUO GIRANDO NA PÁGINA]
      ========================================================================= */}
      <section className="py-8 sm:py-10 bg-[#071A1E] border-b border-white/10 overflow-hidden relative">

        {/* Carrossel Infinito com Máscara de Gradiente Suave nas Bordas */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] py-4">
          <div className="flex w-max animate-marquee gap-10 sm:gap-16 items-center">
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <div 
                key={idx} 
                className="shrink-0 flex items-center justify-center px-4 py-2 opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 group cursor-default"
                title={logo.name}
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className={`${logo.className || "h-8 sm:h-10"} w-auto object-contain brightness-100 drop-shadow-[0_2px_8px_rgba(255,255,255,0.06)]`} 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CAUSA ECONÔMICA (Sintoma x Causa x O que Você Ganha) — [DIRETO & EXECUTIVO]
      ========================================================================= */}
      <section id="causa-economica" className="py-16 sm:py-24 bg-[#F4F6F7] text-slate-900 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Cabeçalho Enxuto */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E4A55]/10 border border-[#0E4A55]/30 text-[11px] font-bold uppercase tracking-wider text-[#0E4A55] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A55]"></span>
              Causa Econômica
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              O que parece falta de caixa ou de vendas <br className="hidden sm:inline" />
              <span className="text-[#0E4A55]">costuma ter outra origem</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              No e-commerce, faturar não é o mesmo que lucrar. Veja o que está por trás de cada sintoma e o que você ganha com o CFO Terceirizado:
            </p>
          </div>

          {/* Cabeçalho da Matriz (Desktop) */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-6 mb-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
            <div className="col-span-4 flex items-center gap-1.5 text-rose-600">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Você sente no dia a dia</span>
            </div>
            <div className="col-span-4 flex items-center gap-1.5 text-amber-700">
              <Target className="w-3.5 h-3.5" />
              <span>A causa econômica oculta</span>
            </div>
            <div className="col-span-4 flex items-center gap-1.5 text-[#0E4A55]">
              <Sparkles className="w-3.5 h-3.5 text-[#E8A33D]" />
              <span>O que você ganha com o CFO</span>
            </div>
          </div>

          {/* Linhas da Matriz (Compactas & Diretas) */}
          <div className="space-y-3">
            {economicCauses.map((item, idx) => (
              <div 
                key={idx} 
                className="p-5 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0E4A55] hover:shadow-md transition-all duration-200 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-center">
                  
                  {/* Coluna 1: Sintoma */}
                  <div className="lg:col-span-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-rose-50 text-rose-500 border border-rose-200/80 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="lg:hidden text-[10px] font-bold uppercase tracking-wider text-rose-600 block mb-0.5">
                        Você sente:
                      </span>
                      <strong className="text-xs sm:text-sm font-bold text-slate-900 block leading-snug">
                        {item.symptom}
                      </strong>
                    </div>
                  </div>

                  {/* Coluna 2: Causa */}
                  <div className="lg:col-span-4 flex items-start gap-3 pl-0 lg:pl-3 border-t lg:border-t-0 lg:border-l border-slate-100 pt-2.5 lg:pt-0">
                    <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-700 border border-amber-200/80 flex items-center justify-center shrink-0 mt-0.5">
                      <Target className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="lg:hidden text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-0.5">
                        Causa oculta:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-snug">
                        {item.cause}
                      </p>
                    </div>
                  </div>

                  {/* Coluna 3: Ganho */}
                  <div className="lg:col-span-4 flex items-start gap-3 p-3 rounded-xl bg-[#0E4A55]/[0.05] border border-[#0E4A55]/15 mt-2 lg:mt-0">
                    <div className="w-6 h-6 rounded-lg bg-[#0E4A55] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div>
                      <span className="lg:hidden text-[10px] font-extrabold uppercase tracking-wider text-[#0E4A55] block mb-0.5">
                        O seu ganho:
                      </span>
                      <strong className="text-xs sm:text-sm font-extrabold text-[#0E4A55] block leading-snug">
                        {item.gain}
                      </strong>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Micro-CTA Enxuto */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-700 font-medium text-center sm:text-left">
              Identificou esse padrão no seu caixa? No diagnóstico gratuito, mapeamos onde o seu dinheiro está ficando.
            </p>
            <a
              href="#diagnostico"
              onClick={() => trackCtaClick("causa_economica_cta", "Mapear Minha Empresa Grátis")}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-[#0E4A55] hover:bg-[#071A1E] text-white text-xs font-bold tracking-tight shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Mapear Minha Empresa Grátis</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E8A33D]" />
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. MÉTODO DAPE (Dados, Análise, Planejamento, Execução) — [SESSÃO CLARA: #FFFFFF]
      ========================================================================= */}
      <section id="metodo-dape" className="py-20 sm:py-28 bg-gradient-to-b from-white via-[#F4F8F9] to-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0E4A5508_1px,transparent_1px),linear-gradient(to_bottom,#0E4A5508_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_60%,transparent_100%)] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
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
              Um ciclo de melhoria contínua em quatro pilares. Cada volta transforma números soltos em decisões, e decisões em lucro e caixa. Clique em cada etapa para explorar.
            </p>
          </div>

          <DapeCycle />

        </div>
      </section>

      {/* =========================================================================
          6. GRÁFICO ILUSTRATIVO & COCKPIT DE ANÁLISE — [SESSÃO ESCURA: #071A1E]
      ========================================================================= */}
      <section id="grafico-100" className="py-16 sm:py-24 bg-[#071A1E] text-white border-b border-white/10 relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0E4A55]/30 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FinancialCockpit />
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
              Pacotes de Serviço
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Dois pacotes de CFO Terceirizado, <br className="hidden sm:inline" />
              <span className="text-[#F5B85D]">conforme o momento da sua empresa</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              O CFO Terceirizado da Mont Finance é estruturado em dois pacotes. Ambos entregam a visão executiva de finanças, a controladoria organizada e o rito mensal de decisão. A diferença está na camada de execução.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            
            {/* Pacote 1 — CFO Pro */}
            <div id="cfo-pro" className="p-8 sm:p-10 rounded-3xl bg-[#0A272D]/90 border border-white/10 hover:border-white/20 flex flex-col justify-between transition-all duration-300 shadow-xl group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-slate-300">
                    Pacote 1
                  </span>
                  <span className="text-xs font-semibold text-[#F5B85D]">
                    CFO + Controladoria
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  CFO Pro
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6">
                  O CFO Terceirizado da Mont com a controladoria da empresa organizada. Você passa a saber qual canal e qual produto dão lucro de verdade, quanto caixa está parado e para onde o dinheiro vai, e decide todo mês com um plano de ação acompanhado.
                </p>

                <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>Controladoria organizada com apuração de margem real por canal e por produto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>Visão clara de quanto caixa está parado e para onde o dinheiro vai</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>DRE gerencial e fluxo de caixa com projeção futura</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>FP&A integrado: orçamento, forecast e análise de variância</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>Rito mensal de decisão com plano de ação acompanhado pelo CFO</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs text-slate-400 block mb-5 leading-relaxed">
                  <strong className="text-slate-200">Para quem precisa:</strong> ter os números organizados, clareza sobre lucro e caixa e decidir todo mês com um CFO ao seu lado.
                </span>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("cfo_pro", "Agendar para CFO Pro")}
                  className="w-full py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-extrabold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all"
                >
                  <span>Agendar diagnóstico para CFO Pro</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Pacote 2 — CFO Full */}
            <div id="cfo-full" className="p-8 sm:p-10 rounded-3xl bg-[#0A272D] border-2 border-[#E8A33D] transition-all flex flex-col justify-between shadow-[0_0_50px_rgba(232,163,61,0.2)] relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E8A33D]/20 text-[#F5B85D]">
                    Pacote 2
                  </span>
                  <span className="text-xs font-semibold text-[#F5B85D]">
                    CFO + Controladoria + Execução
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  CFO Full
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6">
                  Tudo do CFO Pro, mais a <strong className="text-white">execução financeira dirigida pelo CFO</strong>. A rotina financeira do dia a dia é conduzida sob a direção do CFO, e você ganha tempo para focar no negócio.
                </p>

                <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span className="font-semibold text-white">Tudo o que está incluído no CFO Pro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>Execução financeira dirigida pelo CFO no dia a dia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>Rotina financeira conduzida sob a direção executiva do CFO</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>Liberação de tempo da liderança para focar na expansão do negócio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span>FP&A, orçamento, forecast e rito mensal de decisão com plano de ação acompanhado</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs text-slate-400 block mb-5 leading-relaxed">
                  <strong className="text-slate-200">Para quem precisa:</strong> visão de CFO, controladoria organizada e a rotina financeira do dia a dia executada sob a liderança do CFO.
                </span>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("cfo_full", "Agendar para CFO Full")}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] hover:from-[#F5B85D] hover:to-[#E8A33D] text-[#071A1E] text-xs font-black uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(232,163,61,0.35)] hover:scale-[1.02]"
                >
                  <span>Agendar diagnóstico para CFO Full</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </a>
              </div>
            </div>

          </div>

          {/* Bloco Curto: Contratável à parte e Projetos Pontuais */}
          <div className="max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#071A1E] border border-white/10 shadow-2xl">
            <div className="mb-8 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5B85D] block mb-1">
                Contratável à parte e projetos pontuais
              </span>
              <p className="text-xs sm:text-sm text-slate-300 font-normal">
                Frentes especializadas que podem ser acionadas de acordo com as necessidades específicas da sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Inteligência Tributária */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0A272D] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E8A33D]/20 text-[#F5B85D] inline-block mb-2">
                      Contratável à parte
                    </span>
                    <h4 className="text-xl font-extrabold text-white tracking-tight">
                      Inteligência Tributária
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                      Entregue com parceiros
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed mb-5">
                    Entregue em parceria com especialistas tributários. Atua na análise da estrutura tributária e no reflexo fiscal sobre preço, margem e fluxo de caixa.
                  </p>
                  <ul className="space-y-2 mb-5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
                      Revisão do enquadramento e da estrutura tributária
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
                      Tributação na formação de preço por canal
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
                      Análise técnica de riscos e conformidade fiscal
                    </li>
                  </ul>
                  <p className="text-[11px] text-slate-400 italic mb-4 leading-relaxed">
                    *Cada análise depende do caso concreto e de validação técnica. Sem promessa de resultado.
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
                  <div className="mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E8A33D]/20 text-[#F5B85D] inline-block mb-2">
                      Contratável à parte
                    </span>
                    <h4 className="text-xl font-extrabold text-white tracking-tight">
                      Captação de Recursos
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                      Assessoria de crédito e capital
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed mb-5">
                    Assessoria de crédito e capital com diagnóstico da necessidade de recursos, organização dos números e preparação para diálogo com instituições financeiras.
                  </p>
                  <ul className="space-y-2 mb-5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
                      Diagnóstico do endividamento e necessidade de capital
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
                      Preparação dos números para análise de crédito
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
                      Assessoria no relacionamento com instituições financeiras
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

              {/* Advisory (Projetos Pontuais) */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0A272D] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 inline-block mb-2">
                      Projetos pontuais
                    </span>
                    <h4 className="text-xl font-extrabold text-white tracking-tight">
                      Advisory
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                      Planejamento Estratégico, Valuation, M&A
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed mb-5">
                    Projetos estratégicos pontuais para momentos decisivos da empresa: crescimento estruturado, precificação do negócio e operações societárias.
                  </p>
                  <ul className="space-y-2 mb-5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
                      Planejamento Estratégico plurianual
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
                      Laudos técnicos de Valuation e modelagem
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
                      Assessoria executiva em processos de M&A
                    </li>
                  </ul>
                  <p className="text-[11px] text-slate-400 italic mb-4 leading-relaxed">
                    *Escopo e cronograma estruturados sob medida para o projeto da empresa.
                  </p>
                </div>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("projeto_advisory", "Consultar Advisory")}
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
          8. BLOCO COMPARATIVO (Estilo Growth Machine: "Nós vs O Mercado") — [SESSÃO CLARA: #F4F6F7]
      ========================================================================= */}
      <section id="comparativo" className="py-20 sm:py-28 bg-[#F4F6F7] text-slate-900 border-b border-slate-200 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
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
              Enquanto a contabilidade tradicional apenas cumpre obrigações fiscais e consultores entregam relatórios teóricos e vão embora, a Mont Finance assume a cadeira executiva de finanças do seu e-commerce com você.
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
                    Contabilidade Tradicional
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
                        <span>{row.tradicional}</span>
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
                    <span className="font-bold block text-slate-700 mb-0.5">Contabilidade Tradicional:</span>
                    {row.tradicional}
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
                  +10 anos de experiência financeira
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
          10 & 11. DIAGNÓSTICO & FAQ — [ESTILO GROWTH MACHINE: FUNDO BRANCO E CARD LARANJA]
      ========================================================================= */}
      <section id="diagnostico" className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24">
            
            {/* Coluna Esquerda: Estilo Growth Machine com Dot, Headline, Subheadline Âmbar e Bullets */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-slate-800 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>
                <span>DIAGNÓSTICO</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 leading-[1.15]">
                Dê o primeiro passo para escalar seu lucro e caixa com um diagnóstico gratuito
              </h2>

              <p className="text-base sm:text-lg text-[#E8A33D] font-bold leading-snug mb-8">
                Identifique as principais oportunidades de crescimento da sua empresa e receba um plano de ação personalizado.
              </p>

              {/* 3 Bullets com Círculo Laranja e Check Branco */}
              <div className="space-y-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E8A33D] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    Diagnóstico personalizado gratuito
                  </span>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E8A33D] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    Descubra o mapa que pode aumentar sua margem e lucro
                  </span>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#E8A33D] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    100% gratuito e sem compromisso
                  </span>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Card com Borda Laranja e Formulário Multi-Step */}
            <div className="lg:col-span-6">
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
