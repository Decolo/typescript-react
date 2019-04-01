import * as React from 'react'
import Container from './containers'
import './index.less'
export default class CollectionDemandList extends React.Component<{}, {}> {
  render() {
    return (
      <div className="demand-list-container">
        <Container />
      </div>
    )
  }
}