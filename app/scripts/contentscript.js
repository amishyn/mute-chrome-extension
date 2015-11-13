'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var View = (function () {
  function View() {
    _classCallCheck(this, View);
  }

  _createClass(View, [{
    key: 'isMuted',
    value: function isMuted() {
      return $('.volumeControlFocus').hasClass('muted') || $('.selfView .micButton').hasClass('micButtonOff');
    }
  }, {
    key: 'updateMuteIndicator',
    value: function updateMuteIndicator() {
      if (this.isMuted()) {
        $('#muteIndicator').css({ 'background-color': 'red' });
      } else {
        $('#muteIndicator').css({ 'background-color': 'green' });
      }
    }
  }, {
    key: 'updateState',
    value: function updateState() {
      this.updateMuteIndicator();
      this.showRabbitControl();
    }
  }, {
    key: 'mute',
    value: function mute() {
      $('.volumeControlFocus:not(.muted)').click();
      $('.selfView .micButton.micButtonOn').click();

      this.updateState();
    }
  }, {
    key: 'unmute',
    value: function unmute() {
      $('.volumeControlFocus.muted').click();
      $('.selfView .micButton.micButtonOff').click();
      this.updateState();
    }
  }, {
    key: 'showRabbitControl',
    value: function showRabbitControl() {
      $('.controlFocus').removeClass('hideAddFriend hideAddFriendPending hideKickout hideMuteVideo hideVolume hideMessage');
    }
  }, {
    key: 'render',
    value: function render() {
      $('body').append('<div id="muteControlCenter"><div id="muteIndicator">Muted</div> <button id="mute">Mute</button><button id="unmute">UnMute</button> </div>');
      $('#muteControlCenter').css({ 'position': 'absolute', top: 0, right: 0, 'z-index': 1000, margin: 20 });
      $('#mute').click(this.mute.bind(this));
      $('#unmute').click(this.unmute.bind(this));

      this.updateState();
    }
  }]);

  return View;
})();
//# sourceMappingURL=contentscript.js.map
