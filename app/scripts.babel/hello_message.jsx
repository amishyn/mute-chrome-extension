import { createStore } from 'redux'

function controller(state = {}, action) {
  switch (action.type) {
    case 'MUTE':
      return state.isMuted = true
    default:
      return state
  }
}

let store = createStore(controller, {})

// actions
function mute() {
  $('.volumeControlFocus:not(.muted)').click()
  $('.selfView .micButton.micButtonOn').click()
  return { type: 'ADD_TODO' }
}


class HelloMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMuted: false
    }
  }

  toggleMute() {
    store.dispatch(mute)
    this.setState({isMuted: !this.state.isMuted})
  }

  muteStyle() {
    return {
      backgroundColor: this.state.isMuted ? 'green' : 'red'
    }
  }

  render() {
    let {isMuted} = this.state
    return (
      <div>
        <button style={this.muteStyle()} onClick={this.toggleMute.bind(this)}>{ isMuted ? 'Unmute' : 'Mute' }</button>
      </div>
    )
  }
}
