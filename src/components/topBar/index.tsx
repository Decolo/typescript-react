import * as React from 'react'
import { Layout, Icon } from 'antd'
import './index.less'

const { Header } = Layout

export default class TopBar extends React.Component<{
  isLogin: boolean
}, {}> {
  handleLogout = () => {
    localStorage.clear()
    console.log(this.props)
    window.location.assign('/dataManagement/login')
  }
  render() {
    return (
      <Header className="header">
        <div className="logo">DATA MANAGEMENT | 浙报数据管理系统</div>
        {
          this.props.isLogin ? null : (
            <div className="user-box">
              <Icon type="user" />
              <span className="padding_lr">{localStorage.getItem('account')}</span>
              <Icon type="logout" className="layout-btn" onClick={this.handleLogout}/>
            </div>
          )
        }
      </Header>
    )
  }
}