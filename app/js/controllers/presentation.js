ps.controllers.Presentation = function ($scope, $http, $routeParams) {
  var routeIndex = $routeParams.index ? parseInt($routeParams.index) : 1;

  current = ps.pages[routeIndex - 1];

  $http.get(current).success(function (content) { $scope.content = content; });

  $scope.hasNext = (routeIndex < ps.pages.length);
  $scope.hasPrevious = (routeIndex > 1);
  $scope.next = $scope.hasNext ? (routeIndex + 1) : routeIndex;
  $scope.previous = $scope.hasPrevious ? (routeIndex - 1) : routeIndex;

  (new ps.ui.Keybinds()).bindAll();

  var fader = new ps.ui.Fader();

  var navigation = document.getElementById('navigation');
  var content = document.getElementById('content');

  fader.fadeIn(1000, content);
  fader.fadeOut(5000, navigation);
  navigation.onmouseover = function () {
    fader.fadeIn(500, navigation);
  }
  navigation.onmouseout = function () {
    fader.fadeOut(500, navigation);
  }
};
