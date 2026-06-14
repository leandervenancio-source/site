import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Target, 
  Users, 
  BarChart3, 
  Clock, 
  Zap,
  ShieldCheck,
  ChevronDown,
  Plus,
  Wallet,
  TrendingDown,
  Monitor,
  Network,
  AlertCircle,
  Route,
  MessageCircle,
  GraduationCap,
  Search,
  Settings,
  RefreshCw
} from "lucide-react";
import { useState } from "react";
import { Testimonials } from "../../components/Testimonials";
import { DiagnosticForm } from "../../components/DiagnosticForm";
import { cn } from "../../lib/utils";

export function PerformanceProgram() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que é o Performance Program?",
      answer: "É um programa de implementação de gestão empresarial que ajuda sua empresa a ganhar controle dos números, implantar rotinas de gestão e melhorar lucro, caixa e execução em até 6 meses."
    },
    {
      question: "Para quem o Performance Program é indicado?",
      answer: "Para empresários que possuem uma empresa em operação faturando acima de R$ 2 milhões por ano, com uma equipe de mais de 10 funcionários, e que desejam mais controle, previsibilidade e resultados."
    },
    {
      question: "Como funciona o Performance Program?",
      answer: "Durante 6 meses, trabalhamos na implantação de indicadores, dashboards, metas, reuniões de gestão e projetos prioritários, acompanhando a execução e os resultados."
    },
    {
      question: "Em quanto tempo começo a ver resultados?",
      answer: "Muitas empresas percebem melhorias nos primeiros 30 a 90 dias. Resultados mais consistentes costumam ser consolidados ao longo do programa."
    },
    {
      question: "Preciso ter indicadores e controles para participar?",
      answer: "Não. A maioria dos clientes inicia justamente para criar essa estrutura e passar a tomar decisões com base em dados."
    },
    {
      question: "Qual a diferença entre o Performance Program e o Advisory Program?",
      answer: "O Performance Program foca em controle, execução e resultados de curto prazo. O Advisory Program é voltado para estratégia, liderança e crescimento de médio e longo prazo."
    },
    {
      question: "O que acontece após os 6 meses?",
      answer: "A empresa pode renovar o programa, migrar para o Advisory Program ou seguir de forma independente utilizando os sistemas implantados."
    },
    {
      question: "O Performance Program é consultoria ou mentoria?",
      answer: "É uma combinação de consultoria, mentoria e acompanhamento de execução, com foco em transformar planos em resultados concretos."
    }
  ];

  return (
    <div className="bg-soft-white font-sans">
      {/* Hero Section */}
      <section className="bg-obsidian text-branco pt-32 pb-20 relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-premium/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-premium/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
            <span className="text-accent-premium font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Performance & Execução</span>
            <h1 className="text-6xl md:text-9xl font-display font-light leading-[0.9] mb-8 text-branco tracking-tight">
              Performance <br />
              <span className="font-serif italic text-accent-premium">Program</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-display font-light text-branco/90 mb-8 leading-relaxed">
              Controle seus números, aumente seu lucro e crie uma rotina de execução que gera resultados de verdade.
            </h2>
            <p className="text-lg text-branco/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              O Performance Program ajuda empresários a implantar indicadores, organizar a gestão e executar prioridades que aumentam lucro e caixa nos próximos 6 meses.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/diagnostico" className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium rounded-full overflow-hidden transition-all duration-500">
                <span className="relative z-10">Agendar Diagnóstico</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sinais Section */}
      <section className="py-12 lg:py-16 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-12">
            <span className="text-accent-muted font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Desafios</span>
            <h2 className="text-3xl md:text-5xl font-display text-obsidian mb-0 leading-tight tracking-tight">
              Sua empresa sofre com <br />
              <span className="font-serif italic text-accent-muted">baixa performance?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingDown, title: "Trabalha muito mas vê pouco lucro sobrar no caixa" },
              { icon: Users, title: "A operação inteira depende de você para funcionar" },
              { icon: BarChart3, title: "Decisões baseadas no 'feeling' por falta de números confiáveis" },
              { icon: Target, title: "Metas são definidas, mas a execução nunca sai do papel" }
            ].map((item, i) => (
              <div key={i} className="bento-card bg-white p-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-obsidian rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-accent-premium transition-all duration-500 shadow-xl">
                  <item.icon className="w-8 h-8 text-accent-premium group-hover:text-obsidian transition-colors" />
                </div>
                <h3 className="text-lg font-display font-medium text-obsidian leading-snug">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como ajuda Section (O Método) */}
      <section className="py-12 lg:py-16 bg-obsidian text-branco relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-premium/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 lg:mb-12">
            <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">O Método</span>
            <h2 className="text-3xl md:text-5xl font-display font-light leading-tight text-branco mb-4">
              Aceleração através <br />
              <span className="font-serif italic text-accent-premium">da execução.</span>
            </h2>
            <p className="text-base lg:text-lg text-branco/50 font-light leading-relaxed max-w-2xl mx-auto">
              O Performance Program foca no <span className="text-branco font-normal">curto e médio prazo</span>. Implementamos rituais de controle que garantem que a estratégia seja executada com precisão através do método DAPE.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left side: Framework */}
            <div className="lg:col-span-9 relative">
              {/* Desktop View (Circular Layout) */}
              <div className="hidden md:flex relative w-full max-w-[400px] lg:max-w-[540px] mx-auto aspect-square items-center justify-center">
                {/* Rotating Dashed Circle Connector */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[65%] h-[65%] border border-dashed border-white/20 rounded-full z-0"
                ></motion.div>
                
                <div className="absolute inset-0 z-10">
                  {/* Execução (E) - Top Left */}
                  <div className="absolute top-[27%] left-[27%] -translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="relative group">
                        <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-accent-premium text-branco flex items-center justify-center text-2xl lg:text-4xl font-black shadow-2xl shadow-black/50 border-4 border-obsidian relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">E</div>
                      </div>
                      <div className="absolute right-full mr-4 text-right w-[160px] lg:w-[220px]">
                        <div className="text-branco font-display font-bold text-xl lg:text-2xl leading-none mb-1">Execução</div>
                        <div className="text-[9px] lg:text-[10px] tracking-[0.3em] uppercase text-accent-premium font-black mb-1.5">Resultados</div>
                        <p className="text-[11px] lg:text-xs text-branco/50 leading-relaxed font-light">Rotinas, processos, acompanhamento de tarefas e uso de metodologias ágeis.</p>
                      </div>
                    </div>
                  </div>

                  {/* Dados (D) - Top Right */}
                  <div className="absolute top-[27%] right-[27%] translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="relative group">
                        <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-accent-premium text-branco flex items-center justify-center text-2xl lg:text-4xl font-black shadow-2xl shadow-black/50 border-4 border-obsidian relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">D</div>
                      </div>
                      <div className="absolute left-full ml-4 text-left w-[160px] lg:w-[220px]">
                        <div className="text-branco font-display font-bold text-xl lg:text-2xl leading-none mb-1">Dados</div>
                        <div className="text-[9px] lg:text-[10px] tracking-[0.3em] uppercase text-accent-premium font-black mb-1.5">Informação</div>
                        <p className="text-[11px] lg:text-xs text-branco/50 leading-relaxed font-light">Sistema, processos de registro, indicadores, conciliações e controles padronizados.</p>
                      </div>
                    </div>
                  </div>

                  {/* Planejamento (P) - Bottom Left */}
                  <div className="absolute bottom-[27%] left-[27%] -translate-x-1/2 translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="relative group">
                        <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-accent-premium text-branco flex items-center justify-center text-2xl lg:text-4xl font-black shadow-2xl shadow-black/50 border-4 border-obsidian relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">P</div>
                      </div>
                      <div className="absolute right-full mr-4 text-right w-[160px] lg:w-[220px]">
                        <div className="text-branco font-display font-bold text-xl lg:text-2xl leading-none mb-1">Planejamento</div>
                        <div className="text-[9px] lg:text-[10px] tracking-[0.3em] uppercase text-accent-premium font-black mb-1.5">Prioridades</div>
                        <p className="text-[11px] lg:text-xs text-branco/50 leading-relaxed font-light">Definição de objetivos, estratégias, projetos e planos de ação.</p>
                      </div>
                    </div>
                  </div>

                  {/* Análise (A) - Bottom Right */}
                  <div className="absolute bottom-[27%] right-[27%] translate-x-1/2 translate-y-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className="relative group">
                        <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-accent-premium text-branco flex items-center justify-center text-2xl lg:text-4xl font-black shadow-2xl shadow-black/50 border-4 border-obsidian relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">A</div>
                      </div>
                      <div className="absolute left-full ml-4 text-left w-[160px] lg:w-[220px]">
                        <div className="text-branco font-display font-bold text-xl lg:text-2xl leading-none mb-1">Análise</div>
                        <div className="text-[9px] lg:text-[10px] tracking-[0.3em] uppercase text-accent-premium font-black mb-1.5">Inteligência</div>
                        <p className="text-[11px] lg:text-xs text-branco/50 leading-relaxed font-light">Diagnóstico, causas-efeitos, tendências, oportunidades, indicadores e relatórios.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile View (Vertical List) */}
              <div className="md:hidden space-y-8 py-6">
                {[
                  { 
                    letter: "D", 
                    title: "Dados", 
                    subtitle: "Informação", 
                    desc: "Sistema, processos de registro, indicadores, conciliações e controles padronizados." 
                  },
                  { 
                    letter: "A", 
                    title: "Análise", 
                    subtitle: "Inteligência", 
                    desc: "Diagnóstico, causas-efeitos, tendências, oportunidades, indicadores e relatórios." 
                  },
                  { 
                    letter: "P", 
                    title: "Planejamento", 
                    subtitle: "Prioridades", 
                    desc: "Definição de objetivos, estratégias, projetos e planos de ação." 
                  },
                  { 
                    letter: "E", 
                    title: "Execução", 
                    subtitle: "Resultados", 
                    desc: "Rotinas, processos, acompanhamento de tarefas e uso de metodologias ágeis." 
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div 
                      className="w-16 h-16 rounded-full bg-accent-premium text-branco flex items-center justify-center text-3xl font-black border-4 border-obsidian mb-3 shadow-2xl shadow-black/50"
                    >
                      {item.letter}
                    </div>
                    <div className="font-display font-bold text-2xl mb-1 text-branco">{item.title}</div>
                    <div className="text-[11px] tracking-[0.4em] uppercase text-accent-premium font-black mb-2">{item.subtitle}</div>
                    <p className="text-sm text-branco/50 leading-relaxed font-light max-w-xs">{item.desc}</p>
                    {i < 3 && (
                      <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent mt-6"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side: 3 Cards */}
            <div className="lg:col-span-3 flex flex-col gap-4 lg:gap-5">
              {[
                { title: "Cultura Data-Driven", desc: "Decisões e equipes guiadas por dados e indicadores claros." },
                { title: "Gestão Ágil", desc: "Processos dinâmicos que eliminam gargalos e aceleram a execução." },
                { title: "Cultura de Melhoria Contínua", desc: "Ações e processos são constantemente aprimorados em busca da excelência." }
              ].map((item, i) => (
                <div key={i} className="glass p-5 lg:p-6 rounded-2xl border-white/5 hover:border-accent-premium/20 transition-all duration-500 text-left">
                  <div className="text-accent-premium font-display font-bold text-lg mb-2">{item.title}</div>
                  <p className="text-branco/50 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entregas Section */}
      <section className="py-12 lg:py-16 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-12">
            <span className="text-accent-muted font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Entregas</span>
            <h2 className="text-3xl md:text-5xl font-display text-obsidian mb-0 tracking-tight">
              O que você <span className="font-serif italic text-accent-muted">recebe</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "01", title: "Diagnóstico de Performance", desc: "Análise profunda da sua operação atual para identificar gargalos e oportunidades de lucro imediato.", icon: Search },
              { id: "02", title: "Indicadores e Metas", desc: "Definição clara de objetivos e estruturação de KPIs (indicadores) para medir o progresso do negócio.", icon: Target },
              { id: "03", title: "Rotinas de Gestão", desc: "Implementação de rituais semanais para acompanhar o desempenho da equipe e corrigir rotas rapidamente.", icon: Settings },
              { id: "04", title: "Plataforma de Performance", desc: "Acesso a ferramentas e painéis de controle que centralizam a visão da sua operação em tempo real.", icon: BarChart3 },
              { id: "05", title: "Projetos Prioritários", desc: "Desenho e execução de projetos chave que vão destravar o crescimento do seu negócio de forma focada.", icon: Zap },
              { id: "06", title: "Acompanhamento da Execução", desc: "Mentoria contínua para garantir que os planos saiam do papel e os líderes estejam sempre engajados.", icon: Users },
              { id: "07", title: "Suporte via Whatsapp", desc: "Canal de comunicação ágil e direto para tirar dúvidas estratégicas do dia a dia de forma rápida.", icon: MessageCircle },
              { id: "08", title: "Acesso à MGI Academy", desc: "Acesso à plataforma de capacitação com métodos, ferramentas e treinamentos para você e sua equipe.", icon: GraduationCap }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 lg:p-10 bento-card bg-white flex flex-col items-start group"
              >
                <div className="text-xs font-bold text-accent-muted mb-6 tracking-widest uppercase">{item.id}</div>
                <item.icon className="w-10 h-10 text-obsidian mb-6 group-hover:text-accent-premium transition-colors duration-500" />
                <h3 className="text-lg font-display font-medium text-obsidian leading-tight mb-3">{item.title}</h3>
                <p className="text-sm text-obsidian/60 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformação Section */}
      <section className="py-12 lg:py-16 bg-obsidian text-branco">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-12">
            <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Transformação</span>
            <h2 className="text-3xl md:text-5xl font-display font-light text-branco mb-4 leading-tight">
              O que muda na sua <span className="font-serif italic text-accent-premium">empresa</span>
            </h2>
            <p className="text-base lg:text-lg text-branco/60 font-light max-w-2xl mx-auto">
              Veja o impacto real do Performance Program no dia a dia da sua operação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            {/* Antes */}
            <div className="glass p-10 md:p-14 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[100px] rounded-full group-hover:bg-red-500/10 transition-colors duration-500"></div>
              <h3 className="text-3xl font-display font-bold text-white mb-10 opacity-70">Antes</h3>
              <ul className="space-y-8 relative z-10">
                {[
                  "Decisões por feeling",
                  "Falta de controle",
                  "Reuniões improdutivas",
                  "Lucro inconsistente",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 shrink-0 rounded-full bg-red-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    </div>
                    <span className="text-branco/60 text-lg font-light leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Depois */}
            <div className="glass p-10 md:p-14 rounded-3xl border border-accent-premium/20 relative overflow-hidden group hover:border-accent-premium/40 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-premium/10 blur-[100px] rounded-full group-hover:bg-accent-premium/20 transition-colors duration-500"></div>
              <h3 className="text-3xl font-display font-bold text-accent-premium mb-10">Depois</h3>
              <ul className="space-y-8 relative z-10">
                {[
                  "Indicadores claros",
                  "Metas acompanhadas",
                  "Reuniões objetivas",
                  "Maior geração de caixa",
                  "Melhor rentabilidade",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 shrink-0 text-accent-premium" />
                    <span className="text-branco/90 text-lg font-light leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/diagnostico" className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium rounded-full overflow-hidden transition-all duration-500">
              <span className="relative z-10">Quero essa transformação</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Jornada do Programa Section */}
      <section className="py-12 lg:py-16 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-accent-premium font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">A Jornada</span>
            <h2 className="text-3xl md:text-5xl font-display text-obsidian mb-4 tracking-tight">
              Como funciona o Performance Program
            </h2>
            <p className="text-base lg:text-lg text-obsidian/70 max-w-3xl mx-auto font-light leading-relaxed">
              Um processo estruturado para transformar a gestão da sua empresa em uma máquina de resultados previsível e escalável nos próximos 6 meses.
            </p>
          </div>

          {/* Flowchart Container */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative z-10 mb-12 lg:mb-28">
            
            {/* Step 1 */}
            <div className="w-full h-32 bg-obsidian rounded-2xl flex items-center justify-center p-6 text-center shadow-lg border border-obsidian/10 relative group hover:shadow-xl hover:-translate-y-1 hover:border-accent-premium/30 transition-all duration-300">
              <span className="font-display font-medium text-branco text-sm">Diagnóstico +<br/>Quick Wins</span>
              {/* Arrow Desktop */}
              <div className="hidden lg:block absolute top-1/2 left-full w-8 h-[3px] bg-obsidian/40 -translate-y-1/2 z-0">
                <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-3 h-3 border-t-[3px] border-r-[3px] border-obsidian/40 rotate-45 rounded-sm"></div>
              </div>
              {/* Arrow Mobile */}
              <div className="lg:hidden absolute top-full left-1/2 w-[3px] h-8 bg-obsidian/40 -translate-x-1/2 z-0">
                <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-3 h-3 border-b-[3px] border-r-[3px] border-obsidian/40 rotate-45 rounded-sm"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="w-full h-32 bg-obsidian rounded-2xl flex items-center justify-center p-6 text-center shadow-lg border border-obsidian/10 relative group hover:shadow-xl hover:-translate-y-1 hover:border-accent-premium/30 transition-all duration-300">
              <span className="font-display font-medium text-branco text-sm">Implantação de<br/>Indicadores</span>
              {/* Arrow Desktop */}
              <div className="hidden lg:block absolute top-1/2 left-full w-8 h-[3px] bg-obsidian/40 -translate-y-1/2 z-0">
                <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-3 h-3 border-t-[3px] border-r-[3px] border-obsidian/40 rotate-45 rounded-sm"></div>
              </div>
              {/* Arrow Mobile */}
              <div className="lg:hidden absolute top-full left-1/2 w-[3px] h-8 bg-obsidian/40 -translate-x-1/2 z-0">
                <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-3 h-3 border-b-[3px] border-r-[3px] border-obsidian/40 rotate-45 rounded-sm"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="w-full h-32 bg-obsidian rounded-2xl flex items-center justify-center p-6 text-center shadow-lg border border-obsidian/10 relative group hover:shadow-xl hover:-translate-y-1 hover:border-accent-premium/30 transition-all duration-300">
              <span className="font-display font-medium text-branco text-sm">Análise +<br/>Planejamento</span>
              {/* Arrow Desktop */}
              <div className="hidden lg:block absolute top-1/2 left-full w-8 h-[3px] bg-obsidian/40 -translate-y-1/2 z-0">
                <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-3 h-3 border-t-[3px] border-r-[3px] border-obsidian/40 rotate-45 rounded-sm"></div>
              </div>
              {/* Arrow Mobile */}
              <div className="lg:hidden absolute top-full left-1/2 w-[3px] h-8 bg-obsidian/40 -translate-x-1/2 z-0">
                <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-3 h-3 border-b-[3px] border-r-[3px] border-obsidian/40 rotate-45 rounded-sm"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="w-full h-32 bg-obsidian rounded-2xl flex items-center justify-center p-6 text-center shadow-lg border border-obsidian/10 relative group hover:shadow-xl hover:-translate-y-1 hover:border-accent-premium/30 transition-all duration-300">
              <span className="font-display font-medium text-branco text-sm">Rotina de<br/>Execução</span>
              
              {/* Loop Arrow (Desktop) */}
              <div className="hidden lg:block absolute top-[calc(100%+8px)] right-1/2 w-[calc(100%+2rem)] h-16 border-l-[2px] border-b-[2px] border-r-[2px] border-dashed border-accent-premium/80 rounded-b-3xl pointer-events-none z-0">
                {/* Arrow Head Pointing Up to Box 3 */}
                <div className="absolute top-[1px] -left-[1px] -translate-x-1/2 w-3 h-3 border-t-[2px] border-l-[2px] border-accent-premium/80 rotate-45"></div>
                {/* Text Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent-premium text-obsidian px-5 py-2 rounded-full shadow-xl flex items-center gap-2 border-[4px] border-zinc-50 z-10 pointer-events-auto hover:scale-105 transition-transform cursor-default">
                  <RefreshCw className="w-3.5 h-3.5 animate-[spin_4s_linear_infinite]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Otimização Contínua</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Por que investir Section */}
      <section className="py-12 lg:py-16 bg-obsidian text-branco overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group max-w-[75%] mx-auto md:mx-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-premium/50 to-accent-muted/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="/assets/Foto Leander (2).png" 
                alt="Leander Venâncio" 
                className="w-full h-auto rounded-2xl relative z-10 grayscale-[10%] hover:grayscale-0 transition-all duration-500 shadow-2xl" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent-premium/10 rounded-full blur-[100px]"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-accent-premium mb-6 leading-tight">
                Por que investir agora no Performance Program?
              </h2>
              <div className="space-y-6 text-branco/70 text-lg leading-relaxed">
                <p>A <strong>falta de clareza</strong> sobre os números e prioridades trava a <strong>execução</strong> e faz sua equipe perder tempo apagando incêndios todos os dias.</p>
                <p>A <strong>falta de controle</strong> operacional cria gargalos invisíveis que sugam silenciosamente o seu <strong>caixa</strong> e as suas <strong>margens</strong>.</p>
                <p>Bater recorde de <strong>faturamento não significa nada</strong> se esse dinheiro não se transforma em <strong>lucro</strong> real na conta da empresa no fim do mês.</p>
                <p>O seu negócio não pode esperar: operar no escuro e sem <strong>eficiência</strong> custa dinheiro vivo e estagna os seus resultados hoje.</p>
              </div>
              <Link to="/diagnostico" className="mt-10 inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium hover:bg-white transition-all duration-300 rounded-full">
                Fale conosco
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-soft-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-12">
            <span className="text-accent-muted font-bold tracking-[0.3em] uppercase text-xs mb-4 block">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-display text-obsidian mb-4 tracking-tight">Dúvidas Frequentes</h2>
            <p className="text-slate-500 font-light text-base lg:text-lg">Tudo o que você precisa saber sobre o Performance Program.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bento-card bg-white overflow-hidden !rounded-3xl !border-slate-100">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-8 flex justify-between items-center text-left hover:bg-slate-50 transition-colors group"
                >
                  <span className="text-xl font-display font-medium text-obsidian group-hover:text-accent-muted transition-colors">{faq.question}</span>
                  <div className={cn("w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center transition-all duration-500", openFaq === i && "bg-accent-premium rotate-180")}>
                    <ChevronDown className={cn("w-5 h-5 text-obsidian", openFaq === i && "text-obsidian")} />
                  </div>
                </button>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-8 pb-8 text-slate-500 font-light text-lg leading-relaxed"
                  >
                    <div className="pt-4 border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Form Section */}
      <section className="py-12 lg:py-16 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 lg:p-12 bg-obsidian rounded-[2rem] lg:rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-premium/5 blur-[120px] rounded-full"></div>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl md:text-6xl font-display text-branco mb-6 leading-[0.9] tracking-tight">
                  Fale <br />
                  <span className="font-serif italic text-accent-premium">conosco</span>
                </h2>
                <p className="text-xl text-branco/40 font-light leading-relaxed mb-12">
                  Acelere seus resultados agora. Preencha o formulário e fale com um de nossos advisors.
                </p>
              </div>
              <div className="w-full">
                <DiagnosticForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
