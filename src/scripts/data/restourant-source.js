import API_ENDPOINT from '../global/resto-endpoint'

class TheRestoSource {
  static async listResto () {
    const response = await fetch(API_ENDPOINT.LIST)
    const responseJson = await response.json()
    return responseJson
  }
}

export default TheRestoSource
