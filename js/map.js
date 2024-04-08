// Map options
var options = {
    center: { lat: 41.8781, lng: -87.6298 }, // Chicago coordinates
    zoom: 12
};

// Create map
var map = new google.maps.Map(document.getElementById('map'), options);

// Add marker for Chicago
var marker = new google.maps.Marker({
    position: { lat: 41.8781, lng: -87.6298 },
    map: map,
    title: 'Chicago'
});

// Info window for Chicago marker
var infoWindow = new google.maps.InfoWindow({
    content: '<h3>Chicago</h3><p>The Windy City</p>'
});

// Open info window when marker is clicked
marker.addListener('click', function() {
    infoWindow.open(map, marker);
});

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
    content: '<h3>Chicago</h3><p>The Windy City. Home of the bulls.</p>'
});

// Add click event to marker
marker1.addListener('click', function() {
    infoWindow.open(map, marker1);
});
