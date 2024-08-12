angular.module('myApp').factory('UnsafeDeserializationService', function() {
    return {
      deserialize: function(data) {
        return JSON.parse(data); // Vulnerable to unsafe deserialization
      }
    };
  });
  