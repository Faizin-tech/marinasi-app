/* eslint-disable no-unused-vars */

import 'regenerator-runtime'/* for async await transpile */
import App from './views/app'
import '../styles/main.scss'
import swRegister from './utils/sw-register'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#content')
})

window.addEventListener('hashchange', () => {
  window.scrollTo(0, 0)
  app.renderPage(true)
})

window.addEventListener('load', () => {
  window.scrollTo(0, 0)
  app.renderPage(true)
  swRegister()
})

window.addEventListener('offline', (e) => {
  window.scrollTo(0, 0)
  app.renderPage(false)
})

window.addEventListener('online', (e) => {
  window.scrollTo(0, 0)
  app.renderPage(true)
})
