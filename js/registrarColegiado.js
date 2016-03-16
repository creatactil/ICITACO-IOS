function registrarColegiado() {

               	
				
				var xnombre = $("#nombre").val().toUpperCase();
    		  	var xapellidos = $("#apellidos").val().toUpperCase();
				var xmovil = $("#movil").val();
				
				var xdireccion = $("#direccion").val();
				var xmunicipio = $("#municipio").val();
				var xcodpostal = $("#codpostal").val();
				var xsexo = "";
				var xedad = "";
				var xcorreo = $("#correo").val();
				var xpass = $("#pass").val();
				
									
				var xregid = localStorage.regid;
				var xuuid = localStorage.uuid;
				
				var xnmovil = xmovil.substring(0, 1);	
				
					//alert (xregid);	
					//alert (xuuid);			
				
		if(xnombre == ""){
		alert("Escriba su nombre");
		$.mobile.changePage("#page2");
		$("#nombre").focus();
		return false;
		
		}else if(xapellidos ==  ""){
		alert("Escriba sus apellidos ");
		$("#apellidos").focus();
		return false;
		
		}else if(xnmovil != 6){
		alert("Escriba su telefono móvil ");
		$("#movil").focus();
		return false;
		
		}else if(xmovil ==  ""){
		alert("Escriba su telefono móvil ");
		$("#movil").focus();
		return false;
		
		}else if(xdireccion ==  ""){
		alert("Escriba su dirección ");
		$("#direccion").focus();
		return false;
		
		}else if(xmunicipio ==  ""){
		alert("Escriba su municipio ");
		$("#municipio").focus();
		return false;
		
		}else if(xcodpostal ==  ""){
		alert("Escriba su municipio ");
		$("#municipio").focus();
		return false;
		
		/*}else if(xsexo ==  ""){
		alert("Elija su sexo ");
		$("#sexo").focus();
		return false;
		
		}else if(xedad ==  ""){
		alert("Elija su rango de edad ");
		$("#edad").focus();
		return false;*/
			
		
		}else if(xcorreo == ""){
		alert("Escriba su correo electrónico");
		$("#correo").focus();
		return false;
		
		}else if(xpass == ""){
		alert("Escriba su contraseña");
		$("#pass").focus();
		return false;
		
		}else		
			
			
			
			
			
			
		   $.ajax({
           type: "POST",
           url: "http://icitacoapp.creatactil.com/php/registrocolegiado.php",
           data: ({nombre: xnombre, apellidos: xapellidos, movil: xmovil, direccion: xdireccion, municipio: xmunicipio, codpostal: xcodpostal, sexo: xsexo, edad: xedad, correo: xcorreo, pass: xpass, regid: xregid, uuid: xuuid,}),
                      cache: false,
                      dataType: "text",
                      success: onSuccess
					  
					  
					  
                    });
        	
			
            function onSuccess(data)
            {
              		
			alert(data);
			
			if (data=="Datos guardados"){
			
		localStorage.movil = xmovil;
		localStorage.correo = xcorreo;
		localStorage.pass = xpass;
		localStorage.nombre = xnombre;
		localStorage.apellidos = xapellidos;
				
		inicio();
		globo();
		}
			
            }
			
}