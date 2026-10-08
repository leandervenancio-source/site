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
      desc: "Com números auditados, DRE gerencial e defesa técnica elaborada pela Mont Finance, o risco percebido pelas instituições cai drasticamente, barateando o custo financeiro.",
      icon: BadgePercent,
      kpi: "Custo Médio da Dívida Reduzido"
    },
    {
      title: "Capital de Giro para Expansão",
      desc: "Funding desenhado sob medida para financiar estoques, antecipar compras para sazonalidades (como Black Friday) e alavancar a operação de e-commerce.",
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
      title: "E-commerces com Estoque e Ciclo Longo",
      desc: "Operações que necessitam financiar prazos de fabricação, importação e repasse de marketplaces sem drenar a liquidez imediata."
    },
    {
      title: "Operações Digitais em Forte Crescimento",
      desc: "Empresas com alto giro de estoque que precisam de limites expressivos para negociação antecipada de compras com fornecedores."
    },
    {
      title: "Empresas em Reestruturação de Passivos",
      desc: "Companhias sólidas que acumularam antecipações ou dívidas caras no curto prazo e precisam renegociar prazos e taxas com inteligência."
    }
  ];

  return (
    <div className="bg-[#090A0F] text-white font-sans selection:bg-[#d4af37] selection:text-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-20 md:pt-40 md:pb-28 relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-[radial-gradient(ellipse_at_top,_#d4af37_0%,_transparent_65%)] opacity-15 pointer-events-none blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#d4af37]/30 backdrop-blur-md mb-8">
                <img 
                  src="/favicon.png" 
                  alt="Mont Finance" 
                  className="h-4 w-auto object-contain drop-shadow-[0_0_6px_rgba(212,175,55,0.5)]" 
                />
                <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  Captação Estruturada & Otimização de Passivos
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.08] tracking-tight text-white mb-8">
                Soluções de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#E5C378] to-[#D4AF37]">
                  Capital Inteligente
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed mb-6 max-w-3xl mx-auto">
                Acesso a capital bancário e mercado estruturado com as menores taxas e melhores prazos, operado 100% via esteira digital e respaldado pelo controle real dos números da sua empresa.
              </p>

              <p className="text-xs font-mono text-[#d4af37] mb-12 tracking-wide">
                ✦ Captação segura como consequência natural da maturidade dos seus indicadores contábeis e financeiros.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/diagnostico" 
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-black bg-[#d4af37] hover:bg-[#c5a059] transition-all rounded-full text-center shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:scale-[1.02]"
                >
                  Avaliar Capacidade de Captação
                </Link>
                <a
                  href="#como-funciona"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white hover:text-white border border-white/15 hover:border-[#d4af37]/40 transition-all rounded-full text-center bg-white/[0.03]"
                >
                  Entenda a Esteira
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4 Pilares de Atuação */}
      <section className="py-24 sm:py-32 bg-[#0E1118]/40 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.25em] font-bold mb-3 block">
              Estruturação Financeira
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white leading-tight">
              Recursos certos, no tempo certo, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                com o menor custo
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((b, i) => (
              <div key={i} className="p-8 bg-[#0E1118] border border-white/[0.08] rounded-3xl hover:border-[#d4af37]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-6">
                    <b.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-3">{b.title}</h3>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed mb-6">{b.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-[#d4af37]">
                  ✦ {b.kpi}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona o Processo */}
      <section id="como-funciona" className="py-24 sm:py-32 border-b border-white/[0.08] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.25em] font-bold mb-3 block">
              Esteira Digital Integrada
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white leading-tight">
              Do dossiê estratégico ao recurso <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#E5C378] to-[#D4AF37]">
                liberado em conta
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="p-8 bg-[#0E1118] border border-white/[0.08] hover:border-[#d4af37]/40 transition-all duration-300 rounded-3xl flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#d4af37] tracking-widest">{s.num}</span>
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                      <s.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quem é Indicado */}
      <section className="py-24 sm:py-32 bg-[#0E1118]/40 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.25em] font-bold mb-3 block">
                Perfil de Elegibilidade
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6 leading-tight">
                Estruturado para empresas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#E5C378] to-[#D4AF37]">já faturam alto</span>
              </h2>
              <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                Não atuamos com empréstimos emergenciais desordenados. Nossas operações são estruturadas exclusivamente para empresas de e-commerce e canais digitais que faturam acima de R$ 3 milhões ao ano e buscam governança e redução de custo financeiro.
              </p>
              <div className="p-4 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-xs text-zinc-200">
                <strong className="text-[#d4af37] block mb-1">Critério de Análise:</strong>
                Empresas com CNPJ ativo há mais de 2 anos, faturamento comprovado e governança mínima para apresentação a comitês de crédito.
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {profiles.map((p, idx) => (
                <div key={idx} className="p-6 bg-[#0E1118] border border-white/[0.08] rounded-2xl flex items-start gap-4 hover:border-[#d4af37]/30 transition-all">
                  <div className="w-8 h-8 rounded-xl bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{p.title}</h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Estruture o capital da sua empresa <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#E5C378] to-[#D4AF37]">
              sem comprometer o seu caixa
            </span>
          </h2>
          <p className="text-base text-zinc-300 font-light max-w-2xl mx-auto mb-10">
            Fale com os nossos especialistas e receba um diagnóstico técnico de limites, taxas e estruturas disponíveis para o faturamento da sua operação.
          </p>
          <Link
            to="/diagnostico"
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black bg-[#d4af37] hover:bg-[#c5a059] transition-all rounded-full shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-[1.02]"
          >
            Solicitar Análise de Capital <ArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      </section>
    </div>
  );
}
