angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		// nerds page that will use the NerdController
		.when('/nerds', {
			templateUrl: '/views/nerds.html',
			controller: 'NerdController'
		})

		// 
		.when('/geeks', {
			templateUrl: '/views/geeks.html',
			controller: 'GeekController'	
		});

	$locationProvider.html5Mode(true);
}]);