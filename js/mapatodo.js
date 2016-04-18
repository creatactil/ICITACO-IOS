function mapatodo() {
  

		var taco =  {lat: 28.447737, lng: -16.297841};
	// Create a map object and specify the DOM element for display.
  			var map = new google.maps.Map(document.getElementById('mapatodo'), {
    			center: taco,
    			scrollwheel: false,
    			zoom: 15,
				mapTypeId: google.maps.MapTypeId.SATELLITE
  			});	
		
		
		
		
		
		
		$.ajax({
					url: 'http://icitacoapp.creatactil.com/php/mapatodos2.php',
					dataType: 'jsonp',
					jsonp: 'jsoncallback',
					timeout: 5000,
					data: {},
					success: function(data){			
	   	 
		      $.each(data, function(index, item) {
			
			//var geometria = item.geometria;    
			var nombre = item.Nombre;
			
			var lng = parseFloat(item.x);
  			var lat = parseFloat(item.y);
						
			//alert(lat);
  			//alert(lng);
  
  			var myLatLng = {lat: lat, lng: lng};
		// Create a map object and specify the DOM element for display.
  			
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
			
		
			 
		}); // fin each
					
					}//fin function
					
		
	});
  
  
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  
 
  
  
  /*
  
  

  
  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: nombre
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  
  
  $.mobile.changePage("#fc", {transition: "slide"},
		true,
       true);
}
*/




