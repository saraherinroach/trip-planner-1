const mapboxgl = require("mapbox-gl");

function buildMarker(type, coords) {
  const markerDomEl = document.createElement('div'); //detached div element
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";

  if (type === 'restaurant') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  } else if (type === 'activity') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  } else if (type === 'hotel') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  }

  return new mapboxgl.Marker(markerDomEl).setLngLat(coords).addTo(map);

}

module.exports(buildMarker)
