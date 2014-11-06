(function ( $ ) {
    'use strict';

    $(document).ready(function() 
    {
    	var sending = false;
    	$(".registerForm form").validate(
    	{
			onkeyup: false,
			onclick: false,
			onfocusout: false,
			errorPlacement: function(error, element) 
			{
			},
			highlight: function(element, errorClass, validClass) 
			{
			    $(element).addClass(errorClass).removeClass(validClass);
			},
			unhighlight: function(element, errorClass, validClass) 
			{
			    $(element).removeClass(errorClass).addClass(validClass);
			},
			invalidHandler: function(event, validator)
			{
				alert("Debes completar todos los campos correctamente para continuar.");
			},
			submitHandler: function(form)
			{	
				alert("submit");
				if(sending == false)
	        	{
					sending = true;
	        	}
			}
    			
    	});
     });

})( jQuery );
