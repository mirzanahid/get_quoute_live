

//sticky menu start

$(window).scroll(function(){
    $scrollamout = $(window).scrollTop();
    
    if($scrollamout > 700){
      $(".menu").addClass("sticky")
    }else{
      $(".menu").removeClass("sticky")
    }
  
  
  });

  

//sticky menu start


//zip code start
$(document).ready(function() {

    $('#zipcode').mask('99999-9999');
});
//zip code end



//slider code start

$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  fade:true,
  nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
  prevArrow:false,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//slider code end
