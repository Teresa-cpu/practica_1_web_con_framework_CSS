//   ANIMACION TITULOS HEADER 

document.addEventListener('DOMContentLoaded', function() {
    if (typeof gsap === 'undefined') {
      console.warn('GSAP no cargado. Comprueba que los <script> de GSAP están antes de home.js');
      return;
    }
  
    gsap.registerPlugin(ScrollTrigger);
  
    // ScrollTrigger está activo
    console.log('GSAP y ScrollTrigger activos:', gsap ? true : false, typeof ScrollTrigger !== 'undefined');
  
    // Animación del H1
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
          toggleActions: "play reverse play reverse",
          onEnter: () => console.log('H1 onEnter fired'),
          onEnterBack: () => console.log('H1 onEnterBack fired'),
          onLeave: () => console.log('H1 onLeave fired'),
          onLeaveBack: () => console.log('H1 onLeaveBack fired')
        }
      }
    );
  
    // párrafo pequeño
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
  
    // FORZAR refresh cuando todo cargue
    function refreshAfterLoad() {
      // espera un tick y fuerza el refresh
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        console.log('ScrollTrigger refresh ejecutado');
      });
    }
  
    // refresca al cargar la ventana 
    window.addEventListener('load', refreshAfterLoad);
  
    // si el vídeo existe, refresca cuando metadata cargue (tamaño)
    const video = document.getElementById('video-fondo-marcas');
    if (video) {
      video.addEventListener('loadedmetadata', function() {
        console.log('video loadedmetadata -> refrescando ScrollTrigger');
        refreshAfterLoad();
      });
    }
  });

  
// APARICION TEXTO E IMAGENES EN TRAJETAS

  const cards = gsap.utils.toArray(".card-home");

cards.forEach(card => {
  const img = card.querySelector("img");
  const body = card.querySelector(".card-body-home");

  gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  })
  .from(img, {x: -40, opacity: 0, duration: 0.8, ease: "power3.out"})
  .from(body, {x: 40, opacity: 0, duration: 0.8, ease: "power3.out"}, "-=0.5");
});

  
// LOGOS

    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);

    
    const logos = document.querySelectorAll(".logos-slide img");

// HOVER ZOOM EN LOGOS 

logos.forEach(logo => {
  logo.addEventListener("mouseenter", () => {
    gsap.to(logo, { scale: 1.2, duration: 0.3, ease: "power2.out" });
  });
  logo.addEventListener("mouseleave", () => {
    gsap.to(logo, { scale: 1, duration: 0.3, ease: "power2.inOut" });
  });
});


// Inicializa Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Sincroniza con ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.from(".text-section", {
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top 80%",
  },
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".image-section img", {
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top 70%",
  },
  scale: 1.2,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out"
});



