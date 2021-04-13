import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

export const createMap = (longitude, latitude) => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0ZTMxIiwiYSI6ImNrM3QxcmQ2eTBhbXEzbm5oaDZqczltdXcifQ.RqWWmCUES-HkUrAd1Omhyg';
  var map = new mapboxgl.Map({
  container: 'map',
  center: [longitude, latitude], 
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 9
 });

}

