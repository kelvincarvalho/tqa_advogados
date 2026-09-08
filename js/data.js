/**
 * Terres & Queiroz Advogados (TQA)
 * data.js — Dados das partes montadas por JS
 *
 * O CONTEÚDO DE LEITURA DO SITE (hero, sócios, serviços, "como
 * trabalhamos", FAQ, depoimentos, textos de contato/rodapé) fica
 * direto no index.html — para editar um texto, mexa lá.
 *
 * Aqui ficam só os dados de:
 *   • nav        → itens do menu (topo + overlay mobile)
 *   • brand      → nome, e-mail, WhatsApp e redes (links do menu/contato/rodapé)
 *   • partners   → dados de contato dos sócios (cartões de contato e rodapé)
 *   • contactAreas → opções do <select> "Assunto" do formulário
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

  /* ── Contato dos sócios (cartões de contato + rodapé) ────────── */
  partners: [
    {
      name:           'Isabela Terres',
      role:           'Advogada Sócia',
      oab:            'OAB/PR 128.467',
      phone:          '5541987787631',
      phoneFormatted: '(41) 98778-7631',
      email:          'isabela@tqadvogados.adv.br',
      instagram: { handle: '@terresisabela_adv', url: 'https://www.instagram.com/terresisabela_adv' },
      waMsg:    'Olá, Isabela. Encontrei o site do TQA Advogados e gostaria de conversar.',
    },
    {
      name:           'José Queiroz',
      role:           'Advogado Sócio',
      oab:            'OAB/PR 116.683',
      phone:          '5541988855715',
      phoneFormatted: '(41) 98885-5715',
      email:          'jose@tqadvogados.adv.br',
      instagram: null,
      waMsg:    'Olá, José. Encontrei o site do TQA Advogados e gostaria de conversar.',
    },
  ],

  /* ── Opções do formulário (campo "Assunto") ──────────────────── */
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
};
