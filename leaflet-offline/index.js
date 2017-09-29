var map = L.map('map', {
    center: [40.55, -111.8],
    zoom: 10
});

var basemapLayer = L.tileLayer('https://discover.agrc.utah.gov/login/path/alabama-anvil-picnic-sunset/tiles/terrain_basemap/{z}/{x}/{y}', {
    useCache: true,
    crossOrigin: true,
    savetoCache: true
}).addTo(map);

// basemapLayer.seed(bb, minlevel, maxlevel)
