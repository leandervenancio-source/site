import { useEffect, useState } from "react";
import { X, ShieldCheck, FileText, Lock, Mail } from "lucide-react";

export type LegalTab = "privacy" | "terms";

export function openLegalModal(tab: LegalTab = "privacy") {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent<LegalTab>("open-legal-modal", { detail: tab }));
  }
}

export function LegalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<LegalTab>("privacy");

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<LegalTab>;
      setActiveTab(customEvent.detail || "privacy");
      setIsOpen(true);
    };
    window.addEventListener("open-legal-modal", handler);
    return () => window.removeEventListener("open-legal-modal", handler);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#051214]/80 backdrop-blur-sm animate-fadeIn"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="w-full max-w-3xl max-h-[88vh] rounded-3xl bg-white text-slate-900 border border-slate-200 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho Executivo */}
        <div className="bg-[#071A1E] text-white px-6 py-5 sm:px-8 sm:py-6 border-b border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8A33D]/15 border border-[#E8A33D]/40 text-[#F5B85D] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5B85D] block">
                Transparência & Conformidade LGPD
              </span>
              <h2 id="legal-modal-title" className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
                {activeTab === "privacy" ? "Política de Privacidade e Proteção de Dados" : "Termos e Condições de Uso"}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Fechar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Abas de Navegação */}
        <div className="bg-[#F4F6F7] px-6 sm:px-8 pt-3 border-b border-slate-200 flex gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("privacy")}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "privacy"
                ? "bg-white text-[#0E4A55] border-[#0E4A55] shadow-xs"
                : "text-slate-500 border-transparent hover:text-slate-800"
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Política de Privacidade (LGPD)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("terms")}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "terms"
                ? "bg-white text-[#0E4A55] border-[#0E4A55] shadow-xs"
                : "text-slate-500 border-transparent hover:text-slate-800"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Termos de Uso</span>
          </button>
        </div>

        {/* Conteúdo Rolável */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {activeTab === "privacy" ? (
            <>
              <div className="p-4 rounded-2xl bg-[#F4F6F7] border border-slate-200/80 text-xs text-slate-700">
                <strong className="text-slate-900 block mb-1">1. Identificação do Controlador (Art. 9º, III da LGPD)</strong>
                Esta Política de Privacidade regula o tratamento de dados pessoais realizado por{" "}
                <strong>Monte Negro Capital LTDA</strong> (nome fantasia <strong>Mont Finance</strong>), pessoa jurídica de direito privado, inscrita no CNPJ sob o nº{" "}
                <strong>25.301.996/0001-04</strong>, com sede em <strong>Goiânia, Goiás</strong>, na qualidade de Controladora dos dados pessoais coletados no site{" "}
                <span className="font-mono text-[#0E4A55]">montfinance.com.br</span>.
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                  2. Quais dados pessoais coletamos
                </h3>
                <p className="mb-2">
                  Coletamos apenas os dados estritamente necessários (princípio da necessidade — Art. 6º, III da Lei nº 13.709/2018) para viabilizar o agendamento do diagnóstico financeiro executivo e o atendimento comercial:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  <li><strong>Dados cadastrais informados no formulário:</strong> Nome completo, endereço de e-mail, número de telefone/WhatsApp e faixa aproximada de faturamento anual da empresa.</li>
                  <li><strong>Dados técnicos e de origem de tráfego:</strong> Parâmetros de campanha (<span className="font-mono">utm_source</span>, <span className="font-mono">utm_medium</span>, <span className="font-mono">utm_campaign</span>, <span className="font-mono">utm_content</span>, <span className="font-mono">utm_term</span>) e eventos agregados de navegação para medição de desempenho.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                  3. Finalidade e Bases Legais do Tratamento (Art. 7º da LGPD)
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li>
                    <strong>Procedimentos preliminares relacionados a contrato (Art. 7º, V):</strong> Analisar o perfil da operação e entrar em contato por WhatsApp, telefone ou e-mail para agendar e conduzir o diagnóstico financeiro solicitado pelo titular.
                  </li>
                  <li>
                    <strong>Consentimento e Legítimo Interesse (Art. 7º, I e IX):</strong> Enviar comunicações executivas, materiais informativos sobre gestão financeira e propostas de serviços da Mont Finance, sempre garantido o direito de descadastramento imediato (<em>opt-out</em>).
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                  4. Armazenamento, Segurança e Compartilhamento
                </h3>
                <p>
                  Os dados são armazenados em banco de dados em nuvem com criptografia em trânsito (HTTPS/TLS) e controle estrito de acesso em nível de linha (<em>Row Level Security</em>). A Mont Finance <strong>não vende, aluga nem comercializa dados pessoais</strong>. O compartilhamento ocorre apenas com provedores essenciais de infraestrutura tecnológica (banco de dados seguro e serviço de disparo de confirmação de formulário) e, quando expressamente solicitado pelo cliente em projetos específicos, com especialistas parceiros sob dever de confidencialidade.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                  5. Cookies e Tecnologias de Medição
                </h3>
                <p>
                  Utilizamos cookies estritamente necessários para o funcionamento do site e para recordar sua preferência de privacidade, além de cookies analíticos (Google Analytics 4) para compreender de forma agregada como os visitantes interagem com a página. Você pode optar por manter apenas os cookies essenciais no banner de privacidade do site.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                  6. Direitos do Titular (Art. 18 da LGPD) e Prazo de Retenção
                </h3>
                <p>
                  Você pode, a qualquer momento e gratuitamente, solicitar a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou desatualizados, a revogação do consentimento ou a <strong>exclusão definitiva dos seus dados</strong> de nossa base comercial. Os dados são mantidos apenas pelo período necessário ao cumprimento das finalidades comerciais ou obrigações legais.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0E4A55]/8 border border-[#0E4A55]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <strong className="text-xs font-extrabold uppercase tracking-wider text-[#0E4A55] block mb-0.5">
                    7. Canal do Titular e Encarregado de Dados (Art. 41 da LGPD)
                  </strong>
                  <p className="text-xs text-slate-700">
                    Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato pelo canal oficial:
                  </p>
                </div>
                <a
                  href="mailto:contato@montfinance.com.br"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#071A1E] text-[#F5B85D] text-xs font-bold whitespace-nowrap hover:bg-[#0E4A55] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>contato@montfinance.com.br</span>
                </a>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                  1. Objeto e Caráter Informativo
                </h3>
                <p>
                  Este site é mantido por <strong>Monte Negro Capital LTDA</strong> (<strong>Mont Finance</strong>), inscrita no CNPJ sob o nº <strong>25.301.996/0001-04</strong>, com sede em Goiânia/GO, e tem por objetivo apresentar seus serviços de <strong>CFO Terceirizado</strong> (pacotes <strong>CFO Pro</strong> e <strong>CFO Full</strong>), projetos de <strong>Advisory</strong> e frentes contratáveis à parte (<strong>Inteligência Tributária</strong> e <strong>Captação de Recursos</strong>). Todo o conteúdo disponibilizado possui caráter exclusivamente informativo e institucional, não configurando parecer jurídico, contábil, auditoria formal ou recomendação de investimento.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                  2. Diagnóstico Financeiro Gratuito e Ausência de Promessa Automática de Resultado
                </h3>
                <p>
                  O preenchimento do formulário de diagnóstico constitui uma solicitação de análise preliminar sujeita à disponibilidade de agenda e aderência ao perfil operacional atendido pela Mont Finance. Os gráficos e exemplos numéricos exibidos na página têm finalidade didática e ilustrativa. Qualquer evolução em margem, lucro, geração de caixa, tributação ou obtenção de crédito depende do caso concreto, da estrutura de cada empresa e da efetiva implementação das decisões pela liderança do cliente.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                  3. Propriedade Intelectual
                </h3>
                <p>
                  Os textos, elementos visuais, logotipos, estrutura da metodologia DAPE, gráficos e demais materiais presentes em <span className="font-mono text-[#0E4A55]">montfinance.com.br</span> são de titularidade exclusiva da Mont Finance, sendo vedada sua reprodução ou utilização comercial desautorizada. As marcas de clientes exibidas na página pertencem aos seus respectivos titulares.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                  4. Legislação Aplicável e Foro
                </h3>
                <p>
                  Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil, incluindo a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Fica eleito o Foro da Comarca de <strong>Goiânia, Estado de Goiás</strong>, para dirimir eventuais controvérsias oriundas da utilização deste site.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Rodapé do Modal */}
        <div className="px-6 py-4 sm:px-8 bg-[#F4F6F7] border-t border-slate-200 flex items-center justify-between gap-4">
          <span className="text-[11px] text-slate-500">
            Última atualização: Outubro de 2026
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="px-6 py-2.5 rounded-xl bg-[#071A1E] hover:bg-[#0E4A55] text-white text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Entendi e fechar
          </button>
        </div>
      </div>
    </div>
  );
}
