
	mapboxgl.accessToken = 'pk.eyJ1IjoiYXZvcndlcms0NTYiLCJhIjoiY2xiaWd2bWQwMHp0NzNvcXN1M2I5ZnY5OCJ9.vqhJ_iagCEZHcH0iJaefeA';


    const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [-71.104881, 42.365554], // starting position [lng, lat]
    zoom: 12, // starting zoom
    });
    map.resize();
    
    const stops = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                         -71.09533, 42.3251]
                },
                "properties": {
                    "stop": "1",
                    "name": ""
                }
            },
            {
                "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.082756, 42.330956]
                },
                "properties": {
                    "stop": "2",
                    "name": ""
                }
            },
            {
                "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.081253, 42.332325]
                },
                "properties": {
                    "stop": "3",
                    "name": ""
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.079575, 42.332016]
                },
                "properties": {
                    "stop": "4",
                    "name": ""
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.076233, 42.331593]
                },
                "properties": {
                    "stop": "5",
                    "name": ""
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.073692, 42.333538]
                },
                "properties": {
                    "stop": "6",
                    "name": ""
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.075111, 42.334747]
                },
                "properties": {
                    "stop": "7",
                    "name": ""
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.076813, 42.336472]
                },
                "properties": {
                    "stop": "8",
                    "name": ""
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.08036, 42.339458]
                },
                "properties": {
                    "stop": "9",
                    "name": ""
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.0830504, 42.3416243]
                },
                "properties": {
                    "stop": "10",
                    "name": "Massachusetts Ave @ Massachusetts Ave Station"
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.0866914, 42.3453085]
                },
                "properties": {
                    "stop": "10",
                    "name": "Massachusetts Ave @ Clearway St"
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.0893186, 42.3507631]
                },
                "properties": {
                    "stop": "10",
                    "name": "Massachusetts Ave @ Beacon St"
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.093621, 42.3592683]
                },
                "properties": {
                    "stop": "10",
                    "name": "77 Massachusetts Ave"
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.073692, 42.333538]
                },
                "properties": {
                    "stop": "10",
                    "name": "Massachusetts Ave @ Albany St"
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.0993255,42.362672]
                },
                "properties": {
                    "stop": "10",
                    "name": "Massachusetts Ave @ Sidney St"
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.10387874218092, 42.36551269848112]
                },
                "properties": {
                    "stop": "10",
                    "name": "Massachusetts Ave @ Prospect St"
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.1058120727539, 42.36677932739258]
                },
                "properties": {
                    "stop": "10",
                    "name": "Massachusetts Ave @ Inman St"
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.10862, 42.368389]
                },
                "properties": {
                    "stop": "10",
                    "name": "Massachusetts Ave @ Hancock St"
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.110771, 42.369267]
                },
                "properties": {
                    "stop": "10",
                    "name": "Massachusetts Ave @ Dana St"
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.112999, 42.37027]
                },
                "properties": {
                    "stop": "10",
                    "name": "Massachusetts Ave @ Trowbridge St"
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.1946356, 42.4257215]
                },
                "properties": {
                    "stop": "10",
                    "name": "Massachusetts Ave @ Bow St"
                }
            },
            {
            "type": "Feature",
                  "geometry": {
                    "type": "Point",
                        "coordinates": [
                        -71.1177365, 42.3731409]
                },
                "properties": {
                    "stop": "10",
                    "name": "Massachusetts Ave @ Holyoke St"
                }
            }
        ]
    };
                
    //assign a unique id to each stop
    stops.features.forEach(function (stop, i) {
        stop.properties.id = i;
    });
    
    map.on('load', () => {
        map.addLayer({
            id: 'locations',
            type: 'circle',
            source: {
                type: 'geojson',
                data: stops
            }
        });
    });
    
    var markers = [];
    var icons = [
        "icons8-bus-64.png",
        "icons8-bus-64-4.png",
    ];
    async function run(){
        // get bus data    
        const locations = await getBusLocations();
        console.log(locations)
        locations.forEach((bus, i) => {
            const el = document.createElement('div');
            el.className = 'marker';
            if (bus.attributes.direction_id == 0) {
                el.style.backgroundImage = 'url("icons8-bus-64-4.png")';
            } else {el.style.backgroundImage = 'url("icons8-bus-64.png")';
            }
            el.style.width = '40px';
            el.style.height = '40px';
            el.style.backgroundSize = '100%';
    
            const marker = new mapboxgl.Marker(el)
            .setLngLat([bus.attributes.longitude, bus.attributes.latitude])
            .addTo(map);
    
            markers.push(marker);	
        });
    
        
};

    function eraseMarkers(){
        if (markers.length > 0) {
            for (var i = 0; i < markers.length; i++) {
                markers[i].remove();
            }
            markers = [];
        }
    }
    
    setTimeout(eraseMarkers,9500)
    
    // timer
    setTimeout(run, 10000);
    
    
    // Request bus data from MBTA
    async function getBusLocations(){
        const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
        const response = await fetch(url);
        const json     = await response.json();
        return json.data;
    }
    
    
    map.on('load', function () {
        run();
      });
      
     