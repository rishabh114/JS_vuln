angular.module('myApp').factory('UnsafeDeserializationService', function() {
  return {
    deserialize: function(data) {
      // Vulnerable to unsafe deserialization
      return JSON.parse(data);
    }
  };
});
