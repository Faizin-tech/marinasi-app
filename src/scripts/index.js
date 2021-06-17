/* eslint-disable no-unused-vars */

import 'regenerator-runtime'/* for async await transpile */
import App from './views/app'
import '../styles/main.scss'
import CONFIG from './global/config'

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#content')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
//   swRegister()
//   WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER)
})
