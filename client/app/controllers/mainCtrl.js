angular.module('app.controllers')

.controller('mainCtrl', function($scope) {
	$scope.siteTitle = 'Fly to the Limit';

	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			items: 1,
			singleItem: true
		});
	});
});