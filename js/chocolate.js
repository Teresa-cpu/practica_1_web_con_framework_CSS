//   ANIMACION TITULOS HEADER 

document.addEventListener('DOMContentLoaded', function() {
    if (typeof gsap === 'undefined') {
      console.warn('GSAP no cargado. Comprueba que los <script> de GSAP están antes de chooclate.js');
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
  

// ANIMACION LOGOS CHOCOLATE


gsap.utils.toArray(".img-choco a").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
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



// ANIMACION APARTADO "DELEITAMOS TU PALADAR" 

gsap.from(".hero-section-choco .text-section", {
  scrollTrigger: {
    trigger: ".hero-section-choco",
    start: "top 80%",
  },
  x: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-section-choco .image-section", {
  scrollTrigger: {
    trigger: ".hero-section-choco",
    start: "top 80%",
  },
  x: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  delay: 0.3
});


// ======== BOTÓN "VER MÁS" ======== //
gsap.from(".btn-chocolate", {
  scrollTrigger: {
    trigger: ".btn-chocolate",
    start: "top 90%",
  },
  scale: 0.7,
  opacity: 0,
  ease: "back.out(1.7)",
  duration: 1
});


// ======== APARTADO CACAO SOSTENIBLE ======== //
gsap.from(".hero-section-choco-sost .text-section", {
  scrollTrigger: {
    trigger: ".hero-section-choco-sost",
    start: "top 80%",
  },
  x: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-section-choco-sost .image-section", {
  scrollTrigger: {
    trigger: ".hero-section-choco-sost",
    start: "top 80%",
  },
  x: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  delay: 0.3
});







