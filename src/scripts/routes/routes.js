/* eslint-disable linebreak-style */
import ListResto from '../views/pages/list-resto'
import RestoDetail from '../views/pages/resto-detail'

const routes = {
  '/': ListResto, // default page
  '/detail/:id': RestoDetail
  // '/likes': Like,
}

export default routes
