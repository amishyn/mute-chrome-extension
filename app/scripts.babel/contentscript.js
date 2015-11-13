'use strict';

class View {

  isMuted() {
    return $('.volumeControlFocus').hasClass('muted') || $('.selfView .micButton').hasClass('micButtonOff')

  }

  updateMuteIndicator() {
    if (this.isMuted()) {
      $('#muteIndicator').css({'background-color': 'red'})
    } else {
      $('#muteIndicator').css({'background-color': 'green'})
    }
  }

  updateState() {
    this.updateMuteIndicator()
    this.showRabbitControl()
  }

  mute() {
    $('.volumeControlFocus:not(.muted)').click()
    $('.selfView .micButton.micButtonOn').click()

    this.updateState()
  }

  unmute() {
    $('.volumeControlFocus.muted').click()
    $('.selfView .micButton.micButtonOff').click()
    this.updateState()
  }

  showRabbitControl() {
    $('.controlFocus').removeClass('hideAddFriend hideAddFriendPending hideKickout hideMuteVideo hideVolume hideMessage')
  }

  render() {
    $('body').append('<div id="muteControlCenter"><div id="reactControl"></div><div id="muteIndicator">Muted</div> <button id="mute">Mute</button><button id="unmute">UnMute</button> </div>')
    $('#muteControlCenter').css({'position': 'absolute', top: 0, right: 0, 'z-index': 1000, margin: 20})
    $('#mute').click(this.mute.bind(this))
    $('#unmute').click(this.unmute.bind(this))

    this.updateState()

    ReactDOM.render(React.createElement(HelloMessage, { name: "John React" }), document.getElementById('reactControl'));

  }
}
