document.getElementById("zoomSubmit").addEventListener('click', event => {
    event.preventDefault();
    map.setZoom(document.getElementById("zoom").value);
});




const favFood = [
    {
        "name": "turkey and the wolf",
        "coordinates": [-90.074412, 29.927195],

    },
    {
        "name": "boil seafood house",
        "coordinates": [-90.08861, 29.92295],
    },
    {
        "name": "zara's little big market & poboys",
        "coordinates": [-90.10744,29.92437]
    },
]
favFood.forEach((restaurant) => {
    const marker = new mapboxgl.Marker()
        .setLngLat(restaurant.coordinates)
        .addTo(map);
    const popup = new mapboxgl.Popup()
        .setHTML(`<p class="restaurantPopup">${restaurant.name}</p>`);
    marker.setPopup(popup);
});

document.getElementById("setMarkerButton").addEventListener
('click', event=>{
    event.preventDefault();
    const address = document.getElementById('setMarker').value;
    geocode(address, MAPBOX_API_TOKEN).then(coords=>{
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        map.setCenter(coords);
    });
});

document.querySelector("#hideBtn").addEventListener('click', event=> {
    document.querySelectorAll('svg').forEach(svg=>{
        svg.style.display = 'none';
    });
        });
