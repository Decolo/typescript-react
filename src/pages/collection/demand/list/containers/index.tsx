import * as React from 'react'
import { Tabs } from 'antd'
import { 
  doRequestDemandList,
  doChangeDemandNetStation,
  doFetchNetProperties,
  doChannelProperties
} from 'action/index'
import { connect } from 'react-redux'
import MainLayout from 'components/mainLayout'
import SearchBox from 'components/searchBox'
import UpdateModal from './updateModal'
import { ContainerProps } from 'declaration/index'
import { configList, tabList } from '../config'
import Table from './table'
const TabPane = Tabs.TabPane

interface Props extends ContainerProps {
  netStation: string
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

  render() {
    const { netStation } = this.props
    const options = configList.filter(config => config.isSearchOption)
    return (
      <MainLayout>
        <Tabs defaultActiveKey={netStation} onChange={this.changeTab}>
          {
            tabList.map(tab => {
              const { title, key } = tab
              return (
                <TabPane tab={title} key={key}>
                  <div className="row bar">
                    <UpdateModal />
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
        
      </MainLayout>
    )
  }
}

const mapStateToProps = (state: any) => {
  const { netStation } = state.collectionDemand
  return {
    netStation 
  }
}
export default connect(mapStateToProps)(Container)