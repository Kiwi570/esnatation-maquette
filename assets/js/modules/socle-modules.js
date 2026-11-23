/* Pont entre les modules de la bibliothèque et le socle du projet : GSAP est déjà chargé par la page,
   les mesures et le recalcul regroupé des déclencheurs viennent du socle. */
import { rafraichir } from '../socle/mesures.js?v=1';

export async function pret() {
  if (!window.gsap) await new Promise((ok) => { const t = setInterval(() => { if (window.gsap) { clearInterval(t); ok(); } }, 30); setTimeout(() => { clearInterval(t); ok(); }, 3000); });
  return { gsap: window.gsap, ScrollTrigger: window.ScrollTrigger, calme: false, lenis: null, rafraichir, get telephone() { return innerWidth < 700; } };
}
