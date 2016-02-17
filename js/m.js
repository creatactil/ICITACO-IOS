function mapatodo() {

	alert("todo");
	$('#mapatodo').empty();	

		$.ajax({
					url: 'http://icitacoapp.creatactil.com/php/listasujeto.php',
					dataType: 'jsonp',
					jsonp: 'jsoncallback',
					timeout: 5000,
					data: {},
					success: function(data){			
	   	 
		      $.each(data, function(index, item) {
			
			var geometria = item.geometria;    
			var nombre = item.Nombre;
			
			var lng = parseFloat(geometria.substring(6, 27));
  			var lat = parseFloat(geometria.substring(27, 48));				
			
		
			
		});
			 
		}
		
		});
	
    }  

