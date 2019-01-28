import * as React from 'react'
import * as ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>helllo</div>
    )
  }
}

ReactDOM.render(
  <App />
  , document.getElementById('app'))

if ((module as any).hot) {
  (module as any).hot.accept()
}
