import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  ArrowRight, 
  ShieldCheck, 
  BarChart3, 
  Coins, 
  CheckCircle2, 
  Database, 
  LineChart, 
  CalendarCheck, 
  Layers, 
  Building2, 
  Briefcase, 
  Activity,
  Award,
  Zap,
  BookOpen,
  Landmark,
  ArrowUpRight,
  TrendingDown,
  ChevronRight,
  ChevronLeft,
  Play,
  MapPin,
  Clock,
  Sparkles,
  Phone,
  Mail,
  Check
} from "lucide-react";
import { useState, useEffect } from "react";
import { DiagnosticForm } from "../components/DiagnosticForm";

export function Home() {
  const [activeHeroTab, setActiveHeroTab] = useState<"performance" | "formacao" | "credito">("performance");
  const [activeOsTab, setActiveOsTab] = useState<"controladoria" | "fpa" | "cfo">("controladoria");
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev % 4) + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const osFeatures = {
    controladoria: [
      {
        title: "Saneamento & DRE Gerencial em Tempo Real",
        desc: "Padronização do plano de contas e conciliações diárias para enxergar o lucro operacional verdadeiro, sem distorções tributárias ou contábeis.",
        kpi: "Margem EBITDA Transparente"
      },
      {
        title: "Apuração Cirúrgica de Margens de Contribuição",
        desc: "Identificação exata do lucro líquido por família de produtos, canais de distribuição e clientes para eliminar vendas que destroem valor.",
        kpi: "Rentabilidade por SKU & Canal"
      },
      {
        title: "Gestão do Ciclo de Caixa & Capital de Giro",
        desc: "Controle rigoroso dos prazos médios (PMP, PMRE, PMV) para estancar vazamentos invisíveis e desrepresar dinheiro parado no estoque.",
        kpi: "Redução Média de -18 Dias no Ciclo"
      },
      {
        title: "Ponto de Equilíbrio & Custos Fixos",
        desc: "Mapeamento minucioso de cada despesa da operação e cálculo do faturamento mínimo de segurança para manter a empresa sempre no azul.",
        kpi: "Blindagem Operacional Contínua"
      }
    ],
    fpa: [
      {
        title: "Projeção Dinâmica de Caixa (30, 60 e 90 dias)",
        desc: "Modelagem preditiva contínua de entradas e saídas para antecipar compras de matéria-prima e evitar a armadilha do endividamento emergencial.",
        kpi: "Previsibilidade de Liquidez Total"
      },
      {
        title: "Orçamento Empresarial Matricial (Budget)",
        desc: "Planejamento orçamentário anual com metas financeiras claras por setor, permitindo que a diretoria delegue sem perder o controle dos custos.",
        kpi: "Controle Matricial por Centro de Custo"
      },
      {
        title: "Acompanhamento Contínuo: Realizado vs. Orçado",
        desc: "Rituais sistemáticos de análise de desvios com correções de rota ágeis antes que um problema operacional comprometa o mês.",
        kpi: "Disciplina de Execução & Metas"
      },
      {
        title: "Simulação de Cenários & Stress Testing",
        desc: "Modelagem de impacto de oscilações de juros, custos de insumos e variações de demanda para decisões sem risco cego.",
        kpi: "Decisões com Margem de Segurança"
      }
    ],
    cfo: [
      {
        title: "Comitê Executivo Mensal de Resultados",
        desc: "Reuniões estruturadas de governança com os sócios, apresentando cockpit executivo de métricas, direcionamento estratégico e cobrança de metas.",
        kpi: "Decisões Baseadas em Dados, Não Achismos"
      },
      {
        title: "Interlocução Estratégica com Bancos",
        desc: "Defesa técnica do balanço patrimonial junto às mesas e comitês de crédito para assegurar limites maiores com spreads reduzidos.",
        kpi: "Redução Efetiva do Custo da Dívida"
      },
      {
        title: "Alongamento & Estruturação do Perfil de Dívida",
        desc: "Substituição de dívidas asfixiantes de curto prazo por linhas estruturadas de longo prazo, devolvendo fôlego ao fluxo de caixa.",
        kpi: "Alavancagem Saudável & Equilibrada"
      },
      {
        title: "Direção Financeira Sênior ao Lado dos Sócios",
        desc: "Presença consultiva do head advisor para avaliar M&A, investimentos em ativos fixos (Capex) e planejamento tributário-financeiro.",
        kpi: "Maturidade de Grande Corporação"
      }
    ]
  };

  return (
    <div className="bg-obsidian text-white font-sans min-h-screen selection:bg-accent-premium selection:text-obsidian">
      
      {/* =========================================================================
          1. HERO SECTION (Cinematic Executive Experience + High-Converting Copy)
      ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Ambient Glows & Subtle Texture */}
        <div className="absolute inset-0 pointer-events-none -z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-premium/15 via-obsidian/60 to-transparent"></div>
          <div className="absolute top-[-10%] right-[15%] w-[450px] h-[450px] bg-accent-premium/10 blur-[140px] rounded-full"></div>
          <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 blur-[160px] rounded-full"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-premium/15 border border-accent-premium/40 text-accent-premium text-xs font-bold tracking-[0.25em] uppercase mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent-premium animate-pulse"></span>
                Controladoria · FP&A · Crédito Estruturado
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-light leading-[1.08] tracking-tight text-white mb-8">
                A inteligência financeira que transforma <br className="hidden sm:block" />
                <span className="font-serif italic text-accent-premium font-normal">faturamento bruto em lucro real e caixa livre.</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/85 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
                Controladoria de precisão, FP&A contínuo e acesso a capital estruturado com o método DAPE. Desenvolvido sob medida para <span className="text-white font-medium">indústrias e distribuidoras que faturam acima de R$ 3 milhões ao ano</span> e não aceitam operar no escuro.
              </p>

              {/* Main Primary CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                <Link 
                  to="/diagnostico" 
                  className="w-full sm:w-auto px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium hover:bg-white transition-all duration-300 rounded-full shadow-[0_0_35px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] hover:scale-[1.02]"
                >
                  Agendar Diagnóstico Estratégico
                </Link>
                <a 
                  href="#cockpit" 
                  className="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-white/90 hover:text-white border border-white/20 hover:border-accent-premium transition-all duration-300 rounded-full hover:bg-white/[0.04]"
                >
                  Conhecer o Cockpit
                </a>
              </div>

              {/* Sub-Hero Feature Selector (Inspired by O2 Inc. Hero Pills) */}
              <div className="pt-8 border-t border-white/10 max-w-2xl mx-auto">
                <p className="text-xs uppercase tracking-[0.25em] text-accent-premium font-bold mb-4">
                  Soluções integradas para o momento da sua empresa:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {[
                    { id: "performance", label: "Performance Program · Carro-Chefe", to: "/performance-program" },
                    { id: "formacao", label: "Formação CEO/CFO · Capacitação", to: "/formacao-ceo-cfo" },
                    { id: "credito", label: "Assessoria de Crédito · Captação", to: "/assessoria-credito" },
                  ].map((item) => (
                    <Link
                      key={item.id}
                      to={item.to}
                      className="px-5 py-2.5 rounded-full text-xs font-medium tracking-wider border border-white/20 bg-white/[0.04] text-white/90 hover:text-obsidian hover:bg-accent-premium hover:border-accent-premium transition-all duration-300 shadow-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SOCIAL PROOF / NUMBERS MARQUEE STRIP
      ========================================================================= */}
      <section className="py-10 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl lg:text-5xl font-display font-light text-white mb-1">
                +R$ <span className="font-semibold text-accent-premium">300 Mi</span>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-white/60 font-mono">Volume Anual sob Nossa Controladoria</p>
            </div>
            <div className="p-4">
              <div className="text-3xl lg:text-5xl font-display font-light text-white mb-1">
                +R$ <span className="font-semibold text-accent-premium">50 Mi</span>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-white/60 font-mono">Em Crédito Bancário Estruturado</p>
            </div>
            <div className="p-4">
              <div className="text-3xl lg:text-5xl font-display font-light text-white mb-1">
                &gt; R$ <span className="font-semibold text-accent-premium">3 Mi/ano</span>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-white/60 font-mono">Foco Estrito em Indústrias & Distribuidoras</p>
            </div>
            <div className="p-4">
              <div className="text-3xl lg:text-5xl font-display font-light text-white mb-1">
                100<span className="font-semibold text-accent-premium">%</span>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-white/60 font-mono">Data-Driven com Método DAPE</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CONTRAST BREAK: COCKPIT SHOWCASE (Light/Off-White Section)
      ========================================================================= */}
      <section id="cockpit" className="py-24 lg:py-32 bg-[#F8F9FA] text-obsidian relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-muted text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
              Cockpit de Controle em Tempo Real
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-obsidian tracking-tight mb-6 leading-tight">
              Decisões baseadas em números vivos. <br />
              <span className="font-serif italic text-accent-muted">Nunca mais opere no escuro ou pelo feeling.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Enquanto a maioria das empresas espera o mês seguinte para descobrir se teve lucro ou prejuízo, nossos clientes acompanham DRE gerencial diária, margem de contribuição por SKU e fluxo de caixa projetado a 90 dias.
            </p>
          </div>

          {/* Dual Mockup Showcase (Desktop + Mobile Cards) */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-obsidian rounded-3xl p-4 sm:p-8 border border-slate-200 shadow-2xl text-white relative overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  <span className="text-xs font-mono text-white/50 ml-3 hidden sm:inline">mont-gestao-cockpit.io / faturamento-3m-plus</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Dados Sincronizados
                  </span>
                </div>
              </div>

              {/* Grid of Key Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl">
                  <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                    <span>RECEITA LÍQUIDA</span>
                    <span className="text-emerald-400 font-bold">+14.2%</span>
                  </div>
                  <div className="text-2xl font-display font-semibold text-white">R$ 3.840.000</div>
                  <div className="text-[11px] text-white/50 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-emerald-400" /> Mês de referência
                  </div>
                </div>

                <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl">
                  <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                    <span>MARGEM EBITDA</span>
                    <span className="text-accent-premium font-bold">+5.4 p.p.</span>
                  </div>
                  <div className="text-2xl font-display font-semibold text-accent-premium">19.4%</div>
                  <div className="text-[11px] text-white/50 mt-1 flex items-center gap-1">
                    <BarChart3 className="w-3 h-3 text-accent-premium" /> Acima da meta
                  </div>
                </div>

                <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl">
                  <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                    <span>CICLO FINANCEIRO</span>
                    <span className="text-emerald-400 font-bold">-18 dias</span>
                  </div>
                  <div className="text-2xl font-display font-semibold text-white">42 dias</div>
                  <div className="text-[11px] text-white/50 mt-1 flex items-center gap-1">
                    <TrendingDown className="w-3 h-3 text-emerald-400" /> Giro de estoque otimizado
                  </div>
                </div>

                <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl">
                  <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                    <span>CRÉDITO ESTRUTURADO</span>
                    <span className="text-emerald-400 font-bold">Aprovado</span>
                  </div>
                  <div className="text-2xl font-display font-semibold text-white">R$ 5.500.000</div>
                  <div className="text-[11px] text-white/50 mt-1 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" /> Linha de longo prazo
                  </div>
                </div>
              </div>

              {/* DAPE Live Cycle Bar */}
              <div className="p-4 sm:p-5 bg-black/40 border border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-accent-premium text-obsidian font-display font-bold text-xs flex items-center justify-center">
                    DAPE
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-white">Ciclo Contínuo em Execução</div>
                    <div className="text-[11px] text-white/60">Dados → Análise → Planejamento → Execução</div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[11px]">
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">1. Dados Conciliados ✓</span>
                  <span className="text-accent-premium">→</span>
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">2. Margens Apuradas ✓</span>
                  <span className="text-accent-premium">→</span>
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">3. Orçamento Ajustado ✓</span>
                  <span className="text-accent-premium">→</span>
                  <span className="px-3 py-1 rounded-md bg-accent-premium/20 text-accent-premium font-semibold border border-accent-premium/40">4. Comitê Ativo</span>
                </div>
              </div>

            </div>

            {/* Bottom Section Action Button */}
            <div className="text-center mt-12">
              <Link
                to="/diagnostico"
                className="inline-flex items-center gap-3 px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium hover:bg-obsidian hover:text-white transition-all duration-300 rounded-full shadow-lg shadow-accent-premium/20"
              >
                Solicitar Demonstração do Cockpit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. GEOGRAPHY & SCALE ("Nossos resultados falam por nós")
      ========================================================================= */}
      <section className="py-24 lg:py-32 bg-obsidian text-white relative overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Bold stats */}
            <div className="lg:col-span-6">
              <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                Impacto Comprovado & Escala
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-8 leading-tight">
                Nossos resultados <br />
                <span className="font-serif italic text-accent-premium">falam pelo balanço da sua empresa.</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent-premium/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-accent-premium/15 text-accent-premium flex items-center justify-center shrink-0 mt-1">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-white">+R$ 300 Milhões</div>
                    <p className="text-sm text-white/70 font-light">Em faturamento sob nossa governança financeira. Empresas que trocaram a ansiedade do caixa pela disciplina de indicadores confiáveis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent-premium/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-accent-premium/15 text-accent-premium flex items-center justify-center shrink-0 mt-1">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-accent-premium">+R$ 50 Milhões</div>
                    <p className="text-sm text-white/70 font-light">Captados em crédito estruturado com taxas reduzidas (CDI+) via esteira digital, sem sufocar a margem da operação com juros abusivos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent-premium/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-accent-premium/15 text-accent-premium flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-white">-18 dias de Ciclo</div>
                    <p className="text-sm text-white/70 font-light">Redução média no ciclo financeiro. Dinheiro que estava represado em estoques e prazos desajustados que volta imediatamente para o caixa.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent-premium/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-accent-premium/15 text-accent-premium flex items-center justify-center shrink-0 mt-1">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-white">+120 Operações Estruturadas</div>
                    <p className="text-sm text-white/70 font-light">Indústrias de transformação, distribuidoras e atacadistas que hoje operam com comitês ágeis e previsibilidade de lucro.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Geographic Map Footprint */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-widest text-accent-premium font-mono font-bold">Presença em Todo o Território Nacional</span>
                  <span className="text-xs text-white/60">Presencial & Digital</span>
                </div>

                {/* Stylized Brazil Hubs Representation */}
                <div className="relative aspect-[4/3] bg-black/40 rounded-2xl p-6 border border-white/5 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  
                  {/* Glowing Hub Nodes */}
                  <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { state: "São Paulo", hub: "Capital & Interior", active: true },
                      { state: "Goiás", hub: "Goiânia & Anápolis", active: true },
                      { state: "Minas Gerais", hub: "BH & Triângulo", active: true },
                      { state: "Paraná", hub: "Curitiba & Maringá", active: true },
                      { state: "Santa Catarina", hub: "Joinville & Vale", active: true },
                      { state: "Rio Grande do Sul", hub: "Porto Alegre & Serra", active: true },
                      { state: "Mato Grosso", hub: "Cuiabá & Rondonópolis", active: true },
                      { state: "Bahia", hub: "Salvador & Feira", active: true },
                      { state: "Rio de Janeiro", hub: "Capital & Região", active: true },
                    ].map((hub, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent-premium/40 transition-all">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="w-2 h-2 rounded-full bg-accent-premium animate-pulse"></span>
                          <span className="text-xs font-bold text-white">{hub.state}</span>
                        </div>
                        <span className="text-[10px] text-white/60 block">{hub.hub}</span>
                      </div>
                    ))}
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent-premium" />
                      Atendimento estratégico a indústrias em todo o Brasil
                    </span>
                    <span className="text-accent-premium font-mono font-bold">100% Integrado</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. OS WINDOW SOLUTION SHOWCASE ("Performance Program")
      ========================================================================= */}
      <section id="solucoes" className="py-24 lg:py-32 bg-white/[0.02] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Product pitch */}
            <div className="lg:col-span-5 sticky top-32">
              <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                Solução Carro-Chefe · Recorrente
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-6 leading-tight">
                Performance <br />
                <span className="font-serif italic text-accent-premium">Program</span>
              </h2>
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-6">
                A maturidade financeira e o rigor de controladoria de uma grande corporação integrados na rotina da sua indústria ou distribuidora.
              </p>
              
              <ul className="space-y-3.5 mb-8 text-sm text-white/90 font-light">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-premium/15 text-accent-premium flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  Ciclo contínuo DAPE (Dados, Análise, Planejamento, Execução)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-premium/15 text-accent-premium flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  Controladoria Estratégica & FP&A integrados na rotina
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-premium/15 text-accent-premium flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  Destrave imediato de capital de giro represado
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-premium/15 text-accent-premium flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  Upgrade disponível para <strong>CFO as a Service</strong>
                </li>
              </ul>

              <Link
                to="/performance-program"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium hover:bg-white transition-all duration-300 rounded-full shadow-lg shadow-accent-premium/20"
              >
                Conhecer o Programa <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right Side: macOS Style Window with Bento Grid */}
            <div className="lg:col-span-7">
              <div className="bg-[#121620] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                
                {/* macOS Window Top Bar */}
                <div className="px-6 py-4 bg-obsidian border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                    <span className="text-xs font-mono text-white/60 ml-3">mont-os / performance-suite</span>
                  </div>

                  {/* Window Tabs */}
                  <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
                    <button
                      onClick={() => setActiveOsTab("controladoria")}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        activeOsTab === "controladoria" 
                          ? "bg-accent-premium text-obsidian font-bold shadow" 
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      Controladoria
                    </button>
                    <button
                      onClick={() => setActiveOsTab("fpa")}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        activeOsTab === "fpa" 
                          ? "bg-accent-premium text-obsidian font-bold shadow" 
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      FP&A
                    </button>
                    <button
                      onClick={() => setActiveOsTab("cfo")}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        activeOsTab === "cfo" 
                          ? "bg-accent-premium text-obsidian font-bold shadow" 
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      CFO Service
                    </button>
                  </div>
                </div>

                {/* 4 Bento Cards inside the Window */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {osFeatures[activeOsTab].map((card, i) => (
                      <div
                        key={i}
                        className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-accent-premium/40 transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono text-accent-premium font-bold">0{i + 1}</span>
                            <span className="w-2 h-2 rounded-full bg-accent-premium/40 group-hover:bg-accent-premium transition-colors"></span>
                          </div>
                          <h4 className="text-lg font-display font-medium text-white mb-2">{card.title}</h4>
                          <p className="text-xs text-white/70 font-light leading-relaxed mb-4">{card.desc}</p>
                        </div>
                        <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-accent-premium">
                          {card.kpi}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. PRESS, CREDENTIALS & AUTHORITY (Leander Venâncio)
      ========================================================================= */}
      <section id="autoridade" className="py-24 lg:py-32 bg-obsidian text-white relative overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Founder Photo Card */}
            <div className="lg:col-span-5">
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl relative overflow-hidden">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src="/assets/Foto Leander (2).png" 
                    alt="Leander Venâncio" 
                    className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-obsidian/95 backdrop-blur-md border border-white/10 text-xs font-semibold text-accent-premium">
                    Leander Venâncio · Fundador & Head Advisor
                  </div>
                </div>

                <blockquote className="text-sm font-light text-white/90 italic leading-relaxed border-l-2 border-accent-premium pl-4">
                  "Na indústria e na distribuição, faturamento é vaidade se a margem estiver errada e o capital de giro for engolido pelo estoque. Nossa missão é colocar a diretoria no comando absoluto dos seus números."
                </blockquote>
              </div>
            </div>

            {/* Right Column: 2x3 Credibility Grid */}
            <div className="lg:col-span-7">
              <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                Rigor Técnico & Experiência Prática
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-8 leading-tight">
                Quem sustenta o método da <br />
                <span className="font-serif italic text-accent-premium">Mont Gestão?</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-accent-premium/30 transition-all">
                  <div className="text-xs font-mono uppercase text-accent-premium font-bold mb-1">FGV Finanças</div>
                  <div className="text-base font-medium text-white mb-1">Especialização Executiva</div>
                  <p className="text-xs text-white/70 font-light">Fundamentos sólidos de finanças corporativas, controladoria estratégica e avaliação de negócios.</p>
                </div>

                <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-accent-premium/30 transition-all">
                  <div className="text-xs font-mono uppercase text-accent-premium font-bold mb-1">UFG Engenharia</div>
                  <div className="text-base font-medium text-white mb-1">Rigor Analítico & Processos</div>
                  <p className="text-xs text-white/70 font-light">Visão analítica de processos fabris, estoques, cadeia de suprimentos e eliminação cirúrgica de perdas.</p>
                </div>

                <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-accent-premium/30 transition-all">
                  <div className="text-xs font-mono uppercase text-accent-premium font-bold mb-1">+10 Anos no Mercado</div>
                  <div className="text-base font-medium text-white mb-1">Direção Financeira Real</div>
                  <p className="text-xs text-white/70 font-light">Mais de uma década na trincheira com donos de indústrias, atacados e grandes distribuidoras.</p>
                </div>

                <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-accent-premium/30 transition-all">
                  <div className="text-xs font-mono uppercase text-accent-premium font-bold mb-1">Método DAPE</div>
                  <div className="text-base font-medium text-white mb-1">Metodologia Proprietária</div>
                  <p className="text-xs text-white/70 font-light">Ciclo contínuo de Dados, Análise, Planejamento e Execução testado e validado em centenas de empresas.</p>
                </div>

                <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-accent-premium/30 transition-all">
                  <div className="text-xs font-mono uppercase text-accent-premium font-bold mb-1">Esteira Digital</div>
                  <div className="text-base font-medium text-white mb-1">Acesso Direto a Bancos</div>
                  <p className="text-xs text-white/70 font-light">Interlocução qualificada com as principais mesas de crédito do país com balanços auditáveis e saneados.</p>
                </div>

                <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-accent-premium/30 transition-all">
                  <div className="text-xs font-mono uppercase text-accent-premium font-bold mb-1">+R$ 50M Estruturados</div>
                  <div className="text-base font-medium text-white mb-1">Crédito Competitivo</div>
                  <p className="text-xs text-white/70 font-light">Volume expressivo captado em linhas de longo prazo para suportar expansão sem sufoco de caixa.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          7. EDUCATION SECTION (Formação CEO/CFO)
      ========================================================================= */}
      <section className="py-24 lg:py-32 bg-white/[0.02] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Description */}
            <div className="lg:col-span-6">
              <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                Education · Capacitação Executiva
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-6 leading-tight">
                Formação <br />
                <span className="font-serif italic text-accent-premium">CEO & CFO</span>
              </h2>
              <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed mb-6">
                O empresário que não sabe ler seu próprio balanço e sua DRE fica refém de achismos. A Formação CEO/CFO é um treinamento prático para donos, herdeiros e líderes que querem comandar reuniões financeiras com total autoridade.
              </p>

              <div className="space-y-3.5 mb-8 text-sm text-white/90 font-light">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0" />
                  <span>Interpretação descomplicada de DRE gerencial, margens e fluxo de caixa</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0" />
                  <span>A matemática da precificação estratégica e eliminação de custos invisíveis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0" />
                  <span>Como conduzir rituais semanais e cobrar metas da equipe sem microgerenciamento</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0" />
                  <span>Governança e preparação do balanço para captar crédito bancário com taxas reduzidas</span>
                </div>
              </div>

              <Link
                to="/formacao-ceo-cfo"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium hover:bg-white transition-all duration-300 rounded-full shadow-lg shadow-accent-premium/20"
              >
                Garantir Vaga na Formação <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right side: Masterclass Video Card Mockup */}
            <div className="lg:col-span-6">
              <div className="relative p-6 sm:p-8 bg-obsidian border border-white/10 rounded-3xl overflow-hidden shadow-2xl group">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center">
                  <img 
                    src="/assets/Foto Leander (2).png" 
                    alt="Masterclass Leander Venâncio" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"></div>
                  
                  {/* Play Button */}
                  <div className="w-16 h-16 rounded-full bg-accent-premium text-obsidian flex items-center justify-center shadow-xl shadow-accent-premium/30 group-hover:scale-110 transition-transform relative z-10">
                    <Play className="w-6 h-6 fill-obsidian ml-1" />
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-widest text-accent-premium font-bold">
                      Imersão Executiva
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-display font-medium text-white">4 Módulos Práticos & Ferramentas Reais</h4>
                    <p className="text-xs text-white/60 font-light">Planilhas, dashboards executivos e método DAPE inclusos</p>
                  </div>
                  <span className="text-xs font-mono text-accent-premium font-semibold">Turmas Exclusivas</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          8. CLIENT TESTIMONIALS ("Clientes Satisfeitos, Negócios Transformados")
      ========================================================================= */}
      <section className="py-24 lg:py-32 bg-obsidian text-white relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Resultados Validados na Trincheira
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-4">
              Clientes satisfeitos, <br />
              <span className="font-serif italic text-accent-premium">negócios transformados.</span>
            </h2>
          </div>

          {/* 3 Columns Quotes */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl relative flex flex-col justify-between hover:border-accent-premium/30 transition-all">
              <div>
                <div className="text-accent-premium text-4xl font-serif mb-4">“</div>
                <p className="text-sm text-white/85 font-light leading-relaxed mb-6">
                  "Nosso faturamento subia todo ano, mas o caixa continuava apertado e vivíamos tomando capital de giro caro. Com a Mont Gestão e o DAPE, descobrimos que 3 das nossas 8 linhas de produtos davam prejuízo operacional. Reestruturamos a precificação e liberamos R$ 1.9 milhão em caixa nos primeiros 4 meses."
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="text-sm font-semibold text-white">Diretor Industrial & Sócio</div>
                <div className="text-xs text-accent-premium">Indústria Metalúrgica · R$ 22M/ano</div>
              </div>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl relative flex flex-col justify-between hover:border-accent-premium/30 transition-all">
              <div>
                <div className="text-accent-premium text-4xl font-serif mb-4">“</div>
                <p className="text-sm text-white/85 font-light leading-relaxed mb-6">
                  "Em distribuidora, margem é centavo e giro é tudo. A Mont Gestão colocou nossa DRE em tempo real e encurtou nosso ciclo financeiro em 21 dias. Pela primeira vez em 15 anos de empresa, os comitês mensais da diretoria são baseados em fatos e metas batidas, não em discussões sem fim."
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="text-sm font-semibold text-white">CEO & Fundador</div>
                <div className="text-xs text-accent-premium">Distribuidora de Alimentos & Bebidas · R$ 48M/ano</div>
              </div>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl relative flex flex-col justify-between hover:border-accent-premium/30 transition-all">
              <div>
                <div className="text-accent-premium text-4xl font-serif mb-4">“</div>
                <p className="text-sm text-white/85 font-light leading-relaxed mb-6">
                  "A assessoria de crédito da Mont Gestão saneou nosso dossiê, apresentou nossos balanços no padrão institucional e captou R$ 5.2 milhões a uma taxa CDI+ que nenhum gerente de agência jamais nos ofereceu. Mudou o patamar da nossa expansão fabril."
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="text-sm font-semibold text-white">Diretora de Operações & Sócia</div>
                <div className="text-xs text-accent-premium">Indústria Química & Transformação · R$ 34M/ano</div>
              </div>
            </div>
          </div>

          {/* Real WhatsApp Messages Proof Carousel */}
          <div className="pt-10 border-t border-white/10">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-white/50 font-mono">Comprovações Reais do Dia a Dia</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="bg-white p-2 rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={`/assets/depoimento-${i}.jpeg`} 
                    alt={`Comprovação ${i}`} 
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. BLOG & STRATEGIC CONTENT ("Conteúdos & Inteligência")
      ========================================================================= */}
      <section id="conteudos" className="py-24 lg:py-32 bg-white/[0.02] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                Inteligência Financeira Aplicada
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-light text-white">
                Conteúdos & <span className="font-serif italic text-accent-premium">Ferramentas Práticas</span>
              </h2>
            </div>
            <Link
              to="/materiais"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-premium hover:text-white transition-colors"
            >
              Ver Todos os Conteúdos <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-obsidian border border-white/10 rounded-3xl flex flex-col justify-between hover:border-accent-premium/40 transition-all group">
              <div>
                <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-white/[0.02] flex items-center justify-center p-4">
                  <img 
                    src="/assets/cover_ebook_dre.png" 
                    alt="Ebook DRE Gerencial" 
                    className="h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-accent-premium font-bold block mb-2">Controladoria</span>
                <h3 className="text-xl font-display font-medium text-white mb-2">DRE Gerencial vs. Fiscal para Indústrias</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed mb-6">Como enxergar a margem de contribuição real e eliminar custos invisíveis que corroem o fluxo de caixa.</p>
              </div>
              <Link to="/materiais" className="text-xs font-bold uppercase tracking-widest text-accent-premium flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Baixar Material <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 bg-obsidian border border-white/10 rounded-3xl flex flex-col justify-between hover:border-accent-premium/40 transition-all group">
              <div>
                <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-white/[0.02] flex items-center justify-center p-4">
                  <img 
                    src="/assets/cover_planilha_fluxo_caixa.png" 
                    alt="Planilha de Fluxo de Caixa" 
                    className="h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-accent-premium font-bold block mb-2">Ferramenta Executiva</span>
                <h3 className="text-xl font-display font-medium text-white mb-2">Planilha de Fluxo de Caixa & Giro</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed mb-6">Modelo prático para projeção de liquidez a 90 dias com cálculo automático de prazos médios operacionais.</p>
              </div>
              <Link to="/materiais" className="text-xs font-bold uppercase tracking-widest text-accent-premium flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Baixar Planilha <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 bg-obsidian border border-white/10 rounded-3xl flex flex-col justify-between hover:border-accent-premium/40 transition-all group">
              <div>
                <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-white/[0.02] flex items-center justify-center p-4">
                  <img 
                    src="/assets/cover_ebook_precificacao.png" 
                    alt="Ebook de Precificação" 
                    className="h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-accent-premium font-bold block mb-2">Estratégia de Margem</span>
                <h3 className="text-xl font-display font-medium text-white mb-2">Guia Prático de Precificação & Margem</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed mb-6">A matemática do preço de venda ideal considerando tributação, custos diretos e elasticidade da indústria.</p>
              </div>
              <Link to="/materiais" className="text-xs font-bold uppercase tracking-widest text-accent-premium flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Baixar Ebook <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          10. HIGH-CONVERTING FINAL CONVERSION (Split Layout with Direct Contact)
      ========================================================================= */}
      <section id="contato" className="py-24 lg:py-32 bg-obsidian text-white relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-white/[0.05] via-obsidian to-obsidian border border-white/10 rounded-3xl relative overflow-hidden shadow-2xl">
            
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Direct channels and reassurance */}
              <div className="lg:col-span-6">
                <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                  Aplicação para Diagnóstico Estratégico
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-6 leading-tight">
                  Sua indústria ou distribuidora com a gestão financeira <br />
                  <span className="font-serif italic text-accent-premium">que ela realmente merece.</span>
                </h2>
                <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-8">
                  Se a sua empresa fatura acima de R$ 3 milhões ao ano e você busca alavancas reais de lucro, gestão rigorosa de capital de giro e crédito bancário estruturado, aplique para o nosso diagnóstico confidencial.
                </p>

                <div className="space-y-4 mb-8 text-sm text-white/90">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent-premium" />
                    <span>WhatsApp Comercial: <strong>(62) 99616-2581</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent-premium" />
                    <span>E-mail: <strong>contato@montgestao.com.br</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-accent-premium" />
                    <span>Atendimento Nacional: Presencial & Digital</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-white/70 font-mono">
                  ✦ Sessão exclusiva conduzida por advisors seniores. Análise preliminar de vazamentos de caixa e elegibilidade de crédito.
                </div>
              </div>

              {/* Right Column: Floating Qualification Form */}
              <div className="lg:col-span-6">
                <DiagnosticForm />
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
