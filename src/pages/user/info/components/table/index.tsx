import * as React from 'react'
import { Table, Switch } from 'antd'
import { configList, configItem } from '../../configs'
interface Column{
  title: string,
  dataIndex: string,
  key: string
}

const getColumns = (list: Array<configItem> = []): Array<Column> => {
  const newList: Array<Column> = []
  for (let i = 0; i < list.length; i++) {
    const { isTableColumn, title, dataIndex, key } = list[i]
    if (!isTableColumn) {
      continue
    } else {
      newList.push({
        title,
        dataIndex,
        key
      })
    }
  }
  return newList
}

export default class Index extends React.Component<{}, {}> {
  state = {
    loading: false
  }
  handleSwitchChange() {}
  handleSetAuth() {}
  handleEdit() {}
  handleDelete() {}
  render() {
    const columns: Array<any>= [...getColumns(configList), 
      {
        title: '是否启用',
        dataIndex: 'onOrOff',
        key: 'onOrOff',
        render: () => (<Switch onChange={this.handleSwitchChange}/>)
      }, {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: () => (
          <ul className="action-container">
            <li><a href="javascript: void(0)" onClick={this.handleSetAuth}>权限设置</a></li>
            <li><a href="javascript: void(0)" onClick={this.handleEdit}>编辑</a></li>
            <li><a href="javascript: void(0)" onClick={this.handleDelete}>删除</a></li>
          </ul>
        )
      }
    ]
    const { loading } = this.state
    return (
      <Table
        rowKey="userInfo"
        bordered={true}
        loading={loading}
        columns={columns}
      />
    )
  }
}
