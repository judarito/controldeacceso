const geolocation =()=>{
    const map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latMesser = 10.3242288;
                const lngMesser = -75.5017916;
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                map.setView([lat, lng], 15);

                L.marker([latMesser, lngMesser]).addTo(map)
                .bindPopup(`Messer: [${latMesser}, ${lngMesser}]`)
                .openPopup();


                L.marker([lat, lng]).addTo(map)
                    .bindPopup(`Tu ubicación: [${lat}, ${lng}]`)
                    .openPopup();

                // Añadir un círculo con un radio de 20 metros
                L.circle([latMesser, lngMesser], {
                    color: 'blue',
                    fillColor: '#30f',
                    fillOpacity: 0.2,
                    radius: 50
                }).addTo(map);


                if(!areCoordinatesWithinRadius(latMesser, lngMesser, lat, lng, 50)){
                    alert('No estas en Messer');
                }else{
                    alert('Si estas en Messer');
                }
            },
            () => {
                alert('No se pudo obtener la geolocalización.');
            }
        );
    } else {
        alert('Tu navegador no soporta geolocalización.');
    }

}

function areCoordinatesWithinRadius(lat1, lng1, lat2, lng2, radius) {
    const R = 6371e3; // Radio de la Tierra en metros
    const φ1 = lat1 * Math.PI / 180; // Convertir latitud 1 a radianes
    const φ2 = lat2 * Math.PI / 180; // Convertir latitud 2 a radianes
    const Δφ = (lat2 - lat1) * Math.PI / 180; // Diferencia de latitudes en radianes
    const Δλ = (lng2 - lng1) * Math.PI / 180; // Diferencia de longitudes en radianes

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distancia en metros

    return distance <= radius;
}


geolocation();