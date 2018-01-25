let styleJSON = {
    version: 0.1,
    owner: 'ThinkGeo',
    time: '2018-01-04 16:05:00',
    variables: {
        '@path':
      'Server=13.57.8.209;Port=5432;User Id=openmaptiles;Password=openmaptiles;DataBase=openmaptiles;',
        '@baseland_polygon_fill': '#faf7f3',
        '@regular_text': 'Verdana Regular',
        '@italic_text': 'Verdana Italic',
        '@bold_text': 'Verdana Bold',
        '@baseland_text_fill,@baseland_text_fill_lighter': 'rgb(102,102,102)',
        '@landfill': 'rgb(0,0,0)',
        '@baseland_text_halo_fill': 'rgba(255,255,255,0.8)',
        '@ocean_text_fill': 'rgb(0,102,204)',
        '@ocean_text_halo_fill': 'rgba(255,255,255,0.5)',
        '@text_name': 'name',
        '@text_align': 'center',
        '@text_polygon_labeling_location_mode': 'visualCenter',
        '@text_placements': 'UR,U,UL,B,BR,BL,L,R',
        '@countryLineColor': 'argb(1,190,175,190)',
        '@lineWidth': 1,
        '@water': '#a0cfeb',
        '@landbackgroundfill': 'rgb(183,182,147)',
        '@park': '#d3e2be',
        '@wood': 'rgb(206,215,193)',
        '@golf_courseborder': 'rgb(183,227,225)',
        '@golf_course': 'rgb(182,227,182)',
        '@protected_areaborder,@protected_area': 'rgba(203,223,171,0.5)',
        '@aerodrome': 'rgb(233,230,225)',
        '@national_park': '#cff0b0',
        '@reservoir': 'rgb(160,207,235)',
        '@orchard,@vineyards': 'rgb(204,153,0)',
        '@orchardbackground': 'rgb(159,216,144)',
        '@vineyardsbackground': 'rgb(180,225,169)',
        '@railway': 'rgb(230,230,230)',
        '@cemetery': 'rgb(219,223,213)',
        '@quarry': 'rgb(225,217,211)',
        '@basin,@marina,@water_park': 'argb(255,255,255,255)',
        '@basinbackground,@wetland': 'rgb(173,216,230)',
        '@village_green,@meadow,@common,@garden': 'rgb(208,236,169)',
        '@recreation_ground': 'rgb(207,236,169)',
        '@farmyard,@farm,@farmland': 'rgb(245,230,211)',
        '@industrial': 'rgb(233,232,223)',
        '@retail': 'rgb(243,235,245)',
        '@commercial': 'rgb(235,235,245)',
        '@oneway_file': 'Icons\\\\highwayoneway.16.png',
        '@forest': 'rgb(197,217,185)',
        '@military': 'rgba(225,225,225,0.5)',
        '@militarybackground': 'rgba(200,200,200,0.5)',
        '@grass': 'rgb(207,235,169)',
        '@residential': 'rgb(245,235,235)',
        '@beach': 'rgb(254,249,229)',
        '@grassland': 'rgb(214,225,198)',
        '@heath': 'rgb(213,215,182)',
        '@mud': 'rgb(125,95,63)',
        '@mudbackground': 'rgb(230,223,216)',
        '@sand': 'rgb(250,246,230)',
        '@wetlandbackground': 'rgba(204,255,255,0.3)',
        '@scrubborder': 'rgb(209,215,195)',
        '@scrub': 'rgb(209,225,167)',
        '@water_parkborder,@marinaborder': 'rgb(168,184,245)',
        '@trackborder': 'rgb(166,225,203)',
        '@track': 'rgb(120,220,188)',
        '@pitchborder': 'rgb(148,212,177)',
        '@pitch': 'rgb(205,219,186)',
        '@stadiumborder': 'rgb(55,206,155)',
        '@stadium': 'rgb(158,225,200)',
        '@sports_centre': 'rgb(188,228,206)',
        '@playgroundborder': 'rgb(152,216,179)',
        '@playground': 'rgb(206,246,202)',
        '@dog_park': 'rgb(208,236,170)',
        '@nature_reserve': 'rgb(229,232,221)',
        '@attractionborder': 'rgb(225,202,219)',
        '@attraction': 'rgb(244,220,237)',
        '@zoo': 'rgb(205,246,202)',
        '@helipad': 'rgb(187,187,205)',
        '@university,@college,@kindergarten,@school': 'rgb(240,240,216)',
        '@parking': 'rgb(240,238,233)',
        '@swimming_poolborder': 'rgb(153,204,255)',
        '@swimming_pool': 'rgb(224,255,255)',
        '@apronborder': 'rgb(165,165,180)',
        '@apron': 'rgb(197,197,215)',
        '@runway': '#C2C1CF',
        '@building_fill': 'rgb(245,242,238)',
        '@squareborder,@building_fillborder': 'rgb(204,204,204)',
        '@squareborderwidth': 3,
        '@radius': 2,
        '@line_cap,@countryLineCap': 'round',
        '@shield_fill': '#666666',
        '@shield_name': 'ref',
        '@array1': '0.4,1.509',
        '@array2': '0.25,1',
        '@rail_inner,@tram_inner,@narrow_gauge_inner,@light_rail_inner,@miniature_inner':
      '#FAF7F3',
        '@subway_center': '#e0e0e0',
        '@monorail_inner': '#FAFAFA',
        '@taxiway_outer': '#c1c1d2',
        '@runway_outer': '#BCBCCD',
        '@cable_car_outer': '#C1C1D2',
        '@pier_outer,@pier': '#FAF8F6',
        '@motorway6_9': '#FFDEBE',
        '@motorway_outer': '#e7be87',
        '@motorway_inner': '#f7c380',
        '@motorway_link_outer': '#E1B678',
        '@motorway_link_inner': '#F7DDB9',
        '@trunk_outer': '#E1CDA8',
        '@trunk_inner,@trunk8_9': '#F5E7CA',
        '@trunk_link_outer': '#E2D0AC',
        '@trunk_link_inner': '#FAF2E1',
        '@primary_link_inner,@primary_inner': '#faf6e1',
        '@unclassified_outer,@residential_outer,@tertiary_outer,@secondary_outer,@monorail_outer,@subway_inner':
      '#E1E1E1',
        '@living_street_outer,@road_outer,@primary_link_outer,@primary_outer,@tertiary_link_outer,@secondary_link_outer,@motorway_link_center,@motorway_center,@monorail_center,@miniature_center,@miniature_outer,@light_rail_center,@light_rail_outer,@narrow_gauge_center,@narrow_gauge_outer,@subway_outer,@tram_center,@tram_outer,@rail_center,@rail_outer':
      '#CCCCCC',
        '@service_outer': '#e2e2e1',
        '@service_inner,@pedestrian_inner,@living_street_inner,@road_inner,@unclassified_inner,@residential_inner,@tertiary_link_inner,@tertiary_inner,@secondary_link_inner,@secondary_inner':
      '#FFFFFF',
        '@tunnel_inner1': 'rgba(204,204,204,1)',
        '@bridge_outer1,@tunnel_outer1,@square': 'rgb(153,153,153)',
        '@bridge_outer2': '#9b9a98'
    },
    styles: [
        {
            id: 'ne_baseland30m_polygon_style',
            filter: "zoom>=0;zoom<=5;layer='ne_baseland30m_polygon'",
            style: [{ 'polygon-fill': '@baseland_polygon_fill' }]
        },
        {
            id: 'ne_baseland30m_point_label_style',
            filter: "zoom>=2;zoom<=9;layer='ne_baseland30m_point'",
            style: [
                {
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-wrap': true,
                    'text-wrap-width': 20,
                    style: [
                        { filter: 'zoom>=2;zoom<=3', 'text-size': 7 },
                        { filter: 'zoom>=4;zoom<=5', 'text-size': 8 },
                        { filter: 'zoom>=6;zoom<=7', 'text-size': 9 },
                        { filter: 'zoom>=8;zoom<=9', 'text-size': 10 }
                    ]
                }
            ]
        },
        {
            id: 'ne_state5m_polygon_label_style',
            style: [
                {
                    filter: 'zoom>=4;zoom<=11',
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-wrap': true,
                    'text-wrap-width': 20,
                    style: [
                        { filter: 'zoom>=4;zoom<=5', 'text-size': 7 },
                        { filter: 'zoom>=6;zoom<=7', 'text-size': 8 },
                        { filter: 'zoom>=8;zoom<=9', 'text-size': 9 },
                        { filter: 'zoom>=10;zoom<=11', 'text-size': 10 }
                    ]
                }
            ]
        },
        {
            id: 'ne_ocean1m_polygon_label_style',
            style: [
                {
                    filter: 'zoom>=2;zoom<=11',
                    'text-name': '@text_name',
                    'text-face-name': '@italic_text',
                    'text-fill': '@ocean_text_fill',
                    'text-halo-fill': '@ocean_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-wrap': true,
                    'text-wrap-width': 30,
                    style: [
                        { filter: 'zoom>=2;zoom<=3', 'text-size': 6 },
                        { filter: 'zoom>=4;zoom<=5', 'text-size': 7 },
                        { filter: 'zoom>=6;zoom<=7', 'text-size': 8 },
                        { filter: 'zoom>=8;zoom<=9', 'text-size': 9 },
                        { filter: 'zoom>=10;zoom<=11', 'text-size': 10 }
                    ]
                }
            ],
            filter: "layer='ne_ocean1m_polygon'"
        },
        {
            id: 'ne_place2m_point_label_style',
            filter: "zoom>=4;zoom<=6;natscale>=200;layer='ne_place2m_point'",
            style: [
                {
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-size': 6,
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true
                }
            ]
        },
        {
            id: 'ne_states_provinces10m_point_label_style',
            style: [
                {
                    filter: 'zoom>=4;zoom<=11',
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'default',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-wrap': true,
                    'text-wrap-width': 20,
                    style: [
                        { filter: 'zoom>=4;zoom<=5', 'text-size': 7 },
                        { filter: 'zoom>=6;zoom<=7', 'text-size': 8 },
                        { filter: 'zoom>=8;zoom<=9', 'text-size': 9 },
                        { filter: 'zoom>=10;zoom<=11', 'text-size': 10 }
                    ]
                }
            ],
            filter: "layer='ne_states_provinces10m_point'"
        },
        {
            id: 'osm_place_city_point_label_z7_style',
            filter: "zoom=7;place='city';layer='osm_place_city_point_z7'",
            style: [
                {
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-size': 7,
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true
                }
            ]
        },
        {
            id: 'osm_place_city_town_point_label_z8-9_style',
            style: [
                {
                    filter: 'zoom>=8;zoom<=9',
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    style: [
                        { filter: "place='city'", 'text-size': 8 },
                        { filter: "place='town'", 'text-size': 7 }
                    ]
                }
            ],
            filter: "layer='osm_place_city_town_point_z8-9'"
        },
        {
            id: 'osm_place_point_label_z10-19_style',
            style: [
                {
                    filter: 'zoom>=10;zoom<=19',
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    style: [
                        {
                            filter: 'zoom>=10;zoom<=11',
                            style: [
                                { filter: "place='city'", 'text-size': 8 },
                                { filter: "place='town'", 'text-size': 7 },
                                { filter: "place='village'", 'text-size': 6 }
                            ]
                        },
                        {
                            filter: 'zoom>=12;zoom<=13',
                            style: [
                                { filter: "place='city'", 'text-size': 9 },
                                { filter: "place='town'", 'text-size': 8 },
                                { filter: "place='village'", 'text-size': 7 }
                            ]
                        },
                        {
                            filter: 'zoom>=14;zoom<=19',
                            style: [
                                { filter: "place='city'", 'text-size': 10 },
                                { filter: "place='town'", 'text-size': 9 },
                                { filter: "place='village'", 'text-size': 8 }
                            ]
                        }
                    ]
                }
            ],
            filter: "layer='osm_place_point_z10-19'"
        },
        {
            id: 'osm_baseland1m_polygon_style',
            filter: "zoom>=6;zoom<=9;layer='osm_baseland1m_polygon'",
            style: [{ 'polygon-fill': '@baseland_polygon_fill' }]
        },
        {
            id: 'osm_baseland_polygon_style',
            filter: "zoom>=10;zoom<=19;layer='osm_baseland_polygon'",
            style: [{ 'polygon-fill': '@baseland_polygon_fill' }]
        },
        {
            id: 'osm_land_polygon_z10-11_style',
            filter: "zoom>=10;zoom<=11;layer='osm_land_polygon_z10-11'",
            style: [
                {
                    filter: "landuse='landfill'",
                    'polygon-fill': '@landbackgroundfill',
                    'polygon-foreground-fill': '@landfill',
                    'polygon-hatch-style': 'Percent90',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                { filter: "natural='wood'", 'polygon-fill': '@wood' },
                { filter: "leisure='park'", 'polygon-fill': '@park' },
                { filter: "leisure='golf_course'", 'polygon-fill': '@golf_course' },
                {
                    filter: "boundary='protected_area'",
                    'polygon-fill': '@protected_area'
                },
                { filter: "aeroway='aerodrome'", 'polygon-fill': '@aerodrome' },
                {
                    filter: "boundary='national_park'",
                    'polygon-fill': '@national_park'
                },
                { filter: "landuse='reservoir'", 'polygon-fill': '@reservoir' },
                {
                    filter: "landuse='orchard'",
                    'polygon-fill': '@orchardbackground',
                    'polygon-foreground-fill': '@orchard',
                    'polygon-hatch-style': 'Percent80',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                {
                    filter: "landuse='vineyards'",
                    'polygon-fill': '@vineyardsbackground',
                    'polygon-foreground-fill': '@vineyards',
                    'polygon-hatch-style': 'Percent70',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                { filter: "landuse='railway'", 'polygon-fill': '@railway' },
                { filter: "landuse='cemetery'", 'polygon-fill': '@cemetery' },
                { filter: "landuse='quarry'", 'polygon-fill': '@quarry' },
                {
                    filter: "landuse='basin'",
                    'polygon-fill': '@basinbackground',
                    'polygon-foreground-fill': '@basin',
                    'polygon-hatch-style': 'Percent10',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                {
                    filter: "landuse='village_green'",
                    'polygon-fill': '@village_green'
                },
                {
                    filter: "landuse='recreation_ground'",
                    'polygon-fill': '@recreation_ground'
                },
                { filter: "landuse='farmyard'", 'polygon-fill': '@farmyard' },
                { filter: "landuse='farm'", 'polygon-fill': '@farm' },
                { filter: "landuse='farmland'", 'polygon-fill': '@farmland' },
                { filter: "landuse='industrial'", 'polygon-fill': '@industrial' },
                { filter: "landuse='retail'", 'polygon-fill': '@retail' },
                { filter: "landuse='commercial'", 'polygon-fill': '@commercial' },
                { filter: "landuse='forest'", 'polygon-fill': '@forest' },
                {
                    filter: "landuse='military'",
                    'polygon-fill': '@militarybackground',
                    'polygon-foreground-fill': '@military',
                    'polygon-hatch-style': 'BackwardDiagonal',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                { filter: "landuse='meadow'", 'polygon-fill': '@meadow' },
                { filter: "landuse='residential'", 'polygon-fill': '@residential' },
                { filter: "natural='beach'", 'polygon-fill': '@beach' },
                { filter: "natural='grassland'", 'polygon-fill': '@grassland' },
                { filter: "natural='heath'", 'polygon-fill': '@heath' },
                {
                    filter: "natural='mud'",
                    'polygon-fill': '@mudbackground',
                    'polygon-foreground-fill': '@mud',
                    'polygon-hatch-style': 'percent90',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                { filter: "natural='sand'", 'polygon-fill': '@sand' },
                {
                    filter: "natural='wetland'",
                    'polygon-fill': '@wetlandbackground',
                    'polygon-foreground-fill': '@wetland',
                    'polygon-hatch-style': 'Percent25',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                { filter: "natural='scrub'", 'polygon-fill': '@scrub' },
                { filter: "leisure='marina'", 'polygon-fill': '@marina' },
                { filter: "leisure='water_park'", 'polygon-fill': '@water_park' },
                { filter: "leisure='track'", 'polygon-fill': '@track' },
                { filter: "leisure='common'", 'polygon-fill': '@common' },
                {
                    filter: "leisure='stadium'",
                    'polygon-fill': '@stadium',
                    'polygon-outline-color': '@stadiumborder',
                    'polygon-outline-width': 2
                },
                {
                    filter: "leisure='sports_centre'",
                    'polygon-fill': '@sports_centre'
                },
                {
                    filter: "leisure='playground'",
                    'polygon-fill': '@playground',
                    'polygon-outline-color': '@playgroundborder',
                    'polygon-outline-width': 3
                },
                { filter: "leisure='garden'", 'polygon-fill': '@garden' },
                { filter: "leisure='dog_park'", 'polygon-fill': '@dog_park' },
                {
                    filter: "leisure='nature_reserve'",
                    'polygon-fill': '@nature_reserve'
                },
                { filter: "tourism='attraction'", 'polygon-fill': '@attraction' },
                { filter: "tourism='zoo'", 'polygon-fill': '@zoo' },
                { filter: "aeroway='helipad'", 'polygon-fill': '@helipad' }
            ]
        },
        {
            id: 'osm_land_polygon_z12-13_style',
            filter: "zoom>=12;zoom<=13;layer='osm_land_polygon_z12-13'",
            style: [
                {
                    filter: "boundary='national_park'",
                    'polygon-fill': '@national_park'
                },
                {
                    filter: "boundary='protected_area'",
                    'polygon-fill': '@protected_area'
                },
                { filter: "landuse='reservoir'", 'polygon-fill': '@reservoir' },
                {
                    filter: "landuse='orchard'",
                    'polygon-fill': '@orchardbackground',
                    'polygon-foreground-fill': '@orchard',
                    'polygon-hatch-style': 'Percent80',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                {
                    filter: "landuse='vineyards'",
                    'polygon-fill': '@vineyardsbackground',
                    'polygon-foreground-fill': '@vineyards',
                    'polygon-hatch-style': 'Percent70',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                {
                    filter: "landuse='landfill'",
                    'polygon-fill': '@landbackgroundfill',
                    'polygon-foreground-fill': '@landfill',
                    'polygon-hatch-style': 'Percent90',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                { filter: "landuse='railway'", 'polygon-fill': '@railway' },
                { filter: "landuse='cemetery'", 'polygon-fill': '@cemetery' },
                { filter: "landuse='quarry'", 'polygon-fill': '@quarry' },
                {
                    filter: "landuse='basin'",
                    'polygon-fill': '@basinbackground',
                    'polygon-foreground-fill': '@basin',
                    'polygon-hatch-style': 'Percent10',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                {
                    filter: "landuse='village_green'",
                    'polygon-fill': '@village_green'
                },
                {
                    filter: "landuse='recreation_ground'",
                    'polygon-fill': '@recreation_ground'
                },
                { filter: "landuse='farmyard'", 'polygon-fill': '@farmyard' },
                { filter: "landuse='farm'", 'polygon-fill': '@farm' },
                { filter: "landuse='farmland'", 'polygon-fill': '@farmland' },
                { filter: "landuse='industrial'", 'polygon-fill': '@industrial' },
                { filter: "landuse='retail'", 'polygon-fill': '@retail' },
                { filter: "landuse='commercial'", 'polygon-fill': '@commercial' },
                { filter: "landuse='forest'", 'polygon-fill': '@forest' },
                {
                    filter: "landuse='military'",
                    'polygon-fill': '@militarybackground',
                    'polygon-foreground-fill': '@military',
                    'polygon-hatch-style': 'BackwardDiagonal',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                { filter: "landuse='meadow'", 'polygon-fill': '@meadow' },
                { filter: "landuse='residential'", 'polygon-fill': '@residential' },
                { filter: "leisure='park'", 'polygon-fill': '@park' },
                { filter: "natural='beach'", 'polygon-fill': '@beach' },
                { filter: "natural='grassland'", 'polygon-fill': '@grassland' },
                { filter: "natural='heath'", 'polygon-fill': '@heath' },
                {
                    filter: "natural='mud'",
                    'polygon-fill': '@mudbackground',
                    'polygon-foreground-fill': '@mud',
                    'polygon-hatch-style': 'percent90',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                { filter: "natural='wood'", 'polygon-fill': '@wood' },
                {
                    filter: "natural='wetland'",
                    'polygon-fill': '@wetlandbackground',
                    'polygon-foreground-fill': '@wetland',
                    'polygon-hatch-style': 'Percent25',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                { filter: "natural='scrub'", 'polygon-fill': '@scrub' },
                { filter: "leisure='marina'", 'polygon-fill': '@marina' },
                { filter: "leisure='water_park'", 'polygon-fill': '@water_park' },
                { filter: "leisure='track'", 'polygon-fill': '@track' },
                { filter: "leisure='common'", 'polygon-fill': '@common' },
                {
                    filter: "leisure='pitch'",
                    'polygon-fill': '@pitch',
                    'polygon-outline-color': '@pitchborder',
                    'polygon-outline-width': 3
                },
                {
                    filter: "leisure='stadium'",
                    'polygon-fill': '@stadium',
                    'polygon-outline-color': '@stadiumborder',
                    'polygon-outline-width': 2
                },
                {
                    filter: "leisure='sports_centre'",
                    'polygon-fill': '@sports_centre'
                },
                {
                    filter: "leisure='playground'",
                    'polygon-fill': '@playground',
                    'polygon-outline-color': '@playgroundborder',
                    'polygon-outline-width': 3
                },
                { filter: "leisure='golf_course'", 'polygon-fill': '@golf_course' },
                { filter: "leisure='garden'", 'polygon-fill': '@garden' },
                { filter: "leisure='dog_park'", 'polygon-fill': '@dog_park' },
                {
                    filter: "leisure='nature_reserve'",
                    'polygon-fill': '@nature_reserve'
                },
                { filter: "tourism='attraction'", 'polygon-fill': '@attraction' },
                { filter: "tourism='zoo'", 'polygon-fill': '@zoo' },
                { filter: "aeroway='helipad'", 'polygon-fill': '@helipad' },
                { filter: "aeroway='aerodrome'", 'polygon-fill': '@aerodrome' }
            ]
        },
        {
            id: 'ne_road20m_linestring_style',
            filter: "zoom=5;scalerank<=4;layer='ne_road10m_linestring'",
            style: [{ 'line-color': '@motorway6_9', 'line-width': 1 }]
        },
        {
            id: 'ne_road10m_linestring_style',
            filter: "zoom=6;scalerank<=6;layer='ne_road10m_linestring'",
            style: [{ 'line-color': '@motorway6_9', 'line-width': 1 }]
        },
        {
            id: 'osm_land_polygon_z14-19_style',
            filter: "zoom>=14;zoom<=19;layer='osm_land_polygon_z14-19'",
            style: [
                {
                    filter: "boundary='national_park'",
                    'polygon-fill': '@national_park',
                    'polygon-outline-color': '@national_park',
                    'polygon-outline-width': 1
                },
                {
                    filter: "boundary='protected_area'",
                    'polygon-fill': '@protected_area',
                    'polygon-outline-color': '@protected_area',
                    'polygon-outline-width': 1
                },
                {
                    filter: "landuse='reservoir'",
                    'polygon-fill': '@reservoir',
                    'polygon-outline-color': '@reservoir',
                    'polygon-outline-width': 1
                },
                {
                    filter: "landuse='orchard'",
                    'polygon-fill': '@orchardbackground',
                    'polygon-foreground-fill': '@orchard',
                    'polygon-hatch-style': 'Percent80',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                {
                    filter: "landuse='vineyards'",
                    'polygon-fill': '@vineyardsbackground',
                    'polygon-foreground-fill': '@vineyards',
                    'polygon-hatch-style': 'Percent70',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                {
                    filter: "landuse='landfill'",
                    'polygon-fill': '@landbackgroundfill',
                    'polygon-foreground-fill': '@landfill',
                    'polygon-hatch-style': 'Percent90',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                { filter: "landuse='railway'", 'polygon-fill': '@railway' },
                { filter: "landuse='cemetery'", 'polygon-fill': '@cemetery' },
                { filter: "landuse='quarry'", 'polygon-fill': '@quarry' },
                {
                    filter: "landuse='basin'",
                    'polygon-fill': '@basinbackground',
                    'polygon-foreground-fill': '@basin',
                    'polygon-hatch-style': 'Percent10',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                {
                    filter: "landuse='village_green'",
                    'polygon-fill': '@village_green'
                },
                {
                    filter: "landuse='recreation_ground'",
                    'polygon-fill': '@recreation_ground'
                },
                { filter: "landuse='farmyard'", 'polygon-fill': '@farmyard' },
                { filter: "landuse='farm'", 'polygon-fill': '@farm' },
                { filter: "landuse='farmland'", 'polygon-fill': '@farmland' },
                { filter: "landuse='industrial'", 'polygon-fill': '@industrial' },
                { filter: "landuse='retail'", 'polygon-fill': '@retail' },
                { filter: "landuse='commercial'", 'polygon-fill': '@commercial' },
                { filter: "landuse='forest'", 'polygon-fill': '@forest' },
                {
                    filter: "landuse='military'",
                    'polygon-fill': '@militarybackground',
                    'polygon-foreground-fill': '@military',
                    'polygon-hatch-style': 'BackwardDiagonal',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                { filter: "landuse='meadow'", 'polygon-fill': '@meadow' },
                { filter: "landuse='residential'", 'polygon-fill': '@residential' },
                { filter: "leisure='track'", 'polygon-fill': '@track' },
                { filter: "leisure='park'", 'polygon-fill': '@park' },
                { filter: "amenity='school'", 'polygon-fill': '@school' },
                { filter: "amenity='kindergarten'", 'polygon-fill': '@kindergarten' },
                { filter: "amenity='college'", 'polygon-fill': '@college' },
                { filter: "amenity='university'", 'polygon-fill': '@university' },
                { filter: "natural='beach'", 'polygon-fill': '@beach' },
                { filter: "natural='grassland'", 'polygon-fill': '@grassland' },
                { filter: "natural='heath'", 'polygon-fill': '@heath' },
                {
                    filter: "natural='mud'",
                    'polygon-fill': '@mudbackground',
                    'polygon-foreground-fill': '@mud',
                    'polygon-hatch-style': 'percent90',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                { filter: "natural='sand'", 'polygon-fill': '@sand' },
                { filter: "natural='wood'", 'polygon-fill': '@wood' },
                {
                    filter: "natural='wetland'",
                    'polygon-fill': '@wetlandbackground',
                    'polygon-foreground-fill': '@wetland',
                    'polygon-hatch-style': 'Percent25',
                    'polygon-brush-type': 'GeoHatchBrush'
                },
                { filter: "leisure='common'", 'polygon-fill': '@common' },
                {
                    filter: "leisure='sports_centre'",
                    'polygon-fill': '@sports_centre'
                },
                {
                    filter: "leisure='golf_course'",
                    'polygon-fill': '@golf_course',
                    'polygon-outline-color': '@golf_course',
                    'polygon-outline-width': 1
                },
                { filter: "leisure='garden'", 'polygon-fill': '@garden' },
                { filter: "leisure='dog_park'", 'polygon-fill': '@dog_park' },
                {
                    filter: "leisure='nature_reserve'",
                    'polygon-fill': '@nature_reserve'
                },
                {
                    filter: "tourism='attraction'",
                    'polygon-fill': '@attraction',
                    'polygon-outline-color': '@attractionborder',
                    'polygon-outline-width': 1
                },
                { filter: "tourism='zoo'", 'polygon-fill': '@zoo' },
                { filter: "aeroway='helipad'", 'polygon-fill': '@helipad' },
                { filter: "aeroway='aerodrome'", 'polygon-fill': '@aerodrome' },
                { filter: "amenity='parking'", 'polygon-fill': '@parking' }
            ]
        },
        {
            id: 'osm_land_polygon_z14-19_special_style',
            filter: "zoom>=14;zoom<=19;layer='osm_land_polygon_z14-19'",
            style: [
                { filter: "landuse='grass'", 'polygon-fill': '@grass' },
                { filter: "landuse='cemetery'", 'polygon-fill': '@cemetery' },
                {
                    filter: "leisure='pitch'",
                    'polygon-fill': '@pitch',
                    'polygon-outline-color': '@pitchborder',
                    'polygon-outline-width': 2
                },
                {
                    filter: "leisure='stadium'",
                    'polygon-fill': '@stadium',
                    'polygon-outline-color': '@stadiumborder',
                    'polygon-outline-width': 2
                },
                { filter: "natural='scrub'", 'polygon-fill': '@scrub' },
                {
                    filter: "leisure='swimming_pool'",
                    'polygon-fill': '@swimming_pool',
                    'polygon-outline-color': '@swimming_poolborder',
                    'polygon-outline-width': 2
                },
                { filter: "leisure='marina'", 'polygon-fill': '@marina' },
                { filter: "leisure='water_park'", 'polygon-fill': '@water_park' },
                {
                    filter: "leisure='playground'",
                    'polygon-fill': '@playground',
                    'polygon-outline-color': '@playgroundborder',
                    'polygon-outline-width': 2
                },
                { filter: "tourism='attraction'", 'polygon-fill': '@attraction' }
            ]
        },
        {
            id: 'osm_land_polygon_label_z14-19_text_style',
            filter: "zoom>=14;zoom<=19;layer='osm_land_polygon_z14-19'",
            style: [
                {
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-size': 7,
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-wrap': true,
                    'text-wrap-width': 20
                }
            ]
        },
        {
            id: 'ne_water10m_polygon_style',
            filter: "zoom>=0;zoom<=5;scalerank='0,1,2';layer='ne_water10m_polygon'",
            style: [
                {
                    'polygon-fill': 'rgb(160,207,235)',
                    'polygon-outline-color': 'rgba(255,255,255,0.2)'
                }
            ]
        },
        {
            id: 'osm_water_polygon_z6-9_style',
            filter: "zoom>=6;zoom<=9;layer='osm_water_polygon_z6-9'",
            style: [{ 'polygon-fill': '@water' }]
        },
        {
            id: 'osm_water_polygon_label_z10-12_style',
            filter: "zoom>=10;zoom<=12;layer='osm_water_polygon_z10-12'",
            style: [
                {
                    'polygon-fill': '@water',
                    'text-name': '@text_name',
                    'text-face-name': '@italic_text',
                    'text-size': 6,
                    'text-fill': '@ocean_text_fill',
                    'text-halo-fill': '@ocean_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-wrap': true,
                    'text-wrap-width': 20
                }
            ]
        },
        {
            id: 'osm_water_polygon_z13-19_style',
            filter: "zoom>=13;zoom<=19;layer='osm_water_polygon_z13-19'",
            style: [
                {
                    'polygon-fill': '@water'
                }
            ]
        },
        {
            id: 'osm_water_polygon_label_z13-19_style',
            filter: "zoom>=13;zoom<=19;layer='osm_water_polygon_z13-19'",
            style: [
                {
                    'text-name': '@text_name',
                    'text-face-name': '@italic_text',
                    'text-size': 6,
                    'text-fill': '@ocean_text_fill',
                    'text-halo-fill': '@ocean_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-wrap': true,
                    'text-wrap-width': 20
                }
            ]
        },
        {
            id: 'osm_water_linestring_z11-13_style',
            filter: "zoom>=11;zoom<=13;layer='osm_water_linestring_z11-13'",
            style: [{ 'line-color': '#A0CFEB', 'line-width': '1' }]
        },
        {
            id: 'osm_water_linestring_z14-19_style',
            filter: "zoom>=14;zoom<=19;layer='osm_water_linestring_z14-19'",
            style: [
                {
                    'line-color': '#A0CFEB',
                    style: [
                        { filter: 'zoom>=14;zoom<=16', 'line-width': 2 },
                        { filter: 'zoom>=17;zoom<=19', 'line-width': 4 }
                    ]
                }
            ]
        },
        {
            id: 'osm_water_linestring_label_z14-19_style',
            style: [
                {
                    filter: 'zoom>=14;zoom<=19',
                    'text-name': '@text_name',
                    'text-face-name': '@italic_text',
                    'text-fill': '@ocean_text_fill',
                    'text-halo-fill': '@ocean_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-wrap': true,
                    'text-wrap-width': 20,
                    'line-color': '#A0CFEB',
                    style: [
                        { filter: 'zoom>=14;zoom<=16', 'text-size': 6 },
                        { filter: 'zoom>=17;zoom<=19', 'text-size': 8 }
                    ]
                }
            ],
            filter: "layer='osm_water_linestring_z14-19'"
        },
        {
            id: 'osm_transport_polygon_z12-19_style',
            style: [
                {
                    filter: 'zoom>=12;zoom<=19',
                    style: [
                        {
                            filter: "aeroway='apron'",
                            'polygon-fill': '@apron',
                            'polygon-outline-color': '#9999cc',
                            'polygon-outline-width': 1
                        },
                        { filter: "aeroway='runway'", 'polygon-fill': '@runway' }
                    ]
                },
                {
                    filter: 'zoom>=15;zoom<=19',
                    style: [
                        { filter: "man_made='pier'", 'polygon-fill': '@pier' },
                        { filter: "aeroway='apron'", 'polygon-fill': '@apron' }
                    ]
                }
            ],
            filter: "layer='osm_transport_polygon_z12-19'"
        },
        {
            id: 'osm_transport_linestring_z12-19_style',
            style: [
                {
                    filter: 'zoom>=12;zoom<=14',
                    style: [
                        {
                            filter: "railway='rail'",
                            'line-width': 2,
                            'line-color': '@rail_outer'
                        },
                        {
                            filter: "railway='rail'",
                            'line-width': 1,
                            'line-color': '@rail_inner'
                        },
                        {
                            filter: "railway='rail'",
                            'line-width': 3,
                            'line-color': '@rail_center',
                            'line-dasharray': '@array1'
                        },
                        {
                            filter: "railway='tram'",
                            'line-width': 1,
                            'line-color': '@tram_outer'
                        },
                        {
                            filter: "railway='tram'",
                            'line-width': 1,
                            'line-color': '@tram_inner'
                        },
                        {
                            filter: "railway='tram'",
                            'line-width': 1,
                            'line-color': '@tram_center'
                        },
                        {
                            filter: "railway='subway'",
                            'line-width': 2,
                            'line-color': '@subway_outer'
                        },
                        {
                            filter: "railway='subway'",
                            'line-width': 1,
                            'line-color': '@subway_inner'
                        },
                        {
                            filter: "railway='subway'",
                            'line-width': 3,
                            'line-color': '@subway_center',
                            'line-dasharray': '@array1'
                        }
                    ]
                },
                {
                    filter: 'zoom>=15;zoom<=16',
                    style: [
                        {
                            filter: "railway='rail'",
                            'line-width': 4,
                            'line-color': '@rail_outer'
                        },
                        {
                            filter: "railway='rail'",
                            'line-width': 2,
                            'line-color': '@rail_inner'
                        },
                        {
                            filter: "railway='rail'",
                            'line-width': 6,
                            'line-color': '@rail_center',
                            'line-dasharray': '@array1'
                        },
                        {
                            filter: "railway='tram'",
                            'line-width': 2,
                            'line-color': '@tram_outer'
                        },
                        {
                            filter: "railway='tram'",
                            'line-width': 1,
                            'line-color': '@tram_inner'
                        },
                        {
                            filter: "railway='tram'",
                            'line-width': 3,
                            'line-color': '@tram_center'
                        },
                        {
                            filter: "railway='subway'",
                            'line-width': 4,
                            'line-color': '@subway_outer'
                        },
                        {
                            filter: "railway='subway'",
                            'line-width': 2,
                            'line-color': '@subway_inner'
                        },
                        {
                            filter: "railway='subway'",
                            'line-width': 6,
                            'line-color': '@subway_center',
                            'line-dasharray': '@array1'
                        },
                        {
                            filter: "railway='narrow_gauge'",
                            'line-width': 4,
                            'line-color': '@narrow_gauge_outer'
                        },
                        {
                            filter: "railway='narrow_gauge'",
                            'line-width': 2,
                            'line-color': '@narrow_gauge_inner'
                        },
                        {
                            filter: "railway='narrow_gauge'",
                            'line-width': 6,
                            'line-color': '@narrow_gauge_center',
                            'line-dasharray': '@array2'
                        },
                        {
                            filter: "railway='light_rail'",
                            'line-width': 2,
                            'line-color': '@light_rail_outer'
                        },
                        {
                            filter: "railway='light_rail'",
                            'line-width': 1,
                            'line-color': '@light_rail_inner'
                        },
                        {
                            filter: "railway='light_rail'",
                            'line-width': 3,
                            'line-color': '@light_rail_center',
                            'line-dasharray': '@array2'
                        },
                        {
                            filter: "railway='miniature'",
                            'line-width': 2,
                            'line-color': '@miniature_outer'
                        },
                        {
                            filter: "railway='miniature'",
                            'line-width': 1,
                            'line-color': '@miniature_inner'
                        },
                        {
                            filter: "railway='miniature'",
                            'line-width': 3,
                            'line-color': '@miniature_center',
                            'line-dasharray': '@array2'
                        },
                        {
                            filter: "railway='monorail'",
                            'line-width': 4,
                            'line-color': '@monorail_outer'
                        },
                        {
                            filter: "railway='monorail'",
                            'line-width': 2,
                            'line-color': '@monorail_inner'
                        },
                        {
                            filter: "railway='monorail'",
                            'line-width': 1,
                            'line-color': '@monorail_center',
                            'line-dasharray': '@array2'
                        }
                    ]
                },
                {
                    filter: 'zoom>=17;zoom<=19',
                    style: [
                        {
                            filter: "railway='rail'",
                            'line-width': 8,
                            'line-color': '@rail_outer'
                        },
                        {
                            filter: "railway='rail'",
                            'line-width': 4,
                            'line-color': '@rail_inner'
                        },
                        {
                            filter: "railway='rail'",
                            'line-width': 12,
                            'line-color': '@rail_center',
                            'line-dasharray': '@array1'
                        },
                        {
                            filter: "railway='tram'",
                            'line-width': 6,
                            'line-color': '@tram_outer'
                        },
                        {
                            filter: "railway='tram'",
                            'line-width': 3,
                            'line-color': '@tram_inner'
                        },
                        {
                            filter: "railway='tram'",
                            'line-width': 9,
                            'line-color': '@tram_center',
                            'line-dasharray': '@array1'
                        },
                        {
                            filter: "railway='subway'",
                            'line-width': 8,
                            'line-color': '@subway_outer'
                        },
                        {
                            filter: "railway='subway'",
                            'line-width': 4,
                            'line-color': '@subway_inner'
                        },
                        {
                            filter: "railway='subway'",
                            'line-width': 12,
                            'line-color': '@subway_center',
                            'line-dasharray': '@array1'
                        },
                        {
                            filter: "railway='narrow_gauge'",
                            'line-width': 8,
                            'line-color': '@narrow_gauge_outer'
                        },
                        {
                            filter: "railway='narrow_gauge'",
                            'line-width': 6,
                            'line-color': '@narrow_gauge_inner'
                        },
                        {
                            filter: "railway='narrow_gauge'",
                            'line-width': 10,
                            'line-color': '@narrow_gauge_center',
                            'line-dasharray': '@array2'
                        },
                        {
                            filter: "railway='light_rail'",
                            'line-width': 6,
                            'line-color': '@light_rail_outer'
                        },
                        {
                            filter: "railway='light_rail'",
                            'line-width': 4,
                            'line-color': '@light_rail_inner'
                        },
                        {
                            filter: "railway='light_rail'",
                            'line-width': 8,
                            'line-color': '@light_rail_center',
                            'line-dasharray': '@array2'
                        },
                        {
                            filter: "railway='miniature'",
                            'line-width': 4,
                            'line-color': '@miniature_outer'
                        },
                        {
                            filter: "railway='miniature'",
                            'line-width': 2,
                            'line-color': '@miniature_inner'
                        },
                        {
                            filter: "railway='miniature'",
                            'line-width': 6,
                            'line-color': '@miniature_center',
                            'line-dasharray': '@array2'
                        },
                        {
                            filter: "railway='monorail'",
                            'line-width': 6,
                            'line-color': '@monorail_outer'
                        },
                        {
                            filter: "railway='monorail'",
                            'line-width': 4,
                            'line-color': '@monorail_inner'
                        },
                        {
                            filter: "railway='monorail'",
                            'line-width': 2,
                            'line-color': '@monorail_center',
                            'line-dasharray': '@array2'
                        }
                    ]
                }
            ],
            filter: "layer='osm_transport_linestring_z12-19'"
        },
        {
            id: 'osm_transport_linestring_z12-19_aeroway_style',
            style: [
                {
                    filter: 'zoom>=12;zoom<=19',
                    'line-opacity': 1,
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: 'zoom>=12;zoom<=14',
                            style: [
                                {
                                    filter: "aeroway='taxiway'",
                                    'line-color': '@taxiway_outer',
                                    'line-width': 1
                                },
                                {
                                    filter: "aeroway='runway'",
                                    'line-width': 2,
                                    'line-color': '@runway_outer'
                                },
                                {
                                    filter: "aeroway='cable_car'",
                                    'line-width': 1,
                                    'line-color': '@cable_car_outer'
                                }
                            ]
                        },
                        {
                            filter: 'zoom>=15;zoom<=16',
                            style: [
                                {
                                    filter: "aeroway='taxiway'",
                                    'line-color': '@taxiway_outer',
                                    'line-width': 3
                                },
                                {
                                    filter: "aeroway='runway'",
                                    'line-width': 4,
                                    'line-color': '@runway_outer'
                                },
                                {
                                    filter: "aeroway='cable_car'",
                                    'line-width': 2,
                                    'line-color': '@cable_car_outer'
                                },
                                {
                                    filter: "aeroway='pier'",
                                    'line-width': 1,
                                    'line-color': '@pier_outer'
                                }
                            ]
                        },
                        {
                            filter: 'zoom>=17;zoom<=19',
                            style: [
                                {
                                    filter: "aeroway='taxiway'",
                                    'line-color': '@taxiway_outer',
                                    'line-width': 6
                                },
                                {
                                    filter: "aeroway='runway'",
                                    'line-width': 8,
                                    'line-color': '@runway_outer'
                                },
                                {
                                    filter: "aeroway='cable_car'",
                                    'line-width': 3,
                                    'line-color': '@cable_car_outer'
                                },
                                {
                                    filter: "aeroway='pier'",
                                    'line-width': 4,
                                    'line-color': '@pier_outer'
                                }
                            ]
                        }
                    ]
                }
            ],
            filter: "layer='osm_transport_linestring_z12-19'"
        },
        {
            id: 'osm_road_linestring_z7-8_style_outer',
            style: [
                {
                    filter: 'zoom>=7;zoom<=8',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: 'zoom=7',
                            'line-width': 1,
                            style: [
                                { filter: "highway='trunk'", 'line-color': '@trunk8_9' },
                                { filter: "highway='motorway'", 'line-color': '@motorway6_9' }
                            ]
                        },
                        {
                            filter: 'zoom=8',
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway6_9',
                                    'line-width': 2
                                },
                                {
                                    filter: "highway='trunk'",
                                    'line-color': '@trunk8_9',
                                    'line-width': 2
                                },
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_outer',
                                    'line-width': 1
                                }
                            ]
                        }
                    ]
                }
            ],
            filter: "layer='osm_road_linestring_z7-8'"
        },
        {
            id: 'osm_road_linestring_z9-11_style_outer',
            style: [
                {
                    filter: 'zoom>=9;zoom<=11',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: 'zoom=9',
                            style: [
                                {
                                    filter: "highway='trunk'",
                                    'line-color': '@trunk_outer',
                                    'line-width': 3
                                },
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_outer',
                                    'line-width': 2
                                },
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_outer',
                                    'line-width': 3
                                }
                            ]
                        },
                        {
                            filter: 'zoom=10',
                            style: [
                                {
                                    filter: "highway='trunk'",
                                    'line-color': '@trunk_outer',
                                    'line-width': 4
                                },
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_outer',
                                    'line-width': 3
                                },
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_outer',
                                    'line-width': 4
                                }
                            ]
                        },
                        {
                            filter: 'zoom=11',
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-width': 4,
                                    'line-color': '@motorway_outer'
                                },
                                {
                                    filter: "highway='trunk'",
                                    'line-width': 4,
                                    'line-color': '@trunk_outer'
                                },
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_outer',
                                    'line-width': 3
                                },
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_outer',
                                    'line-width': 2
                                },
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_outer',
                                    'line-width': 1
                                }
                            ]
                        }
                    ]
                }
            ],
            filter: "layer='osm_road_linestring_z9-11'"
        },
        {
            id: 'osm_road_linestring_z9-11_style_inner',
            style: [
                {
                    filter: 'zoom=9',
                    'line-cap': '@line_cap',
                    'line-width': 1,
                    style: [
                        { filter: "highway='motorway'", 'line-color': '#ffdebe' },
                        { filter: "highway='trunk'", 'line-color': '@trunk_inner' }
                    ]
                },
                {
                    filter: 'zoom=10',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway'",
                            'line-color': '@motorway_inner',
                            'line-width': 3
                        },
                        {
                            filter: "highway='trunk'",
                            'line-color': '@trunk_inner',
                            'line-width': 2
                        },
                        {
                            filter: "highway='primary'",
                            'line-color': '@primary_inner',
                            'line-width': 1
                        }
                    ]
                },
                {
                    filter: 'zoom=11',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway'",
                            'line-color': '@motorway_inner',
                            'line-width': 2
                        },
                        {
                            filter: "highway='trunk'",
                            'line-color': '@trunk_inner',
                            'line-width': 2
                        },
                        {
                            filter: "highway='primary'",
                            'line-color': '@primary_inner',
                            'line-width': 1
                        }
                    ]
                }
            ],
            filter: "layer='osm_road_linestring_z9-11'"
        },
        {
            id: 'osm_road_linestring_label_z9-11_text_style',
            style: [
                {
                    filter: 'zoom>=9;zoom<=10',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: 'zoom=9',
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'text-name': '@text_name',
                                    'text-face-name': '@bold_text',
                                    'text-fill': '@baseland_text_fill',
                                    'text-halo-fill': '@baseland_text_halo_fill',
                                    'text-halo-radius': '@radius',
                                    'text-align': '@text_align',
                                    'text-placement-type': 'detect',
                                    'text-placements': '@text_placements',
                                    'text-min-distance': 1,
                                    'text-min-padding': 2,
                                    'text-polygon-labeling-location-mode':
                    '@text_polygon_labeling_location_mode',
                                    'text-avoid-edges': true,
                                    'text-max-char-angle-delta': 0,
                                    'text-spacing': 50,
                                    'text-size': 6
                                }
                            ]
                        },
                        {
                            filter: 'zoom=10',
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'text-name': '@text_name',
                                    'text-face-name': '@bold_text',
                                    'text-fill': '@baseland_text_fill',
                                    'text-halo-fill': '@baseland_text_halo_fill',
                                    'text-halo-radius': '@radius',
                                    'text-align': '@text_align',
                                    'text-placement-type': 'detect',
                                    'text-placements': '@text_placements',
                                    'text-min-distance': 1,
                                    'text-min-padding': 2,
                                    'text-polygon-labeling-location-mode':
                    '@text_polygon_labeling_location_mode',
                                    'text-avoid-edges': true,
                                    'text-max-char-angle-delta': 0,
                                    'text-spacing': 50,
                                    'text-size': 6
                                }
                            ]
                        }
                    ]
                }
            ],
            filter: "layer='osm_road_linestring_z9-11'"
        },
        {
            id: 'osm_road_linestring_label_z9-11_shield_style',
            style: [
                {
                    filter: "zoom>=9;zoom<=10;ref=~'^((?!;).)*$';highway='motorway'",
                    'line-cap': '@line_cap',
                    'text-name': '@shield_name',
                    'text-face-name': '@bold_text',
                    'text-fill': '@shield_fill',
                    'text-size': 6,
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-force-horizontal-for-line': true,
                    'text-max-char-angle-delta': 0,
                    'text-spacing': 20,
                    'text-mask-color': '#f9d7a7',
                    'text-mask-outline-color': '#999999',
                    'text-mask-outline-width': 4,
                    'text-mask-type': 'RoundedCorners',
                    'text-mask-margin': 2
                },
                {
                    filter: "zoom=11;ref=~'^((?!;).)*$';highway='motorway,trunk'",
                    'text-name': '@shield_name',
                    'text-face-name': '@bold_text',
                    'text-fill': '@shield_fill',
                    'text-size': 6,
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-force-horizontal-for-line': true,
                    'text-max-char-angle-delta': 0,
                    'text-spacing': 60,
                    'text-mask-color': '#f9d7a7',
                    'text-mask-outline-color': '#999999',
                    'text-mask-outline-width': 4,
                    'text-mask-type': 'RoundedCorners',
                    'text-mask-margin': 2
                }
            ],
            filter: "layer='osm_road_linestring_z9-11'"
        },
        {
            id: 'osm_road_linestring_z12-13_line_style_outer',
            style: [
                {
                    filter: 'zoom=12',
                    style: [
                        {
                            filter: "highway='motorway'",
                            'line-color': '@motorway_outer',
                            'line-width': 6
                        },
                        {
                            filter: "highway='trunk'",
                            'line-color': '@trunk_outer',
                            'line-width': 6
                        },
                        {
                            filter: "highway='primary'",
                            'line-color': '@primary_outer',
                            'line-width': 4
                        },
                        {
                            filter: "highway='secondary'",
                            'line-color': '@secondary_outer',
                            'line-width': 3
                        },
                        {
                            filter: "highway='tertiary'",
                            'line-color': '@tertiary_outer',
                            'line-width': 3
                        },
                        {
                            filter: "highway='unclassified'",
                            'line-color': '@unclassified_outer',
                            'line-width': 1
                        },
                        {
                            filter: "highway='road'",
                            'line-color': '@road_outer',
                            'line-width': 1
                        }
                    ]
                },
                {
                    filter: 'zoom=13',
                    style: [
                        {
                            filter: "highway='motorway,trunk'",
                            'line-width': 6,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_outer'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_outer' }
                            ]
                        },
                        {
                            filter: "highway='primary'",
                            'line-color': '@primary_outer',
                            'line-width': 4
                        },
                        {
                            filter: "highway='secondary'",
                            'line-color': '@secondary_outer',
                            'line-width': 3
                        },
                        {
                            filter: "highway='tertiary'",
                            'line-color': '@tertiary_outer',
                            'line-width': 3
                        },
                        {
                            filter: "highway='living_street'",
                            'line-color': '@living_street_outer',
                            'line-width': 1
                        },
                        {
                            filter: "highway='service'",
                            'line-color': '@service_outer',
                            'line-width': 1
                        },
                        {
                            filter:
                "highway='motorway_link,trunk_link,primary_link,secondary_link,tertiary_link,residential,unclassified,road'",
                            'line-width': 2,
                            style: [
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '@motorway_link_outer'
                                },
                                {
                                    filter: "highway='trunk_link'",
                                    'line-color': '@trunk_link_outer'
                                },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@primary_link_outer'
                                },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_outer'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_outer'
                                },
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_outer'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_outer'
                                },
                                { filter: "highway='road'", 'line-color': '@road_outer' }
                            ]
                        }
                    ]
                }
            ],
            filter: "layer='osm_road_linestring_z12-13'"
        },
        {
            id: 'osm_road_linestring_label_z12-13_text_style',
            style: [
                {
                    filter: 'zoom=12',
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    style: [
                        { filter: "highway='motorway,trunk'", 'text-size': 6 },
                        { filter: "highway='primary'", 'text-size': 4 }
                    ]
                },
                {
                    filter: 'zoom=13',
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-spline-type': 'ForceSplining',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-max-char-angle-delta': 0,
                    'text-spacing': 50,
                    style: [
                        { filter: "highway='motorway,trunk,primary'", 'text-size': 6 }
                    ]
                }
            ],
            filter: "layer='osm_road_linestring_z12-13'"
        },
        {
            id: 'osm_road_linestring_label_z12-13_shield_style',
            style: [
                {
                    filter: "zoom=12;ref=~'^((?!;).)*$';highway='motorway,trunk'",
                    'text-name': '@shield_name',
                    'text-face-name': '@bold_text',
                    'text-fill': '@shield_fill',
                    'text-size': 6,
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-force-horizontal-for-line': true,
                    'text-max-char-angle-delta': 0,
                    'text-spacing': 60,
                    'text-mask-color': '#f9d7a7',
                    'text-mask-outline-color': '#999999',
                    'text-mask-outline-width': 4,
                    'text-mask-type': 'RoundedCorners',
                    'text-mask-margin': 2
                },
                {
                    filter: "zoom=12;ref=~'^((?!;).)*$';highway='primary'",
                    'text-name': '@shield_name',
                    'text-face-name': '@bold_text',
                    'text-fill': '@shield_fill',
                    'text-size': 6,
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-force-horizontal-for-line': true,
                    'text-max-char-angle-delta': 0,
                    'text-spacing': 60,
                    'text-mask-color': '#fff7d5',
                    'text-mask-outline-color': '#999999',
                    'text-mask-outline-width': 4,
                    'text-mask-type': 'RoundedCorners',
                    'text-mask-margin': 2
                },
                {
                    filter: "zoom=13;ref=~'^((?!;).)*$'",
                    'text-name': '@shield_name',
                    'text-face-name': '@bold_text',
                    'text-fill': '@shield_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-max-char-angle-delta': 0,
                    'text-spacing': 20,
                    'text-mask-type': 'RoundedCorners',
                    'text-mask-outline-color': '#999999',
                    'text-force-horizontal-for-line': true,
                    'text-mask-margin': 2,
                    'text-dy': -0.7,
                    style: [
                        {
                            filter: "highway='motorway,trunk'",
                            'text-mask-color': '#f9d7a7',
                            'text-mask-outline-width': 4,
                            'text-size': 6
                        },
                        {
                            filter: "highway='primary'",
                            'text-mask-outline-width': 4,
                            'text-mask-color': '#fff7d5',
                            'text-size': 6
                        }
                    ]
                }
            ],
            filter: "layer='osm_road_linestring_z12-13'"
        },
        {
            id: 'osm_road_linestring_z12-13_line_style_inner',
            style: [
                {
                    filter: 'zoom=12',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway'",
                            'line-color': '@motorway_inner',
                            'line-width': 4
                        },
                        {
                            filter: "highway='trunk'",
                            'line-color': '@trunk_inner',
                            'line-width': 4
                        },
                        {
                            filter: "highway='primary'",
                            'line-color': '@primary_inner',
                            'line-width': 2
                        },
                        {
                            filter: "highway='secondary'",
                            'line-color': '@secondary_inner',
                            'line-width': 1
                        },
                        {
                            filter: "highway='tertiary'",
                            'line-color': '@tertiary_inner',
                            'line-width': 1
                        }
                    ]
                },
                {
                    filter: 'zoom=13',
                    style: [
                        {
                            filter: "highway='motorway'",
                            'line-color': '@motorway_inner',
                            'line-width': 4
                        },
                        {
                            filter: "highway='trunk'",
                            'line-color': '@trunk_inner',
                            'line-width': 4
                        },
                        {
                            filter: "highway='primary'",
                            'line-color': '@primary_inner',
                            'line-width': 2
                        },
                        {
                            filter: "highway='secondary'",
                            'line-color': '@secondary_inner',
                            'line-width': 1
                        },
                        {
                            filter: "highway='tertiary'",
                            'line-color': '@tertiary_inner',
                            'line-width': 1
                        },
                        {
                            filter: "highway='residential'",
                            'line-color': '#E1E1E1',
                            'line-width': 2
                        },
                        {
                            filter: "highway='unclassified'",
                            'line-color': '#E1E1E1',
                            'line-width': 2
                        }
                    ]
                }
            ],
            filter: "layer='osm_road_linestring_z12-13'"
        },
        {
            id: 'osm_road_linestring_z14-19_tunnel_style_outer',
            filter:
        "tunnel='yes';layer='-1,-2,-3,-4,-5';layer='osm_road_linestring_z14-19'",
            'z-index': 'layer',
            style: [
                {
                    filter: 'zoom=14',
                    'line-cap': '@line_cap',
                    'line-color': '@tunnel_inner1',
                    style: [
                        { filter: "highway='motorway,trunk'", 'line-width': 10 },
                        { filter: "highway='primary'", 'line-width': 8 },
                        {
                            filter:
                "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                            'line-width': 6
                        },
                        {
                            filter: "highway='residential,unclassified,road'",
                            'line-width': 5
                        }
                    ]
                },
                {
                    filter: 'zoom=15',
                    style: [
                        { filter: "highway='motorway,trunk'", 'line-width': 10 },
                        {
                            filter:
                "highway='primary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                            'line-width': 8
                        },
                        {
                            filter: "highway='residential,unclassified,road'",
                            'line-width': 6
                        }
                    ]
                },
                {
                    filter: 'zoom=16',
                    'line-cap': '@line_cap',
                    'line-color': '@tunnel_outer1',
                    style: [
                        { filter: "highway='motorway,trunk,primary'", 'line-width': 12 },
                        {
                            filter:
                "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                            'line-width': 10
                        },
                        {
                            filter: "highway='residential,unclassified,road'",
                            'line-width': 8
                        }
                    ]
                },
                {
                    filter: 'zoom=17',
                    'line-cap': '@line_cap',
                    'line-color': '@tunnel_outer1',
                    style: [
                        { filter: "highway='motorway,trunk,primary", 'line-width': 14 },
                        {
                            filter:
                "highway='secondary,motorway_link,trunk_link,primary_link,secondary_link'",
                            'line-width': 12
                        },
                        {
                            filter: "highway='tertiary_link,residential,unclassified,road'",
                            'line-width': 10
                        }
                    ]
                },
                {
                    filter: 'zoom>=18;zoom<=19',
                    'line-cap': '@line_cap',
                    'line-color': '@tunnel_outer1',
                    style: [
                        { filter: "highway='motorway,trunk,primary'", 'line-width': 16 },
                        {
                            filter:
                "highway='secondary,motorway_link,trunk_link',primary_link,secondary_link'",
                            'line-width': 14
                        },
                        {
                            filter:
                "highway='tertiary,tertiary_link,residential,unclassified,road'",
                            'line-width': 12
                        }
                    ]
                }
            ]
        },
        {
            id: 'osm_road_linestring_z14-19_tunnel_style_inner',
            filter:
        "tunnel='yes';layer='-1,-2,-3,-4,-5';layer='osm_road_linestring_z14-19'",
            'z-index': 'layer',
            style: [
                {
                    filter: "zoom=14;'",
                    'z-index': 'layer',
                    style: [
                        {
                            filter:
                "highway='motorway,trunk,primary,secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link,residential,unclassified,road'",
                            'line-cap': '@line_cap',
                            'line-color': '@tunnel_inner1',
                            style: [
                                { filter: "highway='motorway,trunk'", 'line-width': 10 },
                                { filter: "highway='primary'", 'line-width': 8 },
                                {
                                    filter:
                    "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                                    'line-width': 6
                                },
                                {
                                    filter: "highway='residential,unclassified,road'",
                                    'line-width': 5
                                }
                            ]
                        },
                        {
                            filter: "highway='motorway,trunk'",
                            'line-cap': '@line_cap',
                            'line-width': 8,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_inner'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_inner' }
                            ]
                        },
                        {
                            filter: "highway='primary'",
                            'line-color': '@primary_inner',
                            'line-cap': '@line_cap',
                            'line-width': 6
                        },
                        {
                            filter:
                "highway='secondary,tertiary,motorway_link,primary_link,secondary_link,tertiary_link'",
                            'line-cap': '@line_cap',
                            'line-width': 4,
                            style: [
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_inner'
                                },
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_inner'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '@motorway_link_inner'
                                },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@primary_inner'
                                },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_inner'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_inner'
                                }
                            ]
                        },
                        {
                            filter: "highway='residential,unclassified,road,living_street'",
                            'line-cap': '@line_cap',
                            'line-width': 3,
                            style: [
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_inner'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_inner'
                                },
                                { filter: "highway='road'", 'line-color': '@road_inner' },
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_inner'
                                }
                            ]
                        }
                    ]
                },
                {
                    filter: 'zoom=15',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,trunk'",
                            'line-width': 10,
                            'line-color': '#CCCCCC'
                        },
                        {
                            filter:
                "highway='secondary,primary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                            'line-width': 8,
                            'line-color': '#CCCCCC'
                        },
                        {
                            filter: "highway='residential,unclassified,road'",
                            'line-width': 6,
                            'line-color': '#CCCCCC'
                        },
                        {
                            filter: "highway='motorway,trunk'",
                            'line-width': 8,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_inner'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_inner' }
                            ]
                        },
                        {
                            filter:
                "highway='primary,secondary,tertiary,primary_link,tertiary_link'",
                            'line-width': 6,
                            style: [
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_inner'
                                },
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_inner'
                                },
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_inner'
                                },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@secondary_link_inner'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@primary_inner'
                                }
                            ]
                        },
                        {
                            filter: "highway='residential,unclassified,road,living_street'",
                            'line-width': 4,
                            style: [
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_inner'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_inner'
                                },
                                { filter: "highway='road'", 'line-color': '@road_inner' },
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_inner'
                                }
                            ]
                        },
                        {
                            filter: "highway='service,pedestrian'",
                            'line-width': 3,
                            'line-color': '#f7f7f7'
                        },
                        {
                            filter: "highway='cycleway,footway,bridleway,path,steps,track'",
                            'line-width': 3,
                            'line-color': '#e7e6e5'
                        }
                    ]
                },
                {
                    filter: 'zoom=16',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,trunk,primary'",
                            'line-width': 12,
                            'line-color': '#CCCCCC'
                        },
                        {
                            filter:
                "highway='secondary,tertiary,motorway_link,trunk_link,primary_link',secondary_link,tertiary_link'",
                            'line-width': 10,
                            'line-color': '#CCCCCC'
                        },
                        {
                            filter: "highway='residential,unclassified,road'",
                            'line-width': 8,
                            'line-color': '#CCCCCC'
                        },
                        {
                            filter: "highway='motorway,trunk,primary'",
                            'line-width': 10,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_inner'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_inner' },
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                            'line-width': 8,
                            style: [
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_inner'
                                },
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_inner'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '#F7DDB9'
                                },
                                { filter: "highway='trunk_link'", 'line-color': '#FAF2E1' },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@primary_inner'
                                },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_inner'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_inner'
                                }
                            ]
                        },
                        {
                            filter: "highway='residential,unclassified,road'",
                            'line-width': 6,
                            style: [
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_inner'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_inner'
                                },
                                { filter: "highway='road'", 'line-color': '@road_inner' }
                            ]
                        },
                        {
                            filter: "highway='living_street,service,pedestrian'",
                            'line-width': 4,
                            style: [
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_inner'
                                },
                                {
                                    filter: "highway='service'",
                                    'line-color': '@service_inner'
                                },
                                { filter: "highway='pedestrian'", 'line-color': '#F0EFEE' }
                            ]
                        },
                        {
                            filter: "highway='cycleway,footway,bridleway,path,steps,track'",
                            'line-width': 3,
                            'line-color': '#F0EFEE'
                        }
                    ]
                },
                {
                    filter: 'zoom=17',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,trunk,primary'",
                            'line-width': 14,
                            'line-color': '#CCCCCC'
                        },
                        {
                            filter:
                "highway='secondary,motorway_link,trunk_link,primary_link,secondary_link'",
                            'line-width': 12,
                            'line-color': '#CCCCCC'
                        },
                        {
                            filter:
                "highway='tertiary,tertiary_link,residential,unclassified,road'",
                            'line-width': 10,
                            'line-color': '#CCCCCC'
                        },
                        {
                            filter: "highway='motorway,trunk,primary'",
                            'line-width': 12,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_inner'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_inner' },
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='secondary,motorway_link,trunk_link,primary_link,secondary_link'",
                            'line-width': 10,
                            style: [
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_inner'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '#F7DDB9'
                                },
                                { filter: "highway='trunk_link'", 'line-color': '#FAF2E1' },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@secondary_link_inner'
                                },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='tertiary,tertiary_link,residential,unclassified,road'",
                            'line-width': 8,
                            style: [
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_inner'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_inner'
                                },
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_inner'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_inner'
                                },
                                { filter: "highway='road'", 'line-color': '@road_inner' }
                            ]
                        },
                        {
                            filter: "highway='living_street,service'",
                            'line-width': 6,
                            style: [
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_inner'
                                },
                                {
                                    filter: "highway='service'",
                                    'line-color': '@service_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='pedestrian,cycleway,footway,bridleway,path,steps,track'",
                            'line-width': 4,
                            style: [
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_inner'
                                },
                                {
                                    filter: "highway='service'",
                                    'line-color': '@service_inner'
                                }
                            ]
                        }
                    ]
                },
                {
                    filter: 'zoom>=18;zoom<=19',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,trunk,primary'",
                            'line-width': 16,
                            'line-color': '#CCCCCC'
                        },
                        {
                            filter:
                "highway='secondary,motorway_link,trunk_link,primary_link,secondary_link'",
                            'line-width': 14,
                            'line-color': '#CCCCCC'
                        },
                        {
                            filter:
                "highway='tertiary_link,tertiary,residential,unclassified,road'",
                            'line-width': 12,
                            'line-color': '#CCCCCC'
                        },
                        {
                            filter: "highway='motorway,trunk,primary'",
                            'line-width': 14,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_inner'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_inner' },
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='secondary,motorway_link,trunk_link,primary_link,secondary_link'",
                            'line-width': 12,
                            style: [
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_inner'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '#F7DDB9'
                                },
                                { filter: "highway='trunk_link'", 'line-color': '#FAF2E1' },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@primary_inner'
                                },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='tertiary,tertiary_link,residential,unclassified,road'",
                            'line-width': 10,
                            style: [
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_inner'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_inner'
                                },
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_inner'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_inner'
                                },
                                { filter: "highway='road'", 'line-color': '@road_inner' }
                            ]
                        },
                        {
                            filter: "highway='living_street,service'",
                            'line-width': 8,
                            style: [
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_inner'
                                },
                                {
                                    filter: "highway='service'",
                                    'line-color': '@service_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='pedestrian,cycleway,footway,bridleway,path,steps,track'",
                            'line-width': 4,
                            'line-color': '#F0EFEE'
                        }
                    ]
                }
            ]
        },
        {
            id: 'osm_road_linestring_label_z14-19_shield_style',
            style: [
                {
                    filter: "zoom=14;ref=~'^((?!;).)*$'",
                    'text-name': '@shield_name',
                    'text-face-name': '@bold_text',
                    'text-fill': '@shield_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-max-char-angle-delta': 0,
                    'text-spacing': 20,
                    'text-mask-type': 'RoundedCorners',
                    'text-mask-outline-color': '#999999',
                    'text-force-horizontal-for-line': true,
                    'text-mask-margin': 2,
                    'text-dy': -0.7,
                    style: [
                        {
                            filter: "highway='motorway,trunk'",
                            'text-mask-color': '#f9d7a7',
                            'text-mask-outline-width': 4,
                            'text-size': 7
                        },
                        {
                            filter: "highway='primary'",
                            'text-mask-outline-width': 4,
                            'text-mask-color': '#fff7d5',
                            'text-size': 7
                        }
                    ]
                },
                {
                    filter: "zoom=15;ref=~'^((?!;).)*$'",
                    'text-name': '@shield_name',
                    'text-face-name': '@bold_text',
                    'text-fill': '@shield_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-force-horizontal-for-line': true,
                    'text-max-char-angle-delta': 0,
                    'text-spacing': 60,
                    'text-dy': -0.5,
                    'text-mask-color': '#f9d7a7',
                    'text-mask-outline-color': '#999999',
                    'text-mask-outline-width': 4,
                    'text-mask-type': 'RoundedCorners',
                    'text-mask-margin': 2,
                    style: [
                        { filter: "highway='motorway,trunk,primary'", 'text-size': 8 },
                        { filter: "highway='secondary,tertiary'", 'text-size': 7 },
                        {
                            filter: "highway='residential,unclassified,road,living_street'",
                            'text-size': 6
                        }
                    ]
                },
                {
                    filter: "zoom=16;ref=~'^((?!;).)*$'",
                    'text-name': '@shield_name',
                    'text-face-name': '@bold_text',
                    'text-fill': '@shield_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-force-horizontal-for-line': true,
                    'text-max-char-angle-delta': 0,
                    'text-spacing': 20,
                    'text-dy': -0.5,
                    'text-mask-color': '#f8d39d',
                    'text-mask-outline-color': '#999999',
                    'text-mask-outline-width': 4,
                    'text-mask-type': 'RoundedCorners',
                    'text-mask-margin': 2,
                    style: [
                        { filter: "highway='motorway',trunk,primary'", 'text-size': 8 },
                        { filter: "highway='secondary,tertiary'", 'text-size': 7 },
                        {
                            filter: "highway='residential,unclassified,road,living_street'",
                            'text-size': 6
                        }
                    ]
                },
                {
                    filter: "zoom=17;ref=~'^((?!;).)*$'",
                    'text-name': '@shield_name',
                    'text-face-name': '@bold_text',
                    'text-fill': '@shield_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-force-horizontal-for-line': true,
                    'text-max-char-angle-delta': 0,
                    'text-spacing': 20,
                    'text-dy': -0.5,
                    'text-mask-outline-color': '#999999',
                    'text-mask-outline-width': 4,
                    'text-mask-type': 'RoundedCorners',
                    'text-mask-margin': 2,
                    style: [
                        {
                            filter: "highway='motorway'",
                            'text-mask-color': '#f9d7a7',
                            'text-size': 9
                        },
                        {
                            filter: "highway='trunk'",
                            'text-mask-color': '#f9d7a7',
                            'text-size': 9
                        },
                        {
                            filter: "highway='primary'",
                            'text-mask-color': '#fff6cf',
                            'text-size': 9
                        }
                    ]
                },
                {
                    filter: "zoom>=18;zoom<=19;ref=~'^((?!;).)*$'",
                    'text-name': '@shield_name',
                    'text-face-name': '@bold_text',
                    'text-fill': '@shield_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-force-horizontal-for-line': true,
                    'text-max-char-angle-delta': 0,
                    'text-spacing': 20,
                    'text-dy': -0.5,
                    'text-mask-outline-color': '#999999',
                    'text-mask-outline-width': 4,
                    'text-mask-type': 'RoundedCorners',
                    'text-mask-margin': 2,
                    style: [
                        {
                            filter: "highway='motorway'",
                            'text-mask-color': '#f9d7a7',
                            'text-size': 10
                        },
                        {
                            filter: "highway='trunk'",
                            'text-mask-color': '#f9d7a7',
                            'text-size': 10
                        },
                        {
                            filter: "highway='primary'",
                            'text-mask-color': '#fff7d5',
                            'text-size': 10
                        }
                    ]
                }
            ],
            filter: "layer='osm_road_linestring_z14-19'"
        },
        {
            id: 'osm_road_linestring_z14-19_line_outer_style',
            style: [
                {
                    filter: 'zoom=14',
                    style: [
                        {
                            filter: "highway='road,residential,unclassified'",
                            'line-width': 3,
                            style: [
                                { filter: "highway='road'", 'line-color': '@road_outer' },
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_outer'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_outer'
                                }
                            ]
                        },
                        {
                            style: [
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_outer',
                                    'line-width': 2
                                },
                                {
                                    filter: "highway='service'",
                                    'line-color': '@service_outer',
                                    'line-width': 1
                                },
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_outer',
                                    'line-width': 6
                                },
                                {
                                    filter: "highway='trunk'",
                                    'line-color': '@trunk_outer',
                                    'line-width': 8
                                },
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_outer',
                                    'line-width': 8
                                }
                            ]
                        },
                        {
                            filter:
                "highway='tertiary_link,tertiary,secondary_link,secondary,primary_link,trunk_link,motorway_link'",
                            'line-width': 4,
                            style: [
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_outer',
                                    'line-width': 4
                                },
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_outer'
                                },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_outer'
                                },
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_outer'
                                },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@primary_link_outer'
                                },
                                {
                                    filter: "highway='trunk_link'",
                                    'line-color': '@trunk_link_outer'
                                },
                                { filter: "highway='motorway_link'", 'line-color': '#e1bb7e' }
                            ]
                        }
                    ]
                },
                {
                    filter: 'zoom=15',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,trunk'",
                            'line-width': 8,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_outer'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_outer' }
                            ]
                        },
                        {
                            filter:
                "highway='primary,secondary,tertiary,motorway_link,trunk_link,primary_link'",
                            'line-width': 6,
                            style: [
                                { filter: "highway='primary'", 'line-color': '#CCCCCC' },
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_outer'
                                },
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_outer'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '@motorway_link_outer'
                                },
                                { filter: "highway='trunk_link'", 'line-color': '#E2D0AC' },
                                { filter: "highway='primary_link'", 'line-color': '#CCCCCC' }
                            ]
                        },
                        {
                            filter:
                "highway='secondary_link,tertiary_link,residential,unclassified,road,living_street'",
                            'line-width': 4,
                            style: [
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_outer'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_outer'
                                },
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_outer'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_outer'
                                },
                                { filter: "highway='road'", 'line-color': '@road_outer' },
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_outer'
                                }
                            ]
                        },
                        {
                            filter: "highway='service,pedestrian'",
                            'line-width': 3,
                            style: [
                                { filter: "highway='service'", 'line-color': '#e0e0e0' },
                                { filter: "highway='pedestrian'", 'line-color': '#CCCCCC' }
                            ]
                        },
                        {
                            filter: "highway='cycleway,footway,bridleway,path,steps,track'",
                            'line-width': 2,
                            'line-color': '#CCCCCC'
                        }
                    ]
                },
                {
                    filter: 'zoom=16',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,trunk,primary'",
                            'line-width': 10,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_outer'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_outer' },
                                { filter: "highway='primary'", 'line-color': '#CCCCCC' }
                            ]
                        },
                        {
                            filter:
                "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                            'line-width': 8,
                            style: [
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_outer'
                                },
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_outer'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '@motorway_link_outer'
                                },
                                { filter: "highway='trunk_link'", 'line-color': '#E2D0AC' },
                                { filter: "highway='primary_link'", 'line-color': '#CCCCCC' },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_outer'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_outer'
                                }
                            ]
                        },
                        {
                            filter: "highway='residential,unclassified,road'",
                            'line-width': 6,
                            style: [
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_outer'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_outer'
                                },
                                { filter: "highway='road'", 'line-color': '@road_outer' }
                            ]
                        },
                        {
                            filter: "highway='living_street,service,pedestrian'",
                            'line-width': 4,
                            style: [
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_outer'
                                },
                                { filter: "highway='service'", 'line-color': '#e0e0e0' },
                                {
                                    filter: "highway='pedestrian'",
                                    'line-width': 3,
                                    'line-color': '#CCCCCC'
                                }
                            ]
                        },
                        {
                            filter: "highway='cycleway,footway,bridleway,path,steps,track'",
                            'line-width': 2,
                            'line-color': '#CCCCCC'
                        }
                    ]
                },
                {
                    filter: 'zoom=17',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,trunk,primary'",
                            'line-width': 12,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_outer'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_outer' },
                                { filter: "highway='primary'", 'line-color': '#CCCCCC' }
                            ]
                        },
                        {
                            filter:
                "highway='secondary,motorway_link,trunk_link,primary_link'",
                            'line-width': 10,
                            style: [
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_outer'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '@motorway_link_outer'
                                },
                                { filter: "highway='trunk_link'", 'line-color': '#E2D0AC' },
                                { filter: "highway='primary_link'", 'line-color': '#CCCCCC' }
                            ]
                        },
                        {
                            filter:
                "highway='tertiary,secondary_link,tertiary_link,residential,unclassified,road'",
                            'line-width': 8,
                            style: [
                                {
                                    filter: "highway='tertiary'",
                                    'line-width': 8,
                                    'line-color': '@tertiary_outer'
                                },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_outer'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_outer'
                                },
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_outer'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_outer'
                                },
                                { filter: "highway='road'", 'line-color': '@road_outer' }
                            ]
                        },
                        {
                            filter: "highway='living_street,service'",
                            'line-width': 6,
                            style: [
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_outer'
                                },
                                { filter: "highway='service'", 'line-color': '#e0e0e0' }
                            ]
                        },
                        {
                            filter:
                "highway='pedestrian,cycleway,footway,bridleway,path,steps,track'",
                            'line-width': 4,
                            'line-color': '#CCCCCC'
                        }
                    ]
                },
                {
                    filter: 'zoom>=18;zoom<=19',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,trunk,primary'",
                            'line-width': 14,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_outer'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_outer' },
                                { filter: "highway='primary'", 'line-color': '#CCCCCC' }
                            ]
                        },
                        {
                            filter:
                "highway='secondary,motorway_link,trunk_link,primary_link'",
                            'line-width': 12,
                            style: [
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_outer'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '@motorway_link_outer'
                                },
                                { filter: "highway='trunk_link'", 'line-color': '#E2D0AC' },
                                { filter: "highway='primary_link'", 'line-color': '#CCCCCC' }
                            ]
                        },
                        {
                            filter: "highway='secondary_link,tertiary_link'",
                            'line-color': '@tertiary_link_outer',
                            'line-width': 9
                        },
                        {
                            filter: "highway='residential,unclassified,road'",
                            'line-width': 10,
                            'line-color': '@residential_outer'
                        },
                        {
                            filter: "highway='living_street,service,tertiary'",
                            'line-width': 8,
                            style: [
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_outer'
                                },
                                {
                                    filter: "highway='service'",
                                    'line-width': 8,
                                    'line-color': '#e0e0e0'
                                },
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_outer'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='cycleway,footway,bridleway,path,steps,track,pedestrian'",
                            'line-width': 4,
                            'line-color': '#CCCCCC'
                        }
                    ]
                }
            ],
            filter: "layer='osm_road_linestring_z14-19'"
        },
        {
            id: 'osm_road_linestring_z14-19_line_inner_style',
            style: [
                {
                    filter: 'zoom=14',
                    style: [
                        {
                            filter: "highway='road,living_street'",
                            'line-width': 1,
                            style: [
                                { filter: "highway='road'", 'line-color': '@road_inner' },
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='residential,unclassified,tertiary_link,tertiary,secondary_link,secondary,primary_link,trunk_link,motorway_link'",
                            'line-width': 2,
                            style: [
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_inner'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_inner'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_outer'
                                },
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_inner'
                                },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_inner'
                                },
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_inner'
                                },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@primary_link_inner'
                                },
                                {
                                    filter: "highway='trunk_link'",
                                    'line-color': '@trunk_link_inner'
                                },
                                { filter: "highway='motorway_link'", 'line-color': '#F7DDB9' }
                            ]
                        },
                        {
                            style: [
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_inner',
                                    'line-width': 4
                                },
                                {
                                    filter: "highway='trunk'",
                                    'line-color': '@trunk_inner',
                                    'line-width': 6
                                },
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_inner',
                                    'line-width': 6
                                }
                            ]
                        }
                    ]
                },
                {
                    filter: 'zoom=15',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,trunk'",
                            'line-width': 6,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_inner'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_inner' }
                            ]
                        },
                        {
                            filter:
                "highway='primary,secondary,tertiary,motorway_link,trunk_link,primary_link'",
                            'line-width': 4,
                            style: [
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_inner'
                                },
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_inner'
                                },
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_inner'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '#F7DDB9'
                                },
                                { filter: "highway='trunk_link'", 'line-color': '#FAF2E1' },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@primary_inner'
                                }
                            ]
                        },
                        {
                            filter: "highway='secondary_link,tertiary_link'",
                            'line-width': 1,
                            'line-color': '#F0EFEE'
                        },
                        {
                            filter: "highway='residential,unclassified,road,living_street'",
                            'line-width': 2,
                            style: [
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_inner'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_inner'
                                },
                                { filter: "highway='road'", 'line-color': '@road_inner' },
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_inner'
                                }
                            ]
                        },
                        {
                            filter: "highway='service,pedestrian'",
                            'line-width': 1,
                            style: [
                                {
                                    filter: "highway='service'",
                                    'line-color': '@service_inner'
                                },
                                {
                                    filter: "highway='pedestrian'",
                                    'line-color': '@pedestrian_inner'
                                }
                            ]
                        },
                        {
                            filter: "highway='cycleway,footway,bridleway,path,steps,track'",
                            'line-width': 1,
                            'line-color': '#F0EFEE'
                        }
                    ]
                },
                {
                    filter: 'zoom=16',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,trunk,primary'",
                            'line-width': 8,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_inner'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_inner' },
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                            'line-width': 6,
                            style: [
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_inner'
                                },
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_inner'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '#F7DDB9'
                                },
                                { filter: "highway='trunk_link'", 'line-color': '#FAF2E1' },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@primary_inner'
                                },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_inner'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_inner'
                                }
                            ]
                        },
                        {
                            filter: "highway='residential,unclassified,road'",
                            'line-width': 4,
                            style: [
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_inner'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_inner'
                                },
                                { filter: "highway='road'", 'line-color': '@road_inner' }
                            ]
                        },
                        {
                            filter: "highway='living_street,pedestrian,service'",
                            'line-width': 2,
                            style: [
                                {
                                    filter: "highway='living_street,pedestrian'",
                                    'line-color': '#F0EFEE'
                                },
                                {
                                    filter: "highway='service'",
                                    'line-color': '@service_inner'
                                }
                            ]
                        },
                        {
                            filter: "highway='cycleway,footway,bridleway,path,steps,track'",
                            'line-width': 1,
                            'line-color': '#F0EFEE'
                        }
                    ]
                },
                {
                    filter: 'zoom=17',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,trunk,primary'",
                            'line-width': 10,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_inner'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_inner' },
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='secondary,motorway_link,trunk_link,primary_link'",
                            'line-width': 8,
                            style: [
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_inner'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '#F7DDB9'
                                },
                                { filter: "highway='trunk_link'", 'line-color': '#FAF2E1' },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@primary_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='tertiary,secondary_link,tertiary_link,residential,unclassified,road'",
                            'line-width': 6,
                            style: [
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_inner'
                                },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_inner'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_inner'
                                },
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_inner'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_inner'
                                },
                                { filter: "highway='road'", 'line-color': '@road_inner' }
                            ]
                        },
                        {
                            filter: "highway='living_street,service'",
                            'line-width': 4,
                            style: [
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '#F0EFEE'
                                },
                                {
                                    filter: "highway='service'",
                                    'line-color': '@service_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='pedestrian,cycleway,footway,bridleway,path,steps,track'",
                            'line-width': 2,
                            'line-color': '#ffffff'
                        }
                    ]
                },
                {
                    filter: 'zoom>=18;zoom<=19',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,trunk,primary'",
                            'line-width': 12,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_inner'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_inner' },
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='secondary,motorway_link,trunk_link,primary_link'",
                            'line-width': 10,
                            style: [
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_inner'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '#F7DDB9'
                                },
                                { filter: "highway='trunk_link'", 'line-color': '#FAF2E1' },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@primary_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='secondary_link,tertiary_link,residential,unclassified,road'",
                            'line-width': 8,
                            style: [
                                {
                                    filter: "highway='secondary_link,tertiary_link'",
                                    'line-color': '@tertiary_link_inner'
                                },
                                {
                                    filter: "highway='residential,unclassified,road'",
                                    'line-color': '@unclassified_inner'
                                }
                            ]
                        },
                        {
                            filter: "highway='tertiary'",
                            'line-width': 7,
                            'line-color': '@tertiary_inner'
                        },
                        {
                            filter: "highway='living_street'",
                            'line-width': 6,
                            'line-color': '#F0EFEE'
                        },
                        {
                            filter: "highway='service'",
                            'line-width': 7,
                            'line-color': '@service_inner'
                        },
                        {
                            filter:
                "highway='pedestrian,cycleway,footway,bridleway,path,steps,track'",
                            'line-width': 2,
                            'line-color': '#F0EFEE'
                        }
                    ]
                }
            ],
            filter: "layer='osm_road_linestring_z14-19'"
        },
        {
            id: 'osm_road_linestring_label_z14-19_text_style',
            style: [
                {
                    filter: 'zoom=14',
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-placements': '@text_placements',
                    'text-spline-type': 'ForceSplining',
                    'text-min-distance': 1,
                    'text-min-padding': 2,
                    'text-polygon-labeling-location-mode':
            '@text_polygon_labeling_location_mode',
                    'text-avoid-edges': true,
                    'text-max-char-angle-delta': 0,
                    'text-spacing': 50,
                    style: [
                        { filter: "highway='tertiary,secondary'", 'text-size': 6 },
                        { filter: "highway='motorway,trunk,primary'", 'text-size': 7 }
                    ]
                },
                {
                    filter: 'zoom>=15;zoom<=16',
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-spline-type': 'ForceSplining',
                    'text-placements': '@text_placements',
                    style: [
                        { filter: "highway='motorway,trunk'", 'text-size': 9 },
                        { filter: "highway='primary'", 'text-size': 8 },
                        { filter: "highway='secondary,tertiary'", 'text-size': 7 },
                        {
                            filter: "highway='residential,unclassified,road,living_street'",
                            'text-size': 6
                        }
                    ]
                },
                {
                    filter: 'zoom=17',
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-spline-type': 'ForceSplining',
                    'text-placements': '@text_placements',
                    style: [
                        { filter: "highway='motorway,trunk,primary'", 'text-size': 9 },
                        { filter: "highway='secondary'", 'text-size': 8 },
                        {
                            filter: "highway='tertiary,residential,unclassified,road'",
                            'text-size': 7
                        },
                        { filter: "highway='living_street'", 'text-size': 6 }
                    ]
                },
                {
                    filter: 'zoom>=18;zoom<=19',
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-spline-type': 'ForceSplining',
                    'text-placements': '@text_placements',
                    style: [
                        { filter: "highway='motorway,trunk,primary'", 'text-size': 10 },
                        { filter: "highway='secondary'", 'text-size': 9 },
                        {
                            filter: "highway='tertiary,residential,unclassified,road'",
                            'text-size': 8
                        },
                        { filter: "highway='living_street'", 'text-size': 7 }
                    ]
                }
            ],
            filter: "layer='osm_road_linestring_z14-19'"
        },
        {
            id: 'osm_road_linestring_z14-19_bridge_style_outer',
            filter:
        "bridge='yes';z_order='10,20,30,40,50';layer='osm_road_linestring_z14-19'",
            'z-index': 'z_order',
            style: [
                {
                    filter: 'zoom=14',
                    'line-color': '@bridge_outer1',
                    style: [
                        { filter: "highway='motorway,trunk'", 'line-width': 8 },
                        { filter: "highway='primary'", 'line-width': 6 },
                        {
                            filter:
                "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                            'line-width': 4
                        },
                        {
                            filter: "highway='residential,unclassified,road'",
                            'line-width': 3
                        }
                    ]
                },
                {
                    filter: 'zoom=15',
                    'line-color': '@bridge_outer2',
                    style: [
                        { filter: "highway='motorway,trunk'", 'line-width': 8 },
                        {
                            filter:
                "highway='primary,secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                            'line-width': 6
                        },
                        {
                            filter: "highway='residential,unclassified,road'",
                            'line-width': 4
                        }
                    ]
                },
                {
                    filter: 'zoom=16',
                    'line-color': '@bridge_outer2',
                    style: [
                        { filter: "highway='motorway,trunk,primary'", 'line-width': 10 },
                        {
                            filter:
                "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                            'line-width': 8
                        },
                        {
                            filter: "highway='residential,unclassified,road'",
                            'line-color': '@bridge_outer2',
                            'line-width': 6
                        }
                    ]
                },
                {
                    filter: 'zoom=17',
                    'line-color': '@bridge_outer2',
                    style: [
                        { filter: "highway='motorway,trunk,primary'", 'line-width': 12 },
                        {
                            filter:
                "highway='secondary,motorway_link,trunk_link,primary_link,secondary_link'",
                            'line-width': 10
                        },
                        {
                            filter:
                "highway='tertiary,tertiary_link,residential,unclassified,road'",
                            'line-width': 8
                        }
                    ]
                },
                {
                    filter: 'zoom>=18;zoom<=19',
                    'line-color': '@bridge_outer2',
                    style: [
                        { filter: "highway='motorway,trunk,primary'", 'line-width': 14 },
                        {
                            filter:
                "highway='secondary,motorway_link,trunk_link,primary_link,secondary_link'",
                            'line-width': 12
                        },
                        {
                            filter:
                "highway='tertiary,tertiary_link,residential,unclassified,road'",
                            'line-width': 10
                        }
                    ]
                }
            ]
        },
        {
            id: 'osm_road_linestring_z14-19_bridge_style_inner',
            filter:
        "bridge='yes';z_order='10,20,30,40,50';layer='osm_road_linestring_z14-19'",
            'z-index': 'z_order',
            style: [
                {
                    filter: 'zoom=14',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway'",
                            'line-color': '@motorway_inner',
                            'line-width': 6
                        },
                        {
                            filter: "highway='trunk'",
                            'line-color': '@trunk_inner',
                            'line-width': 6
                        },
                        {
                            filter: "highway='primary'",
                            'line-color': '@primary_inner',
                            'line-width': 4
                        },
                        {
                            filter:
                "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                            'line-width': 2,
                            style: [
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_inner'
                                },
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_inner'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '@motorway_link_inner'
                                },
                                {
                                    filter: "highway='trunk_link'",
                                    'line-color': 'rgb(250,242,225)'
                                },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@primary_inner'
                                },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_inner'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_inner'
                                }
                            ]
                        },
                        {
                            filter: "highway='residential,unclassified,road,living_street'",
                            'line-width': 1,
                            style: [
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_inner'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_inner'
                                },
                                { filter: "highway='road'", 'line-color': '@road_inner' },
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_inner'
                                }
                            ]
                        }
                    ]
                },
                {
                    filter: 'zoom=15',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,trunk'",
                            'line-width': 6,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_inner'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_inner' }
                            ]
                        },
                        {
                            filter:
                "highway='primary,secondary,tertiary,motorway_link,trunk_link,primary_link,tertiary_link,secondary_link'",
                            'line-width': 4,
                            style: [
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_inner'
                                },
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_inner'
                                },
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_inner'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '#F7DDB9'
                                },
                                { filter: "highway='trunk_link'", 'line-color': '#FAF2E1' },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@secondary_link_inner'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@primary_inner'
                                },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '#F0EFEE'
                                }
                            ]
                        },
                        {
                            filter: "highway='residential,unclassified,road,living_street'",
                            'line-width': 2,
                            style: [
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_inner'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_inner'
                                },
                                { filter: "highway='road'", 'line-color': '@road_inner' },
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_inner'
                                }
                            ]
                        },
                        {
                            filter: "highway='service,pedestrian'",
                            'line-width': 1,
                            'line-color': '#f7f7f7'
                        },
                        {
                            filter: "highway='cycleway,footway,bridleway,path,steps,track'",
                            'line-width': 1,
                            'line-color': '#e7e6e5'
                        }
                    ]
                },
                {
                    filter: 'zoom=16',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,trunk,primary'",
                            'line-width': 8,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_inner'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_inner' },
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                            'line-width': 6,
                            style: [
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_inner'
                                },
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_inner'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '#F7DDB9'
                                },
                                { filter: "highway='trunk_link'", 'line-color': '#FAF2E1' },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@primary_inner'
                                },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_inner'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_inner'
                                }
                            ]
                        },
                        {
                            filter: "highway='residential,unclassified,road'",
                            'line-width': 4,
                            style: [
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_inner'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_inner'
                                },
                                { filter: "highway='road'", 'line-color': '@road_inner' }
                            ]
                        },
                        {
                            filter: "highway='living_street,service'",
                            'line-width': 2,
                            style: [
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_inner'
                                },
                                {
                                    filter: "highway='service'",
                                    'line-color': '@service_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='pedestrian,cycleway,footway,bridleway,path,steps,track'",
                            'line-width': 2,
                            'line-color': '#F0EFEE'
                        }
                    ]
                },
                {
                    filter: 'zoom=17',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,primary'",
                            'line-width': 10,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_inner'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_inner' },
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                            'line-width': 8,
                            style: [
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_inner'
                                },
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_inner'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '#F7DDB9'
                                },
                                { filter: "highway='trunk_link'", 'line-color': '#FAF2E1' },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@primary_inner'
                                },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_inner'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_inner'
                                }
                            ]
                        },
                        {
                            filter: "highway='tertiary_link,residential,unclassified,road'",
                            'line-width': 6,
                            style: [
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_inner'
                                },
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_inner'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_inner'
                                },
                                { filter: "highway='road'", 'line-color': '@road_inner' }
                            ]
                        },
                        {
                            filter: "highway='living_street,service'",
                            'line-width': 4,
                            style: [
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_inner'
                                },
                                {
                                    filter: "highway='service'",
                                    'line-color': '@service_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='pedestrian,cycleway,footway,bridleway,path,steps,track'",
                            'line-width': 2,
                            'line-color': '#F0EFEE'
                        }
                    ]
                },
                {
                    filter: 'zoom>=18;zoom<=19',
                    'line-cap': '@line_cap',
                    style: [
                        {
                            filter: "highway='motorway,trunk,primary'",
                            'line-width': 12,
                            style: [
                                {
                                    filter: "highway='motorway'",
                                    'line-color': '@motorway_inner'
                                },
                                { filter: "highway='trunk'", 'line-color': '@trunk_inner' },
                                {
                                    filter: "highway='primary'",
                                    'line-color': '@primary_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='secondary,motorway_link,trunk_link,primary_link,secondary_link'",
                            'line-width': 10,
                            style: [
                                {
                                    filter: "highway='secondary'",
                                    'line-color': '@secondary_inner'
                                },
                                {
                                    filter: "highway='motorway_link'",
                                    'line-color': '#F7DDB9'
                                },
                                { filter: "highway='trunk_link'", 'line-color': '#FAF2E1' },
                                {
                                    filter: "highway='primary_link'",
                                    'line-color': '@primary_inner'
                                },
                                {
                                    filter: "highway='secondary_link'",
                                    'line-color': '@secondary_link_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='tertiary,tertiary_link,residential,unclassified,road'",
                            'line-width': 8,
                            style: [
                                {
                                    filter: "highway='tertiary'",
                                    'line-color': '@tertiary_inner'
                                },
                                {
                                    filter: "highway='tertiary_link'",
                                    'line-color': '@tertiary_link_inner'
                                },
                                {
                                    filter: "highway='residential'",
                                    'line-color': '@residential_inner'
                                },
                                {
                                    filter: "highway='unclassified'",
                                    'line-color': '@unclassified_inner'
                                },
                                { filter: "highway='road'", 'line-color': '@road_inner' }
                            ]
                        },
                        {
                            filter: "highway='living_street,service'",
                            'line-width': 6,
                            style: [
                                {
                                    filter: "highway='living_street'",
                                    'line-color': '@living_street_inner'
                                },
                                {
                                    filter: "highway='service'",
                                    'line-color': '@service_inner'
                                }
                            ]
                        },
                        {
                            filter:
                "highway='pedestrian,cycleway,footway,bridleway,path,steps,track'",
                            'line-width': 2,
                            'line-color': '#F0EFEE'
                        }
                    ]
                }
            ]
        },
        {
            id: 'osm_road_linestring_z14-19_oneway_style',
            filter:
        "zoom>=16;zoom<=19;oneway='yes';layer='osm_road_linestring_z14-19'",
            style: [{ 'line-pattern-file': '@oneway_file' }]
        },
        {
            id: 'osm_road_linestring_z14-19_bridge_oneway_style',
            filter:
        "zoom>=16;zoom<=19;oneway='yes';bridge='yes';layer='1,2,3,4,5';layer='osm_road_linestring_z14-19'",
            'z-index': 'layer',
            style: [{ 'line-pattern-file': '@oneway_file' }]
        },
        {
            id: 'osm_construct_polygon_z13_style',
            filter: "zoom=13;layer='osm_construct_polygon_z13'",
            style: [
                {
                    'polygon-fill': '@building_fill',
                    'polygon-outline-color': '@building_fillborder',
                    'polygon-outline-width': 1
                }
            ]
        },
        {
            id: 'osm_construct_polygon_label_z14-19_style',
            style: [
                {
                    filter: 'zoom>=17;zoom<=19',
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-size': 6,
                    'text-align': '@text_align',
                    'text-placements': '',
                    'text-wrap': true,
                    'text-wrap-width': 40
                }
            ]
        },
        {
            id: 'osm_construct_polygon_z14-19_style',
            style: [
                {
                    filter: 'zoom=14',
                    style: [
                        {
                            'polygon-fill': '@building_fill',
                            'polygon-outline-color': '@building_fillborder',
                            'polygon-outline-width': 1
                        }
                    ]
                },
                {
                    filter: 'zoom>=15;zoom<=16',
                    style: [
                        {
                            'polygon-fill': '@building_fill',
                            'polygon-outline-color': '@building_fillborder',
                            'polygon-outline-width': 1,
                            'polygon-shadow-dx': 1,
                            'polygon-shadow-dy': -1
                        }
                    ]
                },
                {
                    filter: 'zoom>=17;zoom<=19',
                    style: [
                        {
                            'polygon-fill': '@building_fill',
                            'polygon-outline-color': '@building_fillborder',
                            'polygon-outline-width': 1,
                            'polygon-shadow-dx': 3,
                            'polygon-shadow-dy': -3
                        }
                    ]
                }
            ],
            filter: "layer='osm_construct_polygon_z14-19'"
        },
        {
            id: 'osm_construct_linestring_z14-19_style',
            filter:
        "zoom>=15;zoom<=19;power='line,minor_line';layer='osm_construct_linestring_z14-19'",
            style: [{ 'line-color': '#a4a3a1', 'line-width': 1 }]
        },
        {
            id: 'osm_construct_point_z14-19_style',
            filter:
        "zoom>=15;zoom<=19;power='pole,tower';layer='osm_construct_point_z14-19'",
            style: [
                {
                    'point-type': 'symbol',
                    'point-symbol-type': 'square',
                    'point-character-fill': '#cccccc',
                    'point-character-outline-color': '#949494',
                    'point-character-size': 2
                }
            ]
        },
        {
            id: 'ne_state2m_linestring_style',
            filter: "zoom>=4;zoom<=6;scalerank<=7;layer='ne_state2m_linestring'",
            style: [{ 'line-color': '#e1e1e1', 'line-width': 1 }]
        },
        {
            id: 'ne_country10m_linestring_style',
            style: [
                {
                    filter: 'zoom>=1;zoom<=3',
                    'line-color': '#d9dcdf',
                    'line-width': 1
                },
                {
                    filter: 'zoom>=4;zoom<=6',
                    'line-color': '#cccccc',
                    'line-width': 1
                }
            ],
            filter: "layer='ne_country10m_linestring'"
        },
        {
            id: 'osm_boundary_linestring_z7-10_style',
            style: [
                {
                    filter: 'zoom>=7;zoom<=10',
                    'line-color': 'rgb(190,175,190)',
                    'line-cap': '@line_cap',
                    style: [
                        { filter: 'zoom>=7;zoom<=10;admin_level=2', 'line-width': 2 },
                        { filter: 'zoom>=7;zoom<=10;admin_level=4', 'line-width': 1 }
                    ]
                }
            ],
            filter: "layer='osm_boundary_linestring_z7-10'"
        },
        {
            id: 'osm_boundary_linestring_z11-12_style',
            style: [
                {
                    filter: 'zoom>=11;zoom<=12',
                    'line-color': 'rgb(190,175,190)',
                    'line-cap': '@line_cap',
                    style: [
                        { filter: 'admin_level=2', 'line-width': 3 },
                        { filter: 'admin_level=4', 'line-width': 2 },
                        { filter: 'admin_level=6', 'line-width': 1 }
                    ]
                }
            ],
            filter: "layer='osm_boundary_linestring_z11-12'"
        },
        {
            id: 'osm_boundary_linestring_z13-19_style',
            style: [
                {
                    filter: 'zoom>=13;zoom<=19',
                    'line-color': 'rgb(190,175,190)',
                    'line-cap': '@line_cap',
                    style: [
                        { filter: 'admin_level=2', 'line-width': 4 },
                        { filter: 'admin_level=4', 'line-width': 3 },
                        { filter: 'admin_level=6', 'line-width': 2 },
                        { filter: 'admin_level=8', 'line-width': 1 }
                    ]
                }
            ],
            filter: "layer='osm_boundary_linestring_z13-19'"
        },
        {
            id: 'osm_poi_point_z14-19_style',
            style: [
                {
                    filter: 'zoom>=18;zoom<=19',
                    'point-type': 'bitmap',
                    style: [
                        {
                            filter: "aeroway='terminal'",
                            'point-file': 'Icons\\\\aerowayterminal.16.png'
                        },
                        {
                            filter: "aeroway='helipad'",
                            'point-file': 'Icons\\\\aerowayhelipad.16.png'
                        },
                        {
                            filter: "aeroway='gate'",
                            'point-file': 'Icons\\\\aerowaygate.16.png'
                        },
                        {
                            filter: "aeroway='aerodrome'",
                            'point-file': 'Icons\\\\aerowayaerodrome.16.png'
                        },
                        {
                            filter: "amenity='waste_disposal'",
                            'point-file': 'Icons\\\\amenitywaste_disposal.16.png'
                        },
                        {
                            filter: "amenity='veterinary'",
                            'point-file': 'Icons\\\\amenityveterinary.16.png'
                        },
                        {
                            filter: "amenity='vending_machine'",
                            'point-file': 'Icons\\\\amenityvending_machine.16.png'
                        },
                        {
                            filter: "amenity='university'",
                            'point-file': 'Icons\\\\amenityuniversity.16.png'
                        },
                        {
                            filter: "amenity='townhall'",
                            'point-file': 'Icons\\\\amenitytownhall.16.png'
                        },
                        {
                            filter: "amenity='theatre'",
                            'point-file': 'Icons\\\\amenitytheatre.16.png'
                        },
                        {
                            filter: "amenity='telephone'",
                            'point-file': 'Icons\\\\amenitytelephone.16.png'
                        },
                        {
                            filter: "amenity='taxi'",
                            'point-file': 'Icons\\\\amenitytaxi.16.png'
                        },
                        {
                            filter: "amenity='shelter'",
                            'point-file': 'Icons\\\\amenityshelter.16.png'
                        },
                        {
                            filter: "amenity='school'",
                            'point-file': 'Icons\\\\amenityschool.16.png'
                        },
                        {
                            filter: "amenity='restaurant'",
                            'point-file': 'Icons\\\\amenityrestaurant.16.png'
                        },
                        {
                            filter: "amenity='recycling'",
                            'point-file': 'Icons\\\\amenityrecycling.16.png'
                        },
                        {
                            filter: "amenity='pub'",
                            'point-file': 'Icons\\\\amenitypub.16.png'
                        },
                        {
                            filter: "amenity='prison'",
                            'point-file': 'Icons\\\\amenityprison.16.png'
                        },
                        {
                            filter: "amenity='post_office'",
                            'point-file': 'Icons\\\\amenitypost_office.16.png'
                        },
                        {
                            filter: "amenity='post_box'",
                            'point-file': 'Icons\\\\amenitypost_box.16.png'
                        },
                        {
                            filter: "amenity='police'",
                            'point-file': 'Icons\\\\amenitypolice-2.16.png'
                        },
                        {
                            filter: "amenity='nursing_home'",
                            'point-file': 'Icons\\\\amenitynursing_home.16.png'
                        },
                        {
                            filter: "amenity='library'",
                            'point-file': 'Icons\\\\amenitylibrary-2.16.png'
                        },
                        {
                            filter: "amenity='ice_cream'",
                            'point-file': 'Icons\\\\amenityice_cream.16.png'
                        },
                        {
                            filter: "amenity='fountain'",
                            'point-file': 'Icons\\\\amenityfountain-2.16.png'
                        },
                        {
                            filter: "amenity='fire_station'",
                            'point-file': 'Icons\\\\amenityfire_station-2.16.png'
                        },
                        {
                            filter: "amenity='embassy'",
                            'point-file': 'Icons\\\\amenityembassy.16.png'
                        },
                        {
                            filter: "amenity='drinking_water'",
                            'point-file': 'Icons\\\\amenitydrinking_water.16.png'
                        },
                        {
                            filter: "amenity='doctors'",
                            'point-file': 'Icons\\\\amenitydoctors.16.png'
                        },
                        {
                            filter: "amenity='dentist'",
                            'point-file': 'Icons\\\\amenitydentist.16.png'
                        },
                        {
                            filter: "amenity='court_house'",
                            'point-file': 'Icons\\\\amenitycourthouse.16.png'
                        },
                        {
                            filter: "amenity='college'",
                            'point-file': 'Icons\\\\amenitycollege.16.png'
                        },
                        {
                            filter: "amenity='clock'",
                            'point-file': 'Icons\\\\amenityclock.16.png'
                        },
                        {
                            filter: "amenity='cinema'",
                            'point-file': 'Icons\\\\amenitycinema-2.16.png'
                        },
                        {
                            filter: "amenity='car_rental'",
                            'point-file': 'Icons\\\\amenitycar_rental.16.png'
                        },
                        {
                            filter: "amenity='casino'",
                            'point-file': 'Icons\\\\amenitycasino.16.png'
                        },
                        {
                            filter: "amenity='cafe'",
                            'point-file': 'Icons\\\\amenitycafe.16.png'
                        },
                        {
                            filter: "amenity='bus_station'",
                            'point-file': 'Icons\\\\amenitybus_station.16.png'
                        },
                        {
                            filter: "amenity='biergarten'",
                            'point-file': 'Icons\\\\amenitybiergarten.16.png'
                        },
                        {
                            filter: "amenity='bicycle_rental'",
                            'point-file': 'Icons\\\\amenitybicycle_rental.16.png'
                        },
                        {
                            filter: "amenity='bicycle_parking'",
                            'point-file': 'Icons\\\\amenityparking-bicycle.16.png'
                        },
                        {
                            filter: "amenity='bench'",
                            'point-file': 'Icons\\\\amenitybench.16.png'
                        },
                        {
                            filter: "amenity='bar'",
                            'point-file': 'Icons\\\\amenitybar.16.png'
                        },
                        {
                            filter: "barrier='tollbooth'",
                            'point-file': 'Icons\\\\barriertoll_booth.16.png'
                        },
                        {
                            filter: "barrier='stile'",
                            'point-file': 'Icons\\\\barrierstile.16.png'
                        },
                        {
                            filter: "barrier='lift_gate'",
                            'point-file': 'Icons\\\\barrierlift_gate.16.png'
                        },
                        {
                            filter: "barrier='kissing_gate'",
                            'point-file': 'Icons\\\\barrierkissing_gate.16.png'
                        },
                        {
                            filter: "barrier='gate'",
                            'point-file': 'Icons\\\\barriergate.16.png'
                        },
                        {
                            filter: "barrier='entrance'",
                            'point-file': 'Icons\\\\barrierentrance.16.png'
                        },
                        {
                            filter: "barrier='cycle_barrier'",
                            'point-file': 'Icons\\\\barriercycle_barrier.16.png'
                        },
                        {
                            filter: "barrier='cattle_grid'",
                            'point-file': 'Icons\\\\barriercattle_grid.16.png'
                        },
                        {
                            filter: "barrier='bollard'",
                            'point-file': 'Icons\\\\barrierbollard.16.png'
                        },
                        {
                            filter: "barrier='block'",
                            'point-file': 'Icons\\\\barrierblock.16.png'
                        },
                        { filter: "ford='yes'", 'point-file': 'Icons\\\\fordyes.16.png' },
                        {
                            filter: "historic='wreck'",
                            'point-file': 'Icons\\\\historicwreck.16.png'
                        },
                        {
                            filter: "historic='wayside_shrine'",
                            'point-file': 'Icons\\\\historicwayside_shrine.16.png'
                        },
                        {
                            filter: "historic='wayside_cross'",
                            'point-file': 'Icons\\\\historicwayside_cross.16.png'
                        },
                        {
                            filter: "historic='ruins'",
                            'point-file': 'Icons\\\\historicruins.16.png'
                        },
                        {
                            filter: "historic='monument'",
                            'point-file': 'Icons\\\\historicmonument.16.png'
                        },
                        {
                            filter: "historic='memorial'",
                            'point-file': 'Icons\\\\historicmemorial.16.png'
                        },
                        {
                            filter: "historic='castle'",
                            'point-file': 'Icons\\\\historiccastle-2.16.png'
                        },
                        {
                            filter: "historic='battlefield'",
                            'point-file': 'Icons\\\\historicbattlefield.16.png'
                        },
                        {
                            filter: "highway='traffic_signals'",
                            'point-file': 'Icons\\\\highwaytraffic_signals.16.png'
                        },
                        {
                            filter: "highway='bus_stop'",
                            'point-file': 'Icons\\\\highwaybus_stop-2.16.png'
                        },
                        {
                            filter: "leisure='stadium'",
                            'point-file': 'Icons\\\\leisurestadium.16.png'
                        },
                        {
                            filter: "leisure='slipway'",
                            'point-file': 'Icons\\\\leisureslipway.16.png'
                        },
                        {
                            filter: "leisure='marina'",
                            'point-file': 'Icons\\\\leisuremarina.16.png'
                        },
                        {
                            filter: "man_made='windmill'",
                            'point-file': 'Icons\\\\man_madewindmill.16.png'
                        },
                        {
                            filter: "man_made='water_tower'",
                            'point-file': 'Icons\\\\man_madewater_tower.16.png'
                        },
                        {
                            filter: "man_made='lighthouse'",
                            'point-file': 'Icons\\\\man_madelighthouse.16.png'
                        },
                        {
                            filter: "man_made='crane'",
                            'point-file': 'Icons\\\\man_madecrane.16.png'
                        },
                        {
                            filter: "military='bunker'",
                            'point-file': 'Icons\\\\militarybunker.16.png'
                        },
                        {
                            filter: "natural='peak'",
                            'point-file': 'Icons\\\\naturalpeak-2.16.png'
                        },
                        {
                            filter: "natural='cave_entrance'",
                            'point-file': 'Icons\\\\naturalcave.16.png'
                        },
                        {
                            filter: "office='estate_agent'",
                            'point-file': 'Icons\\\\officeestate_agent-2.16.png'
                        },
                        {
                            filter: "power='tower'",
                            'point-file': 'Icons\\\\powertower.16.png'
                        },
                        {
                            filter: "power='sub_station'",
                            'point-file': 'Icons\\\\powersub_station.16.png'
                        },
                        {
                            filter: "railway='tram_stop'",
                            'point-file': 'Icons\\\\railwaytram_stop.16.png'
                        },
                        {
                            filter: "railway='subway'",
                            'point-file': 'Icons\\\\railwaysubway.16.png'
                        },
                        {
                            filter: "shop='video'",
                            'point-file': 'Icons\\\\shopvideo.16.png'
                        },
                        {
                            filter: "shop='toys'",
                            'point-file': 'Icons\\\\shoptoys.16.png'
                        },
                        {
                            filter: "shop='tobacco'",
                            'point-file': 'Icons\\\\shoptobacco.16.png'
                        },
                        {
                            filter: "shop='supermarket'",
                            'point-file': 'Icons\\\\shopsupermarket.16.png'
                        },
                        {
                            filter: "shop='pet'",
                            'point-file': 'Icons\\\\shoppet-2.16.png'
                        },
                        {
                            filter: "shop='optician'",
                            'point-file': 'Icons\\\\shopoptician.16.png'
                        },
                        {
                            filter: "shop='newsagent'",
                            'point-file': 'Icons\\\\shopnewsagent.16.png'
                        },
                        {
                            filter: "shop='musical_instrument'",
                            'point-file': 'Icons\\\\shopmusic.16.png'
                        },
                        {
                            filter: "shop='motorcycle'",
                            'point-file': 'Icons\\\\shopmotorcycle.16.png'
                        },
                        {
                            filter: "shop='mobile_phone'",
                            'point-file': 'Icons\\\\shopmobile_phone.16.png'
                        },
                        {
                            filter: "shop='laundry'",
                            'point-file': 'Icons\\\\shoplaundry.16.png'
                        },
                        {
                            filter: "shop='kiosk'",
                            'point-file': 'Icons\\\\shopkiosk.16.png'
                        },
                        {
                            filter: "shop='jewelry'",
                            'point-file': 'Icons\\\\shopjewelry.16.png'
                        },
                        {
                            filter: "shop='hifi'",
                            'point-file': 'Icons\\\\shophifi.16.png'
                        },
                        {
                            filter: "shop='hearing_aids'",
                            'point-file': 'Icons\\\\shophearing_aids.16.png'
                        },
                        {
                            filter: "shop='hairdresser'",
                            'point-file': 'Icons\\\\shophairdresser.16.png'
                        },
                        {
                            filter: "shop='greengrocer'",
                            'point-file': 'Icons\\\\shopgreengrocer.16.png'
                        },
                        {
                            filter: "shop='gift'",
                            'point-file': 'Icons\\\\shopgift.16.png'
                        },
                        {
                            filter: "shop='garden_centre'",
                            'point-file': 'Icons\\\\shopgarden_centre.16.png'
                        },
                        {
                            filter: "shop='florist'",
                            'point-file': 'Icons\\\\shopflorist.16.png'
                        },
                        {
                            filter: "shop='doityourself'",
                            'point-file': 'Icons\\\\shopdoityourself.16.png'
                        },
                        {
                            filter: "shop='department_store'",
                            'point-file': 'Icons\\\\shopdepartment_store.16.png'
                        },
                        {
                            filter: "shop='copyshop'",
                            'point-file': 'Icons\\\\shopcopyshop.16.png'
                        },
                        {
                            filter: "shop='convenience'",
                            'point-file': 'Icons\\\\shopconvenience.16.png'
                        },
                        {
                            filter: "shop='confectionery'",
                            'point-file': 'Icons\\\\shopconfectionery.16.png'
                        },
                        {
                            filter: "shop='computer'",
                            'point-file': 'Icons\\\\shopcomputer.16.png'
                        },
                        {
                            filter: "shop='clothes'",
                            'point-file': 'Icons\\\\shopclothes.16.png'
                        },
                        {
                            filter: "shop='car_repair'",
                            'point-file': 'Icons\\\\shopcar_repair.16.png'
                        },
                        {
                            filter: "shop='car_parts'",
                            'point-file': 'Icons\\\\shopcar_repair.16.png'
                        },
                        { filter: "shop='car'", 'point-file': 'Icons\\\\shopcar.16.png' },
                        {
                            filter: "shop='butcher'",
                            'point-file': 'Icons\\\\shopbutcher.16.png'
                        },
                        {
                            filter: "shop='books'",
                            'point-file': 'Icons\\\\shopbooks.16.png'
                        },
                        {
                            filter: "shop='bicycle'",
                            'point-file': 'Icons\\\\shopbicycle.16.png'
                        },
                        {
                            filter: "shop='bakery'",
                            'point-file': 'Icons\\\\shopbakery.16.png'
                        },
                        {
                            filter: "shop='alcohol'",
                            'point-file': 'Icons\\\\shopalcohol.16.png'
                        },
                        {
                            filter: "sport='tennis'",
                            'point-file': 'Icons\\\\sporttennis.16.png'
                        },
                        {
                            filter: "sport='soccer'",
                            'point-file': 'Icons\\\\sportsoccer.16.png'
                        },
                        {
                            filter: "sport='shooting'",
                            'point-file': 'Icons\\\\sportshooting.16.png'
                        },
                        {
                            filter: "sport='motor'",
                            'point-file': 'Icons\\\\sportmotor.16.png'
                        },
                        {
                            filter: "sport='ice_stock'",
                            'point-file': 'Icons\\\\sportice_stock.16.png'
                        },
                        {
                            filter: "sport='horse_racing'",
                            'point-file': 'Icons\\\\sporthorse_racing.16.png'
                        },
                        {
                            filter: "sport='gymnastics'",
                            'point-file': 'Icons\\\\sportgymnastics-2.16.png'
                        },
                        {
                            filter: "sport='golf'",
                            'point-file': 'Icons\\\\sportgolf.16.png'
                        },
                        {
                            filter: "sport='diving'",
                            'point-file': 'Icons\\\\sportdiving.16.png'
                        },
                        {
                            filter: "sport='cricket'",
                            'point-file': 'Icons\\\\sportcricket.16.png'
                        },
                        {
                            filter: "sport='climbing'",
                            'point-file': 'Icons\\\\sportclimbing.16.png'
                        },
                        {
                            filter: "sport='canoe'",
                            'point-file': 'Icons\\\\sportcanoe.16.png'
                        },
                        {
                            filter: "sport='baseball'",
                            'point-file': 'Icons\\\\sportbaseball.16.png'
                        },
                        {
                            filter: "sport='archery'",
                            'point-file': 'Icons\\\\sportarchery.16.png'
                        },
                        {
                            filter: "sport='skiing'",
                            'point-file': 'Icons\\\\sportskiing-downhill.16.png'
                        },
                        {
                            filter: "tourism='zoo'",
                            'point-file': 'Icons\\\\tourismzoo.16.png'
                        },
                        {
                            filter: "tourism='viewpoint'",
                            'point-file': 'Icons\\\\tourismviewpoint.16.png'
                        },
                        {
                            filter: "tourism='theme_park'",
                            'point-file': 'Icons\\\\tourismtheme_park.16.png'
                        },
                        {
                            filter: "tourism='picnic_site'",
                            'point-file': 'Icons\\\\tourismpicnic_site.16.png'
                        },
                        {
                            filter: "tourism='museum'",
                            'point-file': 'Icons\\\\tourismmuseum.16.png'
                        },
                        {
                            filter: "tourism='motel'",
                            'point-file': 'Icons\\\\tourismmotel.16.png'
                        },
                        {
                            filter: "tourism='hotel'",
                            'point-file': 'Icons\\\\tourismhotel-2.16.png'
                        },
                        {
                            filter: "tourism='hostel'",
                            'point-file': 'Icons\\\\tourismhostel.16.png'
                        },
                        {
                            filter: "tourism='chalet'",
                            'point-file': 'Icons\\\\tourismchalet.16.png'
                        },
                        {
                            filter: "tourism='caravan_site'",
                            'point-file': 'Icons\\\\tourismcaravan_site.16.png'
                        },
                        {
                            filter: "tourism='camp_site'",
                            'point-file': 'Icons\\\\tourismcamp_site.16.png'
                        },
                        {
                            filter: "tourism='attraction'",
                            'point-file': 'Icons\\\\tourismattraction.16.png'
                        },
                        {
                            filter: "tourism='artwork'",
                            'point-file': 'Icons\\\\tourismartwork-2.16.png'
                        },
                        {
                            filter: "tourism='alpine_hut'",
                            'point-file': 'Icons\\\\tourismalpine_hut.16.png'
                        },
                        {
                            filter: "waterway='weir'",
                            'point-file': 'Icons\\\\waterwayweir.16.png'
                        }
                    ]
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_amenity_toilets_style',
            style: [
                {
                    filter: "amenity='toilets'",
                    'point-file': 'Icons\\\\amenitytoilets.16.png'
                },
                {
                    filter: "disability_access='yes'",
                    'point-file': 'Icons\\\\amenitytoilets-disabled.16.png'
                },
                {
                    filter: "gender_access='men'",
                    'point-file': 'Icons\\\\amenitytoilets-men.16.png'
                },
                {
                    filter: "gender_access='women'",
                    'point-file': 'Icons\\\\amenitytoilets-women.16.png'
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_amenity_worship_style',
            style: [
                {
                    filter: 'zoom>=18;zoom<=19',
                    'point-type': 'bitmap',
                    style: [
                        {
                            filter: "religion='sikh'",
                            'point-file': 'Icons\\\\amenityplace_of_worship-sikh-3.16.png'
                        },
                        {
                            filter: "religion='shinto'",
                            'point-file': 'Icons\\\\amenityplace_of_worship-shinto-3.16.png'
                        },
                        {
                            filter: "religion='jain'",
                            'point-file': 'Icons\\\\amenityplace_of_worship-jain-3.16.png'
                        },
                        {
                            filter: "religion='muslim'",
                            'point-file': 'Icons\\\\amenityplace_of_worship-islamic-3.16.png'
                        },
                        {
                            filter: "religion='hindu'",
                            'point-file': 'Icons\\\\amenityplace_of_worship-hindu-3.16.png'
                        },
                        {
                            filter: "religion='christian'",
                            'point-file':
                'Icons\\\\amenityplace_of_worship-christian-3.16.png'
                        },
                        {
                            filter: "religion='buddhist'",
                            'point-file': 'Icons\\\\amenityplace_of_worship-buddhist-3.16.png'
                        },
                        {
                            filter: "religion='jewish'",
                            'point-file': 'Icons\\\\amenityplace_of_worship-jewish-3.16.png'
                        }
                    ]
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_amenity_hospital_style',
            style: [
                {
                    filter: 'zoom>=18;zoom<=19',
                    'point-type': 'bitmap',
                    style: [
                        {
                            filter: "amenity='hospital'",
                            'point-file': 'Icons\\\\amenityhospital.16.png'
                        },
                        {
                            filter: "emergency='yes'",
                            'point-file': 'Icons\\\\amenityhospital-emergency2.16.png'
                        },
                        {
                            filter: "emergency='no'",
                            'point-file': 'Icons\\\\amenityhospital.16.png'
                        }
                    ]
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_amenity_parking_style',
            style: [
                {
                    filter: 'zoom>=18;zoom<=19',
                    'point-type': 'bitmap',
                    style: [
                        {
                            filter: "fee='yes'",
                            'point-file': 'Icons\\\\amenityparking-car_paid.16.png'
                        },
                        {
                            filter: "access='private'",
                            'point-file': 'Icons\\\\amenityparking-private.16.png'
                        },
                        {
                            filter: "wheelchair='yes'",
                            'point-file': 'Icons\\\\amenityparking-disabled.16.png'
                        }
                    ]
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_amenity_parking_space_style',
            style: [
                {
                    filter: 'zoom>=18;zoom<=19',
                    'point-type': 'bitmap',
                    style: [
                        {
                            filter: "fee='yes'",
                            'point-file': 'Icons\\\\amenityparking-car_paid.16.png'
                        },
                        {
                            filter: "access='private'",
                            'point-file': 'Icons\\\\amenityparking-private.16.png'
                        },
                        {
                            filter: "wheelchair='yes'",
                            'point-file': 'Icons\\\\amenityparking-disabled.16.png'
                        }
                    ]
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_amenity_parking_entrance_style',
            style: [
                {
                    filter: 'zoom>=18;zoom>=19',
                    'point-type': 'bitmap',
                    style: [
                        {
                            filter: "fee='yes'",
                            'point-file': 'Icons\\\\amenityparking-car_paid.16.png'
                        },
                        {
                            filter: "access='private'",
                            'point-file': 'Icons\\\\amenityparking-private.16.png'
                        },
                        {
                            filter: "wheelchair='yes'",
                            'point-file': 'Icons\\\\amenityparking-disabled.16.png'
                        }
                    ]
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_amenity_pharmacy_style',
            style: [
                {
                    filter: 'zoom>=18;zoom<=19',
                    'point-type': 'bitmap',
                    style: [
                        {
                            filter: "dispensing='yes'",
                            'point-file': 'Icons\\\\amenitypharmacy-dispencing.16.png'
                        },
                        {
                            filter: "amenity='pharmacy'",
                            'point-file': 'Icons\\\\amenitypharmacy.16.png'
                        },
                        {
                            filter: "access='\"'",
                            'point-file': 'Icons\\\\amenitypharmacy.16.png'
                        }
                    ]
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_amenity_fuel_style',
            style: [
                {
                    filter: 'zoom>=18;zoom<=19',
                    'point-type': 'bitmap',
                    style: [
                        {
                            filter: "fuel:lpg='yes'",
                            'point-file': 'Icons\\\\amenityfuel-lpg.16.png'
                        },
                        {
                            filter: "amenity='fuel'",
                            'point-file': 'Icons\\\\amenityfuel.16.png'
                        },
                        {
                            filter: "access='\"'",
                            'point-file': 'Icons\\\\amenityfuel.16.png'
                        }
                    ]
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_amenity_fast_food_style',
            style: [
                {
                    filter: 'zoom>=18;zoom<=19',
                    'point-type': 'bitmap',
                    style: [
                        {
                            filter: "amenity='fast_food'",
                            'point-file': 'Icons\\\\amenityfast_food.16.png'
                        },
                        {
                            filter: "cuisine='pizza'",
                            'point-file': 'Icons\\\\amenityfast_food-pizza.16.png'
                        }
                    ]
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_highway_style',
            style: [
                {
                    filter: 'zoom>=18;zoom<=19',
                    'point-type': 'bitmap',
                    style: [
                        {
                            filter: "direction='clockwise'",
                            'point-file': 'Icons\\\\highwaymini_roundabout-clockwise.16.png'
                        },
                        {
                            filter: "direction='anticlockwise'",
                            'point-file':
                'Icons\\\\highwaymini_roundabout-anticlockwise.16.png'
                        }
                    ]
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_man_made_style',
            style: [
                {
                    filter: 'zoom>=18;zoom<=19',
                    'point-type': 'bitmap',
                    style: [
                        {
                            filter: "man_made='mineshaft'",
                            'point-file': 'Icons\\\\man_mademineshaft.16.png'
                        },
                        {
                            filter: "disused='yes'",
                            'point-file': 'Icons\\\\man_mademineshaft-abandoned.16.png'
                        }
                    ]
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_natural_style',
            style: [
                {
                    filter: 'zoom>=18;zoom<=19',
                    'point-type': 'bitmap',
                    style: [
                        {
                            filter: "wood='coniferous'",
                            'point-file': 'Icons\\\\naturalwood-coniferous.16.png'
                        },
                        {
                            filter: "wood='deciduous'",
                            'point-file': 'Icons\\\\naturalwood-deciduous.16.png'
                        },
                        {
                            filter: "wood='mixed'",
                            'point-file': 'Icons\\\\naturalwood-mixed.16.png'
                        }
                    ]
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_power_style',
            style: [
                {
                    filter: 'zoom>=18;zoom<=19',
                    'point-type': 'bitmap',
                    style: [
                        {
                            filter: "power='plant'",
                            'point-file': 'Icons\\\\powerplant-coal.16.png'
                        },
                        {
                            filter: "plant:source='hydro'",
                            'point-file': 'Icons\\\\powerplant-water.16.png'
                        },
                        {
                            filter: "plant:source='gas'",
                            'point-file': 'Icons\\\\powerplant-gas.16.png'
                        },
                        {
                            filter: "plant:source='solar'",
                            'point-file': 'Icons\\\\powerplant-solar.16.png'
                        },
                        {
                            filter: "plant:source='wind'",
                            'point-file': 'Icons\\\\powerplant-wind.16.png'
                        }
                    ]
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_sport_style',
            style: [
                {
                    filter: 'zoom>=18;zoom<=19',
                    'point-type': 'bitmap',
                    style: [
                        {
                            filter: "sport='swimming'",
                            'point-file': 'Icons\\\\sportswimming-indoor.16.png'
                        },
                        {
                            filter: "covered='yes'",
                            'point-file': 'Icons\\\\sporttennis.16.png'
                        }
                    ]
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_tourism_style',
            style: [
                {
                    filter: 'zoom>=18;zoom<=19',
                    'point-type': 'bitmap',
                    style: [
                        {
                            filter: "tourism='information'",
                            'point-file': 'Icons\\\\tourisminformation.16.png'
                        },
                        {
                            filter: "information='guidepost'",
                            'point-file': 'Icons\\\\tourisminformation-guidepost.16.png'
                        },
                        {
                            filter: "information='map'",
                            'point-file': 'Icons\\\\tourisminformation-map.16.png'
                        }
                    ]
                }
            ],
            filter: "layer='osm_poi_point_z14-19'"
        },
        {
            id: 'osm_poi_point_z14-19_text_label_style',
            filter: "zoom>=18;zoom<=19;layer='osm_poi_point_z14-19'",
            style: [
                {
                    'text-name': '@text_name',
                    'text-face-name': '@regular_text',
                    'text-fill': '@baseland_text_fill',
                    'text-halo-fill': '@baseland_text_halo_fill',
                    'text-halo-radius': '@radius',
                    'text-size': 8,
                    'text-align': '@text_align',
                    'text-placement-type': 'detect',
                    'text-dy': 15
                }
            ]
        }
    ],
    sources: [
        {
            id: 'osm_texas_source',
            url: 'http://13.57.8.209/data/v/{z}/{x}/{y}.pbf',
            type: 'MVT',
            options: { featureClass: 'ol.Feature' }
        }
    ],
    layers: [
        {
            id: 'osm_texas_layers',
            source: 'osm_texas_source',
            styles: [
                'ne_baseland30m_polygon_style',
                'ne_baseland30m_point_label_style',
                'ne_state5m_polygon_label_style',
                'ne_ocean1m_polygon_label_style',
                'ne_states_provinces10m_point_label_style',
                'ne_place2m_point_label_style',
                'osm_place_city_point_label_z7_style',
                'osm_place_city_town_point_label_z8-9_style',
                'osm_place_point_label_z10-19_style',
                'osm_baseland1m_polygon_style',
                'osm_baseland_polygon_style',
                'ne_water10m_polygon_style',
                'osm_land_polygon_z10-11_style',
                'osm_land_polygon_z12-13_style',
                'osm_land_polygon_z14-19_style',
                'osm_land_polygon_label_z14-19_text_style',
                'osm_land_polygon_z14-19_special_style',
                'osm_water_polygon_z6-9_style',
                'osm_water_polygon_label_z10-12_style',
                'osm_water_polygon_z13-19_style',
                'osm_water_polygon_label_z13-19_style',
                'osm_water_linestring_z11-13_style',
                'osm_water_linestring_z14-19_style',
                'osm_water_linestring_label_z14-19_style',
                'osm_transport_polygon_z12-19_style',
                'osm_transport_linestring_z12-19_style',
                'osm_transport_linestring_z12-19_aeroway_style',
                'ne_road20m_linestring_style',
                'ne_road10m_linestring_style',
                'osm_road_linestring_z7-8_style_outer',
                'osm_road_linestring_z9-11_style_outer',
                'osm_road_linestring_z9-11_style_inner',
                'osm_road_linestring_label_z9-11_text_style',
                'osm_road_linestring_label_z9-11_shield_style',
                'osm_road_linestring_z12-13_line_style_outer',
                'osm_road_linestring_z12-13_line_style_inner',
                'osm_road_linestring_label_z12-13_text_style',
                'osm_road_linestring_label_z12-13_shield_style',
                'osm_road_linestring_z14-19_tunnel_style_outer',
                'osm_road_linestring_z14-19_tunnel_style_inner',
                'osm_road_linestring_z14-19_line_outer_style',
                'osm_road_linestring_z14-19_line_inner_style',
                'osm_road_linestring_z14-19_oneway_style',
                'osm_road_linestring_z14-19_bridge_style_outer',
                'osm_road_linestring_z14-19_bridge_style_inner',
                'osm_road_linestring_z14-19_bridge_oneway_style',
                'osm_road_linestring_label_z14-19_text_style',
                'osm_road_linestring_label_z14-19_shield_style',
                'osm_construct_polygon_z13_style',
                'osm_construct_polygon_z14-19_style',
                'osm_construct_linestring_z14-19_style',
                'osm_construct_point_z14-19_style',
                'ne_state2m_linestring_style',
                'ne_country10m_linestring_style',
                'osm_boundary_linestring_z7-10_style',
                'osm_boundary_linestring_z11-12_style',
                'osm_boundary_linestring_z13-19_style',
                'osm_poi_point_z14-19_style',
                'osm_poi_point_z14-19_natural_style',
                'osm_poi_point_z14-19_man_made_style',
                'osm_poi_point_z14-19_highway_style',
                'osm_poi_point_z14-19_amenity_fast_food_style',
                'osm_poi_point_z14-19_power_style',
                'osm_poi_point_z14-19_tourism_style',
                'osm_poi_point_z14-19_sport_style',
                'osm_poi_point_z14-19_text_style',
                'osm_poi_point_z14-19_amenity_toilets_style',
                'osm_poi_point_z14-19_amenity_worship_style',
                'osm_poi_point_z14-19_amenity_parking_style',
                'osm_poi_point_z14-19_amenity_hospital_style',
                'osm_poi_point_z14-19_amenity_parking_space_style',
                'osm_poi_point_z14-19_amenity_parking_entrance_style',
                'osm_poi_point_z14-19_amenity_pharmacy_style',
                'osm_poi_point_z14-19_amenity_fuel_style'
            ]
        }
    ]
};
