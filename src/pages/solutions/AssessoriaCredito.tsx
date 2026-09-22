import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Coins, 
  FileCheck2, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Laptop, 
  CheckCircle2, 
  Clock,
  Landmark,
  BadgePercent,
  FileSpreadsheet
} from "lucide-react";

export function AssessoriaCredito() {
  const steps = [
    {
      num: "01",
      title: "Diagnóstico de Endividamento & Dossiê",
      desc: "Análise da estrutura de dívida atual (curto vs. longo prazo, garantias e custo médio ponderado). Estruturação de balanços e DRE no padrão exigido pelo comitê de crédito.",
      icon: FileSpreadsheet
    },
    {
      num: "02",
      title: "Esteira Digital & Plataforma",
      desc: "Upload centralizado e seguro de documentação financeira, fiscais e certidões em plataforma digital, eliminando retrabalho e agilizando a análise bancária.",
      icon: Laptop
    },
    {
      num: "03",
      title: "Negociação Multibanco & Estruturação",
      desc: "Apresentação estratégica da operação diretamente para mesas de crédito de bancos comerciais, cooperativas e fundos estruturados (FIDC e CRI).",
      icon: Landmark
    },
    {
      num: "04",
      title: "Acompanhamento & Liberação de Caixa",
      desc: "Acompanhamento de status de aprovação em tempo real, validação de minutas contratuais e garantia de liberação de capital de giro nas melhores condições.",
      icon: Coins
    }
  ];

  const benefits = [
    {
      title: "Alongamento de Prazos",
      desc: "Troca de dívidas sufocantes de curto prazo (capital de giro emergencial) por linhas de longo prazo alinhadas ao ciclo da indústria.",
      icon: Clock
    },
    {
      title: "Redução de Taxas e Spread",
      desc: "Com números auditados e DRE organizada pela Mont Gestão, o risco percebido pelo banco despenca, barateando o custo da dívida.",
      icon: BadgePercent
    },
    {
      title: "Capital de Giro Inteligente",
      desc: "Recursos desenhados especificamente para financiar compras de matéria-prima, expansão de estoque e sazonalidade de distribuição.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="bg-obsidian text-white font-sans min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_50%_0%,_#d4af37_0%,_transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-premium/15 border border-accent-premium/40 text-accent-premium text-xs font-bold tracking-[0.25em] uppercase mb-8 shadow-sm">
              <Landmark className="w-3.5 h-3.5" />
              Capital Inteligente para Indústrias & Distribuidoras
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-light leading-[1.08] tracking-tight text-white mb-8">
              Assessoria de <span className="font-serif italic text-accent-premium">Crédito Estruturado</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/85 font-light leading-relaxed mb-6 max-w-3xl mx-auto">
              Acesso a capital bancário com menores taxas e melhores prazos, operado 100% via esteira digital e baseado no controle real dos números da sua empresa.
            </p>
            <p className="text-sm text-accent-premium font-medium mb-12 tracking-wide">
              *Acesso a capital como consequência natural de estar no controle dos indicadores financeiros.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link 
                to="/diagnostico" 
                className="w-full sm:w-auto px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium hover:bg-white transition-all duration-300 rounded-full text-center shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                Avaliar Capacidade de Crédito
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Racional de Crédito */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="p-8 bg-obsidian/90 border border-white/10 rounded-2xl hover:border-accent-premium/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-accent-premium/15 flex items-center justify-center text-accent-premium mb-6">
                  <b.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-3">{b.title}</h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona o Processo */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-premium text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Esteira Digital
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-white">
              Do dossiê ao dinheiro <span className="italic text-accent-premium font-serif">na conta</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="p-8 bg-white/[0.03] border border-white/10 hover:border-accent-premium/50 transition-all duration-300 rounded-2xl flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-accent-premium tracking-widest">{s.num}</span>
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-accent-premium group-hover:bg-accent-premium group-hover:text-obsidian transition-colors">
                      <s.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-medium text-white mb-3">{s.title}</h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-b from-obsidian to-azul-noite border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-6">
            Estruture o capital da sua empresa <br />
            <span className="font-serif italic text-accent-premium">sem comprometer a sua margem.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl mx-auto mb-10">
            Fale com os nossos especialistas em crédito e veja as linhas e estruturas disponíveis para o faturamento da sua operação.
          </p>
          <Link
            to="/diagnostico"
            className="inline-flex items-center gap-2 px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium hover:bg-white transition-all duration-500 rounded-full shadow-xl shadow-accent-premium/20"
          >
            Solicitar Análise de Crédito <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
