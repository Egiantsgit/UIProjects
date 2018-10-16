app.controller('addUserController' ,  function ($scope, $modalInstance, message){
    if(message.userinfoData==null)
        $scope.label='Add User'
    else{
        $scope.label='Edit User'
        $scope.disableCd=true;
    }
    
	
    $scope.user = message.userinfoData;

    $scope.saveUser = function(data) {
    	var regex = new RegExp("^[a-zA-Z0-9_]*$");
    	if(!regex.test(data.firstName)) {
    		window.alert("Enter Name without spaces or special characters");
    	}else{
    		var uuu = "saveuser";
    		var postData={data: data};
    		$.ajax({
    			type : 'POST',
    			url : uuu,
    			dataType: 'json',
    			contentType: 'application/json',
    			data: JSON.stringify(postData),
    			success : function(data){
    				$scope.$apply(function(){
    					$scope.users=data.users;});
    			},
    			error : function(data){
    				window.alert("Error while saving.");
    			}
    		});
    	}
    };

    $scope.close = function() {
        $modalInstance.close();
    };
});