import * as React from 'react'
import RootContainer from './containers'
export default class Index extends React.Component<{}, {}> {
  render() {
    return (
      <div className="user-info">
        <RootContainer />
      </div>
    )
  }
}