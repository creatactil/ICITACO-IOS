function listamunicipios() {

	
	$('#listamunicipios').empty();	

		$.ajax({
					url: 'http://icitacoapp.creatactil.com/php/listamunicipios2.php',
					dataType: 'jsonp',
					jsonp: 'jsoncallback',
					timeout: 5000,
					data: {},
					success: function(data){			
	   	 
		      $.each(data, function(index, item) {
			
			var columna = "Municipio";    
			var clave = item.Municipio;
			
			
			$('#listamunicipios').append(			
			
			'<li class="ui-first-child">'+
			'<a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="listaentidad(\''+clave+'\',\''+columna+'\')" style="background-color:#2DA073; font-size:11px;">'+
			'<h4>'+item.Municipio+'</h4>'+
			'</a>'+
			'</li>'
		
		
			
		);					
			
		
			
		});
			 
		}
		
		});
	
    }  

