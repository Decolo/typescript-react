import * as React from 'react'
import { connect } from 'react-redux'
import { Table, Modal, Select } from 'antd'
import { configList } from '../../config'
import { getColumns } from 'utils/index'
import { ContainerProps } from 'declaration/index'
import { State } from '../../reducer'
import { 
  doResetDemand,
  doDeleteDemand,
  doChangeOperator,
  doToggleDemandUpdateMd,
  doToggleDemandDeleteMd,
  doRequestDemandList
 } from 'action/index'

const Option = Select.Option

interface Props extends ContainerProps, State {}
class Index extends React.Component<Props, {}> {
  handleReset = (id: number) => {
    const { pagination, netStation } = this.props
    this.props.dispatch(doResetDemand({
      id, pagination, netStation
    }))
  }
  startDelete = (id: number) => {
    this.props.dispatch(doToggleDemandDeleteMd(id))
  }
  handleDeleteOk = () => {
    const { pagination, netStation, deleteId, dispatch } = this.props
    dispatch(doDeleteDemand({
      deleteId, pagination, netStation
    }))
  }
  handleDeleteCancel = () => {
    this.props.dispatch(doToggleDemandDeleteMd(null))
  }
  startEdit = (record: {}) => {
    this.props.dispatch(doToggleDemandUpdateMd(record))
  }
  changePagination = (page: number | undefined, pageSize: number | undefined) => {
    const { netStation, dispatch } = this.props
    dispatch(doRequestDemandList({
      netStation,
      page,
      size: pageSize,
    }))
  }
  changeOperator = (demandId: number, operatorId: number) => {
    const { netStation, dispatch } = this.props
    dispatch(doChangeOperator({
      netStation,
      demandId,
      operatorId
    }))
  }
  render() {
    const { tableLoading, pagination,  deleteCfLoading, deleteMdVisible, demandList } = this.props
    const columns: Array<any> = [...getColumns(configList),
      {
        title: '分配人',
        dataIndex: 'operator',
        key: 'operator',
        render: (text: string, record: any) => {
          return (
            <Select 
              defaultValue={record.operator}
              onChange={(operatorId: number) => {
                this.changeOperator(record.id, operatorId)
              }}
            ></Select>
          )
        }
      }, {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text: string, record: {
          id: number
        }) => {
          return (
            <ul className="action-container">
              <li><a href="javascript: void(0)" onClick={() => this.startEdit(record)}>编辑</a></li>
              <li><a href="javascript: void(0)" onClick={() => this.startDelete(record.id)}>删除</a></li>
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
          confirmLoading={deleteCfLoading}
          visible={deleteMdVisible}
          onOk={this.handleDeleteOk}
          onCancel={this.handleDeleteCancel}
        >
          <p>确认删除该需求吗?</p>
        </Modal>
        <Table
          rowKey="id"
          columns={columns}
          bordered={true}
          loading={tableLoading}
          dataSource={demandList}
          pagination={{
            ...pagination,
            onChange: this.changePagination
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  const { collectionDemand } = state
  const { 
    tableLoading,
    pagination,
    demandList,
    netStation,
    deleteMdVisible,
    deleteCfLoading,
    deleteId
  } = collectionDemand
  return {
    tableLoading,
    pagination,
    demandList,
    netStation,
    deleteMdVisible,
    deleteCfLoading,
    deleteId
  }
}

export default connect(mapStateToProps)(Index)