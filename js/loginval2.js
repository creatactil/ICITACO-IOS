function loginVal2(){
		
		var xusuario = $("#usuario").val();
		var xpa2 = $("#pa2").val();
		
		
		if(document.form2.usuario.value.length == ""){
			//navigator.notification.alert("Introduzca su correo electrónico"); 
			alert("Introduzca su correo electrónico");
			document.form2.usuario.focus();
			return false;
			
		}else if(document.form2.pa2.value.length ==  ""){
			//navigator.notification.alert("Escriba contraseña ");
			alert("Escriba contraseña ");
			document.form2.pa2.focus();
			return false;
						
		}else
	
	$.ajax({
		url: 'http://icitacoapp.creatactil.com/php/login2.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 10000,
		data: {usuario: xusuario, pa2: xpa2},
		error: function() {
       	 //navigator.notification.alert("Ha surgido un error.\nPor favor compruebe su conexión a internet o el correo y la contraseña.");
		 alert("Ha surgido un error.\nPor favor compruebe su conexión a internet o el correo y la contraseña.");
		 $.mobile.changePage("#page0");
		 
   		},
		success: function(data, response){

			if (response != 'error'){
    		
			$.each(data, function(index,item){
		
				
				localStorage.movil = item.movil;
				localStorage.nombre = item.nombre;
				localStorage.apellidos = item.apellidos;
				localStorage.correo = item.correo;
				localStorage.pass = xpa2;				
				$.mobile.changePage("#page1");
				
				
			});
			
			}
		},

});
comprobarid();
}

function comprobarid(){
	
	var xregid = localStorage.regid;
	var xuuid = localStorage.uuid;
	var xmovil = localStorage.movil;
	 		
	if((xregid != "") && (xuuid != "") && (xmovil != "")){
		$.ajax({
		url: 'http://icitacoapp.creatactil.com/php/comprobarid.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {regid: xregid, movil: xmovil, uuid: xuuid},
		
			});
	
	}
	}