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


    //одинаковая высота новостей
    if($('.news').not('.news_detail').length) {
        $('.news__item .news__content').matchHeight();
    }

    //одинаковая высота преимуществ
    if($('.advantages').length) {
        $('.advantages__item .advantages__text').matchHeight();
    }
});
