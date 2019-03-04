import * as React from 'react'
import MainLayout from '../../../../components/mainLayout'
import Table from './table'
import SearchBox from './searchBox'
import UpdateModal from './updateModal'
import './index.less'

export default class RootComponent extends React.Component<{}, {}> {
  render() {
    return (
      <MainLayout>
        <div className="user-info-container">
          <div className="row bar">
            <UpdateModal />
            <SearchBox/>
          </div>
          <div className="row main">
            <Table/>
          </div>
        </div>
      </MainLayout>
    )
  }
}