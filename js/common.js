
$('.owl-one').owlCarousel({
     stagePadding: 10,
    loop: true,
    margin: 10,
    nav: false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        },
        1200:{
            items:4,
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
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      // $('html, body').animate({
      //   scrollTop: $(hash).offset().top
      // }, 800, function(){       
      //   window.location.hash = hash;
      // });
    } 
  });

  $.mask.definitions['9']='';
  $.mask.definitions['d']='[0-9]';
  $("#phone").mask("+998 (dd) ddd-dd-dd");

  lightbox.option({
        'resizeDuration': 400,
        'fadeDuration': 400,
        'alwaysShowNavOnTouchDevices': true
    });
});

function linking(get){
    // alert('hi');
    window.location.href = "service.html#service";
}


 