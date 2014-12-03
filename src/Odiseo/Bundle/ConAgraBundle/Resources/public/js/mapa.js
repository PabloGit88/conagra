var MAPA = (function($){
	
	var DEFAULT_COUNTRY_TO_PAINT = "brasil-path";
	
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
			console.log($(idSelector));
			var idToolTip = idSelector.replace("-path","-tooltip");
			console.log(idToolTip);
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
		
		privateRequestAjaxInformation(clickedCountry , populateMarcaDescription)
		
	}
	
	
	function paintDefaultCountry(){
		$('#brasil-path').css('fill','url(#linearGradient24)');
		$('#brasil-tooltip').css('visibility', 'visible');
		$('#activeCountry').html('brasil');
		
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
		 paintDefaultCountry();
	}
	
	function populateMarcaDescription(response) {
	    $('.marca_descripcion').html(response);
	       $('#content .conagra_latam .marca_descripcion .guatemala > p,'+ 
			    '#content .conagra_latam .marca_descripcion .colombia > p,'+
			    '#content .conagra_latam .marca_descripcion .brasil > p,'+
			    '#content .conagra_latam .marca_descripcion .paraguay > p').slimScroll({
		            height: '280px',
		            color: '#555',
		            size: '5px',
		        });
	 }
	
	
	function privateRequestAjaxInformation(pais, successFunction)
	{
		var countryUrl = $('.latam_mapa').data('countryUrl');
		
		$.ajax({
			  url: countryUrl,
			  type:"get", //send it through get method
			  data:{ country : pais} ,
			  success: function(response) {
				  successFunction(response);
			  },
			  error: function(xhr) {
			    //Do Something to handle error
			  }
			});
		
	}

	function showModalWithBrandInformation(response){
		$('.modal-content').html(response);
		$('.modal').on('hidden.bs.modal', function (e) {
			  // do something...
		})
		$('.modal').modal('show');
	}
	 
	function privateShowBrandDescription(element){
		
		privateRequestAjaxInformation(element.value, showModalWithBrandInformation);
		var activeCountry = $('#activeCountry').html();
		var clickedCountry = element.value;
		if (activeCountry != "") {
			$('#activeCountry').html("");
			var idSelectorActiveCountry = "#"+ activeCountry + "-path";
			unPaint( idSelectorActiveCountry);
			var idSelectorClickedCountry = "#"+ clickedCountry + "-path";
			paint(idSelectorClickedCountry);
			$('#activeCountry').html(clickedCountry);
		}

	}
	
	
	return {	
		init : privateInit,
		showBrandDescription : privateShowBrandDescription
	};

})(jQuery);

