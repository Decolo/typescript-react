import * as React from 'react'
import { connect } from 'react-redux'
import { Table, Switch, Modal } from 'antd'
import { configList } from '../../config'
import { doToggleUserInfoUpdateMd, doRequestDeleteUser, doToggleUserInfoDeleteMd } from '../../../../../action'
import { getColumns } from 'utils/index'

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
    const { dispatch , deleteIds } = this.props
    dispatch(doRequestDeleteUser(deleteIds))
  }
  handleDeleteCancel = () => {
    this.props.dispatch(doToggleUserInfoDeleteMd(null))
  }
  render() {
    const { tableLoading, userList, pagination, deleteMdVisible, deleteCfLoading } = this.props
    const columns: Array<any> = [...getColumns(configList), 
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
          loading={tableLoading}
          pagination={pagination}
          dataSource={userList}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  const { userList, pagination, tableLoading, deleteMdVisible, deleteCfLoading, deleteIds } = state.userInfo
  return {
    userList,
    pagination,
    tableLoading,
    deleteMdVisible,
    deleteCfLoading,
    deleteIds
  }
}

export default connect(mapStateToProps)(Index)