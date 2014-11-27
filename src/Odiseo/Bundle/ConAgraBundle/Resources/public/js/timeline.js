var TIME_LINE = (function($){
	
	var  IMAGE_TITLE_AND_TEXT = 0;
	var  ONLY_TITLE = 1;
	var  IMAGE_AND_TITLE = 2;
	var  LARGE_TEXT = 3;
	var  TITLE_AND_TEXT = 4;
	var  ONLY_TWO_TITLE = 5;
	
	var IMG_PATH_PREFIX = "/bundles/odiseoconagra/images/quienesconagra/timeline/";
	
	var prv_year_description = { "1861" : { "year": "1861",	"head" : "Van Camp’s®" , "story": "Gilbert C. Van Camp, once a tinsmith, begins Manufacturing canned pork and beans." ,	"style_number" : IMAGE_TITLE_AND_TEXT	   },
								 "1867" : { "year": "1867",	"head" : "Nebraska becomes 37th state" , "story": "Nebraska becomes a state with flour milling as its leading industry." ,	"style_number" : TITLE_AND_TEXT	   },
								 "1890" : { "year": "1890",	"head" : "Hunt’s®" , "story": "Joseph and William Hunt incorporate as Hunt Brothers Fruit Packaging Company in Santa Rosa, Calif." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
								 "1899" : { "year": "1899",	"head" : "Wesson®" , "story": "Chemist David Wesson introduces a new method for processing cottonseed oil. Wesson’s vacuum and high temperature process revolutionizes the cooking oil industry." ,	"style_number" : TITLE_AND_TEXT },
								 "1905" : { "year": "1905",	"head" : "Hebrew National®" , "story": "The Hebrew National Kosher Sausage Factory begins processing kosher meats for New York." ,	"style_number" : IMAGE_TITLE_AND_TEXT },
								 "1919" : { "year": "1919",	"head" : "Nebraska Consolidated Mills (NCM) is incorporated." , "story": "" ,	"style_number" : ONLY_TITLE },
								 "1920" : { "year": "1920",	"head" : ["La Choy®" , "Peter Pan®"] , "story": [ "Ilhan New and Wally Smith start selling  canned bean sprouts at a grocery store in Detroit under the La Choy brand.", "Peter Pan peanut butter begins production." ],	"style_number" : LARGE_TEXT },
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
								  "2010" : { "year": "2010",	"head" : "Hunt’s® reaches $500 million in net sales" , "story": "" ,	"style_number" : IMAGE_AND_TITLE },
	};
	
	
	var toolTiptemplate = '<div class="tooltip" style="margin-top:-42px;" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>';		
	
	var templateImageTitleText = $('<div class="wrapper"><div class="tooltip-img"><img src=""></div><div class="tooltip-info"><p class="year"></p><h3></h3><p class="story"></p></div></div>');
	var templateOnlyTitle = $('<div class="wrapper"><div class="tooltip-info onlyTitle"><p class="year"></p><h3></h3></div></div>');
	var templateTitleText = $('<div class="wrapper"><div class="tooltip-info onlyTitleText"><p class="year"></p><h3></h3><p></p></div></div>');
	var templateTitleText = $('<div class="wrapper"><div class="tooltip-info largText"><p class="year"></p><h3></h3><p></p></br><h3></h3><p></p></div></div>');
	var templateOnlyTwoTitle = $('<div class="wrapper"><div class="tooltip-info onlyTwoTitle"><p class="year"></p><h3></h3></br><h3></h3></div></div>');
	var templateImageTitle = $('<div class="wrapper"><div class="tooltip-img"><img src=""></div><div class="tooltip-info"><p class="year"></p><h3 class="image-title"></h3></div></div>');
	
	
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
		templateTitleText.find('.year').html(year);
		templateTitleText.find('h3:nth-child(2)').html(title[0]);
		templateTitleText.find('p:nth-child(3)').html(text[0]);
		templateTitleText.find('h3:nth-child(5)').html(title[1]);
		templateTitleText.find('p:nth-child(6)').html(text[1]);
		return templateTitleText.html();
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
		}
	}
	
	
	function prvInit(){
		 $('.circle').each(function()
			{
				var htmlForTooltip = null;
				var id = $(this).attr('id');
				var yearObject =  prv_year_description[id];
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
		yearDescription : prv_year_description
	};

})(jQuery);

