import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Clock, 
  ArrowRight,
  AlertCircle,
  Zap,
  ShieldCheck,
  MessageCircle,
  ChevronDown,
  Plus,
  Search,
  Settings,
  Monitor,
  GraduationCap
} from "lucide-react";
import { useState } from "react";
import { Testimonials } from "../../components/Testimonials";
import { DiagnosticForm } from "../../components/DiagnosticForm";
import { cn } from "../../lib/utils";

export function AdvisoryProgram() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que é o Advisory Program?",
      answer: "O Advisory Program é uma mentoria de gestão ativa voltada para PMEs que buscam profissionalizar sua estrutura, bater metas com consistência e aumentar a lucratividade através de métodos comprovados."
    },
    {
      question: "Para quem o Advisory Program é indicado?",
      answer: "É indicado para donos de PMEs em fase de crescimento que sentem a necessidade de uma gestão mais profissional, baseada em dados, rituais de controle e de uma equipe mais qualificada."
    },
    {
      question: "Qual a diferença entre o Advisory e uma consultoria tradicional?",
      answer: "Trabalhamos com uma metodologia prática de implementação, com acompanhamento online, e uso de tecnologia e IA, focando em gerar resultados consistentes e previsíveis."
    },
    {
      question: "Quanto tempo dura o acompanhamento?",
      answer: "O programa trabalha com ciclos renováveis de 12 meses, sendo estruturado para gerar mudanças culturais e operacionais profundas que garantem a sustentabilidade dos resultados."
    }
  ];

  return (
    <div className="bg-soft-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="pdf-section bg-obsidian text-branco pt-32 pb-20 relative overflow-hidden min-h-[90vh] flex items-center">
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
            <span className="text-accent-premium font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Soluções Empresariais</span>
            <h1 className="text-6xl md:text-9xl font-display font-light leading-[0.9] mb-8 text-branco tracking-tight">
              Advisory <br />
              <span className="font-serif italic text-accent-premium">Program</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-display font-light text-branco/90 mb-8 leading-relaxed">
              Consultoria empresarial com foco em <span className="text-accent-premium font-normal">estrutura, governança e conselho</span> de alto nível para PMEs.
            </h2>
            <p className="text-lg text-branco/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              O crescimento acelerado traz desafios que ultrapassam a intuição. Com o Advisory Program, sua empresa ganha um conselho estratégico para alinhar a visão de longo prazo à execução diária.
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
      <section className="pdf-section py-12 md:py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-muted font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Diagnóstico</span>
            <h2 className="text-4xl md:text-6xl font-display text-obsidian mb-8 leading-tight tracking-tight">
              Sua empresa precisa de <br />
              <span className="font-serif italic text-accent-muted">profissionalização?</span>
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
              O crescimento traz complexidade. Se você se identifica com estes sinais, sua empresa atingiu o teto da gestão intuitiva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Crescimento acelerado sem metas conectadas à operação" },
              { icon: Users, title: "Desalinhamento entre áreas e falta de senso de dono" },
              { icon: BarChart3, title: "Indicadores pouco confiáveis e relatórios isolados" },
              { icon: AlertCircle, title: "Tomadas de decisão lentas que comprometem a estratégia" }
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

      {/* Como ajuda Section (A Abordagem) */}
      <section className="pdf-section py-12 md:py-20 bg-obsidian text-branco relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-premium/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-6 block">A Abordagem</span>
            <h2 className="text-4xl md:text-7xl font-display font-light leading-tight text-branco mb-8">
              Estruturamos o que <br />
              <span className="font-serif italic text-accent-premium">sustenta o lucro.</span>
            </h2>
            <p className="text-xl text-branco/50 font-light leading-relaxed max-w-3xl mx-auto">
              O Advisory Program não é apenas orientação. É a <span className="text-branco font-normal">implantação de uma arquitetura de negócio</span> que permite sua empresa escalar sem quebrar através do Método MGI.
            </p>
          </div>

          <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center gap-1.5 mb-16">
            {/* Teto (Resultados) */}
            <div className="bg-accent-premium text-white font-bold py-4 text-center uppercase tracking-[0.4em] text-lg w-full h-24 flex items-center justify-center shadow-xl relative z-30 transition-all duration-500 hover:bg-white hover:text-accent-premium cursor-default" style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}>
              RESULTADOS
            </div>
            
            {/* Pilares */}
            <div className="grid grid-cols-4 gap-1.5 w-full h-20 relative z-20">
              {['Marketing', 'Comercial', 'Operação', 'Finanças'].map((pilar) => (
                <div key={pilar} className="bg-accent-premium/80 text-white flex items-center justify-center font-display font-medium text-xs lg:text-sm tracking-widest uppercase hover:bg-accent-premium hover:scale-105 hover:z-30 transition-all duration-500 cursor-default shadow-lg">
                  {pilar}
                </div>
              ))}
            </div>
            
            {/* Base */}
            <div className="bg-accent-premium/60 text-white font-display font-bold py-6 text-center text-lg lg:text-xl w-full shadow-2xl h-20 flex items-center justify-center relative z-10 border-y border-white/5 uppercase tracking-widest hover:bg-accent-premium transition-all duration-500 cursor-default">
              Gestão e Liderança
            </div>
            
            {/* Fundação */}
            <div className="grid grid-cols-3 gap-1.5 w-full h-20">
              {['Mentalidade', 'Cultura', 'Estratégia'].map((fund) => (
                <div key={fund} className="bg-accent-premium/40 text-white flex items-center justify-center font-display font-medium tracking-widest uppercase text-xs hover:bg-accent-premium hover:text-white transition-all duration-500 shadow-inner cursor-default">
                  {fund}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Governança Ativa", desc: "Conselho estratégico focado em decisões de alto valor." },
              { title: "Precisão Operacional", desc: "Processos desenhados para escala e eficiência máxima." },
              { title: "Inteligência de Dados", desc: "Dashboards em tempo real para pilotar o negócio." }
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
      <section className="pdf-section py-12 md:py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-muted font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Entregas</span>
            <h2 className="text-4xl md:text-6xl font-display text-obsidian mb-8 tracking-tight">
              O que você <span className="font-serif italic text-accent-muted">recebe</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "01", title: "Diagnóstico Organizacional e Financeiro", icon: Search },
              { id: "02", title: "Planejamento Estratégico", icon: Target },
              { id: "03", title: "Implantação das Rotinas de Gestão", icon: Settings },
              { id: "04", title: "Indicadores de performance (EBITDA, Fluxo de Caixa)", icon: BarChart3 },
              { id: "05", title: "Mentoria Individual Semanal", icon: Users },
              { id: "06", title: "Acesso à Plataforma MGI Dashboards", icon: Monitor },
              { id: "07", title: "Suporte Estratégico via Whatsapp", icon: MessageCircle },
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

      <div className="pdf-section">
        <Testimonials />
      </div>

      {/* Resultados Section */}
      <section className="pdf-section py-12 md:py-20 bg-obsidian text-branco">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Impacto</span>
              <h2 className="text-4xl md:text-6xl font-display font-light text-branco mb-12 leading-tight">
                Resultados <br />
                <span className="font-serif italic text-accent-premium">Tangíveis</span>
              </h2>
              <p className="text-xl text-branco/70 font-light mb-12 leading-relaxed">
                O Advisory Program proporciona a estrutura e a governança necessárias para PMEs que desejam escalar com domínio total da operação.
              </p>
              <Link to="/diagnostico" className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium rounded-full overflow-hidden transition-all duration-500">
                <span className="relative z-10">Fale Conosco</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </Link>
            </div>
            <div className="space-y-6">
              {[
                { id: "01", text: "Decisões ágeis e confiáveis baseadas em dados reais." },
                { id: "02", text: "Redução drástica de desperdícios e ineficiências." },
                { id: "03", text: "Alinhamento total entre estratégia e execução." },
                { id: "04", text: "Crescimento consistente com processos replicáveis." },
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

      {/* FAQ Section */}
      <section className="pdf-section py-12 md:py-20 bg-soft-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-muted font-bold tracking-[0.3em] uppercase text-xs mb-6 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-display text-obsidian mb-4 tracking-tight">Dúvidas Frequentes</h2>
            <p className="text-slate-500 font-light text-lg">Tudo o que você precisa saber sobre o Advisory Program.</p>
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
                {/* Print-only expanded answer */}
                <div className="hidden faq-answer px-8 pb-8 text-slate-500 font-light text-lg leading-relaxed">
                  <div className="pt-4 border-t border-slate-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pdf-section py-12 md:py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-12 lg:p-20 bg-obsidian rounded-[2rem] sm:rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-premium/5 blur-[120px] rounded-full"></div>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-display text-branco mb-6 sm:mb-8 leading-[0.9] tracking-tight">
                  Fale <br className="hidden sm:block" />
                  <span className="font-serif italic text-accent-premium">conosco</span>
                </h2>
                <p className="text-lg sm:text-xl text-branco/70 font-light leading-relaxed mb-8 sm:mb-12">
                  Transforme o futuro da sua empresa hoje. Preencha o formulário e fale com um de nossos advisors experientes.
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
