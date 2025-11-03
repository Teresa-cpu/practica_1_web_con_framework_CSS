document.addEventListener('DOMContentLoaded', function() {
  // ---------------------------
  // SEGURIDAD: GSAP cargado
  // ---------------------------
  if (typeof gsap === 'undefined') {
    console.warn('GSAP no cargado. Comprueba que los <script> de GSAP están antes de marcas.js');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // ---------------------------
  // LENIS: Scroll suave
  // ---------------------------
  const lenis = new Lenis({
    duration: 1.3,
    smoothWheel: true,
    smoothTouch: false,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  });

  // Actualiza ScrollTrigger con el scroll de Lenis
  lenis.on('scroll', ScrollTrigger.update);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // ---------------------------
  // ANIMACIÓN DE TARJETAS (Aparición)
  // ---------------------------
  const cards = document.querySelectorAll('.card-marcas');

  function checkCards() {
    const windowHeight = window.innerHeight;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const visible = rect.top < windowHeight - 100 && rect.bottom > 100;

      card.classList.toggle('visible', visible);
    });
  }

  // Usamos Lenis para detectar el scroll
  lenis.on('scroll', checkCards);
  checkCards();

  // ---------------------------
  // ANIMACIÓN DE TÍTULOS HEADER
  // ---------------------------
  gsap.fromTo(".letra-video h1",
    { y: 80, opacity: 0, scale: 0.95 },
    {
      y: 0, opacity: 1, scale: 1,
      ease: "power3.out",
      duration: 1.2,
      scrollTrigger: {
        trigger: ".letra-video",
        start: "top 85%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse"
      }
    }
  );

  gsap.from(".letra-video #texto-pequeño-video", {
    y: 30,
    opacity: 0,
    delay: 0.15,
    duration: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".letra-video",
      start: "top 88%",
      toggleActions: "play reverse play reverse"
    }
  });

  // ---------------------------
  // REFRESCO DE ScrollTrigger
  // ---------------------------
  function refreshAfterLoad() {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      checkCards();
      console.log('ScrollTrigger y tarjetas refrescados');
    });
  }

  window.addEventListener('load', refreshAfterLoad);

  const video = document.getElementById('video-fondo-marcas');
  if (video) {
    video.addEventListener('loadedmetadata', refreshAfterLoad);
  }
});
