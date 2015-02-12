var map;
var astorPlace = new google.maps.LatLng(41.399095, -73.44344);


function initialize() {

  // Set up the map
  var mapOptions = {
    center: astorPlace,
    zoom: 18,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

 
   var ctaLayer = new google.maps.KmlLayer({
    url: 'http://crkrav.herokuapp.com/bingroute.kml'
  });
  ctaLayer.setMap(map);



}


