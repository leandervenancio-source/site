import { useState, FormEvent } from "react";
import { motion } from "motion/react";

export function DiagnosticForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    revenue: "",
    employees: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
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
        <input type="text" placeholder="Nome Completo" className={inputClass} required onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input type="text" placeholder="Nome da Empresa" className={inputClass} required onChange={(e) => setFormData({...formData, company: e.target.value})} />
        <input type="email" placeholder="E-mail" className={inputClass} required onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <input type="tel" placeholder="WhatsApp" className={inputClass} required onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} />
        <select className={`${inputClass} pr-8`} required onChange={(e) => setFormData({...formData, revenue: e.target.value})}>
          <option value="" className="bg-obsidian">Faturamento Anual</option>
          <option value="3-10" className="bg-obsidian">R$ 3M - R$ 10M</option>
          <option value="10-50" className="bg-obsidian">R$ 10M - R$ 50M</option>
          <option value="50+" className="bg-obsidian">Acima de R$ 50M</option>
        </select>
        <input type="number" placeholder="Nº de Funcionários" className={inputClass} required onChange={(e) => setFormData({...formData, employees: e.target.value})} />
      </div>
      
      <button type="submit" className="group relative w-full py-4 sm:py-6 text-[10px] sm:text-sm font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase text-obsidian bg-accent-premium rounded-full overflow-hidden transition-all duration-500 shadow-xl">
        <span className="relative z-10">Solicitar diagnóstico estratégico</span>
        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      </button>
    </motion.form>
  );
}
