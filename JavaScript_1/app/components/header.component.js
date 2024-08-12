angular.module('myApp').component('appHeader', {
    templateUrl: 'components/header.component.html',
    controller: function() {
      this.title = 'My AngularJS App';
    }
  });
  