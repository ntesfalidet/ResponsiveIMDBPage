//var app = angular.module('mp3',['ngRoute']);

//app.config(function ($routeProvider) {

//})

var app=angular.module("app",[
    "ngRoute",
    "AppServices"
]);
app.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
        when('/list/', {
            templateUrl: 'partials/list.html',
            controller: 'listController'
        }).
        when('/details/:rank', {
            templateUrl: 'partials/details.html',
            controller: 'detailController'
        }).
        when('/gallery/', {
            templateUrl: 'partials/gallery.html',
            controller: 'galleryController'
        }).
        otherwise({
            redirectTo: '/gallery/'
        });
    }]);
