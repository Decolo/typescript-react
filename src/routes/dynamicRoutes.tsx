import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from '../config/routes'

type Props = {
  location?: {
    pathname: string | undefined
  }
}

export default class DynamicRoutes extends React.Component<Props, {}> {
  render() {
    const pathname = this.props.location ? this.props.location.pathname : undefined
    const isLogin = localStorage.getItem('allow') || false
    const matchRoute = routes.find(item => item.path === pathname)
    if (!matchRoute) {
      if (pathname === '/index') {
        window.location.assign('/dataManagement')
      } else {
        window.location.assign('/dataManagement/404')
      }
      return null
    } else if (!isLogin && pathname !== '/login') {
      window.location.assign('/dataManagement/login')
      return null
    } else if (isLogin && pathname === 'login') {
      window.location.assign('/dataManagement')
      return null
    } else {
      const { path, component } = matchRoute
      return <Route exact path={path} component={component} />
    } 
  }
}

// export default class DynamicRoutes extends React.Component {
//   render() {
//     return (
//       <Switch>
//         {
//           configs.map((item, index) => {
//             const { path, component } = item
//             return <Route exact path={path}  key={index} component={component} />
//           })
//         }
//         <Redirect from="/index" to="/" />
//       </Switch>
//     )
//   }
// }