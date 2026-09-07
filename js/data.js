/**
 * Terres & Queiroz Advogados (TQA)
 * data.js — Fonte única de conteúdo editável
 *
 * COMO EDITAR:
 *  • Sócios      → SITE.partners  (bio, OAB, telefone, e-mail, foto)
 *  • Serviços    → SITE.services.items
 *  • Contato     → SITE.contact / SITE.partners
 *  • Textos      → SITE.hero, SITE.socios, SITE.manifesto
 *
 * Nenhum arquivo HTML precisa ser tocado para trocar conteúdo.
 */

'use strict';

/* eslint-disable no-unused-vars */
const SITE = {

  /* ── Identidade do escritório ─────────────────────────────────── */
  brand: {
    name:    'Terres & Queiroz Advogados',
    short:   'TQA',
    tagline: 'Assessoria jurídica empresarial e patrimonial',
    domain:  'tqadvogados.adv.br',
    url:     'https://tqadvogados.adv.br',
    email:   'contato@tqadvogados.adv.br',
    city:    'Curitiba, Paraná',
    instagram: { handle: '@tqa.advogados', url: 'https://www.instagram.com/tqa.advogados' },
    linkedin:  { handle: 'Terres & Queiroz Advogados', url: 'https://www.linkedin.com/company/terres-queiroz-advogados' },
    // WhatsApp geral do escritório → redireciona para o número do José
    whatsapp:  { phone: '5541988855715', label: '(41) 98885-5715' },
  },

  /* ── Navegação (ordem = ordem no menu) ───────────────────────── */
  nav: [
    { label: 'O escritório',     target: 'socios' },
    { label: 'Atuação',          target: 'servicos' },
    { label: 'Como trabalhamos', target: 'processo' },
    { label: 'Dúvidas',          target: 'faq' },
    { label: 'Depoimentos',      target: 'depoimentos' },
    { label: 'Contato',          target: 'contato' },
  ],

  /* ── Faixa de áreas (marquee sob o hero) ────────────────────── */
  marquee: [
    'Direito Empresarial',
    'Contratos',
    'Direito Societário',
    'Planejamento Patrimonial',
    'Contencioso Empresarial',
    'Direito Tributário',
    'Trabalhista Empresarial',
    'Due Diligence',
    'Direito Imobiliário',
  ],

  /* ── Hero ────────────────────────────────────────────────────── */
  hero: {
    eyebrow:  'Terres & Queiroz Advogados',
    titleHtml: 'Segurança jurídica<br>para quem <em>constrói</em>.',
    sub: 'Assessoria jurídica empresarial e patrimonial. Atendemos empresas, empresários e famílias, reunindo atuação consultiva, preventiva e contenciosa sob a mesma equipe.',
    ctaPrimary:   { label: 'Entre em contato' },              // rola até #contato
    ctaSecondary: { label: 'Áreas de atuação', target: 'servicos' },
  },

  /* ── O escritório / Sócios ──────────────────────────────────── */
  socios: {
    eyebrow: 'O escritório',
    title:   'Duas frentes complementares,<br>uma <em>mesma equipe</em>',
    leadHtml:
      'O TQA Advogados foi fundado por <strong>Isabela Terres</strong> e <strong>José Queiroz</strong>, ' +
      'sócios com formações e áreas de atuação complementares. A união dessas duas frentes deu origem ' +
      'a um escritório que atende <strong>empresas, empresários e famílias</strong> de forma integral — ' +
      'do dia a dia do negócio à proteção do patrimônio pessoal — reunindo a atuação ' +
      '<strong>consultiva, preventiva e contenciosa</strong> sob a mesma equipe.',
  },

  partners: [
    {
      name:  'Isabela Terres',
      role:  'Advogada Sócia',
      oab:   'OAB/PR 128.467',
      bioHtml:
        'Graduada em Direito pela Universidade Federal do Paraná (UFPR), com pós-graduação em ' +
        'Direito Societário e Novos Negócios pela FAE Business School. Sua atuação é voltada à ' +
        '<strong>proteção patrimonial de famílias e empresas</strong>, com foco em planejamento ' +
        'sucessório, direito societário, tributário e imobiliário.',
      focus: ['Planejamento sucessório', 'Direito societário', 'Direito tributário', 'Direito imobiliário'],
      phone:          '5541987787631',
      phoneFormatted: '(41) 98778-7631',
      email:          'isabela@tqadvogados.adv.br',
      instagram: { handle: '@terresisabela_adv', url: 'https://www.instagram.com/terresisabela_adv' },
      photo:    'assets/isabela-terres.jpg',
      photoAlt: 'Isabela Terres, advogada sócia do TQA Advogados — OAB/PR 128.467',
      waMsg:    'Olá, Isabela. Encontrei o site do TQA Advogados e gostaria de conversar.',
    },
    {
      name:  'José Queiroz',
      role:  'Advogado Sócio',
      oab:   'OAB/PR 116.683',
      bioHtml:
        'Formado pelo Centro Universitário Autônomo do Brasil (UniBrasil), com pós-graduações em ' +
        'Direito Digital e Compliance, Direito Consultivo Empresarial e Gestão de Escritórios e ' +
        'Departamentos Jurídicos. Construiu sua trajetória em <strong>bancas empresariais de médio ' +
        'e grande porte</strong>, com atuação voltada a Legal Operations e contencioso empresarial.',
      focus: ['Contencioso empresarial', 'Legal Operations', 'Direito consultivo', 'Compliance'],
      phone:          '5541988855715',
      phoneFormatted: '(41) 98885-5715',
      email:          'jose@tqadvogados.adv.br',
      instagram: null,
      photo:    'assets/jose-queiroz.jpg',
      photoAlt: 'José Queiroz, advogado sócio do TQA Advogados — OAB/PR 116.683',
      waMsg:    'Olá, José. Encontrei o site do TQA Advogados e gostaria de conversar.',
    },
  ],

  /* ── Manifesto — "Por que a TQA" ─────────────────────────────── */
  manifesto: {
    eyebrow:  'Por que a TQA',
    titleHtml: 'Por que a <em>TQA Advogados</em>?',
    leadHtml:
      'Empresas nascem de coragem.<br>' +
      'Crescem com estratégia.<br>' +
      '<strong>E se mantêm de pé com segurança jurídica.</strong>',
    textHtml:
      'O mesmo vale para o patrimônio de uma família. É isso que fazemos: não apenas resolver ' +
      'problemas, mas evitar que eles aconteçam — em contratos, na sociedade, na herança e nas ' +
      'decisões do dia a dia — para que você foque no que importa.',
    cta: { label: 'Vamos conversar' },
  },

  /* ── Áreas de atuação ────────────────────────────────────────── */
  services: {
    eyebrow: 'Áreas de atuação',
    title:   'Nossos <em>serviços</em>',
    desc:    'Atuação empresarial e patrimonial integrada — do contrato do dia a dia à disputa em juízo.',
    items: [
      {
        title: 'Assessoria Full Service Empresarial',
        description: 'Atuação consultiva e contenciosa integradas, sob a mesma equipe. Acompanhamento jurídico contínuo, prevenção de riscos e atuação em juízo quando necessário.',
      },
      {
        title: 'Assessoria Trabalhista Empresarial',
        description: 'A relação com os empregados é uma das maiores fontes de risco da empresa. Atuamos na prevenção, na rotina trabalhista e na defesa em reclamações e processos judiciais.',
      },
      {
        title: 'Direito Societário',
        description: 'Sociedades começam com confiança, mas crescem com regras claras. Estruturamos o negócio para que a parceria resista ao tempo — e às divergências.',
      },
      {
        title: 'Contratos',
        description: 'Um bom contrato é a diferença entre um acordo e um problema adiado. Elaboramos e revisamos os contratos que sustentam o seu negócio e as suas relações — de prestação de serviços a compra e venda.',
      },
      {
        title: 'Contencioso Empresarial',
        description: 'Quando o conflito chega, alguém precisa estar preparado para defender o que é seu. Atuamos com firmeza em cobranças, disputas contratuais e societárias.',
      },
      {
        title: 'Due Diligence Patrimonial',
        description: 'Antes de comprar, vender ou associar, é preciso enxergar o que não está visível. Analisamos os riscos para que a decisão seja sua, não do acaso.',
      },
      {
        title: 'Planejamento Patrimonial e Sucessório',
        description: 'A empresa é sua, mas o patrimônio pessoal não deveria correr os mesmos riscos do negócio. Separamos, organizamos e protegemos o que é seu — inclusive para quem vem depois de você.',
      },
      {
        title: 'Direito Tributário',
        description: 'Pagar imposto é inevitável. Pagar mais do que deveria, não. Planejamos a carga tributária dentro da legalidade.',
      },
      {
        title: 'Direito Imobiliário e Notarial',
        description: 'Compra, venda, locação e regularização de imóveis, com due diligence imobiliária e acompanhamento dos atos em cartório. Segurança em cada etapa da negociação.',
      },
    ],
  },

  /* ── Como trabalhamos ───────────────────────────────────────── */
  process: {
    eyebrow: 'Como trabalhamos',
    title:   'Um <em>método</em> claro, do primeiro contato ao acompanhamento',
    lead:    'Cada demanda é conduzida em etapas definidas, com comunicação transparente e responsabilidade técnica em todas as fases.',
    steps: [
      {
        title: 'Análise inicial',
        desc:  'Uma reunião para entender a situação, os seus objetivos e o contexto — do negócio, do contrato ou do patrimônio envolvido. A partir dela, identificamos os pontos que exigem atenção jurídica.',
      },
      {
        title: 'Avaliação e planejamento',
        desc:  'Analisamos documentos, contratos e riscos envolvidos e apresentamos um plano de atuação, com escopo, etapas e estimativa de honorários definidos previamente.',
      },
      {
        title: 'Atuação',
        desc:  'Conduzimos a demanda nas esferas consultiva e contenciosa, com a mesma equipe acompanhando o caso e mantendo o cliente informado sobre cada andamento.',
      },
      {
        title: 'Acompanhamento',
        desc:  'Concluída a demanda, permanecemos à disposição para revisões periódicas, atualização de documentos e orientação preventiva sobre novas situações.',
      },
    ],
  },

  /* ── Depoimentos — ADICIONE AQUI ────────────────────────────── */
  testimonials: {
    eyebrow: 'Depoimentos',
    title:   'O que dizem sobre <em>o nosso trabalho</em>',
    items: [
      {
        text:     'Profissional extremamente dedicado e competente. Desde o primeiro atendimento mostrou atenção aos detalhes e clareza nas explicações. Transmite segurança, confiança e trabalha com seriedade e ética. Recomendo muito!',
        author:   'Sara Antunes',
        role:     'Studio Ohana Beauty · Curitiba',
        initials: 'SA',
        stars:    5,
      },

      {
        text:     'Ajudaram a organizar os contratos e a parte societária da empresa num momento em que a gente estava crescendo rápido. Explicaram tudo sem juridiquês e resolveram o que precisava sem enrolação. Recomendo.',
        author:   'Thiago dos Santos',
        role:     'Rei do Pastel · Pinhais',
        initials: 'TS',
        stars:    5,
      },
      // Para adicionar mais, copie o bloco acima:
      // { text: '...', author: 'Nome Sobrenome', role: 'Empresa · Cidade', initials: 'NS', stars: 5 },
    ],
  },

  /* ── Perguntas frequentes ───────────────────────────────────── */
  faq: {
    eyebrow: 'Perguntas frequentes',
    title:   'Dúvidas <em>comuns</em>',
    items: [
      {
        q: 'Vocês atendem só empresas ou também pessoas físicas?',
        a: 'Atendemos empresas, empresários e famílias. O foco é empresarial e patrimonial — contratos, questões societárias, trabalhistas e tributárias da empresa — e também a organização e a proteção do patrimônio pessoal e a sucessão familiar.',
      },
      {
        q: 'Como funciona o primeiro contato?',
        a: 'Você fala com o escritório por WhatsApp, e-mail ou pelo formulário do site, contando brevemente a situação. Retornamos para agendar uma conversa inicial — presencial em Curitiba ou online.',
      },
      {
        q: 'O escritório atende fora de Curitiba?',
        a: 'Sim. A base é em Curitiba e na região metropolitana, com atendimento presencial na região e digital em todo o Brasil.',
      },
      {
        q: 'Qual a diferença entre atuação consultiva, preventiva e contenciosa?',
        a: 'Consultiva é a orientação no dia a dia para decidir com segurança. Preventiva é estruturar contratos e rotinas para evitar o conflito antes que ele exista. Contenciosa é a defesa dos seus interesses em negociação, em câmara arbitral ou em juízo, quando o conflito já chegou. No TQA, as três frentes ficam com a mesma equipe.',
      },
      {
        q: 'Preciso ter empresa para fazer planejamento patrimonial e sucessório?',
        a: 'Não. O planejamento serve tanto para o patrimônio de empresários quanto para famílias — imóveis, participações societárias, investimentos e a organização da herança, inclusive por meio de holding quando faz sentido.',
      },
      {
        q: 'Como são definidos os honorários?',
        a: 'Os honorários são definidos caso a caso, conforme a natureza, a complexidade e a extensão da demanda, em observância à Tabela de Honorários da OAB/PR. O primeiro contato destina-se a entender a situação.',
      },
    ],
  },

  /* ── Contato ─────────────────────────────────────────────────── */
  contact: {
    eyebrow: 'Contato',
    title:   'Vamos <em>conversar</em>?',
    leadHtml:
      'Conte um pouco sobre a sua situação e o que você precisa — empresa, contrato, ' +
      'patrimônio ou uma questão de família. Retornamos o contato para agendar uma conversa inicial.',
    note:
      'O primeiro contato destina-se a entender a demanda. ' +
      'Eventuais honorários são definidos conforme a natureza e a complexidade do caso, ' +
      'em observância à Tabela de Honorários da OAB/PR.',
  },

  /* ── Opções do formulário ────────────────────────────────────── */
  contactAreas: [
    'Assessoria Full Service Empresarial',
    'Assessoria Trabalhista Empresarial',
    'Direito Societário',
    'Contratos',
    'Contencioso Empresarial',
    'Due Diligence Patrimonial',
    'Planejamento Patrimonial e Sucessório',
    'Inventário, herança ou sucessão',
    'Direito Tributário',
    'Direito Imobiliário e Notarial',
    'Outro assunto',
  ],

  /* ── Rodapé ──────────────────────────────────────────────────── */
  footer: {
    note:
      'Este site tem caráter meramente informativo, em conformidade com o Provimento nº 205/2021 ' +
      'da OAB e o Código de Ética e Disciplina da OAB. Não constitui oferta de serviços advocatícios ' +
      'nem captação de clientela.',
  },
};
