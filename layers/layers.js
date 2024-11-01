var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap Base',
            //'type': 'base',
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
                declutter: false,
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
lyr_Plantingopportunity_1.set('fieldAliases', {'fid': 'fid', 'existing_woodland': 'existing_woodland', 'railway_footprints': 'railway_footprints', 'roads_national': 'roads_national', 'roads_local': 'roads_local', 'roads_regional': 'roads_regional', 'surface_water': 'surface_water', 'buildings': 'buildings', 'gas_transmission': 'gas_transmission', 'non_woodland_ph': 'non_woodland_ph', 'wfc_housing_allocations': 'wfc_housing_allocations', 'scheduled_monuments': 'scheduled_monuments', 'ldnpa_housing_allocations': 'ldnpa_housing_allocations', 'watercourses': 'watercourses', 'electricity_transmission': 'electricity_transmission', 'not_cumbria': 'not_cumbria', 'outside_ccf': 'outside_ccf', 'above_500m_elevation': 'above_500m_elevation', 'ancient_woodland_connectivity': 'ancient_woodland_connectivity', 'economic_deprivation': 'economic_deprivation', 'fifteen_minute_standard': 'fifteen_minute_standard', 'flood_zone_2': 'flood_zone_2', 'poor_air_quality': 'poor_air_quality', 'public_health_deprivation': 'public_health_deprivation', 'woodland_access_standard': 'woodland_access_standard', 'woodland_connectivity': 'woodland_connectivity', 'wood_pasture_connectivity': 'wood_pasture_connectivity', 'deep_peat_soils_ne': 'deep_peat_soils_ne', 'high_water_buffer': 'high_water_buffer', 'riparian_zone': 'riparian_zone', 'mask': 'mask', 'opp_score': 'opp_score', 'total_area': 'total_area', 'ex_wood': 'Existing woodland', 'railway': 'Railway footprints', 'roads': 'Roads', 'water': 'Surface water', 'built': 'Buildings', 'pri_hab': 'Priority habitats', 'hous_alloc': 'Housing allocations', 'sam': 'Scheduled monuments', 'watercourse': 'Watercourses', 'electricity': 'Electricity transmission', 'not_ccf': 'Outside CCF footprint', 'above_500m': 'Above 500m elevation', 'w_connect': 'Woodland connectivity', 'economic': 'Economic deprivation', 'fifteen_minute': 'Fifteen minute standard', 'floodplain': 'Floodplain woodland potential', 'air_quality': 'Poor air quality', 'public_health': 'Public health deprivation', 'access_standard': 'Woodland access standard', 'aw_connect': 'Ancient woodland enhancement', 'wp_connect': 'Wood pasture enhancement', 'deep_peat': 'Deep peat soils', 'riparian': 'Riparian zone', 'pl_area': 'Plantable area', });
lyr_Plantingopportunity_1.set('fieldImages', {'fid': 'Hex', 'existing_woodland': 'TextEdit', 'railway_footprints': 'TextEdit', 'roads_national': 'TextEdit', 'roads_local': 'TextEdit', 'roads_regional': 'TextEdit', 'surface_water': 'TextEdit', 'buildings': 'TextEdit', 'gas_transmission': 'TextEdit', 'non_woodland_ph': 'TextEdit', 'wfc_housing_allocations': 'TextEdit', 'scheduled_monuments': 'TextEdit', 'ldnpa_housing_allocations': 'TextEdit', 'watercourses': 'TextEdit', 'electricity_transmission': 'TextEdit', 'not_cumbria': 'TextEdit', 'outside_ccf': 'TextEdit', 'above_500m_elevation': 'TextEdit', 'ancient_woodland_connectivity': 'TextEdit', 'economic_deprivation': 'TextEdit', 'fifteen_minute_standard': 'TextEdit', 'flood_zone_2': 'TextEdit', 'poor_air_quality': 'TextEdit', 'public_health_deprivation': 'TextEdit', 'woodland_access_standard': 'TextEdit', 'woodland_connectivity': 'TextEdit', 'wood_pasture_connectivity': 'TextEdit', 'deep_peat_soils_ne': 'TextEdit', 'high_water_buffer': 'TextEdit', 'riparian_zone': 'TextEdit', 'mask': 'TextEdit', 'opp_score': 'TextEdit', 'total_area': 'TextEdit', 'ex_wood': 'ExternalResource', 'railway': 'ExternalResource', 'roads': 'ExternalResource', 'water': 'ExternalResource', 'built': 'ExternalResource', 'pri_hab': 'ExternalResource', 'hous_alloc': 'ExternalResource', 'sam': 'ExternalResource', 'watercourse': 'ExternalResource', 'electricity': 'ExternalResource', 'not_ccf': 'ExternalResource', 'above_500m': 'ExternalResource', 'w_connect': 'ExternalResource', 'economic': 'ExternalResource', 'fifteen_minute': 'ExternalResource', 'floodplain': 'ExternalResource', 'air_quality': 'ExternalResource', 'public_health': 'ExternalResource', 'access_standard': 'ExternalResource', 'aw_connect': 'ExternalResource', 'wp_connect': 'ExternalResource', 'deep_peat': 'ExternalResource', 'riparian': 'ExternalResource', 'pl_area': 'ExternalResource', });
lyr_Plantingopportunity_1.set('fieldLabels', {'fid': 'no label', 'existing_woodland': 'hidden field', 'railway_footprints': 'hidden field', 'roads_national': 'hidden field', 'roads_local': 'hidden field', 'roads_regional': 'hidden field', 'surface_water': 'hidden field', 'buildings': 'hidden field', 'gas_transmission': 'hidden field', 'non_woodland_ph': 'hidden field', 'wfc_housing_allocations': 'hidden field', 'scheduled_monuments': 'hidden field', 'ldnpa_housing_allocations': 'hidden field', 'watercourses': 'hidden field', 'electricity_transmission': 'hidden field', 'not_cumbria': 'hidden field', 'outside_ccf': 'hidden field', 'above_500m_elevation': 'hidden field', 'ancient_woodland_connectivity': 'hidden field', 'economic_deprivation': 'hidden field', 'fifteen_minute_standard': 'hidden field', 'flood_zone_2': 'hidden field', 'poor_air_quality': 'hidden field', 'public_health_deprivation': 'hidden field', 'woodland_access_standard': 'hidden field', 'woodland_connectivity': 'hidden field', 'wood_pasture_connectivity': 'hidden field', 'deep_peat_soils_ne': 'hidden field', 'high_water_buffer': 'hidden field', 'riparian_zone': 'hidden field', 'mask': 'hidden field', 'opp_score': 'hidden field', 'total_area': 'hidden field', 'ex_wood': 'inline label - always visible', 'railway': 'inline label - always visible', 'roads': 'inline label - always visible', 'water': 'inline label - always visible', 'built': 'inline label - always visible', 'pri_hab': 'inline label - always visible', 'hous_alloc': 'inline label - always visible', 'sam': 'inline label - always visible', 'watercourse': 'inline label - always visible', 'electricity': 'inline label - always visible', 'not_ccf': 'inline label - always visible', 'above_500m': 'inline label - always visible', 'w_connect': 'inline label - always visible', 'economic': 'inline label - always visible', 'fifteen_minute': 'inline label - always visible', 'floodplain': 'inline label - always visible', 'air_quality': 'inline label - always visible', 'public_health': 'inline label - always visible', 'access_standard': 'inline label - always visible', 'aw_connect': 'inline label - always visible', 'wp_connect': 'inline label - always visible', 'deep_peat': 'inline label - always visible', 'riparian': 'inline label - always visible', 'pl_area': 'inline label - always visible', });
lyr_Plantingopportunity_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
