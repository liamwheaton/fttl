angular.module('app.controllers')

.controller('mainCtrl', function($scope) {

	$scope.siteTitle = 'Fly to the Limit';
	$scope.map = { 
		center: { 
			latitude: -45.0228425, 
			longitude: 168.6603457 
		}, 
		zoom: 14 
	};

	$scope.markers = [{
			id: 1,
			latitude: -45.0228425, 
			longitude: 168.6603457
		},
		{
			id: 2,
			latitude: -44.7228807,
			longitude: 169.2435987

	}];

	$scope.queenstown = function() {
		$scope.map = { 
			center: { 
				latitude: -45.0228425, 
				longitude: 168.6603457 
			}, 
			zoom: 14 
		};
	}

	$scope.wanaka = function() {
		$scope.map = { 
			center: { 
				latitude: -44.7228807,
				longitude: 169.2435987 
			}, 
			zoom: 14 
		};
	}

	var $animation_elements = $('.animation-element');
	var $window = $(window);

	function check_if_in_view() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height + 150);

		$.each($animation_elements, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);


			if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
				$element.addClass('in-view');
			} else {
				$element.removeClass('in-view');
			}
		});
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

});