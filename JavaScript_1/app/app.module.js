angular.module('myApp', ['ngRoute', 'ngSanitize'])
  .controller('XSSController', XSSController)
  .controller('IDORController', IDORController)
  .factory('UnsafeDeserializationService', UnsafeDeserializationService);
