var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_2 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_3 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_coordination_4 = new ol.format.GeoJSON();
var features_coordination_4 = format_coordination_4.readFeatures(json_coordination_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coordination_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coordination_4.addFeatures(features_coordination_4);
var lyr_coordination_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_coordination_4, 
                style: style_coordination_4,
                popuplayertitle: "coordination ",
                interactive: true,
                title: '<img src="styles/legend/coordination_4.png" /> coordination '
            });
var format_coordinationmapcoordination__5 = new ol.format.GeoJSON();
var features_coordinationmapcoordination__5 = format_coordinationmapcoordination__5.readFeatures(json_coordinationmapcoordination__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coordinationmapcoordination__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coordinationmapcoordination__5.addFeatures(features_coordinationmapcoordination__5);
var lyr_coordinationmapcoordination__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_coordinationmapcoordination__5, 
                style: style_coordinationmapcoordination__5,
                popuplayertitle: "coordination map — coordination_",
                interactive: true,
                title: '<img src="styles/legend/coordinationmapcoordination__5.png" /> coordination map — coordination_'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_GoogleLabels_2.setVisible(true);lyr_GoogleHybrid_3.setVisible(true);lyr_coordination_4.setVisible(true);lyr_coordinationmapcoordination__5.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleRoad_1,lyr_GoogleLabels_2,lyr_GoogleHybrid_3,lyr_coordination_4,lyr_coordinationmapcoordination__5];
lyr_coordination_4.set('fieldAliases', {'field': 'field', 'Y': 'Y', 'X': 'X', });
lyr_coordinationmapcoordination__5.set('fieldAliases', {'fid': 'fid', 'field': 'field', 'Y': 'Y', 'X': 'X', });
lyr_coordination_4.set('fieldImages', {'field': '', 'Y': '', 'X': '', });
lyr_coordinationmapcoordination__5.set('fieldImages', {'fid': 'TextEdit', 'field': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_coordination_4.set('fieldLabels', {'field': 'inline label - always visible', 'Y': 'no label', 'X': 'header label - visible with data', });
lyr_coordinationmapcoordination__5.set('fieldLabels', {'fid': 'no label', 'field': 'no label', 'Y': 'no label', 'X': 'no label', });
lyr_coordinationmapcoordination__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});