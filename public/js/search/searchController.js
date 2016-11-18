"use strict";

var controllers = angular.module('controllers');

controllers.controller("searchController", ["$scope",
    "searchService",
    "$rootScope",
    "Notification",
    function ($scope,
              searchService,
              $rootScope,
              Notification) {

        var _this = this;

        $scope.key = "q";

        $scope.results = null;

        this.search = function () {
<<<<<<< HEAD
            console.log('buscando');
            searchService.account()
                .then(function(result){
                    console.log(result);
=======

            searchService.search()
                .then(function (results) {
                    $scope.results = results.data;
>>>>>>> e6e4b8f7c87a229f9cd442fdb49fa06b5b1c72a8
                })
                .catch(function (err) {
                    Notification.error(err);
                });
        };


    }]);
