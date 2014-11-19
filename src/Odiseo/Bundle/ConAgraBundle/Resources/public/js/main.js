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
    	
    	//Scrolls
    	$('.infoContent').slimScroll({
            height: 'auto',
            color: '#555',
            size: '5px',
        });
        $('.pam .otherContent').slimScroll({
            height: '200px',
            color: '#555',
            size: '5px',
        });
    });
    
})( jQuery );