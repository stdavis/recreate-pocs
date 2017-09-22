export default {
    "version": 8,
    "sprite": "https://tiles.arcgis.com/tiles/99lidPhWCzftIe9K/arcgis/rest/services/Recreate/VectorTileServer/resources/sprites/sprite",
    "glyphs": "https://tiles.arcgis.com/tiles/99lidPhWCzftIe9K/arcgis/rest/services/Recreate/VectorTileServer/resources/fonts/{fontstack}/{range}.pbf",
    "sources": {
        "outdoors": {
            "type": "vector",
            "url": "mapbox://mapbox.outdoors"
        },
        "esri": {
            "type": "vector",
            "tiles": ["https://tiles.arcgis.com/tiles/99lidPhWCzftIe9K/arcgis/rest/services/Recreate/VectorTileServer/tile/{z}/{y}/{x}.pbf"]
        }
    },
    "layers": [{
        "id": "UrbanParks",
        "type": "fill",
        "source": "esri",
        "source-layer": "UrbanParks",
        "layout": {},
        "paint": {
            "fill-color": "#4CE600"
        }
    }, {
        "id": "Trails/1",
        "type": "line",
        "source": "esri",
        "source-layer": "Trails",
        "filter": [
            "==",
            "_symbol",
            0
        ],
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-color": "#E41A1C",
            "line-width": 2
        }
    }, {
        "id": "Trails/2",
        "type": "line",
        "source": "esri",
        "source-layer": "Trails",
        "filter": [
            "==",
            "_symbol",
            1
        ],
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-color": "#377EB8",
            "line-width": 2
        }
    }, {
        "id": "Trails/3",
        "type": "line",
        "source": "esri",
        "source-layer": "Trails",
        "filter": [
            "==",
            "_symbol",
            2
        ],
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-color": "#4DAF4A",
            "line-width": 2
        }
    }, {
        "id": "Trails/4",
        "type": "line",
        "source": "esri",
        "source-layer": "Trails",
        "filter": [
            "==",
            "_symbol",
            3
        ],
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-color": "#984EA3",
            "line-width": 2
        }
    }, {
        "id": "BoatRamps/airboat",
        "type": "symbol",
        "source": "esri",
        "source-layer": "BoatRamps",
        "filter": [
            "==",
            "_symbol",
            0
        ],
        "layout": {
            "icon-image": "BoatRamps/airboat",
            "icon-allow-overlap": true
        },
        "paint": {}
    }, {
        "id": "BoatRamps/any",
        "type": "symbol",
        "source": "esri",
        "source-layer": "BoatRamps",
        "filter": [
            "==",
            "_symbol",
            1
        ],
        "layout": {
            "icon-image": "BoatRamps/any",
            "icon-allow-overlap": true
        },
        "paint": {}
    }, {
        "id": "BoatRamps/float",
        "type": "symbol",
        "source": "esri",
        "source-layer": "BoatRamps",
        "filter": [
            "==",
            "_symbol",
            2
        ],
        "layout": {
            "icon-image": "BoatRamps/float",
            "icon-allow-overlap": true
        },
        "paint": {}
    }, {
        "id": "BoatRamps/small motorized",
        "type": "symbol",
        "source": "esri",
        "source-layer": "BoatRamps",
        "filter": [
            "==",
            "_symbol",
            3
        ],
        "layout": {
            "icon-image": "BoatRamps/small motorized",
            "icon-allow-overlap": true
        },
        "paint": {}
    }]
};
