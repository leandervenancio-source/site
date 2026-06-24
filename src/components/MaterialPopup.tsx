import { motion, AnimatePresence } from "motion/react";
import { X, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { supabase } from "../lib/supabase";

interface MaterialPopupProps {
  isOpen: boolean;
  onClose: () => void;
  materialTitle: string;
  materialLink: string;
}

export function MaterialPopup({ isOpen, onClose, materialTitle, materialLink }: MaterialPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Salvar no Supabase (na tabela leads, com a coluna material_solicitado)
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            whatsapp: formData.whatsapp,
            company: "N/A (Download de Material)",
            revenue: "N/A",
            employees: "N/A",
            material_solicitado: materialTitle
          }
        ]);

      if (error) throw error;

      // 2. Disparar e-mail de notificação para o Leandro
      try {
        await fetch("https://formsubmit.co/ajax/leandervenancio@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: "📚 Novo Lead (Material Baixado): " + formData.name,
                Nome: formData.name,
                WhatsApp: formData.whatsapp,
                Email: formData.email,
                Material_Solicitado: materialTitle,
                _template: "table"
            })
        });
      } catch (e) {
        console.error("Erro no envio do e-mail:", e);
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Erro ao solicitar material:", error);
      alert("Houve um erro ao enviar seus dados. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-obsidian border border-branco/10 p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-premium/10 rounded-full -mr-16 -mt-16 blur-3xl" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-branco/40 hover:text-accent-premium transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8 relative z-10">
                <div className="h-16 w-16 bg-accent-premium/10 text-accent-premium rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-light text-branco mb-4">Acesso Liberado!</h3>
                <p className="text-branco/60 font-light mb-8">
                  O material <strong>{materialTitle}</strong> já está disponível para você. Clique no botão abaixo para acessá-lo.
                </p>
                <a
                  href={materialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-4 text-center bg-accent-premium text-obsidian font-bold text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors rounded-full mb-4 shadow-lg shadow-accent-premium/10"
                >
                  Baixar Arquivo Agora
                </a>
                <button
                  onClick={onClose}
                  className="w-full py-4 bg-transparent border border-branco/20 text-branco font-bold text-xs tracking-[0.2em] uppercase hover:bg-branco/5 transition-colors rounded-full"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <div className="relative z-10">
                <span className="text-accent-premium font-sans text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">
                  Download Gratuito
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-light text-branco mb-6 leading-tight">
                  Acesse o material: <br />
                  <span className="italic text-accent-premium font-medium">{materialTitle}</span>
                </h3>
                <p className="text-branco/60 text-sm font-light mb-8">
                  Preencha os campos abaixo para receber o acesso exclusivo ao nosso acervo estratégico e liberar o download na hora.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-branco/40 uppercase tracking-widest mb-2">Nome</label>
                    <input
                      required
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-branco/5 border border-branco/10 text-branco placeholder-branco/20 focus:outline-none focus:border-accent-premium text-sm font-light transition-colors rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-branco/40 uppercase tracking-widest mb-2">E-mail</label>
                    <input
                      required
                      type="email"
                      placeholder="E-mail corporativo"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-branco/5 border border-branco/10 text-branco placeholder-branco/20 focus:outline-none focus:border-accent-premium text-sm font-light transition-colors rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-branco/40 uppercase tracking-widest mb-2">WhatsApp</label>
                    <input
                      required
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-branco/5 border border-branco/10 text-branco placeholder-branco/20 focus:outline-none focus:border-accent-premium text-sm font-light transition-colors rounded-xl"
                    />
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full flex items-center justify-center py-4 bg-accent-premium text-obsidian font-bold text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors shadow-lg shadow-accent-premium/10 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                      {isSubmitting ? "Processando..." : "Receber material"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
