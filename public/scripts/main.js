angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'GeekService']);

$(document).ready(function(){
    $('.mobile-trigger').click(function () {
    	$('.off-canv, .canv').toggleClass('is-open');
	});
});