import * as React from 'react'
import { Tabs, Button } from 'antd'
import { 
  doRequestDemandList,
  doChangeDemandNetStation,
  doFetchNetProperties,
  doChannelProperties,
  doToggleDemandDeleteMd
} from 'action/index'
import { connect } from 'react-redux'
import MainLayout from 'components/mainLayout'
import SearchBox from 'components/searchBox'
import UpdateModal from './updateModal'
import { ContainerProps } from 'declaration/index'
import { configList, tabList } from '../config'
import Table from './table'
import DeleteModal from './deleteModal'
const TabPane = Tabs.TabPane

interface Props extends ContainerProps {
  netStation: string,
  deleteIds: Array<number | string>
}

class Container extends React.Component<Props, {}> {
  componentDidMount = () => {
    const { netStation } = this.props
    this.fetchDemandList(netStation)
    this.fetchNetProperties(netStation)
    this.fetchChanelProperyies(netStation)
  }

  fetchChanelProperyies = (netStation: string) => {
    this.props.dispatch(doChannelProperties(netStation))
  }

  fetchNetProperties = (netStation: string) => {
    this.props.dispatch(doFetchNetProperties(netStation))
  }

  fetchDemandList = (netStation: string) => {
    this.props.dispatch(doRequestDemandList({
      netStation
    }))
  }
  
  changeTab = (key: string) => {
    const { netStation } = this.props
    this.props.dispatch(doChangeDemandNetStation(key))
    this.fetchDemandList(netStation)
  }

  startDelete = () => {
    this.props.dispatch(doToggleDemandDeleteMd([]))
  }

  render() {
    const { netStation, deleteIds } = this.props
    const options = configList.filter(config => config.isSearchOption)
    return (
      <MainLayout>
        <Tabs className="tab" defaultActiveKey={netStation} onChange={this.changeTab}>
          {
            tabList.map(tab => {
              const { title, key } = tab
              return (
                <TabPane tab={title} key={key}>
                  <div className="row bar">
                    <div className="button-container">
                      <Button className="delete-some" disabled={!deleteIds.length} onClick={this.startDelete}>批量删除</Button>
                      <UpdateModal />
                    </div>
                    <SearchBox
                      options={options}
                    />
                  </div>
                  <Table /> 
                </TabPane>
              )
            })
          }
        </Tabs>
        <DeleteModal />
      </MainLayout>
    )
  }
}

const mapStateToProps = (state: any) => {
  const { netStation, deleteIds } = state.collectionDemand
  return {
    netStation,
    deleteIds
  }
}
export default connect(mapStateToProps)(Container)