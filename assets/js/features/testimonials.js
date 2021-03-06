$(function(){
    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        // Animate elements in Testimonials Section
        $('.testimonial-item').each(function(i)
        {            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 100 : $(this).data('animation-delay') );
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView)
                {
                    setTimeout(function(){
                        element.addClass('animated fadeInLeft').css('opacity', 1);
                    } , itemsDelay * (i * 4));
                }
            });
        });
    }
});