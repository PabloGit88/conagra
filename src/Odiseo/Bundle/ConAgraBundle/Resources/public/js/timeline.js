var TIME_LINE = (function($){
	
	var  IMAGE_TITLE_AND_TEXT = 0;
	var  ONLY_TITLE = 1;
	var  IMAGE_AND_TITLE = 2;
	var  LARGE_TEXT = 3;
	var  TITLE_AND_TEXT = 4;
	var  ONLY_TWO_TITLE = 5;
	var  LARGE_TEXT_AND_IMAGE = 6;
	
	var IMG_PATH_PREFIX = $('.timelineContainer').data('timelineImgPathPrefix');
	var prv_year_description = {};
	prv_year_description['en'] = { "1861" : { "year": "1861",	"head" : "Van Camp’s®" , "story": "Gilbert C. Van Camp, once a tinsmith, begins Manufacturing canned pork and beans." ,	"style_number" : IMAGE_TITLE_AND_TEXT	   },
								 "1867" : { "year": "1867",	"head" : "Nebraska becomes 37th state" , "story": "Nebraska becomes a state with flour milling as its leading industry." ,	"style_number" : TITLE_AND_TEXT	   },
								 "1890" : { "year": "1890",	"head" : "Hunt’s®" , "story": "Joseph and William Hunt incorporate as Hunt Brothers Fruit Packaging Company in Santa Rosa, Calif." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
								 "1899" : { "year": "1899",	"head" : "Wesson®" , "story": "Chemist David Wesson introduces a new method for processing cottonseed oil. Wesson’s vacuum and high temperature process revolutionizes the cooking oil industry." ,	"style_number" : TITLE_AND_TEXT },
								 "1905" : { "year": "1905",	"head" : "Hebrew National®" , "story": "The Hebrew National Kosher Sausage Factory begins processing kosher meats for New York." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
								 "1919" : { "year": "1919",	"head" : "Nebraska Consolidated Mills (NCM) is incorporated." , "story": "" ,	"style_number" : ONLY_TITLE },
								 "1920" : { "year": "1920",	"head" : ["La Choy®" , "Peter Pan®"] , "story": [ "Ilhan New and Wally Smith start selling  canned bean sprouts at a grocery store in Detroit under the La Choy brand.", "Peter Pan peanut butter begins production." ],	"style_number" : LARGE_TEXT_AND_IMAGE },
								 "1926" : { "year": "1926",	"head" : "DAVID® Seeds" , "story": "David Der Herbedian begins roasting sunflower seeds." ,	"style_number" : TITLE_AND_TEXT },
								 "1929" : { "year": "1929",	"head" : "Chef Boyardee®" , "story": "Customers ask Hector Boiardi, an Italian immigrant and Cleveland restaurant chef, for his pasta sauce so they can eat it at home. The Chef Boyardee brand is born." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
								 "1937" : { "year": "1937",	"head" : "Parkay ® margarine is introduced" , "story": "" ,	"style_number" : IMAGE_AND_TITLE },
								 "1948" : { "year": "1948",	"head" : "Reddi-wip®" , "story": "Aaron “Bunny” Lapin, a St. Louis inventor, develops a special aerosol valve and creates Reddi-wip real whipped cream. Originally distributed by St. Louis milkmen, it is an instant hit." ,	"style_number" : TITLE_AND_TEXT },
								 "1953" : { "year": "1953",	"head" : "Banquet® introduces pot pies" , "story": "" ,	"style_number" : IMAGE_AND_TITLE },
								 "1957" : { "year": "1957",	"head" : "NCM expands outside the U.S." , "story": "" ,	"style_number" : ONLY_TITLE },
								  "1968" : { "year": "1968",	"head" : "Snack Pack® pudding is introduced" , "story": "" ,	"style_number" : ONLY_TITLE },
								  "1969" : { "year": "1969",	"head" : "NCM turns 50" , "story": "" ,	"style_number" : ONLY_TITLE },
								  "1970" : { "year": "1970",	"head" : "Orville Redenbacher’s®" , "story": "Orville Redenbacher launches his company based on a special lighter and fluffier popcorn kernel he developed in 1965." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
								  "1971" : { "year": "1971",	"head" : "NCM becomes ConAgra, Inc." , "story": "Nebraska Consolidated Mills changes its name to ConAgra, Inc. The company has 4,105 employees in 13 states, PuertoRico and Spain." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
								  "1973" : { "year": "1973",	"head" : "ConAgra lists on NYSE" , "story": "ConAgra common stock is listed on the New York Stock Exchange on January 9." ,	"style_number" : TITLE_AND_TEXT },
								  "1980" : { "year": "1980",	"head" : "ConAgra acquires Banquet" , "story": "ConAgra’s entry into the frozen food business begins when it acquires Banquet Foods Company." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
								  "1986" : { "year": "1986",	"head" : "ConAgra acquires Del Monte" , "story": "ConAgra acquires the Del Monte frozen food business." ,	"style_number" : TITLE_AND_TEXT },
								  "1988" : { "year": "1988",	"head" : ["Healthy Choice®", "ConAgra acquires Lamb Weston®"] , "story": ["The first Healthy Choice products, frozen dinners, are introduced." , "ConAgra and Golden Valley Microwave Foods each acquire 50 percent of the leading U.S. frozen potato processor, Lamb Weston."] ,	"style_number" : IMAGE_TITLE_AND_TEXT },
								  "1989" : { "year": "1989",	"head" : ["Omaha headquarters opens", "ConAgra acquires Swift Independent Packing Co."]  ,	"style_number" : ONLY_TWO_TITLE },
								  "1990" : { "year": "1990",	"head" : ["ConAgra acquires Beatrice Foods", "Banquet launches line of kids’ meals under Kid Cuisine® name" ], "story": ["ConAgra purchases Beatrice Foods", "ConAgra’s largest acquisition, bringing to the company such brand favorites as Hunt’s®, La Choy®, Orville Redenbacher’s®, Snack Pack®, Wesson®, Swiss Miss® and Reddi-wip®." ],	"style_number" : LARGE_TEXT },
								  "1991" : { "year": "1991",	"head" : "ConAgra merges with Golden Valley Microwave Foods" , "story": "Golden Valley Microwave Foods merges with ConAgra and brings with it ACT II®, America’s best-selling microwave popcorn." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
								  "1994" : { "year": "1994",	"head" : "ConAgra turns 75" , "story": "" ,	"style_number" : ONLY_TITLE },
								  "2009" : { "year": "2009",	"head" : "ConAgra Foods introduces new face behind the brands" , "story": "ConAgra Foods unveils a new identity with logo and “Food you love” tagline." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
								  "2010" : { "year": "2010",	"head" : "Hunt’s® reaches $500 million in net sales" , "story": "" ,	"style_number" : ONLY_TITLE },
	};
	
	prv_year_description['es'] = { "1861" : { "year": "1861",	"head" : "Van Camp’s®" , "story": "Gilbert C. Van Camp, un hojalatero, comienza a fabricar carne de cerdo y frijoles enlatados." ,	"style_number" : IMAGE_TITLE_AND_TEXT	   },
			 "1867" : { "year": "1867",	"head" : "Nebraska se convierte en el estado 37" , "story": "Nebraska se convierte en un estado con la industria de molienda de harina a la cabeza." ,	"style_number" : TITLE_AND_TEXT	   },
			 "1890" : { "year": "1890",	"head" : "Hunt’s®" , "story": "Joseph y William Hunt fundan la empresa Hunt Brothers Fruit Packaging Company en Santa Rosa, California." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			 "1899" : { "year": "1899",	"head" : "Wesson®" , "story": "El químico David Wesson presenta un nuevo método para procesar aceite de algodón. Los procesos de vacío de alta temperatura de Wesson revolucionaron la industria del aceite comestible." ,	"style_number" : TITLE_AND_TEXT },
			 "1905" : { "year": "1905",	"head" : "Hebrew National®" , "story": "La fábrica Hebrew National Kosher Sausage Factory comienza a procesar carne Kosher para Nueva York." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			 "1919" : { "year": "1919",	"head" : "Fundación de Nebraska Consolidated Mills (NCM)." , "story": "" ,	"style_number" : ONLY_TITLE },
			 "1920" : { "year": "1920",	"head" : ["La Choy®" , "Peter Pan®"] , "story": [ "Ilhan New y Wally Smith comienzan a vender brotes de frijoles enlatados en una tienda en Detroit bajo la marca La Choy.", "Inicia la producción de la mantequilla de maní Peter Pan." ],	"style_number" : LARGE_TEXT_AND_IMAGE },
			 "1926" : { "year": "1926",	"head" : "Semillas DAVID® " , "story": "David Der Herbedian comienza a tostar semillas de girasol." ,	"style_number" : TITLE_AND_TEXT },
			 "1929" : { "year": "1929",	"head" : "Chef Boyardee®" , "story": "Los clientes empiezan a consultarle a Hector Bioardi, un inmigrante italiano y chef del restaurante Celvelandr, si pueden llevar a su casa la salsa que prepara para acompañar las pastas. Nace la marca Chef Boyardee." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			 "1937" : { "year": "1937",	"head" : "Aparece la margarina Parkay®" , "story": "" ,	"style_number" : IMAGE_AND_TITLE },
			 "1948" : { "year": "1948",	"head" : "Reddi-wip®" , "story": "Aaron “Bunny” Lapin, un inventor de St. Louis, desarrolla una válvula de aerosol especial y crea la crema chantilly Reddi-wip. Distribuida originalmente por los lecheros de St. Louis, se vuelve un éxito de inmediato." ,	"style_number" : TITLE_AND_TEXT },
			 "1953" : { "year": "1953",	"head" : "Banquet® presenta los arrolladitos." , "story": "" ,	"style_number" : IMAGE_AND_TITLE },
			 "1957" : { "year": "1957",	"head" : "NCM se expande por fuera de los Estados Unidos" , "story": "" ,	"style_number" : ONLY_TITLE },
			  "1968" : { "year": "1968",	"head" : "Presentación del budín Snack Pack®" , "story": "" ,	"style_number" : ONLY_TITLE },
			  "1969" : { "year": "1969",	"head" : "NCM cumple 50 años" , "story": "" ,	"style_number" : ONLY_TITLE },
			  "1970" : { "year": "1970",	"head" : "Orville Redenbacher’s®" , "story": "Orville Redenbacher lanza la empresa basándose en un cenicero especial y las palomitas de maíz desarrolladas por Kernel en 1965." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			  "1971" : { "year": "1971",	"head" : "NCM se convierte en ConAgra, Inc." , "story": "Nebraska Consolidated Mills changes its name to ConAgra, Inc. The company has 4,105 employees in 13 states, PuertoRico and Spain." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			  "1973" : { "year": "1973",	"head" : "ConAgra cotiza en la NYSE" , "story": "El 9 de enero, las acciones de ConAgra cotizan en la bolsa de valores de Nueva York." ,	"style_number" : TITLE_AND_TEXT },
			  "1980" : { "year": "1980",	"head" : "ConAgra adquiere Banquet" , "story": "El ingreso de ConAgra al negocio de los alimentos congelados comienza con la adquisición de Banquet Foods Company." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			  "1986" : { "year": "1986",	"head" : "ConAgra adquiere Del Monte" , "story": "ConAgra adquiere el negocio de alimentos congelados Del Monte." ,	"style_number" : TITLE_AND_TEXT },
			  "1988" : { "year": "1988",	"head" : ["Healthy Choice®", "ConAgra adquiere Lamb Weston®"] , "story": ["Aparecen los primeros productos de Healthy Choice, cenas congeladas." , "ConAgra y Golden Valley Microwave Foods adquieren cada una el 50% de Lamb Weston, líder en los Estados Unidos en el negocio de papas congeladas."] ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			  "1989" : { "year": "1989",	"head" : ["Abre la casa matriz de Omaha", "ConAgra adquiere Swift Independent Packing Co."]  ,	"style_number" : ONLY_TWO_TITLE },
			  "1990" : { "year": "1990",	"head" : ["ConAgra adquiere Beatrice Foods", "Banquet lanza línea de alimento para niños bajo el nombre de Kid Cuisine®" ], "story": ["ConAgra compra Beatrice Foods, su mayor adquisición, incorporando marcas favoritas como Hunt’s®, La Choy®, Orville Redenbacher’s®, Snack Pack®, Wesson®, Swiss Miss® y Reddi-wip®." ],	"style_number" : LARGE_TEXT },
			  "1991" : { "year": "1991",	"head" : "ConAgra se fusiona con Golden Valley Microwave Foods" , "story": "Golden Valley Microwave Foods se fusiona con ConAgra y, así, incorpora ACT II®, la marca más vendida de palomitas de maíz para microondas en los Estados Unidos." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			  "1994" : { "year": "1994",	"head" : "ConAgra celebra 75 años" , "story": "" ,	"style_number" : ONLY_TITLE },
			  "2009" : { "year": "2009",	"head" : "ConAgra Foods presenta la nueva cara detrás de las marcas" , "story": "ConAgra Foods revela una nueva identidad con el logo de “la comida que amas”." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			  "2010" : { "year": "2010",	"head" : "Hunt’s® alcanza USD 500 millones en ventas netas" , "story": "" ,	"style_number" : ONLY_TITLE },
	};

	
	prv_year_description['pt'] = { "1861" : { "year": "1861",	"head" : "Van Camp’s®" , "story": "Gilbert C. Van Camp, once a tinsmith, begins Manufacturing canned pork and beans." ,	"style_number" : IMAGE_TITLE_AND_TEXT	   },
			 "1867" : { "year": "1867",	"head" : "Nebraska becomes 37th state" , "story": "Nebraska becomes a state with flour milling as its leading industry." ,	"style_number" : TITLE_AND_TEXT	   },
			 "1890" : { "year": "1890",	"head" : "Hunt’s®" , "story": "Joseph and William Hunt incorporate as Hunt Brothers Fruit Packaging Company in Santa Rosa, Calif." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			 "1899" : { "year": "1899",	"head" : "Wesson®" , "story": "Chemist David Wesson introduces a new method for processing cottonseed oil. Wesson’s vacuum and high temperature process revolutionizes the cooking oil industry." ,	"style_number" : TITLE_AND_TEXT },
			 "1905" : { "year": "1905",	"head" : "Hebrew National®" , "story": "The Hebrew National Kosher Sausage Factory begins processing kosher meats for New York." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			 "1919" : { "year": "1919",	"head" : "Nebraska Consolidated Mills (NCM) is incorporated." , "story": "" ,	"style_number" : ONLY_TITLE },
			 "1920" : { "year": "1920",	"head" : ["La Choy®" , "Peter Pan®"] , "story": [ "Ilhan New and Wally Smith start selling  canned bean sprouts at a grocery store in Detroit under the La Choy brand.", "Peter Pan peanut butter begins production." ],	"style_number" : LARGE_TEXT_AND_IMAGE },
			 "1926" : { "year": "1926",	"head" : "DAVID® Seeds" , "story": "David Der Herbedian begins roasting sunflower seeds." ,	"style_number" : TITLE_AND_TEXT },
			 "1929" : { "year": "1929",	"head" : "Chef Boyardee®" , "story": "Customers ask Hector Boiardi, an Italian immigrant and Cleveland restaurant chef, for his pasta sauce so they can eat it at home. The Chef Boyardee brand is born." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			 "1937" : { "year": "1937",	"head" : "Parkay ® margarine is introduced" , "story": "" ,	"style_number" : IMAGE_AND_TITLE },
			 "1948" : { "year": "1948",	"head" : "Reddi-wip®" , "story": "Aaron “Bunny” Lapin, a St. Louis inventor, develops a special aerosol valve and creates Reddi-wip real whipped cream. Originally distributed by St. Louis milkmen, it is an instant hit." ,	"style_number" : TITLE_AND_TEXT },
			 "1953" : { "year": "1953",	"head" : "Banquet® introduces pot pies" , "story": "" ,	"style_number" : IMAGE_AND_TITLE },
			 "1957" : { "year": "1957",	"head" : "NCM expands outside the U.S." , "story": "" ,	"style_number" : ONLY_TITLE },
			  "1968" : { "year": "1968",	"head" : "Snack Pack® pudding is introduced" , "story": "" ,	"style_number" : ONLY_TITLE },
			  "1969" : { "year": "1969",	"head" : "NCM turns 50" , "story": "" ,	"style_number" : ONLY_TITLE },
			  "1970" : { "year": "1970",	"head" : "Orville Redenbacher’s®" , "story": "Orville Redenbacher launches his company based on a special lighter and fluffier popcorn kernel he developed in 1965." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			  "1971" : { "year": "1971",	"head" : "NCM becomes ConAgra, Inc." , "story": "Nebraska Consolidated Mills changes its name to ConAgra, Inc. The company has 4,105 employees in 13 states, PuertoRico and Spain." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			  "1973" : { "year": "1973",	"head" : "ConAgra lists on NYSE" , "story": "ConAgra common stock is listed on the New York Stock Exchange on January 9." ,	"style_number" : TITLE_AND_TEXT },
			  "1980" : { "year": "1980",	"head" : "ConAgra acquires Banquet" , "story": "ConAgra’s entry into the frozen food business begins when it acquires Banquet Foods Company." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			  "1986" : { "year": "1986",	"head" : "ConAgra acquires Del Monte" , "story": "ConAgra acquires the Del Monte frozen food business. " ,	"style_number" : TITLE_AND_TEXT },
			  "1988" : { "year": "1988",	"head" : ["Healthy Choice®", "ConAgra acquires Lamb Weston®"] , "story": ["The first Healthy Choice products, frozen dinners, are introduced." , "ConAgra and Golden Valley Microwave Foods each acquire 50 percent of the leading U.S. frozen potato processor, Lamb Weston."] ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			  "1989" : { "year": "1989",	"head" : ["Omaha headquarters opens", "ConAgra acquires Swift Independent Packing Co."]  ,	"style_number" : ONLY_TWO_TITLE },
			  "1990" : { "year": "1990",	"head" : ["ConAgra acquires Beatrice Foods", "Banquet launches line of kids’ meals under Kid Cuisine® name" ], "story": ["ConAgra purchases Beatrice Foods", "ConAgra’s largest acquisition, bringing to the company such brand favorites as Hunt’s®, La Choy®, Orville Redenbacher’s®, Snack Pack®, Wesson®, Swiss Miss® and Reddi-wip®." ],	"style_number" : LARGE_TEXT },
			  "1991" : { "year": "1991",	"head" : "ConAgra merges with Golden Valley Microwave Foods" , "story": "Golden Valley Microwave Foods merges with ConAgra and brings with it ACT II®, America’s best-selling microwave popcorn." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			  "1994" : { "year": "1994",	"head" : "ConAgra turns 75" , "story": "" ,	"style_number" : ONLY_TITLE },
			  "2009" : { "year": "2009",	"head" : "ConAgra Foods introduces new face behind the brands" , "story": "ConAgra Foods unveils a new identity with logo and “Food you love” tagline." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
			  "2010" : { "year": "2010",	"head" : "Hunt’s® reaches $500 million in net sales" , "story": "" ,	"style_number" : ONLY_TITLE },
	};
	
	
	
	var toolTiptemplate = '<div class="tooltip" style="margin-top:-42px;" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>';		
	var templateImageTitleText = $('<div class="wrapper"><div class="tooltip-img"><img src=""></div><div class="tooltip-info"><p class="year"></p><h3></h3><p class="story"></p></div></div>');
	var templateOnlyTitle = $('<div class="wrapper"><div class="tooltip-info onlyTitle"><p class="year"></p><h3></h3></div></div>');
	var templateTitleText = $('<div class="wrapper"><div class="tooltip-info onlyTitleText"><p class="year"></p><h3></h3><p></p></div></div>');
	var templateLargeText = $('<div class="wrapper"><div class="tooltip-info largText"><p class="year"></p><h3></h3><p></p></br><h3></h3><p></p></div></div>');
	var templateOnlyTwoTitle = $('<div class="wrapper"><div class="tooltip-info onlyTwoTitle"><p class="year"></p><h3></h3></br><h3></h3></div></div>');
	var templateImageTitle = $('<div class="wrapper"><div class="tooltip-img"><img src=""></div><div class="tooltip-info"><p class="year"></p><h3 class="image-title"></h3></div></div>');
	var templateLargeTextWitImage = $('<div class="wrapper"><div class="tooltip-img-down"><img src=""></div><div class="tooltip-info largText"><p class="year"></p><h3></h3><p></p></br><h3></h3><p></p></div></div>');
	
	function buildTooltipImageTitleText( year,  title,  text ){
		var src = IMG_PATH_PREFIX + year + '.jpg';
		templateImageTitleText.find('img').attr("src",src);
		templateImageTitleText.find('.year').html(year);
		templateImageTitleText.find('h3').html(title);
		templateImageTitleText.find('.story').html(text);
		return templateImageTitleText.html();
	}
	
	function buildTooltipOnlyTitle( year, title){
		templateOnlyTitle.find('.year').html(year);
		templateOnlyTitle.find('h3').html(title);
		return templateOnlyTitle.html();
	}
	
	
	function buildTooltipTitleText( year, title, text){
		templateTitleText.find('.year').html(year);
		templateTitleText.find('h3').html(title);
		templateTitleText.find('p:nth-child(3)').html(text);
		return templateTitleText.html();
	}
	
	function buildTooltipLargeText( year, title, text){
		templateLargeText.find('.year').html(year);
		templateLargeText.find('h3:nth-child(2)').html(title[0]);
		templateLargeText.find('p:nth-child(3)').html(text[0]);
		templateLargeText.find('h3:nth-child(5)').html(title[1]);
		templateLargeText.find('p:nth-child(6)').html(text[1]);
		return templateLargeText.html();
	}
	
	function buildTooltipLargeTextAndImage( year, title, text){
		var src = IMG_PATH_PREFIX + year + '.jpg';
		templateLargeTextWitImage.find('img').attr("src",src);
		templateLargeTextWitImage.find('.year').html(year);
		templateLargeTextWitImage.find('h3:nth-child(2)').html(title[0]);
		templateLargeTextWitImage.find('p:nth-child(3)').html(text[0]);
		templateLargeTextWitImage.find('h3:nth-child(5)').html(title[1]);
		templateLargeTextWitImage.find('p:nth-child(6)').html(text[1]);
		return templateLargeTextWitImage.html();
	}
	
	function buildTooltipOnlyTwoTitle( year, title){
		templateOnlyTwoTitle.find('.year').html(year);
		templateOnlyTwoTitle.find('h3:nth-child(2)').html(title[0]);
		templateOnlyTwoTitle.find('h3:nth-child(4)').html(title[1]);
		return templateOnlyTwoTitle.html();
	}
	
	function buildTooltipImageTitle( year, title){
		var src = IMG_PATH_PREFIX + year + '.jpg';
		templateImageTitle.find('img').attr("src",src);
		templateImageTitle.find('.year').html(year);
		templateImageTitle.find('h3').html(title);
		return templateImageTitle.html();
	}
	
	
	function htmlStringBuilder(yearObject){
		switch(yearObject.style_number){
			case IMAGE_TITLE_AND_TEXT:
				return buildTooltipImageTitleText(yearObject.year, yearObject.head, yearObject.story);
			case ONLY_TITLE:
				return buildTooltipOnlyTitle(yearObject.year, yearObject.head);
			case IMAGE_AND_TITLE:
				return buildTooltipImageTitle(yearObject.year, yearObject.head);
			case LARGE_TEXT:
				return buildTooltipLargeText(yearObject.year, yearObject.head, yearObject.story);
			case TITLE_AND_TEXT:
				return buildTooltipTitleText(yearObject.year, yearObject.head, yearObject.story);
			case ONLY_TWO_TITLE:
				return buildTooltipOnlyTwoTitle(yearObject.year, yearObject.head);
			case LARGE_TEXT_AND_IMAGE:
				return buildTooltipLargeTextAndImage(yearObject.year, yearObject.head, yearObject.story);
		}
	}
	
	
	function prvInit(){
		 $('.circle').each(function()
			{
				var htmlForTooltip = null;
				var id = $(this).attr('id');
				
				var LOCALE = $('.config').data('locale');
				
				var yearObject =  prv_year_description[LOCALE][id];
				console.log(yearObject);
				
				var textYearSelector = "#text_" + id;
				htmlForTooltip = htmlStringBuilder(yearObject);
				$(this).tooltip({ title: htmlForTooltip, template: toolTiptemplate , container:'body', html:true, trigger: 'manual'});
				$(this).hover(function (e) 
				{
					e.preventDefault();
				    $(this).tooltip('show');
				    $(textYearSelector).css('fill' , '#969d15');
				},
				
				function (e) 
				{
					e.preventDefault();
				    $(this).tooltip('hide');
				    $(textYearSelector).css('fill' , 'black');
				}
				
				);
			});
	}

	
	//public methods
	return {	
		init : prvInit,
	};

})(jQuery);

