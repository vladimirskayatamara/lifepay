$(document).ready(function(){
    $('.carousel__options-wrapper').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        loop: true,
        nextArrow: '<button type="button" class="slick-next"><svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.5" cy="19.5" r="19.5" fill="#3F8DCB" fill-opacity="0.56"/><path d="M26 19.5L26.7071 18.7929L27.4142 19.5L26.7071 20.2071L26 19.5ZM15.2071 7.29289L26.7071 18.7929L25.2929 20.2071L13.7929 8.70711L15.2071 7.29289ZM26.7071 20.2071L15.2071 31.7071L13.7929 30.2929L25.2929 18.7929L26.7071 20.2071Z" fill="white"/></svg></button>'
    });

    $('.carousel__payment-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        speed: 500,
        fade: false,
        cssEase: 'linear',
        nextArrow: '<button type="button" class="slick-next"><svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.5" cy="19.5" r="19.5" fill="#3F8DCB" fill-opacity="0.56"/><path d="M26 19.5L26.7071 18.7929L27.4142 19.5L26.7071 20.2071L26 19.5ZM15.2071 7.29289L26.7071 18.7929L25.2929 20.2071L13.7929 8.70711L15.2071 7.29289ZM26.7071 20.2071L15.2071 31.7071L13.7929 30.2929L25.2929 18.7929L26.7071 20.2071Z" fill="white"/></svg></button>'
    })

    var scrollTop = '';
    var newHeight = '100';

    $(window).bind('scroll', function() {
       scrollTop = $( window ).scrollTop();
       newHeight = scrollTop + 100;
    });
    
    $('._btn').click(function(e) {
       e.stopPropagation();
     if(jQuery(window).width() < 767) {
       $(this).after( $( ".popup" ) );
       $('.popup').show().addClass('popup-mobile').css('top', 0);
       $('html, body').animate({
            scrollTop: $('.popup').offset().top
        }, 500);   
     } else {
       $('.popup').removeClass('popup-mobile').css('top', newHeight).toggle();
     };
    });
    
    $('html').click(function() {
     $('.popup').hide();
    });

    $('.popup-btn-close').click(function(e){
      $('.popup').hide();
    });

    $('.popup').click(function(e){
      e.stopPropagation();
    });
    
});