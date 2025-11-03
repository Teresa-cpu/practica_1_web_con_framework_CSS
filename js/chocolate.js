document.addEventListener('DOMContentLoaded', function() {
  // ---------------------------
  // VERIFICAR GSAP
  // ---------------------------
  if (typeof gsap === 'undefined') {
    console.warn('GSAP no cargado. Comprueba que los <script> de GSAP están antes de chocolate.js');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // ---------------------------
  // LENIS: SCROLL SUAVE
  // ---------------------------
  const lenis = new Lenis({
    duration: 1.3,
    smoothWheel: true,
    smoothTouch: false,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  });

  lenis.on('scroll', ScrollTrigger.update);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // ---------------------------
  // ANIMACIÓN TÍTULO PRINCIPAL
  // ---------------------------
  gsap.fromTo(".letra-video h1",
    { y: 80, opacity: 0, scale: 0.95 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
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
  // ANIMACIÓN LOGOS CHOCOLATE
  // ---------------------------
  gsap.utils.toArray(".img-choco a").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%"
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,
      ease: "power2.out"
    });
  });

  gsap.from(".marcas-choco h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".marcas-choco",
      start: "top 85%"
    }
  });

  // ---------------------------
  // "DELEITAMOS TU PALADAR"
  // ---------------------------
  gsap.from(".hero-section-choco .text-section", {
    scrollTrigger: {
      trigger: ".hero-section-choco",
      start: "top 80%"
    },
    x: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".hero-section-choco .image-section", {
    scrollTrigger: {
      trigger: ".hero-section-choco",
      start: "top 80%"
    },
    x: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.3
  });

  // ---------------------------
  // BOTÓN "VER MÁS"
  // ---------------------------
  gsap.from(".btn-chocolate", {
    scrollTrigger: {
      trigger: ".btn-chocolate",
      start: "top 90%"
    },
    scale: 0.7,
    opacity: 0,
    ease: "back.out(1.7)",
    duration: 1
  });

  // ---------------------------
  // CACAO SOSTENIBLE
  // ---------------------------
  gsap.from(".hero-section-choco-sost .text-section", {
    scrollTrigger: {
      trigger: ".hero-section-choco-sost",
      start: "top 80%"
    },
    x: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".hero-section-choco-sost .image-section", {
    scrollTrigger: {
      trigger: ".hero-section-choco-sost",
      start: "top 80%"
    },
    x: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.3
  });

  // ---------------------------
  // REFRESCAR ANIMACIONES
  // ---------------------------
  function refreshAll() {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      console.log('ScrollTrigger refrescado con Lenis activo');
    });
  }

  window.addEventListener('load', refreshAll);

  const video = document.getElementById('video-fondo-marcas');
  if (video) {
    video.addEventListener('loadedmetadata', refreshAll);
  }
});
