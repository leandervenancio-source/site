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
    segment: "",
    revenue: "",
    employees: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
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
              company: `${formData.company} [${formData.segment || 'Geral'}]`,
              revenue: formData.revenue,
              employees: formData.employees || "0"
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
                _subject: "🚀 Novo Lead (Diagnóstico Estratégico): " + formData.name + " (" + formData.company + ")",
                Nome: formData.name,
                Empresa: formData.company,
                Segmento: formData.segment,
                WhatsApp: formData.whatsapp,
                Email: formData.email,
                Faturamento_Anual: formData.revenue,
                Funcionarios: formData.employees,
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
        segment: "",
        revenue: "",
        employees: "",
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
          Análise Preliminar
        </span>
        <h3 className="text-xl sm:text-2xl font-display font-light text-branco">
          Solicitar Diagnóstico <span className="font-serif italic text-accent-premium">Estratégico</span>
        </h3>
        <p className="text-xs text-branco/60 font-light mt-1">
          Foco em Indústrias e Distribuidoras que faturam acima de R$ 3 milhões/ano.
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
            type="text" 
            placeholder="Nome da Empresa" 
            value={formData.company} 
            className={inputClass} 
            required 
            onChange={(e) => setFormData({...formData, company: e.target.value})} 
            disabled={isSubmitting} 
          />
          <select 
            className={`${inputClass} pr-8 appearance-none ${!formData.segment ? '!text-white/40' : ''}`} 
            value={formData.segment} 
            required 
            onChange={(e) => setFormData({...formData, segment: e.target.value})} 
            disabled={isSubmitting}
          >
            <option value="" className="bg-obsidian text-white/40" disabled hidden>Segmento de Atuação</option>
            <option value="Indústria" className="bg-obsidian text-branco">Indústria</option>
            <option value="Distribuidora" className="bg-obsidian text-branco">Distribuidora</option>
            <option value="Varejo Físico / Comércio" className="bg-obsidian text-branco">Varejo Físico / Comércio</option>
            <option value="Serviços / Outro" className="bg-obsidian text-branco">Serviços / Outro</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <input 
            type="email" 
            placeholder="E-mail Corporativo" 
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
          <select 
            className={`${inputClass} pr-8 appearance-none ${!formData.revenue ? '!text-white/40' : ''}`} 
            value={formData.revenue} 
            required 
            onChange={(e) => setFormData({...formData, revenue: e.target.value})} 
            disabled={isSubmitting}
          >
            <option value="" className="bg-obsidian text-white/40" disabled hidden>Faturamento Anual</option>
            <option value="Abaixo de R$ 3 milhões / ano" className="bg-obsidian text-branco">Até R$ 3 milhões / ano</option>
            <option value="R$ 3M a R$ 10M / ano" className="bg-obsidian text-branco">R$ 3M a R$ 10M / ano</option>
            <option value="R$ 10M a R$ 30M / ano" className="bg-obsidian text-branco">R$ 10M a R$ 30M / ano</option>
            <option value="Acima de R$ 30M / ano" className="bg-obsidian text-branco">Acima de R$ 30 milhões / ano</option>
          </select>
          <input 
            type="number" 
            min="1" 
            placeholder="Nº de Colaboradores" 
            value={formData.employees} 
            className={inputClass} 
            required 
            onChange={(e) => setFormData({...formData, employees: e.target.value})} 
            disabled={isSubmitting} 
          />
        </div>
      </div>
      
      {success && (
        <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-center text-xs font-medium">
          Solicitação recebida com sucesso! Nosso advisor entrará em contato para agendar a sessão.
        </div>
      )}

      <button 
        type="submit" 
        disabled={isSubmitting} 
        className="w-full py-4 text-xs font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium hover:bg-white transition-all duration-300 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-accent-premium/20 disabled:opacity-50"
      >
        {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
        {isSubmitting ? "Enviando Dados..." : "Solicitar Sessão Estratégica"}
      </button>
    </motion.form>
  );
}
