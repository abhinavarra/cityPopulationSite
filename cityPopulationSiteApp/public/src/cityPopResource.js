(function(){
    'use strict';
    
    angular
        .module('cityPopulationApp')
        .factory('cityPopResource',cityPopResource);
    
    cityPopResource.$inject = ['$q','$http','$timeout','constantResourse'];
    
    function cityPopResource($q, $http, $timeout, constantResourse ){
        var vm = this;
        return{
            getAllCities : getAllCities,
            //getAllCitiesPopulation: getAllCitiesPopulation
        };
        
        function getAllCities(){
            return [
                      {
                        "city": "AGAWAM",
                        "loc": [ -72.622739, 42.070206 ],
                        "pop": 15338,
                        "state": "MA",
                        "_id": "01001"
                      },
                      {
                        "city": "CUSHMAN",
                        "loc": [ -72.51564999999999, 42.377017 ],
                        "pop": 36963,
                        "state": "MA",
                        "_id": "01002"
                      },
                      {
                        "city": "BARRE",
                        "loc": [ -72.10835400000001, 42.409698 ],
                        "pop": 4546,
                        "state": "MA",
                        "_id": "01005"
                      },
                      {
                        "city": "BELCHERTOWN",
                        "loc": [ -72.41095300000001, 42.275103 ],
                        "pop": 10579,
                        "state": "MA",
                        "_id": "01007"
                      },
                      {
                        "city": "BLANDFORD",
                        "loc": [ -72.936114, 42.182949 ],
                        "pop": 1240,
                        "state": "MA",
                        "_id": "01008"
                      },
                      {
                        "city": "BRIMFIELD",
                        "loc": [ -72.188455, 42.116543 ],
                        "pop": 3706,
                        "state": "MA",
                        "_id": "01010"
                      },
                      {
                        "city": "CHESTER",
                        "loc": [ -72.988761, 42.279421 ],
                        "pop": 1688,
                        "state": "MA",
                        "_id": "01011"
                      },
                      {
                        "city": "CHESTERFIELD",
                        "loc": [ -72.833309, 42.38167 ],
                        "pop": 177,
                        "state": "MA",
                        "_id": "01012"
                      },
                      {
                        "city": "CHICOPEE",
                        "loc": [ -72.607962, 42.162046 ],
                        "pop": 23396,
                        "state": "MA",
                        "_id": "01013"
                      },
                      {
                        "city": "CHICOPEE",
                        "loc": [ -72.576142, 42.176443 ],
                        "pop": 31495,
                        "state": "MA",
                        "_id": "01020"
                      },
                      {
                        "city": "WESTOVER AFB",
                        "loc": [ -72.558657, 42.196672 ],
                        "pop": 1764,
                        "state": "MA",
                        "_id": "01022"
                      },
                      {
                        "city": "CUMMINGTON",
                        "loc": [ -72.905767, 42.435296 ],
                        "pop": 1484,
                        "state": "MA",
                        "_id": "01026"
                      },
                      {
                        "city": "MOUNT TOM",
                        "loc": [ -72.67992099999999, 42.264319 ],
                        "pop": 16864,
                        "state": "MA",
                        "_id": "01027"
                      },
                    ];
        }
        
        /*function getAllCitiesPopulation(){
            return $http.get('http://localhost:61857/api/cities').success(function(response) {
                                    response.data.forEach( function(row) {
                                    row.registered = Date.parse(row.registered);
                                    });
                                    }).catch(function(response){
                console.error('Error occurred:', response.status, response.data);
            });
        }*/
       
    }
})();