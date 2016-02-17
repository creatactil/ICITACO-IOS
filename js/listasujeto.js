function listasujeto() {

	
	$('#listasujeto').empty();	

		$.ajax({
					url: 'http://icitacoapp.creatactil.com/php/listasujeto.php',
					dataType: 'jsonp',
					jsonp: 'jsoncallback',
					timeout: 5000,
					data: {},
					success: function(data){			
	   	 
		      $.each(data, function(index, item) {
			
			var columna = "Sujeto";     
			var clave = item.Sujeto;
			
			
			$('#listasujeto').append(			
			
			'<li class="ui-first-child">'+
			'<a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="listaentidad(\''+clave+'\',\''+columna+'\')" style="background-color:#a1c037; font-size:11px;">'+
			'<h4>'+item.Sujeto+'</h4>'+
			'</a>'+
			'</li>'
		
		
			
		);					
			
		
			
		});
			 
		}
		
		});
	
    }  

