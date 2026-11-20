import {
  ShoppingBag,
  Database,
  Landmark,
  Store,
  Users,
  Megaphone,
  Search,
  FileSpreadsheet,
  TrendingUp,
  Wallet,
  Target
} from "lucide-react";

const inputSources = [
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: ShoppingBag,
    iconColor: "text-teal-300",
    dotColor: "#2dd4bf"
  },
  {
    id: "erp",
    label: "ERP",
    icon: Database,
    iconColor: "text-[#F5B85D]",
    dotColor: "#F5B85D"
  },
  {
    id: "marketplaces",
    label: "Marketplaces",
    icon: Store,
    iconColor: "text-orange-300",
    dotColor: "#fb923c"
  },
  {
    id: "bancos",
    label: "Bancos",
    icon: Landmark,
    iconColor: "text-emerald-300",
    dotColor: "#34d399"
  },
  {
    id: "meta",
    label: "Meta Ads",
    icon: Megaphone,
    iconColor: "text-blue-300",
    dotColor: "#60a5fa"
  },
  {
    id: "google",
    label: "Google Ads",
    icon: Search,
    iconColor: "text-amber-300",
    dotColor: "#fbbf24"
  },
  {
    id: "crm",
    label: "CRM",
    icon: Users,
    iconColor: "text-sky-300",
    dotColor: "#38bdf8"
  },
  {
    id: "planilhas",
    label: "Planilhas",
    icon: FileSpreadsheet,
    iconColor: "text-emerald-300",
    dotColor: "#34d399"
  }
];

const inputPaths = [
  { d: "M 65 0 Q 65 44 260 72", color: "#2dd4bf", dur: "2.4s", begin: "0s" },
  { d: "M 195 0 Q 195 40 260 72", color: "#F5B85D", dur: "2.6s", begin: "0.4s" },
  { d: "M 325 0 Q 325 40 260 72", color: "#fb923c", dur: "2.5s", begin: "0.8s" },
  { d: "M 455 0 Q 455 44 260 72", color: "#34d399", dur: "2.7s", begin: "1.2s" }
];

const outputPaths = [
  { d: "M 260 0 Q 210 34 86 64", color: "#34d399", dur: "2.2s", begin: "0.2s" },
  { d: "M 260 0 L 260 64", color: "#F5B85D", dur: "2.0s", begin: "0.7s" },
  { d: "M 260 0 Q 310 34 434 64", color: "#2dd4bf", dur: "2.2s", begin: "1.2s" }
];

const outputs = [
  {
    id: "lucro",
    label: "Lucro",
    sub: "Margem real",
    icon: TrendingUp,
    accent: "text-emerald-400",
    border: "border-emerald-400/45 bg-emerald-500/10"
  },
  {
    id: "caixa",
    label: "Caixa",
    sub: "Previsão 90d",
    icon: Wallet,
    accent: "text-[#F5B85D]",
    border: "border-[#E8A33D]/55 bg-[#E8A33D]/12"
  },
  {
    id: "roi",
    label: "ROI",
    sub: "Escala segura",
    icon: Target,
    accent: "text-teal-300",
    border: "border-teal-400/45 bg-teal-500/10"
  }
];

export function HeroDataOrbit() {
  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      {/* Glow ambiente sutil por trás do motor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#E8A33D]/15 blur-[75px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* ============================================================
            1. INPUTS — 8 FONTES DE DADOS CONECTADAS
        ============================================================ */}
        <div className="w-full">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <span className="h-px w-8 bg-white/15"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-300">
              Inputs · Fontes de Dados
            </span>
            <span className="h-px w-8 bg-white/15"></span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {inputSources.map((src) => {
              const Icon = src.icon;
              return (
                <div
                  key={src.id}
                  className="px-2.5 py-2 rounded-xl bg-[#10343C]/95 border border-white/20 hover:border-[#F5B85D]/70 shadow-[0_8px_20px_rgba(0,0,0,0.35)] flex items-center gap-2 transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#06181C] border border-white/10 flex items-center justify-center shrink-0">
                    <Icon className={`w-3.5 h-3.5 ${src.iconColor}`} />
                  </div>
                  <span className="text-[11px] font-extrabold text-white truncate">
                    {src.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            2. CONEXÕES RADIAIS DE ENTRADA (INPUTS → MONT FINANCE)
        ============================================================ */}
        <div className="w-full h-16 sm:h-[72px] relative pointer-events-none">
          <svg
            viewBox="0 0 520 72"
            preserveAspectRatio="none"
            className="w-full h-full"
            fill="none"
          >
            <defs>
              <filter id="inGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {inputPaths.map((p, i) => (
              <g key={i}>
                <path
                  d={p.d}
                  stroke="#F5B85D"
                  strokeWidth="1.5"
                  strokeOpacity="0.35"
                  strokeDasharray="4 5"
                />
                <circle r="3.5" fill={p.color} filter="url(#inGlow)">
                  <animateMotion
                    dur={p.dur}
                    begin={p.begin}
                    repeatCount="indefinite"
                    path={p.d}
                  />
                </circle>
              </g>
            ))}
          </svg>
        </div>

        {/* ============================================================
            3. NÚCLEO CENTRAL — PROCESSAMENTO MONT FINANCE
        ============================================================ */}
        <div className="relative z-20 px-5 py-3.5 rounded-2xl bg-gradient-to-br from-[#124954] via-[#0A2C33] to-[#06181C] border-2 border-[#F5B85D] shadow-[0_0_40px_rgba(232,163,61,0.35),inset_0_1px_0_rgba(255,255,255,0.18)] flex items-center gap-3.5">
          <div className="relative w-12 h-12 rounded-xl bg-[#06181C] border border-[#F5B85D]/50 flex items-center justify-center shrink-0">
            <span className="absolute -inset-1 rounded-xl border border-[#F5B85D]/30 animate-ping [animation-duration:3s]"></span>
            <img
              src="/brand/mont-finance-icone-ambar.png"
              alt="Mont Finance"
              className="w-7 h-7 object-contain drop-shadow-[0_2px_10px_rgba(245,184,93,0.5)]"
            />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                Mont Finance
              </span>
              <span className="px-1.5 py-0.5 rounded bg-[#E8A33D] text-[#071A1E] text-[8px] font-mono font-black uppercase tracking-wider">
                Inteligência
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-200 block mt-0.5">
              Análise · Decisão · Execução
            </span>
          </div>
        </div>

        {/* ============================================================
            4. CONEXÕES RADIAIS DE SAÍDA (MONT FINANCE → OUTPUTS)
        ============================================================ */}
        <div className="w-full h-14 sm:h-16 relative pointer-events-none">
          <svg
            viewBox="0 0 520 64"
            preserveAspectRatio="none"
            className="w-full h-full"
            fill="none"
          >
            <defs>
              <filter id="outGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {outputPaths.map((p, i) => (
              <g key={i}>
                <path
                  d={p.d}
                  stroke={p.color}
                  strokeWidth="2"
                  strokeOpacity="0.45"
                  strokeDasharray="4 4"
                />
                <circle r="4" fill={p.color} filter="url(#outGlow)">
                  <animateMotion
                    dur={p.dur}
                    begin={p.begin}
                    repeatCount="indefinite"
                    path={p.d}
                  />
                </circle>
              </g>
            ))}
          </svg>
        </div>

        {/* ============================================================
            5. OUTPUTS — RESULTADOS GERADOS (LUCRO · CAIXA · ROI)
        ============================================================ */}
        <div className="w-full">
          <div className="grid grid-cols-3 gap-2.5">
            {outputs.map((out) => {
              const Icon = out.icon;
              return (
                <div
                  key={out.id}
                  className={`p-3 rounded-2xl border backdrop-blur-md shadow-[0_12px_28px_rgba(0,0,0,0.45)] flex flex-col items-center text-center transition-transform hover:-translate-y-0.5 ${out.border}`}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Icon className={`w-4 h-4 ${out.accent}`} />
                    <strong className="text-sm sm:text-base font-black text-white tracking-tight">
                      {out.label}
                    </strong>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-200/90">
                    {out.sub}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-2 mt-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-[#F5B85D]">
              Outputs · Mais Resultados no seu E-commerce
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
