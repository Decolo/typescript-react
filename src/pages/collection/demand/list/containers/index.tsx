import * as React from 'react'
import { Tabs, Button, Table } from 'antd'
import { doRequestTicket } from 'src/action'
import { connect } from 'react-redux'
import MainLayout from '../../../../../components/mainLayout'
import SearchBox from '../../../../../components/searchBox'
import { ContainerProps } from '../../../../../declartion'
import { configList, tabList } from '../config'

const TabPane = Tabs.TabPane

interface Props extends ContainerProps {}

class Container extends React.Component<Props, {}> {
  componentDidMount = () => {
    this.fetchDemandData()
  }
  fetchDemandData = () => {
    // this.props.dispatch()
  }
  render() {
    const options = configList.filter(config => config.isSearchOption)
    return (
      <MainLayout>
        <Tabs defaultActiveKey={tabList[0].key}>
          {
            tabList.map(tab => {
              const { title, key } = tab
              return (
                <TabPane tab={title} key={key}>
                  <div className="row bar">
                    <Button>新增需求</Button>
                    <SearchBox
                      options={options}
                    />
                    <Table />   
                  </div>
                </TabPane>
              )
            })
          }
        </Tabs>
        
      </MainLayout>
    )
  }
}

export default connect()(Container)