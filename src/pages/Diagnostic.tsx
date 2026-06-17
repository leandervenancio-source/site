import { motion } from "motion/react";
import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { Loader2 } from "lucide-react";

export function Diagnostic() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    revenue: "",
    employees: "",
    challenge: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        await fetch("https://formsubmit.co/ajax/leandervenancio@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: "🚀 Novo Lead (Aplicação): " + formData.name + " (" + formData.company + ")",
                Nome: formData.name,
                Empresa: formData.company,
                WhatsApp: formData.whatsapp,
                Email: formData.email,
                Faturamento: formData.revenue,
                Funcionarios: formData.employees,
                Desafio: formData.challenge,
                _template: "table"
            })
        });
      } catch (e) {
        console.error("Erro no envio do e-mail:", e);
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Houve um erro ao enviar seus dados. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-branco min-h-screen pt-40 pb-32 lg:pt-56 lg:pb-48 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_0%,_#d4af37_0%,_transparent_60%)]"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent-premium font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-6 block">
            Aplicação
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-azul-noite mb-8 leading-tight">
            Aplicação para <span className="italic text-accent-premium font-medium">Advisory</span>
          </h1>
          <p className="text-lg md:text-xl text-azul-estrategico leading-relaxed font-light max-w-2xl mx-auto">
            O Advisory Estratégico é exclusivo para empresas que faturam acima de R$ 3M/ano. Preencha os dados abaixo para avaliarmos se o seu momento atual está alinhado com a nossa tese de atuação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-azul-noite p-8 md:p-16 border border-branco/10 shadow-2xl shadow-azul-noite/20"
        >
          {isSubmitted ? (
            <div className="text-center py-20">
              <div className="h-20 w-20 bg-accent-premium/10 text-accent-premium rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-display font-light text-branco mb-4">Aplicação Recebida</h2>
              <p className="text-lg text-branco/70 font-light max-w-lg mx-auto">
                Obrigado pelo interesse. Nossa equipe analisará suas informações e entrará em contato em até 48 horas para agendar a sessão de diagnóstico.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-branco/60 mb-3 uppercase tracking-[0.1em]">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 border border-branco/10 focus:border-accent-premium outline-none transition-all bg-branco/5 text-branco font-light placeholder-branco/20 rounded-xl text-base"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-branco/60 mb-3 uppercase tracking-[0.1em]">Nome da Empresa</label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 border border-branco/10 focus:border-accent-premium outline-none transition-all bg-branco/5 text-branco font-light placeholder-branco/20 rounded-xl text-base"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-branco/60 mb-3 uppercase tracking-[0.1em]">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 border border-branco/10 focus:border-accent-premium outline-none transition-all bg-branco/5 text-branco font-light placeholder-branco/20 rounded-xl text-base"
                    placeholder="E-mail"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-xs font-bold text-branco/60 mb-3 uppercase tracking-[0.1em]">WhatsApp</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 border border-branco/10 focus:border-accent-premium outline-none transition-all bg-branco/5 text-branco font-light placeholder-branco/20 rounded-xl text-base"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="revenue" className="block text-xs font-bold text-branco/60 mb-3 uppercase tracking-[0.1em]">Faturamento Mensal</label>
                  <select
                    id="revenue"
                    required
                    value={formData.revenue}
                    onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 border border-branco/10 focus:border-accent-premium outline-none transition-all bg-branco/5 text-branco font-light appearance-none rounded-xl text-base"
                  >
                    <option value="" className="bg-azul-noite">Selecione uma faixa</option>
                    <option value="Até 100 mil" className="bg-azul-noite">Até R$ 100 mil</option>
                    <option value="100 a 300 mil" className="bg-azul-noite">R$ 100 mil a R$ 300 mil</option>
                    <option value="300 mil a 1 milhão" className="bg-azul-noite">R$ 300 mil a R$ 1 milhão</option>
                    <option value="Acima de 1 milhão" className="bg-azul-noite">Acima de R$ 1 milhão</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="employees" className="block text-xs font-bold text-branco/60 mb-3 uppercase tracking-[0.1em]">Número de Funcionários</label>
                  <input
                    type="number"
                    id="employees"
                    required
                    min="1"
                    value={formData.employees}
                    onChange={(e) => setFormData({...formData, employees: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 border border-branco/10 focus:border-accent-premium outline-none transition-all bg-branco/5 text-branco font-light appearance-none rounded-xl text-base"
                    placeholder="Nº de funcionários"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="challenge" className="block text-xs font-bold text-branco/60 mb-3 uppercase tracking-[0.1em]">
                  Qual é o principal desafio da empresa hoje?
                </label>
                <textarea
                  id="challenge"
                  rows={4}
                  required
                  value={formData.challenge}
                  onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                  disabled={isSubmitting}
                  className="w-full px-4 py-4 border border-branco/10 focus:border-accent-premium outline-none transition-all bg-branco/5 resize-none text-branco font-light placeholder-branco/20 rounded-2xl text-base"
                  placeholder="Descreva brevemente o que está travando o crescimento ou a lucratividade da sua operação..."
                ></textarea>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group w-full flex justify-center items-center py-5 px-8 text-sm font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium transition-all duration-500 rounded-full overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_50px_rgba(43,108,255,0.6)] hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                    {isSubmitting ? "Enviando..." : "Enviar aplicação"}
                  </span>
                  {!isSubmitting && <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>}
                </button>
                <p className="text-xs text-branco/40 font-light text-center mt-6">
                  Suas informações são estritamente confidenciais e serão utilizadas apenas para a avaliação de fit estrutural da sua empresa.
                </p>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  );
}
