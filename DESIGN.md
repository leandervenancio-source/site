# Sistema de Design Mont Finance

<!-- impeccable:design-schema 1 -->

## Arquétipo & Tom de Voz
- **Arquétipo:** Sábio Estrategista (*The Wise Strategist*).
- **Tom de voz:** Calmo, analítico, seguro, direto e de igual para igual com o empresário de e-commerce.
- **Assinatura:** *"Decisões melhores nascem de números claros."*
- **Regra de ouro:** Sem clichês de fintech genérica, sem "coach financeiro", sem degradês dourados artificiais em textos.

## Tipografia Oficial
*"Serifa para pensar, sans para explicar, mono para medir."*

1. **Display & Títulos:** `Instrument Serif` (Google Fonts)
   - Uso de ênfases em itálico elegante (*lucro e caixa*, *execução*, *decisão*).
   - Peso normal com acabamento nobre e clássico editorial.
2. **Corpo & Interface:** `Instrument Sans` (Google Fonts)
   - Leitura fluida, sem distrações, peso 400 a 600.
3. **Métricas, Dados & Código:** `IBM Plex Mono` (Google Fonts)
   - Usado em dashboards, números contábeis (DRE, P&L, NCG), prazos médios e badges de categoria.

## Paleta de Cores

| Token | Hex | Aplicação |
|---|---|---|
| **Grafite** | `#14181B` | Fundo principal da página e de inputs profundos |
| **Superfície** | `#1B2024` | Fundo de cartões, painéis do cockpit e formulário |
| **Petróleo** | `#0E4A55` | Cor estrutural institucional, glows e contrastes |
| **Papel** | `#F5F3EE` | Tipografia principal, títulos e bordas com transparência |
| **Âmbar** | `#E8A33D` | Cor focal de ação (CTAs primários, destaques e ícones) |
| **Lucro** | `#2F705B` | Indicadores financeiros positivos, margens e saldo |
| **Alerta** | `#B5412F` | Sintomas críticos, custos, saídas de caixa e alertas |
| **Pedra** | `#5B6166` | Texto secundário, placeholders e legendas |

## Identidade de Marca (Ativos)
- Monograma oficial com a montanha geométrica em serifa:
  - `public/brand/mont-finance-serifa-horizontal-branco.png` (navbar e rodapé)
  - `public/brand/mont-finance-icone-ambar.png` (favicon e crachás)
  - `public/brand/mont-finance-brand-board.png` (guia mestre de marca)
- Foto oficial executiva do fundador Leander Venâncio: `public/assets/Foto Leander (2).png`

## Ergonomia & Viewport
- O Cockpit de Análise e simulações do DRE/Fluxo/Ciclo foram calibrados com altura máxima compacta para caber confortavelmente em telas de notebook (1366x768 / 1440x900) sem exigir que o usuário role para cima e para baixo para enxergar o gráfico todo.
