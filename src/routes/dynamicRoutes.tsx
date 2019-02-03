import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../pages/login'
import Home from '../pages/home'
import About from '../pages/about'
import NotFound from '../pages/404'
import MainLayout from '../components/mainLayout'

interface Config {
  path: string,
  component: React.ComponentClass<{}, {}>
}

const configs: Array<Config> = [
  {
    path: '/about',
    component: About
  }
]

export default class DynamicRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <MainLayout>
          <Route exact path="/" component={Home} />
          {configs.map((config, index) => {
            const { path, component } = config
            return (<Route key={index} path={path} component={component} />)
          })}
        </MainLayout>
        <Redirect from="/index.html" to="/" />
        <Route component={NotFound} />
      </Switch>
    )
  }
}