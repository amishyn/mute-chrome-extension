'use strict';

class View {

  render() {
    $('body').append('<div id="muteControlCenter"><div id="reactControl"></div></div>')
    $('#muteControlCenter').css({'position': 'absolute', top: 0, right: 0, 'z-index': 1000, margin: 20})

    ReactDOM.render(React.createElement(HelloMessage, { name: "John React" }), document.getElementById('reactControl'));
  }
}
