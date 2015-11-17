
// actions

// function mutePinned() {
//   $('.volumeControlFocus:not(.muted)').click()
// }
//
// function unmutePinned() {
//   $('.volumeControlFocus.muted').click()
// }

function mute() {
  $('.selfView .selfSessionMenuView .micButton.micButtonOn').click()
}

function unmute() {
  $('.selfView .selfSessionMenuView .micButton.micButtonOff').click()
}

function showRabbitControls() {
  $('.controlFocus').removeClass('hideAddFriend hideAddFriendPending hideKickout hideMuteVideo hideVolume hideMessage')
  $('.userSessionBubble').addClass('showMenu').addClass('showUserName')
}

function isMuted() {
  return $('.volumeControlFocus').hasClass('muted') || $('.selfView .micButton').hasClass('micButtonOff')
}

function isAllMuted() {
  return $('.sessionsRight .menuItem.volume:not(.muted)').length == 0
}

function muteAllSessinons() {
  console.log('mute them')

  $('.sessionsRight .menuItem.volume .volumeIcon').click()
}

function unMuteAllSessinons() {
  console.log('unmute them')
  $('.sessionsRight .menuItem.volume.muted .volumeIcon').click()
}


class HelloMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMuted:    isMuted(),
      isAllMuted: isAllMuted()
    }
  }

  toggleMute() {
    if (this.state.isMuted) {
      unmute()
      this.setState({isMuted: false})
    } else {
      mute()
      this.setState({isMuted: true})
    }
  }

  toggleMuteAll() {
    if (this.state.isAllMuted) {
      unMuteAllSessinons()
      this.setState({isAllMuted: false})
    } else {
      muteAllSessinons()
      this.setState({isAllMuted: true})
    }
  }

  muteStyle(isMuted) {
    return {
      backgroundColor: isMuted ? 'red' : 'green'
    }
  }

  showControls() {
    showRabbitControls()
  }

  render() {
    showRabbitControls()
    let {isMuted,isAllMuted} = this.state
    return (
      <div>
        <button style={this.muteStyle(this.state.isMuted)} onClick={this.toggleMute.bind(this)}>{ isMuted ? 'Unmute Me' : 'Mute Me' }</button>
        <button style={this.muteStyle(this.state.isAllMuted)} onClick={this.toggleMuteAll.bind(this)}>{ isAllMuted ? 'Unmute Them' : 'Mute Them' }</button>
          <button onClick={this.showControls.bind(this)}>Show controls</button>
      </div>
    )
  }
}
