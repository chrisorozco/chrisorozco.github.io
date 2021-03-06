var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "homies server",
        "xhrid server"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1610496946",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "overworld",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "homies server",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "homies server",
            "last_rendertime": 1610410125,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                195,
                96,
                -93
            ],
            "minZoom": 0,
            "spawn": [
                195,
                96,
                -93
            ],
            "north_direction": 0
        },
        {
            "name": "overworld",
            "zoomLevels": 11,
            "defaultZoom": 1,
            "maxZoom": 11,
            "path": "xhrid server",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "xhrid server",
            "last_rendertime": 1608948154,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                19,
                75,
                -14
            ],
            "minZoom": 0,
            "spawn": [
                19,
                75,
                -14
            ],
            "north_direction": 2
        }
    ]
};
