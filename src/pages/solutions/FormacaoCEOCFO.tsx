import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  BarChart3, 
  Clock, 
  CheckCircle2, 
  Zap,
  FileSpreadsheet,
  Users
} from "lucide-react";
import { DiagnosticForm } from "../../components/DiagnosticForm";

export function FormacaoCEOCFO() {
  const modules = [
    {
      num: "01",
      title: "Governança de Dados & DRE Prática",
      desc: "Como estruturar o plano de contas e interpretar a DRE gerencial para identificar a margem real e onde estão os vazamentos de lucro.",
      icon: BarChart3
    },
    {
      num: "02",
      title: "Gestão Avançada de Capital de Giro",
      desc: "Metodologia para cálculo de PMP, PMRE e PMV em indústrias e distribuidoras, liberando caixa represado no estoque e no contas a receber.",
      icon: TrendingUp
    },
    {
      num: "03",
      title: "Precificação Estratégica & Margem de Contribuição",
      desc: "A matemática do preço de venda ideal considerando tributação, custos diretos, custos fixos e elasticidade de mercado.",
      icon: FileSpreadsheet
    },
    {
      num: "04",
      title: "Planejamento Orçamentário & FP&A",
      desc: "Construção de orçamento matricial, cenários financeiros de curto e médio prazo e definição de metas por centro de custo.",
      icon: Target
    },
    {
      num: "05",
      title: "Rituais de Gestão Ágil e Comitê Financeiro",
      desc: "Como conduzir reuniões semanais e mensais de indicadores para cobrar metas com clareza e sem microgerenciamento.",
      icon: Users
    },
    {
      num: "06",
      title: "Preparação para Crédito Bancário Estruturado",
      desc: "O que bancos e fundos analisam em balanços e fluxos de caixa antes de liberar linhas de capital com taxas reduzidas.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-obsidian text-branco font-sans min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_50%_0%,_#d4af37_0%,_transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-premium/10 border border-accent-premium/20 text-accent-premium text-[11px] font-bold tracking-[0.25em] uppercase mb-8">
              <BookOpen className="w-3.5 h-3.5" />
              Produto de Entrada & Autoridade
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-light leading-[1.08] tracking-tight mb-8">
              Formação <span className="font-serif italic text-accent-premium">CEO & CFO</span>
            </h1>
            <p className="text-lg sm:text-xl text-branco/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              Trilha prática de capacitação financeira e tomada de decisão para proprietários e gestores financeiros de indústrias e distribuidoras.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a 
                href="#modulos" 
                className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium hover:bg-white transition-all duration-500 rounded-full text-center"
              >
                Conhecer a Trilha
              </a>
              <Link 
                to="/diagnostico" 
                className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-branco/80 border border-white/20 hover:border-accent-premium hover:text-accent-premium transition-all duration-500 rounded-full text-center"
              >
                Falar com Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Racional do Programa */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-8 bg-obsidian/70 border border-white/10 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-accent-premium/10 flex items-center justify-center text-accent-premium mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-medium text-branco mb-3">Linguagem do Negócio</h3>
              <p className="text-sm text-branco/60 font-light leading-relaxed">
                Sem jargões acadêmicos. Foco total em decisões práticas de precificação, fluxo de caixa e negociação de prazos.
              </p>
            </div>

            <div className="p-8 bg-obsidian/70 border border-white/10 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-accent-premium/10 flex items-center justify-center text-accent-premium mb-6">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-medium text-branco mb-3">Aplicação Imediata</h3>
              <p className="text-sm text-branco/60 font-light leading-relaxed">
                Templates de planilhas e rotinas de controle utilizadas diretamente na operação da Mont Gestão com empresas faturando acima de R$ 3M/ano.
              </p>
            </div>

            <div className="p-8 bg-obsidian/70 border border-white/10 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-accent-premium/10 flex items-center justify-center text-accent-premium mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-medium text-branco mb-3">Alinhamento Dono & Gestor</h3>
              <p className="text-sm text-branco/60 font-light leading-relaxed">
                Nivele o entendimento de métricas e crie um diálogo maduro entre a direção geral e a liderança financeira da empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos da Formação */}
      <section id="modulos" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-premium text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
              Estrutura Programática
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-branco">
              O que você e seu time <span className="italic text-accent-premium font-serif">vão dominar</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((m) => (
              <div key={m.num} className="p-8 bg-white/[0.03] border border-white/10 hover:border-accent-premium/50 transition-all duration-300 rounded-2xl group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-semibold text-accent-premium tracking-widest">{m.num}</span>
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-accent-premium group-hover:bg-accent-premium group-hover:text-obsidian transition-colors">
                      <m.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-medium text-branco mb-3">{m.title}</h3>
                  <p className="text-sm text-branco/60 font-light leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-b from-obsidian to-azul-noite border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-light text-branco mb-6">
            Eleve o nível da gestão financeira <br />
            <span className="font-serif italic text-accent-premium">da sua indústria ou distribuidora.</span>
          </h2>
          <p className="text-base sm:text-lg text-branco/70 font-light max-w-2xl mx-auto mb-10">
            Solicite mais informações sobre a próxima turma ou agende um diagnóstico para entender se a formação é o melhor passo para o momento da sua empresa.
          </p>
          <Link
            to="/diagnostico"
            className="inline-flex items-center gap-2 px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium hover:bg-white transition-all duration-500 rounded-full"
          >
            Solicitar Contato <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
