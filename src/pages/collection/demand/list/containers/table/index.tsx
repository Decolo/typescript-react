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
    this.props.dispatch(doToggleDemandDeleteMd([id]))
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
    const { tableLoading, pagination, demandList } = this.props
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
        <Table
          rowSelection={{
            onChange: (selectedRowKeys: Array<string> | Array<number>) => {  
              console.log(selectedRowKeys.join(','))
            }
          }}
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
  const { 
    tableLoading,
    pagination,
    demandList,
    netStation,
    deleteIds
  } = state.collectionDemand
  return {
    tableLoading,
    pagination,
    demandList,
    netStation,
    deleteIds
  }
}

export default connect(mapStateToProps)(Index)