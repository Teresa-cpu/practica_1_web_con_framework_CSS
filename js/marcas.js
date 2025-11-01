// APARICION POR FILAS 
$(window).on('scroll', function() {
    $('.card').each(function() {
      const cardTop = $(this).offset().top;
      const cardBottom = cardTop + $(this).outerHeight();
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
  
      // entra cuando su parte superior está dentro del viewport
      if (cardTop < scrollTop + windowHeight - 100 && cardBottom > scrollTop + 100) {
        $(this).addClass('visible');
      } else {
        $(this).removeClass('visible');
      }
    });
  });
  

  

// CON RETARDO 1 POR 1
//   $(window).on('scroll', function() {
//     $('.card').each(function(i) {
//       const cardTop = $(this).offset().top;
//       const scrollTop = $(window).scrollTop();
//       const windowHeight = $(window).height();
  
//       if (cardTop < scrollTop + windowHeight - 100) {
//         $(this).css('transition-delay', `${i * 0.1}s`).addClass('visible');
//       } else {
//         $(this).removeClass('visible');
//       }
//     });
//   });
  

document.addEventListener('DOMContentLoaded', function() {
    if (typeof gsap === 'undefined') {
      console.warn('GSAP no cargado. Comprueba que los <script> de GSAP están antes de marcas.js');
      return;
    }
  
    gsap.registerPlugin(ScrollTrigger);
  
    // ScrollTrigger está activo
    console.log('GSAP y ScrollTrigger activos:', gsap ? true : false, typeof ScrollTrigger !== 'undefined');
  
    // Animación del H1
    gsap.fromTo(".letra-video-marcas h1",
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1,
        ease: "power3.out",
        duration: 1.2,
        scrollTrigger: {
          trigger: ".letra-video-marcas",
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
    gsap.from(".letra-video-marcas #texto-pequeño-video", {
      y: 30,
      opacity: 0,
      delay: 0.15,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".letra-video-marcas",
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
  