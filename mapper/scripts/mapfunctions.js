/**

This file has Google Maps API functions.

**/

function geocodeAddress(index) {
  // Geocode all addresses
  if (index < addresses.length)
  {
	GMaps.geocode({
      address: addresses[index],
      callback: function(results, status) {
        if (status == 'OK') {
          var latlng = results[0].geometry.location;
          coords[index] = [latlng.lat(), latlng.lng(), addresses[index]];
          refreshMap();
          geocodeAddress(index + 1);
        }
      }
    });
  }
  else
  {
	  refreshMap();
  }
}

// Creates the initial map at Santa Rosa
function createMap() {
  
  map = new GMaps({
    el: '#map',
    lat: SantaRosa[0],
    lng: SantaRosa[1],
    zoom: 9
  });

  return map;
}

// Add the markers
function setAddressMarkers() {
  // Add all markers
  for (var i = 0; i < addresses.length; i++) {
	if (coords[i] != null)
	{
		map.addMarker({
		  lat: coords[i][0],
		  lng: coords[i][1],
		  title: addresses[i],
		  icon: markers[i]
		});
	}
  }

  fitMap();
}

function fitMap() {
  var places = [];
  for (var i = 0; i < coords.length; i++) {
	  if (coords[i] != null)
	  {
	  	places.push(new google.maps.LatLng(coords[i][0], coords[i][1]));
	  }
  }
  var bounds = new google.maps.LatLngBounds ();
  //  Go through each...
  for (var i = 0; i < places.length; i++) {
    //  And increase the bounds to take this point
    bounds.extend(places[i]);
  }
  //  Fit these bounds to the map
  map.fitBounds (bounds);

  delete bounds;
  for (var i = 0; i < places.length; i++) {
    delete places[i];
  }
  delete places;
}

function refreshMap() {
  fitMap();
  map.removeMarkers();
  setAddressMarkers();
}
