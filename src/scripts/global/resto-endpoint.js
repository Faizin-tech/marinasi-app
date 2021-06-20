import CONFIG from './config'

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  SEARCH: (key) => `${CONFIG.BASE_URL}/search?q=${key}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}/review`
}

export default API_ENDPOINT
