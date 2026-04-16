import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { MaterialPopup } from "../components/MaterialPopup";

const materials = [
  {
    id: 1,
    title: "Planilha de Precificação e Margem",
    category: "Finanças",
    type: "Planilha",
    excerpt: "Descubra a margem de contribuição real dos seus produtos e serviços. Uma ferramenta essencial para parar de queimar caixa e focar no que dá lucro.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2036&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Template de OKRs para Diretoria",
    category: "Estratégia",
    type: "Template",
    excerpt: "O mesmo modelo que utilizo com meus clientes de Advisory para desdobrar a estratégia em metas claras e executáveis para toda a liderança.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Checklist de Auditoria Operacional",
    category: "Operações",
    type: "Checklist",
    excerpt: "Mapeie os gargalos da sua operação em 30 minutos. Um checklist prático para identificar onde sua empresa está perdendo eficiência.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "O Guia do Crescimento Sustentável",
    category: "Gestão",
    type: "E-book",
    excerpt: "Por que empresas que crescem rápido quebram mais rápido ainda? Entenda os 4 pilares do Método MGI para escalar com segurança.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  }
];

export function Materials() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState("");

  const handleDownloadClick = (title: string) => {
    setSelectedMaterial(title);
    setIsPopupOpen(true);
  };

  return (
    <div className="bg-branco">
      <MaterialPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        materialTitle={selectedMaterial} 
      />
      {/* Header - MGI Style */}
      <section className="bg-obsidian text-branco pt-40 pb-32 lg:pt-56 lg:pb-48 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_#2563EB_0%,_transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-accent-premium font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-8 block">
              Acervo Estratégico
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light leading-[1.1] mb-8 text-branco">
              Inteligência aplicada para <span className="italic text-accent-premium font-medium">estruturar a sua operação.</span>
            </h1>
            <p className="text-lg md:text-xl text-branco/70 font-sans font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              Ferramentas, planilhas e frameworks práticos utilizados em nossos projetos de Advisory para acelerar a profissionalização da sua empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Materials Grid - MGI Style */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {materials.map((material, idx) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                onClick={() => handleDownloadClick(material.title)}
                className="group cursor-pointer bg-branco border border-obsidian/10 hover:border-accent-premium transition-all duration-500 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-xl"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 bg-azul-noite/90 backdrop-blur-sm text-branco text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2">
                    {material.type}
                  </div>
                  <img
                    src={material.image}
                    alt={material.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <span className="text-accent-premium text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                    {material.category}
                  </span>
                  <h2 className="text-2xl font-display font-medium text-obsidian mb-4 group-hover:text-accent-premium transition-colors">
                    {material.title}
                  </h2>
                  <p className="text-obsidian/70 text-sm font-light leading-relaxed mb-8 flex-grow">
                    {material.excerpt}
                  </p>
                  <div className="inline-flex items-center text-obsidian text-xs font-bold uppercase tracking-[0.15em] group-hover:text-accent-premium transition-colors mt-auto">
                    Baixar material <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA - MGI Style */}
      <section className="py-32 bg-obsidian text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_#2563EB_0%,_transparent_60%)]"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <span className="text-accent-premium font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-6 block">
            Newsletter
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-branco mb-8 leading-tight">
            Receba inteligência de negócios em <span className="italic text-accent-premium font-medium">primeira mão.</span>
          </h2>
          <p className="text-lg text-branco/60 mb-12 font-light max-w-2xl mx-auto">
            Junte-se a centenas de CEOs e fundadores que recebem nossos frameworks e análises exclusivas sobre estruturação, margem e governança.
          </p>
          <form className="flex flex-col max-w-xl mx-auto gap-4">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="email"
                placeholder="E-mail"
                className="flex-grow px-6 py-4 bg-branco/5 border border-branco/20 text-branco placeholder-branco/40 focus:outline-none focus:border-accent-premium text-sm font-light transition-colors rounded-full"
                required
              />
              <input
                type="tel"
                placeholder="Seu WhatsApp"
                className="flex-grow px-6 py-4 bg-branco/5 border border-branco/20 text-branco placeholder-branco/40 focus:outline-none focus:border-accent-premium text-sm font-light transition-colors rounded-full"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-accent-premium hover:bg-white text-obsidian font-bold text-xs tracking-[0.2em] uppercase transition-colors whitespace-nowrap rounded-full"
            >
              Inscrever-se
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
