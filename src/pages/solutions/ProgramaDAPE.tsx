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
  TrendingUp, 
  Coins, 
  Cpu, 
  Layers, 
  ArrowRight,
  Database,
  LineChart,
  CalendarCheck,
  Award
} from "lucide-react";
import { useState } from "react";
import { Testimonials } from "../../components/Testimonials";
import { DiagnosticForm } from "../../components/DiagnosticForm";

export function PerformanceProgram() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const dapeSteps = [
    {
      letter: "D",
      title: "Dados",
      subtitle: "Estruturação & Saneamento",
      desc: "Organização completa do plano de contas, conciliação e garantia de precisão absoluta dos dados fiscais e gerenciais da operação.",
      icon: Database
    },
    {
      letter: "A",
      title: "Análise",
      subtitle: "Controladoria Terceirizada",
      desc: "Diagnósticos contínuos de margem de contribuição, custos fixos, ciclo financeiro e identificação imediata de vazamentos de caixa.",
      icon: BarChart3
    },
    {
      letter: "P",
      title: "Planejamento",
      subtitle: "FP&A Terceirizado",
      desc: "Projeções dinâmicas de fluxo de caixa, orçamento empresarial e simulação de cenários de expansão e compras de estoque.",
      icon: LineChart
    },
    {
      letter: "E",
      title: "Execução",
      subtitle: "Rituais Ágeis & Kaizen",
      desc: "Comitês periódicos de tomada de decisão com os sócios, planos de ação kaizen e acompanhamento implacável de metas financeiras.",
      icon: CalendarCheck
    }
  ];

  const pillars = [
    {
      title: "Controladoria Terceirizada",
      desc: "Supervisão técnica contínua dos números, apuração da DRE gerencial, conciliações e relatórios executivos para os sócios.",
      icon: Layers
    },
    {
      title: "FP&A Terceirizado",
      desc: "Inteligência financeira avançada, modelagem de orçamento, previsibilidade de caixa e monitoramento de KPIs estratégicos.",
      icon: TrendingUp
    },
    {
      title: "CFO as a Service (Upgrade)",
      desc: "Para empresas que demandam um nível superior de interlocução sênior, comitê executivo e direcionamento estratégico direto com os fundadores.",
      icon: Award
    }
  ];

  const faqs = [
    {
      question: "O que é o Performance Program?",
      answer: "É o programa carro-chefe da Mont Gestão que integra Controladoria Terceirizada e FP&A em um único ecossistema contínuo, aplicando o método DAPE (Dados, Análise, Planejamento e Execução) para maximizar o lucro e a liquidez de indústrias e distribuidoras."
    },
    {
      question: "Para quem o programa é indicado?",
      answer: "Exclusivo para indústrias e distribuidoras que faturam acima de R$ 3 milhões por ano e buscam controle de caixa, aumento de margem e gestão financeira de alto nível."
    },
    {
      question: "O que é o upgrade de CFO as a Service?",
      answer: "É uma modalidade avançada dentro do programa para empresas que desejam a presença consultiva sênior em comitês executivos, interlocução estratégica com bancos e direcionamento de capital de mais alto nível."
    },
    {
      question: "Vocês fazem terceirização operacional ou financeira?",
      answer: "Não. A Mont Gestão não faz rotinas de digitação operacional. O Performance Program é uma solução integrada de controladoria estratégica, FP&A de alta precisão e direção financeira executiva para destravar margem e caixa."
    },
    {
      question: "Como o método DAPE funciona na rotina da empresa?",
      answer: "Funciona como um ciclo contínuo e recorrente: primeiro garantimos a integridade dos Dados, depois executamos Análises profundas de margem e custos, elaboramos o Planejamento orçamentário e coordenamos a Execução com metas e rituais ágeis mensais."
    },
    {
      question: "Em quanto tempo começamos a ver impacto nos números?",
      answer: "Já nos primeiros 30 a 60 dias os vazamentos de caixa e as distorções de margem são identificados e corrigidos, gerando liberação imediata de capital de giro."
    }
  ];

  return (
    <div className="bg-obsidian text-branco font-sans min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_50%_0%,_#d4af37_0%,_transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-premium/10 border border-accent-premium/20 text-accent-premium text-[11px] font-bold tracking-[0.25em] uppercase mb-8">
              <Zap className="w-3.5 h-3.5" />
              Programa Carro-Chefe · Indústrias & Distribuidoras
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-light leading-[1.05] tracking-tight mb-8">
              Performance <br />
              <span className="font-serif italic text-accent-premium">Program</span>
            </h1>
            <p className="text-lg sm:text-2xl text-branco/80 font-light leading-relaxed mb-6 max-w-3xl mx-auto">
              Aplicação contínua do método DAPE para destravar lucro, blindar o fluxo de caixa e criar uma cultura financeira data-driven na sua empresa.
            </p>
            <p className="text-sm text-accent-premium font-medium mb-12 tracking-wide">
              Controladoria Terceirizada & FP&A integrados em uma única solução contínua de alto desempenho.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link 
                to="/diagnostico" 
                className="w-full sm:w-auto px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium hover:bg-white transition-all duration-500 rounded-full text-center shadow-xl shadow-accent-premium/20"
              >
                Solicitar Diagnóstico Estratégico
              </Link>
              <a 
                href="#dape" 
                className="w-full sm:w-auto px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] text-branco/80 border border-white/20 hover:border-accent-premium hover:text-accent-premium transition-all duration-500 rounded-full text-center"
              >
                Conhecer o Método DAPE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Racional de Entrega: Controladoria, FP&A e CFO as a Service */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-premium text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
              Escopo Integrado
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-branco">
              A inteligência de um <span className="font-serif italic text-accent-premium">departamento financeiro sênior</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div 
                key={i} 
                className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  i === 2 
                    ? "bg-accent-premium/10 border-accent-premium/40 shadow-xl shadow-accent-premium/5" 
                    : "bg-obsidian/70 border-white/10 hover:border-accent-premium/30"
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent-premium/15 flex items-center justify-center text-accent-premium mb-6">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-display font-medium text-branco mb-4">{p.title}</h3>
                  <p className="text-sm text-branco/70 font-light leading-relaxed mb-6">{p.desc}</p>
                </div>
                {i === 2 && (
                  <span className="text-[11px] uppercase tracking-widest font-bold text-accent-premium">
                    ✦ Proximidade Estratégica Máxima
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia DAPE */}
      <section id="dape" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent-premium text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
              Metodologia Proprietária
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-branco mb-6">
              O Ciclo Contínuo <span className="font-serif italic text-accent-premium">DAPE</span>
            </h2>
            <p className="text-base sm:text-lg text-branco/70 font-light leading-relaxed">
              Não é um projeto de gaveta com início e fim. É uma esteira viva de aperfeiçoamento contínuo (Kaizen) e métodos ágeis, repetida mês a mês para alavancar margem e caixa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dapeSteps.map((step, idx) => (
              <div 
                key={step.letter} 
                className="p-8 bg-white/[0.03] border border-white/10 hover:border-accent-premium/50 rounded-2xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="w-12 h-12 rounded-2xl bg-accent-premium text-obsidian font-display font-black text-2xl flex items-center justify-center shadow-lg shadow-accent-premium/20">
                      {step.letter}
                    </span>
                    <span className="text-xs font-mono text-branco/30 font-bold">0{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl font-display font-medium text-branco mb-1">{step.title}</h3>
                  <span className="text-xs uppercase tracking-widest text-accent-premium font-semibold block mb-4">
                    {step.subtitle}
                  </span>
                  <p className="text-sm text-branco/60 font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <Testimonials />

      {/* FAQ */}
      <section className="py-24 bg-white/[0.02] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-premium text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-branco">
              Perguntas sobre o <span className="font-serif italic text-accent-premium">Performance Program</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-white/10 bg-obsidian rounded-2xl overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-display text-lg font-medium text-branco">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-accent-premium transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-branco/70 font-light leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-b from-obsidian to-azul-noite border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-light text-branco mb-6">
            Sua indústria ou distribuidora com a gestão financeira <br />
            <span className="font-serif italic text-accent-premium">que ela merece.</span>
          </h2>
          <p className="text-base sm:text-lg text-branco/70 font-light max-w-2xl mx-auto mb-10">
            Dê o primeiro passo. Preencha a aplicação para o diagnóstico estratégico e receba uma análise preliminar das alavancas de lucro e caixa da sua operação.
          </p>
          <Link
            to="/diagnostico"
            className="inline-flex items-center gap-2 px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-obsidian bg-accent-premium hover:bg-white transition-all duration-500 rounded-full shadow-xl shadow-accent-premium/20"
          >
            Agendar Diagnóstico Estratégico <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
