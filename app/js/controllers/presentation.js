ps.controllers.Presentation = function ($scope, $http, $routeParams) {
   var fader
     , routeIndex
     , keybinds
     , current;

  fader = new ps.ui.Fader();
  keybinds = new ps.ui.Keybinds();
  routeIndex = $routeParams.index ? parseInt($routeParams.index) : 1;
  current = ps.pages[routeIndex - 1];

  $http.get(current).success(function (content) { $scope.content = content; });

  $scope.hasNext = (routeIndex < ps.pages.length);
  $scope.hasPrevious = (routeIndex > 1);
  $scope.next = $scope.hasNext ? (routeIndex + 1) : routeIndex;
  $scope.previous = $scope.hasPrevious ? (routeIndex - 1) : routeIndex;

  keybinds.bindAll();
  fader.fadeIn(1000, document.getElementById('content'));
};
