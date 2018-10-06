/**
* Macron Configuration File
*/
const { Window } = require('macron')

const App = new Window({
  title: 'Pie Calculator',
  width: 400,
  height: 565,
  resizable: false,
  // minHeight: 700,
  // minWidth: 300,
  startupFromCenter: true,
  // menu: require('./src/menubar'),
  // devServerURI: 'http://localhost:3000/', // no effect on build
})

module.exports = {
  appName: 'Pie',
  mainWindow: App,
  build: {
    debugMode: false
  }
}
