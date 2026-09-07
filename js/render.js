/**
 * Terres & Queiroz Advogados (TQA)
 * render.js — Injeta o conteúdo de data.js no DOM
 *
 * Cada função recebe dados e escreve HTML no container correspondente.
 * Sem efeitos colaterais além do DOM.
 */

'use strict';

const Render = (function () {

  function mount(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }
  function text(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }
  function repeat(str, n) {
    var out = '';
    for (var i = 0; i < n; i++) out += str;
    return out;
  }
  function waLink(phone, msg) {
    return 'https://wa.me/' + phone + (msg ? '?text=' + encodeURIComponent(msg) : '');
  }

  /* ── Navegação ───────────────────────────────────────────────── */
  function nav(items, brand) {
    var links = items.map(function (item) {
      return '<a href="#' + item.target + '" class="nav-link" data-scroll data-spy="' + item.target + '">'
        + item.label + '</a>';
    }).join('');

    var bar = document.getElementById('nav-links');
    if (bar) bar.insertAdjacentHTML('beforeend', links);

    var arrow = '<svg class="nol-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"'
      + ' stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

    mount('nav-overlay-links', items.map(function (item, i) {
      return '<a href="#' + item.target + '" class="nav-overlay-link" data-scroll data-spy="' + item.target + '"'
        + ' style="--i:' + i + '"><span>' + item.label + '</span>' + arrow + '</a>';
    }).join(''));

    var wa = brand.whatsapp
      ? waLink(brand.whatsapp.phone, 'Olá! Encontrei o site do TQA Advogados e gostaria de conversar.') : null;
    mount('nav-overlay-foot',
      '<a href="#contato" class="btn btn-solid-light" data-scroll>Entre em contato</a>'
      + '<div class="nol-contact">'
      +   (wa ? '<a href="' + wa + '" target="_blank" rel="noopener">' + icon('wa') + brand.whatsapp.label + '</a>' : '')
      +   '<a href="mailto:' + brand.email + '">' + icon('mail') + brand.email + '</a>'
      +   (brand.instagram ? '<a href="' + brand.instagram.url + '" target="_blank" rel="noopener">' + icon('ig') + brand.instagram.handle + '</a>' : '')
      +   (brand.linkedin ? '<a href="' + brand.linkedin.url + '" target="_blank" rel="noopener">' + icon('in') + 'LinkedIn</a>' : '')
      + '</div>');
  }

  /* ── Hero ────────────────────────────────────────────────────── */
  function hero(data) {
    text('hero-eyebrow', data.eyebrow);
    mount('hero-title', data.titleHtml);
    text('hero-sub', data.sub);
    mount('hero-actions',
      '<a href="#contato" class="btn btn-solid" data-scroll>' + data.ctaPrimary.label + '</a>'
      + '<a href="#' + data.ctaSecondary.target + '" class="btn btn-line" data-scroll>'
      + data.ctaSecondary.label + '</a>');
  }

  /* ── Faixa de áreas (marquee) ───────────────────────────────── */
  function marquee(items) {
    if (!items || !items.length) return;
    var seq = items.concat(items); // duplica para loop contínuo
    mount('marquee-track', seq.map(function (t) {
      return '<span class="marquee-item">' + t + '</span>';
    }).join(''));
  }

  /* ── O escritório / Sócios ──────────────────────────────────── */
  function partnersSection(head) {
    text('socios-eyebrow', head.eyebrow);
    mount('socios-title', head.title);
    mount('socios-lead', head.leadHtml);
  }

  function partners(list) {
    mount('partners-grid', list.map(function (p, i) {
      var initials = p.name.split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join('');
      var chips = (p.focus || []).map(function (f) {
        return '<li>' + f + '</li>';
      }).join('');

      return '<article class="partner reveal" style="--d:' + (i * 120) + 'ms">'
        + '<div class="partner-photo">'
        +   '<span class="partner-initials" aria-hidden="true">' + initials + '</span>'
        +   '<img src="' + p.photo + '" alt="' + p.photoAlt + '"'
        +     ' onerror="this.remove()">'
        +   '<span class="partner-oab">' + p.oab + '</span>'
        + '</div>'
        + '<div class="partner-body">'
        +   '<p class="partner-role">' + p.role + '</p>'
        +   '<h3 class="partner-name">' + p.name + '</h3>'
        +   '<p class="partner-bio">' + p.bioHtml + '</p>'
        +   (chips ? '<ul class="partner-focus">' + chips + '</ul>' : '')
        + '</div>'
        + '</article>';
    }).join(''));
  }

  /* ── Manifesto ───────────────────────────────────────────────── */
  function manifesto(data) {
    text('manifesto-eyebrow', data.eyebrow);
    mount('manifesto-title', data.titleHtml);
    mount('manifesto-lead', data.leadHtml);
    mount('manifesto-text', data.textHtml);
    mount('manifesto-cta',
      '<a href="#contato" class="btn btn-solid-light" data-scroll>' + data.cta.label + ' →</a>');
  }

  /* ── Serviços ────────────────────────────────────────────────── */
  function services(data) {
    text('services-eyebrow', data.eyebrow);
    mount('services-title', data.title);
    text('services-desc', data.desc);

    mount('services-grid', data.items.map(function (s, i) {
      return '<article class="service reveal" style="--d:' + ((i % 3) * 70) + 'ms">'
        + '<span class="service-n">' + String(i + 1).padStart(2, '0') + '</span>'
        + '<h3 class="service-t">' + s.title + '</h3>'
        + '<p class="service-d">' + s.description + '</p>'
        + '</article>';
    }).join(''));
  }

  /* ── Como trabalhamos ───────────────────────────────────────── */
  function process(data) {
    text('process-eyebrow', data.eyebrow);
    mount('process-title', data.title);
    text('process-lead', data.lead);
    mount('process-steps', data.steps.map(function (s, i) {
      return '<li class="pstep reveal" style="--d:' + (i * 80) + 'ms">'
        + '<span class="pstep-n">' + String(i + 1).padStart(2, '0') + '</span>'
        + '<div class="pstep-body">'
        +   '<h3>' + s.title + '</h3>'
        +   '<p>' + s.desc + '</p>'
        + '</div>'
        + '</li>';
    }).join(''));
  }

  /* ── Perguntas frequentes ───────────────────────────────────── */
  function faq(data) {
    text('faq-eyebrow', data.eyebrow);
    mount('faq-title', data.title);

    mount('faq-list', data.items.map(function (it, i) {
      return '<details class="faq-item reveal" style="--d:' + (i * 50) + 'ms">'
        + '<summary>' + it.q
        +   '<svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor"'
        +     ' stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>'
        + '</summary>'
        + '<div class="faq-answer"><p>' + it.a + '</p></div>'
        + '</details>';
    }).join(''));

    // Dados estruturados FAQPage (fonte única = data.js)
    var ld = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': data.items.map(function (it) {
        return {
          '@type': 'Question',
          'name': it.q,
          'acceptedAnswer': { '@type': 'Answer', 'text': it.a.replace(/<[^>]+>/g, '') }
        };
      })
    };
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
  }

  /* ── Depoimentos ─────────────────────────────────────────────── */
  function testimonials(data) {
    text('testimonials-eyebrow', data.eyebrow);
    mount('testimonials-title', data.title);
    mount('testimonials-grid', data.items.map(function (t, i) {
      return '<figure class="testi reveal" style="--d:' + (i * 90) + 'ms">'
        + '<div class="testi-stars" aria-label="' + t.stars + ' de 5 estrelas">' + repeat('★', t.stars) + '</div>'
        + '<blockquote class="testi-text">' + t.text + '</blockquote>'
        + '<figcaption class="testi-author">'
        +   '<span class="testi-av" aria-hidden="true">' + t.initials + '</span>'
        +   '<span><span class="testi-name">' + t.author + '</span>'
        +   '<span class="testi-role">' + t.role + '</span></span>'
        + '</figcaption>'
        + '</figure>';
    }).join(''));
  }

  /* ── Contato ─────────────────────────────────────────────────── */
  function contact(data, partnersList, brand) {
    text('contact-eyebrow', data.eyebrow);
    mount('contact-title', data.title);
    mount('contact-lead', data.leadHtml);
    text('contact-note', data.note);

    mount('contact-partners', partnersList.map(function (p) {
      return '<div class="cp">'
        + '<p class="cp-name">' + p.name + '</p>'
        + '<p class="cp-role">' + p.role + ' · ' + p.oab + '</p>'
        + '<a href="' + waLink(p.phone, p.waMsg) + '" target="_blank" rel="noopener">'
        +   icon('wa') + p.phoneFormatted + '</a>'
        + '<a href="mailto:' + p.email + '">' + icon('mail') + p.email + '</a>'
        + '</div>';
    }).join(''));

    mount('contact-social', socialPills(brand, true));
  }

  /* Pílulas de rede social (Instagram, LinkedIn, WhatsApp geral → José) */
  function socialPills(brand, withLabels) {
    var out = [];
    if (brand.instagram) {
      out.push('<a href="' + brand.instagram.url + '" target="_blank" rel="noopener" class="social-pill">'
        + icon('ig') + (withLabels ? 'Instagram ' : '') + brand.instagram.handle + '</a>');
    }
    if (brand.linkedin) {
      out.push('<a href="' + brand.linkedin.url + '" target="_blank" rel="noopener" class="social-pill">'
        + icon('in') + 'LinkedIn' + '</a>');
    }
    if (brand.whatsapp) {
      out.push('<a href="' + waLink(brand.whatsapp.phone, 'Olá! Encontrei o site do TQA Advogados e gostaria de conversar.')
        + '" target="_blank" rel="noopener" class="social-pill">'
        + icon('wa') + 'WhatsApp' + '</a>');
    }
    return out.join('');
  }

  /* ── Áreas do formulário ─────────────────────────────────────── */
  function contactAreas(areas) {
    var sel = document.getElementById('f-area');
    if (!sel) return;
    sel.innerHTML = '<option value="">Selecione...</option>'
      + areas.map(function (a) { return '<option>' + a + '</option>'; }).join('');
  }

  /* ── Rodapé ──────────────────────────────────────────────────── */
  function footer(brand, footerData, partnersList) {
    text('footer-tagline', brand.tagline + '.');
    text('footer-note', footerData.note);
    text('footer-copy',
      '© ' + new Date().getFullYear() + ' ' + brand.name + ' · ' + brand.city
      + ' · Todos os direitos reservados');

    mount('footer-social', socialPills(brand, false));

    mount('footer-partners', partnersList.map(function (p) {
      return '<div class="fp">'
        + '<p class="fp-name">' + p.name + '</p>'
        + '<p class="fp-role">' + p.role + ' &nbsp;|&nbsp; ' + p.oab + '</p>'
        + '<a href="https://wa.me/' + p.phone + '" target="_blank" rel="noopener">' + p.phoneFormatted + '</a>'
        + '<a href="mailto:' + p.email + '">' + p.email + '</a>'
        + (p.instagram
            ? '<a href="' + p.instagram.url + '" target="_blank" rel="noopener">Instagram ' + p.instagram.handle + '</a>'
            : '')
        + '</div>';
    }).join(''));
  }

  /* ── Ícones inline ───────────────────────────────────────────── */
  function icon(kind) {
    if (kind === 'wa') {
      return '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.05 1.6 5.77L2 22l4.42-1.68a9.9 9.9 0 0 0 5.62 1.74h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-2.62 1 .7-2.56-.2-.32a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24a8.2 8.2 0 0 1 8.23 8.24c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42l-.48-.01c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.25 3.74.59.26 1.05.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>';
    }
    if (kind === 'mail') {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>';
    }
    if (kind === 'ig') {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>';
    }
    if (kind === 'in') {
      return '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z"/></svg>';
    }
    return '';
  }

  /* ── Ponto de entrada ────────────────────────────────────────── */
  function init(data) {
    nav(data.nav, data.brand);
    hero(data.hero);
    marquee(data.marquee);
    partnersSection(data.socios);
    partners(data.partners);
    manifesto(data.manifesto);
    services(data.services);
    process(data.process);
    faq(data.faq);
    testimonials(data.testimonials);
    contact(data.contact, data.partners, data.brand);
    contactAreas(data.contactAreas);
    footer(data.brand, data.footer, data.partners);
  }

  return { init: init, waLink: waLink };

})();
