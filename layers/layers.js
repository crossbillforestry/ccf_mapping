var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZonalStatistics_1 = new ol.format.GeoJSON();
var features_ZonalStatistics_1 = format_ZonalStatistics_1.readFeatures(json_ZonalStatistics_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonalStatistics_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonalStatistics_1.addFeatures(features_ZonalStatistics_1);
var lyr_ZonalStatistics_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonalStatistics_1, 
                style: style_ZonalStatistics_1,
                popuplayertitle: "Zonal Statistics",
                interactive: true,
    title: 'Zonal Statistics<br />\
    <img src="styles/legend/ZonalStatistics_1_0.png" /> 0 - 12171<br />\
    <img src="styles/legend/ZonalStatistics_1_1.png" /> 12171 - 40276<br />\
    <img src="styles/legend/ZonalStatistics_1_2.png" /> 40276 - 63082<br />\
    <img src="styles/legend/ZonalStatistics_1_3.png" /> 63082 - 78491<br />\
    <img src="styles/legend/ZonalStatistics_1_4.png" /> 78491 - 156422<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_ZonalStatistics_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ZonalStatistics_1];
lyr_ZonalStatistics_1.set('fieldAliases', {'fid': 'fid', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'opp_score': 'opp_score', });
lyr_ZonalStatistics_1.set('fieldImages', {'fid': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'opp_score': 'Range', });
lyr_ZonalStatistics_1.set('fieldLabels', {'fid': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'opp_score': 'no label', });
lyr_ZonalStatistics_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});