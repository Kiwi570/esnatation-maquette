/* Effets propres à ESN (les effets génériques viennent de la bibliothèque du socle, posés par attributs).
   - caustiques : reflets de lumière en WebGL léger (ouverture de l'accueil, appel final) ;
   - ligne-d-eau : flotteurs qui ondulent selon la vitesse de défilement ; petit poisson qui parcourt les 10 levels ;
   - poisson : le poisson du logo se trace dans l'intro, ses ronds dans l'eau, puis il glisse jusqu'à la page ;
   - cycles : la barre de l'année scolaire se remplit jusqu'à aujourd'hui, statuts recalculés à l'heure de Zurich ;
   - bande-photos : les photos de groupes glissent à l'horizontale pendant que la section passe (sans épinglage). */
import { demarrer, boucle, etat, versObjet, quand } from './socle/index.js?v=2';

const gsap = window.gsap;
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const typo = (s) => s.replace(/ ([:;!?])/g, ' $1').replace(/(\d) (h|min)\b/g, '$1 $2');

/* ---------- Cycles : recalculés à la date du jour (Zurich), avant toute découpe de texte ---------- */
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
function aujourdhui() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Zurich', year: 'numeric', month: 'numeric', day: 'numeric' })
    .formatToParts(new Date()).filter((x) => x.type !== 'literal').map((x) => [x.type, +x.value]));
  return { a: p.year, m: p.month, j: p.day };
}
function calculerCycles() {
  const { a, m, j } = aujourdhui();
  const debut = m >= 7 ? a : a - 1;
  const liste = [{ cle: 'automne', de: 9, a: 12, annee: debut }, { cle: 'hiver', de: 1, a: 3, annee: debut + 1 }, { cle: 'printemps', de: 4, a: 6, annee: debut + 1 }];
  const courant = liste.find((c) => c.annee === a && m >= c.de && m <= c.a) || null;
  const i = courant ? liste.indexOf(courant) : -1;
  const prochain = i === -1 ? liste[0] : i < 2 ? liste[i + 1] : { cle: 'automne', de: 9, a: 12, annee: debut + 1 };
  liste.forEach((c, k) => { c.statut = c === courant ? 'enCours' : c === prochain ? 'prochain' : k > i ? 'ensuite' : 'passe'; });
  const rang = m >= 9 ? m - 9 : m + 3;
  const jours = new Date(a, m, 0).getDate();
  const progres = m === 7 || m === 8 ? 0 : Math.min(1, (rang + (j - 1) / jours) / 10);
  return { liste, prochain, progres, texte: `${MOIS[prochain.de - 1]} – ${MOIS[prochain.a - 1]} ${prochain.annee}` };
}
const CY = calculerCycles();
$$('[data-prochain][data-modele]').forEach((el) => { el.textContent = typo(el.dataset.modele.replace('{prochain}', CY.texte)); });
$$('[data-prochain-mois]').forEach((el) => { el.textContent = MOIS[CY.prochain.de - 1]; });
$$('[data-cycles]').forEach((bloc) => {
  const libelles = JSON.parse(bloc.dataset.libelles || '{}');
  CY.liste.forEach((c) => {
    const li = bloc.querySelector(`[data-cycle="${c.cle}"]`);
    if (!li) return;
    li.dataset.statut = c.statut;
    const s = li.querySelector('[data-cycle-statut]'), an = li.querySelector('[data-cycle-annee]');
    if (s && libelles[c.statut]) s.textContent = libelles[c.statut];
    if (an) an.textContent = c.annee;
  });
  bloc.style.setProperty('--progres', '0');
});

/* ---------- caustiques : WebGL léger, plafonné, en pause hors écran ---------- */
const VERT = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
const FRAG = `precision mediump float;uniform vec2 r;uniform float t;uniform vec3 c;uniform float a;uniform float s;
void main(){vec2 uv=gl_FragCoord.xy/r.y;vec2 p=uv*6.2831*s-250.;vec2 i=p;float k=1.;float n=.005;
for(int j=0;j<4;j++){float tt=t*(1.-(3.5/float(j+1)));i=p+vec2(cos(tt-i.x)+sin(tt+i.y),sin(tt-i.y)+cos(tt+i.x));
k+=1./length(vec2(p.x/(sin(i.x+tt)/n),p.y/(cos(i.y+tt)/n)));}
k/=4.;k=1.17-pow(k,1.4);float v=clamp(pow(abs(k),8.),0.,1.);gl_FragColor=vec4(c*v*a,v*a);}`;
function caustiques(canvas) {
  if (/[?&]sanswebgl\b/.test(location.search)) return;
  const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, powerPreference: 'low-power' });
  if (!gl) return;
  const sh = (type, src) => { const x = gl.createShader(type); gl.shaderSource(x, src); gl.compileShader(x); return x; };
  const prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG)); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const lp = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(lp); gl.vertexAttribPointer(lp, 2, gl.FLOAT, false, 0, 0);
  const U = (n) => gl.getUniformLocation(prog, n);
  const appel = canvas.dataset.caustiques === 'appel';
  gl.uniform3fv(U('c'), appel ? [1, 1, 1] : [0.16, 0.62, 0.8]);
  gl.uniform1f(U('a'), appel ? 0.2 : 0.5);
  const tel = matchMedia('(max-width: 760px)').matches;
  gl.uniform1f(U('s'), tel ? 1.5 : 1.25);
  let qualite = tel ? 0.6 : 0.75, w = 0, h = 0, moyenne = 16, cumul = 0;
  const taille = () => {
    const d = Math.min(window.devicePixelRatio || 1, tel ? 1 : 1.25) * qualite;
    w = Math.max(1, Math.round(canvas.clientWidth * d)); h = Math.max(1, Math.round(canvas.clientHeight * d));
    canvas.width = w; canvas.height = h; gl.viewport(0, 0, w, h); gl.uniform2f(U('r'), w, h);
  };
  taille();
  new ResizeObserver(taille).observe(canvas);
  canvas.dataset.effet = 'caustiques';
  boucle(canvas, (dt, t) => {
    cumul += dt;
    if (cumul < 1 / 61) return; /* 60 images par seconde au plus */
    moyenne = moyenne * 0.92 + cumul * 1000 * 0.08; cumul = 0;
    if (moyenne > 24 && qualite > 0.3) { qualite -= 0.1; moyenne = 16; taille(); }
    gl.uniform1f(U('t'), t * 0.45 + 23);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }, { lourde: true });
}

/* ---------- ligne-d-eau : flotteurs qui ondulent, plus fort quand on défile vite ---------- */
let vitesse = 0, dernierY = window.scrollY, dernierT = performance.now();
window.addEventListener('scroll', () => {
  const t = performance.now(), y = window.scrollY;
  const v = Math.abs(y - dernierY) / Math.max(8, t - dernierT);
  vitesse = Math.min(1, Math.max(vitesse, v * 0.35));
  dernierY = y; dernierT = t;
}, { passive: true });
function lignesEau() {
  $$('[data-ligne-eau]').forEach((ligne) => {
    const enfants = [...ligne.children];
    let amp = 0;
    boucle(ligne, (dt, t) => {
      vitesse *= Math.pow(0.12, dt);
      amp += ((1.6 + vitesse * 9) - amp) * Math.min(1, dt * 6);
      enfants.forEach((e, i) => { e.style.transform = `translate3d(0, ${(Math.sin(t * 2.3 + i * 0.62) * amp).toFixed(2)}px, 0) rotate(${(Math.cos(t * 1.7 + i * 0.5) * amp * 0.6).toFixed(2)}deg)`; });
    });
  });
}

/* ---------- Le petit poisson parcourt les 10 levels ; le groupe sous lui s'allume ---------- */
function couloir() {
  const section = document.querySelector('[data-groupes]');
  if (!section || !window.ScrollTrigger) return;
  const piste = section.querySelector('[data-couloir]'), poisson = section.querySelector('[data-couloir-poisson]');
  const cartes = $$('[data-groupe-carte]', section), etiquettes = $$('[data-couloir-groupe]', section);
  const bornes = [1, 2, 4, 7, 9];
  let largeur = 0, actif = -1;
  const mesurer = () => { largeur = piste.clientWidth; };
  mesurer();
  const allumer = (n) => {
    if (n === actif) return;
    actif = n;
    cartes.forEach((c, i) => c.classList.toggle('actif', i === n));
    etiquettes.forEach((c, i) => c.classList.toggle('actif', i === n));
  };
  poisson.dataset.effet = 'ligne-d-eau';
  window.ScrollTrigger.create({
    trigger: piste, start: 'top 80%', end: () => `+=${Math.max(320, window.innerHeight * 0.55)}`, scrub: 0.6, invalidateOnRefresh: true,
    onRefresh: mesurer,
    onUpdate: (st) => {
      const p = st.progress;
      gsap.set(poisson, { x: (0.05 + p * 0.9) * largeur, xPercent: -50, rotate: Math.sin(p * 18) * 6 });
      const level = Math.min(10, Math.floor(p * 9.999) + 1);
      let n = 0; bornes.forEach((b, i) => { if (level >= b) n = i; });
      allumer(n);
    },
  });
  gsap.set(poisson, { x: 0.05 * largeur, xPercent: -50 });
  allumer(0);
}

/* ---------- bande-photos : glisse à l'horizontale avec le défilement, sans épinglage ---------- */
function bandesPhotos() {
  if (!window.ScrollTrigger) return;
  $$('[data-bande-photos]').forEach((bande) => {
    const piste = bande.querySelector('.bande-piste');
    bande.removeAttribute('tabindex'); bande.removeAttribute('role'); bande.removeAttribute('aria-label');
    gsap.fromTo(piste, { x: 0 }, {
      x: () => -Math.max(0, piste.scrollWidth - bande.clientWidth), ease: 'none',
      scrollTrigger: { trigger: bande, start: 'top bottom', end: 'bottom top', scrub: 0.5, invalidateOnRefresh: true },
    });
  });
}

/* ---------- cycles : la barre se remplit jusqu'à aujourd'hui ---------- */
function barreCycles() {
  $$('[data-cycles]').forEach((bloc) => {
    if (!window.ScrollTrigger || etat.arrivee === 'retour') { bloc.style.setProperty('--progres', String(CY.progres)); return; }
    const o = { v: 0 };
    window.ScrollTrigger.create({
      trigger: bloc, start: 'top 85%', once: true,
      onEnter: () => gsap.to(o, { v: CY.progres, duration: 1.6, ease: 'power2.out', onUpdate: () => bloc.style.setProperty('--progres', o.v.toFixed(4)) }),
    });
  });
}

/* ---------- Les cours : sélecteur de level sur la ligne d'eau ---------- */
function selecteur() {
  const bloc = document.querySelector('[data-selecteur]');
  if (!bloc) return;
  const boutons = $$('button[data-level]', bloc), panneaux = $$('[data-panneau]', bloc);
  const choisir = (b, anime = true) => {
    boutons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    const g = b.dataset.groupe;
    panneaux.forEach((p) => { p.hidden = p.dataset.panneau !== g; });
    const p = panneaux.find((x) => !x.hidden);
    if (p && gsap && anime) gsap.fromTo(p, { y: 8 }, { y: 0, duration: 0.35, ease: 'power2.out' });
  };
  boutons.forEach((b) => b.addEventListener('click', () => choisir(b)));
  const depart = new URLSearchParams(location.search).get('level');
  choisir(boutons.find((b) => b.dataset.level === depart) || boutons[0], false);
}

/* ---------- Inscription : module « formulaire par étapes » de la bibliothèque ---------- */
async function inscription() {
  const root = document.querySelector('[data-module="formulaire-par-etapes"]');
  if (!root) return;
  const groupe = new URLSearchParams(location.search).get('groupe');
  if (groupe) { const r = root.querySelector(`input[name="groupe"][value="${CSS.escape(groupe)}"]`); if (r) r.checked = true; }
  const { init } = await import('./modules/formulaire-par-etapes.js?v=2');
  await init(root, { sujet: 'Demande d\'inscription' });
  root.addEventListener('formulaire:envoye', () => {
    const fin = root.querySelector('.fpe__fin');
    if (fin) requestAnimationFrame(() => fin.scrollIntoView({ block: 'center' }));
  });
}


/* ---------- v2 : ronds dans l'eau au clic ou au toucher, partout ---------- */
function rond(x, y, parent, local) {
  const r = document.createElement('span');
  r.className = 'rond-eau' + (local ? ' rond-eau--local' : '');
  r.setAttribute('aria-hidden', 'true'); r.setAttribute('data-audit-ignorer', ''); r.setAttribute('data-ephemere', '');
  r.style.left = x + 'px'; r.style.top = y + 'px';
  parent.appendChild(r);
  const a = r.animate([{ transform: 'scale(.15)', opacity: 0.95 }, { transform: 'scale(1.9)', opacity: 0 }], { duration: local ? 900 : 650, easing: 'cubic-bezier(.2,.7,.3,1)' });
  a.onfinish = () => r.remove();
  setTimeout(() => r.remove(), 1400);
}
function rondsDansLEau() {
  document.addEventListener('pointerdown', (e) => {
    if (e.button > 0 || e.target.closest('input, select, textarea, label')) return;
    rond(e.clientX, e.clientY, document.body, false);
  }, { passive: true });
  /* Le bassin de l'accueil : on survole l'eau, elle fait des ronds (souris seulement, quelques-uns par seconde). */
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  $$('[data-eau-touche]').forEach((fig) => {
    let dernier = 0;
    fig.addEventListener('pointermove', (e) => {
      const t = performance.now();
      if (t - dernier < 140) return;
      dernier = t;
      const b = fig.getBoundingClientRect();
      rond(e.clientX - b.left, e.clientY - b.top, fig, true);
    }, { passive: true });
  });
}

/* ---------- bouées : elles tournent quand l'équipe passe à l'écran ---------- */
function bouees() {
  if (!window.ScrollTrigger) return;
  $$('[data-bouees]').forEach((liste) => {
    const b = $$('.bouee', liste);
    liste.dataset.effet = 'bouees';
    window.ScrollTrigger.create({
      trigger: liste, start: 'top bottom', end: 'bottom top', scrub: 0.6,
      onUpdate: (st) => b.forEach((x, i) => x.style.setProperty('--tour', `${((st.progress - 0.5) * 240 * (i % 2 ? -1 : 1)).toFixed(1)}deg`)),
    });
  });
}

/* ---------- hublot du prix : la vague ondule, les bulles montent ---------- */
function hublot() {
  const svg = document.querySelector('[data-hublot]');
  if (!svg) return;
  const v1 = svg.querySelector('.vague--1'), v2 = svg.querySelector('.vague--2');
  const disque = svg.parentElement, bulles = $$('.bulle', disque);
  const chemin = (base, A, k, ph) => {
    let d = `M0 ${(base + A * Math.sin(ph)).toFixed(1)}`;
    for (let x = 20; x <= 400; x += 20) d += ` L${x} ${(base + A * Math.sin(k * x + ph)).toFixed(1)}`;
    return d + ' V140 H0 Z';
  };
  boucle(disque, (dt, t) => {
    v1.setAttribute('d', chemin(38, 9, 0.022, t * 1.6));
    v2.setAttribute('d', chemin(52, 7, 0.028, -t * 1.2 + 1.3));
    bulles.forEach((b, i) => {
      const p = ((t * (0.18 + i * 0.05) + i * 0.33) % 1);
      b.style.transform = `translate3d(${(Math.sin(t * 2 + i) * 6).toFixed(1)}px, ${(-p * 140).toFixed(1)}px, 0)`;
      b.style.opacity = String((1 - p) * 0.9);
    });
  });
}

/* ---------- appel final : les bulles montent avec le défilement ---------- */
function bullesAppel() {
  if (!window.ScrollTrigger) return;
  $$('[data-bulles]').forEach((bloc) => {
    const bulles = $$('span', bloc);
    let h = 0;
    window.ScrollTrigger.create({
      trigger: bloc, start: 'top bottom', end: 'bottom top', scrub: 0.4, invalidateOnRefresh: true,
      onRefresh: () => { h = bloc.clientHeight; },
      onUpdate: (st) => bulles.forEach((b, i) => {
        const t = parseFloat(b.style.getPropertyValue('--t')) || 1, d = parseFloat(b.style.getPropertyValue('--d')) || 0;
        const p = Math.max(0, st.progress * (0.7 + t * 0.6) - d);
        b.style.transform = `translate3d(${(Math.sin(p * 9 + i) * 10).toFixed(1)}px, ${(-p * (h + 60)).toFixed(1)}px, 0)`;
      }),
    });
    h = bloc.clientHeight;
  });
}

/* ---------- contact : le lac ondule, le repère de la piscine fait des ronds ---------- */
function planContact() {
  const lac = document.querySelector('[data-vague-lac]');
  if (!lac) return;
  const vagues = $$('.lac-vague', lac), ondes = $$('.plan-onde');
  const svg = lac.ownerSVGElement;
  svg.dataset.effet = 'plan-lac';
  boucle(svg, (dt, t) => {
    vagues.forEach((v, i) => v.setAttribute('transform', `translate(${(Math.sin(t * 0.9 + i * 1.3) * (6 + i * 3)).toFixed(1)} ${(Math.cos(t * 0.7 + i) * 1.5).toFixed(1)})`));
    ondes.forEach((o, i) => {
      const p = (t * 0.6 + i * 0.5) % 1;
      o.style.transform = `scale(${(1 + p * 1.6).toFixed(3)})`;
      o.style.opacity = String((1 - p) * 0.8);
    });
  });
}

/* ---------- inscription : le poisson arrive quand la demande est prête ---------- */
function finInscription() {
  const root = document.querySelector('[data-module="formulaire-par-etapes"]');
  if (!root || !gsap) return;
  root.addEventListener('formulaire:envoye', () => {
    requestAnimationFrame(() => {
      const fin = root.querySelector('.fpe__fin');
      if (!fin) return;
      gsap.fromTo(fin.querySelector('.fin-poisson'), { x: -120, rotate: -14, opacity: 0 }, { x: 0, rotate: 0, opacity: 1, duration: 0.9, ease: 'back.out(1.7)' });
      gsap.fromTo(fin.querySelectorAll('.fin-rond'), { scale: 0.2, opacity: 0.9 }, { scale: 1.8, opacity: 0, duration: 1.1, stagger: 0.2, ease: 'power2.out', delay: 0.55 });
    });
  });
}

/* ---------- méthode : le poisson descend le parcours, les étapes s'allument ---------- */
function parcoursPoisson() {
  const bloc = document.querySelector('[data-parcours]');
  if (!bloc || !window.ScrollTrigger) return;
  const poisson = bloc.querySelector('[data-parcours-poisson]'), etapes = $$('.parcours-etapes li', bloc);
  let hauteur = 0, tops = [];
  const mesurer = () => { hauteur = bloc.clientHeight; tops = etapes.map((e) => e.offsetTop); };
  mesurer();
  bloc.dataset.effet = 'parcours';
  gsap.set(poisson, { y: 0, rotate: 90 });
  window.ScrollTrigger.create({
    trigger: bloc, start: 'top 70%', end: 'bottom 45%', scrub: 0.5, invalidateOnRefresh: true, onRefresh: mesurer,
    onToggle: (st) => bloc.classList.toggle('en-route', st.isActive || st.progress > 0),
    onUpdate: (st) => {
      const y = st.progress * Math.max(0, (tops[tops.length - 1] || 0));
      gsap.set(poisson, { y, rotate: 90 + Math.sin(st.progress * 14) * 12 });
      etapes.forEach((e, i) => e.classList.toggle('atteinte', y + 22 >= tops[i]));
    },
  });
}

/* ---------- Intro : le poisson se trace, ses ronds dans l'eau, il glisse jusqu'à la page ---------- */
function entree(tl, t0) {
  const h1 = $$('h1[data-anime="gsap"]'), lignes = $$('.titre-ligne'), autres = $$('[data-anime="gsap"]:not(h1):not(.hero-carte)'), carte = $$('.hero-carte');
  if (h1.length) tl.set(h1, { opacity: 1 }, t0);
  if (lignes.length) tl.fromTo(lignes, { y: 0, yPercent: 125 }, { y: 0, yPercent: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out' }, t0);
  if (autres.length) tl.fromTo(autres, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.07, ease: 'power3.out' }, t0 + 0.15);
  if (carte.length) tl.fromTo(carte, { y: 40, opacity: 0, rotate: 3 }, { y: 0, opacity: 1, rotate: -4, duration: 0.8, ease: 'back.out(1.6)' }, t0 + 0.3);
  return tl;
}

demarrer({
  preparer() {
    $$('[data-caustiques]').forEach(caustiques);
    lignesEau();
    couloir();
    bandesPhotos();
    barreCycles();
    selecteur();
    inscription();
    rondsDansLEau();
    bouees();
    hublot();
    bullesAppel();
    planContact();
    finInscription();
    parcoursPoisson();
  },
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const trait = document.querySelector('.poisson-trait');
    if (trait) {
      const L = Math.ceil(trait.getTotalLength());
      tl.set(trait, { strokeDasharray: L, strokeDashoffset: L, fillOpacity: 0 }, 0)
        .to(trait, { strokeDashoffset: 0, duration: 0.75, ease: 'power2.inOut' }, 0.05)
        .to(trait, { fillOpacity: 1, duration: 0.3 }, 0.6);
    }
    if (document.querySelector('.ouverture-goutte')) tl.fromTo('.ouverture-goutte', { y: 0, opacity: 1 }, { y: 46, opacity: 0, duration: 0.55, stagger: 0.12, ease: 'power2.in' }, 0.7)
      .fromTo('.ouverture-rond', { scale: 0.2, opacity: 0.9 }, { scale: 2.8, opacity: 0, duration: 0.85, stagger: 0.14, ease: 'power2.out' }, 0.85)
      .to('.ouverture-nom, .ouverture-ligne', { opacity: 0, y: -8, duration: 0.25 }, 1.0);
    versObjet(tl, { a: 1.1, duree: 0.5, ouverture: 0.8 });
    return entree(tl, 1.7);
  },
  etatFinal() {
    if (!gsap) return;
    if ($$('.titre-ligne').length) gsap.set('.titre-ligne', { y: 0, yPercent: 0 });
    if ($$('[data-anime="gsap"]').length) gsap.set('[data-anime="gsap"]', { opacity: 1, y: 0 });
    if ($$('.hero-carte').length) gsap.set('.hero-carte', { rotate: -4 });
  },
  arrivee() {
    if (!gsap) return;
    entree(gsap.timeline(), 0.12);
  },
});

quand('pret', () => { document.documentElement.classList.add('esn-pret'); });
