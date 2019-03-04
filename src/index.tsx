import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { LocaleProvider } from 'antd'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import Routes from './routes/index'
import rootReducer from './reducer'
import rootSaga from './saga'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import './style/style.less'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LocaleProvider locale={zhCN}>
          <Routes />
        </LocaleProvider>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

if ((module as any).hot) {
  (module as any).hot.accept()
}