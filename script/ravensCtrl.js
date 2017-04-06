angular.module("RavensApp").controller("ravensCtrl", function ($scope, ravensService){
    var promise = ravensService.getPlayers();
    promise.then(function (data){
        $scope.evidence = data.data;
        var evidence = data.data;
        for(var e in evidence){
            //console.log(evidence[e].logo+" x "+evidence[e].logo.clientHeight);
            var icon = {
                   url: evidence[e].logo, // url
                   scaledSize: new google.maps.Size(30, 30), // scaled size
                   origin: new google.maps.Point(0,0), // origin
                   anchor: new google.maps.Point(0, 0) // anchor
            };
            codeAddress(evidence[e].address,icon);
        }
    });
});



