let styleJSON = {
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
};