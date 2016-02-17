function globo(){

  
  var conta1 = "0";  
  var xmovil3 = localStorage.movil;
			
	$.ajax({
		type: "GET",
		url: 'http://icitacoapp.creatactil.com/php/containicio.php',
		dataType: "text",
		data: {movil: xmovil3},
		success:  function(data){
						  
						  var carpeta = "http://icitacoapp.creatactil.com/imgportada/"
						 
							
							var conta1 = data;
							
						
							if(conta1 <= 5){	
									
							$(".globo").attr("src", carpeta.concat(conta1+".png"));
							}else if (conta1 > 5) {
							$(".globo").attr("src", carpeta.concat("5mas.png"));
							}else {
							$(".globo").attr("src", carpeta.concat("0.png"));								
							}
				
						  
						 }//fin function
		}); //fin ajax
		
		

		
}// fin globo		

