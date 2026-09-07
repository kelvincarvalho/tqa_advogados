/**
 * Terres & Queiroz Advogados (TQA)
 * main.js — Interações e integrações
 */

(function () {
  'use strict';

  Render.init(SITE);

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ──────────────────────────────────────────
     NAVBAR — estado ao rolar + progresso
  ────────────────────────────────────────── */
  var nav      = document.getElementById('nav');
  var progress = document.getElementById('progress');
  var hero     = document.getElementById('inicio');
  var heroMark = document.querySelector('.hero-mark');

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    nav.classList.toggle('scrolled', y > 40);

    // navbar "clara" (logo branco) só enquanto sobre o hero
    var heroBottom = hero ? hero.offsetHeight - 90 : 0;
    nav.classList.toggle('over-hero', y < heroBottom);

    var docH = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = 'scaleX(' + (docH > 0 ? y / docH : 0) + ')';

    // Parallax sutil do monograma do hero (só desktop/tablet)
    if (heroMark && !reduceMotion && window.innerWidth > 680 && y < window.innerHeight) {
      heroMark.style.transform = 'translateY(calc(-50% + ' + (y * 0.12).toFixed(1) + 'px))';
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ──────────────────────────────────────────
     MENU MOBILE (overlay)
  ────────────────────────────────────────── */
  var toggle  = document.getElementById('nav-toggle');
  var overlay = document.getElementById('nav-overlay');
  var isOpen  = false;

  function setMenu(open) {
    isOpen = open;
    overlay.classList.toggle('open', open);
    overlay.setAttribute('aria-hidden', String(!open));
    toggle.classList.toggle('is-x', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('no-scroll', open);
  }
  toggle.addEventListener('click', function () { setMenu(!isOpen); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) setMenu(false);
  });

  /* ──────────────────────────────────────────
     SMOOTH SCROLL (links data-scroll e âncoras)
  ────────────────────────────────────────── */
  function scrollToId(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var top = el.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    if (!id || id === '') return;
    var target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    if (isOpen) {
      setMenu(false);
      setTimeout(function () { scrollToId(id); }, reduceMotion ? 0 : 260);
    } else {
      scrollToId(id);
    }
    history.replaceState(null, '', '#' + id);
  });

  /* ──────────────────────────────────────────
     SCROLL-SPY — link ativo + indicador deslizante
  ────────────────────────────────────────── */
  var spyLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var indicator = document.getElementById('nav-indicator');
  var spyTargets = SITE.nav.map(function (n) { return document.getElementById(n.target); }).filter(Boolean);
  var current = null;

  function moveIndicator(link) {
    if (!link || !indicator) return;
    indicator.style.width   = link.offsetWidth + 'px';
    indicator.style.transform = 'translateX(' + link.offsetLeft + 'px)';
    indicator.style.opacity = '1';
  }

  var overlaySpyLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-overlay-link'));

  function setActive(id) {
    if (id === current) return;
    current = id;
    var active = null;
    spyLinks.forEach(function (l) {
      var on = l.dataset.spy === id;
      l.classList.toggle('active', on);
      if (on) active = l;
    });
    overlaySpyLinks.forEach(function (l) {
      l.classList.toggle('active', l.dataset.spy === id);
    });
    moveIndicator(active);
  }

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  spyTargets.forEach(function (s) { spy.observe(s); });

  window.addEventListener('resize', function () {
    var active = spyLinks.filter(function (l) { return l.classList.contains('active'); })[0];
    moveIndicator(active);
  });

  /* ──────────────────────────────────────────
     REVEAL ao rolar
  ────────────────────────────────────────── */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (reduceMotion) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  } else {
    var pending = revealEls.slice();

    function flush() {
      var vh = window.innerHeight;
      pending = pending.filter(function (el) {
        if (el.getBoundingClientRect().top < vh - 40) {
          el.classList.add('in');
          return false;
        }
        return true;
      });
      if (!pending.length) window.removeEventListener('scroll', onRevealScroll);
    }

    var ticking = false;
    function onRevealScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { ticking = false; flush(); });
    }

    // IO cuida da animação escalonada no scroll normal…
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(function (el) { revObs.observe(el); });

    // …e o listener é o failsafe para scroll rápido / deep-link / carga
    window.addEventListener('scroll', onRevealScroll, { passive: true });
    requestAnimationFrame(flush);
    window.addEventListener('load', flush);
  }

  /* ──────────────────────────────────────────
     BOTÃO FLUTUANTE DE WHATSAPP
  ────────────────────────────────────────── */
  var waFloat = document.getElementById('wa-float');
  if (waFloat) {
    var p = SITE.partners[SITE.partners.length - 1]; // José como contato geral
    waFloat.href = Render.waLink(p.phone, 'Olá! Encontrei o site do TQA Advogados e gostaria de conversar.');

    // Esconde o botão flutuante quando a seção de contato está visível
    var contatoSec = document.getElementById('contato');
    if (contatoSec) {
      new IntersectionObserver(function (entries) {
        waFloat.classList.toggle('hide', entries[0].isIntersecting);
      }, { threshold: 0.15 }).observe(contatoSec);
    }
  }

  /* ──────────────────────────────────────────
     FORMULÁRIO → E-MAIL ou WHATSAPP
  ────────────────────────────────────────── */
  function clean(str) {
    return String(str || '').replace(/<[^>]*>/g, '').replace(/[<>]/g, '').trim().slice(0, 1200);
  }
  function feedback(msg, type) {
    var el = document.getElementById('form-feedback');
    if (!el) return;
    el.textContent = msg;
    el.className = 'form-feedback show ' + (type || '');
  }
  function collect() {
    return {
      nome:    clean(document.getElementById('f-nome').value),
      empresa: clean(document.getElementById('f-empresa').value),
      email:   clean(document.getElementById('f-email').value),
      area:    clean(document.getElementById('f-area').value),
      msg:     clean(document.getElementById('f-msg').value),
    };
  }
  function validate(d) {
    if (!d.nome)      { feedback('Informe o seu nome.', 'err'); return false; }
    if (!d.msg)       { feedback('Descreva brevemente a sua situação na mensagem.', 'err'); return false; }
    return true;
  }
  function buildText(d) {
    var lines = [
      'Nome: ' + d.nome,
      d.empresa ? 'Empresa: ' + d.empresa : null,
      d.email   ? 'E-mail: ' + d.email : null,
      d.area    ? 'Assunto: ' + d.area : null,
      '',
      d.msg,
    ].filter(function (x) { return x !== null; });
    return lines.join('\n');
  }

  var sendEmail = document.getElementById('send-email');
  if (sendEmail) {
    sendEmail.addEventListener('click', function () {
      var d = collect();
      if (!validate(d)) return;
      var subject = 'Contato pelo site' + (d.area ? ' — ' + d.area : '');
      window.location.href = 'mailto:' + SITE.brand.email
        + '?subject=' + encodeURIComponent(subject)
        + '&body='    + encodeURIComponent(buildText(d));
      feedback('Abrindo o seu aplicativo de e-mail…', 'ok');
    });
  }

  var sendWa = document.getElementById('send-wa');
  if (sendWa) {
    sendWa.addEventListener('click', function () {
      var d = collect();
      if (!validate(d)) return;
      var intro = 'Olá! Vim pelo site do TQA Advogados.\n\n';
      window.open(
        Render.waLink(SITE.brand.whatsapp.phone, intro + buildText(d)),
        '_blank', 'noopener'
      );
      feedback('Abrindo o WhatsApp…', 'ok');
    });
  }

  /* ──────────────────────────────────────────
     E-MAIL — copia o endereço ao clicar
     (o mailto: ainda abre o app de e-mail se houver;
      no desktop sem app configurado, ao menos copia)
  ────────────────────────────────────────── */
  var toastEl = document.getElementById('toast');
  var toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2600);
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="mailto:"]');
    if (!a) return;
    if (isOpen && a.closest('.nav-overlay')) setMenu(false);
    var addr = a.getAttribute('href').slice(7).split('?')[0];
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(addr)
        .then(function () { toast('E-mail copiado: ' + addr); })
        .catch(function () { toast('E-mail: ' + addr); });
    } else {
      toast('E-mail: ' + addr);
    }
  });

  /* ──────────────────────────────────────────
     ANO INICIAL — abre seção se veio com hash
  ────────────────────────────────────────── */
  if (window.location.hash) {
    var id = window.location.hash.slice(1);
    setTimeout(function () { scrollToId(id); }, 120);
  }

})();
