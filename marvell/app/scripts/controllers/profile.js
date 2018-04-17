/**
 * Created by gabriel on 16/04/18.
 */
'use strict';

angular.module('marvellApp')
  .controller('ProfileCtrl', function ($scope, $rootScope) {

    $rootScope.$watch(function () {
      return $rootScope.getProfile;
    }, function (value) {
      if(value === undefined){
        window.location = "/";
      }
      $scope.profile = value;
      $scope.user_title = "Hi, my name is";
      $scope.user_value = $scope.profile.name.first +" "+ $scope.profile.name.last;
      console.log(value);
    });

    $scope.pageHome = function(){
      window.location = "#/";
    };

    $scope.glyphiconUser = function(profile){
      $scope.user_title = "Hi, my name is";
      $scope.user_value = profile.name.first +" "+ profile.name.last;
    };

    $scope.glyphiconEnvelope = function(profile){
      $scope.user_title = "My email address";
      $scope.user_value = profile.email;
    };

    $scope.glyphiconCalendar = function(profile){
      $scope.user_title = "My birthday is";
      $scope.user_value = profile.dob;
    };

    $scope.glyphiconMapMarker = function(profile){
      $scope.user_title = "My address is";
      $scope.user_value = profile.location.street;
    };

    $scope.glyphiconEarPhone = function(profile){
      $scope.user_title = "My name phone number is";
      $scope.user_value = profile.phone;
    };

    $scope.glyphiconKeys = function(profile){
      $scope.user_title = "My password is";
      $scope.user_value = profile.login.password;
    }


  });
