import routesAdmin from './routes.admin'
import routesClient from './routes.client'
import { Error404 } from '../pages'
import { BasicLayout } from '../layouts'

const routes = [
  ...routesAdmin,
  ...routesClient,
  { path: '*', component: Error404, layout: BasicLayout }
]

export default routes
