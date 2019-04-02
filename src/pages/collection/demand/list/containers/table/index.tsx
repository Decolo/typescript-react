import * as React from 'react'
import { connect } from 'react-redux'
import { Table, Modal, Select, Pagination } from 'antd'
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
    const { tableLoading, pagination,  deleteCfLoading, deleteMdVisible } = this.props
    const demandList = [
      {
      "id": 4,
      "title": "23141234121234",
      "create_by": "1",
      "operator": null,
      "source": 1,
      "status": 0,
      "comment": "asfasdfwqwerqwer",
      "create_at": "2019-03-22 08:38:10",
      "update_at": "2019-03-22 08:38:10",
      "create_by_m": "测试用户"
      },
      {
      "id": 3,
      "title": "23141234121234",
      "create_by": "",
      "operator": null,
      "source": 1,
      "status": 0,
      "comment": "asfasdfwqwerqwer",
      "create_at": "2019-03-22 08:37:21",
      "update_at": "2019-03-22 08:37:21",
      "create_by_m": "俞景洮"
      },
      {
      "id": 1,
      "title": "测试标题修改",
      "create_by": "1",
      "operator": "1",
      "source": 1,
      "status": 1,
      "comment": "测试备注",
      "create_at": "2019-03-22 08:15:31",
      "update_at": "2019-03-22 08:25:02",
      "create_by_m": "俞景洮",
      "operator_m": "俞景洮"
      }
    ]
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