/*!
 * jQuery Equal Height v1.0.1
 * http://playground.niftinessafoot.com/
 * Setting all selected elements to the tallest element's height.
 *
 * Copyright 2010-2011, Matthew Smith [m at niftinessafoot dot com]
 * Licensed under the MIT license.
*/

(function($){
	$.fn.equalHeight = function(){
		var max = 0
		,	len = this.length
		;
		
		while(len--){
			max = Math.max(max, this.eq(len).height());
		}
		return this.height(max);
	}
})(jQuery);