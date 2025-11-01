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
  