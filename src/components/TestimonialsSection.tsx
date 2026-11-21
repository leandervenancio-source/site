import { Star } from "lucide-react";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  tag: string;
  quote: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: "alexandre-mafit",
    name: "Alexandre",
    role: "Mafit",
    tag: "Reunião de Conselho",
    quote:
      "“Foi um momento muito especial pra mim e pra Mafit, e ter você ali, dedicando seu tempo, ouvindo com atenção e contribuindo com suas ideias, fez toda diferença. Sou muito grato por poder contar com você nessa caminhada.”"
  },
  {
    id: "danilo-lacerda",
    name: "Danilo Lacerda",
    role: "Empresário",
    tag: "Meta de 7 dígitos",
    quote:
      "“A consultoria me ajudou a vencer um platô que vinha enfrentando desde o início do ano, entender os gargalos do meu negócio e as ações que me fariam lucrar mais. Hoje finalizo o ano batendo a meta de 7 dígitos.”"
  },
  {
    id: "fernanda-alfer",
    name: "Fernanda",
    role: "Alfer BPO",
    tag: "Precificação & Lucro",
    quote:
      "“Hoje consigo enxergar minha empresa de forma diferente, consigo precificar meu trabalho de forma melhor e as entregas para os meus clientes mudaram muito. Muito obrigado mesmo!!!”"
  },
  {
    id: "adria",
    name: "Ádria",
    role: "Empreendedora",
    tag: "Método na Prática",
    quote:
      "“Ontem eu estava conversando com uma amiga e até falei do método para ela. É muito além das minhas expectativas, grata a Deus por isso e pela mentoria.”"
  }
];

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="py-12 sm:py-16 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E4A55]/10 border border-[#0E4A55]/30 text-[10px] font-bold uppercase tracking-wider text-[#0E4A55] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E4A55]"></span>
            Prova Social Real
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2.5 text-balance">
            Quem já viveu a{" "}
            <span className="text-[#0E4A55]">Mont Finance</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Relatos reais de empresários e líderes que estruturaram sua clareza financeira conosco.
          </p>
        </div>

        {/* Grid de 4 Cards Executivos Limpos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-[#F8FAFB] border border-slate-200/90 hover:border-[#0E4A55]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Estrelas */}
                <div className="flex items-center gap-0.5 text-[#E8A33D] mb-3.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E8A33D]" />
                  ))}
                </div>

                {/* Tag de Resultado */}
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#0E4A55]/10 text-[#0E4A55] text-[10px] font-mono font-extrabold uppercase tracking-wider mb-3">
                  {item.tag}
                </span>

                {/* Depoimento */}
                <p className="text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed mb-5">
                  {item.quote}
                </p>
              </div>

              {/* Rodapé do Card: Autor */}
              <div className="pt-3.5 border-t border-slate-200/80">
                <strong className="text-xs sm:text-sm font-extrabold text-slate-900 block">
                  {item.name}
                </strong>
                <span className="text-[11px] text-slate-500 font-medium block">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
