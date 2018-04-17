'use strict';

angular.module('marvellApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope) {

    $scope.profiles = [];
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    $scope.listProfiles = function(){
      $http({
        method : "GET",
        url : "https://randomuser.me/api/?results=100"
      }).then(function mySuccess(response) {
        $scope.profiles = response.data.results;
      }, function myError(response) {
        $scope.myWelcome = response.statusText;
      });
    };

    $scope.getProfile = function(profile){
      $rootScope.getProfile = profile;
      window.location = "#/profile/"+profile.id.value;
    };

    $scope.listProfiles();


  });
