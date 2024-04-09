function initMap() {
    // Coordinates for Chicago
    var chicago = { lat: 41.8781, lng: -87.6298 };

    // Create a new map centered on Chicago
    var map = new google.maps.Map(document.getElementById('map'), {
        center: chicago,
        zoom: 10  // You can adjust the zoom level as desired
    });

    // Add a marker to the map at Chicago
    var marker = new google.maps.Marker({
        position: chicago,
        map: map,
        title: 'Chicago, IL'  // Optional: Set a tooltip for the marker
    });
}
