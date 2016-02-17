function compartir(){
	
	//var nom = $('.t').val();
	var nom = $("tr td")[1].innerHTML;
	var dir = $("tr td")[3].innerHTML;
	var cp = $("tr td")[5].innerHTML;
	var bar = $("tr td")[7].innerHTML;
	var mun = $("tr td")[9].innerHTML;
	var fac = $("tr td")[1].innerHTML;
	
	var texto = "Nombre: "+nom +" Dirección: "+dir +" C. Postal: "+cp +" Barrio: "+bar + " Municpio: "+mun + " Facebook: "+fac;
	
	alert(texto)

	
	//window.open('whatsapp://send?text="+\")'*/
	
	}