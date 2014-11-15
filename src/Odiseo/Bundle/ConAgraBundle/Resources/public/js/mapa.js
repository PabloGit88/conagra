var MAPA = (function($){
	
	function getIdSelector(event){
		var idSelector = event.currentTarget.id;
		if (idSelector != null && idSelector.indexOf("-path") >= 0)
			return "#" + idSelector;
		return null;
	}
	  
	function hasToPaint(idSelector){
		var country = idSelector.replace("-path","").replace("#","");
		var activeCountry = $('#activeCountry').html();
		return !(country == activeCountry);
	}
	
	  
	function paint(idSelector){
		if ( idSelector != null){
			if ( !hasToPaint(idSelector) )
				return ;
			$(idSelector).css('fill','url(#linearGradient24)');
			var idToolTip = idSelector.replace("-path","-tooltip");
			$(idToolTip).css('visibility', 'visible');
		}
	}
	
	function unPaint(idSelector){
		if ( idSelector != null){
			if ( !hasToPaint(idSelector) )
				return ;
			$(idSelector).css('fill', '#909090');
			var idToolTip = idSelector.replace("-path","-tooltip");
			$(idToolTip).css('visibility', 'hidden');	
		}	
	}
	
	function onClickAction(evt){
		var activeCountry = $('#activeCountry').html();
		var id = evt.currentTarget.id;
		var clickedCountry = id.replace('-tooltip', "");
		clickedCountry = clickedCountry.replace('-path', "");
		$('#activeCountry').html(clickedCountry);
		if (activeCountry != "") {
			var idSelectorActiveCountry = "#"+ activeCountry + "-path";
			unPaint( idSelectorActiveCountry);
		}
	}
	
	function privateInit(){
		
		$( 'path[id$=-path]').each(function() {
			$( this ).mouseenter(function(evt) {
				var idSelector = getIdSelector(event);
				paint(idSelector);
				$(idSelector).css('cursor','pointer')
				
			});
			
			$( this ).mouseout(function(evt) {
					var idSelector = getIdSelector(event);
					unPaint(idSelector);
			});
			
			$( this ).click(function(evt) {
					onClickAction(evt);
			});
		});
	
		$( 'g[id$=_point]').each(function() {
				$( this ).mouseenter(function(evt) {
					var idSelector = "#" + evt.fromElement.id ;
					paint(idSelector);
				});
		});
	
		$( 'image[id$=-tooltip]').each(function() {
				
				$( this ).mouseenter(function(evt) {
						var idToolTip = evt.currentTarget.id;
						$("#" + idToolTip).css('cursor','pointer')
						var idSelector = "#" + idToolTip.replace("-tooltip","-path");
						paint(idSelector);
						
				});
				
				$( this ).mouseout(function(evt) {
						var idToolTip = evt.currentTarget.id;
						var idSelector = "#" + idToolTip.replace("-tooltip","-path");
						unPaint(idSelector);
				});
				
				$( this ).click(function(evt) {
				
						onClickAction(evt);
				});
		});
	}
	return {	
		init : privateInit
	};

})(jQuery);

