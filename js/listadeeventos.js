function listaEventos(date) {
				
    
		$('#listadeeventos').empty();
		var xfechaevento = date;		
		                 
						
		$.ajax({
		url: 'http://icitacoapp.creatactil.com/php/listaeventos.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {fecha: xfechaevento},
		success: function(data){
			
			if(data == "No"){
				
				$('#listadeeventos').append("No hay eventos para esta fecha");								
								
			}else{			
	   	 
		     
	    $.each(data, function(index, item) {
	
				
			
			$('#id_'+index).remove();
			
			
			var verde = "#000000";
				
			
				var tema = "#000000";
				
									
			$('#listadeeventos').append(			
			
       		'<li class="ui-li-has-alt ui-li-has-thumb ui-first-child ui-last-child" style="height: 60px; margin-left:2%; "><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="changePage(id_' + index + ')" style="height: 60px; padding:0; background-color:#ffffff; margin-right:2%; ">'+
		'<h2 style="left:60px; margin-top:3px; font-size: 0.8em;  color:'+tema+'" >'+item.titulo+'</h2>'+
		'<p style="left:60px; padding:0; color:'+verde+'; font-size: 0.8em ; margin-top:0px;">'+'Fecha:  '+item.fecha+'<br>'+
    	''+'Hora: '+''+item.hora+'</p>'+
		'</li>'
		
		
			
		);
			
		/*Pagina dinamica*/
		content = 
			'<div data-role="page"  id="id_' + index + '" data-url="id_' + index + '" data-theme="a" >' +
					'<div style="height:20px; visibility:hidden"> </div>'+
					'<div data-role="header" data-theme="b" >' + 
					'<a href="#page9" data-role="button" data-icon="carat-l" data-iconpos="notext" data-theme="a" class="ui-link ui-btn-left ui-btn ui-btn-a ui-icon-carat-l ui-btn-icon-notext ui-shadow ui-corner-all" role="button"><span class="ui-btn-inner ui-corner-bottom ui-controlgroup-last" aria-hidden="true"><span class="ui-btn-text">Atrás</span><span class="ui-icon ui-icon-back ui-icon-shadow"></span></span></a>'+
					'<h1 style="font-size:13px; margin:0 10%">' + item.titulo + '</h1>' +
					
					'</div>' +
					'<div data-role="content" id="contenido" >' +
					'<p style="margin:-1em; padding:0;">' +
                    '<div data-role="fieldcontain" class="result" >' +
                    '<p style="margin:0; padding:0; color:#000000; font-size: 0.9em "><strong>Evento: </strong>'+item.titulo+'<br>'+
                    '<strong>Fecha: </strong>'+item.fecha+'<br>'+
					'<strong>Hora: </strong>'+item.hora+'<br>'+
					'</p>'+
                    
					'<p>'+ item.texto + '</p>' +
					
					'<br>'+
                    '<br>'+
						
					'<center>'+
								'<a style="width:50%; font-size: 11px" class="confirmar" data-role="button" data-icon="check" onClick="confirmar(\''+item.id+'\' )">'+item.firma+'</a>'+
								'</center>'+
                                  '</div>' +
								  
                                '</p>' +
							  	
		
	
								'</div>';
	   
			
			$('body').append(content).trigger('refresh');
			$(index).page();
			
			
		});
		
		}
		
			$("#carga23").hide(); 
		}
		
		});
			
			$('#piepagina').append('<div data-role="footer" data-theme="b" data-position="fixed" style="background:#ccc" role="contentinfo" class="ui-footer ui-bar-b ui-footer-fixed slideup ui-fixed-hidden">'+
    '<div data-role="navbar" class="ui-navbar" role="navigation">'+
    '<ul class="ui-grid-c">'+
    '<li class="ui-block-a"><a href="#page1" data-transition="slide" data-role="button" onclick="globo()" data-icon="home" class="ui-link ui-btn ui-icon-home ui-btn-icon-top ui-shadow ui-corner-all" role="button")">Inicio</a></li>'+
    '<li class="ui-block-b"><a href="#" data-role="button" onclick="crearLista()" data-icon="mail" class="ui-link ui-btn ui-icon-mail ui-btn-icon-top ui-shadow ui-corner-all" role="button"><img src="" class="globo" style="float:left; width:15px;" >Circulares</a></li>'+
    '<li class="ui-block-c"><a href="#" data-role="button" onclick="listafavorito()" data-icon="star" class="ui-link ui-btn ui-icon-star ui-btn-icon-top ui-shadow ui-corner-all" role="button" >Favoritos</a></li>'+
    '<li class="ui-block-d"><a href="#page5" data-role="button" onclick="" data-icon="info" class="ui-link ui-btn ui-icon-info ui-btn-icon-top ui-shadow ui-corner-all" role="button" >Ayuda</a></li>'+
    '</ul>'+
	'</div>'
									);
	
			
		  	$('#lista').listview('refresh', true);
			$('#lista1').listview('refresh', true);
			globo();
			
    } 
	 



 
function changePage(id) {
		$.mobile.changePage($(id), {transition : "slide"});
		
	}
	
function confirmar(id){
	
	var xid = id.toString();
	
	var almacen = localStorage.getItem(xid);
	
	if (almacen == "1"){
		
		alert ("Este Evento ya ha sido confirmado anteriormente"); 
	}else{
		
		$.ajax({
		url: 'http://icitacoapp.creatactil.com/php/sumasistencia.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {id: xid},
		success: function(){}
		
		
		});
		
		alert ("Gracias por su participación"); 
		localStorage.setItem(xid, 1);
	}
	
}