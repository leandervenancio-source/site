import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  AlertTriangle, 
  Check, 
  X,
  Minus,
  Linkedin,
  Target,
  Sparkles
} from "lucide-react";
import { DiagnosticForm } from "../components/DiagnosticForm";
import { FinancialCockpit } from "../components/FinancialCockpit";
import { DapeCycle } from "../components/DapeCycle";
import { HeroDataOrbit } from "../components/HeroDataOrbit";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { WhatsAppAiShowcase } from "../components/WhatsAppAiShowcase";
import { trackCtaClick } from "../lib/analytics";

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tickerItems = [
    "DRE POR CANAL E SKU",
    "CMV REAL APURADO",
    "PREVISÃO DE CAIXA 90 DIAS",
    "ROAS × MARGEM LÍQUIDA",
    "CONECTADO AO SEU ERP E MARKETPLACES",
    "INTELIGÊNCIA FINANCEIRA PARA E-COMMERCES"
  ];

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
      gain: "Rito mensal de decisão, leitura de variância e decisões embasadas em dados."
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
    { name: "Favorita Calçados", src: "/clientes/logo-favorita-white.png", className: "h-8 sm:h-10" },
    { name: "M", src: "/clientes/logo-m-white.png", className: "h-9 sm:h-11" }
  ];

  type CompStatus = "yes" | "partial" | "no";

  const comparisonRows: {
    criteria: string;
    mont: string;
    contabilidade: { text: string; status: CompStatus };
    bpo: { text: string; status: CompStatus };
    consultoria: { text: string; status: CompStatus };
  }[] = [
    {
      criteria: "Foco em E-commerce",
      mont: "100% e-commerce: CMV, marketplaces, frete, ads e NCG",
      contabilidade: { text: "Genérica (foco fiscal)", status: "no" },
      bpo: { text: "Operacional genérico", status: "partial" },
      consultoria: { text: "Modelos corporativos teóricos", status: "no" }
    },
    {
      criteria: "BI & Dados Integrados",
      mont: "Painel vivo conectado a ERP, canais, mídia e bancos",
      contabilidade: { text: "Balancete mensal atrasado", status: "no" },
      bpo: { text: "Lança no ERP, sem BI", status: "partial" },
      consultoria: { text: "Planilhas estáticas", status: "partial" }
    },
    {
      criteria: "Lucro Real por Canal e SKU",
      mont: "DRE gerencial detalhada por canal e produto",
      contabilidade: { text: "DRE fiscal agregada", status: "partial" },
      bpo: { text: "Apenas fluxo de caixa", status: "no" },
      consultoria: { text: "Análise pontual e isolada", status: "partial" }
    },
    {
      criteria: "Previsão de Caixa (90d)",
      mont: "Projeção ativa para zerar antecipação de recebíveis",
      contabilidade: { text: "Olha só o passado", status: "no" },
      bpo: { text: "Fluxo de curto prazo", status: "partial" },
      consultoria: { text: "Projeção pontual no projeto", status: "partial" }
    },
    {
      criteria: "Direção Estratégica Mensal",
      mont: "Reunião de decisão com plano de ação acompanhado",
      contabilidade: { text: "Sem análise de negócio", status: "no" },
      bpo: { text: "Foco operacional", status: "no" },
      consultoria: { text: "Diagnóstico sem rotina contínua", status: "partial" }
    },
    {
      criteria: "Rotina Diária (Opcional)",
      mont: "Inclusa no CFO Full quando não há equipe interna",
      contabilidade: { text: "Não opera o financeiro", status: "no" },
      bpo: { text: "Executa rotina diária", status: "yes" },
      consultoria: { text: "Não executa rotina", status: "no" }
    }
  ];

  const renderStatusIcon = (status: CompStatus) => {
    if (status === "yes") {
      return (
        <div
          title="Entrega"
          className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5"
        >
          <Check className="w-2.5 h-2.5 stroke-[3]" />
        </div>
      );
    }
    if (status === "partial") {
      return (
        <div
          title="Entrega parcial"
          className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5"
        >
          <Minus className="w-2.5 h-2.5 stroke-[3]" />
        </div>
      );
    }
    return (
      <div
        title="Não entrega"
        className="w-4 h-4 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center shrink-0 mt-0.5"
      >
        <X className="w-2.5 h-2.5 stroke-[2.5]" />
      </div>
    );
  };

  const faqs = [
    {
      q: "O que é a Inteligência Financeira para E-commerces da Mont Finance?",
      a: "É a nossa assessoria financeira especializada em e-commerces que transforma dados operacionais e financeiros em clareza real de margem, caixa, estoque e capital — apoiando suas decisões estratégicas no dia a dia, sem inflar a folha fixa da empresa."
    },
    {
      q: "A Mont Finance substitui a minha contabilidade?",
      a: "Não. A contabilidade cuida das obrigações fiscais e legais. A Mont Finance trabalha ao lado dela, usando os números para apoiar decisões de finanças, estratégia e capital."
    },
    {
      q: "Qual a diferença entre o CFO Pro e o CFO Full?",
      a: "O CFO Pro entrega inteligência financeira, controladoria organizada, clareza de margem real por canal e produto, FP&A (orçamento, forecast, variância) e rito mensal de decisão para operações que já têm quem toque a rotina financeira. Já o CFO Full inclui tudo do CFO Pro somado à execução completa da rotina financeira do dia a dia pela nossa equipe — ideal para operações sem equipe financeira interna."
    },
    {
      q: "Preciso ter uma estrutura financeira pronta para começar?",
      a: "Não. Parte do trabalho é organizar os dados. Quanto mais informação você tiver, mais rápido avançamos, mas o diagnóstico existe justamente para mostrar o ponto de partida."
    },
    {
      q: "O diagnóstico garante algum resultado?",
      a: "Não. Ele mostra a situação atual e as prioridades. O resultado depende do caso concreto e da execução das decisões tomadas."
    }
  ];

  return (
    <div className="font-sans selection:bg-[#E8A33D] selection:text-[#071A1E] min-h-screen bg-[#071A1E]">
      
      {/* =========================================================================
          1 & 2. HERO — [ESTILO STARTUP / FINTECH: 2 COLUNAS ASSIMÉTRICAS NA PALETA MONT]
      ========================================================================= */}
      <section id="topo" className="relative min-h-[86dvh] flex flex-col justify-center pt-24 pb-10 sm:pt-28 sm:pb-12 overflow-hidden bg-[#061518] text-white border-b border-white/10">
        
        {/* Fundo Tecnológico Limpo: Gradiente Petróleo + Glow Esmeralda/Dourado + Malha Fina */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-32 right-0 w-[680px] h-[680px] bg-[#0E4A55]/45 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[520px] h-[420px] bg-[#E8A33D]/10 rounded-full blur-[160px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_55%,transparent_100%)]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* COLUNA ESQUERDA: HEADLINE FORTE + PROVA EM MONO + CTAs */}
            <div className="lg:col-span-7 text-left">
              {/* Badge Superior */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8A33D]/10 border border-[#E8A33D]/30 backdrop-blur-md mb-5">
                <span className="w-2 h-2 rounded-full bg-[#E8A33D] animate-pulse"></span>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#F5B85D]">
                  Inteligência Financeira para E-commerces
                </span>
              </div>

              {/* Headline Forte Estilo Startup */}
              <h1 className="text-3xl sm:text-5xl lg:text-[46px] xl:text-[52px] font-black text-white tracking-tight leading-[1.08] mb-4 text-balance">
                SEU E-COMMERCE FATURA. <br />
                <span className="block mt-1.5 gradiente font-black">
                  QUANTO VIRA LUCRO REAL?
                </span>
              </h1>

              {/* Subheadline Direta */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed mb-6 max-w-xl">
                Somos uma <strong className="text-white font-semibold">assessoria financeira especializada em e-commerces</strong>. Conectamos os dados da sua operação e sentamos com você todo mês para aumentar o lucro líquido e dar previsibilidade ao seu caixa.
              </p>

              {/* Faixa de Prova em Monospace com Ponto Vivo */}
              <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 mb-7">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></span>
                <span className="text-[#F5B85D]">ASSESSORIA DEDICADA</span>
                <span className="text-slate-600">·</span>
                <span>OPERAÇÕES ACIMA DE R$ 3M/ANO</span>
                <span className="text-slate-600 hidden sm:inline">·</span>
                <span className="hidden sm:inline">BI + REUNIÕES MENSAIS</span>
              </div>

              {/* CTAs Estilo Startup */}
              <div className="flex flex-wrap items-center gap-5">
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("hero_primary", "Agendar diagnóstico")}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] hover:from-[#D4932D] hover:to-[#E8A33D] text-[#071A1E] text-xs font-extrabold uppercase tracking-wider transition-all shadow-[0_8px_24px_rgba(232,163,61,0.35)] hover:shadow-[0_12px_32px_rgba(232,163,61,0.5)] hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>Agendar meu diagnóstico</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>
                <a 
                  href="#grafico-100" 
                  onClick={() => trackCtaClick("hero_secondary", "Ver indicadores ao vivo")}
                  className="text-xs sm:text-sm font-bold text-white border-b-2 border-[#E8A33D] pb-0.5 hover:text-[#F5B85D] transition-colors"
                >
                  Ver indicadores ao vivo
                </a>
              </div>
            </div>

            {/* COLUNA DIREITA: ÓRBITA DE FONTES DE DADOS CONECTADAS NA INTELIGÊNCIA MONT */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <HeroDataOrbit />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2.1 FAIXA TICKER DOURADA — [ESTILO FINTECH / STARTUP]
      ========================================================================= */}
      <div className="bg-gradient-to-r from-[#E8A33D] via-[#F5B85D] to-[#E8A33D] text-[#071A1E] py-3 border-b border-[#071A1E]/15 overflow-hidden select-none">
        <div className="flex w-max animate-marquee items-center gap-8">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 shrink-0">
              <span className="text-[11px] sm:text-xs font-mono font-black uppercase tracking-[0.14em]">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#071A1E]/50"></span>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          3.1 LOGOS DE CLIENTES & OPERAÇÕES — [CARROSSEL CONTÍNUO]
      ========================================================================= */}
      <section className="py-4 sm:py-5 bg-[#071A1E] border-b border-white/10 overflow-hidden relative">
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] py-2">
          <div className="flex w-max animate-marquee gap-10 sm:gap-16 items-center">
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <div 
                key={idx} 
                className="shrink-0 flex items-center justify-center px-4 py-1.5 opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-300 group cursor-default"
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
          3.2 COCKPIT DE INTELIGÊNCIA — [PRODUCT-FIRST NA 2ª DOBRA]
      ========================================================================= */}
      <section id="grafico-100" className="py-10 sm:py-14 bg-[#071A1E] text-white border-b border-white/10 relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0E4A55]/30 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FinancialCockpit />
          <WhatsAppAiShowcase />
        </div>
      </section>

      {/* =========================================================================
          4. CAUSA ECONÔMICA (Sintoma x Causa x O que Você Ganha) — [DIRETO & EXECUTIVO]
      ========================================================================= */}
      <section id="causa-economica" className="py-12 sm:py-16 bg-[#F4F6F7] text-slate-900 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Cabeçalho Enxuto */}
          <div className="text-center max-w-4xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E4A55]/10 border border-[#0E4A55]/30 text-[10px] font-bold uppercase tracking-wider text-[#0E4A55] mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A55]"></span>
              Causa Econômica
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2.5 text-balance">
              O que parece falta de caixa ou de vendas{" "}
              <span className="text-[#0E4A55]">costuma ter outra origem</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              No e-commerce, faturar não é o mesmo que lucrar. Veja o que está por trás de cada sintoma e o que você ganha com a inteligência financeira da Mont Finance:
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
              <span>O que você ganha com a Mont Finance</span>
            </div>
          </div>

          {/* Linhas da Matriz (Compactas & Diretas) */}
          <div className="space-y-2.5">
            {economicCauses.map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0E4A55] hover:shadow-md transition-all duration-200 group"
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
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs max-w-4xl mx-auto">
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
      <section id="metodo-dape" className="py-12 sm:py-16 bg-gradient-to-b from-white via-[#F4F8F9] to-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0E4A5508_1px,transparent_1px),linear-gradient(to_bottom,#0E4A5508_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_60%,transparent_100%)] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E4A55]/10 border border-[#0E4A55]/30 text-[10px] font-bold uppercase tracking-wider text-[#0E4A55] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A55]"></span>
              Metodologia Exclusiva
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3 text-balance">
              DAPE: do dado bruto à{" "}
              <span className="text-[#0E4A55]">execução que multiplica o lucro</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Um ciclo de melhoria contínua em quatro pilares. Cada volta transforma números soltos em decisões, e decisões em lucro no bolso. Clique em cada etapa para explorar.
            </p>
          </div>

          <DapeCycle />

        </div>
      </section>

      {/* =========================================================================
          7. SOLUÇÕES MONT FINANCE (CFO Pro Principal + CFO Full Upsell) & CONTRATÁVEL À PARTE
      ========================================================================= */}
      <section id="niveis" className="py-12 sm:py-16 bg-[#F4F6F7] text-slate-900 border-b border-slate-200 relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#E8A33D]/10 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E4A55]/10 border border-[#0E4A55]/30 text-[10px] font-bold uppercase tracking-wider text-[#0E4A55] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A55]"></span>
              Nossas Soluções
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3 text-balance">
              Inteligência financeira sob medida,{" "}
              <span className="text-[#0E4A55]">conforme a estrutura da sua empresa</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Duas opções estruturadas conforme o momento da sua operação: inteligência financeira com controladoria ou a combinação completa com a execução da rotina financeira do dia a dia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* Opção 01 — CFO Pro */}
            <div id="cfo-pro" className="p-6 sm:p-8 rounded-3xl bg-[#0A272D] border-2 border-[#E8A33D] transition-all flex flex-col justify-between shadow-[0_24px_60px_-20px_rgba(7,26,30,0.55),0_0_35px_rgba(232,163,61,0.18)] relative">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E8A33D] text-[#071A1E]">
                    Opção 01
                  </span>
                  <span className="text-xs font-semibold text-[#F5B85D]">
                    Inteligência + Estratégia
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  CFO Pro
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-snug mb-5">
                  Para quem já tem financeiro interno e quer transformar seus números em mais lucro e caixa livre.
                </p>

                <ul className="space-y-2.5 mb-5 text-xs sm:text-[13px] text-slate-200 leading-snug">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span><strong className="text-white">DRE real por canal e SKU:</strong> descubra onde você lucra e onde perde dinheiro (CMV, taxas, frete e ads).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Painel vivo de BI + IA no WhatsApp:</strong> consulte vendas, CMV, ROAS e caixa em tempo real por painel ou mensagem.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Previsão de caixa 90 dias:</strong> antecipe gargalos e estanque perdas com antecipação de recebíveis.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Curva ABC e giro de estoque:</strong> transforme estoque parado em caixa vivo e blinde itens campeões.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Precificação e orçamento anual:</strong> saiba quanto investir em mídia e o preço mínimo para escalar.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Reunião executiva mensal:</strong> plano de ação objetivo acompanhado lado a lado com especialista sênior.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3.5 pt-4 border-t border-white/10">
                <div className="px-3.5 py-2.5 rounded-xl bg-[#061518] border border-[#E8A33D]/30 text-[11px] font-mono text-[#F5B85D] font-bold">
                  ✦ Clareza total sobre cada R$ 1 vendido · Sem inflar sua folha fixa
                </div>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("cfo_pro", "Agendar para CFO Pro")}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] hover:from-[#F5B85D] hover:to-[#E8A33D] text-[#071A1E] text-xs font-black uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(232,163,61,0.35)] hover:scale-[1.02]"
                >
                  <span>Agendar diagnóstico para CFO Pro</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </a>
              </div>
            </div>

            {/* Opção 02 — CFO Full */}
            <div id="cfo-full" className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#0E4A55]/40 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-xl group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0E4A55]/10 text-[#0E4A55]">
                    Opção 02
                  </span>
                  <span className="text-xs font-semibold text-[#B27318]">
                    Inteligência + Operação Diária
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                  CFO Full
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-snug mb-5">
                  Para quem não tem equipe financeira interna e quer terceirizar 100% da rotina e da inteligência.
                </p>

                <ul className="space-y-2.5 mb-5 text-xs sm:text-[13px] text-slate-700 leading-snug">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0E4A55] shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Tudo o que está no CFO Pro:</strong> BI em tempo real, DRE por canal/SKU, caixa 90d e estratégia mensal.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0E4A55] shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Contas a pagar e receber diárias:</strong> fornecedores, boletos e vencimentos em dia, sem multas nem atrasos.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0E4A55] shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Conciliação bancária e gateways:</strong> conferência diária de bancos, Pix, cartões e adquirentes — zero furo.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0E4A55] shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Auditoria de repasses:</strong> conferência de taxas, fretes, estornos e devoluções no ML e Shopee.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0E4A55] shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Fechamento mensal integrado:</strong> números prontos no início do mês e alinhados com sua contabilidade.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0E4A55] shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Operação rodando sem você:</strong> departamento financeiro completo para você focar 100% em vender.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3.5 pt-4 border-t border-slate-100">
                <div className="px-3.5 py-2.5 rounded-xl bg-[#0E4A55]/[0.07] border border-[#0E4A55]/20 text-[11px] font-mono text-[#0E4A55] font-bold">
                  ✦ Equipe financeira completa · Sem custo de CLT, treinamento ou turnover
                </div>
                <a 
                  href="#diagnostico" 
                  onClick={() => trackCtaClick("cfo_full", "Agendar para CFO Full")}
                  className="w-full py-3.5 rounded-xl bg-[#0E4A55] hover:bg-[#071A1E] border border-[#0E4A55] text-white text-xs font-extrabold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all"
                >
                  <span>Agendar diagnóstico para CFO Full</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          8. BLOCO COMPARATIVO — MONT FINANCE VS. MERCADO (DESIGN MODERNO FINTECH)
      ========================================================================= */}
      <section id="comparativo" className="py-12 sm:py-16 bg-white text-slate-900 border-b border-slate-200 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto mb-9">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E4A55]/10 border border-[#0E4A55]/30 text-[10px] font-bold uppercase tracking-wider text-[#0E4A55] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A55]"></span>
              Comparativo Direto
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5 leading-tight text-balance">
              Por que contabilidade, BPO comum ou consultoria teórica{" "}
              <span className="text-[#0E4A55]">não aumentam o seu lucro?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Veja na prática o que separa a inteligência financeira especializada em e-commerce da Mont Finance dos modelos tradicionais do mercado.
            </p>
          </div>

          {/* Tabela Desktop — Coluna Mont Finance em Destaque Escuro + Borda Dourada */}
          <div className="hidden lg:block overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_60px_-20px_rgba(7,26,30,0.12)] max-w-6xl mx-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-5 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-50/80 w-[19%]">
                    O que seu e-commerce precisa
                  </th>
                  <th className="py-4 px-5 bg-[#071A1E] border-t-4 border-t-[#E8A33D] border-x border-[#0E4A55] w-[27%]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#E8A33D]/15 border border-[#E8A33D]/40 flex items-center justify-center shrink-0">
                        <img
                          src="/brand/mont-finance-icone-ambar.png"
                          alt="Mont Finance"
                          className="w-4 h-4 object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-black uppercase tracking-wider text-white block leading-none">
                          Mont Finance
                        </span>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#F5B85D]">
                          Inteligência Financeira
                        </span>
                      </div>
                    </div>
                  </th>
                  <th className="py-4 px-4 text-[11px] font-extrabold uppercase tracking-wider text-slate-500 bg-slate-50/80 w-[18%]">
                    Contabilidade
                  </th>
                  <th className="py-4 px-4 text-[11px] font-extrabold uppercase tracking-wider text-slate-500 bg-slate-50/80 w-[18%]">
                    BPO Financeiro
                  </th>
                  <th className="py-4 px-4 text-[11px] font-extrabold uppercase tracking-wider text-slate-500 bg-slate-50/80 w-[18%]">
                    Consultoria Tradicional
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="group hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-5 font-extrabold text-slate-800 align-middle">
                      {row.criteria}
                    </td>
                    <td className="py-3.5 px-5 bg-[#0A272D] border-x border-[#0E4A55] border-b border-b-white/10 text-white font-semibold align-middle leading-snug">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-400/20 border border-emerald-400/50 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{row.mont}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium align-middle leading-snug">
                      <div className="flex items-start gap-2">
                        {renderStatusIcon(row.contabilidade.status)}
                        <span className={row.contabilidade.status === "yes" ? "text-slate-800 font-semibold" : ""}>
                          {row.contabilidade.text}
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium align-middle leading-snug">
                      <div className="flex items-start gap-2">
                        {renderStatusIcon(row.bpo.status)}
                        <span className={row.bpo.status === "yes" ? "text-slate-800 font-semibold" : ""}>
                          {row.bpo.text}
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium align-middle leading-snug">
                      <div className="flex items-start gap-2">
                        {renderStatusIcon(row.consultoria.status)}
                        <span className={row.consultoria.status === "yes" ? "text-slate-800 font-semibold" : ""}>
                          {row.consultoria.text}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legenda Discreta da Matriz (Desktop) */}
          <div className="hidden lg:flex items-center justify-end gap-5 max-w-6xl mx-auto mt-3 px-2 text-[11px] font-mono text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 inline-flex items-center justify-center">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              Entrega completa
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 inline-flex items-center justify-center">
                <Minus className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              Parcial / pontual
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-rose-50 text-rose-400 inline-flex items-center justify-center">
                <X className="w-2.5 h-2.5 stroke-[2.5]" />
              </span>
              Não entrega
            </span>
          </div>

          {/* Versão Mobile / Tablet (Cards Limpos de Comparação) */}
          <div className="lg:hidden space-y-3.5">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                  {row.criteria}
                </div>
                
                <div className="p-3 rounded-xl bg-[#0A272D] border border-[#E8A33D]/50 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F5B85D] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" /> Mont Finance
                  </span>
                  <p className="text-xs text-white font-semibold leading-snug">{row.mont}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-slate-500">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                    {renderStatusIcon(row.contabilidade.status)}
                    <div>
                      <span className="font-bold block text-slate-700 mb-0.5">Contabilidade:</span>
                      {row.contabilidade.text}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                    {renderStatusIcon(row.bpo.status)}
                    <div>
                      <span className="font-bold block text-slate-700 mb-0.5">BPO Financeiro:</span>
                      {row.bpo.text}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                    {renderStatusIcon(row.consultoria.status)}
                    <div>
                      <span className="font-bold block text-slate-700 mb-0.5">Consultoria:</span>
                      {row.consultoria.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          8.5 DEPOIMENTOS REAIS (WHATSAPP VERIFICADO) — [SESSÃO CLARA: #FFFFFF]
      ========================================================================= */}
      <TestimonialsSection />

      {/* =========================================================================
          9. QUEM CONDUZ (Leander Venâncio) — [SESSÃO ESCURA: #071A1E]
      ========================================================================= */}
      <section id="quem-conduz" className="py-12 sm:py-16 bg-[#071A1E] text-white border-b border-white/10 relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0E4A55]/25 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-wider text-[#F5B85D] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]"></span>
              Fundador &amp; Liderança
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 text-balance">
              Quem está por trás da Mont Finance
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Experiência executiva direta ao lado de fundadores e líderes de empresas em crescimento.
            </p>
          </div>

          <div className="p-6 sm:p-9 rounded-3xl bg-[#0A272D] border border-white/10 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-2xl">
            
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
          10 & 11. DIAGNÓSTICO & FAQ — [IDENTIDADE EXECUTIVA MONT FINANCE]
      ========================================================================= */}
      <section id="diagnostico" className="py-12 sm:py-16 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-14">
            
            {/* Coluna Esquerda: Identidade Executiva Mont Finance (Alinhada Topo e Base com o Card) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E4A55]/10 border border-[#0E4A55]/30 text-[10px] font-bold uppercase tracking-wider text-[#0E4A55] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A55]"></span>
                  Diagnóstico Financeiro Executivo
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 leading-[1.15] text-balance">
                  Dê o primeiro passo para escalar o seu{" "}
                  <span className="text-[#0E4A55]">lucro</span> com um diagnóstico gratuito
                </h2>

                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6">
                  Identifique onde o lucro da sua operação está ficando pelo caminho e saia da reunião com um{" "}
                  <strong className="text-slate-900 font-bold">plano de ação financeiro estruturado</strong> para a realidade da sua empresa.
                </p>
              </div>

              {/* 3 Benefícios em Cards Executivos Sutis — Ancorados na base para alinhar com o formulário */}
              <div className="space-y-3 mt-auto">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F4F6F7] border border-slate-200/80 flex items-center gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-[#071A1E] text-[#F5B85D] flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    Diagnóstico personalizado conduzido por especialista sênior
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F4F6F7] border border-slate-200/80 flex items-center gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-[#071A1E] text-[#F5B85D] flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    Mapeamento claro de margem, geração de caixa e estrutura de capital
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F4F6F7] border border-slate-200/80 flex items-center gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-[#071A1E] text-[#F5B85D] flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    Reunião executiva 100% gratuita e sem compromisso
                  </span>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Card Executivo Escuro com Formulário Multi-Step */}
            <div className="lg:col-span-6 flex flex-col">
              <DiagnosticForm theme="dark" />
            </div>

          </div>

          {/* =========================================================================
              FAQ CURTO (Em fundo Claro Moderno)
          ========================================================================= */}
          <div id="faq" className="max-w-4xl mx-auto pt-8 border-t border-slate-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E4A55]/10 border border-[#0E4A55]/30 text-[10px] font-bold uppercase tracking-wider text-[#0E4A55] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A55]"></span>
                Dúvidas Comuns
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
                O que todo dono de e-commerce pergunta
              </h3>
            </div>

            <div className="space-y-2.5">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-center justify-between gap-4 p-4 sm:p-5 hover:text-[#0E4A55] transition-colors"
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
