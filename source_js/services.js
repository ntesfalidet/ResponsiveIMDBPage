// Write any factories or services here
// https://github.com/krishnadusad/angular_starter/tree/master/source_js

var AppServices = angular.module('AppServices', []);

AppServices.factory('Data', function($http) {
	return {
	        getData : function () {

	            return $http.get('./data/imdb250.json');
					
	        }
	  
	    }
});

