const map = L.map('map').setView([19.29153, -99.49959], 17);

// Añadir capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Cancha de fútbol
const canchaFutbol = L.polygon([
  
  
 
  [19.2912092, -99.4997623],
  [19.2918121, -99.4997636],
  [19.2918070, -99.4993183],
  [19.2912019, -99.4993371]
  
  //[19.2918121, -99.4997636]
  // [19.2916401, -99.4997674]
], {
  color: '#228B22', // Borde verde oscuro
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
  [19.2926376, -99.4968402],
  [19.2926151, -99.4952970],
  [19.2922625, -99.4953028],
  [19.2922661, -99.4955518],
  [19.2925052, -99.4955479],
  [19.2925238, -99.4968420],
  [19.2926376, -99.4968402]

  //[19.2915, -99.4996],
  //[19.2915, -99.4994],
  //[19.2913, -99.4994],
  //[19.2913, -99.4996]
], {
  color: '#8B0000', // Borde rojo oscuro
  fillColor: '#FF6347', // Relleno tomate
  fillOpacity: 0.5,
  weight: 2
}).addTo(map);
edificioP.bindPopup("<b>Edificio P - Rectoría</b><br>Sede administrativa, tercer piso.");

// Cancha de Deportes
const canchaDeportes = L.polygon([
  [19.2916368, -99.5001452],
  [19.2916325, -99.4999957],
  //[19.2913795, -99.5000039],
  //[19.2913838, -99.5001534],
  //[19.2916257, -99.4999693],
  [19.2916248, -99.4998252],
  [19.2913824, -99.4998268],
  [19.2913838, -99.5001534]
  //[19.2913833, -99.4999710]
  

], {
  color: '#228B22', // Borde verde oscuro
  fillColor: '#32CD32', // Verde claro
  fillOpacity: 0.6,
  weight: 2
}).addTo(map);
canchaDeportes.bindPopup(`
  <b>Canchas de Deportes UAM Lerma</b><br>
  ⚽ Espacio para partidos de basquetball y voleyball.<br>
  - <b>Actividades:</b> Torneos internos, convivencias.<br>
  - <b>Horario:</b> Consultar área deportiva.<br>
  - <b>Etiquetas OSM:</b> leisure=pitch, sport=basketball;volleyball
`);

//Jardin de Ajedrez
const jardinAjedrez = L.polygon([
  [19.2917889, -99.5005522],
  [19.2917970, -99.5004248],
  [19.2914241, -99.5004287],
  [19.2914292, -99.5005589]
], {
  color: '#228B22', // Borde verde oscuro
  fillColor: '#32CD32', // Verde claro
  fillOpacity: 0.6,
  weight: 2
}).addTo(map);
jardinAjedrez.bindPopup(`
  <b>Jardin de Ajedrez UAM Lerma</b><br>
   Espacio para partidos jugar ajedrez.<br>
  - <b>Actividades:</b> Torneos internos, convivencias.<br>
  - <b>Horario:</b> Consultar área deportiva.<br>
  - <b>Etiquetas OSM:</b> leisure=pitch, sport=basketball;volleyball
`);

//Jardin de I-J


const jardinIJ = L.polygon([
  [19.2917957, -99.5007021],
  [19.2917906, -99.5006539],
  [19.2914308, -99.5006606],
  [19.2914300, -99.5007063]
], {
  color: '#228B22', // Borde verde oscuro
  fillColor: '#32CD32', // Verde claro
  fillOpacity: 0.6,
  weight: 2
}).addTo(map);
jardinIJ.bindPopup(`
  <b>Área verde entre los edifico I- J </b><br>
   Espacio para partidos jugar ajedrez.<br>
  - <b>Actividades:</b> Torneos internos, convivencias.<br>
  - <b>Horario:</b> Consultar área deportiva.<br>
  - <b>Etiquetas OSM:</b> leisure=pitch, sport=basketball;volleyball
`);


// Estacionamiento
const estacionamiento = L.polygon([
  [19.2918518, -99.5019823],
  [19.2918638, -99.5011461],
  [19.2919094, -99.5010509],
  [19.2918892, -99.4998693],
  [19.2918828, -99.4993852],
  [19.2919347, -99.4993906],
  [19.2919600, -99.5010522],
  [19.2919183, -99.5011769],
  [19.2919157, -99.5013700],
  [19.2919094, -99.5016195],
  [19.2918955, -99.5019843],
  [19.2918518, -99.5019823]
], {
  color: '#808080', // Borde gris
  fillColor: '#D3D3D3', // Gris claro
  fillOpacity: 0.5,
  weight: 2
}).addTo(map);
estacionamiento.bindPopup("<b>Estacionamiento</b><br>Área para vehículos de estudiantes y personal.");

// Marcadores
const bibliotecaMarker = L.marker([19.2913159, -99.5006254]).addTo(map);
bibliotecaMarker.bindPopup("<b>Biblioteca</b><br>Préstamo de libros y laptops.");

const comedorMarker = L.marker([19.291730, -99.500001]).addTo(map);
comedorMarker.bindPopup("<b>Comedor</b><br>Menú de 4 tiempos, $5 con credencial.");

const accesoPrincipal = L.marker([19.2918960, -99.5024617]).addTo(map);
accesoPrincipal.bindPopup("<b>Acceso Principal</b><br>Entrada por Av. de las Garzas 10.");

// Barra de escala
L.control.scale({ metric: true, imperial: false }).addTo(map);

// Control de capas
const overlayMaps = {
  "Cancha de Fútbol": canchaFutbol,
  "Edificio P (Rectoría)": edificioP,
  "Cancha de Deportes": canchaDeportes,
  "Estacionamiento": estacionamiento,
  "Biblioteca": bibliotecaMarker,
  "Comedor": comedorMarker,
  "Acceso Principal": accesoPrincipal,
  "Jardín de Ajedrez": jardinAjedrez,
  "Jardín I-J": jardinIJ,
};
L.control.layers({}, overlayMaps).addTo(map);