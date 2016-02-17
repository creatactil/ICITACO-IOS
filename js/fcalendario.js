 $.datepicker.regional['es'] = {
 closeText: 'Cerrar',
 prevText: '<Ant',
 nextText: 'Sig>',
 currentText: 'Hoy',
 monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
 monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
 dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
 dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
 dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
 weekHeader: 'Sm',
 dateFormat: 'dd-mm-yy',
 firstDay: 1,
 isRTL: false,
 showMonthAfterYear: false,
 yearSuffix: ''
 };
 $.datepicker.setDefaults($.datepicker.regional['es']);

var events = [];

        function listafechas() {
			
			$('#listadeeventos').empty();
			$.mobile.changePage("#page9", {transition: "pop"},
            true,
            true);
			
			return $.ajax({
                url: 'http://icitacoapp.creatactil.com/php/fechas.php',
				dataType: 'jsonp',
				jsonp: 'jsoncallback',
				timeout: 5000,
                success: function(data) {        
                    $.each(data, function (index, item) {
                       var fechas = item.fecha;
					   events.push([fechas]);					   
					   $("#evento").html(events.join(';'));
					   
                    });
						var loseventos = $("#evento").val();
						cargatodo(loseventos); 
                }
            });
        }


function cargatodo(pr){ 
	var eventoscargados = pr;	
	var mievento = eventoscargados.split(";");	
	var currentDate = new Date();     
	$( "#micalendario" ).datepicker({
		selectMultiple:true,
		minDate: -70,
		beforeShowDay:function(date){
				var string = jQuery.datepicker.formatDate('dd-mm-yy', date);			
				//var noWeekend = $.datepicker.noWeekends(date);

				//if (noWeekend[0]) {

					return  [true, $.inArray(string, mievento) >=0?"specialDate":''];	
						
				//}else{
					//return noWeekend;
				//}

			},
        changeMonth: false,
        changeYear: false,
	    firstDay: 1,
		onSelect: function (date) {
		$("#fechasel").val(date);
		listaEventos(date);
		
		},
    });
	
	$("#setDate").click(function () {
		$("#micalendario").datepicker("setDate", currentDate);
	});

	
	
 }