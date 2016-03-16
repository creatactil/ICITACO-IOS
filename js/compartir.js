function compartir(){
	
	//var nom = $('.t').val();
	var nom = $("tr td")[1].innerHTML;
	var dir = $("tr td")[3].innerHTML;
	var cp = $("tr td")[5].innerHTML;
	var bar = $("tr td")[7].innerHTML;
	var mun = $("tr td")[9].innerHTML;
	var mov = $("#movilentidad").text();
	var tel = $("#telefonoentidad").text();
	var web = $("#webentidad").text();
	var fac = $("#facebookentidad").text();
	
	var texto = "whatsapp://send?text="+"Nombre: "+nom +" Dirección: "+dir +" C. Postal: "+cp +" Barrio: "+bar + " Municpio: "+mun + " Móvil: "+mov + " Teléfono: "+tel +" Web: "+web +" Facebook: "+fac;
	
	
	//alert(texto)

	
	window.open(texto,'_system');
	
	}