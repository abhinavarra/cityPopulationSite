(function(){
    'use strict';
    
    angular
    .module('cityPopulationApp')
    .controller('cityPopCtrl',cityPopCtrl);
    
    cityPopCtrl.$inject = ['cityPopResource', '$state', '$http'];
    function cityPopCtrl(cityPopResource, $state, $http){
        var vm = this;
        vm.myName = 'abhi';
      
        vm.singleFilter = singleFilter;
         
  vm.gridOptions = {
        enableFiltering: false,
        paginationPageSizes: [25,50,75],
        columnDefs: [
        { field: 'city',
        
         cellTemplate:'<div>' +
                   '<a ui-sref="test({cityName: row.entity.city, location: row.entity.loc, population: row.entity.pop, stateName: row.entity.state, zipcode: row.entity._id})">{{row.entity.city}}</a>' +
                   '</div>'
        },
        { field: 'loc' },
        { field: 'pop' },
        { field: 'state' },
        { field: '_id' }
        ],
        onRegisterApi: function (gridApi) {    
        vm.gridApi = gridApi;
        
        }
        };  
        
        $http.get('http://localhost:61857/api/cities')
          .success(function(data) {
            data.forEach( function(row) {
              row.registered = Date.parse(row.registered);
            });
            if(data !== null){
              vm.gridOptions.data = data;  
            }else{
                vm.gridOptions.data = cityPopResource.getAllCities();
            }
        });
   
   function singleFilter( renderableRows ){
      
    vm.gridApi.grid.registerRowsProcessor( vm.singleFilter, 200 );
    var matcher = new RegExp(vm.filterValue);
    renderableRows.forEach( function( row ) {
     var match = false;
          [ 'cityName', 'location', 'population', 'stateName', 'zipcode'].forEach(function( field ){
            if ( row.entity[field].match(matcher) ){
              match = true;
            }
          });
          if ( !match ){
            row.visible = false;
          }
        });
        return renderableRows;
      };

    }
       
   
})();