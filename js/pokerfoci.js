var app = angular.module("pokerfoci", ['ngCookies', 'ngRoute']);

app.config(function($routeProvider){

	$routeProvider.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'loginController'
	}).otherwise({
		redirectTo: '/login'		
	});
	
})
.run(function(){

	
});