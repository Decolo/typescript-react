import * as React from 'react'
import { Layout } from 'antd'
import SideMenu from './sideMenu'
import TopBar from './topBar'
import menu from '../config/menu'

const { Header, Content } = Layout

type Props = {
  children: React.ReactNode
}

const MainLayout = (props: Props) => (
  <Layout style={{ minHeight: '100vh' }}>
    <SideMenu menu={menu} />
    <Layout>
      <Header style={{ 
        backgroundColor: '#fff',
        paddingLeft: 24,
        paddingRight: 24
      }}>
        <TopBar isLogin={false}/>
      </Header>
      <Content style={{
        margin: '24px 16px',
        padding: 24,
        backgroundColor: '#fff'
      }}>
        {props.children}
      </Content>
    </Layout>
  </Layout>
)

export default MainLayout