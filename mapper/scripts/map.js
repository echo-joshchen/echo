var Bakersfield = [35.424536,-120.325521,"Bakersfield"];
var SanFrancisco = [37.796763,-122.422234,"San Francisco"];
var SanDiego = [32.717977,-117.158993,"San Diego"];
var MBAcquarium = [36.618051,-121.902061,"Monterey Bay Aquarium"];
var markers = ['images/marker1.png', 'images/marker2.png', 'images/marker3.png', 'images/marker4.png', 'images/markerE.png', 
               'images/markerF.png', 'images/markerG.png', 'images/markerH.png', 'images/markerI.png', 'images/markerJ.png',
               'images/markerK.png', 'images/markerL.png', 'images/markerM.png', 'images/markerN.png', 'images/markerO.png',
               'images/markerP.png', 'images/markerQ.png', 'images/markerR.png', 'images/markerS.png', 'images/markerT.png',
               'images/markerU.png', 'images/markerV.png', 'images/markerW.png', 'images/markerX.png', 'images/markerY.png', 'images/markerZ.png'];
var addresses = ['1838 Bella Vista Way, Santa Rosa, CA', '3500 Parker Hill Road, Santa Rosa, CA', '2500 Monticito Blvd, Santa Rosa, CA'];
var coords = [];
var curr_stop = null;

$(document).ready(function(){
  beforeCreateMap();

  $(".active").click(function() {
    refreshMap();
  });
});

