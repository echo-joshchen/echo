var SantaRosa = [38.438710, -122.716763,"Santa Rosa"];
var markers = ['images/marker1.png', 'images/marker2.png', 'images/marker3.png', 'images/marker4.png', 'images/markerE.png', 
               'images/markerF.png', 'images/markerG.png', 'images/markerH.png', 'images/markerI.png', 'images/markerJ.png',
               'images/markerK.png', 'images/markerL.png', 'images/markerM.png', 'images/markerN.png', 'images/markerO.png',
               'images/markerP.png', 'images/markerQ.png', 'images/markerR.png', 'images/markerS.png', 'images/markerT.png',
               'images/markerU.png', 'images/markerV.png', 'images/markerW.png', 'images/markerX.png', 'images/markerY.png', 'images/markerZ.png'];
var addresses = ['1838 Bella Vista Way, Santa Rosa, CA', '3500 Parker Hill Road, Santa Rosa, CA', 'Crown Hill Rd, Santa Rosa, CA'];
var coords = [];
var curr_stop = null;
var map;

$(document).ready(function(){
  geocodeAddress(0);
  createMap();

  $(".active").click(function() {
    refreshMap();
  });
});

