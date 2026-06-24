import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
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
    excerpt: "Automatize seus cálculos e descubra o preço de venda ideal dos seus produtos ou serviços em poucos clicks, considerando custos, impostos e margem de lucro. A ferramenta definitiva para garantir a rentabilidade do seu negócio sem margem para erros.",
    image: "/assets/cover_planilha_precificacao.png",
    link: "https://docs.google.com/spreadsheets/d/1masAga6dTvuwkFfISVvCmKWtJnHfBlWQ/edit?usp=drive_link&ouid=115374873829391183526&rtpof=true&sd=true"
  },
  {
    id: 5,
    title: "E-book Precificação",
    category: "Finanças",
    type: "E-book",
    excerpt: "Desvende a lógica financeira por trás do preço ideal e aprenda a margem de lucro exata para produtos ou serviços sem espantar clientes. O guia prático para você valorizar seu trabalho, cobrar com confiança e garantir a saúde financeira do seu negócio.",
    image: "/assets/cover_ebook_precificacao.png",
    link: "https://drive.google.com/file/d/1fFgvZtFxAkCJah4Rr-s4KRPJQF8pwDOR/view?usp=drive_link"
  },
  {
    id: 6,
    title: "Planilha de Fluxo de Caixa",
    category: "Finanças",
    type: "Planilha",
    excerpt: "Tenha o controle absoluto das entradas e saídas do seu negócio com lançamentos simples e relatórios visuais gerados automaticamente. A ferramenta ideal para antecipar cenários, evitar surpresas no vermelho e tomar decisões financeiras seguras.",
    image: "/assets/cover_planilha_fluxo_caixa.png",
    link: "https://docs.google.com/spreadsheets/d/1ZZhtTaLvN21ZoqPQNmS-DwP7n3QpPS_T/edit?usp=drive_link&ouid=115374873829391183526&rtpof=true&sd=true"
  },
  {
    id: 7,
    title: "E-book Fluxo de Caixa",
    category: "Finanças",
    type: "E-book",
    excerpt: "Domine o coração financeiro da sua empresa, aprendendo a projetar entradas e saídas para antecipar cenários e evitar o sufoco no vermelho. O guia prático para você tomar decisões estratégicas seguras e garantir a liquidez constante do seu negócio.",
    image: "/assets/cover_ebook_fluxo_caixa.png",
    link: "https://drive.google.com/file/d/1qugl3OG79GyCFRRs361CvOy2V4T6wBRA/view?usp=drive_link"
  },
  {
    id: 8,
    title: "Infográfico Gestão de Compras",
    category: "Finanças",
    type: "Infográfico em PNG",
    excerpt: "Visualize de forma rápida e clara o ciclo ideal de suprimentos, desde a cotação inteligente até a negociação estratégica de prazos com fornecedores. O mapa visual definitivo para reduzir custos, evitar desperdícios e otimizar o capital de giro da sua empresa.",
    image: "/assets/cover_infografico_compras.png",
    link: "https://drive.google.com/file/d/1Ae9vH846ZtxsKkPoZ47tPc8ITZqZKNTE/view?usp=drive_link"
  },
  {
    id: 9,
    title: "E-book Gestão de Compras",
    category: "Finanças",
    type: "E-book",
    excerpt: "Aprenda a negociar com fornecedores, planejar a demanda com precisão e alinhar prazos de pagamento para manter seu caixa sempre folgado. O guia estratégico para reduzir custos operacionais e aumentar a lucratividade da sua empresa logo na compra.",
    image: "/assets/cover_ebook_compras.png",
    link: "https://drive.google.com/file/d/16V3bu1B9nF0rbVFTbB_w1irD6YN-AhoJ/view?usp=drive_link"
  },
  {
    id: 10,
    title: "E-book sobre DRE",
    category: "Finanças",
    type: "E-book",
    excerpt: "Aprenda a decifrar o verdadeiro resultado econômico da sua empresa e descubra se a sua operação gera lucro ou prejuízo real. O guia definitivo para analisar sua DRE de forma simples, identificar gargalos de custos e tomar decisões altamente lucrativas.",
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
    <div className="bg-branco">
      <MaterialPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        materialTitle={selectedMaterial.title}
        materialLink={selectedMaterial.link}
      />
      {/* Header - MGI Style */}
      <section className="bg-obsidian text-branco pt-40 pb-32 lg:pt-56 lg:pb-48 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_#d4af37_0%,_transparent_60%)]"></div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {materials.map((material, idx) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
                onClick={() => handleDownloadClick(material)}
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
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-accent-premium text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                    {material.category}
                  </span>
                  <h2 className="text-xl font-display font-medium text-obsidian mb-4 group-hover:text-accent-premium transition-colors">
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
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_#d4af37_0%,_transparent_60%)]"></div>
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
