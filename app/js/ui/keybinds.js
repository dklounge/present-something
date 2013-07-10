ps.ui.Keybinds = function () {
  var self = {};

  function nextCapture(e) {
    if (e.which === 39 || e.wich == 13) {
      document.getElementById('next').click();
    }
  }

  function previousCapture(e) {
    if (e.which === 37) {
      document.getElementById('previous').click();
    }
  }

  self.bindAll = function () {
    document.onkeyup = function (e) {
      nextCapture(e);
      previousCapture(e);
    }
  };

  return self;
};
