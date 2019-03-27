import * as React from 'react'
import { connect } from 'react-redux'
import { Table, Switch, Modal } from 'antd'
import { configList } from '../../config'
import { configItem } from '../../../../../declartion'
import { doToggleUserInfoUpdateMd, doRequestDeleteUser, doToggleUserInfoDeleteMd } from '../../../../../action'
interface Column{
  title: string,
  dataIndex: string,
  key: string
}

const getColumns = (list: Array<configItem> = []): Array<Column> => {
  const columns: Array<Column> = []
  for (let i = 0; i < list.length; i++) {
    const { isTableColumn, title, dataIndex, key } = list[i]
    if (!isTableColumn) {
      continue
    } else {
      columns.push({
        title,
        dataIndex,
        key
      })
    }
  }
  return columns
}

class Index extends React.Component<any, any> {
  handleSwitchChange() {}
  handleSetAuth() {}
  startEdit= (record: {}) => {
    this.props.dispatch(doToggleUserInfoUpdateMd(record))
  }
  startDelete = (id: number) => {
    this.props.dispatch(doToggleUserInfoDeleteMd(id))
  }
  handleDeleteOk = () => {
    const { dispatch , deleteId } = this.props
    dispatch(doRequestDeleteUser(deleteId))
  }
  handleDeleteCancel = () => {
    this.props.dispatch(doToggleUserInfoDeleteMd(null))
  }
  render() {
    const { isLoading, userList, pagination, deleteMdVisible, deleteCfLoading } = this.props
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
        render: (text: string, record: {
          uid: number
        }) => (
          <ul className="action-container">
            <li><a className="action" href="javascript: void(0)" onClick={this.handleSetAuth}>权限设置</a></li>
            <li><a className="action" href="javascript: void(0)" onClick={() => this.startEdit(record)}>编辑</a></li>
            <li><a className="action" href="javascript: void(0)" onClick={() => this.startDelete(record.uid)}>删除</a></li>
          </ul>
        )
      }
    ]
    return (
      <div className="table-container">
         <Modal
          title="提示"
          okText="确认"
          cancelText="取消"
          confirmLoading={deleteCfLoading}
          visible={deleteMdVisible}
          onOk={this.handleDeleteOk}
          onCancel={this.handleDeleteCancel}
        >
          <p>确认删除该用户吗?</p>
        </Modal>
        <Table
          rowKey="uid"
          columns={columns}
          bordered={true}
          loading={isLoading}
          pagination={pagination}
          dataSource={userList}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  const { userList, pagination, isLoading, deleteMdVisible, deleteCfLoading, deleteId } = state.userInfo
  return {
    userList,
    pagination,
    isLoading,
    deleteMdVisible,
    deleteCfLoading,
    deleteId
  }
}

export default connect(mapStateToProps)(Index)