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
var format_Plantingopportunity_1 = new ol.format.GeoJSON();
var features_Plantingopportunity_1 = format_Plantingopportunity_1.readFeatures(json_Plantingopportunity_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plantingopportunity_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantingopportunity_1.addFeatures(features_Plantingopportunity_1);
var lyr_Plantingopportunity_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Plantingopportunity_1, 
                style: style_Plantingopportunity_1,
                popuplayertitle: "Planting opportunity",
                interactive: true,
    title: 'Planting opportunity<br />\
    <img src="styles/legend/Plantingopportunity_1_0.png" /> Low<br />\
    <img src="styles/legend/Plantingopportunity_1_1.png" /> Med low<br />\
    <img src="styles/legend/Plantingopportunity_1_2.png" /> Med<br />\
    <img src="styles/legend/Plantingopportunity_1_3.png" /> Med high<br />\
    <img src="styles/legend/Plantingopportunity_1_4.png" /> High<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Plantingopportunity_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Plantingopportunity_1];
lyr_Plantingopportunity_1.set('fieldAliases', {'fid': 'fid', 'opp_score': 'opp_score', 'noplant': 'noplant', 'econ': 'econ', 'health': 'health', 'air_qual': 'air_qual', 'access500': 'access500', 'access15': 'access15', 'floodplain': 'floodplain', 'wp_enhance': 'wp_enhance', 'aw_enhance': 'aw_enhance', 'connect_ew': 'connect_ew', });
lyr_Plantingopportunity_1.set('fieldImages', {'fid': 'TextEdit', 'opp_score': 'Range', 'noplant': 'TextEdit', 'econ': 'TextEdit', 'health': 'TextEdit', 'air_qual': 'TextEdit', 'access500': 'TextEdit', 'access15': 'TextEdit', 'floodplain': 'TextEdit', 'wp_enhance': 'TextEdit', 'aw_enhance': 'TextEdit', 'connect_ew': 'TextEdit', });
lyr_Plantingopportunity_1.set('fieldLabels', {'fid': 'hidden field', 'opp_score': 'inline label - visible with data', 'noplant': 'inline label - visible with data', 'econ': 'inline label - visible with data', 'health': 'inline label - visible with data', 'air_qual': 'inline label - visible with data', 'access500': 'inline label - visible with data', 'access15': 'inline label - visible with data', 'floodplain': 'inline label - visible with data', 'wp_enhance': 'inline label - visible with data', 'aw_enhance': 'inline label - visible with data', 'connect_ew': 'inline label - visible with data', });
lyr_Plantingopportunity_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
