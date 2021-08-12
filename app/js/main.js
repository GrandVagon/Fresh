$(function () {

	const link = $('button[data-basket="true"]'),
        basket = $('.basket'),
		overlay = $('.overlay'),		
		closeBasket = $('button[data-close="true"]');

    const openMenu= $('button[data-menu="open"]'),
          sideMenu=$('.side'),
          closeMenu=$('button[data-menu="close"]');

          openMenu.on('click', function () {
            sideMenu.toggleClass('side_active');
        });

          closeMenu.on('click', function () {
            sideMenu.toggleClass('side_active');
        });
          

	link.on('click', function () {
		overlay.show();
		basket.toggleClass('basket_active');
	});
        closeBasket.on('click',function () {
		overlay.hide();
		basket.toggleClass('basket_active');
	});

	overlay.on('click',function () {
		overlay.hide();
		basket.toggleClass('basket_active');
	});


    $('.search-btn').on('click', function() {
        $('.search-form').toggleClass('search-form_active');
    })

    $('button[data-menu="true"]').on('click', function() {
        $('.menu-btn__list').toggleClass('menu-btn__list-active');
    });

    $('button[data-menu="side"]').on('click', function() {
        $('button[data-menu="side"] .menu-btn__list').toggleClass('menu-btn__list-active');
    });



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