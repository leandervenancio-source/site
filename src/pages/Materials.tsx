import { motion } from "motion/react";
import { ArrowRight, BookOpen, Download } from "lucide-react";
import { useState } from "react";
import { MaterialPopup } from "../components/MaterialPopup";

const materials = [
  {
    id: 1,
    title: "E-book Gestão do Tempo",
    category: "Produtividade",
    type: "E-book",
    excerpt: "Descubra como dominar sua agenda, delegar com eficiência e eliminar os ladrões de tempo que travam o crescimento do seu negócio. O guia definitivo para o empresário que quer faturar mais trabalhando de forma inteligente e estratégica.",
    image: "/assets/cover_gestao_tempo.png",
    link: "https://drive.google.com/file/d/16SFJZ6obM5FVKygWnrmeS7mgGDU4bnuv/view?usp=sharing"
  },
  {
    id: 2,
    title: "E-book Definição de Metas e Estratégias",
    category: "Estratégia",
    type: "E-book",
    excerpt: "Transforme grandes visões em planos de ação claros e metas financeiras totalmente alcançáveis para o seu negócio. O mapa estratégico ideal para direcionar sua equipe, medir o sucesso e acelerar o crescimento da sua empresa.",
    image: "/assets/cover_metas_estrategias.png",
    link: "https://drive.google.com/file/d/16Vz0XDqfmO7rjJp7-hxgxlf-9QNUCGVZ/view?usp=sharing"
  },
  {
    id: 3,
    title: "E-book Gestão de Pessoas",
    category: "Liderança",
    type: "E-book",
    excerpt: "Aprenda a atrair, engajar e reter os talentos certos para construir uma equipe de alta performance e autogerenciável. O passo a passo definitivo para liderar com clareza, delegar tarefas e alinhar o time aos objetivos do seu negócio.",
    image: "/assets/cover_gestao_pessoas.png",
    link: "https://drive.google.com/file/d/1rUAfoLMY0VjXG_iIWDDbVF4IB55MoPDF/view?usp=sharing"
  },
  {
    id: 4,
    title: "Planilha de Precificação",
    category: "Finanças",
    type: "Planilha",
    excerpt: "Automatize seus cálculos e descubra o preço de venda ideal dos seus produtos nos canais online considerando custos, comissões, impostos e margem de contribuição. A ferramenta definitiva para garantir a rentabilidade sem margem para erros.",
    image: "/assets/cover_planilha_precificacao.png",
    link: "https://docs.google.com/spreadsheets/d/1masAga6dTvuwkFfISVvCmKWtJnHfBlWQ/edit?usp=drive_link&ouid=115374873829391183526&rtpof=true&sd=true"
  },
  {
    id: 5,
    title: "E-book Precificação",
    category: "Finanças",
    type: "E-book",
    excerpt: "Desvende a lógica financeira por trás do preço ideal e aprenda a margem de lucro exata para produtos no e-commerce sem espantar clientes. O guia prático para valorizar seu mix e garantir a saúde do seu caixa.",
    image: "/assets/cover_ebook_precificacao.png",
    link: "https://drive.google.com/file/d/1fFgvZtFxAkCJah4Rr-s4KRPJQF8pwDOR/view?usp=drive_link"
  },
  {
    id: 6,
    title: "Planilha de Fluxo de Caixa",
    category: "Finanças",
    type: "Planilha",
    excerpt: "Tenha o controle absoluto das entradas e saídas do seu negócio com lançamentos simples e relatórios visuais gerados automaticamente. A ferramenta ideal para antecipar cenários a 90 dias e tomar decisões financeiras seguras.",
    image: "/assets/cover_planilha_fluxo_caixa.png",
    link: "https://docs.google.com/spreadsheets/d/1ZZhtTaLvN21ZoqPQNmS-DwP7n3QpPS_T/edit?usp=drive_link&ouid=115374873829391183526&rtpof=true&sd=true"
  },
  {
    id: 7,
    title: "E-book Fluxo de Caixa",
    category: "Finanças",
    type: "E-book",
    excerpt: "Domine o coração financeiro da sua empresa, aprendendo a projetar entradas de adquirentes e saídas para antecipar cenários e evitar o sufoco no vermelho. O guia prático para garantir liquidez constante.",
    image: "/assets/cover_ebook_fluxo_caixa.png",
    link: "https://drive.google.com/file/d/1qugl3OG79GyCFRRs361CvOy2V4T6wBRA/view?usp=drive_link"
  },
  {
    id: 8,
    title: "Infográfico Gestão de Compras",
    category: "Finanças",
    type: "Infográfico em PNG",
    excerpt: "Visualize de forma rápida e clara o ciclo ideal de suprimentos, desde a cotação inteligente até a negociação estratégica de prazos com fornecedores para otimizar o capital de giro.",
    image: "/assets/cover_infografico_compras.png",
    link: "https://drive.google.com/file/d/1Ae9vH846ZtxsKkPoZ47tPc8ITZqZKNTE/view?usp=drive_link"
  },
  {
    id: 9,
    title: "E-book Gestão de Compras",
    category: "Finanças",
    type: "E-book",
    excerpt: "Aprenda a negociar com fornecedores, planejar a demanda de estoque com precisão e alinhar prazos de pagamento para manter seu caixa sempre folgado na operação digital.",
    image: "/assets/cover_ebook_compras.png",
    link: "https://drive.google.com/file/d/16V3bu1B9nF0rbVFTbB_w1irD6YN-AhoJ/view?usp=drive_link"
  },
  {
    id: 10,
    title: "E-book sobre DRE",
    category: "Finanças",
    type: "E-book",
    excerpt: "Aprenda a decifrar o verdadeiro resultado econômico da sua empresa e descubra se a sua operação gera lucro ou prejuízo real. O guia definitivo para analisar sua DRE de forma simples por canal de venda.",
    image: "/assets/cover_ebook_dre.png",
    link: "https://drive.google.com/file/d/1GbmqxZnwS8UH9KM-SKG3uBRPhpZdi3Ya/view?usp=drive_link"
  }
];

export function Materials() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState({title: "", link: ""});

  const handleDownloadClick = (material: any) => {
    setSelectedMaterial({title: material.title, link: material.link});
    setIsPopupOpen(true);
  };

  return (
    <div className="bg-[#090A0F] text-white font-sans selection:bg-[#d4af37] selection:text-black min-h-screen">
      <MaterialPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        materialTitle={selectedMaterial.title}
        materialLink={selectedMaterial.link}
      />

      {/* Header */}
      <section className="pt-36 pb-20 md:pt-40 md:pb-28 relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-[radial-gradient(ellipse_at_top,_#d4af37_0%,_transparent_65%)] opacity-15 pointer-events-none blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#d4af37]/30 backdrop-blur-md mb-8">
              <img 
                src="/favicon.png" 
                alt="Mont Finance" 
                className="h-4 w-auto object-contain drop-shadow-[0_0_6px_rgba(212,175,55,0.5)]" 
              />
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                Acervo Estratégico · Conteúdos Gratuitos
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.08] tracking-tight text-white mb-8">
              Inteligência aplicada para <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#E5C378] to-[#D4AF37]">
                alavancar sua performance
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
              Ferramentas, planilhas e e-books práticos desenvolvidos pela Mont Finance para maximizar lucro, capital de giro e previsibilidade de caixa no seu e-commerce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-24 sm:py-32 bg-[#0E1118]/40 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((material, idx) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                onClick={() => handleDownloadClick(material)}
                className="group cursor-pointer bg-[#0E1118] border border-white/[0.08] hover:border-[#d4af37]/50 transition-all duration-300 rounded-3xl overflow-hidden flex flex-col h-full shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="aspect-[16/9] overflow-hidden relative bg-black/60">
                  <div className="absolute top-4 left-4 z-10 bg-black/80 border border-white/10 text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md">
                    {material.type}
                  </div>
                  <img
                    src={material.image}
                    alt={material.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-7 flex flex-col flex-grow">
                  <span className="text-[#d4af37] text-[10px] font-mono font-bold uppercase tracking-widest mb-3 block">
                    {material.category}
                  </span>
                  <h2 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                    {material.title}
                  </h2>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6 flex-grow">
                    {material.excerpt}
                  </p>
                  <div className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#d4af37] group-hover:text-white transition-colors mt-auto pt-4 border-t border-white/[0.08]">
                    Baixar material <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA de Diagnóstico */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Quer uma análise completa e personalizada <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#E5C378] to-[#D4AF37]">
              dos números da sua empresa?
            </span>
          </h2>
          <p className="text-base text-zinc-300 font-light max-w-2xl mx-auto mb-10">
            Agende uma conversa estratégica com um especialista da Mont Finance e descubra onde estão os gargalos de margem e caixa da sua operação.
          </p>
          <a
            href="/diagnostico"
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black bg-[#d4af37] hover:bg-[#c5a059] transition-all rounded-full shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-[1.02]"
          >
            Agendar Diagnóstico Gratuito <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>
      </section>
    </div>
  );
}
