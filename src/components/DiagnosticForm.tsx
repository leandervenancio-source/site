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

  const inputClass = "w-full px-3 py-4 bg-white/5 border border-white/10 text-branco placeholder:text-white/20 placeholder:text-[11px] focus:border-accent-premium outline-none transition-all duration-500 rounded-2xl font-light text-sm";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="bg-white/5 backdrop-blur-xl p-4 sm:p-6 md:p-10 border border-white/10 shadow-2xl rounded-[2rem] sm:rounded-[3rem]"
    >
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        <input type="text" placeholder="Nome Completo" value={formData.name} className={inputClass} required onChange={(e) => setFormData({...formData, name: e.target.value})} disabled={isSubmitting} />
        <input type="text" placeholder="Nome da Empresa" value={formData.company} className={inputClass} required onChange={(e) => setFormData({...formData, company: e.target.value})} disabled={isSubmitting} />
        <input type="email" placeholder="E-mail" value={formData.email} className={inputClass} required onChange={(e) => setFormData({...formData, email: e.target.value})} disabled={isSubmitting} />
        <input type="tel" placeholder="WhatsApp" value={formData.whatsapp} className={inputClass} required onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} disabled={isSubmitting} />
        <select className={`${inputClass} pr-8`} value={formData.revenue} required onChange={(e) => setFormData({...formData, revenue: e.target.value})} disabled={isSubmitting}>
          <option value="" className="bg-obsidian">Faturamento Anual</option>
          <option value="3-10" className="bg-obsidian">R$ 3M - R$ 10M</option>
          <option value="10-50" className="bg-obsidian">R$ 10M - R$ 50M</option>
          <option value="50+" className="bg-obsidian">Acima de R$ 50M</option>
        </select>
        <input type="number" placeholder="Nº de Funcionários" value={formData.employees} className={inputClass} required onChange={(e) => setFormData({...formData, employees: e.target.value})} disabled={isSubmitting} />
      </div>
      
      {success && (
        <div className="mb-4 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl text-center text-sm">
          Solicitação enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className="group relative flex justify-center items-center w-full py-4 sm:py-6 text-[10px] sm:text-sm font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase text-obsidian bg-accent-premium rounded-full overflow-hidden transition-all duration-500 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
        <span className="relative z-10 flex items-center gap-2">
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          {isSubmitting ? "Enviando..." : "Solicitar diagnóstico estratégico"}
        </span>
        {!isSubmitting && <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>}
      </button>
    </motion.form>
  );
}
