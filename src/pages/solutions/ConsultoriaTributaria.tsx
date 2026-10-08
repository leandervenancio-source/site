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
      desc: "Levantamento de créditos tributários pagos a maior nos últimos 5 anos (PIS, COFINS, ICMS e Previdenciário). Processamento 100% administrativo na Receita Federal e SEFAZ, sem ações judiciais morosas.",
      icon: Coins,
      kpi: "Injeção Imediata de Caixa"
    },
    {
      title: "Planejamento Tributário & Elisão Fiscal",
      desc: "Revisão de enquadramento (Lucro Real vs. Lucro Presumido), aproveitamento de regimes especiais estaduais (TTD/benefícios fiscais para atacadistas e indústrias) e reestruturação societária legal.",
      icon: Scale,
      kpi: "Redução Legal da Carga Mensal"
    },
    {
      title: "Compliance & Auditoria Digital de SPED",
      desc: "Cruzamento prévio de arquivos SPED Fiscal, EFD Contribuições e ECD com a mesma inteligência de malha utilizada pelos órgãos fiscalizadores, eliminando riscos de autuações e multas pesadas.",
      icon: ShieldCheck,
      kpi: "Blindagem e Segurança Jurídica"
    },
    {
      title: "Tributação Estratégica na Precificação",
      desc: "Parametrização exata de impostos na formação de preços de venda: crédito de entrada, Substituição Tributária (ST), DIFAL e benefícios interestaduais, assegurando que o imposto não devore sua margem.",
      icon: Calculator,
      kpi: "Margem Real de Contribuição"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Auditoria & Varredura dos Últimos 60 Meses",
      desc: "Extração e leitura algorítmica de todas as notas fiscais eletrônicas e arquivos SPED dos últimos 5 anos, mapeando todas as discrepâncias e valores recolhidos a mais.",
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
      desc: "Ajuste definitivo do cadastro tributário de produtos (NCM/CST) no ERP para que a empresa pare de pagar impostos indevidos daqui para a frente.",
      icon: Layers
    }
  ];

  const opportunities = [
    {
      title: "Indústrias de Transformação (Lucro Real)",
      items: [
        "Créditos de PIS/COFINS sobre insumos fabris essenciais (embalagens, fretes, energia)",
        "Exclusão do ICMS da base de cálculo do PIS e da COFINS (Tese do Século já pacificada)",
        "Equiparações fiscais e incentivos à modernização do parque fabril"
      ]
    },
    {
      title: "Distribuidoras & Atacadistas",
      items: [
        "Regimes especiais estaduais para fomento ao atacado e logística",
        "Ajuste da Substituição Tributária (ICMS-ST) em operações interestaduais",
        "Revisão de fretes e armazenagem na base de aproveitamento fiscal"
      ]
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
                <Scale className="w-3.5 h-3.5" />
                Inteligência Fiscal & Compliance Estruturado
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-light leading-[1.08] tracking-tight text-white mb-8">
                Consultoria <span className="font-serif italic text-accent-premium">Tributária</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/85 font-light leading-relaxed mb-6 max-w-3xl mx-auto">
                Maximização de margens através da inteligência tributária e segurança jurídica. Diagnóstico minucioso, recuperação administrativa de créditos e planejamento fiscal para indústrias e distribuidoras.
              </p>

              <p className="text-sm text-accent-premium font-medium mb-12 tracking-wide">
                ✦ Redução legal e perene da carga tributária aliada à injeção de liquidez direta no caixa.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Link 
                  to="/diagnostico" 
                  className="w-full sm:w-auto px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium hover:bg-white transition-all duration-300 rounded-full text-center shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                >
                  Solicitar Diagnóstico Tributário
                </Link>
                <a
                  href="#pilares"
                  className="w-full sm:w-auto px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white/90 hover:text-white border border-white/20 hover:border-accent-premium transition-all duration-300 rounded-full text-center"
                >
                  Ver Nossas Entregas
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4 Pilares Estratégicos */}
      <section id="pilares" className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-premium text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Escopo de Atuação
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-white">
              Transforme a complexidade fiscal em <br />
              <span className="italic text-accent-premium font-serif">vantagem competitiva real.</span>
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

      {/* Método de 4 Etapas */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-premium text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Metodologia Segura & Administrativa
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-white">
              Do diagnóstico ao crédito <span className="italic text-accent-premium font-serif">homologado</span>
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

      {/* Oportunidades Específicas por Setor */}
      <section className="py-20 bg-white/[0.02] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-premium text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Foco Setorial
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-white mb-4">
              Onde estão as maiores oportunidades de recuperação e economia?
            </h2>
            <p className="text-sm text-white/70 font-light">
              Nossa equipe atua cirurgicamente nas brechas tributárias legais dos segmentos de maior intensidade fiscal:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {opportunities.map((item, idx) => (
              <div key={idx} className="p-8 bg-obsidian border border-white/10 rounded-3xl relative overflow-hidden">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-premium mb-4"></div>
                <h3 className="text-xl font-display font-medium text-white mb-6">{item.title}</h3>
                <ul className="space-y-4">
                  {item.items.map((line, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3 text-sm text-white/80 font-light">
                      <CheckCircle2 className="w-4 h-4 text-accent-premium shrink-0 mt-0.5" />
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
      <section className="py-24 bg-gradient-to-b from-obsidian to-azul-noite border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-light text-white mb-6">
            Descubra quanto dinheiro a sua empresa <br />
            <span className="font-serif italic text-accent-premium">está deixando na mesa do Fisco.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl mx-auto mb-10">
            Realizamos uma varredura fiscal preliminar e confidencial sem custo antecipado para empresas que faturam acima de R$ 3 milhões ao ano.
          </p>
          <Link
            to="/diagnostico"
            className="inline-flex items-center gap-2 px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium hover:bg-white transition-all duration-500 rounded-full shadow-xl shadow-accent-premium/20"
          >
            Agendar Varredura Tributária <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
