var app = angular.module("RavensApp", []);
var playerrr;
app.service("ravensService", function ($http, $q)
{
    var deferred = $q.defer();
    $http.get('data/data.json').then(function (data)
    {
        deferred.resolve(data);
    });

    this.getPlayers = function ()
    {
        return deferred.promise;
    }
})

    .controller("ravensCtrl", function ($scope, ravensService)
    {
        var promise = ravensService.getPlayers();

        promise.then(function (data)
        {
            $scope.players = data.data;
            playerrr = data.data;
           for(var p in playerrr){
               console.log(playerrr[p].logo+" x "+playerrr[p].logo.clientHeight);
               var icon = {
                   url: playerrr[p].logo, // url
                   scaledSize: new google.maps.Size(30, 30), // scaled size
                   origin: new google.maps.Point(0,0), // origin
                   anchor: new google.maps.Point(0, 0) // anchor
               };

               codeAddress(playerrr[p].adres,icon);
           }




        });
    });



