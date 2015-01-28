$(document).ready(function() {

	
	/*============================================
	Twitter Functions
	==============================================*/
	var tweetsLength = $('#twitter-slider').data('tweets-length'),
		widgetID = $('#twitter-slider').data('widget-id');
	
	twitterFetcher.fetch(widgetID, 'twitter-slider', tweetsLength, true, false, true, '', false, handleTweets);

	function handleTweets(tweets){
	
		var x = tweets.length,
			n = 0,
			tweetsHtml = '<ul class="slides">';
			
		while(n < x) {
			tweetsHtml += '<li>' + tweets[n] + '</li>';
			n++;
		}
		
		tweetsHtml += '</ul>';
		$('#twitter-slider').html(tweetsHtml);
		
		$('.twitter_reply_icon').html("<i class='icon-reply'></i>");
		$('.twitter_retweet_icon').html("<i class='icon-retweet'></i>");
		$('.twitter_fav_icon').html("<i class='icon-star'></i>");

		$('#twitter-slider').flexslider({
			prevText: '<i class="icon-angle-left"></i>',
			nextText: '<i class="icon-angle-right"></i>',
			slideshowSpeed: 5000,
			useCSS: true,
			controlNav: false, 
			pauseOnAction: false, 
			pauseOnHover: true,
			smoothHeight: false
		});
	};
});	