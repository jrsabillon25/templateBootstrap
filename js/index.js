function initMap() {
    // The location of Orbis S.A.
    var orbis = {lat: 14.102278, lng: -87.190865};
    // The map, centered at Orbis
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: orbis});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: orbis, map: map});
}