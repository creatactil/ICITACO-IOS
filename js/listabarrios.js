function listabarrios() {

	
	$('#listabarrios').empty();	

		$.ajax({
					url: 'http://icitacoapp.creatactil.com/php/listabarrios.php',
					dataType: 'jsonp',
					jsonp: 'jsoncallback',
					timeout: 5000,
					data: {},
					success: function(data){			
	   	 
		      $.each(data, function(index, item) {
			
			var columna = "Barrio";    
			var clave = item.Barrio;
			
			
			$('#listabarrios').append(			
			
			'<li class="ui-first-child">'+
			'<a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="listaentidad(\''+clave+'\',\''+columna+'\')" style="background-color:#a1c037; font-size:11px;" >'+
			'<h4 >'+item.Barrio+'</h4>'+
			'</a>'+
			'</li>'
		
		
			
		);					
			
		
			
		});
			 
		}
		
		});
	
    }  
	
	
function listaentidad(clave, columna){
	
	var xclave = clave;
	var xcolumna = columna;
	
	//alert(xclave);
	//alert(xcolumna);
	
	
	$('#listaentidad').empty();
	
	$.mobile.changePage("#entidad", {transition: "slide"},
		true,
        true);
		
			$.ajax({
					url: 'http://icitacoapp.creatactil.com/php/listaentidad.php',
					dataType: 'jsonp',
					jsonp: 'jsoncallback',
					timeout: 5000,
					data: {clave: xclave, columna: xcolumna},
					success: function(data){			
	   	 
		      $.each(data, function(index, item) {
			
			     //alert(item.Nombre);
			
			$('#listaentidad').append(			
			
			'<li class="ui-first-child">'+
			'<a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="mapa(\''+item.geometria+'\',\''+item.Nombre+'\',\''+item.Barrio+'\',\''+item.Municipio+'\',\''+item.Direccion+'\',\''+item.Facebook+'\',\''+item.CP+'\' )" >'+
			'<h4>'+item.Nombre+'</h4>'+
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