import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { openLegalModal } from "./LegalModal";

const CONSENT_STORAGE_KEY = "mont_lgpd_cookie_consent_v1";

export function getCookieConsent(): "accepted" | "essential" | null {
  if (typeof window === "undefined") return null;
  const val = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (val === "accepted" || val === "essential") return val;
  return null;
}

export function resetCookieConsent() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent("reopen-cookie-banner"));
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = getCookieConsent();
    if (!existing) {
      setVisible(true);
    }

    const handleReopen = () => setVisible(true);
    window.addEventListener("reopen-cookie-banner", handleReopen);
    return () => window.removeEventListener("reopen-cookie-banner", handleReopen);
  }, []);

  const handleChoice = (choice: "accepted" | "essential") => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
      // Atualiza consentimento do Google Analytics caso presente
      if ((window as any).gtag) {
        (window as any).gtag("consent", "update", {
          analytics_storage: choice === "accepted" ? "granted" : "denied",
          ad_storage: choice === "accepted" ? "granted" : "denied",
        });
      }
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de privacidade e cookies"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50 p-4 sm:p-5 rounded-2xl bg-[#071A1E]/95 backdrop-blur-md border border-[#E8A33D]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white"
    >
      <div className="flex items-start gap-3 mb-3.5">
        <div className="w-8 h-8 rounded-lg bg-[#E8A33D]/15 border border-[#E8A33D]/40 text-[#F5B85D] flex items-center justify-center shrink-0 mt-0.5">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="text-xs text-slate-300 leading-relaxed">
          <strong className="text-white font-bold block mb-0.5">
            Privacidade e Proteção de Dados (LGPD)
          </strong>
          Utilizamos cookies essenciais e analíticos para melhorar sua experiência e medir o desempenho do site. Veja nossa{" "}
          <button
            type="button"
            onClick={() => openLegalModal("privacy")}
            className="text-[#F5B85D] hover:underline font-semibold cursor-pointer"
          >
            Política de Privacidade
          </button>{" "}
          e{" "}
          <button
            type="button"
            onClick={() => openLegalModal("terms")}
            className="text-[#F5B85D] hover:underline font-semibold cursor-pointer"
          >
            Termos de Uso
          </button>
          .
        </div>
      </div>

      <div className="flex items-center justify-end gap-2.5">
        <button
          type="button"
          onClick={() => handleChoice("essential")}
          className="px-3.5 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
        >
          Apenas essenciais
        </button>
        <button
          type="button"
          onClick={() => handleChoice("accepted")}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] hover:from-[#F5B85D] hover:to-[#E8A33D] text-[#071A1E] text-[11px] font-black uppercase tracking-wider transition-all shadow-md cursor-pointer"
        >
          Aceitar e continuar
        </button>
      </div>
    </div>
  );
}
