import * as React from 'react'

type Props = {
  history: {
    push(path: string, state?: {}): void
  }
}

export default class Login extends React.Component<Props, {}> {
  login = () => {
    localStorage.setItem('allow', 'true')
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}