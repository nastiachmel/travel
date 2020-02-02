var servicePosition = $('.js-title').offset().top;
    $(window).scroll(function(){
        var windowScroll = $(window).scrollTop() + $(window).height();
        console.log(servicePosition +'/'+ windowScroll)
        if (servicePosition < windowScroll) {
            serviceFlip();
        }
    });