var app = angular.module("pokerfoci", ['ngCookies', 'ngRoute']);

app.config(function($routeProvider){

	$routeProvider.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'loginController'
	}).when('/signup', {
		templateUrl: 'templates/signup.html',
		controller: 'signupController'
	}).otherwise({
		redirectTo: '/login'		
	});
	
})
.run(function(){

	
});