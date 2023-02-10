$(document).ready(function(){
    (function init100vh(){
        function setHeight() {
          var vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        setHeight();
        window.addEventListener('resize', setHeight);
      })();
    // $('.carousel__iner').slick({
    //     // speed: 1200,
    //     // //adaptiveHeight: true,
    //     // prevArrow: '<button type="button" class="slick-prev"><img src="icon/carousel/left.png"></button>',
    //     // nextArrow: '<button type="button" class="slick-next"><img src="icon/carousel/right.png"></button>',
    //     dots: false,
    //     arrows: false,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     fade: true,
    //     infinity: true
    // });

    $('ul.tv__tabs').on('click', 'li:not(.tv__tab_active)', function() {
        $(this)
            .addClass('tv__tab_active').siblings().removeClass('tv__tab_active')
            .closest('div.promo__tv').find('div.screen-item').removeClass('screen-item_active').eq($(this).index()).addClass('screen-item_active');
    });
});