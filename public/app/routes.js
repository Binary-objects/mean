/*All app routes */

//The ngRoute module provides routing and deeplinking services and directives for AngularJS apps 
//loading the module as a dependent module

angular.module('appRoutes', ['ngRoute']).config(function($routeProvider, $locationProvider ){

	$routeProvider.when('/', { templateUrl : 'app/views/pages/home.html'}) //now will inject this view to 
																			// index.html or were ever need to be required 
				  .when('/about', {templateUrl : 'app/views/pages/about.html'})

				  .otherwise({redirectTo : '/'});  // incase wrong url entered

				  $locationProvider.html5Mode({   // injecting locationProvider for urls or removing # from urls 
  					enabled: true,
  					requireBase: false
				});
	
});
