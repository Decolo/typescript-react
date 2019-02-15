import * as React from 'react'
import { Icon } from 'antd'
import './index.less'

type Props = {
  isLogin: boolean
}

const handleLogout = () => {
  localStorage.clear()
  window.location.assign('/dataManagement/login')
}

const TopBar = (props: Props) => {
  return (
    <div className="top-bar">
      <div className="logo column">DATA MANAGEMENT | 浙报数据管理系统</div>
        {
          props.isLogin ? null : (
            <div className="user-box column">
              <Icon type="user" />
              <span className="padding_lr">{localStorage.getItem('account')}</span>
              <Icon type="logout" className="layout-btn" onClick={handleLogout}/>
            </div>
          )
      }
    </div>
  )
}

export default TopBar