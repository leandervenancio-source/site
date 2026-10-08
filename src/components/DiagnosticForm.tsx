import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { supabase } from "../lib/supabase";
import { Loader2, ArrowRight } from "lucide-react";

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

  const inputClass = "w-full px-5 py-3.5 bg-obsidian/60 border border-white/10 text-branco placeholder:text-white/40 placeholder:text-sm focus:border-accent-premium focus:ring-1 focus:ring-accent-premium/40 outline-none transition-all duration-300 rounded-xl font-light text-sm shadow-inner";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-[2rem] relative"
    >
      <div className="mb-6">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-accent-premium block mb-2">
          Mont Finance · Diagnóstico
        </span>
        <h3 className="text-xl sm:text-2xl font-display font-light text-branco">
          Comece entendendo para onde <span className="font-serif italic text-accent-premium">vai o dinheiro</span>
        </h3>
        <p className="text-xs text-branco/60 font-light mt-1">
          Uma conversa estratégica com um especialista da Mont Finance sobre a situação do seu e-commerce.
        </p>
      </div>

      <div className="space-y-3.5 mb-6 relative z-10">
        <input 
          type="text" 
          placeholder="Seu Nome Completo" 
          value={formData.name} 
          className={inputClass} 
          required 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
          disabled={isSubmitting} 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <input 
            type="email" 
            placeholder="E-mail Profissional" 
            value={formData.email} 
            className={inputClass} 
            required 
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
            disabled={isSubmitting} 
          />
          <input 
            type="tel" 
            placeholder="WhatsApp com DDD" 
            value={formData.whatsapp} 
            className={inputClass} 
            required 
            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} 
            disabled={isSubmitting} 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <input 
            type="text" 
            placeholder="Nome da Empresa" 
            value={formData.company} 
            className={inputClass} 
            required 
            onChange={(e) => setFormData({...formData, company: e.target.value})} 
            disabled={isSubmitting} 
          />
          <input 
            type="text" 
            placeholder="Endereço da Loja (URL / Site)" 
            value={formData.storeUrl} 
            className={inputClass} 
            required 
            onChange={(e) => setFormData({...formData, storeUrl: e.target.value})} 
            disabled={isSubmitting} 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <select 
            className={`${inputClass} pr-8 appearance-none ${!formData.revenue ? '!text-white/40' : ''}`} 
            value={formData.revenue} 
            required 
            onChange={(e) => setFormData({...formData, revenue: e.target.value})} 
            disabled={isSubmitting}
          >
            <option value="" className="bg-obsidian text-white/40" disabled hidden>Faturamento Anual Aproximado</option>
            <option value="Até R$ 3 milhões" className="bg-obsidian text-branco">Até R$ 3 milhões</option>
            <option value="De R$ 3 a R$ 10 milhões" className="bg-obsidian text-branco">De R$ 3 a R$ 10 milhões</option>
            <option value="De R$ 10 a R$ 30 milhões" className="bg-obsidian text-branco">De R$ 10 a R$ 30 milhões</option>
            <option value="Acima de R$ 30 milhões" className="bg-obsidian text-branco">Acima de R$ 30 milhões</option>
          </select>

          <select 
            className={`${inputClass} pr-8 appearance-none ${!formData.painPoint ? '!text-white/40' : ''}`} 
            value={formData.painPoint} 
            required 
            onChange={(e) => setFormData({...formData, painPoint: e.target.value})} 
            disabled={isSubmitting}
          >
            <option value="" className="bg-obsidian text-white/40" disabled hidden>Qual seu maior incômodo hoje?</option>
            <option value="Caixa não acompanha o faturamento" className="bg-obsidian text-branco">Caixa não acompanha o faturamento</option>
            <option value="Não sei a margem real" className="bg-obsidian text-branco">Não sei a margem real</option>
            <option value="Estoque parado" className="bg-obsidian text-branco">Estoque parado</option>
            <option value="Antecipação de recebíveis frequente" className="bg-obsidian text-branco">Antecipação de recebíveis frequente</option>
            <option value="Carga ou risco tributário" className="bg-obsidian text-branco">Carga ou risco tributário</option>
            <option value="Acesso a crédito" className="bg-obsidian text-branco">Acesso a crédito</option>
            <option value="Outro" className="bg-obsidian text-branco">Outro</option>
          </select>
        </div>

        <div className="pt-2">
          <label className="flex items-start gap-3 text-xs text-white/70 cursor-pointer select-none">
            <input 
              type="checkbox"
              required
              checked={formData.lgpdConsent}
              onChange={(e) => setFormData({...formData, lgpdConsent: e.target.checked})}
              className="mt-0.5 rounded border-white/20 text-accent-premium focus:ring-accent-premium/40 bg-obsidian/60"
            />
            <span>
              Concordo em ser contatado pela Mont Finance sobre o diagnóstico e em ter meus dados tratados para esse fim, conforme a LGPD.
            </span>
          </label>
        </div>
      </div>
      
      {success && (
        <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-center text-xs font-medium">
          Solicitação recebida com sucesso! Um especialista da Mont Finance entrará em contato para agendar o seu diagnóstico.
        </div>
      )}

      <button 
        type="submit" 
        disabled={isSubmitting} 
        className="w-full py-4 text-xs font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium hover:bg-white transition-all duration-300 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-accent-premium/20 disabled:opacity-50"
      >
        {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
        {isSubmitting ? "Enviando Dados..." : "Agendar Diagnóstico"}
      </button>

      <p className="text-[11px] text-white/40 text-center mt-3">
        Os resultados variam conforme o caso de cada empresa. Nenhum resultado é garantido.
      </p>
    </motion.form>
  );
}
