import * as React from 'react'
import { connect } from 'react-redux'
import { Table, Modal } from 'antd'
import { configList } from '../../config'
import { getColumns } from 'utils/index'
import { ContainerProps } from 'declaration/index'
import { State } from '../../reducer'

interface Props extends ContainerProps, State {}

class Index extends React.Component<Props, {}> {
  render() {
    const { loading, pagination, demandList } = this.props
    const columns: Array<any> = [...getColumns(configList)]
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
    demandList
  } = collectionDemand
  return {
    loading,
    pagination,
    demandList
  }
}

export default connect(mapStateToProps)(Index)