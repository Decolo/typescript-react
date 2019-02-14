import * as React from 'react'

export default class Login extends React.Component {
  componentDidMount() {
    localStorage.setItem('allow', 'true')
  }
  render() {
    return (
      <div>login</div>
    )
  }
}