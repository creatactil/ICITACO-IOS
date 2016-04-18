
function mapa(id) {
  
  var xid = id;
  //alert(id);
    
  $('#map').empty();
  
   
  		$.ajax({
					url: 'http://icitacoapp.creatactil.com/php/mapa2.php',
					dataType: 'jsonp',
					jsonp: 'jsoncallback',
					timeout: 5000,
					data: {id: xid},
					success: function(data){			
	   	 
		      $.each(data, function(index, item) {
			
			var x = item.x;
			var y = item.y
			var nombre = item.Nombre;
			var barrio = item.Barrio;
			var municipio = item.Municipio;
			var direccion = item.Direccion;
			var cp = item.CP;
			var movil = item.movil
			var movilb = item.movilb;
			var telefono = item.telefono;
			var correo = item.correo;
			var web = item.web;
			var facebook = item.Facebook;
			
		$("#nombreentidad").text(nombre);
	  $("#barrioentidad").text(barrio);
	  $("#municipioentidad").text(municipio);
	  $("#direccionentidad").text(direccion);
	  $("#CPentidad").text(cp);
	  
	  $("#movilentidad").text(movil);
	  $("#movilentidad").attr('href', "tel:"+movil);
	  
	  $("#movilentidad2").text(movilb);
	  $("#movilentidad2").attr('href', "tel:"+movilb);
	  
	  $("#telefonoentidad").text(telefono);
	  $("#telefonoentidad").attr('href', "tel:"+telefono);
	  
	  
	  $("#webentidad").text(web);
	  $("#webentidad").attr('href', web);
	  
	  $("#correoentidad").text(correo);
	  $("#correoentidad").attr('href', "mailto:"+correo);
	  
	  $("#facebookentidad").text(facebook);
	  $("#facebookentidad").attr('href', facebook);
  
  
  
  
  var lng = parseFloat(x);
  var lat = parseFloat(y);
  
  var myLatLng = {lat: lat, lng: lng};
  
  
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 18,
	mapTypeId: google.maps.MapTypeId.SATELLITE
  });
  
  var contentString = nombre;

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: nombre
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  	
			
		
			
		});
			 
		}
		
		});//fin ajax
  
  
  $.mobile.changePage("#mapa", {transition: "slide"},
		true,
       true);
  
  
}





