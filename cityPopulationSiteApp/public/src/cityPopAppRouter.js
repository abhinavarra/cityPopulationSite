angular
    .module('cityPopulationApp')
    .config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/CitiesPopulationSummary");
  
  $stateProvider
    .state('home', {
      url: "/CitiesPopulationSummary",
      controller:'cityPopCtrl',
      controllerAs:'vm',
      templateUrl: "view/PopulationSummaryView.html"
    })
    .state('test', {
      url: "/PopulationOfCity/{cityName}/{location}/{population}/{stateName}/{zipcode}",
      controller:'PopBasedOnCityCtrl',
      controllerAs:'vm',
      templateUrl: "view/PopBasedOnCityView.html"
    });

});
