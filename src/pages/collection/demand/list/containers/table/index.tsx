import * as React from 'react'
import { connect } from 'react-redux'
import { Table, Modal, Select, Pagination } from 'antd'
import { configList } from '../../config'
import { getColumns } from 'utils/index'
import { ContainerProps } from 'declaration/index'
import { State } from '../../reducer'
import { 
  doResetDemand,
  doDeleteDemand
 } from 'action/index'

interface Props extends ContainerProps, State {
}

class Index extends React.Component<Props, {}> {
  handleReset = (id: number) => {
    const { pagination, netStation } = this.props
    this.props.dispatch(doResetDemand({
      id, pagination, netStation
    }))
  }
  handleDelete = (id: number) => {
    const { pagination, netStation } = this.props
    this.props.dispatch(doDeleteDemand({
      id, pagination, netStation
    }))
  }
  render() {
    const { loading, pagination, demandList } = this.props
    const columns: Array<any> = [...getColumns(configList),
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text: string, record: {
          id: number
        }) => {
          return (
            <ul className="action-container">
              <li><a href="javascript: void(0)">编辑</a></li>
              <li><a href="javascript: void(0)" onClick={() => this.handleDelete(record.id)}>删除</a></li>
              <li><a href="javascript: void(0)" onClick={() => this.handleReset(record.id)}>重新分配</a></li>
            </ul>
          )
        }
      }
    ]
    return (
      <div className="table-container">
         <Modal
          title="提示"
          okText="确认"
          cancelText="取消"
          // confirmLoading={deleteCfLoading}
          // visible={deleteMdVisible}
          // onOk={this.handleDeleteOk}
          // onCancel={this.handleDeleteCancel}
        >
          <p>确认删除该用户吗?</p>
        </Modal>
        <Table
          rowKey="uid"
          columns={columns}
          bordered={true}
          loading={loading}
          pagination={pagination}
          dataSource={demandList}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  const { collectionDemand } = state
  const { 
    loading,
    pagination,
    demandList,
    netStation
  } = collectionDemand
  return {
    loading,
    pagination,
    demandList,
    netStation
  }
}

export default connect(mapStateToProps)(Index)