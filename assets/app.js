/* DRVMG — chrome compartilhado + interações (header, menu, footer, chat, pop-up, FAQ, wizard) */
(function () {
  "use strict";

  // ⚠️ PLACEHOLDERS Wolkmar — trocar aqui num lugar só
  var WA = "5585997800029";            // WhatsApp de vendas
  var INSTAGRAM = "https://instagram.com/drvmg";
  var wa = function (msg) { return "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg); };
  var page = document.body.dataset.page || "";

  var NAV = [
    { href: "sobre.html", label: "Sobre", page: "sobre" },
    { href: "para-voce.html", label: "Para você", page: "para-voce" },
    { href: "para-seu-negocio.html", label: "Para seu negócio", page: "para-seu-negocio" },
    { href: "vem-ser-drvmg.html", label: "Vem ser DRVMG", page: "vem-ser-drvmg" },
    { href: "fale-conosco.html", label: "Fale conosco", page: "fale-conosco" }
  ];

  var ICON = {
    menu: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    x: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    chat: '<svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2Z"/></svg>',
    calc: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h0M12 11h0M16 11h.01M8 15h0M12 15h0M16 15v2"/></svg>',
    user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/></svg>',
    biz: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 21V8l6-4 6 4M15 21V11l6 4v6M3 21h18"/></svg>',
    head: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-1v-6h3M4 13H1v-1a3 3 0 0 1 3-3v4Z"/></svg>',
    check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>',
    arw: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  /* ---------------- HEADER ---------------- */
  var header = document.createElement("header");
  header.className = "site-head";
  header.innerHTML =
    '<div class="wrap"><a class="brand" href="index.html">drv<span>mg</span></a>' +
    '<nav class="nav">' +
    NAV.map(function (n) { return '<a class="navlink ' + (n.page === page ? "active" : "") + '" href="' + n.href + '">' + n.label + "</a>"; }).join("") +
    '<a class="btn btn-orange" href="cotacao.html">Fazer cotação</a></nav>' +
    '<button class="hamb" aria-label="Abrir menu">' + ICON.menu + "</button></div>";
  document.body.prepend(header);

  var mmenu = document.createElement("div");
  mmenu.className = "mmenu";
  mmenu.innerHTML =
    '<div class="mmenu-panel"><div class="mm-top"><a class="brand" href="index.html">drv<span>mg</span></a>' +
    '<button class="iconbtn mm-close" aria-label="Fechar menu">' + ICON.x + "</button></div>" +
    NAV.map(function (n) { return '<a class="' + (n.page === page ? "active" : "") + '" href="' + n.href + '">' + n.label + "</a>"; }).join("") +
    '<a class="btn btn-orange" href="cotacao.html">Fazer cotação</a></div>';
  document.body.appendChild(mmenu);
  header.querySelector(".hamb").addEventListener("click", function () { mmenu.classList.add("open"); });
  mmenu.addEventListener("click", function (e) {
    if (e.target === mmenu || e.target.closest(".mm-close") || e.target.tagName === "A") mmenu.classList.remove("open");
  });

  var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 60); };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------------- FOOTER ---------------- */
  var footer = document.createElement("footer");
  footer.innerHTML =
    '<div class="wrap"><div class="fgrid">' +
    '<div class="fbrand"><span class="mark">drv<span>mg</span></span>' +
    "<p>Corretora de planos de saúde · Belo Horizonte-MG e Fortaleza-CE. Parceira oficial Hapvida NotreDame Intermédica.</p></div>" +
    '<div class="fcol"><h5>Navegação</h5>' + NAV.map(function (n) { return '<a href="' + n.href + '">' + n.label + "</a>"; }).join("") + "</div>" +
    '<div class="fcol"><h5>Contato</h5>' +
    '<a href="' + wa("Olá! Vim pelo site da DRVMG.") + '" target="_blank" rel="noopener">WhatsApp (85) 99780-0029</a>' +
    '<a href="#">contato@<span class="ph">domínio a confirmar</span></a>' +
    '<a href="' + INSTAGRAM + '" target="_blank" rel="noopener">Instagram @drvmg</a></div>' +
    '<div class="fcol"><h5>Onde estamos</h5>' +
    '<div><b style="color:#fff;font-weight:600">Belo Horizonte — MG</b><br>Rua Espírito Santo, 616 — 11º andar<br>Centro, Belo Horizonte-MG</div>' +
    '<div style="margin-top:13px"><b style="color:#fff;font-weight:600">Matriz — Fortaleza</b><br>Av. Marcos Macedo, 655 — Sala 204<br>Aldeota, Fortaleza-CE</div>' +
    '<div style="margin-top:13px"><b style="color:#fff;font-weight:600">Filial — Fortaleza</b><br>Av. Santos Dumont, 2828 — Sala 14<br>Aldeota, Fortaleza-CE</div></div>' +
    "</div><div class=\"foot-bottom\"><span>© 2026 DRVMG. Todos os direitos reservados. Grupo Wolkmar.</span>" +
    '<span>Razão social <span class="ph">a confirmar</span> · CNPJ <span class="ph">a confirmar</span></span></div></div>';
  document.body.appendChild(footer);

  /* ---------------- BALÃO DE ATENDIMENTO ---------------- */
  var fab = document.createElement("div");
  fab.className = "fab";
  fab.innerHTML =
    '<div class="fab-toast" id="fabToast"><span class="x" id="fabToastX">&times;</span>' +
    "<b>Atendimento online</b><br>Tire suas dúvidas ou faça sua cotação agora 👋</div>" +
    '<button class="fab-btn" id="fabBtn" aria-label="Abrir atendimento"><span class="ring"></span>' + ICON.chat + '<span class="badge">1</span></button>';
  document.body.appendChild(fab);

  var chat = document.createElement("div");
  chat.className = "chat";
  chat.setAttribute("role", "dialog");
  chat.setAttribute("aria-label", "Atendimento online DRVMG");
  var opt = function (icon, title, href, ext) {
    return '<a class="chat-opt" href="' + href + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + '>' +
      '<span class="ci">' + icon + "</span>" + title + '<span class="arw">' + ICON.arw + "</span></a>";
  };
  chat.innerHTML =
    '<div class="chat-head"><div class="av">' + ICON.head + "</div><div><div style=\"font-weight:600\">DRVMG · Atendimento</div>" +
    '<div class="status"><span class="dot"></span> Online agora · responde na hora</div></div>' +
    '<button class="close" id="chatClose" aria-label="Fechar atendimento">' + ICON.x + "</button></div>" +
    '<div class="chat-body"><div class="chat-msg">Olá! 👋 Sou da equipe DRVMG. Como posso te ajudar hoje?</div>' +
    '<div class="chat-opts">' +
    opt(ICON.calc, "Fazer cotação online", "cotacao.html", false) +
    opt(ICON.user, "Plano individual ou familiar", wa("Olá! Quero uma cotação de plano individual/familiar."), true) +
    opt(ICON.biz, "Plano empresarial", wa("Olá! Quero uma cotação de plano empresarial para minha empresa."), true) +
    opt(ICON.head, "Falar com um consultor", wa("Olá! Gostaria de falar com um consultor da DRVMG."), true) +
    "</div></div>" +
    '<div class="chat-foot">Resposta em poucos minutos · seg a sáb</div>';
  document.body.appendChild(chat);

  var openChat = function () { chat.classList.add("open"); fab.style.display = "none"; };
  var closeChat = function () { chat.classList.remove("open"); fab.style.display = "flex"; };
  document.getElementById("fabBtn").addEventListener("click", openChat);
  document.getElementById("chatClose").addEventListener("click", closeChat);
  document.getElementById("fabToastX").addEventListener("click", function (e) { e.stopPropagation(); document.getElementById("fabToast").classList.remove("show"); });
  document.getElementById("fabToast").addEventListener("click", openChat);
  setTimeout(function () { if (!chat.classList.contains("open")) document.getElementById("fabToast").classList.add("show"); }, 3500);

  /* ---------------- POP-UP DE CAPTURA ---------------- */
  var modal = document.createElement("div");
  modal.className = "modal-ov";
  modal.innerHTML =
    '<div class="modal" role="dialog" aria-modal="true" aria-label="Receba a tabela Hapvida">' +
    '<button class="modal-close" id="popClose" aria-label="Fechar">' + ICON.x + "</button>" +
    '<div class="modal-aside"><span class="over">Tabela atualizada</span><h3>Receba os valores Hapvida no seu WhatsApp</h3>' +
    "<p>Preços de todos os planos — individual, familiar e empresarial — direto com um consultor certificado.</p>" +
    '<ul><li><span class="ck">' + ICON.check + "</span> Sem compromisso</li>" +
    '<li><span class="ck">' + ICON.check + "</span> Atendimento no mesmo dia</li>" +
    '<li><span class="ck">' + ICON.check + "</span> Corretora certificação diamante</li></ul></div>" +
    '<div class="modal-form"><div id="popFormWrap"><h4>Fale com um especialista</h4>' +
    '<p class="sub">Deixe seus dados e retornamos rapidinho.</p>' +
    '<form id="popForm" novalidate>' +
    '<div class="field"><label for="pn">Nome completo</label><input class="input" id="pn" name="nome" required placeholder="Seu nome"><span class="errmsg">Informe seu nome.</span></div>' +
    '<div class="field"><label for="pw">WhatsApp</label><input class="input" id="pw" name="whats" required inputmode="tel" placeholder="(85) 90000-0000"><span class="errmsg">Informe um WhatsApp válido.</span></div>' +
    '<div class="field"><label for="pt">Tipo de plano</label><select class="select" id="pt" name="tipo"><option>Individual ou familiar</option><option>Empresarial</option></select></div>' +
    '<button class="btn btn-orange btn-block btn-lg" type="submit">Quero receber a tabela</button>' +
    '<p style="font-size:12px;color:var(--gray-2);margin-top:12px;text-align:center">Ao enviar você fala com a gente pelo WhatsApp.</p></form></div>' +
    '<div class="form-ok" id="popOk"><div class="ok-ic">' + ICON.check + "</div><h4>Prontinho! 🎉</h4>" +
    '<p class="sub">Vamos te chamar no WhatsApp com a tabela atualizada.</p></div></div></div>';
  document.body.appendChild(modal);

  var closePop = function () { modal.classList.remove("open"); };
  var openPop = function () { modal.classList.add("open"); };
  document.getElementById("popClose").addEventListener("click", closePop);
  modal.addEventListener("click", function (e) { if (e.target === modal) closePop(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closePop(); closeChat(); mmenu.classList.remove("open"); } });

  document.getElementById("popForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, ok = true;
    ["pn", "pw"].forEach(function (id) {
      var el = document.getElementById(id), fld = el.closest(".field");
      if (!el.value.trim()) { fld.classList.add("invalid"); el.classList.add("err"); ok = false; }
      else { fld.classList.remove("invalid"); el.classList.remove("err"); }
    });
    if (!ok) return;
    var msg = "Olá! Sou " + f.nome.value + " e quero receber a tabela Hapvida (" + f.tipo.value + "). Meu WhatsApp: " + f.whats.value;
    document.getElementById("popFormWrap").style.display = "none";
    document.getElementById("popOk").style.display = "block";
    window.open(wa(msg), "_blank");
    try { localStorage.setItem("drvmg_popup", "1"); } catch (x) {}
  });

  // dispara uma vez por navegador, após 7s (só nas páginas de conteúdo)
  var noPop = document.body.hasAttribute("data-nopopup");
  var seen = false; try { seen = localStorage.getItem("drvmg_popup") === "1"; } catch (x) {}
  if (!noPop && !seen) setTimeout(function () { if (!modal.classList.contains("open")) { openPop(); try { localStorage.setItem("drvmg_popup", "1"); } catch (x) {} } }, 7000);
  // botões [data-popup] abrem o pop-up
  document.querySelectorAll("[data-popup]").forEach(function (b) { b.addEventListener("click", function (e) { e.preventDefault(); openPop(); }); });

  /* ---------------- COMPORTAMENTOS GERAIS ---------------- */
  // botões wa
  document.querySelectorAll("[data-wa]").forEach(function (b) {
    b.addEventListener("click", function () { window.open(wa(b.dataset.wa || "Olá! Vim pelo site da DRVMG."), "_blank"); });
  });
  // formulários simples → WhatsApp (candidatura, cotação da página de contato)
  document.querySelectorAll("form[data-waform]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (inp) {
        if (inp.offsetParent === null) return;
        var v = (inp.value || "").trim(), bad = !v;
        if (v && inp.type === "email") bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        var fld = inp.closest(".field"); if (fld) fld.classList.toggle("invalid", bad);
        inp.classList.toggle("err", bad); if (bad) ok = false;
      });
      if (!ok) return;
      var msg = (form.dataset.waform || "Contato pelo site DRVMG") + ":%0A";
      form.querySelectorAll("[data-label]").forEach(function (inp) {
        if (inp.value && inp.value.trim()) msg += "• " + inp.dataset.label + ": " + inp.value.trim() + "%0A";
      });
      window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(decodeURIComponent(msg)), "_blank");
      var okBox = form.parentElement.querySelector("[data-ok]");
      if (okBox) { form.style.display = "none"; okBox.style.display = "block"; }
    });
  });
  // opção-cartão (radio visual)
  document.addEventListener("click", function (e) {
    var o = e.target.closest(".opt");
    if (!o || !o.parentElement.classList.contains("opt-cards")) return;
    o.parentElement.querySelectorAll(".opt").forEach(function (x) { x.classList.remove("sel"); });
    o.classList.add("sel");
    var r = o.querySelector("input[type=radio]"); if (r) r.checked = true;
  });
  // FAQ
  document.querySelectorAll(".faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var it = q.closest(".faq-item"), a = it.querySelector(".faq-a");
      var open = it.classList.toggle("open");
      a.style.maxHeight = open ? a.scrollHeight + "px" : 0;
    });
  });
  // reveal
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll(".rv").forEach(function (el) { io.observe(el); });

  /* ---------------- WIZARD DE COTAÇÃO ---------------- */
  var wz = document.getElementById("quoteWizard");
  if (wz) initWizard(wz);

  function initWizard(root) {
    var steps = [].slice.call(root.querySelectorAll(".wz-step"));
    var fill = root.querySelector(".wz-fill");
    var meta = root.querySelector(".wz-meta .cur");
    var back = root.querySelector("[data-back]");
    var next = root.querySelector("[data-next]");
    var i = 0;

    function tipo() { var r = root.querySelector('input[name="tipo"]:checked'); return r ? r.value : ""; }
    function syncTipoBlocks() {
      var t = tipo();
      var pf = root.querySelector('[data-block="pf"]'), emp = root.querySelector('[data-block="emp"]');
      if (pf) pf.style.display = t === "Empresarial" ? "none" : "block";
      if (emp) emp.style.display = t === "Empresarial" ? "block" : "none";
    }
    root.addEventListener("change", function (e) { if (e.target.name === "tipo") syncTipoBlocks(); });

    // idades dinâmicas
    var ages = root.querySelector("#ages");
    if (ages) {
      var addBtn = root.querySelector("#addAge");
      function addAge() {
        var row = document.createElement("div");
        row.className = "age-row";
        row.innerHTML = '<input class="input age" type="number" min="0" max="120" placeholder="Idade">' +
          '<button type="button" class="rm" aria-label="Remover">' + ICON.x + "</button>";
        row.querySelector(".rm").addEventListener("click", function () { if (ages.children.length > 1) row.remove(); });
        ages.appendChild(row);
      }
      addBtn.addEventListener("click", addAge);
      addAge();
    }

    function validate() {
      var el = steps[i], ok = true;
      // grupos de opção obrigatórios visíveis
      el.querySelectorAll(".opt-cards[data-required]").forEach(function (g) {
        if (g.offsetParent === null) return;
        var sel = g.querySelector("input:checked");
        g.classList.toggle("grp-invalid", !sel);
        var w = g.parentElement.querySelector(".errmsg"); if (w) w.style.display = sel ? "none" : "block";
        if (!sel) ok = false;
      });
      // inputs obrigatórios visíveis
      el.querySelectorAll("[required]").forEach(function (inp) {
        if (inp.offsetParent === null) { inp.closest(".field") && inp.closest(".field").classList.remove("invalid"); return; }
        var v = inp.value.trim(), bad = !v;
        if (v && inp.type === "email") bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        var fld = inp.closest(".field"); if (fld) fld.classList.toggle("invalid", bad);
        inp.classList.toggle("err", bad);
        if (bad) ok = false;
      });
      // idades (pelo menos uma) quando visível
      if (ages && ages.offsetParent !== null) {
        var filled = [].slice.call(ages.querySelectorAll(".age")).some(function (a) { return a.value.trim() !== ""; });
        var warn = root.querySelector("#agesWarn"); if (warn) warn.style.display = filled ? "none" : "block";
        if (!filled) ok = false;
      }
      return ok;
    }

    function show() {
      steps.forEach(function (s, k) { s.classList.toggle("active", k === i); });
      fill.style.width = ((i + 1) / steps.length * 100) + "%";
      if (meta) meta.textContent = i + 1;
      back.style.visibility = i === 0 ? "hidden" : "visible";
      next.textContent = i >= steps.length - 2 ? "Ver resumo" : "Avançar";
      if (i === steps.length - 1) { next.style.display = "none"; back.style.visibility = "hidden"; }
      else { next.style.display = "inline-flex"; }
      var nav = root.querySelector(".wz-nav"); if (nav) nav.style.display = i === steps.length - 1 ? "none" : "flex";
      root.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function collect() {
      var t = tipo();
      var d = { "Tipo de plano": t };
      if (t === "Empresarial") {
        d["Nº de vidas"] = (root.querySelector("#vidas") || {}).value || "—";
        d["CNPJ"] = (root.querySelector("#cnpj") || {}).value || "—";
      } else {
        var arr = [].slice.call(ages.querySelectorAll(".age")).map(function (a) { return a.value.trim(); }).filter(Boolean);
        d["Vidas"] = arr.length + " pessoa(s)";
        d["Idades"] = arr.join(", ") || "—";
      }
      var g = function (name) { var r = root.querySelector('input[name="' + name + '"]:checked'); return r ? r.value : "—"; };
      d["Cidade"] = (root.querySelector("#cidade") || {}).value || "—";
      d["Acomodação"] = g("acomodacao");
      d["Coparticipação"] = g("copart");
      d["Odontológico"] = g("odonto");
      d["Nome"] = (root.querySelector("#wn") || {}).value || "—";
      d["WhatsApp"] = (root.querySelector("#ww") || {}).value || "—";
      var em = (root.querySelector("#we") || {}).value; if (em) d["E-mail"] = em;
      return d;
    }

    function fillSummary() {
      var d = collect(), box = root.querySelector("#wzSummary"), html = "";
      Object.keys(d).forEach(function (k) { html += '<div class="srow"><span>' + k + "</span><span>" + d[k] + "</span></div>"; });
      box.innerHTML = html;
    }

    back.addEventListener("click", function () { if (i > 0) { i--; show(); } });
    next.addEventListener("click", function () {
      if (!validate()) return;
      if (i === steps.length - 2) fillSummary();
      if (i < steps.length - 1) { i++; show(); }
    });

    var sendBtn = root.querySelector("#wzSend");
    if (sendBtn) sendBtn.addEventListener("click", function () {
      var d = collect(), msg = "Olá! Quero uma cotação de plano de saúde Hapvida:%0A";
      Object.keys(d).forEach(function (k) { msg += "• " + k + ": " + d[k] + "%0A"; });
      window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(decodeURIComponent(msg)), "_blank");
      root.querySelector("#wzForm").style.display = "none";
      root.querySelector("#wzDone").style.display = "block";
    });

    syncTipoBlocks();
    show();
  }
})();
