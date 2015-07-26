/*var myLatLng;
var myLatLng2;
var gl = navigator.geolocation;
var latitude;
var longitude;
var marker;
var map;
var bMap = false;
*/

$(document).ready(function() {
		inicializar();
	
});


function inicializar() {
  	setInterval(revisarSensores(), 3000);
};

function revisarSensores() {
    revisarHumedad();
    revisarTemperatura();
};

function revisarHumedad() {      

$.ajaxSetup({
  beforeSend: function(request) {
    request.setRequestHeader("X-Auth-Token","VMfS1db5lyV3mtJ7YSqAqPFHR9cu9m");
    request.setRequestHeader("Accept","application/json");
    request.setRequestHeader("Content-Type","application/json"); 
  }
});
    
$.ajax({
         url: "http://orion.lab.fi-ware.org:1026/ngsi10/contextEntities/plant00002", type: 'GET'
    }).then(function(data) {
        //alert(JSON.stringify(data));
        colocaHumedad(data); 
    });
};      

function revisarTemperatura() {      

$.ajaxSetup({
  beforeSend: function(request) {
    request.setRequestHeader("X-Auth-Token","VMfS1db5lyV3mtJ7YSqAqPFHR9cu9m");
    request.setRequestHeader("Accept","application/json");
    request.setRequestHeader("Content-Type","application/json"); 
  }
});
    
$.ajax({
         url: "http://orion.lab.fi-ware.org:1026/ngsi10/contextEntities/plant00002", type: 'GET'
    }).then(function(data) {
        //alert(JSON.stringify(data));
        colocaTemperatura(data); 
    });
};      


function revisarTierra() {      

$.ajaxSetup({
  beforeSend: function(request) {
    request.setRequestHeader("X-Auth-Token","VMfS1db5lyV3mtJ7YSqAqPFHR9cu9m");
    request.setRequestHeader("Accept","application/json");
    request.setRequestHeader("Content-Type","application/json"); 
  }
});
    
$.ajax({
         url: "http://orion.lab.fi-ware.org:1026/ngsi10/contextEntities/plant00002", type: 'GET'
    }).then(function(data) {
        //alert(JSON.stringify(data));
        colocaTemperatura(data); 
    });
};     

function colocaHumedad(data){
     var humedad =  data.contextElement.attributes[0].value;
     $('#tvHumedad').html("Humedad: " + humedad);
     $('#tvResponse').html(JSON.stringify(data));
};

function colocaTemperatura(data){
    var temperatura =  data.contextElement.attributes[1].value;
    $('#tvTemperatura').html("Temperatura: " + temperatura);
    $('#tvResponse').html(JSON.stringify(data));
};

function colocaTierra(data){
     var tierra =  data.contextElement.attributes[2].value;
     $('#tvTierra').html("Humedad tierra: " + tierra);
     $('#tvResponse').html(JSON.stringify(data));
};
