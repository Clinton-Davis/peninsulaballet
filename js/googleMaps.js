console.log("Hello World");

function initMap() {
    // The location of Uluru
    var capeTown = {lat: -34.13625 , lng: 18.43042};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 11, center: capeTown});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: capeTown, map: map});
  }
  