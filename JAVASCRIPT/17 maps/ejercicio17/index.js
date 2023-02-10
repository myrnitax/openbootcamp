function initMap() {
    var center = { lat: -25.344, lng: 131.031};
    var favplaces = [
        ['Cuyagua',  10.501063625398652, -67.69237353136673],
        ['Comino, Malta', 36.01796607833788, 14.337071303713053],
        ['Playa Capellans, Salou', 41.07452287790419, 1.1440405878192441],
    ];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 1,
        center: center
    });
    var infowindow =  new google.maps.InfoWindow({});
    var marker, count;
    for (count = 0; count < favplaces.length; count++) {
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(favplaces[count][1], favplaces[count][2]),
        map: map,
        title: favplaces[count][0]
        });
    google.maps.event.addListener(marker, 'click', (function (marker, count) {
        return function () {
            infowindow.setContent(favplaces[count][0]);
            infowindow.open(map, marker);
        }
        })(marker, count));
    }
}
// Referencia usada para desarrollar el codigo:
// https://medium.com/@limichelle21/integrating-google-maps-api-for-multiple-locations-a4329517977a