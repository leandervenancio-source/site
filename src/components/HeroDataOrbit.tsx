import { motion } from "motion/react";
import {
  ShoppingBag,
  Database,
  Landmark,
  Store,
  Users
} from "lucide-react";

const dataSources = [
  {
    id: "ecommerce",
    label: "E-commerce",
    sub: "Shopify · Nuvem",
    icon: ShoppingBag,
    color: "text-teal-300",
    dot: "bg-teal-400",
    position: "top-[4%] left-[4%] sm:left-[6%]",
    delay: 0
  },
  {
    id: "erp",
    label: "ERP",
    sub: "Bling · Tiny · Omie",
    icon: Database,
    color: "text-[#F5B85D]",
    dot: "bg-[#E8A33D]",
    position: "top-[12%] right-[2%] sm:right-[4%]",
    delay: 0.4
  },
  {
    id: "marketplaces",
    label: "Marketplaces",
    sub: "ML · Shopee",
    icon: Store,
    color: "text-orange-300",
    dot: "bg-orange-400",
    position: "bottom-[26%] right-[0%] sm:right-[2%]",
    delay: 0.8
  },
  {
    id: "bancos",
    label: "Bancos",
    sub: "OFX · Gateways",
    icon: Landmark,
    color: "text-emerald-300",
    dot: "bg-emerald-400",
    position: "bottom-[14%] left-[2%] sm:left-[4%]",
    delay: 1.2
  },
  {
    id: "crm",
    label: "CRM",
    sub: "Clientes · LTV",
    icon: Users,
    color: "text-sky-300",
    dot: "bg-sky-400",
    position: "bottom-[0%] left-[42%] -translate-x-1/2",
    delay: 1.6
  }
];

export function HeroDataOrbit() {
  return (
    <div className="relative w-full max-w-[440px] mx-auto select-none">
      {/* Container quadrado para manter os anéis perfeitamente circulares */}
      <div className="relative aspect-square w-full flex items-center justify-center">
        
        {/* Glow central difuso */}
        <div className="absolute w-52 h-52 rounded-full bg-[#E8A33D]/15 blur-[60px] pointer-events-none"></div>
        <div className="absolute w-64 h-64 rounded-full bg-[#0E4A55]/35 blur-[70px] pointer-events-none"></div>

        {/* Anel 3 (Externo) — com 2 partículas orbitando */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          className="absolute w-[90%] h-[90%] rounded-full border border-dashed border-white/15 pointer-events-none"
        >
          <span className="absolute top-[14%] right-[13%] w-2.5 h-2.5 rounded-full bg-[#E8A33D] shadow-[0_0_12px_#E8A33D]"></span>
          <span className="absolute bottom-[16%] left-[12%] w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></span>
        </motion.div>

        {/* Anel 2 (Intermediário) — girando no sentido oposto */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[68%] h-[68%] rounded-full border border-dashed border-[#E8A33D]/30 pointer-events-none"
        >
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#F5B85D] shadow-[0_0_12px_#F5B85D]"></span>
          <span className="absolute bottom-[10%] right-[10%] w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf]"></span>
        </motion.div>

        {/* Anel 1 (Interno) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[46%] h-[46%] rounded-full border border-dashed border-teal-400/25 pointer-events-none"
        >
          <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></span>
        </motion.div>

        {/* Núcleo Central: Mont Finance Intelligence */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#0E4A55] via-[#0A272D] to-[#061518] border-2 border-[#E8A33D] shadow-[0_0_40px_rgba(232,163,61,0.3)] flex flex-col items-center justify-center">
            {/* Pulso externo suave */}
            <span className="absolute -inset-2 rounded-full border border-[#E8A33D]/25 animate-ping [animation-duration:3.5s]"></span>
            <img
              src="/favicon.png"
              alt="Mont Finance"
              className="w-9 h-9 sm:w-11 sm:h-11 object-contain drop-shadow-[0_2px_10px_rgba(232,163,61,0.45)]"
            />
            <span className="text-[8px] sm:text-[9px] font-mono font-extrabold uppercase tracking-[0.16em] text-[#F5B85D] mt-1">
              Mont AI · BI
            </span>
          </div>
        </div>

        {/* 5 Fontes de Dados Conectadas nas Órbitas */}
        {dataSources.map((source) => {
          const Icon = source.icon;
          return (
            <motion.div
              key={source.id}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: source.delay
              }}
              className={`absolute z-30 ${source.position}`}
            >
              <div className="px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#0A272D]/95 backdrop-blur-md border border-white/15 hover:border-[#E8A33D]/60 shadow-[0_14px_30px_rgba(0,0,0,0.45)] flex items-center gap-2.5 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#061518] border border-white/10 flex items-center justify-center shrink-0">
                  <Icon className={`w-4 h-4 ${source.color}`} />
                </div>
                <div className="text-left leading-tight">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${source.dot}`}></span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-white whitespace-nowrap">
                      {source.label}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 block whitespace-nowrap mt-0.5">
                    {source.sub}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Legenda de Saída de Inteligência abaixo da órbita */}
      <div className="mt-2 px-3.5 py-2 rounded-full bg-[#0A272D]/90 border border-white/10 flex items-center justify-center gap-2 text-[10px] font-mono text-slate-300 shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>
          FONTES CONECTADAS → <strong className="text-[#F5B85D]">DRE · CMV · LUCRO REAL</strong>
        </span>
      </div>
    </div>
  );
}
