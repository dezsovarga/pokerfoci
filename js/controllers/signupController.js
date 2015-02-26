app.controller('signupController', ['$scope', '$routeParams', '$location', '$cookieStore', 'validator',
	function ($scope, locationParams, angularLocation, $cookieStore, validator) {

		
		$scope.signupFormModel = {
			"username": "",
			"email": "",
			"password": "",
			"usernameMax": 20
		}
		isValidSignup = function(username, email, password, confirmPassword){
			$scope.showEmptyUsernameError=false;
			$scope.showTooLongUsernameError=false;
			$scope.showInvalidEmailError=false;
			$scope.showTooShortPasswordError=false;
			$scope.showPasswordsNotMatchError=false;

			if (validator.isEmpty(username)){
				$scope.showEmptyUsernameError=true;
				return false;
			}
			
			if (!validator.isBetween(username, 0,20) ){
				$scope.showTooLongUsernameError=true;
				return false;
			}
			    	 	
    	 	if (!validator.isValidEmail(email) ){
				$scope.showInvalidEmailError=true;
				return false;
			}
			
			if (validator.isBetween(password,-1,4) ){
				$scope.showTooShortPasswordError=true;
				return false;
			}

			if (!validator.areEquals(password,confirmPassword) ){
				$scope.showPasswordsNotMatchError=true;
				return false;
			}

			return true;
		}

		$scope.signUp = function(){
			
			var username = $scope.signupFormModel.username;
			var email = $scope.signupFormModel.email;
			var password = $scope.signupFormModel.password;
			var confirmPassword = $scope.signupFormModel.confirm_password;

			if (isValidSignup(username, email, password, confirmPassword)){
				console.log("ready to send data to server");
			}
			else{
				console.log("invalid signup");
			}

		}
	}
]);