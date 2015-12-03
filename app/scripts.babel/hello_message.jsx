
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
  $('.userSessionView').addClass('showMenu').addClass('showUserName')
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

function persistConfigInBrowser() {
  var pinned = []
  $('.gridView > .userSessionView .content').map((index,element) => {
    let e = $(element)

    let r = {
      name: e.find('.userName').text()
    }
    pinned.push(r)
  })
  $.cookie('pinned', JSON.stringify(pinned))
  console.log('saved ', JSON.stringify(pinned))
}

function loadPinned(){
  let pinnedRaw = $.cookie('pinned')
  console.log('pinned loaded', pinnedRaw)

  let pinnedNames = JSON.parse(pinnedRaw).map((e) => { return e.name})
  console.log('pinnedNames', pinnedNames)

  $('.trayView .userName').each((index, element) => {
    let e = $(element)
    if (pinnedNames.includes(e.text())) {
      $(element).parent().find('.forceFocusArea .sessionMenu .pinnButton').click()
    }
  })
}

class HelloMessage extends React.Component {
  constructor(props) {
    super(props)
    muteAllSessinons()

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

  saveConfig() {
    persistConfigInBrowser()
  }

  loadConfig() {
    loadPinned()
  }

  render() {
    muteAllSessinons()
    showRabbitControls()
    loadPinned()

    let {isMuted,isAllMuted} = this.state
    return (
      <div>
        <p>
          <button className="btn btn-primary  btn-block" style={this.muteStyle(this.state.isMuted)} onClick={this.toggleMute.bind(this)}>{ isMuted ? 'Unmute Me' : 'Mute Me' }</button>
          <button className="btn btn-primary  btn-block" style={this.muteStyle(this.state.isAllMuted)} onClick={this.toggleMuteAll.bind(this)}>{ isAllMuted ? 'Unmute Them' : 'Mute Them' }</button>
        </p>
        <p>
          <button className="btn btn-secondary" onClick={this.showControls.bind(this)}>Show controls</button>
        </p>

        <p>
          <button className="btn btn-secondary" onClick={this.saveConfig.bind(this)}>Save Pinned</button>
        </p>

        <p>
          <button className="btn btn-secondary" onClick={this.loadConfig.bind(this)}>Load Pinned</button>
        </p>

      </div>
    )
  }
}
