function listatodos() {

	
	$('#listatodos').empty();	

		$.ajax({
					url: 'http://icitacoapp.creatactil.com/php/listatodos2.php',
					dataType: 'jsonp',
					jsonp: 'jsoncallback',
					timeout: 5000,
					data: {},
					success: function(data){			
	   	 
		      $.each(data, function(index, item) {
			
			var columna = "Nombre";     
			var clave = item.Nombre;
			//alert(item.id);
			
			$('#listaentidad').append(			
			
			'<li class="ui-first-child">'+
			'<a href="#mapa" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="mapa(\''+item.id+'\')" >'+
			'<p">'+item.Nombre+'</p>'+
			'</a>'+
			'</li>'
		
		
			
		);					
			
		
			
		});
			 
		}
		
		});//fin ajax
		
		$.mobile.changePage("#entidad", {transition: "slide"},
		true,
        true);
	
    }  //fin funcion

