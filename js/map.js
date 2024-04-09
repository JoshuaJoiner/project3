        // Initialize and add the map
        function initMap() {
            // The location to center the map (e.g., a specific city or coordinates)
            var centerLocation = { lat: 40.7128, lng: -74.0060 }; // Example: New York City

            // The map, centered at the specified location
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12, // Adjust the zoom level as desired
                center: centerLocation
            });

            // Optionally, you can add markers or other map features here
            var marker = new google.maps.Marker({
                position: centerLocation,
                map: map,
                title: 'My Location'
            });
        }
