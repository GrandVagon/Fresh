$(function () {
    $('.intro__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="./images/icons/arrows-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./images/icons/arrows-right.svg" alt="arrow-right"></button>',
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });


    $('.brands__list').slick({
        dots: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    $('.star__icon').rateYo({
        starWidth: "16px",
        normalFill: "#c1c1c1",
        ratedFill: "#FFB800",
        numStars: 1,
        readOnly: true,
        "starSvg": '<svg width="16" height="16" viewBox="0 0 16 16" fill="none">'+
        '<path d="M0.0229654 6.16432C0.0780897 5.9946 0.224746 5.87091 0.401307 5.84529L5.36138 5.12451L7.57965'+
        '0.629933C7.65859 0.469933 7.82156 0.368652 7.99996 0.368652C8.1784 0.368652 8.34134 0.469933 8.42031' +
        '0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 '+
        '6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 '+
        '15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 '+
        '15.6136 12.4364 15.5776L8 13.2451L3.56373 15.5775C3.40576 15.6606 3.21442 15.6467 3.07008 15.5419C2.92574' +
        '15.437 2.85339 15.2593 2.88355 15.0834L3.73095 10.1434L0.141559 6.64478C0.0138092 6.52028 -0.0322227' +
        '6.334 0.0229654 6.16432Z" fill="#FFB800"/>'+
        '</svg>'
        
      });



    $('.card__minus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
     
        if (value >= 1) {
            value = value - 1;
        } else {
            value = 0;
        }
     
      $input.val(value);
     
    });
     
    $('.card__plus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
     
        if (value >= 0) {
            value = value + 1;
        } else {
            value = 100;
        }
     
        $input.val(value);
    });





    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');
   
    var config = {
      controls: {
        scope: 'local'
      }
    };
   
    var mixer1 = mixitup(containerEl1, config );
    var mixer2 = mixitup(containerEl2, config );


});