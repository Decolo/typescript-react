import * as React from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import { Icon, Menu } from 'antd'
import './index.less'

const { Sider } = Layout

type State = {
  collapsed: boolean
}

export default class SideMenu extends React.Component<{}, State> {
  state = {
    collapsed: false
  }

  handleCollapse = () => {
    const { collapsed } = this.state
    this.setState({
      collapsed: !collapsed
    })
  }

  render() {
    const { collapsed } = this.state
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="side-menu">
          <div className="trigger-container">
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.handleCollapse}
            />
          </div>
          <div className="menu-container">
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </Sider>
    )
  }
}