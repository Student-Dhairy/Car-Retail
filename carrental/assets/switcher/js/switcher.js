// Swticher Cookie Base
/**
 * Styleswitch stylesheet switcher built on jQuery
 * Under an Attribution, Share Alike License
 * By Kelvin Luck ( http://www.kelvinluck.com/ )
 * Thanks for permission! 
 **/
(function($){
	$(document).ready(function() {
		$('.styleswitch').click(function(){
			switchStylestyle(this.getAttribute("data-switchcolor"));
			return false;
		});
		var c = readCookie('style');
				if (c){
			switchStylestyle(c);
		}
		else{
			var defaultColor = false;
			$('link[rel*=style][title]').each(function(i){
				this.disabled = true;
				defaultColor = this.getAttribute('data-default-color');
				if(defaultColor){
					this.disabled = false;
				}			
			});
		}
	});
	function switchStylestyle(styleName){
		$('link[rel*=style][title]').each(function(i){
			this.disabled = true;
			if (this.getAttribute('title') == styleName) this.disabled = false;
		});
		createCookie('style', styleName, 365);
	}
})(jQuery);
function createCookie(name,value,days){
	if (days){
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
