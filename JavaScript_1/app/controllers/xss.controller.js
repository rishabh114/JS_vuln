angular.module('myApp').controller('XSSController', function($sce) {
    var vm = this;
    vm.userInput = "<img src=x onerror=alert('XSS')>";
    vm.trustedInput = $sce.trustAsHtml(vm.userInput); // Vulnerable to XSS
  });
  