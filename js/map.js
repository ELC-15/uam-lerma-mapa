const map = L.map('map').setView([19.29153, -99.49959], 18);

// Añadir capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Definir cancha de fútbol con coordenadas proporcionadas
const canchaFutbol = L.polygon([
  [19.2918121, -99.4997636], // Nodo 1
  [19.2918070, -99.4993183], // Nodo 2
  [19.2916401, -99.4997674], // Nodo 3
  [19.2912092, -99.4997623], // Nodo 4
  [19.2912019, -99.4993371], // Nodo 5
  [19.2918121, -99.4997636]  // Cierra el polígono volviendo al Nodo 1
], {
  color: '#1E90FF', // Borde azul
  fillColor: '#32CD32', // Relleno verde césped
  fillOpacity: 0.7,
  weight: 2
}).addTo(map);

// Popup para la cancha de fútbol
canchaFutbol.bindPopup(`
  <b>Cancha de Fútbol UAM Lerma</b><br>
  ⚽ Espacio para partidos de fútbol soccer y rápido.<br>
  - <b>Actividades:</b> Torneos internos, convivencias UAM.<br>
  - <b>Horario:</b> Consultar con el área deportiva.<br>
  - <b>Etiquetas OSM:</b> leisure=pitch, sport=soccer
`);

// Resaltar cancha al pasar el ratón
canchaFutbol.on('mouseover', function () {
  this.setStyle({
    fillOpacity: 0.9,
    weight: 3
  });
});
canchaFutbol.on('mouseout', function () {
  this.setStyle({
    fillOpacity: 0.7,
    weight: 2
  });
});

// Añadir marcadores para puntos de interés (coordenadas estimadas, ajustar con OSM)
const bibliotecaMarker = L.marker([19.2916, -99.4997]).addTo(map);
bibliotecaMarker.bindPopup("<b>Biblioteca</b><br>Préstamo de libros y laptops para consultas digitales.");

const comedorMarker = L.marker([19.2917, -99.4995]).addTo(map);
comedorMarker.bindPopup("<b>Comedor</b><br>Menú de 4 tiempos, capacidad para 140 comensales.");

// Añadir barra de escala
L.control.scale({ metric: true, imperial: false }).addTo(map);

// Añadir control de capas
const overlayMaps = {
  "Cancha de Fútbol": canchaFutbol,
  "Biblioteca": bibliotecaMarker,
  "Comedor": comedorMarker
};
L.control.layers({}, overlayMaps).addTo(map);