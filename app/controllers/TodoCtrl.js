"use strict";

app.controller('TodoCtrl', function($scope, $location) {
    $scope.welcome = "Whatup!";
    $scope.showListView = true;
    $scope.newTask = {};

    $scope.newItem = function() {
        console.log("you clicked on the new item");
        $location.url("/items/new");
    };

    $scope.allItem = function() {
        console.log("you clicked on all the items");
        $location.url("/items/list");
    };

    $scope.addNewItem = function() {
        console.log("add a new item", $scope.newTask);
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;
        $scope.items.push($scope.newTask);
        $scope.newTask = {};
    };

});

