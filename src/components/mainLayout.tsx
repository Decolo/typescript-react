import * as React from 'react'
import { Layout } from 'antd';
import SideMenu from './sideMenu'
import TopBar from './topBar'
const { Content, Sider } = Layout

export default class MainLayout extends React.Component<{}, {}> {
  render() {
    console.log(this.props)
    return (
      <div className="layout">
        <TopBar isLogin={false}/>
        <div className="main">
          <SideMenu />
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}