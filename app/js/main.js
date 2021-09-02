$(function () {

	const link = $('button[data-basket="true"]'),
        basket = $('.basket'),
		overlay = $('.overlay'),
    fixedBody = $('body'),		
		closeBasket = $('button[data-close="true"]');

    const openMenu= $('button[data-menu="open"]'),
          sideMenu=$('.side'),
          closeMenu=$('button[data-menu="close"]');

          openMenu.on('click', function () {
            sideMenu.toggleClass('active');
            fixedBody.toggleClass('active');
        });

          closeMenu.on('click', function () {
            sideMenu.toggleClass('active');
            fixedBody.toggleClass('active');
        });
          

	link.on('click', function () {
		overlay.show();
		basket.toggleClass('active');
    fixedBody.toggleClass('active');
	});

    closeBasket.on('click',function () {
      overlay.hide();
      basket.toggleClass('active');
      fixedBody.toggleClass('active');
	});

	overlay.on('click',function () {
		overlay.hide();
		basket.toggleClass('active');
    fixedBody.toggleClass('active');
	});


    $('.search-btn').on('click', function() {
        $('.search-form').toggleClass('active');
    })

    $('button[data-menu="true"]').on('click', function() {
        $('.menu-btn__list').toggleClass('active');
    });

    $('button[data-menu="side"]').on('click', function() {
        $('button[data-menu="side"] .menu-btn__list').toggleClass('active');
    });



    $('.intro__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="./images/icons/arrows-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./images/icons/arrows-right.svg" alt="arrow-right"></button>',
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                arrows: false,
                dots: true
              }
            }
          ]
    });


    $('.brands__list').slick({
        dots: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
        ]
    });


    $('.star__icon').rateYo({
        starWidth: "16px",
        normalFill: "#c1c1c1",
        ratedFill: "#FFB800",
        numStars: 1
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