(function(){
    'use strict';
    
    angular
        .module('cityPopulationApp')
        .controller('PopBasedOnCityCtrl',PopBasedOnCityCtrl);
    
    PopBasedOnCityCtrl.$inject = ['cityPopResource','$state'];
    
    function PopBasedOnCityCtrl(cityPopResource, $state){
        var vm = this;
        vm.cityName = $state.params.cityName;
        vm.location = $state.params.location;
        vm.population = $state.params.population;
        vm.stateName = $state.params.stateName;
        vm.zipcode = $state.params.zipcode;
    }
})();