$(function(){
    
    // jQuery backstretch
    if (jQuery.browser.mobile === false) 
    {
        $.backstretch([
		"assets/img/intro/1.jpg"
        ,  "assets/img/intro/2.jpg"
        , 	"assets/img/intro/3.jpg"
        ,   "assets/img/intro/4.jpg"
		,	"assets/img/intro/5.jpg"
        ], {duration: 1500, fade: 3000});
    }
});