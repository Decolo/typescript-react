import * as React from 'react'
import { Layout } from 'antd'
import SideMenu from '../sideMenu'
import TopBar from '../topBar'

const { Header, Content } = Layout

type Props = {
  children: React.ReactNode
}

const MainLayout = (props: Props) => (
  <Layout style={{ 
    minHeight: '100vh',
    overflow: 'auto'
  }}>
    <SideMenu />
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
        backgroundColor: '#fff',
        minWidth: '1000px',
        overflow: 'auto'
      }}>
        {props.children}
      </Content>
    </Layout>
  </Layout>
)

export default MainLayout