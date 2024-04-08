// Add markers
var marker1 = new google.maps.Marker({
    position: { lat: 41.8781, lng: -87.6298 },
    map: map,
    title: 'Chicago'
});

var marker2 = new google.maps.Marker({
    position: { lat: 34.0522, lng: -118.2437 },
    map: map,
    title: 'Los Angeles'
});

// Custom map styling
var customStyle = [
    {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
    }
];

map.setOptions({ styles: customStyle });

// Info windows
var infoWindow = new google.maps.InfoWindow({
    content: '<h3>Chicago</h3><p>The most populous city in the United States.</p>'
});

// Add click event to marker
marker1.addListener('click', function() {
    infoWindow.open(map, marker1);
});
