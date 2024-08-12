angular.module('myApp').controller('IDORController', function($http) {
  var vm = this;
  vm.getUserData = function(userId) {
    // Vulnerable to IDOR
    $http.get('/api/users/' + userId).then(function(response) {
      vm.userData = response.data;
    });
  };
});
