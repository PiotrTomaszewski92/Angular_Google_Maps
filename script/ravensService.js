angular.module("RavensApp",[]).service("ravensService", function ($http, $q){
    var deferred = $q.defer();
    //var geocoder, map;
    $http.get('data/data.json').then(function (data){
        deferred.resolve(data);
    });

    this.getPlayers = function (){
        return deferred.promise;
    }

});


function initMap() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(52.375599, 19.248047); //wycentrowanie na Polske
    var mapOptions = {
        zoom: 6,
        center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function codeAddress(address, icons) {
    //console.log(address+" "+icons);
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status === 'OK') {
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                icon: icons
            });
        } else {
            //alert('Nie znaleziono lokalizacji o podanym adresie. Błąd: ' + status);
        }
    });
}

