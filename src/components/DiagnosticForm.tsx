import { useState, useEffect, FormEvent } from "react";
import { supabase } from "../lib/supabase";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, MessageSquare, Mail } from "lucide-react";
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

export function DiagnosticForm({ theme = "light" }: DiagnosticFormProps) {
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

  const containerClass = "rounded-[24px] sm:rounded-[32px] border-[8px] sm:border-[12px] border-[#E8A33D] bg-white p-6 sm:p-9 shadow-2xl text-slate-900 relative";
  const inputClass = "w-full px-4 py-3.5 bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#E8A33D] focus:bg-white focus:outline-none transition-all rounded-xl font-medium text-sm";
  const labelClass = "text-xs font-bold text-slate-700 block mb-1.5";

  // =========================================================================
  // TELA DE SUCESSO CONFIRMADO
  // =========================================================================
  if (status === "success") {
    return (
      <div className={containerClass}>
        <div className="w-16 h-16 rounded-2xl bg-[#E8A33D]/15 border border-[#E8A33D]/40 text-[#E8A33D] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8A33D] block mb-2 text-center">
          Confirmação de Recebimento
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 text-slate-900 text-center">
          Cadastro recebido, {firstName}.
        </h3>
        <p className="text-sm font-normal leading-relaxed max-w-md mx-auto mb-6 text-slate-600 text-center">
          Um especialista sênior da Mont Finance vai entrar em contato para combinar o diagnóstico da sua operação.
        </p>

        {isUnder3M && (
          <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs text-left leading-relaxed font-medium">
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

          <p className="text-[11px] text-slate-500 pt-1 text-center">
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
        <div className="w-14 h-14 rounded-full bg-rose-50 border border-rose-200 text-[#EF4444] flex items-center justify-center mx-auto mb-5">
          <AlertCircle className="w-8 h-8" />
        </div>

        <span className="text-[11px] font-bold uppercase tracking-widest text-[#EF4444] block mb-2 font-medium text-center">
          Falta só um passo
        </span>
        <h3 className="text-2xl font-extrabold text-slate-900 mb-3 text-center">
          Finalize seu contato diretamente
        </h3>
        <p className="text-xs font-normal leading-relaxed max-w-md mx-auto mb-6 text-slate-600 text-center">
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
            className="w-full py-3.5 rounded-xl border bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Mail className="w-4 h-4 text-[#E8A33D]" />
            <span>Enviar e-mail para contato@montgestao.com.br</span>
          </a>
        </div>

        <button
          onClick={() => setStatus("idle")}
          className="text-xs text-slate-500 hover:text-slate-900 underline transition-colors block mx-auto"
        >
          Voltar e tentar enviar novamente
        </button>
      </div>
    );
  }

  // =========================================================================
  // FORMULÁRIO MULTI-STEP ESTILO GROWTH MACHINE
  // =========================================================================
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={containerClass}
    >
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

      {/* ETAPA 1: E-MAIL CORPORATIVO */}
      {step === 1 && (
        <div className="space-y-5">
          <div>
            <label className={labelClass}>
              E-mail Corporativo*
            </label>
            <input
              type="email"
              placeholder="seu@empresa.com.br"
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
              autoFocus
            />
            {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            Utilizaremos seus dados para enviar conteúdos personalizados, ofertas e informações relevantes alinhadas aos seus interesses. Seguindo, você concorda com os termos.
          </p>

          {/* Barra de Progresso e Ação */}
          <div className="pt-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-slate-500 shrink-0">1/3</span>
              <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#E8A33D] to-orange-500 h-full rounded-full w-1/3 transition-all duration-300"></div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#E8A33D] hover:bg-[#D4932D] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Próximo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ETAPA 2: NOME E WHATSAPP */}
      {step === 2 && (
        <div className="space-y-5">
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
            {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
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
            {errors.whatsapp && <p className="text-[11px] text-rose-500 mt-1">{errors.whatsapp}</p>}
          </div>

          {/* Barra de Progresso e Ações */}
          <div className="pt-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-slate-500 shrink-0">2/3</span>
              <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#E8A33D] to-orange-500 h-full rounded-full w-2/3 transition-all duration-300"></div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-3 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 rounded-xl bg-[#E8A33D] hover:bg-[#D4932D] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Próximo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ETAPA 3: FATURAMENTO E CONFIRMAÇÃO */}
      {step === 3 && (
        <div className="space-y-5">
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
                <option value="" disabled hidden>
                  Selecione a faixa de faturamento
                </option>
                <option value="Até R$ 3 milhões">Até R$ 3 milhões</option>
                <option value="De R$ 3 a R$ 10 milhões">De R$ 3 a R$ 10 milhões</option>
                <option value="De R$ 10 a R$ 30 milhões">De R$ 10 a R$ 30 milhões</option>
                <option value="Acima de R$ 30 milhões">Acima de R$ 30 milhões</option>
              </select>
            </div>
            {errors.revenue && <p className="text-[11px] text-rose-500 mt-1">{errors.revenue}</p>}
          </div>

          <div className="pt-1">
            <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.lgpdConsent}
                onChange={(e) => {
                  setFormData({ ...formData, lgpdConsent: e.target.checked });
                  if (errors.lgpdConsent) setErrors((prev) => ({ ...prev, lgpdConsent: undefined }));
                }}
                className="mt-0.5 rounded border-slate-300 text-[#E8A33D] focus:ring-[#E8A33D] accent-[#E8A33D]"
                disabled={isSubmitting}
              />
              <span className="leading-tight">
                Concordo com a Política de Privacidade e em receber o contato estratégico da Mont Finance.
              </span>
            </label>
            {errors.lgpdConsent && <p className="text-[11px] text-rose-500 mt-1">{errors.lgpdConsent}</p>}
          </div>

          {/* Barra de Progresso e Ações */}
          <div className="pt-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-slate-500 shrink-0">3/3</span>
              <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#E8A33D] to-orange-500 h-full rounded-full w-full transition-all duration-300"></div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={isSubmitting}
                className="px-4 py-3 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#E8A33D] to-orange-500 hover:from-[#D4932D] hover:to-[#E8A33D] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Receber diagnóstico</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
