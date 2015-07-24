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
         url: "http://orion.lab.fi-ware.org:1026/ngsi10/contextEntities/plant00001", type: 'GET'
    }).then(function(data) {
        alert(JSON.stringify(data));
        colocaHumedad(data); 
    });
};      

function colocaHumedad(data){
     var humedad  = data.contextElement.attributes[0].value;
     //var longitude =  data.contextElement.attributes[2].value;
     //var posicionTransporte = new google.maps.LatLng(latitude,longitude);
     //var posicionTransporte = new google.maps.LatLng(20.6992985,-103.3236317);
     /*var marker = new google.maps.Marker({
      position: posicionTransporte,
      map: map,
      title: 'El transporte esta aqui!'
    });
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');*/

    $('#tvHumedad').html("Humedad: " + humedad);
    $('#tvHumedad').val(humedad);
	//$('#Long').html("Longitud: " + lng);
/*
			            
			            $('#Long').val(lng);*/
			            
};
