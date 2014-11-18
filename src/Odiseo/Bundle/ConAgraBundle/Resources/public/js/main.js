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
        $('.infoContent').slimScroll({
            height: 'auto',
            color: '#555',
            size: '5px',
        });
        $('.pam .otherContent').slimScroll({
            height: '214px',
            color: '#555',
            size: '5px',
        });
    });
    
})( jQuery );
