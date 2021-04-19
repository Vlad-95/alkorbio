$(document).ready(function() {
    //Слайдер на главной странице
    if($('.main-slider').length) {
        $('.main-slider').slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 6000,
            pauseOnFocus: false,
            pauseOnHover: false
        });
    
        
        $('.main-slider__nav__arrow.left').click(function (e) {
            e.preventDefault()
            $('.main-slider').slick('slickPrev');
        })
      
        $('.main-slider__nav__arrow.right').click(function (e) {
            e.preventDefault()
            $('.main-slider').slick('slickNext')
        });
    }; 

    //добавление поиска в мобильное меню
    if (window.innerWidth <= 992) {
        $('.form.form_search').appendTo('.header__bottom .header__wrap');
    }

    //клик по бургеру
    $('.burger').click(function() {
        $('.header__bottom').show("slide", { direction: "right" }, 500);
    });

    //закрытие меню
    $('.header__bottom .close').click(function() {
        $('.header__bottom').hide("slide", { direction: "right" }, 500);
    })


    //одинаковая высота новостей
    if($('.news').not('.news_detail').length) {
        $('.news__item .news__content').matchHeight();
    }

    //одинаковая высота преимуществ
    if($('.advantages').length) {
        $('.advantages__item .advantages__text').matchHeight();
    }

    //одинаковая высота названий контактов
    if($('.contact_page').length) {
        $('.contact__row .contact__item-name').matchHeight();
    }

    //аккордион
    if(('.js-accordion').length) {
        $('.js-accordion:first-of-type').addClass('active').find('.js-accordion__content').slideDown();
        if(!$('.catalog_detail').length) {
            $('.catalog__menu .catalog__menu-item.current').find('.catalog__menu-drop__item:first-of-type').addClass('active');
        }

        $(".js-accordion").find('.js-accordion__toggle').click(function() {
            $(this).closest('.js-accordion').addClass('active').siblings().removeClass('active').find('.js-accordion__content').slideUp();
            $(this).closest('.js-accordion').find('.js-accordion__content').slideDown();

            if(!$('.catalog_detail').length) {
                $('.catalog__menu .catalog__menu-item.current').find('.catalog__menu-drop__item').removeClass('active').eq($(this).closest('.js-accordion').index()).addClass('active');
            }
        })
    }

    //сайдбар в каталоге
    if(!$('.catalog_detail').length && $('.catalog_page').length) {
        $('.catalog__menu .catalog__menu-item.current').find('.catalog__menu-drop__item').click(function() {
            if(!$(this).hasClass('active')) {
                $(this).addClass('active').siblings().removeClass('active');
                $('.js-accordion').removeClass('active').find('.js-accordion__content').slideUp();
                $('.js-accordion').eq($(this).index()).addClass('active').find('.js-accordion__content').slideDown();
            }            
        })
    }

    if($('.catalog_detail').length) {
        $('.catalog__side .catalog__menu-drop__item').removeClass('active')
    }

    $('.catalog__menu-toggle').click(function() {
        if(!$(this).closest('.catalog__menu-item').hasClass('current')) {
            $(this).closest('.catalog__menu-item').toggleClass('active').siblings().not('.current').removeClass('active').find('.catalog__menu-drop').slideUp();
            
            $(this).siblings('.catalog__menu-drop').slideToggle();
        }
    })
    
});
