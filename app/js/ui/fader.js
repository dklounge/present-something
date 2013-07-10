ps.ui.Fader = function () {
  var self = {};

  function now() {
    return (new Date()).getTime();
  }

  self.fadeIn = function (duration, element) {
    var intervalId, opacity, startTime, currentTime, remaining;

    startTime = now();

    intervalId = window.setInterval(function () {
      if (remaining <= 0) {
        window.clearInterval(intervalId);
      } else {
        currentTime = now();
        remaining = Math.max(0, startTime + duration - currentTime);
        opacity = 1 - (remaining / duration);
        element.setAttribute('style', 'opacity:' + opacity);
      }
    }, 1);
  };

  self.fadeOut = function (duration, element) {
    var intervalId, opacity, startTime, currentTime, remaining;

    startTime = now();

    intervalId = window.setInterval(function () {
      if (remaining <= 0) {
        window.clearInterval(intervalId);
      } else {
        currentTime = now();
        remaining = Math.max(0, startTime + duration - currentTime);
        opacity = (remaining / duration) || 0;
        element.setAttribute('style', 'opacity:' + opacity);
      }
    }, 1);
  };

  return self;
};
