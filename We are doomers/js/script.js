$(document).ready(function(){
    $('ul.tv__tabs').on('click', 'li:not(.tv__tab_active)', function() {
        $(this)
            .addClass('tv__tab_active').siblings().removeClass('tv__tab_active')
            .closest('div.promo__tv').find('div.screen-item').removeClass('screen-item_active').eq($(this).index()).addClass('screen-item_active');
    });

});