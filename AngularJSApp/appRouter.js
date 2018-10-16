
angular.module('App').requires.push('ngRoute','ngAnimate', 'ngTouch','ui.grid','ui.grid.pagination','ui.grid.selection', 'ui.grid.exporter', 'ui.grid.edit', 'ui.grid.autoResize',
		'ui.grid.resizeColumns','ui.bootstrap','ui.bootstrap.modal');
app.config(function($routeProvider) {
	$routeProvider
	.when('/users', {
		templateUrl:'src/app/webapp/Register/register.html',
		controller : "registerController"
	})
	.otherwise({
		templateUrl:'src/app/webapp/home/home.html'
	});
	
});