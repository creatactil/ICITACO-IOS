function listatodos() {

	
	$('#listatodos').empty();	

		$.ajax({
					url: 'http://icitacoapp.creatactil.com/php/listatodos.php',
					dataType: 'jsonp',
					jsonp: 'jsoncallback',
					timeout: 5000,
					data: {},
					success: function(data){			
	   	 
		      $.each(data, function(index, item) {
			
			var columna = "Nombre";     
			var clave = item.Nombre;
			
			
			$('#listaentidad').append(			
			
			'<li class="ui-first-child">'+
			'<a href="#mapa" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="mapa(\''+item.geometria+'\',\''+item.Nombre+'\',\''+item.Barrio+'\',\''+item.Municipio+'\',\''+item.Direccion+'\',\''+item.Facebook+'\',\''+item.CP+'\' )" >'+
			'<p">'+item.Nombre+'</p>'+
			'</a>'+
			'</li>'
		
		
			
		);					
			
		
			
		});
			 
		}
		
		});
		
		$.mobile.changePage("#entidad", {transition: "slide"},
		true,
        true);
	
    }  

