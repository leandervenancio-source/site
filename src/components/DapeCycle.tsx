import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Database,
  ScanSearch,
  ClipboardList,
  Rocket,
  RefreshCw,
  Check,
  Sparkles,
  ArrowRight,
  Pause,
  Play
} from "lucide-react";
import { trackCtaClick } from "../lib/analytics";

const STEP_DURATION = 5000;

const pillars = [
  {
    letter: "D",
    title: "Dados",
    subtitle: "Organização",
    icon: Database,
    desc: "Reunimos e organizamos as informações financeiras, comerciais e tributárias da operação em uma base única e confiável.",
    actions: [
      "DRE gerencial estruturada por canal e por produto",
      "Fluxo de caixa realizado e projetado",
      "Informações tributárias e de estoque organizadas"
    ],
    gain: "Números em que você pode confiar para decidir."
  },
  {
    letter: "A",
    title: "Análise",
    subtitle: "Diagnóstico",
    icon: ScanSearch,
    desc: "Identificamos onde estão a margem, o caixa e os riscos da operação, e qual é a causa real de cada um.",
    actions: [
      "Margem real por canal, produto e marketplace",
      "Leitura do ciclo financeiro e do capital de giro",
      "Mapeamento de riscos e vazamentos de caixa"
    ],
    gain: "Você sabe o que dá lucro de verdade e onde o caixa trava."
  },
  {
    letter: "P",
    title: "Planejamento",
    subtitle: "Prioridades",
    icon: ClipboardList,
    desc: "Transformamos o diagnóstico em metas, orçamento e um plano de ação com prioridades claras.",
    actions: [
      "Orçamento e forecast dos próximos meses",
      "Cenários de crescimento com impacto em caixa",
      "Plano de ação priorizado por impacto"
    ],
    gain: "Clareza sobre o que fazer primeiro e por quê."
  },
  {
    letter: "E",
    title: "Execução",
    subtitle: "Resultados",
    icon: Rocket,
    desc: "Acompanhamos a implementação no rito mensal de decisão e ajustamos o rumo com base nos números.",
    actions: [
      "Rito mensal de decisão com o CFO",
      "Análise de variância: previsto x realizado",
      "Acompanhamento do plano de ação"
    ],
    gain: "Decisões que viram resultado direto no lucro da empresa."
  }
];

// Posições dos nós no círculo (topo, direita, base, esquerda) em % do container
const nodePositions = [
  { left: "50%", top: "12.5%" },
  { left: "87.5%", top: "50%" },
  { left: "50%", top: "87.5%" },
  { left: "12.5%", top: "50%" }
];

// Setas de direção (sentido horário) nos pontos médios entre os nós
const arrowAngles = [-45, 45, 135, 225];

export function DapeCycle() {
  // "tick" cresce sempre, para a animação girar só no sentido horário
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const active = tick % 4;
  const isRunning = !paused && !hovering;

  useEffect(() => {
    if (!isRunning) return;
    const id = setTimeout(() => setTick((t) => t + 1), STEP_DURATION);
    return () => clearTimeout(id);
  }, [tick, isRunning]);

  const goTo = (idx: number) => {
    const diff = (idx - active + 4) % 4;
    setTick((t) => t + diff);
    setPaused(true);
  };

  const current = pillars[active];
  const CurrentIcon = current.icon;
  const R = 150;
  const C = 2 * Math.PI * R;

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* ================= CÍRCULO DE MELHORIA CONTÍNUA ================= */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[460px] aspect-square">
            {/* Halo de fundo */}
            <div className="absolute inset-[12%] rounded-full bg-[#0E4A55]/10 blur-3xl pointer-events-none"></div>

            {/* Trilha base + setas */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="dapeArc" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E8A33D" />
                  <stop offset="100%" stopColor="#F5B85D" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="200" r={R} fill="none" stroke="#0E4A55" strokeOpacity="0.12" strokeWidth="14" />
              <circle cx="200" cy="200" r={R} fill="none" stroke="#0E4A55" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="2 8" />
              <circle cx="200" cy="200" r="112" fill="none" stroke="#0E4A55" strokeOpacity="0.08" strokeWidth="1" />
              {arrowAngles.map((deg) => {
                const rad = (deg * Math.PI) / 180;
                const x = 200 + R * Math.cos(rad);
                const y = 200 + R * Math.sin(rad);
                return (
                  <g key={deg} transform={`translate(${x} ${y}) rotate(${deg + 90})`}>
                    <path d="M -5 -6 L 4 0 L -5 6" fill="none" stroke="#0E4A55" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                );
              })}
            </svg>

            {/* Arco de progresso + ponto luminoso (gira sempre no sentido horário) */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 180 + tick * 90 }}
              transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            >
              <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
                <circle
                  cx="200"
                  cy="200"
                  r={R}
                  fill="none"
                  stroke="url(#dapeArc)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={`${C / 4} ${C}`}
                />
                <circle cx="200" cy={200 + R} r="13" fill="#E8A33D" opacity="0.25" />
                <circle cx="200" cy={200 + R} r="6" fill="#FFFFFF" stroke="#E8A33D" strokeWidth="3" />
              </svg>
            </motion.div>

            {/* Centro */}
            <div className="absolute inset-[30%] rounded-full bg-white border border-slate-200 shadow-[0_20px_60px_-15px_rgba(14,74,85,0.35)] flex flex-col items-center justify-center text-center p-3">
              <motion.div
                animate={{ rotate: isRunning ? 360 : 0 }}
                transition={isRunning ? { duration: 8, repeat: Infinity, ease: "linear" } : { duration: 0.4 }}
                className="mb-1"
              >
                <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8A33D]" />
              </motion.div>
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.3 }}
                  transition={{ duration: 0.35 }}
                  className="text-4xl sm:text-5xl font-black text-[#0E4A55] leading-none font-mono"
                >
                  {current.letter}
                </motion.span>
              </AnimatePresence>
              <span className="mt-1.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500 leading-tight">
                Melhoria
                <br />
                contínua
              </span>
            </div>

            {/* Nós clicáveis */}
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              const isActive = idx === active;
              return (
                <button
                  key={p.letter}
                  onClick={() => goTo(idx)}
                  aria-label={`Etapa ${p.title}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
                  style={nodePositions[idx]}
                >
                  <motion.div
                    animate={{ scale: isActive ? 1.12 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative w-[68px] h-[68px] sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center border-2 transition-colors duration-300 ${
                      isActive
                        ? "bg-[#0E4A55] border-[#E8A33D] shadow-[0_12px_32px_-6px_rgba(14,74,85,0.6)]"
                        : "bg-white border-slate-200 shadow-md group-hover:border-[#0E4A55]/50"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-2xl ring-4 ring-[#E8A33D]/30 animate-pulse"></span>
                    )}
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 mb-0.5 ${isActive ? "text-[#F5B85D]" : "text-[#0E4A55]/70"}`} />
                    <span className={`text-xl sm:text-2xl font-black font-mono leading-none ${isActive ? "text-white" : "text-[#0E4A55]"}`}>
                      {p.letter}
                    </span>
                  </motion.div>
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider transition-colors ${
                      idx === 2 ? "top-full mt-2" : idx === 0 ? "bottom-full mb-2" : "top-full mt-2"
                    } ${isActive ? "text-[#0E4A55]" : "text-slate-400"}`}
                  >
                    {p.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= PAINEL DE DETALHE ================= */}
        <div className="lg:col-span-6">
          {/* Stepper com barra de tempo */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            {pillars.map((p, idx) => {
              const done = idx < active;
              const isActive = idx === active;
              return (
                <button
                  key={p.letter}
                  onClick={() => goTo(idx)}
                  className="text-left group cursor-pointer"
                >
                  <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden mb-2">
                    {isActive ? (
                      isRunning ? (
                        <motion.div
                          key={tick}
                          className="h-full bg-gradient-to-r from-[#0E4A55] to-[#E8A33D]"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: STEP_DURATION / 1000, ease: "linear" }}
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-r from-[#0E4A55] to-[#E8A33D]" />
                      )
                    ) : (
                      <div className={`h-full ${done ? "w-full bg-[#0E4A55]/60" : "w-0"}`} />
                    )}
                  </div>
                  <span className={`text-[10px] sm:text-xs font-extrabold uppercase tracking-wider transition-colors ${isActive ? "text-[#0E4A55]" : "text-slate-400 group-hover:text-slate-600"}`}>
                    <span className="font-mono">{p.letter}</span>
                    <span className="hidden sm:inline"> · {p.title}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[400px] sm:min-h-[370px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_24px_60px_-20px_rgba(14,74,85,0.25)] relative overflow-hidden"
              >
                <span className="absolute -right-4 -top-10 text-[180px] font-black font-mono text-[#0E4A55]/[0.04] leading-none select-none pointer-events-none">
                  {current.letter}
                </span>

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#0E4A55] text-[#F5B85D] flex items-center justify-center shadow-md">
                        <CurrentIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#E8A33D] block">
                          Etapa 0{active + 1} · {current.subtitle}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                          {current.title}
                        </h3>
                      </div>
                    </div>
                    <button
                      onClick={() => setPaused((v) => !v)}
                      aria-label={paused ? "Retomar ciclo" : "Pausar ciclo"}
                      className="w-8 h-8 rounded-full border border-slate-200 text-slate-500 hover:text-[#0E4A55] hover:border-[#0E4A55]/40 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                    >
                      {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {current.desc}
                  </p>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-2.5">
                    O que fazemos nesta etapa
                  </span>
                  <ul className="space-y-2.5 mb-6">
                    {current.actions.map((a, i) => (
                      <motion.li
                        key={a}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 + i * 0.08 }}
                        className="flex items-start gap-2.5 text-sm text-slate-800 font-medium"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#0E4A55]/10 text-[#0E4A55] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{a}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0E4A55] to-[#0A3B44] text-white flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[#F5B85D] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F5B85D] block mb-0.5">
                        O que você ganha
                      </span>
                      <span className="text-sm font-bold leading-snug">{current.gain}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ================= FECHAMENTO: O CICLO RECOMEÇA ================= */}
      <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#071A1E] text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#E8A33D]/15 rounded-full blur-[90px] pointer-events-none"></div>
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left max-w-xl">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <RefreshCw className="w-4 h-4 text-[#F5B85D]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#F5B85D]">
                E o ciclo recomeça
              </span>
            </div>
            <p className="text-base sm:text-lg font-bold leading-snug">
              Cada execução gera novos dados, que alimentam a próxima análise.
              <span className="text-slate-300 font-medium"> É assim que o lucro da operação cresce mês após mês, e não só uma vez.</span>
            </p>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {pillars.map((p, idx) => (
              <div key={p.letter} className="flex items-center gap-1.5 sm:gap-2">
                <span
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-black font-mono text-sm transition-all duration-300 ${
                    idx === active
                      ? "bg-[#E8A33D] text-[#071A1E] scale-110"
                      : "bg-white/10 text-white border border-white/15"
                  }`}
                >
                  {p.letter}
                </span>
                {idx < pillars.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-white/40" />}
              </div>
            ))}
            <RefreshCw className="w-4 h-4 text-[#F5B85D] ml-1" />
          </div>
        </div>

        <div className="relative mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
            No diagnóstico gratuito, mostramos como o DAPE se aplica à sua operação.
          </span>
          <a
            href="#diagnostico"
            onClick={() => trackCtaClick("dape_cta", "Aplicar o DAPE na minha empresa")}
            className="shrink-0 px-5 py-3 rounded-xl bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] text-[#071A1E] text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 hover:-translate-y-0.5 transition-all shadow-[0_8px_24px_rgba(232,163,61,0.35)]"
          >
            <span>Aplicar o DAPE na minha empresa</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
