// Initialize the Google Map
let map;
function initMap() {
    // Set the default location to Hanoi City, Vietnam
    const defaultLocation = { lat: 21.0278, lng: 105.8342 };

    // Create a new map
    map = new google.maps.Map(document.getElementById('map'), {
        center: defaultLocation,
        zoom: 12, // Adjust the zoom level as needed
    });

    // Add campus markers to the map
    addCampusMarkers();
}

// Function to add campus markers to the map
function addCampusMarkers() {
    // Define campus locations with links
    const campuses = [
        {
            name: 'Trung tâm bảo hành tại TP. Hồ Chí Minh',
            location: { lat: 10.8231, lng: 106.6297 }, // Coordinates for Ho Chi Minh City
            address: 'Trung tâm bảo hành tại TP. Hồ Chí Minh, TP. Hồ Chí Minh',
            link: 'https://maps.app.goo.gl/CKkHD8ev8BUjj7Uw5', // Google Maps link for Ho Chi Minh City
        },
        {
            name: 'Trung tâm bảo hành tại Hà Nội',
            location: { lat: 21.0285, lng: 105.8544 }, // Coordinates for Hanoi
            address: 'Trung tâm bảo hành tại Hà Nội, Hà Nội',
            link: 'https://maps.app.goo.gl/CKkHD8ev8BUjj7Uw5', 
            // Add Google Maps link for Hanoi if you have one
        },
        {
            name: 'Trung tâm bảo hành tại Đà Nẵng',
            location: { lat: 16.0544, lng: 108.2022 }, // Coordinates for Da Nang
            address: 'Trung tâm bảo hành tại Đà Nẵng, Đà Nẵng',
            link: 'https://maps.app.goo.gl/CKkHD8ev8BUjj7Uw5', 
            // Add Google Maps link for Da Nang if you have one
        },
    ];

    // Clear previous markers if there are any
    if (map.markers) {
        map.markers.forEach(marker => marker.setMap(null));
    }
    map.markers = [];

    // Loop through campus locations and add markers
    campuses.forEach((campus) => {
        // Create a marker for each campus
        const marker = new google.maps.Marker({
            position: campus.location,
            map: map,
            title: campus.name,
        });

        // Add marker to the markers array
        map.markers.push(marker);

        // Create an info window for each marker
        const infoWindow = new google.maps.InfoWindow({
            content: `<strong>${campus.name}</strong><br>
                      ${campus.address}<br>
                      <a href="${campus.link}" target="_blank">Xem trên bản đồ</a>`,
        });

        // Add a click event to open the info window when the marker is clicked
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });

        // Add the campus information to the list
        $('#centers-list').append(`
            <li>
                <strong>${campus.name}</strong><br>
                ${campus.address}<br>
                <a href="${campus.link}" target="_blank">Xem trên bản đồ</a>
            </li>
        `);
    });

    // Adjust the map to fit all markers
    const bounds = new google.maps.LatLngBounds();
    map.markers.forEach((marker) => bounds.extend(marker.getPosition()));
    map.fitBounds(bounds);
}

// Initialize the map when the page loads
$(document).ready(() => {
    initMap();
});
