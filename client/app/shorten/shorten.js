angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(link) {
    Links.addLink(link).then(function(data) {
      console.log(data);
      // $scope.data.links = data;
    })
  };
});
