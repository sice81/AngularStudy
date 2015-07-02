'use strict';

/**
 * @ngdoc overview
 * @name firstApp
 * @description
 * # firstApp
 *
 * Main module of the application.
 */
angular.module('todoApp', []);

angular.module('todoApp').controller('todoController', function($scope){
	$scope.message = 'Hello world';
	
	$scope.todoList = [
		{
			done: false,
			title: 'title1'
		},
		{
			done: false,
			title: 'title2'
		}
	];
	
	$scope.add = function(newtodo){
		$scope.todoList.push({
			done: false,
			title: newtodo
		});
		$scope.newtodo = '';
	};
	
	$scope.remain = function(){
		var cnt = 0;
		for (var i in $scope.todoList) {
			var todo = $scope.todoList[i];
			if (!todo.done) {
				cnt++;
			}
		}
		return cnt;
	};
	
	$scope.delete = function(){
		for (var i = $scope.todoList.length-1; i>=0; i--) {
			var todo = $scope.todoList[i];
			if (todo.done) {
				$scope.todoList.splice(i, 1);
			}
		}
	};
});