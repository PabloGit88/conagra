(function ( $ ) {
    'use strict';

    $(document).ready(function() 
    {
    	var sending = false;
    	$(".registerForm form, .loginForm form").validate(
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
				if(sending == false)
	        	{
					sending = true;
					form.submit();
	        	}				
			}
    			
    	});
    	
    	$('#fos_user_registration_form_country').change(function() {
    		
    		retrieveDistributorsForCountry($(this).val());
    	
    	});
    	
     });
    
    
	function retrieveDistributorsForCountry(pais)
	{
		var distributorsCombo =   $('#fos_user_registration_form_distributor');
		$.ajax({
			  url: "http://dev.conagra.com/app_dev.php/distributorsForCountry",
			  type:"get", //send it through get method
			  data:{ country : pais} ,
			  success: function(response) {
				  distributorsCombo.empty();
				  $.each(response.distributors, function(index, value) {
					  distributorsCombo.append(
				          $('<option></option>').val(index).html(value)
				      );
				  });
			  },
			  error: function(xhr) {
			  }
			});
	}
    
    
    
    
    
})( jQuery );
