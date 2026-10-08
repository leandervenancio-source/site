import { useState, FormEvent } from "react";
import { supabase } from "../lib/supabase";
import { Loader2 } from "lucide-react";

export function DiagnosticForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    storeUrl: "",
    revenue: "",
    painPoint: "",
    lgpdConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.lgpdConsent) {
      alert("Por favor, confirme a concordância com o contato conforme a LGPD.");
      return;
    }

    setIsSubmitting(true);
    setSuccess(false);

    try {
      // 1. Salvar no Supabase (não bloqueante)
      try {
        const { error } = await supabase
          .from('leads')
          .insert([
            {
              name: formData.name,
              email: formData.email,
              whatsapp: formData.whatsapp,
              company: `${formData.company} [Loja: ${formData.storeUrl || 'Não informado'}]`,
              revenue: formData.revenue,
              employees: formData.painPoint || "E-commerce"
            }
          ]);
        if (error) {
          console.warn("Aviso ao salvar lead no Supabase:", error);
        }
      } catch (dbErr) {
        console.warn("Erro de banco:", dbErr);
      }
      
      // 2. Envio de E-mail via FormSubmit
      try {
        await fetch("https://formsubmit.co/ajax/leandervenancio@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: "🚀 Novo Diagnóstico Mont Finance: " + formData.name + " (" + formData.company + ")",
                Nome: formData.name,
                Email_Profissional: formData.email,
                WhatsApp: formData.whatsapp,
                Empresa: formData.company,
                Endereco_da_Loja_URL: formData.storeUrl,
                Faturamento_Anual: formData.revenue,
                Maior_Incomodo_Hoje: formData.painPoint,
                _template: "table"
            })
        });
      } catch (e) {
        console.error("Erro no envio do e-mail:", e);
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        company: "",
        storeUrl: "",
        revenue: "",
        painPoint: "",
        lgpdConsent: false
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Houve um erro ao enviar seus dados. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 bg-black/40 border border-white/[0.08] text-white placeholder:text-zinc-600 placeholder:text-xs focus:border-[#d4af37]/60 focus:outline-none transition-colors rounded-xl font-normal text-xs";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0E1118] border border-white/[0.08] p-6 sm:p-8 rounded-2xl shadow-xl"
    >
      <div className="mb-6">
        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
          Formulário
        </span>
        <h3 className="text-xl font-medium text-white">
          Agendar diagnóstico
        </h3>
        <p className="text-xs text-zinc-400 mt-1">
          Preencha os dados da sua operação para iniciarmos a análise.
        </p>
      </div>

      <div className="space-y-3 mb-6">
        <input 
          type="text" 
          placeholder="Nome" 
          value={formData.name} 
          className={inputClass} 
          required 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
          disabled={isSubmitting} 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input 
            type="email" 
            placeholder="E-mail profissional" 
            value={formData.email} 
            className={inputClass} 
            required 
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
            disabled={isSubmitting} 
          />
          <input 
            type="tel" 
            placeholder="WhatsApp" 
            value={formData.whatsapp} 
            className={inputClass} 
            required 
            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} 
            disabled={isSubmitting} 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input 
            type="text" 
            placeholder="Empresa" 
            value={formData.company} 
            className={inputClass} 
            required 
            onChange={(e) => setFormData({...formData, company: e.target.value})} 
            disabled={isSubmitting} 
          />
          <input 
            type="text" 
            placeholder="Endereço da loja (URL)" 
            value={formData.storeUrl} 
            className={inputClass} 
            required 
            onChange={(e) => setFormData({...formData, storeUrl: e.target.value})} 
            disabled={isSubmitting} 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <select 
            className={`${inputClass} appearance-none ${!formData.revenue ? '!text-zinc-600' : ''}`} 
            value={formData.revenue} 
            required 
            onChange={(e) => setFormData({...formData, revenue: e.target.value})} 
            disabled={isSubmitting}
          >
            <option value="" className="bg-[#090A0F] text-zinc-500" disabled hidden>Faturamento anual aproximado</option>
            <option value="Até R$ 3 milhões" className="bg-[#090A0F] text-white">Até R$ 3 milhões</option>
            <option value="De R$ 3 a R$ 10 milhões" className="bg-[#090A0F] text-white">De R$ 3 a R$ 10 milhões</option>
            <option value="De R$ 10 a R$ 30 milhões" className="bg-[#090A0F] text-white">De R$ 10 a R$ 30 milhões</option>
            <option value="Acima de R$ 30 milhões" className="bg-[#090A0F] text-white">Acima de R$ 30 milhões</option>
          </select>

          <select 
            className={`${inputClass} appearance-none ${!formData.painPoint ? '!text-zinc-600' : ''}`} 
            value={formData.painPoint} 
            required 
            onChange={(e) => setFormData({...formData, painPoint: e.target.value})} 
            disabled={isSubmitting}
          >
            <option value="" className="bg-[#090A0F] text-zinc-500" disabled hidden>Qual seu maior incômodo hoje?</option>
            <option value="Caixa não acompanha o faturamento" className="bg-[#090A0F] text-white">Caixa não acompanha o faturamento</option>
            <option value="Não sei a margem real" className="bg-[#090A0F] text-white">Não sei a margem real</option>
            <option value="Estoque parado" className="bg-[#090A0F] text-white">Estoque parado</option>
            <option value="Antecipação de recebíveis frequente" className="bg-[#090A0F] text-white">Antecipação de recebíveis frequente</option>
            <option value="Carga ou risco tributário" className="bg-[#090A0F] text-white">Carga ou risco tributário</option>
            <option value="Acesso a crédito" className="bg-[#090A0F] text-white">Acesso a crédito</option>
            <option value="Outro" className="bg-[#090A0F] text-white">Outro</option>
          </select>
        </div>

        <div className="pt-2">
          <label className="flex items-start gap-2.5 text-xs text-zinc-400 cursor-pointer select-none">
            <input 
              type="checkbox"
              required
              checked={formData.lgpdConsent}
              onChange={(e) => setFormData({...formData, lgpdConsent: e.target.checked})}
              className="mt-0.5 rounded border-zinc-700 text-white bg-black/40 focus:ring-0"
            />
            <span className="leading-tight">
              Concordo em ser contatado pela Mont Finance sobre o diagnóstico e em ter meus dados tratados para esse fim, conforme a LGPD.
            </span>
          </label>
        </div>
      </div>
      
      {success && (
        <div className="mb-4 p-3 bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 rounded-xl text-center text-xs">
          Solicitação recebida com sucesso! Entraremos em contato em breve.
        </div>
      )}

      <button 
        type="submit" 
        disabled={isSubmitting} 
        className="w-full py-3.5 rounded-xl bg-[#d4af37] text-black hover:bg-[#c5a059] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-[0_0_20px_rgba(212,175,55,0.25)]"
      >
        {isSubmitting && <Loader2 className="w-3.5 h-3.5 animate-spin text-black" />}
        {isSubmitting ? "Enviando..." : "Agendar diagnóstico"}
      </button>
    </form>
  );
}
