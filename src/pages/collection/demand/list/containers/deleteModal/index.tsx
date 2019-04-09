import * as React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'antd'
import { doDeleteDemand, doToggleDemandDeleteMd } from 'action/index'

const DeleteModal = (props: any) => {
  const { pagination, netStation, deleteIds, dispatch, deleteCfLoading, deleteMdVisible } = props
  const handleDeleteOk = () => {    
    dispatch(doDeleteDemand({
      deleteIds, pagination, netStation
    }))
  }

  const handleDeleteCancel = () => {
    dispatch(doToggleDemandDeleteMd([]))
  }

  return (
    <Modal
      title="提示"
      okText="确认"
      cancelText="取消"
      confirmLoading={deleteCfLoading}
      visible={deleteMdVisible}
      onOk={handleDeleteOk}
      onCancel={handleDeleteCancel}
    >
      <p>确认删除?</p>
    </Modal>
  )
}

const mapStateToProps = (state: any) => {
  const { 
    deleteMdVisible,
    deleteCfLoading,
    pagination,
    netStation,
    deleteIds } = state.collectionDemand
  return {
    deleteMdVisible,
    deleteCfLoading,
    pagination,
    netStation,
    deleteIds
  }
}
export default connect(mapStateToProps)(DeleteModal)
