var app = angular.module("pokerfoci", ['ngCookies', 'ngRoute']);

app.config(function($routeProvider){

	$routeProvider.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'loginController'
	}).when('/signup', {
		templateUrl: 'templates/signup.html',
		controller: 'signupController'
	}).when('/forgot_password', {
		templateUrl: 'templates/forgot_password.html',
		controller: 'forgotPasswordController'
	}).otherwise({
		redirectTo: '/login'		
	});
	
})
.run(function(){

	
});