let map = L.map('map').setView([48.8566, 2.3522], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

let circle = L.circle([48.8584, 2.2945], {
    color: 'purple',
    fillColor: '#f03',
    fillOpacity: 0.2,
    radius: 500
}).addTo(map);

L.polygon([
    [48.8566, 2.3522],
    [48.85053, 2.272801]
], {
    color: 'purple',
    weight: 4,
    opacity: 0.3
}).addTo(map);

L.polygon([
    [48.855053, 2.272801],
    [48.88621, 2.34293]
], {
    color: 'purple',
    weight: 4,
    opacity: 0.3
}).addTo(map);

let schoolIcon = L.icon({
    iconUrl: './images/school.png',
    iconSize: [40, 45],
    iconAnchor: [16, 5],
    popupAnchor: [10, -65]
});

L.marker([48.855053, 2.272801], { icon: schoolIcon })
    .addTo(map)
    .bindPopup('<b>ICAN 👩🏻‍💻</b><br><a href="https://www.ican-design.fr/" target="_blank">Visit website</a>')
    .openPopup();

let cityhallIcon = L.icon({
    iconUrl: './images/cityhall.png',
    iconSize: [70, 70],
    iconAnchor: [16, 65],
    popupAnchor: [10, -65]
});

L.marker([48.8566, 2.3522], { icon: cityhallIcon })
    .addTo(map)
    .bindPopup('<b>City Hall of Paris!</b><br><a href="https://www.paris.fr/" target="_blank">Visit website</a>')
    .openPopup();

let montmartreIcon = L.icon({
    iconUrl: './images/montmartre.png',
    iconSize: [70, 70],
    iconAnchor: [16, 65],
    popupAnchor: [20, -65]
});

L.marker([48.88621, 2.34293], { icon: montmartreIcon })
    .addTo(map)
    .bindPopup('<b>Montmartre!</b><br><a href="https://museedemontmartre.fr/" target="_blank">Visit website</a>')
    .openPopup();

let stadeIcon = L.icon({
    iconUrl: './images/stade.png',
    iconSize: [70, 75],
    iconAnchor: [16, 5],
    popupAnchor: [20, -5]
});

L.marker([48.924459, 2.360164], { icon: stadeIcon })
    .addTo(map)
    .bindPopup('<b>Go to Stade of France!</b><br><a href="https://www.stadefrance.com/fr" target="_blank">Visit website</a>')
    .openPopup();

let concertIcon = L.icon({
    iconUrl: './images/concert.png',
    iconSize: [60, 65],
    iconAnchor: [16, 5],
    popupAnchor: [10, -15]
});

L.marker([48.8414, 2.3786], { icon: concertIcon })
    .addTo(map)
    .bindPopup('<b>Welcome to the Accor Arena!</b><br><a href="https://www.accorarena.com/fr" target="_blank">Visit website</a>')
    .openPopup();

map.on('click', function(e) {
    L.marker([e.latlng.lat, e.latlng.lng])
      .addTo(map)
      .bindPopup("Marker at " + e.latlng.toString())
      .openPopup();
});

let parisCoords = [48.8566, 2.3522];

let recenterControl = L.Control.extend({
    options: { position: 'topleft' },

    onAdd: function(map) {
        let container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        container.innerHTML = '🏠';
        container.title = "Go to Paris";

        container.onclick = function() {
            map.flyTo(parisCoords, 13, {
                animate: true,
                duration: 2
            });
        }

        return container;
    }
});

map.addControl(new recenterControl());
