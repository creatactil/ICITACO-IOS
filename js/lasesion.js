function lasesion(){
var xmovil = localStorage.movil;


if ((typeof xmovil == 'undefined') || (xmovil == "")){
	
	
	$.mobile.changePage("#pagina0", {transition: "slide"},
            true,
            true);
	
	
		
	}else{
		crearLista();
		
		}
		
}

function lasesion2(){
var xmovil = localStorage.movil;


if ((typeof xmovil == 'undefined') || (xmovil == "")){
	
	
	$.mobile.changePage("#pagina0", {transition: "slide"},
            true,
            true);
	
	
		
	}else{
		$.mobile.changePage("#fc", {transition: "slide"},
		true,
        true);
		
		listabarrios();
		listamunicipios();
		listatipologia();
		listaprotagonista();
		listasujeto();
		mapatodo();
		}
		
}