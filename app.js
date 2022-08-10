var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'index.html',
        controller: 'IndexController'
    })
    .when('/faq', {
        templateUrl: 'faq.html',
        controller: 'FAQController'
    })

    .otherwise({redirectTo: '/'});
});