import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { supabase } from "../lib/supabase";
import { Loader2 } from "lucide-react";

export function DiagnosticForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
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
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            whatsapp: formData.whatsapp,
            company: formData.company,
            revenue: formData.revenue,
            employees: formData.employees
          }
        ]);

      if (error) throw error;
      
      try {
        // Envio de E-mail gratuito via FormSubmit
        await fetch("https://formsubmit.co/ajax/leandervenancio@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: "🚀 Novo Lead: " + formData.name + " (" + formData.company + ")",
                Nome: formData.name,
                Empresa: formData.company,
                WhatsApp: formData.whatsapp,
                Email: formData.email,
                Faturamento: formData.revenue,
                Funcionarios: formData.employees,
                _template: "table" // Deixa o e-mail formatado como uma tabela bonita
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

  const inputClass = "w-full px-5 lg:px-6 py-3.5 bg-obsidian/40 border border-white/10 text-branco placeholder:text-white/40 placeholder:text-sm focus:bg-obsidian/60 focus:border-accent-premium focus:ring-1 focus:ring-accent-premium/50 outline-none transition-all duration-300 rounded-xl font-light text-base shadow-inner";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-5 sm:p-8 md:p-10 border border-white/20 border-b-white/5 border-r-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-[2rem] sm:rounded-[2.5rem] relative"
    >
      <div className="space-y-3 mb-6 sm:mb-8 relative z-10">
        <input type="text" placeholder="Nome Completo" value={formData.name} className={inputClass} required onChange={(e) => setFormData({...formData, name: e.target.value})} disabled={isSubmitting} />
        <input type="text" placeholder="Nome da Empresa" value={formData.company} className={inputClass} required onChange={(e) => setFormData({...formData, company: e.target.value})} disabled={isSubmitting} />
        <input type="email" placeholder="E-mail Corporativo" value={formData.email} className={inputClass} required onChange={(e) => setFormData({...formData, email: e.target.value})} disabled={isSubmitting} />
        <input type="tel" placeholder="WhatsApp" value={formData.whatsapp} className={inputClass} required onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} disabled={isSubmitting} />
        <select className={`${inputClass} pr-8 appearance-none ${!formData.revenue ? '!text-white/40 !text-sm' : ''}`} value={formData.revenue} required onChange={(e) => setFormData({...formData, revenue: e.target.value})} disabled={isSubmitting}>
          <option value="" className="bg-obsidian text-white/50" disabled hidden>Faturamento Mensal</option>
          <option value="Até 100 mil" className="bg-obsidian text-branco">Até R$ 100 mil</option>
          <option value="100 a 300 mil" className="bg-obsidian text-branco">R$ 100 mil a R$ 300 mil</option>
          <option value="300 mil a 1 milhão" className="bg-obsidian text-branco">R$ 300 mil a R$ 1 milhão</option>
          <option value="Acima de 1 milhão" className="bg-obsidian text-branco">Acima de R$ 1 milhão</option>
        </select>
        <input type="number" placeholder="Nº de Funcionários" value={formData.employees} className={inputClass} required onChange={(e) => setFormData({...formData, employees: e.target.value})} disabled={isSubmitting} />
      </div>
      
      {success && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-center text-sm font-medium relative z-10">
          Solicitação enviada com sucesso! Nossa equipe entrará em contato.
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className="relative z-10 group flex justify-center items-center w-full py-4 sm:py-5 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium rounded-full overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(43,108,255,0.3)] hover:shadow-[0_0_50px_rgba(43,108,255,0.6)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_30px_rgba(43,108,255,0.3)]">
        <span className="relative z-10 flex items-center gap-2">
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          {isSubmitting ? "Enviando..." : "Solicitar Diagnóstico Estratégico"}
        </span>
        {!isSubmitting && <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>}
      </button>
    </motion.form>
  );
}
