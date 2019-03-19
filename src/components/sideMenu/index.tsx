import * as React from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import { Icon, Menu } from 'antd'
import { menuItem } from '../../config/menu'
const SubMenu = Menu.SubMenu;
import './index.less'

const { Sider } = Layout

type State = {
  collapsed: boolean
}

type Props = {
  menu: Array<menuItem>
}

export default class SideMenu extends React.Component<Props, State> {
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
    const { menu } = this.props
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
            <Menu theme="dark" mode="inline">
              {getMenu(menu)}
            </Menu>
          </div>
        </div>
      </Sider>
    )
  }
}


const getMenu = (menuList: Array<menuItem>) => {
  return menuList.map((item): React.ReactElement<{}, any> => {
    const { children, key, icon, title, path = '' } = item
    return (
      children && children.length > 0 ? (
        <SubMenu key={key} title={
          <span>
            {icon && <Icon type={icon} />}
            <span>{title}</span>
          </span>
        }>
          {getMenu(children)}
        </SubMenu>
      ) : (
        <Menu.Item key={key}>
          {icon && <Icon type={icon} />}
          <Link to={path}>
            <span>{title}</span>
          </Link>
        </Menu.Item>
      )
    )
  })
}