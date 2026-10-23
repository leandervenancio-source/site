import { useState, useEffect, FormEvent } from "react";
import { supabase } from "../lib/supabase";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, MessageSquare, Mail, ShieldCheck, Lock } from "lucide-react";
import { trackLeadSubmit, trackWhatsAppClick } from "../lib/analytics";

interface FormDataState {
  name: string;
  email: string;
  whatsapp: string;
  revenue: string;
  lgpdConsent: boolean;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  whatsapp?: string;
  revenue?: string;
  lgpdConsent?: string;
}

interface DiagnosticFormProps {
  theme?: "dark" | "light";
}

export function DiagnosticForm({ theme: _theme = "dark" }: DiagnosticFormProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    whatsapp: "",
    revenue: "",
    lgpdConsent: true,
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submittedData, setSubmittedData] = useState<{ name: string; revenue: string }>({
    name: "",
    revenue: "",
  });

  const [utms, setUtms] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setUtms({
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        utm_content: params.get("utm_content") || "",
        utm_term: params.get("utm_term") || "",
      });
    }
  }, []);

  const validateStep1 = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrors((prev) => ({ ...prev, email: "Informe um e-mail profissional válido." }));
      return false;
    }
    setErrors((prev) => ({ ...prev, email: undefined }));
    return true;
  };

  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Por favor, informe seu nome completo.";
    }

    const phoneDigits = formData.whatsapp.replace(/\D/g, "");
    if (!formData.whatsapp.trim() || phoneDigits.length < 10) {
      newErrors.whatsapp = "Informe um WhatsApp válido com DDD.";
    }

    setErrors((prev) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.revenue) {
      newErrors.revenue = "Selecione a faixa de faturamento anual.";
    }
    if (!formData.lgpdConsent) {
      newErrors.lgpdConsent = "É necessário concordar com os termos para avançar.";
    }
    setErrors((prev) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      handleNext();
      return;
    }
    if (step === 2) {
      handleNext();
      return;
    }
    if (!validateStep3()) {
      return;
    }

    // Anti-spam honeypot
    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    setIsSubmitting(true);

    let supabaseSuccess = false;
    let formSubmitSuccess = false;

    // 1. Tentar salvar no Supabase
    try {
      const { error: sbError } = await supabase.from("leads").insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          whatsapp: formData.whatsapp.trim(),
          revenue: formData.revenue,
          utm_source: utms.utm_source || "direto",
          utm_medium: utms.utm_medium || null,
          utm_campaign: utms.utm_campaign || null,
          utm_content: utms.utm_content || null,
          utm_term: utms.utm_term || null,
        },
      ]);

      if (!sbError) {
        supabaseSuccess = true;
      } else {
        console.warn("Aviso Supabase (Lead):", sbError.message);
      }
    } catch (sbEx) {
      console.warn("Exceção Supabase:", sbEx);
    }

    // 2. Enviar via FormSubmit
    try {
      const res = await fetch("https://formsubmit.co/ajax/contato@montgestao.com.br", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Novo Lead CFO] ${formData.name.trim()} (${formData.revenue})`,
          Nome: formData.name.trim(),
          Email: formData.email.trim().toLowerCase(),
          WhatsApp: formData.whatsapp.trim(),
          Faturamento_Anual: formData.revenue,
          UTM_Source: utms.utm_source || "direto",
          UTM_Medium: utms.utm_medium || "",
          UTM_Campaign: utms.utm_campaign || "",
          UTM_Content: utms.utm_content || "",
          UTM_Term: utms.utm_term || "",
          _template: "table",
        }),
      });

      if (res.ok) {
        formSubmitSuccess = true;
      }
    } catch (mailErr) {
      console.warn("Exceção no envio via FormSubmit:", mailErr);
    }

    setIsSubmitting(false);

    if (supabaseSuccess || formSubmitSuccess) {
      setSubmittedData({
        name: formData.name.trim(),
        revenue: formData.revenue,
      });
      trackLeadSubmit({
        revenue: formData.revenue,
        has_store: true,
      });
      setStatus("success");
    } else {
      setSubmittedData({
        name: formData.name.trim(),
        revenue: formData.revenue,
      });
      setStatus("error");
    }
  };

  const firstName = submittedData.name ? submittedData.name.split(" ")[0] : "Visitante";
  const isUnder3M = submittedData.revenue === "Até R$ 3 milhões";

  const waMessage = encodeURIComponent(
    `Olá! Acabei de enviar meus dados no site da Mont Finance.\n\nNome: ${submittedData.name}\nFaturamento Anual: ${submittedData.revenue}\n\nGostaria de combinar os detalhes do diagnóstico!`
  );
  const waUrl = `https://wa.me/5562999200405?text=${waMessage}`;

  const containerClass =
    "h-full flex flex-col justify-between rounded-3xl bg-[#071A1E] border-2 border-[#E8A33D]/50 p-7 sm:p-9 shadow-[0_25px_60px_rgba(7,26,30,0.22)] text-white relative overflow-hidden";
  const inputClass =
    "w-full px-4 py-4 bg-[#0A272D] border border-white/15 text-white placeholder:text-slate-400 focus:border-[#E8A33D] focus:bg-[#0D3138] focus:outline-none transition-all rounded-xl font-medium text-sm";
  const labelClass = "text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2";

  // =========================================================================
  // TELA DE SUCESSO CONFIRMADO
  // =========================================================================
  if (status === "success") {
    return (
      <div className={containerClass}>
        <div className="w-16 h-16 rounded-2xl bg-[#E8A33D]/15 border border-[#E8A33D]/40 text-[#F5B85D] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5B85D] block mb-2 text-center">
          Confirmação de Recebimento
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 text-white text-center">
          Solicitação recebida, {firstName}.
        </h3>
        <p className="text-sm font-normal leading-relaxed max-w-md mx-auto mb-6 text-slate-300 text-center">
          Um especialista sênior da Mont Finance entrará em contato para agendar o diagnóstico financeiro da sua operação.
        </p>

        {isUnder3M && (
          <div className="mb-6 p-4 rounded-xl bg-[#E8A33D]/10 border border-[#E8A33D]/30 text-amber-200 text-xs text-left leading-relaxed font-medium">
            <strong>Observação sobre o faturamento:</strong> Nosso modelo de CFO Terceirizado é prioritariamente desenhado para operações acima de R$ 3 milhões/ano. Ainda assim, nossa equipe analisará o seu caso com atenção.
          </div>
        )}

        <div className="space-y-3 max-w-md mx-auto">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("form_success_button")}
            className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chamar no WhatsApp agora</span>
          </a>

          <p className="text-[11px] text-slate-400 pt-1 text-center">
            Se preferir agilizar seu atendimento sem esperar o contato por e-mail, clique no botão acima.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================================
  // TELA DE FALLBACK / FALHA
  // =========================================================================
  if (status === "error") {
    return (
      <div className={containerClass}>
        <div className="w-14 h-14 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto mb-5">
          <AlertCircle className="w-8 h-8" />
        </div>

        <span className="text-[11px] font-bold uppercase tracking-widest text-rose-400 block mb-2 text-center">
          Falta só um passo
        </span>
        <h3 className="text-2xl font-extrabold text-white mb-3 text-center">
          Finalize seu contato diretamente
        </h3>
        <p className="text-xs font-normal leading-relaxed max-w-md mx-auto mb-6 text-slate-300 text-center">
          Houve uma oscilação na rede e seus dados não foram salvos automaticamente. Para não perder tempo, você pode falar direto com nosso especialista pelo WhatsApp com os dados preenchidos:
        </p>

        <div className="space-y-3 max-w-md mx-auto mb-6">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("form_fallback_button")}
            className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chamar no WhatsApp agora</span>
          </a>

          <a
            href="mailto:contato@montgestao.com.br"
            className="w-full py-3.5 rounded-xl border bg-[#0A272D] hover:bg-[#0E363E] text-slate-200 border-white/15 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Mail className="w-4 h-4 text-[#F5B85D]" />
            <span>Enviar e-mail para contato@montgestao.com.br</span>
          </a>
        </div>

        <button
          onClick={() => setStatus("idle")}
          className="text-xs text-slate-400 hover:text-white underline transition-colors block mx-auto"
        >
          Voltar e tentar enviar novamente
        </button>
      </div>
    );
  }

  // =========================================================================
  // FORMULÁRIO MULTI-STEP EXECUTIVO MONT FINANCE
  // =========================================================================
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={containerClass}
    >
      {/* Glows sutis de fundo */}
      <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#E8A33D]/12 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-[#0E4A55]/40 rounded-full blur-3xl pointer-events-none"></div>

      {/* Honeypot field for anti-spam */}
      <input
        type="text"
        name="b_website_trap"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Cabeçalho Executivo do Card + Barra de Progresso */}
      <div className="relative z-10 pb-5 border-b border-white/10">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#F5B85D]">
            <ShieldCheck className="w-4 h-4 text-[#E8A33D]" />
            Diagnóstico Executivo
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-slate-200 font-mono">
            Etapa {step} de 3
          </span>
        </div>

        {/* Barra de Progresso Dourada */}
        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-4">
          <div
            className="bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] h-full rounded-full transition-all duration-500"
            style={{ width: step === 1 ? "33.33%" : step === 2 ? "66.66%" : "100%" }}
          ></div>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          {step === 1 && "Inicie pelo seu e-mail profissional"}
          {step === 2 && "Para quem enviamos o diagnóstico?"}
          {step === 3 && "Qual o porte atual da sua operação?"}
        </h3>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          {step === 1 && "Leva menos de 30 segundos. Um especialista sênior analisará o cenário da sua empresa."}
          {step === 2 && "Informe seu nome e WhatsApp para alinharmos o agendamento da reunião."}
          {step === 3 && "Selecione a faixa de faturamento anual para direcionarmos a análise."}
        </p>
      </div>

      {/* ETAPA 1: E-MAIL CORPORATIVO */}
      {step === 1 && (
        <div className="space-y-5 relative z-10 my-6">
          <div>
            <label className={labelClass}>
              E-mail Corporativo*
            </label>
            <input
              type="email"
              placeholder="voce@suaempresa.com.br"
              value={formData.email}
              className={`${inputClass} ${errors.email ? "!border-rose-500" : ""}`}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleNext();
                }
              }}
            />
            {errors.email && <p className="text-[11px] text-rose-400 mt-1.5 font-medium">{errors.email}</p>}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] hover:from-[#F5B85D] hover:to-[#E8A33D] text-[#071A1E] text-xs font-black uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(232,163,61,0.35)] hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Continuar agendamento</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      )}

      {/* ETAPA 2: NOME E WHATSAPP */}
      {step === 2 && (
        <div className="space-y-5 relative z-10 my-6">
          <div>
            <label className={labelClass}>
              Nome Completo*
            </label>
            <input
              type="text"
              placeholder="Seu nome completo"
              value={formData.name}
              className={`${inputClass} ${errors.name ? "!border-rose-500" : ""}`}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
              }}
              autoFocus
            />
            {errors.name && <p className="text-[11px] text-rose-400 mt-1.5 font-medium">{errors.name}</p>}
          </div>

          <div>
            <label className={labelClass}>
              WhatsApp com DDD*
            </label>
            <input
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.whatsapp}
              className={`${inputClass} ${errors.whatsapp ? "!border-rose-500" : ""}`}
              onChange={(e) => {
                setFormData({ ...formData, whatsapp: e.target.value });
                if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: undefined }));
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleNext();
                }
              }}
            />
            {errors.whatsapp && <p className="text-[11px] text-rose-400 mt-1.5 font-medium">{errors.whatsapp}</p>}
          </div>

          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-4 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] hover:from-[#F5B85D] hover:to-[#E8A33D] text-[#071A1E] text-xs font-black uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(232,163,61,0.35)] hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Próximo passo</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      )}

      {/* ETAPA 3: FATURAMENTO E CONFIRMAÇÃO */}
      {step === 3 && (
        <div className="space-y-5 relative z-10 my-6">
          <div>
            <label className={labelClass}>
              Faturamento Anual Aproximado*
            </label>
            <div className="relative">
              <select
                className={`${inputClass} appearance-none cursor-pointer ${!formData.revenue ? "!text-slate-400" : ""} ${
                  errors.revenue ? "!border-rose-500" : ""
                }`}
                value={formData.revenue}
                onChange={(e) => {
                  setFormData({ ...formData, revenue: e.target.value });
                  if (errors.revenue) setErrors((prev) => ({ ...prev, revenue: undefined }));
                }}
                disabled={isSubmitting}
                autoFocus
              >
                <option value="" disabled hidden className="bg-[#071A1E] text-slate-400">
                  Selecione a faixa de faturamento
                </option>
                <option value="Até R$ 3 milhões" className="bg-[#071A1E] text-white">Até R$ 3 milhões</option>
                <option value="De R$ 3 a R$ 10 milhões" className="bg-[#071A1E] text-white">De R$ 3 a R$ 10 milhões</option>
                <option value="De R$ 10 a R$ 30 milhões" className="bg-[#071A1E] text-white">De R$ 10 a R$ 30 milhões</option>
                <option value="Acima de R$ 30 milhões" className="bg-[#071A1E] text-white">Acima de R$ 30 milhões</option>
              </select>
            </div>
            {errors.revenue && <p className="text-[11px] text-rose-400 mt-1.5 font-medium">{errors.revenue}</p>}
          </div>

          <div className="pt-1">
            <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.lgpdConsent}
                onChange={(e) => {
                  setFormData({ ...formData, lgpdConsent: e.target.checked });
                  if (errors.lgpdConsent) setErrors((prev) => ({ ...prev, lgpdConsent: undefined }));
                }}
                className="mt-0.5 rounded border-white/20 text-[#E8A33D] focus:ring-[#E8A33D] accent-[#E8A33D]"
                disabled={isSubmitting}
              />
              <span className="leading-relaxed">
                Concordo com a Política de Privacidade e em receber o contato estratégico da Mont Finance.
              </span>
            </label>
            {errors.lgpdConsent && <p className="text-[11px] text-rose-400 mt-1.5 font-medium">{errors.lgpdConsent}</p>}
          </div>

          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={isSubmitting}
              className="px-4 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] hover:from-[#F5B85D] hover:to-[#E8A33D] text-[#071A1E] text-xs font-black uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(232,163,61,0.35)] hover:scale-[1.01] disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <span>Solicitar diagnóstico</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Rodapé de Confidencialidade */}
      <div className="relative z-10 pt-5 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-slate-400">
        <Lock className="w-3.5 h-3.5 text-[#E8A33D] shrink-0" />
        <span>Dados 100% confidenciais. Reunião executiva sem compromisso.</span>
      </div>
    </form>
  );
}

