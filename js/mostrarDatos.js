function mostrarDatos(){
	
	$.mobile.changePage("#page2", {transition: "slide"},
            true,
            true);
	
	var vmovil = localStorage.movil;
	var vnombre = localStorage.nombre;
	var vapellidos = localStorage.apellidos;
	var vtelefono = localStorage.telefono;
	var vcorreo = localStorage.correo;
	var vpass = localStorage.pass;
	
	
	
	$("#movil").val(vmovil);
	$("#nombre").val(vnombre);
	$("#apellidos").val(vapellidos);
	$("#telefono").val(vtelefono);
	$("#correo").val(vcorreo);
	$("#pa1").val(vpass);
	
		
	}

