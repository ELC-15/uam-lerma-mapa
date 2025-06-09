const map = L.map('map').setView([19.29657, -99.49871], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const areaVerde = L.polygon([
  [19.2964, -99.4990],
  [19.2964, -99.4984],
  [19.2968, -99.4984],
  [19.2968, -99.4990]
], {
  color: 'green',
  fillColor: '#7CFC00',
  fillOpacity: 0.5
}).addTo(map);

areaVerde.bindPopup("🌳 <b>Área Verde</b><br>Ideal para reducir el estrés académico.");
