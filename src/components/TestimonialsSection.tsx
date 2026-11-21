import { useState } from "react";
import { Star, MessageCircle, Eye, X, CheckCircle2 } from "lucide-react";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  date: string;
  tag: string;
  quote: string;
  image: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: "alexandre-mafit",
    name: "Alexandre",
    role: "Mafit",
    date: "Abr/2025",
    tag: "Reunião de Conselho",
    quote:
      "“Foi um momento muito especial pra mim e pra Mafit, e ter você ali, dedicando seu tempo, ouvindo com atenção e contribuindo com suas ideias, fez toda diferença. Sou muito grato por poder contar com você nessa caminhada.”",
    image: "/depoimentos/alexandre-mafit.jpg"
  },
  {
    id: "danilo-lacerda",
    name: "Danilo Lacerda",
    role: "Empresário",
    date: "WhatsApp",
    tag: "Meta de 6 dígitos",
    quote:
      "“A consultoria me ajudou a vencer um platô que vinha enfrentando desde o início do ano, entender os gargalos do meu negócio e as ações que me fariam lucrar mais. Hoje finalizo o ano batendo a meta de 6 dígitos.”",
    image: "/depoimentos/danilo-lacerda.jpg"
  },
  {
    id: "fernanda-alfer",
    name: "Fernanda",
    role: "Alfer BPO",
    date: "Out/2024",
    tag: "Precificação & Lucro",
    quote:
      "“Hoje consigo enxergar minha empresa de forma diferente, consigo precificar meu trabalho de forma melhor e as entregas para os meus clientes mudaram muito. Muito obrigado mesmo!!!”",
    image: "/depoimentos/fernanda-alfer.jpg"
  },
  {
    id: "adria",
    name: "Ádria",
    role: "Empreendedora",
    date: "Nov/2023",
    tag: "Método na Prática",
    quote:
      "“Ontem eu estava conversando com uma amiga e até falei do método para ela. É muito além das minhas expectativas, grata a Deus por isso e pela mentoria.”",
    image: "/depoimentos/adria.jpg"
  }
];

export function TestimonialsSection() {
  const [selectedPrint, setSelectedPrint] = useState<TestimonialItem | null>(null);

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
            Mensagens reais enviadas no WhatsApp por empresários e líderes que estruturaram sua clareza financeira conosco. Clique em qualquer card para ver o print original.
          </p>
        </div>

        {/* Grid de 4 Cards Executivos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-[#F8FAFB] border border-slate-200/90 hover:border-[#0E4A55]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Estrelas + Selo WhatsApp */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-0.5 text-[#E8A33D]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E8A33D]" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[10px] font-mono font-bold">
                    <MessageCircle className="w-3 h-3" />
                    WhatsApp
                  </span>
                </div>

                {/* Tag de Resultado */}
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#0E4A55]/10 text-[#0E4A55] text-[10px] font-mono font-extrabold uppercase tracking-wider mb-3">
                  {item.tag}
                </span>

                {/* Depoimento */}
                <p className="text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Rodapé do Card: Autor + Botão Ver Print */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <strong className="text-xs sm:text-sm font-extrabold text-slate-900 block truncate">
                    {item.name}
                  </strong>
                  <span className="text-[11px] text-slate-500 font-medium block truncate">
                    {item.role} · {item.date}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPrint(item)}
                  className="shrink-0 px-2.5 py-1.5 rounded-lg bg-[#071A1E] hover:bg-[#0E4A55] text-white text-[10px] font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Ver print original do WhatsApp"
                >
                  <Eye className="w-3 h-3 text-[#F5B85D]" />
                  <span>Print</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox com Print Original do WhatsApp */}
      {selectedPrint && (
        <div
          className="fixed inset-0 z-50 bg-[#041013]/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPrint(null)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl bg-[#0A272D] border border-[#E8A33D]/40 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 bg-[#061518] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <div>
                  <strong className="text-xs font-extrabold text-white block">
                    {selectedPrint.name} · {selectedPrint.role}
                  </strong>
                  <span className="text-[10px] font-mono text-slate-400">
                    Print original de WhatsApp
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPrint(null)}
                aria-label="Fechar"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 bg-[#071A1E] flex items-center justify-center">
              <img
                src={selectedPrint.image}
                alt={`Depoimento de ${selectedPrint.name}`}
                className="w-full max-h-[70vh] object-contain rounded-xl border border-white/10 shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
