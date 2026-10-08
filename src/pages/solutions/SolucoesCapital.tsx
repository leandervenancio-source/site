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
  FileSpreadsheet,
  Layers,
  Scale
} from "lucide-react";

export function SolucoesCapital() {
  const steps = [
    {
      num: "01",
      title: "Diagnóstico de Endividamento & Dossiê",
      desc: "Análise minuciosa da estrutura de passivos atual (curto vs. longo prazo, garantias e custo médio ponderado). Estruturação de balanços e DRE no padrão de alta exigência dos comitês de crédito.",
      icon: FileSpreadsheet
    },
    {
      num: "02",
      title: "Esteira Digital & Plataforma",
      desc: "Upload centralizado e criptografado de documentação contábil, fiscal e societária em plataforma digital segura, agilizando em até 3x a resposta das instituições financeiras.",
      icon: Laptop
    },
    {
      num: "03",
      title: "Negociação Multibanco & Mercado de Capitais",
      desc: "Apresentação e defesa estratégica da operação simultaneamente para mesas de crédito de grandes bancos, cooperativas e fundos estruturados (FIDC, CRI e debêntures).",
      icon: Landmark
    },
    {
      num: "04",
      title: "Liberação de Recursos & Gestão do Caixa",
      desc: "Acompanhamento em tempo real de aprovação, validação jurídica de minutas contratuais e garantia de liberação do recurso nas melhores condições de custo e carência.",
      icon: Coins
    }
  ];

  const pillars = [
    {
      title: "Alongamento do Perfil de Dívida",
      desc: "Substituição de dívidas asfixiantes de curto prazo (capital de giro emergencial e rotativos) por linhas estruturadas de longo prazo alinhadas ao fluxo operacional.",
      icon: Clock,
      kpi: "Mais Fôlego para o Caixa"
    },
    {
      title: "Redução de Taxas e Spreads Bancários",
      desc: "Com números auditados, DRE gerencial e defesa técnica elaborada pela Mont Gestão, o risco percebido pelas instituições cai drasticamente, barateando o custo financeiro.",
      icon: BadgePercent,
      kpi: "Custo Médio da Dívida Reduzido"
    },
    {
      title: "Capital de Giro para Expansão",
      desc: "Funding desenhado sob medida para financiar compras de matéria-prima, suportar sazonalidades e alavancar a capacidade de atendimento da distribuição.",
      icon: TrendingUp,
      kpi: "Crescimento Sustentável"
    },
    {
      title: "Acesso a Fundos e Estruturas Avançadas",
      desc: "Interlocução direta com FIDCs, securitizadoras e bancos de fomento para operações sob medida de antecipação e emissão de títulos com garantias otimizadas.",
      icon: Layers,
      kpi: "Diversificação de Fontes de Capital"
    }
  ];

  const profiles = [
    {
      title: "Indústrias com Alto Ciclo Financeiro",
      desc: "Operações que necessitam financiar prazos longos de produção e recebimento sem drenar a liquidez imediata."
    },
    {
      title: "Distribuidoras e Atacadistas em Expansão",
      desc: "Empresas com forte giro de estoque que precisam de limites expressivos para negociação antecipada de compras volumosas."
    },
    {
      title: "Empresas em Reestruturação de Passivos",
      desc: "Companhias sólidas que acumularam dívidas caras no curto prazo e precisam renegociar prazos e garantias com inteligência."
    }
  ];

  return (
    <div className="bg-obsidian text-white font-sans min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_50%_0%,_#d4af37_0%,_transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-premium/15 border border-accent-premium/40 text-accent-premium text-xs font-bold tracking-[0.25em] uppercase mb-8 shadow-sm">
                <Landmark className="w-3.5 h-3.5" />
                Captação Estruturada & Otimização de Passivos
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-light leading-[1.08] tracking-tight text-white mb-8">
                Soluções de <span className="font-serif italic text-accent-premium">Capital Inteligente</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/85 font-light leading-relaxed mb-6 max-w-3xl mx-auto">
                Acesso a capital bancário e mercado estruturado com as menores taxas e melhores prazos, operado 100% via esteira digital e respaldado pelo controle dos números da sua empresa.
              </p>

              <p className="text-sm text-accent-premium font-medium mb-12 tracking-wide">
                ✦ Captação segura como consequência da maturidade dos seus indicadores contábeis e financeiros.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Link 
                  to="/diagnostico" 
                  className="w-full sm:w-auto px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium hover:bg-white transition-all duration-300 rounded-full text-center shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                >
                  Avaliar Capacidade de Captação
                </Link>
                <a
                  href="#como-funciona"
                  className="w-full sm:w-auto px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white/90 hover:text-white border border-white/20 hover:border-accent-premium transition-all duration-300 rounded-full text-center"
                >
                  Entenda a Esteira
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4 Pilares de Atuação */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-premium text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Estruturação Financeira
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-white">
              Recursos certos, no tempo certo, <br />
              <span className="italic text-accent-premium font-serif">com o menor custo.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((b, i) => (
              <div key={i} className="p-8 bg-obsidian/90 border border-white/10 rounded-2xl hover:border-accent-premium/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-accent-premium/15 flex items-center justify-center text-accent-premium mb-6">
                    <b.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-white mb-3">{b.title}</h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed mb-6">{b.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/10 text-xs font-mono text-accent-premium">
                  ✦ {b.kpi}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona o Processo */}
      <section id="como-funciona" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-premium text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Esteira Digital Integrada
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-white">
              Do dossiê estratégico ao recurso <span className="italic text-accent-premium font-serif">em conta</span>
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

      {/* Para Quem é Indicado */}
      <section className="py-20 bg-white/[0.02] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-accent-premium text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Perfil de Elegibilidade
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-light text-white mb-6">
                Estruturado para empresas que <span className="italic text-accent-premium font-serif">já faturam alto.</span>
              </h2>
              <p className="text-base text-white/80 font-light leading-relaxed mb-6">
                Não atuamos com empréstimos de balcão ou soluções emergenciais desordenadas. Nossas operações são estruturadas exclusivamente para negócios que faturam acima de R$ 3 milhões ao ano e exigem governança no endividamento.
              </p>
              <div className="p-4 rounded-xl bg-accent-premium/10 border border-accent-premium/30 text-xs text-white/90">
                <strong className="text-accent-premium block mb-1">Critério de Análise:</strong>
                Empresas com CNPJ ativo há mais de 2 anos, faturamento comprovado e sem bloqueios fiscais impeditivos.
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {profiles.map((p, idx) => (
                <div key={idx} className="p-6 bg-obsidian border border-white/10 rounded-2xl flex items-start gap-4 hover:border-accent-premium/40 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-accent-premium/15 flex items-center justify-center text-accent-premium shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-medium text-white mb-1">{p.title}</h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
            Fale com os nossos especialistas e receba um diagnóstico técnico de limites, taxas e estruturas disponíveis para o faturamento da sua operação.
          </p>
          <Link
            to="/diagnostico"
            className="inline-flex items-center gap-2 px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium hover:bg-white transition-all duration-500 rounded-full shadow-xl shadow-accent-premium/20"
          >
            Solicitar Análise de Capital <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
