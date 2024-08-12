angular.module('myApp').component('appFooter', {
    templateUrl: 'components/footer.component.html',
    controller: function() {
      this.year = new Date().getFullYear();
    }
  });
  