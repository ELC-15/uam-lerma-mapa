const map = L.map('map').setView([19.29153, -99.49959], 17);

// Añadir capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Cancha de Fútbol
const canchaFutbol = L.polygon([
  [19.29180755, -99.499745325], // Superior izquierda
  [19.29180755, -99.499345325], // Superior derecha
  [19.29120755, -99.499345325], // Inferior derecha
  [19.29120755, -99.499745325]  // Inferior izquierda
], {
  color: '#228B22', // Borde verde oscuro
  fillColor: '#32CD32', // Verde césped
  fillOpacity: 0.7,
  weight: 3, // Borde más definido
  dashArray: '5, 5' // Línea discontinua para un estilo moderno
}).addTo(map);

canchaFutbol.bindPopup(`
  <b>Cancha de Fútbol UAM Lerma</b><br>
  ⚽️ Espacio para partidos de fútbol soccer y rápido.<br>
  - <b>Actividades:</b> Torneos internos, convivencias.<br>
  - <b>Horario:</b> Consultar área deportiva.<br>
  - <b>Etiquetas OSM:</b> leisure=pitch, sport=soccer
`);

canchaFutbol.on('mouseover', function() {
  this.setStyle({ fillOpacity: 0.9, weight: 4 });
});

canchaFutbol.on('mouseout', function() {
  this.setStyle({ fillOpacity: 0.7, weight: 3 });
});

/* Edificio P (Rectoría)
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
edificioP.bindPopup("<b>Edificio P - Rectoría</b><br>Sede administrativa, tercer piso."); */

// Cancha de Deportes
const canchaDeportes = L.polygon([
  [19.29168206, -99.50013926], // Superior izquierda
  [19.29168206, -99.49983926], // Superior derecha
  [19.29138206, -99.49983926], // Inferior derecha
  [19.29138206, -99.50013926]  // Inferior izquierda
], {
  color: '#228B22', // Borde verde oscuro
  fillColor: '#32CD32', // Verde claro
  fillOpacity: 0.7, // Aumentamos opacidad para mejor visibilidad
  weight: 3, // Borde un poco más grueso
  dashArray: '5, 5' // Línea de borde discontinua para un estilo moderno
}).addTo(map);

canchaDeportes.bindPopup(`
  <b>Canchas de Deportes UAM Lerma</b><br>
  ⚽ Espacio para partidos de básquetbol y voleibol.<br>
  - <b>Actividades:</b> Torneos internos, convivencias.<br>
  - <b>Horario:</b> Consultar área deportiva.<br>
  - <b>Etiquetas OSM:</b> leisure=pitch, sport=basketball;volleyball
`);

// Jardín de Ajedrez
const jardinAjedrez = L.polygon([
  [19.2918098, -99.50056115], // Superior izquierda
  [19.2918098, -99.50042115], // Superior derecha
  [19.2914098, -99.50042115], // Inferior derecha
  [19.2914098, -99.50056115]  // Inferior izquierda
], {
  color: '#228B22', // Borde verde oscuro
  fillColor: '#32CD32', // Verde claro
  fillOpacity: 0.7, // Aumentamos opacidad para mejor visibilidad
  weight: 3, // Borde más definido
  dashArray: '5, 5' // Línea discontinua para un estilo moderno
}).addTo(map);

jardinAjedrez.bindPopup(`
  <b>Jardín de Ajedrez UAM Lerma</b><br>
  ♟️ Espacio para jugar ajedrez al aire libre.<br>
  - <b>Actividades:</b> Torneos internos, convivencias.<br>
  - <b>Horario:</b> Consultar área deportiva.<br>
  - <b>Etiquetas OSM:</b> leisure=park, sport=chess
`);

// Jardín de I-J
const jardinIJ = L.polygon([
  [19.291791775, -99.500710725], // Superior izquierda
  [19.291791775, -99.500650725], // Superior derecha
  [19.291431775, -99.500650725], // Inferior derecha
  [19.291431775, -99.500710725]  // Inferior izquierda
], {
  color: '#228B22', // Borde verde oscuro
  fillColor: '#32CD32', // Verde claro
  fillOpacity: 0.7, // Aumentamos opacidad para mejor visibilidad
  weight: 3, // Borde más definido
  dashArray: '5, 5' // Línea discontinua para un estilo moderno
}).addTo(map);

jardinIJ.bindPopup(`
  <b>Área verde entre los edificios I-J</b><br>
  🌳 Espacio para actividades al aire libre y descanso.<br>
  - <b>Actividades:</b> Convivencias, eventos culturales.<br>
  - <b>Horario:</b> Abierto durante el día.<br>
  - <b>Etiquetas OSM:</b> leisure=park
`);

// Jardín H-I
const jardinHI = L.polygon([
  [19.291795925, -99.50094135], // Superior izquierda
  [19.291795925, -99.50088135], // Superior derecha
  [19.291435925, -99.50088135], // Inferior derecha
  [19.291435925, -99.50094135]  // Inferior izquierda
], {
  color: '#228B22', // Borde verde oscuro
  fillColor: '#32CD32', // Verde claro
  fillOpacity: 0.7, // Aumentamos opacidad para mejor visibilidad
  weight: 3, // Borde más definido
  dashArray: '5, 5' // Línea discontinua para un estilo moderno
}).addTo(map);

jardinHI.bindPopup(`
  <b>Área verde entre los edificios H-I</b><br>
  🌳 Espacio para actividades al aire libre y descanso.<br>
  - <b>Actividades:</b> Convivencias, eventos culturales.<br>
  - <b>Horario:</b> Abierto durante el día.<br>
  - <b>Etiquetas OSM:</b> leisure=park
`);

// Jardín D-E
const jardinDE = L.polygon([
  [19.29170845, -99.501464925], // Top-left
  [19.29170845, -99.501374925], // Top-right
  [19.29141845, -99.501374925], // Bottom-right
  [19.29141845, -99.501464925]  // Bottom-left
], {
  color: '#228B22', // Dark green border
  fillColor: '#32CD32', // Light green fill
  fillOpacity: 0.7, // Increased opacity for better visibility
  weight: 3, // Thicker border
  dashArray: '5, 5' // Dashed border for modern style
}).addTo(map);

jardinDE.bindPopup(`
  <b>Área verde entre los edificios D-E</b><br>
  🌳 Espacio para actividades al aire libre y descanso.<br>
  - <b>Actividades:</b> Convivencias, eventos culturales.<br>
  - <b>Horario:</b> Abierto durante el día.<br>
  - <b>Etiquetas OSM:</b> leisure=park
`);

// Zona V
const zonaV = L.polygon([
  [19.2911543, -99.4975112],
  [19.2881778, -99.4976109],
  [19.2882031, -99.4948563],
  [19.2911467, -99.4948563],
  [19.2911543, -99.4975112]
], {
  color: '#228B22', // Borde verde oscuro
  fillColor: '#32CD32', // Verde claro
  fillOpacity: 0.6,
  weight: 2,
  dashArray: '5, 5' // Línea punteada para un estilo moderno
}).addTo(map);

zonaV.bindPopup(`
  <b>Zona de serpientes</b><br>
   Área verde restringida porque alberga fauna silvestre, en especial serpientes.<br>
  - <b>Actividades:</b> Ninguna.<br>
  - <b>Horario:</b> Previa solicitud en J1.<br>
  - <b>Etiquetas OSM:</b> leisure=nature_reserve, access=restricted
`);


/* Estacionamiento
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
*/

//Jardín Kiosko


const jardinKiosko = L.polygon([
  [19.2918654, -99.5015664],
  [19.2918663, -99.5011213],
  [19.2918344, -99.5011203],
  [19.2918380, -99.5012926],
  [19.2918143, -99.5012926],
  [19.2918161, -99.5015674],
  [19.2918654, -99.5015664]
  
], {
  color: '#228B22', // Borde verde oscuro
  fillColor: '#32CD32', // Verde claro
  fillOpacity: 0.6,
  weight: 2,
  dashArray: '5, 5' // Línea punteada para un estilo moderno
}).addTo(map);
jardinKiosko.bindPopup(`
  <b>Área verde frente al kiosko </b><br>
  🌳 Espacio para actividades al aire libre y descanso.<br>
  - <b>Actividades:</b> Convivencias, eventos culturales.<br>
  - <b>Horario:</b> Abierto durante el día.<br>
  - <b>Etiquetas OSM:</b> leisure=park
`);

//Jardín SUM


const jardinSUM = L.polygon([
  [19.2918657, -99.5010984],
  [19.2919009, -99.5010206],
  [19.2918898, -99.5005167],
  [19.2918280, -99.5005188],
  [19.2918395, -99.5010989],
  [19.2918657, -99.5010984]
  
], {
  color: '#228B22', // Borde verde oscuro
  fillColor: '#32CD32', // Verde claro
  fillOpacity: 0.6,
  weight: 2,
  dashArray: '5, 5' // Línea punteada para un estilo moderno
}).addTo(map);
jardinSUM.bindPopup(`
  <b>Área verde SUM</b><br>
  🌳 Espacio para actividades al aire libre y descanso.<br>
  - <b>Actividades:</b> Convivencias, eventos culturales.<br>
  - <b>Horario:</b> Abierto durante el día.<br>
  - <b>Etiquetas OSM:</b> leisure=park
`);


//Jardín M


const jardinM = L.polygon([
  [19.2918938, -99.5004717],
  [19.2918830, -99.4998216],
  [19.2918253, -99.4998234],
  [19.2918179, -99.5004765],
  [19.2918179, -99.5004765],
  [19.2918938, -99.5004717]
  
], {
  color: '#228B22', // Borde verde oscuro
  fillColor: '#32CD32', // Verde claro
  fillOpacity: 0.6,
  weight: 2,
  dashArray: '5, 5' // Línea punteada para un estilo moderno
}).addTo(map);
jardinM.bindPopup(`
  <b>Área verde M</b><br>
  🌳 Espacio para actividades al aire libre y descanso.<br>
  - <b>Actividades:</b> Convivencias, eventos culturales.<br>
  - <b>Horario:</b> Abierto durante el día.<br>
  - <b>Etiquetas OSM:</b> leisure=park
`);

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
  //"Edificio P (Rectoría)": edificioP,
  "Cancha de Deportes": canchaDeportes,
  //"Estacionamiento": estacionamiento,
  "Biblioteca": bibliotecaMarker,
  "Comedor": comedorMarker,
  "Acceso Principal": accesoPrincipal,
  "Jardín de Ajedrez": jardinAjedrez,
  "Jardín I-J": jardinIJ,
  "Jardín H-I": jardinHI,
  "Jardín D-E": jardinDE,
  "Jardín Kiosko": jardinKiosko,
  "Jardín SUM": jardinSUM,
  "Jardín M": jardinM,

};
L.control.layers({}, overlayMaps).addTo(map);