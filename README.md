# DRVMG — Site institucional

Site estático (HTML/CSS/JS puro) da **DRVMG** — corretora de planos de saúde Hapvida NotreDame Intermédica em Fortaleza-CE (rebrand da DRV Corretora, grupo Wolkmar).

## Publicar no Replit

1. Em [replit.com](https://replit.com) → **Create Repl** → **Import from ZIP** (ou crie um Repl HTML/CSS/JS e arraste os arquivos).
2. Clique em **Run** — o `.replit` já sobe o preview (`npx serve`).
3. Para o ar de verdade: aba **Deployments** → **Static** → Deploy. O `.replit` já aponta `publicDir = "."`.
4. (Opcional) Conecte o domínio próprio em Deployments → Settings → Custom domains.

## Estrutura

| Arquivo | O que é |
|---|---|
| `index.html` | Home (hero azul, statbar, bento de planos, carências, CTA) |
| `sobre.html` | Sobre nós (missão, visão, valores) |
| `para-voce.html` | Planos individual/familiar + FAQ |
| `para-seu-negocio.html` | Planos empresariais |
| `vem-ser-drvmg.html` | Trabalhe conosco (candidatura) |
| `fale-conosco.html` | Contatos + formulário de cotação |
| `cotacao.html` | **Cotação avançada** — wizard de 5 etapas → WhatsApp |
| `tabela-hapvida.html` | Captura para receber a tabela |
| `assets/styles.css` | Design system (Newsreader + Hanken + Baloo 2, azul/laranja Hapvida) |
| `assets/app.js` | Header, footer, balão de atendimento, pop-up e wizard (injetados em todas as páginas) |

## ⚙️ Onde trocar dados da Wolkmar (um lugar só)

No topo de **`assets/app.js`**:

```js
var WA = "5585997800029";            // WhatsApp de vendas
var INSTAGRAM = "https://instagram.com/drvmg";
```

E os chips "a confirmar" no rodapé (razão social, CNPJ, e-mail) — busque por `ph` / "a confirmar" no `app.js`.

Logo: quando tiver o PNG oficial, salve como `assets/logo-drvmg.png` (hoje o wordmark é texto — Baloo 2 — e se adapta a fundo claro/escuro).

## Comportamentos

- **Balão de atendimento** flutuante em todas as páginas (chat com atalhos → WhatsApp).
- **Pop-up de captura** dispara após 7s, uma vez por navegador (`localStorage: drvmg_popup`). Páginas com `data-nopopup` no `<body>` não exibem.
- Todos os formulários validam e abrem o WhatsApp com a mensagem pré-preenchida (sem backend).
