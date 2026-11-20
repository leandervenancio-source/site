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
    // Posição no SVG (460x430) — Topo Centro
    path: "M 230 56 L 230 215",
    dur: "2.6s",
    begin: "0s",
    cardPos: "top-[2%] left-1/2 -translate-x-1/2"
  },
  {
    id: "erp",
    label: "ERP",
    sub: "Bling · Tiny · Omie",
    icon: Database,
    iconBg: "bg-[#E8A33D]/20 border-[#E8A33D]/50 text-[#F5B85D]",
    pulseColor: "#F5B85D",
    // Direita Superior
    path: "M 385 150 Q 315 178 230 215",
    dur: "2.9s",
    begin: "0.5s",
    cardPos: "top-[27%] right-0"
  },
  {
    id: "marketplaces",
    label: "Marketplaces",
    sub: "ML · Shopee",
    icon: Store,
    iconBg: "bg-orange-400/20 border-orange-400/50 text-orange-300",
    pulseColor: "#fb923c",
    // Direita Inferior
    path: "M 355 348 Q 298 286 230 215",
    dur: "3.1s",
    begin: "1.0s",
    cardPos: "bottom-[8%] right-[2%] sm:right-[4%]"
  },
  {
    id: "bancos",
    label: "Bancos",
    sub: "OFX · Gateways",
    icon: Landmark,
    iconBg: "bg-emerald-400/20 border-emerald-400/50 text-emerald-300",
    pulseColor: "#34d399",
    // Esquerda Inferior
    path: "M 105 348 Q 162 286 230 215",
    dur: "2.8s",
    begin: "1.5s",
    cardPos: "bottom-[8%] left-[2%] sm:left-[4%]"
  },
  {
    id: "crm",
    label: "CRM",
    sub: "Clientes · LTV",
    icon: Users,
    iconBg: "bg-sky-400/20 border-sky-400/50 text-sky-300",
    pulseColor: "#38bdf8",
    // Esquerda Superior
    path: "M 75 150 Q 145 178 230 215",
    dur: "3.0s",
    begin: "2.0s",
    cardPos: "top-[27%] left-0"
  }
];

export function HeroDataOrbit() {
  return (
    <div className="relative w-full max-w-[480px] mx-auto select-none">
      {/* Container Radial com proporção balanceada */}
      <div className="relative w-full aspect-[460/430] flex items-center justify-center">
        
        {/* Glow de contraste atrás do núcleo central */}
        <div className="absolute w-52 h-52 rounded-full bg-[#E8A33D]/20 blur-[65px] pointer-events-none"></div>
        <div className="absolute w-72 h-72 rounded-full bg-[#0E4A55]/45 blur-[80px] pointer-events-none"></div>

        {/* SVG com as 5 Conexões Radiais + Feixes de Dados Animados fluindo para o Centro */}
        <svg
          viewBox="0 0 460 430"
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
              {/* Linha Radial Base (Brilho Sutil) */}
              <path
                d={node.path}
                stroke="url(#radialSpokeGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeOpacity="0.4"
              />
              {/* Linha Tracejada Interna de Conexão */}
              <path
                d={node.path}
                stroke="#F5B85D"
                strokeWidth="1.25"
                strokeDasharray="4 6"
                strokeOpacity="0.55"
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
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#124954] via-[#0B2E35] to-[#06181C] border-2 border-[#F5B85D] shadow-[0_0_45px_rgba(232,163,61,0.42),inset_0_0_24px_rgba(245,184,93,0.18)] flex flex-col items-center justify-center">
            {/* Anel de pulso suave */}
            <span className="absolute -inset-2.5 rounded-full border border-[#F5B85D]/35 animate-ping [animation-duration:3.2s]"></span>
            <img
              src="/brand/mont-finance-icone-ambar.png"
              alt="Mont Finance"
              className="w-11 h-11 sm:w-12 sm:h-12 object-contain drop-shadow-[0_2px_12px_rgba(245,184,93,0.55)]"
            />
            <span className="mt-1.5 px-2 py-0.5 rounded-full bg-[#E8A33D] text-[#071A1E] text-[8px] sm:text-[9px] font-mono font-black uppercase tracking-[0.14em] shadow-sm">
              Mont BI · AI
            </span>
          </div>
        </div>

        {/* 5 NÓS DE FONTES DE DADOS COM ALTO CONTRASTE EM POSIÇÃO RADIAL */}
        {radialNodes.map((node) => {
          const Icon = node.icon;
          return (
            <div
              key={node.id}
              className={`absolute z-30 ${node.cardPos}`}
            >
              <div className="px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#10343C]/95 backdrop-blur-md border border-white/25 hover:border-[#F5B85D] shadow-[0_14px_34px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.14)] flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5">
                <div className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 ${node.iconBg}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[11px] sm:text-xs font-extrabold text-white block whitespace-nowrap">
                    {node.label}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-200/85 block whitespace-nowrap mt-0.5">
                    {node.sub}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Barra Inferior de Saída de Inteligência com Alto Contraste */}
      <div className="mt-1 px-4 py-2.5 rounded-full bg-[#0E323A] border border-[#E8A33D]/45 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono text-white shadow-[0_10px_28px_rgba(0,0,0,0.4)]">
        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
        <span>
          CONEXÃO DIRETA → <strong className="text-[#F5B85D]">DRE · CMV · LUCRO REAL</strong>
        </span>
      </div>
    </div>
  );
}
