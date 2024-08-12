angular.module('myApp').config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/xss', {
        templateUrl: 'views/xss.html',
        controller: 'XSSController',
        controllerAs: 'xss'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  