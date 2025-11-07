//   ANIMACION TITULOS HEADER 

document.addEventListener('DOMContentLoaded', function() {
    if (typeof gsap === 'undefined') {
      console.warn('GSAP no cargado. Comprueba que los <script> de GSAP están antes de extrafino.js');
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
  

// LENIS + SCROLLTRIGGER
const lenis = new Lenis({
  duration: 1.2, 
  smooth: true,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ANIMACIÓN HERO EXTRAFINO
gsap.from(".hero-section-choco .text-section", {
  scrollTrigger: {
    trigger: ".hero-section-choco",
    start: "top 80%",
  },
  x: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-section-choco .image-section", {
  scrollTrigger: {
    trigger: ".hero-section-choco",
    start: "top 80%",
  },
  x: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  delay: 0.3
});


// extrafino fav
gsap.from(".extrafino-elegir h1", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".extrafino-elegir",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".extrafino-elegir p", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  delay: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".extrafino-elegir",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
});

// ANIMACION TABLETAS CHOCO
gsap.from(".extrafino-elegir img", {
  scrollTrigger: {
    trigger: ".extrafino-elegir",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  scale: 0.9,
  duration: 1.4,
  ease: "power2.out",
  stagger: {
    each: 0.15,
    from: "left"
  }
});


// Animación sección "¿TE APETECE ALGO MÁS?"
gsap.from(".extrafino-apetecer h1", {
  scrollTrigger: {
    trigger: ".extrafino-apetecer",
    start: "center bottom",   
    end: "bottom top",
    toggleActions: "play none none reverse",
    once: true               
  },
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

// Botón izquierdo (MARCAS)
gsap.from(".extrafino-apetecer .btn-cards-extrafino:first-child", {
  scrollTrigger: {
    trigger: ".extrafino-apetecer",
    start: "center bottom",
    end: "bottom top",
    toggleActions: "play none none reverse",
    once: true
  },
  x: -120,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
  delay: 0.3
});

// Botón derecho (CHOCOLATES)
gsap.from(".extrafino-apetecer .btn-cards-extrafino:last-child", {
  scrollTrigger: {
    trigger: ".extrafino-apetecer",
    start: "center bottom",
    end: "bottom top",
    toggleActions: "play none none reverse",
    once: true
  },
  x: 120,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
  delay: 0.5
});
