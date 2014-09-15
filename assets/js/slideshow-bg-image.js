$(function(){
    
    // jQuery backstretch
    if (jQuery.browser.mobile === false) 
    {
        $.backstretch([
		"assets/img/intro/one.jpg"
        ,    "assets/img/intro/two.jpg"
            , "assets/img/intro/three.jpg"
        ], {duration: 1500, fade: 3000});
    }
});