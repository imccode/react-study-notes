import loadable from '@loadable/component'
import { RouteProps } from 'react-router-dom'

const routes: RouteProps[] = [
  {
    path: '/props',
    component: loadable(() => import('../pages/props'))
  }
]

export default routes
