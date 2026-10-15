import { useState, useEffect, FormEvent } from "react";
import { supabase } from "../lib/supabase";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight, MessageSquare, Mail } from "lucide-react";
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

export function DiagnosticForm() {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    whatsapp: "",
    revenue: "",
    lgpdConsent: false,
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

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Por favor, informe seu nome completo.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Informe um e-mail profissional válido.";
    }

    const phoneDigits = formData.whatsapp.replace(/\D/g, "");
    if (!formData.whatsapp.trim() || phoneDigits.length < 10) {
      newErrors.whatsapp = "Informe um WhatsApp válido com DDD.";
    }

    if (!formData.revenue) {
      newErrors.revenue = "Selecione o faturamento anual aproximado.";
    }

    if (!formData.lgpdConsent) {
      newErrors.lgpdConsent = "É necessário concordar com os termos para avançar.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot
    if (formData.honeypot) {
      setStatus("success");
      setSubmittedData({
        name: formData.name,
        revenue: formData.revenue,
      });
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    let supabaseSuccess = false;
    let formSubmitSuccess = false;

    // 1. Gravação no Supabase
    try {
      const { error } = await supabase.from("leads").insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          whatsapp: formData.whatsapp.trim(),
          company: null,
          revenue: formData.revenue,
          employees: null,
        },
      ]);
      if (!error) {
        supabaseSuccess = true;
      } else {
        console.warn("Aviso ao registrar lead no banco:", error.message);
      }
    } catch (dbErr) {
      console.warn("Exceção no registro de banco:", dbErr);
    }

    // 2. Disparo de e-mail via FormSubmit
    try {
      const res = await fetch("https://formsubmit.co/ajax/leandervenancio@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `🚀 Novo Diagnóstico Mont Finance: ${formData.name.trim()}`,
          Nome: formData.name.trim(),
          Email: formData.email.trim(),
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

    // Se pelo menos um dos canais confirmou, é sucesso!
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
      // Falha real: NÃO mostrar tela de sucesso
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

  const inputClass =
    "w-full px-4 py-3.5 bg-[#14181B] border border-[#F5F3EE]/10 text-[#F5F3EE] placeholder:text-[#5B6166] placeholder:text-xs focus:border-[#E8A33D] focus:outline-none transition-colors rounded-xl font-normal text-xs";

  // =========================================================================
  // TELA DE SUCESSO CONFIRMADO
  // =========================================================================
  if (status === "success") {
    return (
      <div className="bg-[#1B2024] border border-[#E8A33D]/40 p-8 sm:p-10 rounded-2xl shadow-xl text-center">
        <div className="w-14 h-14 rounded-full bg-[#E8A33D]/15 border border-[#E8A33D]/40 text-[#E8A33D] flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8A33D] block mb-2 font-medium">
          Confirmação de recebimento
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif text-[#F5F3EE] font-normal mb-3">
          Cadastro recebido, {firstName}.
        </h3>
        <p className="text-sm text-[#F5F3EE]/80 font-normal leading-relaxed max-w-md mx-auto mb-6">
          Um especialista da Mont Finance vai entrar em contato para combinar o diagnóstico da sua operação.
        </p>

        {isUnder3M && (
          <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200/90 text-xs text-left leading-relaxed">
            <strong>Observação sobre o faturamento:</strong> Nosso modelo de CFO Terceirizado é prioritariamente desenhado para operações acima de R$ 3 milhões/ano. Ainda assim, nossa equipe analisará o seu caso com atenção.
          </div>
        )}

        <div className="space-y-3 max-w-md mx-auto">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("form_success_button")}
            className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chamar no WhatsApp agora</span>
          </a>

          <p className="text-[11px] text-[#5B6166] pt-1">
            Se preferir agilizar seu atendimento sem esperar o contato por e-mail, clique no botão acima.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================================
  // TELA DE FALLBACK / FALHA (NÃO MOSTRAR SUCESSO SE AMBOS FALHAREM)
  // =========================================================================
  if (status === "error") {
    return (
      <div className="bg-[#1B2024] border border-[#B5412F]/30 p-8 sm:p-10 rounded-2xl shadow-xl text-center">
        <div className="w-14 h-14 rounded-full bg-[#B5412F]/10 border border-[#B5412F]/30 text-[#B5412F] flex items-center justify-center mx-auto mb-5">
          <AlertCircle className="w-8 h-8" />
        </div>

        <span className="text-[11px] font-mono uppercase tracking-widest text-[#B5412F] block mb-2 font-medium">
          Falta só um passo
        </span>
        <h3 className="text-2xl font-serif text-[#F5F3EE] font-normal mb-3">
          Finalize seu contato diretamente
        </h3>
        <p className="text-xs text-[#F5F3EE]/80 font-normal leading-relaxed max-w-md mx-auto mb-6">
          Houve uma oscilação na rede e seus dados não foram salvos automaticamente. Para não perder tempo, você pode falar direto com nosso especialista pelo WhatsApp com os dados preenchidos ou nos enviar um e-mail:
        </p>

        <div className="space-y-3 max-w-md mx-auto mb-6">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("form_fallback_button")}
            className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chamar no WhatsApp agora</span>
          </a>

          <a
            href="mailto:contato@montgestao.com.br"
            className="w-full py-3.5 rounded-xl bg-[#14181B] hover:bg-white/[0.04] text-[#F5F3EE] border border-[#F5F3EE]/10 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Mail className="w-4 h-4 text-[#E8A33D]" />
            <span>Enviar e-mail para contato@montgestao.com.br</span>
          </a>
        </div>

        <button
          onClick={() => setStatus("idle")}
          className="text-xs text-[#5B6166] hover:text-[#F5F3EE] underline transition-colors"
        >
          Voltar e tentar enviar novamente
        </button>
      </div>
    );
  }

  // =========================================================================
  // FORMULÁRIO PRINCIPAL COM VALIDAÇÃO INLINE
  // =========================================================================
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#1B2024] border border-[#F5F3EE]/10 p-6 sm:p-8 rounded-2xl shadow-xl"
    >
      {/* Honeypot field for anti-spam (invisible to users) */}
      <input
        type="text"
        name="b_website_trap"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="mb-6">
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#E8A33D] font-medium block mb-1">
          Formulário
        </span>
        <h3 className="text-2xl font-serif text-[#F5F3EE] font-normal">
          Agendar diagnóstico
        </h3>
        <p className="text-xs text-[#5B6166] mt-1 font-normal">
          Preencha os dados da sua operação para iniciarmos a análise estratégica.
        </p>
      </div>

      <div className="space-y-4 mb-6">
        {/* Nome */}
        <div>
          <label className="text-[11px] font-mono text-[#5B6166] block mb-1">
            Nome completo *
          </label>
          <input
            type="text"
            placeholder="Seu nome"
            value={formData.name}
            className={`${inputClass} ${errors.name ? "!border-[#B5412F]" : ""}`}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            disabled={isSubmitting}
          />
          {errors.name && <p className="text-[11px] text-[#B5412F] mt-1">{errors.name}</p>}
        </div>

        {/* E-mail e WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="text-[11px] font-mono text-[#5B6166] block mb-1">
              E-mail profissional *
            </label>
            <input
              type="email"
              placeholder="seu@empresa.com.br"
              value={formData.email}
              className={`${inputClass} ${errors.email ? "!border-[#B5412F]" : ""}`}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-[11px] text-[#B5412F] mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="text-[11px] font-mono text-[#5B6166] block mb-1">
              WhatsApp *
            </label>
            <input
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.whatsapp}
              className={`${inputClass} ${errors.whatsapp ? "!border-[#B5412F]" : ""}`}
              onChange={(e) => {
                setFormData({ ...formData, whatsapp: e.target.value });
                if (errors.whatsapp) setErrors({ ...errors, whatsapp: undefined });
              }}
              disabled={isSubmitting}
            />
            {errors.whatsapp && <p className="text-[11px] text-[#B5412F] mt-1">{errors.whatsapp}</p>}
          </div>
        </div>

        {/* Faturamento Anual Aproximado */}
        <div>
          <label className="text-[11px] font-mono text-[#5B6166] block mb-1">
            Faturamento anual aproximado *
          </label>
          <div className="relative">
            <select
              className={`${inputClass} appearance-none ${!formData.revenue ? "!text-[#5B6166]" : ""} ${
                errors.revenue ? "!border-[#B5412F]" : ""
              }`}
              value={formData.revenue}
              onChange={(e) => {
                setFormData({ ...formData, revenue: e.target.value });
                if (errors.revenue) setErrors({ ...errors, revenue: undefined });
              }}
              disabled={isSubmitting}
            >
              <option value="" className="bg-[#14181B] text-[#5B6166]" disabled hidden>
                Selecione a faixa de faturamento
              </option>
              <option value="Até R$ 3 milhões" className="bg-[#14181B] text-[#F5F3EE]">
                Até R$ 3 milhões
              </option>
              <option value="De R$ 3 a R$ 10 milhões" className="bg-[#14181B] text-[#F5F3EE]">
                De R$ 3 a R$ 10 milhões
              </option>
              <option value="De R$ 10 a R$ 30 milhões" className="bg-[#14181B] text-[#F5F3EE]">
                De R$ 10 a R$ 30 milhões
              </option>
              <option value="Acima de R$ 30 milhões" className="bg-[#14181B] text-[#F5F3EE]">
                Acima de R$ 30 milhões
              </option>
            </select>
          </div>
          {errors.revenue && <p className="text-[11px] text-[#B5412F] mt-1">{errors.revenue}</p>}
        </div>

        {/* Consentimento LGPD Obrigatório */}
        <div className="pt-2">
          <label className="flex items-start gap-2.5 text-xs text-[#5B6166] cursor-pointer select-none">
            <input
              type="checkbox"
              checked={formData.lgpdConsent}
              onChange={(e) => {
                setFormData({ ...formData, lgpdConsent: e.target.checked });
                if (errors.lgpdConsent) setErrors({ ...errors, lgpdConsent: undefined });
              }}
              className="mt-0.5 rounded border-zinc-700 text-[#E8A33D] bg-[#14181B] focus:ring-0 accent-[#E8A33D]"
            />
            <span className="leading-tight">
              Concordo em ser contatado pela Mont Finance sobre o diagnóstico e em ter meus dados tratados para esse fim, conforme a LGPD. *
            </span>
          </label>
          {errors.lgpdConsent && <p className="text-[11px] text-[#B5412F] mt-1">{errors.lgpdConsent}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-xl bg-[#E8A33D] text-[#14181B] hover:bg-[#D4932D] text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-[0_4px_16px_rgba(232,163,61,0.25)] hover:shadow-[0_6px_22px_rgba(232,163,61,0.4)] hover:-translate-y-0.5 active:translate-y-0"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin text-[#14181B]" />
            <span>Processando...</span>
          </>
        ) : (
          <>
            <span>Agendar diagnóstico</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#14181B]" />
          </>
        )}
      </button>
    </form>
  );
}
