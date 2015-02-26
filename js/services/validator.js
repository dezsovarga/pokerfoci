app.service('validator', ['$cookieStore', '$location', function($cookieStore, angularLocation){

	var service = {

		isEmpty: function(str){

			if (str.length === 0){
				return true;
			}

			return false;		
		
		},

		isBetween: function(str, min, max){
			if (str.length < min || str.length > max){
				
				return false;
			}
			return true;
		},

		isValidEmail: function(email){

			if (email.indexOf('@') === -1 || email.indexOf('.') === -1){
				return false;
			}

			return true;
		},

		areEquals: function(str1, str2){

			if (str1 === str2){
				return true;
			}

			return false;
		}

		/*validateSignUp: function(username, email, password, confirmPassword){

			if (validator.isEmpty(username)){
				$scope.showEmptyUsernameError=true;
			}
			else{
				$scope.showEmptyUsernameError=false;
			}

			if (!validator.isBetween($scope.signupFormModel.username, 0,20) ){
				$scope.showTooLongUsernameError=true;
			}
			else{
				$scope.showTooLongUsernameError=false;
			}
    	 	
    	 	if (!validator.isValidEmail(email) ){
				$scope.showInvalidEmailError=true;
			}
			else{
				$scope.showInvalidEmailError=false;
			}
		}*/

	}

	return service;

}]);