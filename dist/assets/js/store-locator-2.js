const
jsonRegiones = "regiones.json"
jsonLocales = "locales.xls"
app = document.getElementById("app")
mapCanvas = document.getElementById("map-canvas")
panel = document.getElementById("panel")
buscador = document.getElementById('buscador')
btnBuscador = document.getElementById('btnBuscador')
aviso = document.getElementById('aviso')
img = {
  url: "../assets/img/icon-map-u_geo.png",
  anchor: new google.maps.Point(25, 50),
  scaledSize: new google.maps.Size(50, 50)
}
usuario = {
  url: "assets/img/icon-map-user.png",
  anchor: new google.maps.Point(25, 50),
  scaledSize: new google.maps.Size(50, 50)
}

let
  marker = [],
  infowindow,
  markers = [];


fetch(jsonRegiones)
  .then(res => res.json())
  .then(region =>
    cargaSelect(region)
    //   console.log(region)
  )
  .catch(err => console.log(err));
   
let regionesRegistradas = reg => reg.nombreRegion
let comunasRegistradas = reg => reg.comunas
let templateElegirComuna = lugar => `<option value="${lugar}">${lugar}</option>`
let templateRegion = reg => `<option class="optionRegion" value="${reg.nombreRegion}">${reg.nombreRegion}</option> `
// let templatePin = pin =>`<div id="siteNotice">${pin.local}</div> `
let panelTemplate = panel =>
               `
                <article>
                  <h2>${panel.local}</h2>
                    <span class="direccion">${panel.direccion}</span>
                    <span class="horario uno">Lunes a Jueves: ${panel.aperturaDiaHabil} - ${panel.cierreDiaHabil}</span>
                    <span class="horario dos">${panel.direccion}Viernes:  - </span>
                    <span class="horario tres">${panel.direccion}Sábados: 8:30:00 - 22:00:00</span>
                    <span class="horario cuatro">${panel.direccion}Domingos: 9:00:00 - 21:00:00</span>
                </article>
                `
let cargaSelect = (region) => {
  //console.log(region.length); 
  app.innerHTML =
    `
        <select id="regiones"> 
        <option value="" disabled selected>Region</option>
        ${region.map(templateRegion).join('')}
        </select>
        <select id="comunas"> 
          <option value="">Seleccione una Comuna...</option>
        </select>
    `

  function cargaComunas() {
    let padre = this.value
    // console.log(padre);
    let com = region.map(regionesRegistradas)
    // console.log(com);
    let indice = com.indexOf(padre);
    // console.log(indice);
    // Mostrar comuna es un array obtenido de un array de objetos
    let mostrarComuna = region.map(comunasRegistradas)[indice]
    // console.log(mostrarComuna)

    selectComunas.innerHTML =
      `<option value="">Seleccione una Comuna...</option>${mostrarComuna.map(templateElegirComuna).join(' ')}`;
  }

  let selectRegiones = document.getElementById("regiones");
  let selectComunas = document.getElementById("comunas");

  selectRegiones.addEventListener("change", cargaComunas, false);
  selectComunas.addEventListener("change", cargaUbicacion, false);

}

let cargaUbicacion = () => {
  let localCapturado = event.target.value
  // console.log(localCapturado)

  //carga locales excel

  fetch(jsonLocales)
    .then(res => res.json())
    .then(locales =>
      // console.log(locales)
      cargaLocal(locales))
    .catch(err => console.log(err));

  function cargaLocal(locales) {
    let aprobados =
      locales.filter(function (local) {
        if (local.comuna == localCapturado) {
          panel.innerHTML = ``
          return true
        } else {
          // console.log('no hay coincidencias')
          return false
        }
      })
    console.log('los aprobados son: ')
    console.log(aprobados)
  }
}

const buscar = () => {
  let texto = document.getElementById('buscador').value.toLowerCase();
  // console.log(texto);
  console.log(texto);
  fetch(jsonLocales)
    .then(res => res.json())
    .then(lugares =>
      // console.log(locales)
      filtrar(lugares))
    .catch(err => console.log(err));

  function filtrar(lugares) {
    let aprobados = lugares.filter(function (lugar) {
        // console.log(lugar.direccion);
        let direccion = lugar.direccion.toLowerCase();
        let comuna = lugar.comuna.toLowerCase()
        let local = lugar.local.toLowerCase()

        if (direccion.indexOf(texto) !== -1 || comuna.indexOf(texto) !== -1 || local.indexOf(texto) !== -1) {
          aviso.innerHTML = ``
          return true
        }
        if (direccion.indexOf(texto) == 1 || comuna.indexOf(texto) == 1 || local.indexOf(texto) == 1) {
          aviso.innerHTML = `<h2>No hay coincidencias con la búsqueda</h2>`
        }
      })

    if (aprobados.length == 0) {
      aviso.innerHTML = `<h2>No hay coincidencias con la búsqueda</h2>`
    }
    // console.log('los aprobados son: ')
    console.log(aprobados.length);
    panel.innerHTML = ``
    aprobados.map(llamarPin)

  }
}

buscador.addEventListener("keyup", buscar);

const limpiarPins = () => {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers.length = 0;
  }

  function addMarker(locales) {
    for (var i = 0; i < locales.length; i++) {
      // console.log(locales[i])
     
        marker = new google.maps.Marker({
          position: {
            lat: locales[i].latitud,
            lng: locales[i].longitud
          },
        map: map,
        icon: img.url,
        title: 'Click to zoom',
        id: [i],
        type: "point",
        animation: google.maps.Animation.DROP
      })  
      markers.push(marker)

      let infowindow = new google.maps.InfoWindow({
        //content: contentString,
        maxWidth: 200
      })

      infowindow.setContent(`<div id="siteNotice">${pin.local ? pin.local : 'Tu ubicación'}</div>`)

    function clickMarker() {
      map.panTo(this.getPosition())
      if (infowindow) {
        infowindow.open(map, marker)
        map.setZoom(10)
      } else {
        console.log('no hay infowindows')
      }
    }
    // marker.addListener('click', clickMarker)
    }
  
}

function clickMarker() {
  map.panTo(this.getPosition());
  map.setZoom(10);
  // if (infowindow) {
  infowindow.open(map, marker)
  // }
}
let templatePin = pin => `<div id="siteNotice">${!pin.local ? `Local` : pin.local}</div> `

const 
  llamarPin = pin => {
  // LIMPIAR PINES EXISTENTES 
  document.getElementById("comunas").addEventListener('change', limpiarPins)
  console.log(markers);
  // AGREGAR SIDEBAR CON PINES EXISTENTES
  panel.innerHTML +=
    `
        <a href="#" class="marker-link" onclick="myClick(${markers.length - 1});">
        <h2>${!pin.local ? `Local` : pin.local}</h2>
        <p><b>Dirección:</b> ${pin.direccion}, <span class="text-capitalize">${pin.comuna}</span>.</p>
        <p><b>Lunes a Jueves:</b> ${pin.aperturaDiaHabil} - ${pin.cierreDiaHabil}.</p>
        <p><b>Viernes:</b> ${pin.aperturaViernes} - ${pin.cierreViernes}.</p>
        <p><b>Sábados:</b> ${pin.aperturaSabado} - ${pin.cierreSabado}.</p>
        <p><b>Domingos:</b> ${pin.aperturaDomingo} - ${pin.cierreDomingo}.</p>
        </a>
        `
}

//FUNCION DE CLICK PARA MENU
const myClick = id => {
  map.setCenter(markers[id].getPosition());
  google.maps.event.trigger(markers[id], 'click');

}

function reloadMarkers() {
  // Loop through markers and set map to null for each
  for (var i=0; i <markers.length; i++) {
      markers[i].setMap(null);
  }
  // Reset the markers array
  markers = [];
  // Call set markers to re-add markers
  setMarkers(beaches);
}

const showPosition = position => {
  let
    currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    },
    center = new google.maps.LatLng(currentPosition.lat, currentPosition.lng),
    // marker = new google.maps.Marker({position: currentPosition, map: map}),
    mapOptions = {
      zoom: 9,
      scrollwheel: false,
      center: center,
      mapTypeId: google.maps.MapTypeId.roadmap
    }
  map = new google.maps.Map(mapCanvas, mapOptions);
  console.log(currentPosition);
  // addMarker(currentPosition.lat, currentPosition.lng, usuario)
}

const initialize = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log('no llego');
  }
}

initialize();