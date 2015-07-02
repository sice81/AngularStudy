'use strict';

/**
 * @ngdoc overview
 * @name firstApp
 * @description
 * # firstApp
 *
 * Main module of the application.
 */
angular.module('gradeCalcApp', []);

angular.module('gradeCalcApp').controller('gradeCalcController', function($scope){
	$scope.message = 'Hello world';
	
	$scope.subjectList = [
	{
		name: '알고리즘',
		weight: 3
	},
	{
		name: '데이터베이스',
		weight: 3
	},
	{
		name: '운영체제',
		weight: 3
	},
	{
		name: '영어',
		weight: 1
	}
	];
	
	$scope.gradeList = [
	{
		grade: 'A+',
		score: 4.5
	},
	{
		grade: 'A',
		score: 4.0
	},
	{
		grade: 'B+',
		score: 3.5
	},
	{
		grade: 'B',
		score: 3.0
	},
	{
		grade: 'C+',
		score: 2.5
	},
	{
		grade: 'C',
		score: 2.0
	},
	{
		grade: 'D+',
		score: 1.5
	},
	{
		grade: 'D',
		score: 1.0
	},
	{
		grade: 'F',
		score: 0.0
	}
	];
	
	$scope.myScoreList = [];
	
	$scope.add = function() {
		$scope.myScoreList.push({});
	};
	
	$scope.calc = function() {
		var totalWeight = 0;
		var totalScore = 0;
		
		for (var i=0; i<$scope.myScoreList.length; i++) {
			var obj = $scope.myScoreList[i];
			var w = obj.selectedSubject.weight;
			var s = obj.selectedGrade.score;
			
			totalWeight += w;
			totalScore += w*s;
		}
		
		$scope.result = totalScore/totalWeight;
		
		$scope.isCalc = true;
	};
	
	$scope.deleteSub = function(i) {
		$scope.myScoreList.splice(i, 1);
	}
});