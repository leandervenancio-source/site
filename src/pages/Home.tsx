import { motion } from "motion/react";
import { DiagnosticForm } from "../components/DiagnosticForm";
import { Testimonials } from "../components/Testimonials";
import { TrendingUp, Users, Target, BarChart3, Wallet, Settings, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

export function Home() {
  return (
    <div className="bg-branco">
      {/* Hero */}
      <section id="home" className="relative bg-obsidian text-branco min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-premium/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-premium/5 blur-[120px] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} 
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light leading-[1.05] mb-8 text-branco tracking-tight">
              Sua empresa cresce. <br />
              <span className="font-serif italic text-accent-premium">Mas está fora de controle.</span>
            </h1>
            <p className="text-lg md:text-2xl text-branco/80 font-sans font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              Se você ainda depende de decisões centralizadas e não tem indicadores confiáveis, o problema não é esforço. <span className="text-branco font-normal">É a falta de uma estrutura de gestão profissional.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#form" className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium hover:bg-white transition-all duration-500 rounded-full overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.2)]">
                <span className="relative z-10">Solicitar diagnóstico estratégico</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Atuamos - Bento Grid Style */}
      <section id="atuacao" className="py-32 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Info Card */}
            <div className="lg:col-span-7 bento-card bg-white p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-premium/5 blur-[80px] rounded-full -mr-32 -mt-32 transition-all duration-700 group-hover:bg-accent-premium/10"></div>
              <span className="text-accent-muted font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block relative z-10">Expertise MGI</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-obsidian mb-8 leading-[1.1] tracking-tight relative z-10">
                Track Record em estruturar e acelerar empresas de <span className="font-serif italic text-accent-muted">alto faturamento.</span>
              </h2>
              <p className="text-slate-600 font-light text-xl leading-relaxed mb-12 max-w-2xl relative z-10">
                Atuamos nos setores de <span className="font-semibold text-obsidian">Ecommerce, Varejo Físico, Indústria e Serviços</span>, transformando operações caóticas em ativos de alto valor.
              </p>
              <div className="grid grid-cols-2 gap-12 relative z-10">
                {[
                  { value: "+R$ 300Mi", label: "faturamento combinado" },
                  { value: "+300", label: "empresas estruturadas" },
                ].map((stat, i) => (
                  <div key={i} className="group/stat">
                    <div className="text-4xl font-bold text-obsidian mb-2 group-hover/stat:text-accent-premium transition-colors duration-500">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black">{stat.label}</div>
                    <div className="w-12 h-1 bg-accent-premium/20 mt-4 group-hover/stat:w-20 group-hover/stat:bg-accent-premium transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Framework Image Card */}
            <div className="lg:col-span-5 bg-slate-50 rounded-[3rem] border border-slate-200 shadow-2xl p-10 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-premium/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-premium/5 blur-[100px] rounded-full"></div>
              <img 
                src="/assets/framework2.png" 
                alt="Framework de atuação" 
                className="w-full relative z-10 group-hover:scale-110 transition-transform duration-1000 ease-out drop-shadow-2xl" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute bottom-8 left-8 z-20">
                <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 text-[10px] text-obsidian/70 uppercase tracking-[0.2em] font-bold shadow-sm">
                  Metodologia Proprietária
                </div>
              </div>
            </div>

            {/* Small Stats Cards */}
            <div className="lg:col-span-4 bento-card p-12 flex flex-col justify-center items-center text-center bg-accent-premium group hover:bg-white transition-all duration-700">
              <div className="text-6xl font-bold text-obsidian mb-3 group-hover:scale-110 transition-transform duration-500">+10</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-obsidian/60 font-black">Anos de experiência prática</div>
            </div>
            <div className="lg:col-span-4 bento-card bg-white p-12 flex flex-col justify-center items-center text-center group hover:bg-obsidian transition-all duration-700">
              <div className="text-6xl font-bold text-obsidian group-hover:text-branco mb-3 group-hover:scale-110 transition-transform duration-500">+4</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 group-hover:text-branco/60 font-black">Segmentos atendidos com sucesso</div>
            </div>
            <div className="lg:col-span-4 bento-card p-12 flex flex-col items-center justify-center bg-slate-100 group">
              <div className="flex -space-x-4 mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-slate-300 overflow-hidden shadow-xl group-hover:translate-y-[-5px] transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-14 h-14 rounded-full border-4 border-white bg-accent-premium flex items-center justify-center text-xs font-bold text-obsidian shadow-xl relative z-10">
                  +300
                </div>
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformação - O Que Muda */}
      <section className="py-20 bg-obsidian relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-premium/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-xs mb-6 block">A Metodologia</span>
            <h2 className="text-4xl md:text-6xl font-display text-branco mb-8 tracking-tight">
              A Evolução Estratégica <br />
              <span className="font-serif italic text-accent-premium">do Seu Negócio</span>
            </h2>
            <p className="text-branco/70 font-light text-xl max-w-3xl mx-auto leading-relaxed">
              O Método MGI não entrega apenas relatórios. Construímos a estrutura necessária para transformar sua operação em um ativo de alto valor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                before: "Operação centrada no fundador", 
                pain: "Sua empresa para quando você para. O crescimento é limitado pela sua agenda.",
                after: "Liberdade para expansão estratégica", 
                icon: Target 
              },
              { 
                before: "Crescimento caótico e arriscado", 
                pain: "Vender mais está gerando mais problemas, não mais lucro e tranquilidade.",
                after: "Escalabilidade com previsibilidade", 
                icon: TrendingUp 
              },
              { 
                before: "Decisões baseadas em 'feeling'", 
                pain: "Você está pilotando às cegas, sem saber exatamente onde estão os vazamentos de lucro.",
                after: "Inteligência de dados e indicadores", 
                icon: BarChart3 
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col h-full"
              >
                {/* The Card */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col transition-all duration-500 group-hover:border-accent-premium/30 group-hover:bg-white/10">
                  
                  {/* Before (The Pain) */}
                  <div className="p-10 pb-6">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></div>
                      <span className="text-[9px] uppercase tracking-[0.3em] text-brand-gold font-bold">Cenário Atual</span>
                    </div>
                    <h3 className="text-xl font-display text-branco/80 mb-3 group-hover:text-branco transition-colors">
                      {item.before}
                    </h3>
                    <p className="text-branco/40 text-xs leading-relaxed font-light italic">
                      "{item.pain}"
                    </p>
                  </div>

                  {/* Divider with Arrow */}
                  <div className="px-10 flex items-center gap-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-white/5 to-accent-premium/20"></div>
                    <div className="w-8 h-8 rounded-full bg-accent-premium/10 border border-accent-premium/20 flex items-center justify-center group-hover:bg-accent-premium group-hover:scale-110 transition-all duration-500">
                      <ArrowRight className="w-4 h-4 text-accent-premium group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-l from-white/5 to-accent-premium/20"></div>
                  </div>

                  {/* After (The Transformation) */}
                  <div className="p-10 pt-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-accent-premium font-bold">Transformação MGI</span>
                    </div>
                    
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-accent-premium/10 border border-accent-premium/20 text-accent-premium flex items-center justify-center shrink-0 group-hover:bg-accent-premium group-hover:text-white transition-all duration-500">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-xl lg:text-2xl font-serif italic text-branco group-hover:text-accent-premium transition-colors leading-tight">
                        {item.after}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Decorative Background Element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-premium/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Método MGI - Architectural Framework */}
      <section className="py-20 bg-obsidian text-branco relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-premium/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">O Framework</span>
            <h2 className="text-4xl md:text-6xl font-display text-branco mb-8">O Framework do <span className="font-serif italic text-accent-premium">Método MGI</span></h2>
            <p className="text-branco/70 font-light text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              O Modelo de Gestão Integral (MGI) conecta a visão estratégica à execução operacional, garantindo harmonia entre todos os pilares do negócio.
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
        </div>
      </section>

      {/* Depoimentos */}
      <Testimonials />

      {/* Sobre */}
      <section className="py-20 bg-obsidian text-branco relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-premium/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group max-w-sm mx-auto lg:ml-0"
            >
              <div className="absolute -inset-4 bg-accent-premium/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src="/assets/Criativo.png" 
                alt="Leander Venâncio" 
                className="w-full rounded-[2rem] shadow-2xl relative z-10 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-premium/20 rounded-full blur-3xl"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-accent-premium font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">O Advisor</span>
              <h2 className="text-4xl md:text-6xl font-display font-light text-branco mb-10 leading-tight">
                Quem vai <span className="font-serif italic text-accent-premium">te guiar?</span>
              </h2>
              <div className="space-y-6 text-lg font-light leading-relaxed text-branco/80">
                <p>
                  <span className="text-branco font-normal">Leander Venâncio</span> é um advisor estratégico com sólida formação técnica e prática. Engenheiro Civil pela UFG e MBA em Finanças pela FGV.
                </p>
                <p>
                  Ao longo de sua carreira, realizou consultoria individual para mais de <span className="text-accent-premium font-normal">300 empresas</span> e treinou milhares de empresários, identificando os padrões que travam o crescimento.
                </p>
                <p>
                  Sua missão é transformar empresas em negócios lucrativos, estruturados e menos dependentes de seus donos, devolvendo-lhes a liberdade para focar no que realmente importa.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final & Form */}
      <section id="form" className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-12 lg:p-20 bg-obsidian rounded-[2rem] sm:rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-premium/5 blur-[120px] rounded-full"></div>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-display text-branco mb-6 sm:mb-8 leading-[0.9] tracking-tight">
                  Pronto para <br className="hidden sm:block" />
                  <span className="font-serif italic text-accent-premium">profissionalizar?</span>
                </h2>
                <p className="text-lg sm:text-xl text-branco/70 font-light leading-relaxed mb-8 sm:mb-12">
                  Se sua empresa já fatura milhões, mas ainda não opera com controle, é hora de resolver isso. Solicite seu diagnóstico estratégico.
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
