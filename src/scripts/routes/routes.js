/* eslint-disable linebreak-style */
import ListResto from '../views/pages/list-resto'
import RestoDetail from '../views/pages/resto-detail'
import Like from '../views/pages/like'

const routes = {
  '/': ListResto, // default page
  '/detail/:id': RestoDetail,
  '/likes': Like
}

export default routes
