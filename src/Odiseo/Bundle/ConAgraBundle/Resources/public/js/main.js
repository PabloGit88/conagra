(function ( $ ) {
    'use strict';

    $(document).ready(function() 
    {
    	//Entrenamiento de marcas
    	$('.infoBrand .tabs a').click(function(e)
    	{
    		e.preventDefault();
    		
    		if(!$(this).hasClass('active'))
    		{
    			var goToTabClass = $(this).data('tab');
    			
    			$('.infoBrand .tabs a').removeClass('active');
    			$(this).addClass('active');
    			
    			$('.infoBrand .info .tabContent').removeClass('hide');
    			$('.infoBrand .info .tabContent').hide();
    			$('.infoBrand .info .tabContent.'+goToTabClass).show();
    		}
    	});
    	
    	$('.infoBrand .catalogoMenu a').click(function(e)
    	{
    		e.preventDefault();
    		
    		if(!$(this).hasClass('active'))
    		{
    			var goToTabClass = $(this).data('tab');
    			
    			$('.infoBrand .catalogoMenu a').removeClass('active');
    			$(this).addClass('active');
    			
    			$('.infoBrand .catalogoContent').removeClass('hide');
    			$('.infoBrand .catalogoContent').hide();
    			$('.infoBrand .catalogoContent.'+goToTabClass).show();
    		}
    	});
    	
    	// Linea de tiempo
    	var isAnimating = false;
    	$('.timelineArrows a').click(function(e)
    	{
    		e.preventDefault();
    		if(!isAnimating)
    		{
    			var width =  parseInt($('.timelineContainer').css('width'));
    			var operator = $(this).hasClass('left')?"-":"+";
	    		$('.timelineContainer').animate( { scrollLeft: operator+'='+(width/2) }, 1000, function() {
	    			isAnimating = false;
	    		});
	    		isAnimating = true;
    		}
    	});
    	
    	//Modal video
    	$('.magnificPopup').magnificPopup({type:'iframe'});
    	
    	// zoom gallery 
    	$('.zoom-gallery').magnificPopup({
    		delegate: 'a',
    		type: 'image',
    		closeOnContentClick: false,
    		closeBtnInside: false,
    		image: {
    			verticalFit: true
    		},
    		gallery: {
    			enabled: true
    		},
    		zoom: {
    			enabled: true,
    			duration: 300, // don't foget to change the duration also in CSS
    			opener: function(element) {
    				return element.find('img');
    			}
    		}
    		
    	});
    	
    	//Scrolls
    	$('.infoContent').slimScroll({
            height: 'auto',
            color: '#555',
            size: '5px',
        });
        $('.pam .otherContent, .wesson .otherContent').slimScroll({
            height: '200px',
            color: '#555',
            size: '5px',
        });
    	$('.downClick').click(function(){
    		$('.pam .otherContent').animate({scrollTop : 800},0);
			$('.pam .otherContent a').addClass('upClick');
			$('.pam .otherContent').removeClass('downClick');
    		return false;
    	});
    	$('.upClick').click(function(){
    		$('.pam .otherContent').animate({scrollTop : 0},800);
  			$('.pam .otherContent').removeClass('upClick');
  			$('.pam .otherContent a').addClass('downClick');
    		return false;
    	});
    	$('.pageButton.nextButton, .pageButton.previousButton').popover({ trigger: "hover" }); 	        
    });
    
})( jQuery );