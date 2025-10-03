let map = L.map('map').setView([48.8566, 2.3522], 13);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);


let circle = L.circle([48.855053, 2.272801], {
    color: 'blue',
    fillColor: '#30f',
    fillOpacity: 0.2,
    radius: 500
}).addTo(map);

L.polygon([
    [48.8566, 2.3522],
    [48.85053, 2.272801]
], {
    color: 'blue',       // couleur de la bordure
    weight: 4,          // épaisseur de la ligne
    opacity: 0.3,
}).addTo(map);

function onMapClick(e) {
    alert('You clicked the map at ' + e.latlng);
  }
  
  map.on('click', onMapClick);

  var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

let schoolIcon = L.icon({
    iconUrl: './images/school.png',
    iconSize: [40, 45],
    iconAnchor: [16, 5],
    popupAnchor: [0, -65]
});

  L.marker([48.855053, 2.272801], { icon: schoolIcon })
    .addTo(map)
    .bindPopup("Back to ICAN!")
    .openPopup()

let cityhallIcon = L.icon({
    iconUrl: './images/cityhall.png',
    iconSize: [70, 70],
    iconAnchor: [16, 65],
    popupAnchor: [0, -65]
});

    L.marker([48.8566, 2.3522], { icon: cityhallIcon })
    .addTo(map)
    .bindPopup("City Hall of Paris!")
    .openPopup()

    let montmartreIcon = L.icon({
        iconUrl: './images/montmartre.png',
        iconSize: [70, 70],
        iconAnchor: [16, 65],
        popupAnchor: [0, -65]
    });
    
        L.marker([48.88621, 2.34293], { icon: montmartreIcon })
        .addTo(map)
        .bindPopup("Montmartre!")
        .openPopup()