function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: {
              lat: 41.390205, 
              lng: 2.154007
            }
        });

         var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

         var locations = [
            {lat: 41.380898, lng: 2.122820},
            {lat: 41.403706, lng: 2.173504},
            {lat: 41.380894, lng: 2.189385}
         ];

        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
    
        var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    }