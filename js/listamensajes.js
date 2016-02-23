function crearLista() {
				
    	var biblioteca = "https://issuu.com/icitaco','_system'";
		
		var xmovil = localStorage.movil;
		$.mobile.changePage("#page4", {transition: "slide"},
            true,
            true);
	
			$('#page4 ul').empty();
            $("#carga23").show();
		                 
						
		$.ajax({
		url: 'http://icitacoapp.creatactil.com/php/listamensajes.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {movil: xmovil},
		success: function(data){			
	   	 
		     
	    $.each(data, function(index, item) {
	
			var registro = item.registro;
            //var codigo = item.codigo;
			var estado = item.estado;
			var id_aux = item.id_aux;
			var movil = item.codigo;
			
			
			$('#id_'+index).remove();
			
			
			var verde = "#006837";
				
			if(estado==0){
				var tema = "#104f4b";
				var listo = "#lista";
				//color:#BCBCBC;
				}else{	
				var tema = "#A4A4A4"; 
				var listo = "#lista1";}
									
			$(listo).append(			
		
       		'<li class="ui-li-has-alt ui-li-has-thumb ui-first-child ui-last-child" style="height: 60px"><a href="#" class="ui-btn" onclick="changePage(id_' + index + '), contador(\''+registro+'\'), modificaEstado(\''+registro+'\');" style="height: 60px; padding:0; background-color:#fafafa " >'+
			'<img src="imagenes/icono.png" class="ui-li-thumb" style="margin-top: 5px; margin-left: 5px; height: 50px">'+
		'<h2 style="margin-left:60px; margin-top:2px; font-size: 0.8em;  color:'+tema+'" >'+item.titulo+'</h2>'+
		'<p style="margin-left:60px; padding:0; color:'+verde+'; font-size: 0.7em ">'+'Nº Registro:  '+item.registro+'<br>'+
    	''+'Fecha: '+''+item.fecha+'</p>'+
		
       '<a href="#" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="purchase" aria-expanded="false" class="ui-btn ui-btn-icon-notext ui-icon-delete ui-btn-a" onClick="borrarMensaje(\''+item.id_aux+'\' )" style="height: 62px; background-color:#fafafa">'+
		'</a>'+
    	'</li>'

		);
			
		/*Pagina dinamica*/
		content = 
			'<div data-role="page"  id="id_' + index + '" data-url="id_' + index + '" data-theme="a" >' +
					'<div style="height:20px; visibility:hidden"> </div>'+
					'<div data-role="header" data-theme="b">' + 
					'<a href="" onClick="crearLista()" data-role="button" data-icon="carat-l" data-iconpos="notext" data-theme="a" class="ui-link ui-btn-left ui-btn ui-btn-a ui-icon-carat-l ui-btn-icon-notext ui-shadow ui-corner-all" role="button"><span class="ui-btn-inner ui-corner-bottom ui-controlgroup-last" aria-hidden="true"><span class="ui-btn-text">Atrás</span><span class="ui-icon ui-icon-back ui-icon-shadow"></span></span></a>'+
					'<h1>' + item.titulo + '</h1>' +
					
					'</div>' +
					'<div data-role="content" id="contenido" >' +
					'<p style="margin:-1em; padding:0;">' +
                    '<div data-role="fieldcontain" class="result" >' +
                    '<p style="margin:0; padding:0; color:#006837; font-size: 0.9em ">Nº de Registro: '+item.registro+'<br>'+
                    'Fecha: '+item.fecha+'</p>'+
                    
					'<p>'+ item.texto + '</p>' +
					'<p><strong>'+item.nombre+'</strong></p>'+
					'<br>'+
                    '<a href="" onclick="descargarArchivo(\''+item.enlace+'\')" >'+item.enlace+'</a>'+
								  '<br>'+
								  '<br>'+
								  '<br>'+
								  '<a href="#page11" style="color:#006837"  data-transition="pop" onClick="textofirma(\''+item.registro+'\',\''+item.titulo+'\')">'+item.firma+'</a>'+
								   '<br>'+
								  '<br>'+
								  '</div>' +
								  
                                '</p>' +
							  	
		
	
								'</div>';
	   
			
			$('body').append(content).trigger('refresh');
			$(index).page();
			
			
		});
			$("#carga23").hide(); 
			
		}
		
		});
			
			$('#piepagina').append('<div data-role="footer" data-theme="b" data-position="fixed" role="contentinfo" class="ui-footer ui-bar-b ui-footer-fixed slideup">'+
        '<div data-role="navbar" class="ui-navbar" role="navigation">'+
        '<ul class="ui-grid-d">'+
        '<li class="ui-block-a">'+
		'<a href="#page1" data-theme="b" data-role="button" data-icon="home" class="ui-link ui-btn ui-btn-b ui-icon-home ui-btn-icon-top ui-shadow ui-corner-all" role="button">Inicio</a></li>'+
          '<li class="ui-block-b">'+
		  '<a href="#" data-role="button" onclick="lasesion()" data-icon="mail" class="ui-link ui-btn ui-icon-mail ui-btn-icon-top ui-shadow ui-corner-all" role="button"><img class="globo" style="float:left; width:14px;" src="http://icitacoapp.creatactil.com/imgportada/0.png">Mensajes</a></li>'+
    	'<li class="ui-block-c"><a data-role="button" onclick="lasesion2()" style="background-color:#03819F; padding-top:14px; padding-bottom:6px; padding-left:0.5px; padding-right:0.5px; " class="ui-link ui-btn ui-shadow ui-corner-all" role="button">Fichero<br>Comunitario</a></li>'+
    	'<li class="ui-block-d"><a onclick="window.open(\''+biblioteca+');" data-role="button" data-transition="slide" data-icon="info" class="ui-link ui-btn ui-icon-info ui-btn-icon-top ui-shadow ui-corner-all" role="button">Biblioteca</a></li>'+
        '<li class="ui-block-e"><a href="#page15" data-role="button" data-transition="slide" data-icon="plus" class="ui-link ui-btn ui-icon-plus ui-btn-icon-top ui-shadow ui-corner-all" role="button">Más</a></li>'+
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
	
	
function borrar1(id_aux){
	
	var elidaux = id_aux; 
	$("#id_aux3").val(elidaux);	
	
	}
	
//Camabia el estado del mensaje de no leido a leido
function modificaEstado(registro){
	
	var registro2 = registro;
	var xmovil2 = localStorage.movil;
	
	
	$.ajax({
		url: 'http://icitacoapp.creatactil.com/php/modificaestado.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {movil: xmovil2, registro: registro2},
		success: function(data){}
		
		});
		globo();
	}
	
//Añade al contador de mensaje
function contador(registro){
	
	var registro3 = registro;
	var xmovil3 = localStorage.movil;
	
	
	$.ajax({
		url: 'http://icitacoapp.creatactil.com/php/contador.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {movil: xmovil3, registro: registro3},
		success: function(data){}
		
		});
	modificaEstado(registro3);
	globo();
	}
	

function textofirma(registro, titulo){
	
	
	$("#registrofirma").text(registro);
	$("#titulofirma").text(titulo);
	
	}
	

	
	//DESCARGA DE ARCHIVO AL MOVIL FILE TRANSFER
function descargarArchivo(nombre){
	
	            
                var server = "http://icitaco.creatactil.com/files/";
                var filename = nombre;
                var uri = encodeURI(server + filename);
                
				abrirfichero(uri);

                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, onErrorCallback);

                function onFileSystemSuccess(fileSystem) {
                    
                    // alert("got filesystem");

                    fileSystem.root.getDirectory('ICITACO',
                        { create:true },
                        transferFile,
                        onErrorCallback
                    );

                }                

                // console.log(uri);
                //alert("here");

                function transferFile(dir){
                    
                    // alert("got dir");
                    console.log(dir.toURL());
                    console.log(uri);
					
					   //modificacion por path  
					
                    path = dir.toURL() + '/' + filename;//AQUI ES EL CAMBIO de fullpath por toURL()
					
                    var fileTransfer = new FileTransfer();

                    fileTransfer.download(
                        uri,
                        path,
                        function(entry) {
                            console.log("download complete: " + entry.toURL());
                                                
                        },
                        function(error) {
                            console.log("download error source " + error.source);
                            console.log("download error target " + error.target);
                            console.log("upload error code " + error.code);
                        }
                    );
               
	

            }

            // a generic error callback function
            function onErrorCallback(error) {
                alert("Error!" + error.code);
                console.log(error);
            }
 

}

function abrirfichero(ruta3){
	
	console.log(ruta3);
	window.open (ruta3, '_blank', 'location=yes,closebuttoncaption=done,enableViewportScale=yes');
	
	
	}
