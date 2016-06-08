function init(){
	
	var xmovil = localStorage.movil;
	//portada();

	$("#usuario").val(localStorage.correo);
	$("#pa2").val(localStorage.pass);
	//$("#pa2").focus();
	
	
	globo();
	onLoad();
	
	//cargaweb();
	
	if ((typeof xmovil == 'undefined') || (xmovil == "")){
		
		$.mobile.changePage("#page0", {transition: "slide"},
            true,
            true);
		
		}else{
			inicio();
			comprobarid();
		}
		
		
		
	}
	