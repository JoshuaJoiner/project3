 // Initialize and add the map
        function initMap() {
            // The location to center the map (Chicago)
            var centerLocation = { lat: 41.8781, lng: -87.6298 }; // Chicago coordinates

            // The map, centered at Chicago
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12, // Adjust the zoom level as desired
                center: centerLocation
            });

            // Optionally, you can add markers or other map features here
            var marker = new google.maps.Marker({
                position: centerLocation,
                map: map,
                title: 'Chicago'
            });
        }
