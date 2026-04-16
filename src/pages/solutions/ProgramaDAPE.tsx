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
  Settings
} from "lucide-react";
import { useState } from "react";
import { Testimonials } from "../../components/Testimonials";
import { DiagnosticForm } from "../../components/DiagnosticForm";
import { cn } from "../../lib/utils";

export function PerformanceProgram() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que é a consultoria Performance Program?",
      answer: "O Performance Program é um programa de consultoria empresarial voltado para Pequenas e Médias empresas que desejam melhorar a eficiência financeira e transformar crescimento em lucro. Ele ajuda a definir a estratégia de crescimento, controlar os indicadores e acelerar os resultados."
    },
    {
      question: "Para quem a consultoria Performance Program é indicada?",
      answer: "Para empresários e CEOs de PMEs que já faturam alto, mas sentem que a operação está fora de controle, as margens estão apertadas ou que o crescimento não está se refletindo no caixa."
    },
    {
      question: "Como funciona a consultoria Performance Program?",
      answer: "Trabalhamos com uma metodologia prática de implementação, com acompanhamento online, e uso de tecnologia e IA, focando em gerar resultados consistentes e previsíveis."
    },
    {
      question: "Em quanto tempo começo a ver resultados?",
      answer: "Os primeiros resultados em termos de clareza e controle financeiro costumam aparecer nos primeiros 30 a 60 dias de implementação do método."
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
              Mentoria de gestão ativa focada em <span className="text-accent-premium font-normal">resultados rápidos e execução</span> de alto nível.
            </h2>
            <p className="text-lg text-branco/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              O Performance Program é desenhado para empresas que precisam de tração imediata. Implementamos o método DAPE para garantir que cada ação gere impacto direto no lucro.
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
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-muted font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Desafios</span>
            <h2 className="text-4xl md:text-6xl font-display text-obsidian mb-8 leading-tight tracking-tight">
              Sua empresa sofre com <br />
              <span className="font-serif italic text-accent-muted">falta de tração?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Execução lenta e metas que nunca saem do papel" },
              { icon: AlertCircle, title: "Equipe sobrecarregada mas com baixa produtividade" },
              { icon: BarChart3, title: "Falta de clareza sobre quais alavancas geram lucro" },
              { icon: Target, title: "Decisões baseadas em 'feeling' e não em dados reais" }
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
      <section className="py-12 bg-obsidian text-branco relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-premium/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-4 block">O Método</span>
            <h2 className="text-3xl md:text-6xl font-display font-light leading-tight text-branco mb-6">
              Aceleração através <br />
              <span className="font-serif italic text-accent-premium">da execução.</span>
            </h2>
            <p className="text-lg text-branco/50 font-light leading-relaxed max-w-2xl mx-auto">
              O Performance Program foca no <span className="text-branco font-normal">curto e médio prazo</span>. Implementamos rituais de controle que garantem que a estratégia seja executada com precisão através do método DAPE.
            </p>
          </div>

          {/* Desktop View (Circular Layout) */}
          <div className="hidden md:flex relative w-full max-w-2xl mx-auto aspect-square items-center justify-center">
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
                    <div className="absolute -inset-6 bg-[#00FFD1]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#00FFD1] text-white flex items-center justify-center text-3xl lg:text-4xl font-black shadow-[0_0_30px_rgba(0,255,209,0.5)] border-4 border-obsidian relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">E</div>
                  </div>
                  <div className="absolute right-full mr-5 text-right w-[160px] lg:w-[200px]">
                    <div className="text-[#00FFD1] font-display font-bold text-xl lg:text-2xl leading-none mb-1 drop-shadow-[0_0_10px_rgba(0,255,209,0.4)]">Execução</div>
                    <div className="text-[9px] tracking-[0.4em] uppercase text-white font-black mb-2">Resultados</div>
                    <p className="text-[11px] text-white/70 leading-relaxed font-light">Rotinas, processos, acompanhamento de tarefas e uso de metodologias ágeis.</p>
                  </div>
                </div>
              </div>

              {/* Dados (D) - Top Right */}
              <div className="absolute top-[27%] right-[27%] translate-x-1/2 -translate-y-1/2">
                <div className="relative flex items-center justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-6 bg-[#3B82F6]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#3B82F6] text-white flex items-center justify-center text-3xl lg:text-4xl font-black shadow-[0_0_30px_rgba(59,130,246,0.5)] border-4 border-obsidian relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">D</div>
                  </div>
                  <div className="absolute left-full ml-5 text-left w-[160px] lg:w-[200px]">
                    <div className="text-[#3B82F6] font-display font-bold text-xl lg:text-2xl leading-none mb-1 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">Dados</div>
                    <div className="text-[9px] tracking-[0.4em] uppercase text-white font-black mb-2">Informação</div>
                    <p className="text-[11px] text-white/70 leading-relaxed font-light">Sistema, processos de registro, indicadores, conciliações e controles padronizados.</p>
                  </div>
                </div>
              </div>

              {/* Planejamento (P) - Bottom Left */}
              <div className="absolute bottom-[27%] left-[27%] -translate-x-1/2 translate-y-1/2">
                <div className="relative flex items-center justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-6 bg-[#8B5CF6]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center text-3xl lg:text-4xl font-black shadow-[0_0_30px_rgba(139,92,246,0.5)] border-4 border-obsidian relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">P</div>
                  </div>
                  <div className="absolute right-full mr-5 text-right w-[160px] lg:w-[200px]">
                    <div className="text-[#8B5CF6] font-display font-bold text-xl lg:text-2xl leading-none mb-1 drop-shadow-[0_0_10px_rgba(139,92,246,0.4)]">Planejamento</div>
                    <div className="text-[9px] tracking-[0.4em] uppercase text-white font-black mb-2">Prioridades</div>
                    <p className="text-[11px] text-white/70 leading-relaxed font-light">Definição de objetivos, estratégias, projetos e planos de ação.</p>
                  </div>
                </div>
              </div>

              {/* Análise (A) - Bottom Right */}
              <div className="absolute bottom-[27%] right-[27%] translate-x-1/2 translate-y-1/2">
                <div className="relative flex items-center justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-6 bg-[#06B6D4]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#06B6D4] text-white flex items-center justify-center text-3xl lg:text-4xl font-black shadow-[0_0_30px_rgba(6,182,212,0.5)] border-4 border-obsidian relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">A</div>
                  </div>
                  <div className="absolute left-full ml-5 text-left w-[160px] lg:w-[200px]">
                    <div className="text-[#06B6D4] font-display font-bold text-xl lg:text-2xl leading-none mb-1 drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">Análise</div>
                    <div className="text-[9px] tracking-[0.4em] uppercase text-white font-black mb-2">Inteligência</div>
                    <p className="text-[11px] text-white/70 leading-relaxed font-light">Diagnóstico, causas-efeitos, tendências, oportunidades, indicadores e relatórios.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View (Vertical List) */}
          <div className="md:hidden space-y-12 py-10">
            {[
              { 
                letter: "D", 
                color: "#3B82F6", 
                title: "Dados", 
                subtitle: "Informação", 
                desc: "Sistema, processos de registro, indicadores, conciliações e controles padronizados." 
              },
              { 
                letter: "A", 
                color: "#06B6D4", 
                title: "Análise", 
                subtitle: "Inteligência", 
                desc: "Diagnóstico, causas-efeitos, tendências, oportunidades, indicadores e relatórios." 
              },
              { 
                letter: "P", 
                color: "#8B5CF6", 
                title: "Planejamento", 
                subtitle: "Prioridades", 
                desc: "Definição de objetivos, estratégias, projetos e planos de ação." 
              },
              { 
                letter: "E", 
                color: "#00FFD1", 
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
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl font-black border-4 border-obsidian mb-4 shadow-lg"
                  style={{ backgroundColor: item.color, boxShadow: `0 0 30px ${item.color}80` }}
                >
                  {item.letter}
                </div>
                <div className="font-display font-bold text-2xl mb-1" style={{ color: item.color }}>{item.title}</div>
                <div className="text-xs tracking-[0.4em] uppercase text-white font-black mb-3">{item.subtitle}</div>
                <p className="text-sm text-white/70 leading-relaxed font-light max-w-xs">{item.desc}</p>
                {i < 3 && (
                  <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent mt-8"></div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Cultura de Performance", desc: "Equipes focadas em metas e indicadores claros." },
              { title: "Agilidade Decisória", desc: "Processos que eliminam gargalos e aceleram a execução." },
              { title: "Foco no Lucro", desc: "Cada ação é medida pelo seu impacto na última linha." }
            ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-3xl border-white/5 hover:border-accent-premium/20 transition-all duration-500 text-center">
                <div className="text-accent-premium font-display font-bold text-xl mb-2">{item.title}</div>
                <p className="text-branco/60 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entregas Section */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-muted font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Entregas</span>
            <h2 className="text-4xl md:text-6xl font-display text-obsidian mb-8 tracking-tight">
              O que você <span className="font-serif italic text-accent-muted">recebe</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "01", title: "Diagnóstico de Performance", icon: Search },
              { id: "02", title: "Definição de OKRs e Metas", icon: Target },
              { id: "03", title: "Rituais de Gestão Semanal", icon: Settings },
              { id: "04", title: "Dashboards de Operação", icon: BarChart3 },
              { id: "05", title: "Mentoria de Execução", icon: Zap },
              { id: "06", title: "Treinamento de Liderança", icon: Users },
              { id: "07", title: "Suporte via Whatsapp", icon: MessageCircle },
              { id: "08", title: "Acesso à MGI Academy", icon: GraduationCap }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bento-card bg-white flex flex-col items-start group"
              >
                <div className="text-xs font-bold text-accent-muted mb-6 tracking-widest uppercase">{item.id}</div>
                <item.icon className="w-10 h-10 text-obsidian mb-8 group-hover:text-accent-premium transition-colors duration-500" />
                <h3 className="text-lg font-display font-medium text-obsidian leading-tight">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section className="py-20 bg-obsidian text-branco">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Impacto</span>
              <h2 className="text-4xl md:text-6xl font-display font-light text-branco mb-12 leading-tight">
                Resultados <br />
                <span className="font-serif italic text-accent-premium">Tangíveis</span>
              </h2>
              <p className="text-xl text-branco/70 font-light mb-12 leading-relaxed">
                O Performance Program entrega clareza e capacidade de execução para PMEs que buscam escala com inteligência e controle rigoroso.
              </p>
              <Link to="/diagnostico" className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium rounded-full overflow-hidden transition-all duration-500">
                <span className="relative z-10">Fale Conosco</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </Link>
            </div>
            <div className="space-y-6">
              {[
                { id: "01", text: "Domínio total sobre a rentabilidade e lucro." },
                { id: "02", text: "Controle rigoroso de custos e previsibilidade." },
                { id: "03", text: "Alinhamento estratégico com metas claras." },
                { id: "04", text: "Governança baseada em dados para decisões rápidas." },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-8 p-8 glass rounded-3xl border-white/5 group hover:border-accent-premium/20 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-accent-premium text-obsidian flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    {item.id}
                  </div>
                  <p className="text-branco/70 text-lg font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona Section */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-premium font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Como fazemos</span>
            <h2 className="text-3xl md:text-4xl font-display text-obsidian mb-6">
              Como funciona o Performance Program
            </h2>
            <p className="text-lg text-obsidian/70 max-w-3xl mx-auto">
              O Performance Program é um programa completo de consultoria de gestão para PMEs, com duração de 6 meses e dedicação real ao dia a dia do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Encontros quinzenais", desc: "Online com consultores especializados.", icon: Users },
              { title: "Treinamentos práticos", desc: "Plataforma online para donos e time aprender.", icon: GraduationCap },
              { title: "Ferramentas práticas", desc: "Dashboards para apoio à tomada de decisão.", icon: BarChart3 },
              { title: "Entregas personalizadas", desc: "Ajustadas à realidade da sua empresa.", icon: CheckCircle2 },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-branco rounded-2xl border border-obsidian/5 flex flex-col items-center shadow-sm">
                <div className="w-16 h-16 bg-obsidian text-accent-premium rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-display text-obsidian mb-2">{item.title}</h3>
                <p className="text-sm text-obsidian/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que investir Section */}
      <section className="py-24 bg-obsidian text-branco overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group max-w-[75%] mx-auto md:mx-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-premium/50 to-blue-500/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="/assets/Foto Leander (2).png" 
                alt="Leander Venâncio" 
                className="w-full h-auto rounded-2xl relative z-10 grayscale-[10%] hover:grayscale-0 transition-all duration-500 shadow-2xl" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent-premium/10 rounded-full blur-[100px]"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-accent-premium mb-8 leading-tight">
                Por que investir agora no Performance Program?
              </h2>
              <div className="space-y-6 text-branco/70 text-lg leading-relaxed">
                <p>Crescer sem estrutura consome seu caixa, reduz suas margens e coloca em risco a longevidade do negócio.</p>
                <p>Postergar a profissionalização da gestão gera custos invisíveis que já impactam sua operação diária.</p>
                <p>Sem objetivos definidos e uma governança sólida, o excesso de esforço não se traduz em resultados reais.</p>
                <p>O futuro da sua empresa depende de decisões fundamentadas em dados, não em suposições.</p>
              </div>
              <Link to="/diagnostico" className="mt-10 inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium hover:bg-white transition-all duration-300 rounded-full">
                Fale conosco
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-muted font-bold tracking-[0.3em] uppercase text-xs mb-6 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-display text-obsidian mb-4 tracking-tight">Dúvidas Frequentes</h2>
            <p className="text-slate-500 font-light text-lg">Tudo o que você precisa saber sobre o Performance Program.</p>
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
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 lg:p-20 bg-obsidian rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-premium/5 blur-[120px] rounded-full"></div>
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <h2 className="text-5xl md:text-7xl font-display text-branco mb-8 leading-[0.9] tracking-tight">
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
