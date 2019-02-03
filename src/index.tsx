import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { LocaleProvider } from 'antd'
import Routes from './routes/index'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import './style/style.less'

class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Routes />
      </LocaleProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

if ((module as any).hot) {
  (module as any).hot.accept()
}