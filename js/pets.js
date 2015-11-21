'use strict';
angular.module('PetApp', [])
.controller('PetCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('https://data.kingcounty.gov/resource/murn-chih.json?record_type=FOUND').then(function(response){
    		console.log(response.data);
    		$scope.pets = response.data;
	});
}]); 