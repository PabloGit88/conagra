var MAPA = (function($){
	
	
	var IMG_PATH_PREFIX = $('.conagra_latam').data('mapaImgPathPrefix');
	
	var DEFAULT_COUNTRY_TO_PAINT = "brasil-path";
	var  ADDRESS_TEL = 0;
	var  ADDRESS_TEL_VIDEO = 1;
	var  ADDRESS_TEL_MANAGER_EMAIL = 2;
	
	var salesTrackerToolTipData = { 
		"ecuador" : { "address": "Av. 10 de Agosto y Manuel Zambrano Apartado 10640 ",	"tel" : "396-1900" , "style_number" : ADDRESS_TEL	   },
		"peru" : { "address": "Av. Nugget # 350 El Agustino Lima",	"tel" : "511-3249900" , "style_number" : ADDRESS_TEL	   },	
		"colombia" : { "address": "Altipal S.A. Carrera 69B #19A-47, Bogotá,",	"tel" : "2948383" , "style_number" : ADDRESS_TEL	   },	
		"costarica" : { "address": "ajuela, Costa Rica Coyol, NOVA PARK 2km este de Estación RTV ",	"tel" : "+506 2436-7000" , "style_number" : ADDRESS_TEL	   },	
		"nicaragua" : { "address": "Pista Sub Urbana , Barrio San Judas Centro de Salud 2 cuadras al oeste , 2 cuadras al Sur, Distrito III, Managua, Nicaragua",	"tel" : "+505 2260-0680/0681 " , "style_number" : ADDRESS_TEL},	
		"honduras" : { "address": "Boulevard del Norte, 100 metros al Oeste del Palenque, San Pedro Sula Honduras",	"tel" : "+504 2551-2084, +504 22512888", "video_url" : "#",  "style_number" : ADDRESS_TEL_VIDEO	},	
		"panama" : { "address": "Agencias Feduro, S.A. Ave. Ricardo J Alfaro y Calle Miguel Brostella 36 El Dorado, Panamá",	"tel" : "+507  304-4444", "manager" : "Arlin Gonzalez", "email" : "arlin.gonzalez@feduro.net",  "style_number" : ADDRESS_TEL_MANAGER_EMAIL	},	
		"elsalvador" : { "address": "Plan de la Laguna, Block B#15, Antiguo Cuscatlán, El Salvador, Centroamérica",	"tel" : "(503) 2511-4000 | Fax: (503) 2243-1134","manager" : "Mireya Ramírez", "email" : "info@dizac.com.sv",  "style_number" : ADDRESS_TEL_MANAGER_EMAIL	},	
		"guatemala" : { "address": "42-11, Calzada Atanasio Tzul, Guatemala 01012, Guatemala",	"tel" : "+502 2285 5555","manager" : "Nery Berreondo", "email" : "GerenteMarca06@ninoshka.com" ,  "style_number" : ADDRESS_TEL_MANAGER_EMAIL	},	
	};
	
	

	//for all toolTip. Generic template of Bootstrap.
	var toolTiptemplate = '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner mapa"></div></div>';
	
	//for salestracker tooltips
	var templateAddressTelToolTip = $('<div class="wrapper"><div class="tooltip-info addressTel"><p class="adress"><span class="tag bold">Dirección: </span><span class="data"> </span></p><p class="tel"><span class="tag bold">Teléfono:</span><span class="data"></span></p></div></div>');
	var templateAddressTelVideoToolTip = $('<div class="wrapper"><div class="tooltip-info addressTelVideo"><p class="adress"><span class="tag bold">Dirección: </span><span class="data"> </span></p><p class="tel"><span class="tag bold">Teléfono:</span><span class="data"></span></p><div><img src=""><p>Conozca más desde <span> <a href="#">aquí</a> </span></p></div></div></div>');
	var templateAddressTelManagerEmail= $('<div class="wrapper"><div class="tooltip-info addressTelManagerEmail"><p class="adress"><span class="tag bold">Dirección: </span><span class="data"> </span></p><p class="tel"><span class="tag bold">Teléfono:</span><span class="data"></span></p> <p class="manager"><span class="tag bold">Manager:</span><span class="data"></span></p><p class="email"><span class"tag bold"></span><span class="data"></span></p></div></div>');
	
	//tooltips builders
	function buildAddressTelToolTip( address,  tel){
		templateAddressTelToolTip.find('.adress .data').html(address);
		templateAddressTelToolTip.find('.tel .data').html(tel);
		return templateAddressTelToolTip.html();
	}
	
	function buildAddressTelVideoToolTip( address,  tel,  link ){
		var src = IMG_PATH_PREFIX + "youtube.png";
		console.log(src);
		templateAddressTelVideoToolTip.find('img').attr("src",src);
		templateAddressTelVideoToolTip.find('.adress .data').html(address);
		templateAddressTelVideoToolTip.find('.tel .data').html(tel);
		templateAddressTelVideoToolTip.find('a').attr('href' , link);
		return templateAddressTelVideoToolTip.html();
	}
	
	function buildAddressTelManagerEmail( address,  tel,  manager, email ){
		templateAddressTelManagerEmail.find('.adress .data').html(address);
		templateAddressTelManagerEmail.find('.tel .data').html(tel);
		templateAddressTelManagerEmail.find('.manager .data').html(manager);
		templateAddressTelManagerEmail.find('.email .data').html(email);
		return templateAddressTelManagerEmail.html();
	}
	
	
	
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
		showLink(clickedCountry);
		privateRequestAjaxInformation(clickedCountry , populateMarcaDescription)
		
	}
	
	function showLink(country){
		$(".saleTracker").hide();
		$( "#tt_" + country).show();
	}
	
	function setToolTip(country){
		ttData  = salesTrackerToolTipData[country];
		var htmlForTooltip = "";
		var idSelector = "#tt_" + country;
		
		switch(ttData.style_number){
			case ADDRESS_TEL:
				htmlForTooltip = buildAddressTelToolTip(ttData.address, ttData.tel);
				break;
			case ADDRESS_TEL_VIDEO:
				htmlForTooltip = buildAddressTelVideoToolTip(ttData.address, ttData.tel , ttData.video_url);
				break;
			case ADDRESS_TEL_MANAGER_EMAIL:
				htmlForTooltip = buildAddressTelManagerEmail(ttData.address, ttData.tel , ttData.manager, ttData.email);
				break;
		}
		
		$(idSelector).tooltip({ title: htmlForTooltip, template: toolTiptemplate , container:'body', html:true});
	}
	
	function paintDefaultCountry(){
		$('#brasil-path').css('fill','url(#linearGradient24)');
		$('#brasil-tooltip').css('visibility', 'visible');
		$('#activeCountry').html('brasil');
	}
	
	function privateInit(){
		
		$( '.saleTracker').each(function() {
			idElement = $(this).attr('id');
			country = idElement.replace("tt_", "");
			setToolTip(country);
		});
		
		
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

