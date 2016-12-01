"use strict";

app.controller("ItemNewCtrl", function($scope, ItemStorage) {
	$scope.newTask = {};

    $scope.addNewItem = function() {
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;
        console.log("add a new item", $scope.newTask);
        ItemStorage.postNewItem($scope.newTask)
        $scope.newTask = {};
    };
});