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
        $scope.items = [];
        $scope.key = "q";


        this.search = function () {
            console.log('buscando');
            searchService.search()
                .then(function(result){
                    console.log(result);
                })
                .catch(function(err){
                    Notification.error(err);
                });
        };


    }]);