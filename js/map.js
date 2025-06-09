const map = L.map('map').setView([19.29153, -99.49959], 17);

// Añadir capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Cancha de fútbol
const canchaFutbol = L.polygon([
  [19.2918121, -99.4997636],
  [19.2918070, -99.4993183],
  [19.2916401, -99.4997674],
  [19.2912092, -99.4997623],
  [19.2912019, -99.4993371],
  [19.2918121, -99.4997636]
], {
  color: '#1E90FF', // Borde azul
  fillColor: '#32CD32', // Verde césped
  fillOpacity: 0.7,
  weight: 2
}).addTo(map);
canchaFutbol.bindPopup(`
  <b>Cancha de Fútbol UAM Lerma</b><br>
  ⚽ Espacio para partidos de fútbol soccer y rápido.<br>
  - <b>Actividades:</b> Torneos internos, convivencias.<br>
  - <b>Horario:</b> Consultar área deportiva.<br>
  - <b>Etiquetas OSM:</b> leisure=pitch, sport=soccer
`);
canchaFutbol.on('mouseover', function () {
  this.setStyle({ fillOpacity: 0.9, weight: 3 });
});
canchaFutbol.on('mouseout', function () {
  this.setStyle({ fillOpacity: 0.7, weight: 2 });
});

// Edificio P (Rectoría)
const edificioP = L.polygon([
  [19.2915, -99.4996],
  [19.2915, -99.4994],
  [19.2913, -99.4994],
  [19.2913, -99.4996]
], {
  color: '#8B0000', // Borde rojo oscuro
  fillColor: '#FF6347', // Relleno tomate
  fillOpacity: 0.5,
  weight: 2
}).addTo(map);
edificioP.bindPopup("<b>Edificio P - Rectoría</b><br>Sede administrativa, tercer piso.");

// Área verde (ejemplo)
const areaVerde = L.polygon([
  [19.2919, -99.4998],
  [19.2919, -99.4996],
  [19.2917, -99.4996],
  [19.2917, -99.4998]
], {
  color: '#228B22', // Borde verde oscuro
  fillColor: '#90EE90', // Verde claro
  fillOpacity: 0.6,
  weight: 2
}).addTo(map);
areaVerde.bindPopup("<b>Área Verde</b><br>Espacio para relajarse y estudiar al aire libre.");

// Estacionamiento
const estacionamiento = L.polygon([
  [19.2919, -99.4999],
  [19.2919, -99.4997],
  [19.2917, -99.4997],
  [19.2917, -99.4999]
], {
  color: '#808080', // Borde gris
  fillColor: '#D3D3D3', // Gris claro
  fillOpacity: 0.5,
  weight: 2
}).addTo(map);
estacionamiento.bindPopup("<b>Estacionamiento</b><br>Área para vehículos de estudiantes y personal.");

// Marcadores
const bibliotecaMarker = L.marker([19.2916, -99.4997]).addTo(map);
bibliotecaMarker.bindPopup("<b>Biblioteca</b><br>Préstamo de libros y laptops.");

const comedorMarker = L.marker([19.2917, -99.4995]).addTo(map);
comedorMarker.bindPopup("<b>Comedor</b><br>Menú de 4 tiempos, $5 con credencial.");

const accesoPrincipal = L.marker([19.2918, -99.4999]).addTo(map);
accesoPrincipal.bindPopup("<b>Acceso Principal</b><br>Entrada por Av. de las Garzas 10.");

// Barra de escala
L.control.scale({ metric: true, imperial: false }).addTo(map);

// Control de capas
const overlayMaps = {
  "Cancha de Fútbol": canchaFutbol,
  "Edificio P (Rectoría)": edificioP,
  "Área Verde": areaVerde,
  "Estacionamiento": estacionamiento,
  "Biblioteca": bibliotecaMarker,
  "Comedor": comedorMarker,
  "Acceso Principal": accesoPrincipal
};
L.control.layers({}, overlayMaps).addTo(map);