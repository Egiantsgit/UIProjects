
app.controller('registerController', function($scope, $modal) {

	$scope.userinfoDatas = [{'firstName':'Ravi','lastName':'test', 'contactNo':'12345'}];
	
	$scope.registerGrid = {
			data : 'userinfoDatas',
			enableFiltering: true,
			enableGridMenu: true,
			columnDefs: [{
				field: 'id', enableFiltering: false, headerCellTemplate: '' +
				'<button id=\'New\' ng-click="grid.appScope.createNewUser()" class="btn btn-success">' + 'Create</button>',
				cellTemplate:
					'<button  type="button"  class="btn btn-primary"  ng-click="grid.appScope.editUser(row.entity)"><i class="fa fa-pencil-square-o"></i></button> ' +
					'<button  type="button"  class="btn btn-danger"  ng-click="grid.appScope.deleteUser(row.entity)" ><i class="fa fa-trash-o"></i></button> ',  width: '8%'
			},
			{ field: 'firstName', displayName : 'First Name'},
			{ field: 'lastName'},
			{field: 'contactNo', displayName : 'Contact No'}
			],
			onRegisterApi: function(gridApi){
				$scope.gridApi = gridApi;
			}
	};

	$scope.editUserValue = null;
	$scope.createNewUser = function(){
		$scope.editUserValue = null;
		var modalInstance = $modal.open({
			backdrop: 'static', keyboard: false,
			templateUrl : 'add_user_popup.html',
			controller: 'addUserController',
			resolve: {
				message: function () {
					var message = {
							userinfoData: $scope.editUserValue
					};
					return message;
				}
			}
		});
		modalInstance.result.then(function(response){
			console.log('response', response);
			$scope.userinfoDatas=response.userinfoDatas;
		});
	};

	$scope.editUser = function(editUser) {
		$scope.editUserValue = editUser;
		var modalInstance = $modal.open({
			backdrop: 'static', keyboard: false,
			templateUrl : 'add_user_popup.html',
			controller: 'addUserController',
			resolve: {
				message: function () {
					var message = {
							userinfoData: $scope.editUserValue
					};
					return message;
				}
			}
		});
		modalInstance.result.then(function(response){
			console.log('response', response);
			$scope.userinfoDatas = response.userinfoDatas;
		});
	};

	$scope.deleteUser = function(data) {
		window.alert("You are about to delete the User  "+data.firstName+". Do you want to continue?");
	};

});