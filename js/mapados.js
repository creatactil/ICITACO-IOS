function mapatodo() {
  

		var taco =  {lat: 28.447737, lng: -16.297841};
	// Create a map object and specify the DOM element for display.
  			var map = new google.maps.Map(document.getElementById('mapatodo'), {
    			center: taco,
    			scrollwheel: false,
    			zoom: 12
  			});	
		
		
		
		
		
		
		$.ajax({
					url: 'http://icitacoapp.creatactil.com/php/mapatodos.php',
					dataType: 'jsonp',
					jsonp: 'jsoncallback',
					timeout: 5000,
					data: {},
					success: function(data){			
	   	 
		      $.each(data, function(index, item) {
			
			var geometria = item.geometria;    
			var nombre = item.Nombre;
			
			var lng = parseFloat(geometria.substring(6, 27));
  			var lat = parseFloat(geometria.substring(27, 48));
						
			//alert(lat);
  			//alert(lng);
  
  			var myLatLng = {lat: lat, lng: lng};
		// Create a map object and specify the DOM element for display.
  			var marker = new google.maps.Marker({
    			map: map,
    			position: myLatLng,
   				 title: nombre
  			});

			
		
			 
		});
					
					}
					
		
	});
  
  
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  
 
  
  
  
  
  

  
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





