
$('.owl-one').owlCarousel({
    stagePadding: 10,
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        },
        1200:{
            items:4,
            nav:false
        }
    }
})
$('.owl-two').owlCarousel({
    stagePadding: 10,
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        },
        1200:{
            items:4,
            nav:false
        }
    }
})
$('.owl-three').owlCarousel({
    stagePadding: 20,
    loop: true,
    margin: 20,
    nav: false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:false
        },
        1200:{
            items:3,
            nav:false
        }
    }
})
$(document).ready(function(){
     $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $.mask.definitions['9']='';
  $.mask.definitions['d']='[0-9]';
  $("#phone").mask("+998 (dd) ddd-dd-dd");
});

 