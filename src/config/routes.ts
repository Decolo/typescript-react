import menu from './menu'
import { menuItem } from './menu'
import Login from '../pages/login'
import Home from '../pages/home'
import About from '../pages/about'
import NotFound from '../pages/404'

type Config = {
  path: string,
  component: React.ComponentClass<any, any>
}

const routes: Array<Config> = [
  {
    path: '/',
    component: Home
  }, {
    path: '/about',
    component: About
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/404',
    component: NotFound
  }
]

const generateRoute = (menuList: Array<menuItem>) => {
  menuList.forEach(item => {
    const { path, children } = item
    children && generateRoute(children)
    path && routes.push({
      path,
      component: require('../pages'+ path).default
    })
  })
}

generateRoute(menu)

export default routes

