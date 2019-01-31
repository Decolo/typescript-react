import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { LocaleProvider } from 'antd'
import { Button } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'

class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <div className="App">
          <Button type="primary">click</Button>
        </div>
      </LocaleProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

if ((module as any).hot) {
  (module as any).hot.accept()
}