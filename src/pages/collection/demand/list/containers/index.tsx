import * as React from 'react'
import { Tabs, Button, Table } from 'antd'
import { doRequestDemandList } from 'action/index'
import { connect } from 'react-redux'
import MainLayout from 'components/mainLayout'
import SearchBox from 'components/searchBox'
import { ContainerProps } from 'declaration/index'
import { configList, tabList } from '../config'
const TabPane = Tabs.TabPane

interface Props extends ContainerProps {}
interface Params {
  ticket: string,
  page: number,
  size: number
}

class Container extends React.Component<Props, {}> {
  componentDidMount = () => {
    this.fetchDemandList({
      page: 1,
      size: 10,
      ticket: tabList[0].key
    })
  }

  fetchDemandList = (params: Params) => {
    this.props.dispatch(doRequestDemandList(params))
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