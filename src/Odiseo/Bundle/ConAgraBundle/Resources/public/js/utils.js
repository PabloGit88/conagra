var UTILS = (function($){
	
	
	var ID_SUBFIX = "_m_2";
	function privateShowDescription(id){
		
			var descElementId = "#" + id + ID_SUBFIX;
			var element =  $(descElementId);
			$('img[id$="_m_2"]').hide();
			element.show();
		
	}
	
	//public methods
	return {	
		showDescription : privateShowDescription
	};

})(jQuery);

