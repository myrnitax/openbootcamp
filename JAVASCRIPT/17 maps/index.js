let marker, map; //Se creo por fuera las variables globales 

function initMap() {
    // console.log("inicializando mapa ")
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    marker = new google.maps.Marker( {
        position: posicion,
        map: map,
        title: "Posición Inicial"
    })
// Obtener la geolocalización
// marker.setPosition({ lat, lng })
geoPosiciona()
}

function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalización")
    }
}

function centraMapa(position) { //definir desde linea 22  de nuevo pero con funciones
    //que ya hayamos creado
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("Se ha producido un error y lo hemos gestionado")
    console.error(error)
}