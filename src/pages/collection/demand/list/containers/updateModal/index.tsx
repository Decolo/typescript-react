import * as React from 'react'
import { connect } from 'react-redux'
import { Modal, Button, Form, Input, Select, Steps } from 'antd'
import {
  doToggleDemandUpdateMd
} from 'action/index'

const Option = Select.Option
const Step = Steps.Step

class UpdateModal extends React.Component<any, {}> {
  showModal = () => {
    this.props.dispatch(doToggleDemandUpdateMd({}))
  }
  handleSubmit = () => {

  }
  handleCancel = () => {

  }
  render() {
    const { updateMdVisible } = this.props
    const formItemLayout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
    }
    const { getFieldDecorator } = this.props.form
    return (
      <div className="update-modal">
        <Button type="primary" onClick={this.showModal}>新增需求</Button>
        <Modal
          title='需求填写'
          visible={updateMdVisible}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
          destroyOnClose={true}
          width={1260}
        >
          <Steps className="steps" current={1}>
            <Step title="创建需求" />
            <Step title="创建站点" />
            <Step title="创建栏目" />
          </Steps>
          
          <Form>
            <Form.Item label="需求标题" {...formItemLayout}>
              {getFieldDecorator('title')(
                <Input placeholder="请填写需求标题" />
              )}
            </Form.Item>
            <Form.Item label="需求来源" {...formItemLayout}>
              {getFieldDecorator('source')(
                <Select>
                  <Option value={'1'}>天目云</Option>
                  <Option value={'2'}>媒立方</Option>
                  <Option value={'3'}>本系统</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="备注" {...formItemLayout}>
              {getFieldDecorator('comment')(
                <Input placeholder="请填写备注" />
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  const { record, updateMdVisible } = state.collectionDemand
  return {
    record,
    updateMdVisible
  }
}

export default connect(mapStateToProps)(Form.create()(UpdateModal))