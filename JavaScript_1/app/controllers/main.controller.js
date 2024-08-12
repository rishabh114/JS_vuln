angular.module('myApp').controller('XSSController', function($sce) {
  var vm = this;
  // Vulnerable to XSS
  vm.userInput = "<script>alert('XSS');</script>";
  vm.trustedInput = $sce.trustAsHtml(vm.userInput);
});
