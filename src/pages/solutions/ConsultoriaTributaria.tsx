import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Scale, 
  Receipt, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  FileSpreadsheet, 
  CheckCircle2, 
  Layers, 
  Calculator,
  SearchCheck,
  Coins,
  ShieldAlert,
  BarChart3
} from "lucide-react";

export function ConsultoriaTributaria() {
  const pillars = [
    {
      title: "Recuperação Administrativa de Créditos",
      desc: "Levantamento de créditos tributários pagos a maior nos últimos 5 anos (PIS, COFINS, ICMS e monofásicos). Processamento 100% administrativo na Receita Federal e SEFAZ, sem ações judiciais morosas.",
      icon: Coins,
      kpi: "Injeção Imediata de Caixa"
    },
    {
      title: "Planejamento Tributário & Elisão Fiscal",
      desc: "Revisão de enquadramento (Simples Nacional vs. Lucro Real vs. Presumido), aproveitamento de regimes especiais estaduais para e-commerce (TTD/benefícios fiscais) e estruturação de filiais.",
      icon: Scale,
      kpi: "Redução Legal da Carga Mensal"
    },
    {
      title: "Compliance & Auditoria Digital de SPED",
      desc: "Cruzamento prévio de arquivos SPED Fiscal, EFD Contribuições e notas fiscais com a mesma inteligência algorítmica utilizada pela Receita, eliminando riscos de autuações e multas.",
      icon: ShieldCheck,
      kpi: "Blindagem e Segurança Jurídica"
    },
    {
      title: "Tributação Estratégica na Precificação",
      desc: "Parametrização exata de impostos na formação de preços por SKU nos canais: crédito de entrada, Substituição Tributária (ST), DIFAL e benefícios interestaduais, assegurando que o tributo não devore a margem.",
      icon: Calculator,
      kpi: "Margem Real de Contribuição"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Auditoria & Varredura dos Últimos 60 Meses",
      desc: "Extração e leitura algorítmica de todas as notas fiscais eletrônicas e arquivos fiscais dos últimos 5 anos, mapeando todas as discrepâncias e valores recolhidos a mais nos canais.",
      icon: SearchCheck
    },
    {
      num: "02",
      title: "Apuração Técnica & Dossiê Probatório",
      desc: "Elaboração de laudo contábil-fiscal detalhado, fundamentado na jurisprudência pacificada dos tribunais superiores e nas normas regulamentares vigentes.",
      icon: FileSpreadsheet
    },
    {
      num: "03",
      title: "Compensação & Monetização Administrativa",
      desc: "Homologação dos créditos junto aos órgãos competentes e compensação segura contra tributos correntes, gerando alívio imediato no fluxo de caixa da empresa.",
      icon: Receipt
    },
    {
      num: "04",
      title: "Parametrização & Governança Contínua",
      desc: "Ajuste definitivo do cadastro tributário de produtos (NCM/CST) no ERP para que o e-commerce pare de pagar impostos indevidos daqui para a frente.",
      icon: Layers
    }
  ];

  const opportunities = [
    {
      title: "E-commerce & Fabricantes no Lucro Real",
      items: [
        "Créditos de PIS/COFINS sobre insumos essenciais (embalagens, fretes de entrega, energia e taxa de plataformas)",
        "Exclusão do ICMS da base de cálculo do PIS e da COFINS (Tese do Século)",
        "Equiparações fiscais e incentivos logísticos interestaduais"
      ]
    },
    {
      title: "Lojas Virtuais & Distribuidores em Marketplaces",
      items: [
        "Regimes especiais estaduais para comércio eletrônico (como benefícios em SC, MG e ES)",
        "Ajuste da Substituição Tributária (ICMS-ST) e DIFAL em vendas para consumidor final em outros estados",
        "Revisão de frete e reversa na base de aproveitamento fiscal"
      ]
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
                  Inteligência Fiscal & Compliance Estruturado
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.08] tracking-tight text-white mb-8">
                Consultoria <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#E5C378] to-[#D4AF37]">
                  Tributária Estratégica
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed mb-6 max-w-3xl mx-auto">
                Maximização de margens através da inteligência tributária e segurança jurídica. Diagnóstico minucioso, recuperação administrativa de créditos e planejamento fiscal para e-commerces e empresas digitais.
              </p>

              <p className="text-xs font-mono text-[#d4af37] mb-12 tracking-wide">
                ✦ Redução legal e perene da carga tributária aliada à injeção de liquidez direta no caixa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/diagnostico" 
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-black bg-[#d4af37] hover:bg-[#c5a059] transition-all rounded-full text-center shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:scale-[1.02]"
                >
                  Solicitar Diagnóstico Tributário
                </Link>
                <a
                  href="#pilares"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white hover:text-white border border-white/15 hover:border-[#d4af37]/40 transition-all rounded-full text-center bg-white/[0.03]"
                >
                  Ver Nossas Entregas
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4 Pilares Estratégicos */}
      <section id="pilares" className="py-24 sm:py-32 bg-[#0E1118]/40 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.25em] font-bold mb-3 block">
              Escopo de Atuação
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white leading-tight">
              Transforme a complexidade fiscal em <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                vantagem competitiva real
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

      {/* Método de 4 Etapas */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.25em] font-bold mb-3 block">
              Metodologia Segura & Administrativa
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white leading-tight">
              Do diagnóstico ao crédito <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#E5C378] to-[#D4AF37]">
                homologado e aproveitado
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

      {/* Oportunidades Específicas por Setor */}
      <section className="py-24 sm:py-32 bg-[#0E1118]/40 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.25em] font-bold mb-3 block">
              Foco no E-commerce
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 leading-tight">
              Onde estão as maiores oportunidades de recuperação e economia fiscal?
            </h2>
            <p className="text-sm text-zinc-300 font-light">
              Nossa equipe atua cirurgicamente nas oportunidades legais dos canais digitais e tributação interestadual:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {opportunities.map((item, idx) => (
              <div key={idx} className="p-8 bg-[#0E1118] border border-white/[0.08] rounded-3xl relative overflow-hidden">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37] mb-4"></div>
                <h3 className="text-xl font-display font-bold text-white mb-6">{item.title}</h3>
                <ul className="space-y-4">
                  {item.items.map((line, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Descubra quanto dinheiro a sua operação <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#E5C378] to-[#D4AF37]">
              está deixando na mesa do Fisco
            </span>
          </h2>
          <p className="text-base text-zinc-300 font-light max-w-2xl mx-auto mb-10">
            Realizamos uma varredura fiscal preliminar e confidencial sem custo antecipado para empresas de e-commerce que faturam acima de R$ 3 milhões ao ano.
          </p>
          <Link
            to="/diagnostico"
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black bg-[#d4af37] hover:bg-[#c5a059] transition-all rounded-full shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-[1.02]"
          >
            Agendar Varredura Tributária <ArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      </section>
    </div>
  );
}
