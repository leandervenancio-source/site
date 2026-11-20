import {
  ShoppingBag,
  Database,
  Landmark,
  Store,
  Users
} from "lucide-react";

const radialNodes = [
  {
    id: "ecommerce",
    label: "E-commerce",
    sub: "Shopify · Nuvem",
    icon: ShoppingBag,
    iconBg: "bg-teal-400/20 border-teal-400/40 text-teal-300",
    pulseColor: "#2dd4bf",
    // SVG 540x440, centro em (270, 225)
    path: "M 270 64 L 270 225",
    dur: "2.4s",
    begin: "0s",
    cardPos: "top-[1%] left-1/2 -translate-x-1/2"
  },
  {
    id: "erp",
    label: "ERP",
    sub: "Bling · Tiny · Omie",
    icon: Database,
    iconBg: "bg-[#E8A33D]/20 border-[#E8A33D]/50 text-[#F5B85D]",
    pulseColor: "#F5B85D",
    path: "M 455 152 L 270 225",
    dur: "2.7s",
    begin: "0.5s",
    cardPos: "top-[26%] -right-2 sm:-right-4"
  },
  {
    id: "marketplaces",
    label: "Marketplaces",
    sub: "ML · Shopee",
    icon: Store,
    iconBg: "bg-orange-400/20 border-orange-400/50 text-orange-300",
    pulseColor: "#fb923c",
    path: "M 412 368 L 270 225",
    dur: "2.9s",
    begin: "1.0s",
    cardPos: "bottom-[3%] right-[1%] sm:right-[3%]"
  },
  {
    id: "bancos",
    label: "Bancos",
    sub: "OFX · Gateways",
    icon: Landmark,
    iconBg: "bg-emerald-400/20 border-emerald-400/50 text-emerald-300",
    pulseColor: "#34d399",
    path: "M 128 368 L 270 225",
    dur: "2.6s",
    begin: "1.5s",
    cardPos: "bottom-[3%] left-[1%] sm:left-[3%]"
  },
  {
    id: "crm",
    label: "CRM",
    sub: "Clientes · LTV",
    icon: Users,
    iconBg: "bg-sky-400/20 border-sky-400/50 text-sky-300",
    pulseColor: "#38bdf8",
    path: "M 85 152 L 270 225",
    dur: "2.8s",
    begin: "2.0s",
    cardPos: "top-[26%] -left-2 sm:-left-4"
  }
];

export function HeroDataOrbit() {
  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none px-2 sm:px-4">
      {/* Container Radial com espaço generoso para todos os 5 raios */}
      <div className="relative w-full aspect-[540/440] flex items-center justify-center">
        
        {/* Glow de contraste atrás do núcleo central */}
        <div className="absolute w-48 h-48 rounded-full bg-[#E8A33D]/20 blur-[60px] pointer-events-none"></div>
        <div className="absolute w-72 h-72 rounded-full bg-[#0E4A55]/40 blur-[80px] pointer-events-none"></div>

        {/* SVG com as 5 Conexões Radiais + Feixes de Dados Animados fluindo para o Centro */}
        <svg
          viewBox="0 0 540 440"
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="radialSpokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5B85D" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.45" />
            </linearGradient>
            <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {radialNodes.map((node) => (
            <g key={node.id}>
              {/* Linha Radial Base */}
              <path
                d={node.path}
                stroke="url(#radialSpokeGrad)"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeOpacity="0.4"
              />
              {/* Linha Tracejada de Conexão */}
              <path
                d={node.path}
                stroke="#F5B85D"
                strokeWidth="1.25"
                strokeDasharray="4 6"
                strokeOpacity="0.6"
              />
              {/* Partícula de Dado Vivo fluindo da Fonte → Núcleo Central */}
              <circle
                r="4"
                fill={node.pulseColor}
                filter="url(#pulseGlow)"
              >
                <animateMotion
                  dur={node.dur}
                  begin={node.begin}
                  repeatCount="indefinite"
                  path={node.path}
                />
              </circle>
            </g>
          ))}
        </svg>

        {/* NÚCLEO CENTRAL DE ALTO CONTRASTE: MONT FINANCE INTELLIGENCE */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#124954] via-[#0B2E35] to-[#06181C] border-2 border-[#F5B85D] shadow-[0_0_45px_rgba(232,163,61,0.42),inset_0_0_24px_rgba(245,184,93,0.18)] flex flex-col items-center justify-center">
            <span className="absolute -inset-2.5 rounded-full border border-[#F5B85D]/35 animate-ping [animation-duration:3.2s]"></span>
            <img
              src="/brand/mont-finance-icone-ambar.png"
              alt="Mont Finance"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-[0_2px_12px_rgba(245,184,93,0.55)]"
            />
            <span className="mt-1 px-2 py-0.5 rounded-full bg-[#E8A33D] text-[#071A1E] text-[8px] font-mono font-black uppercase tracking-[0.14em] shadow-sm">
              Mont BI · AI
            </span>
          </div>
        </div>

        {/* 5 NÓS DE FONTES DE DADOS COM RESPIRO EQUILIBRADO EM TORNO DO NÚCLEO */}
        {radialNodes.map((node) => {
          const Icon = node.icon;
          return (
            <div
              key={node.id}
              className={`absolute z-30 ${node.cardPos}`}
            >
              <div className="px-2.5 py-2 sm:px-3 sm:py-2 rounded-2xl bg-[#10343C]/95 backdrop-blur-md border border-white/25 hover:border-[#F5B85D] shadow-[0_14px_34px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.14)] flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5">
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl border flex items-center justify-center shrink-0 ${node.iconBg}`}>
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[11px] sm:text-xs font-extrabold text-white block whitespace-nowrap">
                    {node.label}
                  </span>
                  <span className="text-[9px] font-mono text-slate-200/85 block whitespace-nowrap mt-0.5">
                    {node.sub}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Barra Inferior de Saída de Inteligência com Alto Contraste */}
      <div className="mt-3 px-4 py-2.5 rounded-full bg-[#0E323A] border border-[#E8A33D]/45 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono text-white shadow-[0_10px_28px_rgba(0,0,0,0.4)]">
        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
        <span>
          CONEXÃO DIRETA → <strong className="text-[#F5B85D]">DRE · CMV · LUCRO REAL</strong>
        </span>
      </div>
    </div>
  );
}
