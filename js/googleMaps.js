
var locations = [
    ['Fish Hoek Presbyterian church', -34.1446902, 18.4111427, ],
    ['Muizenberg Junior School',  -34.1230319, 18.4116117, ],
    ['Kommetjie Wellness Centre', -34.1376456, 18.3159183, ],
    ['Kirstenhof Pollsmoor Road', -34.0758054, 18.4460847, ],
    
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: new google.maps.LatLng(-34.13625, 18.43042),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
  