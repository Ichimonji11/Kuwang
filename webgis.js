window.onload = init
function init(){
    var map = new ol.Map({
        view: new ol.View({
            center: [12295223.692986121, -856522.1946233617],
            zoom: 15
        }),
        layers:[
            new ol.layer.Tile({
                source: new ol.source.OSM(), 
                title: 'OSM'
            })
        ],
        target: 'web-gis',
    
    })

    var zoomsliderr = new ol.control.ZoomSlider()
    map.addControl(zoomsliderr)


    var zoomE = new ol.control.ZoomToExtent({
        extent:[12293265.84339069, -856279.1597345325, 12297589.92064993, -856452.5079787282]

    })
  map.addControl(zoomE)
    
var scale = new ol.control.ScaleLine({
    units: 'metric',
    bar: true,
    steps: 4,
    text: true,
    minWidth: 140,
    target: 'scale_bar'
});
map.addControl(scale);


    //adding geoserver layer

    var layer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            attributions: '@geoserver',
            url: 'http://localhost:8084/geoserver/TutupanLahan/wms?',
            params: {
                'LAYERS': 'TutupanLahan:tutupan_lahan',
            
            }
        }),
        title: 'TutupanLahan',
    })

    map.addLayer(layer)

    var layer2 = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            attributions: '@geoserver',
            url: 'http://localhost:8084/geoserver/Kemiringan/wms?',
            params: {
                'LAYERS': 'Kemiringan:lereng',
            
            }
        }),
        title: 'Kemiringan Lereng',
    })

    map.addLayer(layer2)


    // adding maptiler layer

    var maptilerSat = new ol.layer.Tile({
        source: new ol.source.TileJSON({
            attributions: '@Maptiler',
            url: 'https://api.maptiler.com/maps/hybrid/tiles.json?key=kaTD1qMgdCHIWHGBW9DP'
        }),
        title: 'satelite',
    })

    map.addLayer(maptilerSat)

    var layerswitcher= new ol.control.LayerSwitcher()
    map.addControl(layerswitcher)

    var mouse_position = new ol.control.MousePosition();
    map.addControl(mouse_position);
 

}