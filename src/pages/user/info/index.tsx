import * as React from 'react'
import Container from './containers'
import './index.less'
export default class Index extends React.Component<{}, {}> {
  render() {
    return (
      <div className="user-info">
        <Container />
      </div>
    )
  }
}