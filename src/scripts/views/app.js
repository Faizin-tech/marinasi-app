import DrawerInitiator from '../utils/drawer-initiator'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'
import { offlineCondition } from './templates/template-creator'
class App {
  constructor ({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content

    this._initialAppShell()
  }

  _initialAppShell () {
    DrawerInitiator.Init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }

  async renderPage (online) {
    const url = UrlParser.parseActiveWithCombiner()
    const page = routes[url]
    if (online === true) {
      this._content.innerHTML = await page.render()
    } else {
      this._content.innerHTML = offlineCondition
    }
    await page.afterRender()
  }
}

export default App
