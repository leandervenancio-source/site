import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import React, { useState } from "react";

interface MaterialPopupProps {
  isOpen: boolean;
  onClose: () => void;
  materialTitle: string;
}

export function MaterialPopup({ isOpen, onClose, materialTitle }: MaterialPopupProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate lead capture
    setIsSubmitted(true);
    // In a real app, you'd trigger the actual download here or send a link via email
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
              className="absolute top-4 right-4 text-branco/40 hover:text-accent-premium transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="h-16 w-16 bg-accent-premium/10 text-accent-premium rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-light text-branco mb-4">Acesso Liberado</h3>
                <p className="text-branco/60 font-light mb-8">
                  O link para o material <strong>{materialTitle}</strong> foi enviado para o seu e-mail e WhatsApp.
                </p>
                <button
                  onClick={onClose}
                  className="w-full py-4 bg-accent-premium text-obsidian font-bold text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors rounded-full"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <>
                <span className="text-accent-premium font-sans text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">
                  Download Gratuito
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-light text-branco mb-6 leading-tight">
                  Acesse o material: <br />
                  <span className="italic text-accent-premium font-medium">{materialTitle}</span>
                </h3>
                <p className="text-branco/60 text-sm font-light mb-8">
                  Preencha os campos abaixo para receber o acesso exclusivo ao nosso acervo estratégico.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-branco/40 uppercase tracking-widest mb-2">Nome</label>
                    <input
                      required
                      type="text"
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 bg-branco/5 border border-branco/10 text-branco placeholder-branco/20 focus:outline-none focus:border-accent-premium text-sm font-light transition-colors rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-branco/40 uppercase tracking-widest mb-2">E-mail</label>
                    <input
                      required
                      type="email"
                      placeholder="E-mail"
                      className="w-full px-4 py-3 bg-branco/5 border border-branco/10 text-branco placeholder-branco/20 focus:outline-none focus:border-accent-premium text-sm font-light transition-colors rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-branco/40 uppercase tracking-widest mb-2">WhatsApp</label>
                    <input
                      required
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 bg-branco/5 border border-branco/10 text-branco placeholder-branco/20 focus:outline-none focus:border-accent-premium text-sm font-light transition-colors rounded-xl"
                    />
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 bg-accent-premium text-obsidian font-bold text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors shadow-lg shadow-accent-premium/10 rounded-full"
                    >
                      Receber material
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
