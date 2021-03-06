angular.module('app.routes')

.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider

			.when('/', {
				controller: 'mainCtrl',
				templateUrl: 'views/hangar.html'
			})

			.when('/crew', {
				controller: 'mainCtrl',
				templateUrl: 'views/crew.html'
			})

			.when('/flights', {
				controller: 'mainCtrl',
				templateUrl: 'views/flights.html'
			})

			.when('/scenicf', {
				controller: 'mainCtrl',
				templateUrl: 'views/scenicf.html'
			})			

			.when('/stuntf', {
				controller: 'mainCtrl',
				templateUrl: 'views/stuntf.html'
			})

			.when('/photogf', {
				controller: 'mainCtrl',
				templateUrl: 'views/photogf.html'
			})			

			.when('/charterf', {
				controller: 'mainCtrl',
				templateUrl: 'views/charterf.html'
			})

			.when('/aircraft', {
				controller: 'mainCtrl',
				templateUrl: 'views/aircraft.html'
			})

			.when('/safety', {
				controller: 'mainCtrl',
				templateUrl: 'views/safety.html'
			})

			.when('/contact', {
				controller: 'mainCtrl',
				templateUrl: 'views/contact.html'
			})

			.otherwise({
				redirectTo: '/'
			});
	}

]).run(['$rootScope', '$location', function($rootScope, $location) {
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal) { 
		$rootScope.activetab = newVal;
	});
}]);
