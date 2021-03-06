angular.module('ps', [], function ($routeProvider) {
  var pageRouteOptions = {
    templateUrl: '/partials/page.html',
    controller: ps.controllers.Page
  };

  $routeProvider
    .when('/page/:index', pageRouteOptions)
    .otherwise({ redirectTo: '/page/1' });
});
