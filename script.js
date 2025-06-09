// Crear el mapa centrado en UAM Lerma
const map = L.map('map').setView([19.286, -99.503], 17); // Ajusta coordenadas

// Capa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Ejemplo de área verde (polígono simple)
const areaVerde = L.polygon([
  [19.2859, -99.5025],
  [19.2859, -99.5022],
  [19.2862, -99.5022],
  [19.2862, -99.5025]
], {
  color: 'green',
  fillColor: '#7CFC00',
  fillOpacity: 0.5
}).addTo(map);

// Pop-up con beneficios
areaVerde.bindPopup("<b>Área Verde</b><br>Espacio para relajarse, respirar aire puro y reducir el estrés académico.");
