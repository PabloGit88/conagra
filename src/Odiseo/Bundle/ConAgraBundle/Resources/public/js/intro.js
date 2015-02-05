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
    	
    	$('#fos_user_registration_form_country').change(function() 
    	{    		
    		if ($(this).val() == '')
    		{
    			 $('#fos_user_registration_form_distributor').find('option:gt(0)').remove();
    			 $('#fos_user_registration_form_distributor').prop("disabled", true);
    			 return;
    		}
    		
    		retrieveDistributorsForCountry($(this).val());    	
    	});
    	
    	 $('#fos_user_registration_form_distributor').prop("disabled", true);
     });
    
	var IMG_PATH_PREFIX = $('.timelineContainer').data('timelineImgPathPrefix');
    
	function retrieveDistributorsForCountry(pais)
	{
		var distributorsCombo = $('#fos_user_registration_form_distributor');
		$.ajax({
			  url: distributorsCombo.data('countryInformationUrl'),
			  type: "get", //send it through get method
			  data: { country : pais},
			  success: function(response) 
			  {
				  distributorsCombo.find('option:gt(0)').remove();
				  $.each(response.distributors, function(index, value) 
				  {
					  distributorsCombo.append(
				          $('<option></option>').val(index).html(value)
				      );
				  });
				  $('#fos_user_registration_form_distributor').prop("disabled", false);
			  },
			  error: function(xhr) {
			  }
		});
	}
    
    
})( jQuery );
