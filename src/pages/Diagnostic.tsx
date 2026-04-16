import { motion } from "motion/react";
import React, { useState } from "react";

export function Diagnostic() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend or CRM
    setIsSubmitted(true);
  };

  return (
    <div className="bg-branco min-h-screen pt-40 pb-32 lg:pt-56 lg:pb-48 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_0%,_#2563EB_0%,_transparent_60%)]"></div>
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
                    className="w-full px-4 py-4 border border-branco/10 focus:border-accent-premium outline-none transition-all bg-branco/5 text-branco font-light placeholder-branco/20 rounded-xl text-base"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="revenue" className="block text-xs font-bold text-branco/60 mb-3 uppercase tracking-[0.1em]">Faturamento Anual</label>
                  <select
                    id="revenue"
                    required
                    className="w-full px-4 py-4 border border-branco/10 focus:border-accent-premium outline-none transition-all bg-branco/5 text-branco font-light appearance-none rounded-xl text-base"
                  >
                    <option value="" className="bg-azul-noite">Selecione uma faixa</option>
                    <option value="<3M" className="bg-azul-noite">Menos de R$ 3 Milhões</option>
                    <option value="3M-10M" className="bg-azul-noite">R$ 3M a R$ 10 Milhões</option>
                    <option value="10M-50M" className="bg-azul-noite">R$ 10M a R$ 50 Milhões</option>
                    <option value="50M-100M" className="bg-azul-noite">R$ 50M a R$ 100 Milhões</option>
                    <option value=">100M" className="bg-azul-noite">Mais de R$ 100 Milhões</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="employees" className="block text-xs font-bold text-branco/60 mb-3 uppercase tracking-[0.1em]">Número de Funcionários</label>
                  <select
                    id="employees"
                    required
                    className="w-full px-4 py-4 border border-branco/10 focus:border-accent-premium outline-none transition-all bg-branco/5 text-branco font-light appearance-none rounded-xl text-base"
                  >
                    <option value="" className="bg-azul-noite">Selecione uma faixa</option>
                    <option value="1-10" className="bg-azul-noite">1 a 10</option>
                    <option value="11-50" className="bg-azul-noite">11 a 50</option>
                    <option value="51-200" className="bg-azul-noite">51 a 200</option>
                    <option value="201-500" className="bg-azul-noite">201 a 500</option>
                    <option value=">500" className="bg-azul-noite">Mais de 500</option>
                  </select>
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
                  className="w-full px-4 py-4 border border-branco/10 focus:border-accent-premium outline-none transition-all bg-branco/5 resize-none text-branco font-light placeholder-branco/20 rounded-2xl text-base"
                  placeholder="Descreva brevemente o que está travando o crescimento ou a lucratividade da sua operação..."
                ></textarea>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full flex justify-center py-5 px-8 text-sm font-bold tracking-[0.2em] uppercase text-obsidian bg-accent-premium hover:bg-white transition-all duration-300 rounded-full"
                >
                  Enviar aplicação
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
