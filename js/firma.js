function firma(){
	
	var xmovil4 = localStorage.movil;
	var xregistro4 = $("#registrofirma").text();
	
	
	$.ajax({
		url: 'http://icitacoapp.creatactil.com/php/firma.php',
		type: 'POST',
		timeout: 5000,
		data: {movil: xmovil4, registro: xregistro4},
		cache: false,
		dataType: "text",
		success: onSuccess
	
	
		});
		
		 function onSuccess(data)
            {
             
    		alert(data);
           	globo();
			$.mobile.changePage("#page1", {transition: "slide"},true, true);
		    }
				

	}
	
