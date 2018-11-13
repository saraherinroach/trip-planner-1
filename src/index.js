console.log('hello');

const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoiYnBlZHJhc2EiLCJhIjoiY2pvZzlsbXZxMDZwZDNxbWcwdWh1bHZyOCJ9.KLNKalycFnMhEA-AdRRW3A';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);
