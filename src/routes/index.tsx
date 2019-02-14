import * as React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import DynamicRoutes from './dynamicRoutes'

export default class Routes extends React.Component {
	render() {
		// return (
		// 	<Router basename="/dataManagement">
		// 	  <Switch>
		// 	    <DynamicRoutes />	
		// 	  </Switch>
		// 	</Router>
		// )
		return (
			<Router basename="/dataManagement">
				<DynamicRoutes />	
			</Router>
		)
	}
}