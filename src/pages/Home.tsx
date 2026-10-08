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
type MasterTab = "mont_os" | "cfo_dedicado";
type SoftwareSubTab = "dre" | "fluxo" | "ciclo";
type ServiceTab = "metodologia" | "entregáveis";

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedChannel, setSelectedChannel] = useState<ChannelType>("consolidado");
  const [masterTab, setMasterTab] = useState<MasterTab>("mont_os");
  const [softwareSubTab, setSoftwareSubTab] = useState<SoftwareSubTab>("dre");
  const [serviceTab, setServiceTab] = useState<ServiceTab>("entregáveis");

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
      tag: "Visão Geral da Operação",
      venda: 100,
      cmv: 38,
      midia: 18,
      impostos: 11,
      taxas: 12,
      frete: 8,
      margem: 13,
      percentual: "13.0%",
      insight: "De cada R$ 100 vendidos, sobram R$ 13 de margem de contribuição após comissões, frete, devoluções, impostos, mídia e custo do produto. A proporção real muda por canal, SKU e sazonalidade — e é isso que o diagnóstico revela."
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
      insight: "No e-commerce próprio não há comissões de marketplace (18-20%), mas o custo de tráfego pago (CAC/ROAS) exige controle diário na ponta do lápis para não queimar o caixa."
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
      insight: "Volume acelerado com margem comprimida: comissões de até 19% somadas a coparticipação em frete obrigatório exigem precificação cirúrgica por anúncio para evitar faturamento com prejuízo oculto."
    },
    shopee: {
      name: "Shopee & Magalu",
      tag: "Marketplaces Secundários",
      venda: 100,
      cmv: 41,
      midia: 8,
      impostos: 10,
      taxas: 20,
      frete: 11,
      margem: 10,
      percentual: "10.0%",
      insight: "Taxas agressivas somadas a frete reverso e devoluções. Um CFO Terceirizado aponta imediatamente quais SKUs devem ser mantidos ou descontinuados para proteger o caixa."
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
      cause: "Capital de giro mal dimensionado e ciclo financeiro que pede uma estrutura de capital mais eficiente."
    },
    {
      symptom: "Vende muito em marketplace e sobra pouco.",
      cause: "Comissão, frete, devoluções e mídia somados corroendo a margem real por canal."
    },
    {
      symptom: "Decide pela percepção e intuição.",
      cause: "Falta de uma DRE gerencial confiável e de indicadores que mostrem o resultado real de cada decisão."
    },
    {
      symptom: "O crédito é caro ou difícil de conseguir.",
      cause: "Demonstrativos desorganizados para apresentar a bancos e risco fiscal que encarece o spread."
    }
  ];

  const fourDeliverables = [
    {
      title: "FINANCEIRO",
      desc: "Construção e análise de Fluxo de Caixa direto e projetado; Gestão do Ciclo Financeiro; Suporte na Captação de Recursos e na Reestruturação de Passivos bancários."
    },
    {
      title: "CONTROLADORIA",
      desc: "Construção e análise de DRE por canal e SKU; Precificação cirúrgica de produtos; Análise de margem de contribuição real; Planejamento Orçamentário (Orçado x Realizado)."
    },
    {
      title: "INTERLOCUÇÃO E PLANEJAMENTO ESTRATÉGICO",
      desc: "Relacionamento executivo com instituições financeiras e bancos; Direcionamento financeiro da liderança; Elaboração de planejamento anual e metas de expansão com foco em LUXA (Lucro e Caixa)."
    },
    {
      title: "TRIBUTÁRIO & FISCAL",
      desc: "Análise estratégica dos fechamentos contábeis; Recuperação de créditos fiscais no Simples Nacional e Lucro Real; Planejamento tributário nos diferentes canais de venda."
    }
  ];

  const partnerLogos = [
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

  const faqs = [
    {
      q: "O que é um CFO Terceirizado para e-commerce?",
      a: "É um profissional de finanças em nível de diretoria executiva que atua na sua empresa sem o custo fixo de um executivo interno de CLT. Ele assume a inteligência financeira do e-commerce: margem por canal, fluxo de caixa, ciclo operacional, tributação e relação com bancos."
    },
    {
      q: "A Mont Finance substitui a minha contabilidade?",
      a: "Não. A contabilidade cuida do cumprimento das obrigações fiscais e burocráticas. A Mont Finance atua ao lado dela como a diretoria financeira estratégica da empresa, transformando esses dados em planos de ação para gerar mais lucro e caixa."
    },
    {
      q: "Qual a diferença entre Controladoria e CFO Terceirizado completo?",
      a: "A Controladoria (Nível 1) entrega a base gerencial de decisão: DRE por canal, fluxo de caixa e indicadores de margem. O CFO Terceirizado completo (Nível 2) soma planejamento avançado (forecast, orçamentos, múltiplos cenários) e a interlocução direta do CFO com os fundadores e bancos."
    },
    {
      q: "Preciso ter uma estrutura financeira pronta para começar?",
      a: "Não. Parte fundamental do nosso trabalho é organizar o caos de dados entre ERP, gateways e plataformas de marketplace. Quanto mais informação você tiver, mais rápido avançamos, mas o diagnóstico inicial existe exatamente para traçar o mapa de partida."
    },
    {
      q: "Vocês também apoiam na captação de crédito e impostos?",
      a: "Sim. Temos duas frentes especializadas e contratadas à parte: Soluções de Capital (crédito estruturado para capital de giro) e Consultoria Tributária (recuperação de créditos e inteligência fiscal), integradas à mesma visão de caixa."
    },
    {
      q: "O diagnóstico financeiro garante algum resultado?",
      a: "Não. Ele fornece um raio-x transparente da situação atual e aponta onde estão os vazamentos de caixa. O resultado depende da execução disciplinada das decisões tomadas."
    }
  ];

  const testimonials = [
    {
      quote: "Trabalhar com a Mont Finance trouxe clareza absoluta sobre para onde estava indo o dinheiro de cada venda no Mercado Livre e no nosso site. Hoje temos previsibilidade de 90 dias de fluxo de caixa e sabemos exatamente qual SKU investir em mídia.",
      author: "Rodrigo Mendonça",
      role: "Sócio e CEO — Moda & Calçados D2C"
    },
    {
      quote: "Estávamos faturando alto, mas a necessidade de capital de giro engolia qualquer lucro. A Mont Finance reestruturou nosso ciclo financeiro com fornecedores e renegociou linhas de crédito, liberando mais de R$ 400 mil em fôlego de caixa.",
      author: "Mariana Alencar",
      role: "Fundadora — Casa & Decoração Online"
    },
    {
      quote: "A visão de CFO deles sentada na mesa com a gente toda semana transformou nossa governança. Saímos do achismo de faturamento para uma tomada de decisão orientada a margem real de contribuição.",
      author: "Felipe Sartori",
      role: "Diretor Executivo — Distribuidora & E-commerce Tech"
    }
  ];

  return (
    <div className="bg-[#0b0f19] text-white font-sans selection:bg-[#2563eb] selection:text-white min-h-screen">
      
      {/* =========================================================================
          1. HERO SECTION (Fiel ao Hero Ribbon da O2 Inc.: Tipografia Forte & Clean)
      ========================================================================= */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,_#1d4ed8_0%,_transparent_65%)] opacity-25 pointer-events-none blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Category Chip */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse"></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
              CFO Terceirizado para E-commerce
            </span>
          </div>

          {/* O2 Inc. Style Giant Headline */}
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
              Compreender números, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                oxigenar o seu e-commerce.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            O futuro da sua gestão financeira começa aqui. Transformamos dados operacionais de marketplace e loja própria em lucro líquido e caixa previsível.
          </p>

          {/* High-Contrast Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="#cockpit" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:scale-[1.02]"
            >
              conheça nossa solução
            </a>
            <a 
              href="#diagnostico" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-[0.15em] transition-all shadow-md"
            >
              agendar diagnóstico
            </a>
          </div>

          {/* Target Profile Note */}
          <p className="text-xs text-slate-400 font-mono tracking-wide mb-14">
            ✦ Para empresas de e-commerce com faturamento anual acima de R$ 3 milhões.
          </p>

          {/* Hero Ribbon Image Card (O2 Inc. Banner Aesthetic) */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] bg-gradient-to-b from-[#111726] to-[#090d16] p-2 sm:p-4 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-black/60 aspect-[16/8] sm:aspect-[21/9] flex items-center justify-center border border-white/5">
              
              {/* Background texture & grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:32px_32px]"></div>
              
              <div className="relative z-10 text-center px-6 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563eb]/20 border border-[#2563eb]/30 text-[#60a5fa] text-[11px] font-mono font-semibold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Performance Financeira Integrada
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                  Gestão · Finanças · Tributos · Capital
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light">
                  A mesa de decisão financeira definitiva para quem fatura no digital e quer previsibilidade real de caixa.
                </p>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute top-4 left-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                MONT FINANCE · OS
              </div>
              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Operações Ativas
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. THE 3 PILLARS (QUICK-STACK 10 DA O2 INC.)
      ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-[#080c14]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-5 leading-tight">
            O poder da tecnologia e da estratégia nas finanças da sua empresa
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            Tomar decisões estratégicas exige <strong>clareza total dos números</strong>. Mas como transformar dados complexos de múltiplos canais em insights acionáveis, sem perder tempo?
          </p>

          {/* Quick-Stack 3 Pills (O2 Inc. Signature Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all text-center">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#93c5fd] block mb-1">
                METODOLOGIA
              </span>
              <p className="text-xs text-slate-400 font-light">Método DAPE estruturado para a dinâmica do comércio eletrônico</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all text-center">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#93c5fd] block mb-1">
                TECNOLOGIA
              </span>
              <p className="text-xs text-slate-400 font-light">Cockpits gerenciais de DRE, fluxo de caixa e simulações</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all text-center">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#93c5fd] block mb-1">
                CFO DEDICADO
              </span>
              <p className="text-xs text-slate-400 font-light">Diretoria sênior sentada na mesa com os sócios na tomada de decisão</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. LOGO CAROUSEL COM FADE LATERAL (Idêntico ao da O2 Inc.)
      ========================================================================= */}
      <section className="py-14 border-b border-white/10 bg-[#0a0e18] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-xs sm:text-sm font-light text-slate-400 uppercase tracking-widest font-mono">
            São mais de <strong className="text-white font-semibold">R$ 350 Milhões em GMV</strong> que mudaram sua gestão financeira com a Mont Finance
          </p>
        </div>

        {/* Marquee Wrapper with lateral gradient masks */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0a0e18] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0a0e18] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Track */}
          <div className="animate-marquee py-2 flex items-center gap-12">
            {[...partnerLogos, ...partnerLogos].map((brand, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.02] border border-white/5 whitespace-nowrap text-slate-400 hover:text-white transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
                <span className="text-sm font-mono font-medium tracking-wider">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. COCKPIT INTERATIVO: MONT OS & CFO DEDICADO (Estilo OXY & GÊNIO da O2 Inc.)
      ========================================================================= */}
      <section id="cockpit" className="py-24 sm:py-32 border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-5 leading-tight">
              Conheça a solução que traz inteligência financeira em tempo real!
            </h2>
            <p className="text-base text-slate-300 font-light">
              Escolha abaixo para visualizar o cockpit de dados ou a atuação executiva do CFO:
            </p>
          </div>

          {/* O2 Inc. Style Master Tabs: [ MONT OS ] and [ CFO DEDICADO ] */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-white/10">
              <button
                onClick={() => setMasterTab("mont_os")}
                className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all ${
                  masterTab === "mont_os" 
                    ? "bg-[#2563eb] text-white shadow-lg shadow-blue-500/30" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                MONT OS
              </button>
              <button
                onClick={() => setMasterTab("cfo_dedicado")}
                className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all ${
                  masterTab === "cfo_dedicado" 
                    ? "bg-[#2563eb] text-white shadow-lg shadow-blue-500/30" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                CFO DEDICADO
              </button>
            </div>
          </div>

          {/* Master Tab 1: MONT OS */}
          {masterTab === "mont_os" && (
            <div>
              {/* Sub-tabs: DRE | FLUXO DE CAIXA | CICLO FINANCEIRO */}
              <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                <div className="inline-flex p-1 rounded-xl bg-white/[0.03] border border-white/10">
                  <button
                    onClick={() => setSoftwareSubTab("dre")}
                    className={`px-5 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                      softwareSubTab === "dre" 
                        ? "bg-white/15 text-white font-bold" 
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    DRE
                  </button>
                  <button
                    onClick={() => setSoftwareSubTab("fluxo")}
                    className={`px-5 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                      softwareSubTab === "fluxo" 
                        ? "bg-white/15 text-white font-bold" 
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    FLUXO DE CAIXA
                  </button>
                  <button
                    onClick={() => setSoftwareSubTab("ciclo")}
                    className={`px-5 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                      softwareSubTab === "ciclo" 
                        ? "bg-white/15 text-white font-bold" 
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    CICLO FINANCEIRO
                  </button>
                </div>
              </div>

              {/* SUBTAB 1: DRE DESCOMPLICADO */}
              {softwareSubTab === "dre" && (
                <div className="rounded-3xl bg-[#111726] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] overflow-hidden">
                  
                  {/* Header of Cockpit */}
                  <div className="px-6 sm:px-8 py-5 bg-black/40 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                        DRE descomplicado: visualize seus lucros e resultados com clareza.
                      </h3>
                      <p className="text-xs text-slate-400 font-light mt-0.5">
                        Simulação da decomposição de cada R$ 100 vendidos por canal
                      </p>
                    </div>

                    {/* Channel Selector */}
                    <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 overflow-x-auto">
                      {(["consolidado", "site_proprio", "mercado_livre", "shopee"] as ChannelType[]).map((key) => (
                        <button
                          key={key}
                          onClick={() => setSelectedChannel(key)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                            selectedChannel === key 
                              ? "bg-[#2563eb] text-white font-bold shadow-md" 
                              : "text-slate-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {channelData[key].name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Cockpit Content */}
                  <div className="p-6 sm:p-10">
                    
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-8 pb-8 border-b border-white/10">
                      <div>
                        <span className="px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/30 mb-2 inline-block">
                          {activeChannel.tag}
                        </span>
                        <h4 className="text-2xl sm:text-3xl font-display font-bold text-white">
                          Para onde vai cada R$ 100 vendidos?
                        </h4>
                      </div>

                      <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                            Margem de Contribuição Líquida
                          </span>
                          <span className="text-3xl font-mono font-bold text-[#38bdf8]">
                            R$ {activeChannel.margem.toFixed(2)} ({activeChannel.percentual})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Waterfall Bar */}
                    <div className="mb-8">
                      <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2.5">
                        <span>Faturamento Bruto: R$ 100,00</span>
                        <span className="text-[#38bdf8]">Margem de Contribuição: R$ {activeChannel.margem.toFixed(2)}</span>
                      </div>
                      <div className="h-4 w-full rounded-full bg-slate-800 overflow-hidden flex shadow-inner">
                        <div style={{ width: `${activeChannel.cmv}%` }} className="bg-rose-500 h-full" title="CMV"></div>
                        <div style={{ width: `${activeChannel.midia}%` }} className="bg-amber-500 h-full" title="Mídia"></div>
                        <div style={{ width: `${activeChannel.impostos}%` }} className="bg-purple-500 h-full" title="Impostos"></div>
                        <div style={{ width: `${activeChannel.taxas}%` }} className="bg-blue-500 h-full" title="Taxas"></div>
                        <div style={{ width: `${activeChannel.frete}%` }} className="bg-orange-500 h-full" title="Frete"></div>
                        <div style={{ width: `${activeChannel.margem}%` }} className="bg-emerald-400 h-full" title="Margem"></div>
                      </div>
                    </div>

                    {/* Cost Breakdown Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="text-[10px] font-mono text-slate-400 block mb-1">(-) Custo Produto</span>
                        <span className="text-base font-mono font-bold text-rose-400">- R$ {activeChannel.cmv.toFixed(2)}</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="text-[10px] font-mono text-slate-400 block mb-1">(-) Mídia & Ads</span>
                        <span className="text-base font-mono font-bold text-amber-400">- R$ {activeChannel.midia.toFixed(2)}</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="text-[10px] font-mono text-slate-400 block mb-1">(-) Impostos</span>
                        <span className="text-base font-mono font-bold text-purple-400">- R$ {activeChannel.impostos.toFixed(2)}</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="text-[10px] font-mono text-slate-400 block mb-1">(-) Comissões</span>
                        <span className="text-base font-mono font-bold text-blue-400">- R$ {activeChannel.taxas.toFixed(2)}</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="text-[10px] font-mono text-slate-400 block mb-1">(-) Frete & Reversas</span>
                        <span className="text-base font-mono font-bold text-orange-400">- R$ {activeChannel.frete.toFixed(2)}</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                        <span className="text-[10px] font-mono text-emerald-400 font-bold block mb-1">(=) Margem Real</span>
                        <span className="text-base font-mono font-bold text-emerald-300">+ R$ {activeChannel.margem.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Insight Callout */}
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
                      <span className="text-lg">💡</span>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {activeChannel.insight}
                      </p>
                    </div>

                  </div>

                </div>
              )}

              {/* SUBTAB 2: FLUXO DE CAIXA */}
              {softwareSubTab === "fluxo" && (
                <div className="rounded-3xl bg-[#111726] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] p-6 sm:p-10">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                    Saiba com facilidade a previsão do seu fluxo de caixa dos próximos dias ou meses.
                  </h3>
                  <p className="text-xs text-slate-400 font-light mb-8">
                    Visão projetada a 30, 60 e 90 dias com conciliação diária de adquirentes e marketplaces
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                      <span className="text-xs font-mono text-slate-400 block mb-1">Recebíveis Previstos (D+30)</span>
                      <span className="text-2xl font-mono font-bold text-emerald-400">R$ 482.350,00</span>
                      <span className="text-[11px] text-slate-500 block mt-2">ML, Shopee e gateways de cartão</span>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                      <span className="text-xs font-mono text-slate-400 block mb-1">Compromissos Fornecedores & Mídia</span>
                      <span className="text-2xl font-mono font-bold text-rose-400">R$ 389.120,00</span>
                      <span className="text-[11px] text-slate-500 block mt-2">Boletos, frete e compras de estoque</span>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                      <span className="text-xs font-mono text-slate-400 block mb-1">Saldo Líquido Projetado</span>
                      <span className="text-2xl font-mono font-bold text-[#38bdf8]">+ R$ 93.230,00</span>
                      <span className="text-[11px] text-slate-500 block mt-2">Sem necessidade de antecipação</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#0b0f19] border border-white/10 text-xs text-slate-300 font-light flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Eliminamos o susto com a folha ou imposto: cada centavo é previsto antes de virar urgência.</span>
                  </div>
                </div>
              )}

              {/* SUBTAB 3: CICLO FINANCEIRO */}
              {softwareSubTab === "ciclo" && (
                <div className="rounded-3xl bg-[#111726] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] p-6 sm:p-10">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                    Ciclo financeiro sob controle: do faturamento ao caixa, com a necessidade de capital de giro sempre clara.
                  </h3>
                  <p className="text-xs text-slate-400 font-light mb-8">
                    Equacionamento dos 3 prazos operacionais para que o e-commerce cresça sem sufocar o caixa
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">PME · Estoque Médio</span>
                      <span className="text-2xl font-mono font-bold text-white">42 Dias</span>
                      <p className="text-[11px] text-slate-500 mt-1">Tempo do produto na prateleira</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">PMR · Recebimento</span>
                      <span className="text-2xl font-mono font-bold text-white">18 Dias</span>
                      <p className="text-[11px] text-slate-500 mt-1">Tempo de repasse dos canais</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">PMP · Pagamento</span>
                      <span className="text-2xl font-mono font-bold text-white">35 Dias</span>
                      <p className="text-[11px] text-slate-500 mt-1">Prazo negociado com fornecedores</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#2563eb]/20 border border-[#2563eb]/40">
                      <span className="text-[10px] font-mono uppercase text-[#93c5fd] font-bold block mb-1">NCG · Ciclo Operacional</span>
                      <span className="text-2xl font-mono font-bold text-[#38bdf8]">25 Dias</span>
                      <p className="text-[11px] text-slate-300 mt-1">Gap coberto com caixa próprio</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 font-light">
                    *Quando o e-commerce antecipa recebíveis de forma automática, ele mascara um problema no ciclo de estoque ou no prazo com fornecedores.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Master Tab 2: CFO DEDICADO */}
          {masterTab === "cfo_dedicado" && (
            <div className="rounded-3xl bg-[#111726] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] p-8 sm:p-12 text-center max-w-4xl mx-auto">
              <span className="w-16 h-16 rounded-2xl bg-[#2563eb]/20 border border-[#2563eb]/40 text-[#60a5fa] flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white mb-4">
                O primeiro CFO as a Service especializado em e-commerce do Brasil.
              </h3>
              <p className="text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-8">
                Um diretor financeiro sênior dedicado à sua operação. Reuniões estratégicas de diretoria, análises em tempo real, governança de estoque e diálogo de alto nível com bancos e investidores.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto mb-8">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-mono font-bold text-[#38bdf8] block mb-1">01. Mesa de Decisão</span>
                  <p className="text-xs text-slate-300 font-light">Alinhamento semanal com os fundadores sobre preço, campanhas e budget.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-mono font-bold text-[#38bdf8] block mb-1">02. Defesa com Bancos</span>
                  <p className="text-xs text-slate-300 font-light">Apresentação técnica de balanço para conseguir taxas mais baratas e limites maiores.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs font-mono font-bold text-[#38bdf8] block mb-1">03. Visão de LUXA</span>
                  <p className="text-xs text-slate-300 font-light">Foco implacável em Lucro e Caixa, e não apenas em faturamento bruto.</p>
                </div>
              </div>
              <a
                href="#diagnostico"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all"
              >
                <span>Falar com nosso CFO</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* Bottom Button */}
          <div className="text-center mt-12">
            <a 
              href="#diagnostico" 
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-[0.15em] transition-all"
            >
              QUERO MAIS INFORMAÇÕES
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. RESULTADOS (POR QUÊ CONFIAR NA MONT FINANCE? - Estilo O2 Inc.)
      ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-white/10 bg-[#080c14]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#38bdf8] font-bold block mb-3">
              POR QUÊ CONFIAR NA MONT FINANCE?
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white">
              Nossos resultados falam por nós
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Proof Bullets */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#38bdf8] flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </span>
                <div>
                  <strong className="text-base font-semibold text-white block">Presente nos principais polos de e-commerce</strong>
                  <span className="text-xs text-slate-400 font-light">São Paulo, Santa Catarina, Minas Gerais, Goiás e Rio de Janeiro</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </span>
                <div>
                  <strong className="text-base font-semibold text-white block">+ R$ 350 Milhões em GMV monitorado</strong>
                  <span className="text-xs text-slate-400 font-light">Volume transacionado em lojas próprias e marketplaces</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#38bdf8] flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </span>
                <div>
                  <strong className="text-base font-semibold text-white block">+ 4.6 p.p. de expansão média de margem</strong>
                  <span className="text-xs text-slate-400 font-light">Corte de SKUs deficitários e ajuste fino de precificação</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </span>
                <div>
                  <strong className="text-base font-semibold text-white block">90 dias de visão antecipada de liquidez</strong>
                  <span className="text-xs text-slate-400 font-light">Previsibilidade total para compras de estoque e campanhas</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <div>
                  <strong className="text-base font-semibold text-white block">92 é o NPS dado pelos nossos clientes</strong>
                  <span className="text-xs text-slate-400 font-light">Índice de satisfação e recomendação entre fundadores</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Infographic Hub */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#111726] border border-white/10 relative overflow-hidden shadow-2xl">
                
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 block mb-1">Status Operacional</span>
                    <h3 className="text-xl font-display font-bold text-white">Hub de Inteligência E-commerce</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                    Ao Vivo
                  </span>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-slate-300">Margem Bruta vs. Comissões & Ads</span>
                      <span className="text-emerald-400 font-bold">+18.4% Líquido</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#2563eb] to-[#38bdf8] w-[78%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-slate-300">Cobertura de Caixa de Emergência</span>
                      <span className="text-[#38bdf8] font-bold">94 Dias</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[85%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-slate-300">Dependência de Antecipação de Recebíveis</span>
                      <span className="text-slate-400 font-bold">0% (Eliminado)</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-emerald-400 w-[100%]"></div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Quer saber esses números na sua empresa?</span>
                  <a href="#diagnostico" className="text-xs font-bold text-[#38bdf8] hover:text-white flex items-center gap-1">
                    Ver Diagnóstico <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. CFO AS A SERVICE: METODOLOGIA VS O QUE ENTREGAMOS (Estilo O2 Inc.)
      ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#38bdf8] font-bold block mb-3">
              CFO AS A SERVICE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-5 leading-tight">
              A visão estratégica que você precisa para impulsionar seus resultados
            </h2>
            <p className="text-base text-slate-300 font-light">
              Com nosso serviço de CFO as a Service, você conta com um CFO especializado que aplica nossa metodologia na sua empresa.
            </p>
          </div>

          {/* Subtabs: Metodologia vs O que entregamos */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-white/10">
              <button
                onClick={() => setServiceTab("entregáveis")}
                className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all ${
                  serviceTab === "entregáveis" 
                    ? "bg-[#2563eb] text-white shadow-lg shadow-blue-500/30" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                O QUE ENTREGAMOS
              </button>
              <button
                onClick={() => setServiceTab("metodologia")}
                className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all ${
                  serviceTab === "metodologia" 
                    ? "bg-[#2563eb] text-white shadow-lg shadow-blue-500/30" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                NOSSA METODOLOGIA
              </button>
            </div>
          </div>

          {/* TAB: O QUE ENTREGAMOS */}
          {serviceTab === "entregáveis" && (
            <div>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-white">
                  Mais tempo para o CEO da empresa focar atenção na estratégia e sair do operacional.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {fourDeliverables.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-8 rounded-3xl bg-[#111726]/80 border border-white/10 hover:border-[#38bdf8]/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#38bdf8] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                        {idx === 0 && <DollarSign className="w-5 h-5" />}
                        {idx === 1 && <BarChart3 className="w-5 h-5" />}
                        {idx === 2 && <Compass className="w-5 h-5" />}
                        {idx === 3 && <Scale className="w-5 h-5" />}
                      </div>
                      <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-white mb-3">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: NOSSA METODOLOGIA */}
          {serviceTab === "metodologia" && (
            <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#111726] border border-white/10 text-center">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#38bdf8] block mb-3">
                MÉTODO DAPE
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Dados · Análise · Planejamento · Execução
              </h3>
              <p className="text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
                Em uma empresa de e-commerce, milhares de dados são gerados todos os dias. O Método DAPE mapeia esses dados, transformando-os em inteligência para otimizar aquilo que mais importa dentro de qualquer empresa do mundo: <strong>LUXA — lucro e caixa</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-left">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-lg font-bold text-[#38bdf8] block mb-1">D · Dados</span>
                  <p className="text-xs text-slate-400 font-light">Reunimos dados comerciais, fiscais e bancários dispersos.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-lg font-bold text-[#38bdf8] block mb-1">A · Análise</span>
                  <p className="text-xs text-slate-400 font-light">Identificamos vazamentos de margem por canal e SKU.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-lg font-bold text-[#38bdf8] block mb-1">P · Plano</span>
                  <p className="text-xs text-slate-400 font-light">Orçamento, metas de canal e fluxo de caixa de 90 dias.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-lg font-bold text-[#38bdf8] block mb-1">E · Execução</span>
                  <p className="text-xs text-slate-400 font-light">Acompanhamento semanal com o CFO na mesa.</p>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <a 
              href="#diagnostico" 
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all"
            >
              FALAR COM UM ESPECIALISTA
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. CAUSA ECONÔMICA (SINTOMAS VS CAUSAS)
      ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-white/10 bg-[#080c14]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#38bdf8] font-bold block mb-3">
              Causa Econômica
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6">
              O que parece problema de caixa ou de vendas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                costuma ter outra origem.
              </span>
            </h2>
            <p className="text-base text-slate-300 font-light leading-relaxed">
              Antes de decidir vender mais, vale saber onde o dinheiro está ficando. Estes são os sintomas mais comuns que ouvimos e o que costuma estar por trás:
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {symptoms.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-7 rounded-2xl bg-[#111726]/80 border border-white/10 hover:border-[#38bdf8]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="md:w-5/12 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                      Você sente:
                    </span>
                    <strong className="text-sm font-semibold text-white block">
                      {item.symptom}
                    </strong>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center text-slate-600 group-hover:text-[#38bdf8] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>

                <div className="md:w-6/12 flex items-start gap-3.5 pl-0 md:pl-6 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0">
                  <div className="w-8 h-8 rounded-xl bg-[#2563eb]/20 border border-[#2563eb]/40 text-[#60a5fa] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#38bdf8] font-bold block mb-0.5">
                      Pode estar por trás:
                    </span>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
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
          8. NÍVEIS DE SERVIÇO (NÍVEL 1 vs NÍVEL 2)
      ========================================================================= */}
      <section id="niveis-de-servico" className="py-24 sm:py-32 border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#38bdf8] font-bold block mb-3">
              Níveis de Serviço
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6">
              Dois níveis de CFO Terceirizado, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                conforme o momento da empresa.
              </span>
            </h2>
            <p className="text-base text-slate-300 font-light leading-relaxed">
              Os dois começam pela mesma pergunta: qual é o resultado real do negócio e o que fazer com ele. A diferença está na profundidade do acompanhamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            
            {/* Nível 1 - Controladoria */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111726]/80 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
                  NÍVEL 01
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">Controladoria</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-8">
                  Visão de CFO sobre os seus números, para você decidir com base em fatos e não em percepção.
                </p>

                <ul className="space-y-4 mb-8 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>Plano de contas gerencial pensado para e-commerce</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>DRE gerencial com margem por canal e SKU</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>Fluxo de caixa com visão dos próximos meses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>Indicadores de acompanhamento e leitura mensal com você</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs text-slate-400 block mb-6">
                  <strong>Indicado para:</strong> quem precisa enxergar a margem real e o caixa com clareza e ainda não tem essa base confiável.
                </span>
                <a 
                  href="#diagnostico" 
                  className="w-full py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-bold uppercase tracking-[0.15em] text-center block transition-all"
                >
                  Agendar para Nível 1
                </a>
              </div>
            </div>

            {/* Nível 2 - CFO Terceirizado Completo */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111726] border-2 border-[#2563eb] relative flex flex-col justify-between shadow-[0_20px_50px_rgba(37,99,235,0.25)]">
              
              <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-[#2563eb] text-white text-[10px] font-mono font-bold uppercase tracking-widest shadow-md">
                Mais Escolhido
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#38bdf8] block mb-2">
                  NÍVEL 02
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">CFO Terceirizado completo</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-8">
                  Tudo da Controladoria, mais planejamento financeiro e um CFO como interlocutor direto da sua liderança.
                </p>

                <ul className="space-y-4 mb-8 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>Tudo o que está no nível Controladoria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>Orçamento, forecast e análise de variância mensal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>Cenários para decisões de estoque, preço, canal e investimento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>Interlocução estratégica direta com o CFO e bancos</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs text-slate-400 block mb-6">
                  <strong>Indicado para:</strong> quem já cresce e precisa de planejamento, cenários e um parceiro estratégico nas decisões.
                </span>
                <a 
                  href="#diagnostico" 
                  className="w-full py-4 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-[0.15em] text-center block transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)]"
                >
                  Agendar para Nível 2
                </a>
              </div>
            </div>

          </div>

          {/* Serviços contratados à parte */}
          <div className="max-w-5xl mx-auto p-8 rounded-3xl bg-white/[0.02] border border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] font-bold block mb-4">
              Serviços contratados à parte
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#0b0f19] border border-white/10">
                <h4 className="text-base font-bold text-white mb-2">Inteligência Tributária</h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                  Revisão de créditos e riscos, planejamento e estrutura fiscal nos canais, sempre conectados ao efeito em margem e caixa.
                </p>
                <Link to="/consultoria-tributaria" className="text-xs font-bold text-[#38bdf8] hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  Ver Consultoria Tributária <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-[#0b0f19] border border-white/10">
                <h4 className="text-base font-bold text-white mb-2">Soluções de Capital</h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                  Diagnóstico da necessidade de capital de giro, preparação para captação e relacionamento técnico com instituições financeiras.
                </p>
                <Link to="/solucoes-de-capital" className="text-xs font-bold text-[#38bdf8] hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  Ver Soluções de Capital <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. DEPOIMENTOS (CLIENTES SATISFEITOS - Estilo O2 Inc.)
      ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-white/10 bg-[#080c14]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#38bdf8] font-bold block mb-3">
              DEPOIMENTOS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white">
              Clientes satisfeitos, negócios transformados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-3xl bg-[#111726]/80 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl text-[#38bdf8] font-serif leading-none block mb-4">“</span>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6 italic">
                    {t.quote}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <strong className="text-sm font-semibold text-white block">{t.author}</strong>
                  <span className="text-xs text-slate-400 font-light">{t.role}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          10. DIAGNÓSTICO E FORMULÁRIO (Split Section)
      ========================================================================= */}
      <section id="diagnostico" className="py-24 sm:py-32 border-b border-white/10 bg-[#0b0f19]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading and Value */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#38bdf8] font-bold block mb-3">
                FALE COM UM ESPECIALISTA
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Comece entendendo para onde vai o dinheiro da sua operação.
              </h2>
              <p className="text-base text-slate-300 font-light leading-relaxed mb-8">
                O diagnóstico é uma conversa estratégica com um especialista da Mont Finance sobre a situação do seu e-commerce.
              </p>

              <div className="space-y-4 mb-8 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2563eb]/20 text-[#60a5fa] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Mapeamos o que você já sabe e o que ainda não enxerga sobre margem, caixa, estoque e tributos.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2563eb]/20 text-[#60a5fa] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Indicamos por onde começar e se faz sentido a Controladoria, o CFO Terceirizado completo ou outra frente.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2563eb]/20 text-[#60a5fa] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Você sai com clareza sobre os próximos passos, mesmo que decida não contratar.</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#38bdf8]" />
                  <span>WhatsApp: (62) 99920-0405</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#38bdf8]" />
                  <span>contato@montgestao.com.br</span>
                </div>
                <p className="text-[11px] text-slate-500 pt-1">
                  *Os resultados variam conforme o caso de cada empresa. Nenhum resultado é garantido.
                </p>
              </div>
            </div>

            {/* Right Column: Diagnostic Form */}
            <div className="lg:col-span-7">
              <DiagnosticForm />
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          11. FAQ (Acordeão Limpo)
      ========================================================================= */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#38bdf8] font-bold block mb-3">
              Perguntas Frequentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              O que empresários de e-commerce perguntam antes de começar
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-5">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 py-2 hover:text-[#38bdf8] transition-colors"
                >
                  <span className="text-base font-semibold text-white">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#38bdf8] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-white' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="pt-3 pb-2 text-sm text-slate-300 font-light leading-relaxed">
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

function Globe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
