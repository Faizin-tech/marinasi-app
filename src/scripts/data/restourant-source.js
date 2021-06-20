import API_ENDPOINT from '../global/resto-endpoint'
import CONFIG from '../global/config'
class TheRestoSource {
  static async listResto () {
    const response = await fetch(API_ENDPOINT.LIST)
    const responseJson = await response.json()
    return responseJson
  }

  static async detailResto (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    return responseJson
  }

  static async searchResto (key) {
    const response = await fetch(API_ENDPOINT.SEARCH(key))
    const responseJson = await response.json()
    return responseJson
  }

  static async addReview (a, b, c) {
    const urlReview = `${API_ENDPOINT.REVIEW}`
    const data = {
      id: a,
      name: b,
      review: c
    }
    const response = await fetch(urlReview, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY
      },
      body: JSON.stringify(data)
    })
    const responseJson = await response.json()
    return responseJson
  }
}

export default TheRestoSource
