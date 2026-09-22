import { motion } from "motion/react";
import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { Loader2, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export function Diagnostic() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    segment: "",
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
        if (error) console.warn("Aviso Supabase:", error);
      } catch (err) {
        console.warn("Erro de banco:", err);
      }

      try {
        await fetch("https://formsubmit.co/ajax/leandervenancio@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: "🚀 Novo Lead (Aplicação Diagnóstico): " + formData.name + " (" + formData.company + ")",
                Nome: formData.name,
                Empresa: formData.company,
                Segmento: formData.segment,
                WhatsApp: formData.whatsapp,
                Email: formData.email,
                Faturamento_Anual: formData.revenue,
                Funcionarios: formData.employees,
                Desafio_Principal: formData.challenge,
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
    <div className="bg-obsidian text-branco min-h-screen pt-36 pb-32 relative overflow-hidden font-sans">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_0%,_#d4af37_0%,_transparent_60%)]"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent-premium/10 border border-accent-premium/20 text-accent-premium text-[11px] font-bold tracking-[0.25em] uppercase mb-6">
            Aplicação Executiva
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-light text-branco mb-6 leading-tight">
            Diagnóstico <span className="italic text-accent-premium font-serif">Estratégico</span>
          </h1>
          <p className="text-base sm:text-lg text-branco/70 leading-relaxed font-light max-w-2xl mx-auto">
            Avaliação aprofundada de alavancas de lucro, gestão de capital de giro e capacidade de crédito bancário estruturado para <span className="text-branco font-normal">Indústrias e Distribuidoras que faturam acima de R$ 3 milhões/ano</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/[0.03] p-8 md:p-14 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] rounded-3xl"
        >
          {isSubmitted ? (
            <div className="text-center py-16">
              <div className="h-16 w-16 bg-accent-premium/10 text-accent-premium rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-display font-light text-branco mb-4">Aplicação Enviada com Sucesso</h2>
              <p className="text-base text-branco/70 font-light max-w-lg mx-auto leading-relaxed">
                Nossa equipe sênior analisará os dados operacionais da sua empresa e entrará em contato em até 24 horas úteis para agendar a sessão diagnóstica.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-branco/70 mb-2 uppercase tracking-widest">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 border border-white/10 focus:border-accent-premium outline-none transition-all bg-obsidian text-branco font-light rounded-xl text-sm"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-branco/70 mb-2 uppercase tracking-widest">Nome da Empresa</label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 border border-white/10 focus:border-accent-premium outline-none transition-all bg-obsidian text-branco font-light rounded-xl text-sm"
                    placeholder="Razão social ou nome fantasia"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-branco/70 mb-2 uppercase tracking-widest">E-mail Corporativo</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 border border-white/10 focus:border-accent-premium outline-none transition-all bg-obsidian text-branco font-light rounded-xl text-sm"
                    placeholder="seuemail@empresa.com.br"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-xs font-bold text-branco/70 mb-2 uppercase tracking-widest">WhatsApp</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 border border-white/10 focus:border-accent-premium outline-none transition-all bg-obsidian text-branco font-light rounded-xl text-sm"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="segment" className="block text-xs font-bold text-branco/70 mb-2 uppercase tracking-widest">Segmento</label>
                  <select
                    id="segment"
                    required
                    value={formData.segment}
                    onChange={(e) => setFormData({...formData, segment: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 border border-white/10 focus:border-accent-premium outline-none transition-all bg-obsidian text-branco font-light rounded-xl text-sm"
                  >
                    <option value="" disabled hidden>Selecione</option>
                    <option value="Indústria">Indústria</option>
                    <option value="Distribuidora">Distribuidora</option>
                    <option value="Varejo Físico / Comércio">Varejo / Comércio</option>
                    <option value="Serviços / Outro">Serviços / Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="revenue" className="block text-xs font-bold text-branco/70 mb-2 uppercase tracking-widest">Faturamento Anual</label>
                  <select
                    id="revenue"
                    required
                    value={formData.revenue}
                    onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 border border-white/10 focus:border-accent-premium outline-none transition-all bg-obsidian text-branco font-light rounded-xl text-sm"
                  >
                    <option value="" disabled hidden>Selecione a faixa</option>
                    <option value="Até R$ 3 milhões / ano">Até R$ 3 milhões / ano</option>
                    <option value="R$ 3M a R$ 10M / ano">R$ 3M a R$ 10M / ano</option>
                    <option value="R$ 10M a R$ 30M / ano">R$ 10M a R$ 30M / ano</option>
                    <option value="Acima de R$ 30M / ano">Acima de R$ 30 milhões / ano</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="employees" className="block text-xs font-bold text-branco/70 mb-2 uppercase tracking-widest">Colaboradores</label>
                  <input
                    type="number"
                    id="employees"
                    required
                    min="1"
                    value={formData.employees}
                    onChange={(e) => setFormData({...formData, employees: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 border border-white/10 focus:border-accent-premium outline-none transition-all bg-obsidian text-branco font-light rounded-xl text-sm"
                    placeholder="Ex: 25"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="challenge" className="block text-xs font-bold text-branco/70 mb-2 uppercase tracking-widest">
                  Principal desafio financeiro ou operacional atual
                </label>
                <textarea
                  id="challenge"
                  rows={4}
                  required
                  value={formData.challenge}
                  onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3.5 border border-white/10 focus:border-accent-premium outline-none transition-all bg-obsidian text-branco font-light rounded-2xl text-sm resize-none"
                  placeholder="Ex: necessidade de alongar capital de giro, margem espremida em matérias-primas, falta de previsibilidade de fluxo de caixa..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 text-xs font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium hover:bg-white transition-all duration-300 rounded-full flex items-center justify-center gap-2 shadow-xl shadow-accent-premium/20 disabled:opacity-50"
                >
                  {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  {isSubmitting ? "Enviando Aplicação..." : "Submeter Aplicação para Diagnóstico"}
                </button>
                <p className="text-[11px] text-branco/40 font-light text-center mt-4">
                  Seus dados são confidenciais e protegidos sob sigilo comercial.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
