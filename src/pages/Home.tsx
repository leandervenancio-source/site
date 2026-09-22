import { motion } from "motion/react";
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
  ChevronRight
} from "lucide-react";
import { DiagnosticForm } from "../components/DiagnosticForm";
import { Testimonials } from "../components/Testimonials";

export function Home() {
  return (
    <div className="bg-obsidian text-branco font-sans min-h-screen selection:bg-accent-premium selection:text-obsidian">
      
      {/* 1. HERO SECTION - Modern SaaS/Fintech Experience */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] overflow-hidden pointer-events-none -z-0">
          <div className="absolute top-[-20%] left-1/4 w-[600px] h-[600px] bg-accent-premium/10 blur-[150px] rounded-full"></div>
          <div className="absolute top-[10%] right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[160px] rounded-full"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-premium/10 border border-accent-premium/25 text-accent-premium text-[11px] font-bold tracking-[0.25em] uppercase mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent-premium animate-pulse"></span>
                Controladoria · FP&A · Crédito Estruturado
              </span>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-light leading-[1.08] tracking-tight text-branco mb-8">
                Ajudamos o empresário a <span className="font-serif italic text-accent-premium font-normal">aumentar a performance financeira</span> da empresa e acessar capital de forma inteligente.
              </h1>

              <p className="text-lg sm:text-xl text-branco/70 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
                Especialistas em <span className="text-branco font-normal">Indústrias e Distribuidoras que faturam acima de R$ 3 milhões/ano</span>. Método DAPE contínuo com cultura data-driven, kaizen e rituais ágeis.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/diagnostico" 
                  className="w-full sm:w-auto px-9 py-4 text-xs font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium hover:bg-white transition-all duration-300 rounded-full shadow-[0_0_35px_rgba(212,175,55,0.25)] hover:shadow-[0_0_50px_rgba(212,175,55,0.45)] hover:scale-[1.02]"
                >
                  Agendar Diagnóstico Estratégico
                </Link>
                <a 
                  href="#produtos" 
                  className="w-full sm:w-auto px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-branco/75 hover:text-branco border border-white/15 hover:border-accent-premium/60 transition-all duration-300 rounded-full hover:bg-white/[0.04]"
                >
                  Conhecer Soluções
                </a>
              </div>
            </motion.div>
          </div>

          {/* SaaS Fintech Platform / Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
          >
            <div className="bg-[#121620] border border-white/10 rounded-[22px] overflow-hidden">
              {/* Window Bar */}
              <div className="px-5 py-3.5 bg-obsidian border-b border-white/5 flex items-center justify-between text-xs text-branco/40 font-mono">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
                  </div>
                  <span className="ml-3 text-[11px] text-branco/60 font-sans font-medium">Mont Gestão OS · Painel de Performance Financeira</span>
                </div>
                <div className="flex items-center gap-4 hidden sm:flex text-[10px]">
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    Dados Sincronizados
                  </span>
                  <span>Indústria & Distribuição</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Metric Cards Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-branco/50">Capital de Giro</span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md">+R$ 2.4M</span>
                    </div>
                    <div className="text-2xl font-display font-semibold text-branco">R$ 4.820.000</div>
                    <div className="text-[11px] text-branco/40 mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-emerald-400" /> Liberação via ciclo operacional
                    </div>
                  </div>

                  <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-branco/50">Margem EBITDA</span>
                      <span className="text-[10px] font-bold text-accent-premium bg-accent-premium/10 px-2 py-0.5 rounded-md">+5.4 p.p.</span>
                    </div>
                    <div className="text-2xl font-display font-semibold text-branco">19.2%</div>
                    <div className="text-[11px] text-branco/40 mt-1 flex items-center gap-1">
                      <BarChart3 className="w-3 h-3 text-accent-premium" /> Controladoria & Precificação
                    </div>
                  </div>

                  <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-branco/50">Ciclo Financeiro</span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md">-18 dias</span>
                    </div>
                    <div className="text-2xl font-display font-semibold text-branco">38 dias</div>
                    <div className="text-[11px] text-branco/40 mt-1 flex items-center gap-1">
                      <TrendingDown className="w-3 h-3 text-emerald-400" /> Giro de estoque e recebíveis
                    </div>
                  </div>

                  <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-branco/50">Crédito Estruturado</span>
                      <span className="text-[10px] font-bold text-accent-premium bg-accent-premium/10 px-2 py-0.5 rounded-md">Aprovado</span>
                    </div>
                    <div className="text-2xl font-display font-semibold text-accent-premium">R$ 6.200.000</div>
                    <div className="text-[11px] text-branco/40 mt-1 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-accent-premium" /> Linha de longo prazo / CDI+
                    </div>
                  </div>
                </div>

                {/* Lower Widget: DAPE Live Loop */}
                <div className="p-5 bg-obsidian/80 border border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-accent-premium/10 flex items-center justify-center text-accent-premium font-display font-bold text-sm">
                      DAPE
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-branco">Ciclo Contínuo em Operação</div>
                      <div className="text-[11px] text-branco/50">Dados → Análise → Planejamento → Execução</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-[11px]">
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-branco/70">1. Dados Conciliados ✓</span>
                    <span className="text-accent-premium">→</span>
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-branco/70">2. Margem Apurada ✓</span>
                    <span className="text-accent-premium">→</span>
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-branco/70">3. Orçamento Q3 Fechado ✓</span>
                    <span className="text-accent-premium">→</span>
                    <span className="px-3 py-1 rounded-lg bg-accent-premium/15 border border-accent-premium/30 text-accent-premium font-semibold">4. Comitê Semanal Ativo</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROVA SOCIAL & INDICADORES CHAVE (Logo após o Hero) */}
      <section className="py-14 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-5xl font-display font-light text-branco mb-1">
                +R$ <span className="font-semibold text-accent-premium">300 Mi</span>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-branco/50 font-mono">Faturamento das empresas atendidas</p>
            </div>
            <div>
              <div className="text-3xl lg:text-5xl font-display font-light text-branco mb-1">
                +R$ <span className="font-semibold text-accent-premium">50 Mi</span>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-branco/50 font-mono">Em crédito bancário estruturado</p>
            </div>
            <div>
              <div className="text-3xl lg:text-5xl font-display font-light text-branco mb-1">
                &gt; R$ <span className="font-semibold text-accent-premium">3 Mi/ano</span>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-branco/50 font-mono">Foco em Indústrias e Distribuidoras</p>
            </div>
            <div>
              <div className="text-3xl lg:text-5xl font-display font-light text-branco mb-1">
                100<span className="font-semibold text-accent-premium">%</span>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-branco/50 font-mono">Data-Driven com Método DAPE</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PÚBLICO-ALVO & O RACIONAL DE INDÚSTRIAS E DISTRIBUIDORAS */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-accent-premium text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">
                Especialização Setorial
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-light text-branco mb-8 leading-tight">
                Por que somos especializados em <span className="font-serif italic text-accent-premium">Indústrias e Distribuidoras?</span>
              </h2>
              <p className="text-base sm:text-lg text-branco/70 font-light leading-relaxed mb-6">
                Empresas industriais e distribuidoras que faturam acima de R$ 3 milhões ao ano possuem um desafio único: <span className="text-branco font-normal">uso intensivo de capital de giro e margens operacionais pressionadas</span>.
              </p>
              <p className="text-base text-branco/60 font-light leading-relaxed mb-8">
                Prazos longos de recebimento, compras pesadas de matéria-prima e estoques elevados não perdoam a falta de números precisos. É exatamente onde a Mont Gestão entrega o maior impacto: blindando o caixa da operação e destravando acesso a crédito com taxas reduzidas.
              </p>

              <div className="space-y-4">
                {[
                  "Ciclo de conversão de caixa esticado (PMP x PMRE x PMV)",
                  "Margens apertadas que exigem apuração cirúrgica de custos",
                  "Demanda constante por capital de giro sem sufoco de juros bancários"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-premium/15 text-accent-premium flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-branco/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 bg-white/[0.03] border border-white/10 rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-premium/5 blur-3xl rounded-full"></div>
                <h3 className="text-xl font-display font-medium text-branco mb-6 flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-accent-premium" />
                  Perfil de Qualificação
                </h3>
                
                <div className="space-y-6">
                  <div className="p-5 bg-obsidian border border-white/10 rounded-2xl">
                    <div className="text-xs font-mono uppercase tracking-wider text-accent-premium mb-1">Setor</div>
                    <div className="text-base font-medium text-branco">Indústrias de Transformação & Distribuidoras Comerciais</div>
                  </div>

                  <div className="p-5 bg-obsidian border border-white/10 rounded-2xl">
                    <div className="text-xs font-mono uppercase tracking-wider text-accent-premium mb-1">Porte Financeiro</div>
                    <div className="text-base font-medium text-branco">Faturamento Anual acima de R$ 3 Milhões</div>
                  </div>

                  <div className="p-5 bg-obsidian border border-white/10 rounded-2xl">
                    <div className="text-xs font-mono uppercase tracking-wider text-accent-premium mb-1">Momento Empresarial</div>
                    <div className="text-sm font-light text-branco/70">
                      Necessidade de profissionalizar a gestão financeira, apurar DRE gerencial confiável e estruturar crédito inteligente para sustentar o crescimento.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. METODOLOGIA DAPE - Ciclo Contínuo Data-Driven */}
      <section className="py-28 bg-white/[0.02] border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-premium text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
              Metodologia Oficial
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-branco mb-6">
              O Método <span className="font-serif italic text-accent-premium">DAPE</span>
            </h2>
            <p className="text-base sm:text-lg text-branco/70 font-light leading-relaxed">
              Gestão financeira não é um evento pontual. É um ciclo contínuo de 4 etapas — inspirado na filosofia Kaizen e em métodos ágeis — repetido sistematicamente para expandir margem e fluxo de caixa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                sigla: "D",
                fase: "Dados",
                desc: "Organização e saneamento total dos números. Sem dados financeiros íntegros, conciliações e plano de contas estruturado, não existe gestão.",
                kpis: "Conciliação · Plano de Contas · DRE Gerencial"
              },
              {
                sigla: "A",
                fase: "Análise",
                desc: "Controladoria analítica que identifica vazamentos de lucro, cálculo exato da margem de contribuição e apuração do ciclo financeiro.",
                kpis: "Margem EBITDA · PMP/PMRE · Custos Fixos"
              },
              {
                sigla: "P",
                fase: "Planejamento",
                desc: "Orçamento matricial e modelagem de FP&A para antecipar cenários de caixa, planejar compras e preparar o balanço para crédito bancário.",
                kpis: "FP&A · Orçamento · Projeção de Caixa"
              },
              {
                sigla: "E",
                fase: "Execução",
                desc: "Rituais de gestão ágil com os sócios, comitês mensais de indicadores, planos de ação kaizen contínuos e cobrança de metas.",
                kpis: "Comitê Financeiro · Rituais Ágeis · Metas"
              },
            ].map((step, idx) => (
              <div 
                key={step.sigla}
                className="p-8 bg-obsidian border border-white/10 hover:border-accent-premium/40 rounded-3xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="w-12 h-12 rounded-2xl bg-accent-premium text-obsidian font-display font-black text-2xl flex items-center justify-center shadow-lg shadow-accent-premium/20">
                      {step.sigla}
                    </span>
                    <span className="text-xs font-mono font-bold text-branco/30">Etapa 0{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl font-display font-medium text-branco mb-3">{step.fase}</h3>
                  <p className="text-sm text-branco/60 font-light leading-relaxed mb-6">{step.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-accent-premium/80">
                  {step.kpis}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PORTFÓLIO DE PRODUTOS - EXATAMENTE 3 PRODUTOS */}
      <section id="produtos" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-premium text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
              Soluções Integradas
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-branco mb-6">
              Nosso Portfólio de <span className="font-serif italic text-accent-premium">Produtos</span>
            </h2>
            <p className="text-base sm:text-lg text-branco/70 font-light leading-relaxed">
              Três soluções complementares desenvolvidas sob medida para a maturidade financeira da sua empresa.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            
            {/* PRODUTO 1: Formação CEO/CFO */}
            <div className="p-8 sm:p-10 bg-white/[0.03] border border-white/10 hover:border-white/25 rounded-3xl flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-accent-premium">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full bg-white/5 text-branco/60 border border-white/10 font-bold">
                    Produto de Entrada
                  </span>
                </div>
                
                <h3 className="text-2xl font-display font-medium text-branco mb-3">
                  Formação CEO & CFO
                </h3>
                
                <p className="text-sm text-branco/65 font-light leading-relaxed mb-8">
                  Trilha prática de capacitação financeira para proprietários e gestores financeiros. Domine precificação, DRE e governança de caixa para tomar decisões orientadas por dados.
                </p>

                <ul className="space-y-3 mb-10 text-xs text-branco/75 font-light">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0" />
                    Interpretação prática de DRE e balanço
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0" />
                    Cálculo de margem e precificação
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0" />
                    Rituais semanais de gestão financeira
                  </li>
                </ul>
              </div>

              <Link
                to="/formacao-ceo-cfo"
                className="w-full py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-branco bg-white/10 hover:bg-white/20 transition-all rounded-full flex items-center justify-center gap-2"
              >
                Conhecer Formação <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* PRODUTO 2: Performance Program (FLAGSHIP) */}
            <div className="p-8 sm:p-10 bg-gradient-to-b from-accent-premium/15 via-obsidian to-obsidian border-2 border-accent-premium rounded-3xl flex flex-col justify-between shadow-[0_20px_50px_rgba(212,175,55,0.15)] relative scale-[1.02]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent-premium text-obsidian text-[10px] font-black tracking-widest uppercase shadow-md">
                ★ Produto Principal · Carro-Chefe
              </div>

              <div>
                <div className="flex items-center justify-between mb-8 mt-2">
                  <div className="w-12 h-12 rounded-2xl bg-accent-premium text-obsidian flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full bg-accent-premium/20 text-accent-premium border border-accent-premium/30 font-bold">
                    DAPE Contínuo
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-branco mb-3">
                  Performance Program
                </h3>
                
                <p className="text-sm text-branco/80 font-light leading-relaxed mb-8">
                  Aplicação contínua do método DAPE com cultura data-driven, kaizen e métodos ágeis. Unifica Controladoria Terceirizada e FP&A para alavancar constantemente lucro e liquidez.
                </p>

                <ul className="space-y-3 mb-8 text-xs text-branco/85 font-light">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0" />
                    Controladoria & FP&A Terceirizado integrados
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0" />
                    Destrave contínuo de capital de giro
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0" />
                    Upgrade para <strong>CFO as a Service</strong> disponível
                  </li>
                </ul>
              </div>

              <Link
                to="/performance-program"
                className="w-full py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium hover:bg-white transition-all rounded-full flex items-center justify-center gap-2 shadow-lg shadow-accent-premium/20"
              >
                Ver Detalhes do Programa <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* PRODUTO 3: Assessoria de Crédito */}
            <div className="p-8 sm:p-10 bg-white/[0.03] border border-white/10 hover:border-white/25 rounded-3xl flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-accent-premium">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full bg-white/5 text-branco/60 border border-white/10 font-bold">
                    Acesso a Capital
                  </span>
                </div>
                
                <h3 className="text-2xl font-display font-medium text-branco mb-3">
                  Assessoria de Crédito
                </h3>
                
                <p className="text-sm text-branco/65 font-light leading-relaxed mb-8">
                  Levantamento, estruturação e captação de crédito bancário 100% via esteira digital. Acesso a capital inteligente como consequência natural de estar no controle dos números.
                </p>

                <ul className="space-y-3 mb-10 text-xs text-branco/75 font-light">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0" />
                    Alongamento de dívida de curto para longo prazo
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0" />
                    Negociação de taxas reduzidas com bancos
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0" />
                    Processo 100% digital com upload de dossiê
                  </li>
                </ul>
              </div>

              <Link
                to="/assessoria-credito"
                className="w-full py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-branco bg-white/10 hover:bg-white/20 transition-all rounded-full flex items-center justify-center gap-2"
              >
                Conhecer Assessoria <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SOBRE O FUNDADOR / AUTORIDADE PESSOAL */}
      <section id="sobre" className="py-28 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 max-w-sm mx-auto lg:mx-0">
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent-premium/15 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img 
                  src="/assets/Foto Leander (2).png" 
                  alt="Leander Venâncio - Mont Gestão" 
                  className="w-full rounded-2xl shadow-2xl relative z-10 object-cover border border-white/10"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
                Liderança & Autoridade
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-light text-branco mb-8 leading-tight">
                Quem sustenta o método da <span className="font-serif italic text-accent-premium">Mont Gestão?</span>
              </h2>
              
              <div className="space-y-6 text-base font-light text-branco/80 leading-relaxed">
                <p>
                  <strong className="text-branco font-semibold">Leander Venâncio</strong> é advisor estratégico com sólida base técnica em engenharia pela UFG e especialização em Finanças pela FGV.
                </p>
                <p>
                  Ao longo de sua trajetória, liderou a estruturação de mais de <span className="text-accent-premium font-medium">+300 empresas</span> em setores com intensiva necessidade de capital de giro, desenvolvendo a disciplina e os rituais que deram origem ao método <strong className="text-branco font-semibold">DAPE</strong>.
                </p>
                <p>
                  Sua atuação combina a profundidade técnica da controladoria com a agilidade de decisões que protegem o fluxo de caixa, permitindo que os sócios tenham clareza total para reinvestir e captar capital no mercado.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-8">
                <div>
                  <div className="text-2xl font-bold text-branco">+10 anos</div>
                  <div className="text-[10px] uppercase tracking-widest text-branco/40 font-mono">Experiência Prática</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-branco">+300</div>
                  <div className="text-[10px] uppercase tracking-widest text-branco/40 font-mono">Projetos Executados</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-premium">DAPE</div>
                  <div className="text-[10px] uppercase tracking-widest text-branco/40 font-mono">Metodologia Própria</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. DEPOIMENTOS DE CLIENTES */}
      <Testimonials />

      {/* 8. CTA FINAL COM FORMULÁRIO DE DIAGNÓSTICO */}
      <section id="form" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-3xl relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6">
                <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
                  Próximo Passo
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-light text-branco mb-6 leading-tight">
                  Pronto para transformar a performance financeira <br className="hidden sm:block" />
                  <span className="font-serif italic text-accent-premium">da sua empresa?</span>
                </h2>
                <p className="text-base sm:text-lg text-branco/70 font-light leading-relaxed mb-8">
                  Se a sua indústria ou distribuidora fatura acima de R$ 3 milhões/ano e você busca alavancas reais de lucro, gestão rigorosa de capital de giro e crédito bancário estruturado, aplique para o nosso diagnóstico.
                </p>

                <div className="space-y-3 text-xs text-branco/60 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-premium"></span>
                    Sessão individual com equipe sênior
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-premium"></span>
                    Análise preliminar de vazamentos de caixa e capital de giro
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-premium"></span>
                    100% confidencial e orientada a dados
                  </div>
                </div>
              </div>

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
