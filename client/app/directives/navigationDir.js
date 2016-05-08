angular.module('app.directives')

.directive('navigation', function() {
	return {
		restrict: 'A',
		templateUrl: '../../app/directives/templates/navigationTemp.html'
	};
});