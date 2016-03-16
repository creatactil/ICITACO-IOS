
function mapa(geometria, nombre, barrio, municipio, direccion, facebook, CP, movil, telefono, web) {
  
  $('#map').empty();
  
  
  //var nombre = nombre;
  $("#nombreentidad").text(nombre);
  $("#barrioentidad").text(barrio);
  $("#municipioentidad").text(municipio);
  $("#direccionentidad").text(direccion);
  $("#CPentidad").text(CP);
   $("#movilentidad").text(movil);
  $("#movilentidad").attr('href', "tel:"+movil);
  $("#telefonoentidad").text(telefono);
  $("#telefonoentidad").attr('href', "tel:"+telefono);
  $("#webentidad").text(web);
  $("#webentidad").attr('href', web);
  $("#facebookentidad").text(facebook);
  
  $("#facebookentidad").attr('href', facebook);
  
  
  //alert(nombre);
  
  
  
  var lng = parseFloat(geometria.substring(6, 27));
  var lat = parseFloat(geometria.substring(27, 48));
  
  //alert(lat);
  //alert(lng);
  
  var myLatLng = {lat: lat, lng: lng};
  
  
  $.mobile.changePage("#mapa", {transition: "slide"},
		true,
       true);

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
  
  
}





