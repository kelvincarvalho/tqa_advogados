# Terres & Queiroz Advogados

Site institucional de página única do escritório **TQA Advogados** —
assessoria jurídica empresarial e patrimonial.

Domínio: **tqadvogados.adv.br** (hospedado no GitHub Pages).

HTML, CSS e JavaScript puro. Sem dependências e sem etapa de build.

---

## Estrutura

```
├── index.html          Estrutura da página
├── css/
│   └── style.css       Estilos (variáveis no topo do arquivo)
├── js/
│   ├── data.js         Conteúdo do site (textos, sócios, serviços, contato)
│   ├── render.js       Monta o HTML a partir do data.js
│   └── main.js         Interações (menu, rolagem, animações, formulário)
├── assets/             Imagens publicadas (logos, fotos, favicons)
├── CNAME
├── robots.txt
└── sitemap.xml
```

Todo o conteúdo editável fica em **`js/data.js`** — não é preciso mexer no HTML
para trocar textos, fotos, serviços ou dados de contato.

---

## Desenvolvimento local

```bash
powershell -NoProfile -ExecutionPolicy Bypass -File .dev-server.ps1
```

Serve o site em `http://localhost:4180`.

---

© Terres & Queiroz Advogados. Conteúdo meramente informativo,
em conformidade com o Provimento nº 205/2021 e o Código de Ética e Disciplina da OAB.
