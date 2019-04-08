import * as React from 'react'
import { connect } from 'react-redux'
import { Modal, Button, Form, Input, Select, Steps } from 'antd'
import {
  doToggleDemandUpdateMd,
  doRequestAddDemand,
  doRequestAddNetStation,
  doRequestAddChannel
} from 'action/index'

const Option = Select.Option
const Step = Steps.Step

interface PropertyItem {
  editable: number,
  length_max: number,
  nullable: number,
  property_alias: string,
  property_name: string,
  property_type: number
}

class UpdateModal extends React.Component<any, {}> {
  addDemand = (event: any) => {
    event.preventDefault()
    const { dispatch, netStation, addStep } = this.props
    const { validateFields } = this.props.form
    validateFields(['title', 'source', 'comment'], {
      first: true,
      force: true
    }, async(errors: {}, values: {}) => {
      if (errors) {
        return 
      } else {
        dispatch(doRequestAddDemand({
          ...values,
          netStation,
          addStep
        }))
      }
    })
  }
  addNetStation = (event: any) => {
    event.preventDefault()
    const { dispatch, netStation, addStep, netProperties } = this.props
    const { validateFields } = this.props.form
    const props = netProperties.map((property: {
      property_name: string
    }) => property.property_name)

    validateFields(props, {
      first: true,
      force: true
    }, async(errors: {}, values: {}) => {
      if (errors) {
        return
      } else {
        dispatch(doRequestAddNetStation({
          ...values,
          netStation,
          addStep
        }))
      }
    })
  }
  addChannel = (event: any) => {
    event.preventDefault()
    const { dispatch, netStation, channelProperties } = this.props
    const { validateFields } = this.props.form

    const props = channelProperties.map((property: {
      property_name: string
    }) => property.property_name)
    
    validateFields(props, {
      first: true,
      force: true
    }, async(errors: {}, values: {}) => {
      if (errors) {
        return
      } else {
        dispatch(doRequestAddChannel({
          ...values,
          netStation,
        }))
      }
    })
  }
  showModal = () => {
    this.props.dispatch(doToggleDemandUpdateMd({}))
  }
  handleSubmit = () => {

  }
  handleCancel = () => {
    this.props.dispatch(doToggleDemandUpdateMd({}))
  }
  render() {
    const { updateMdVisible, addDemandLoding, addStep, netProperties, addNetLoding, channelProperties } = this.props
    const { getFieldDecorator } = this.props.form
    return (
      <div className="update-modal">
        <Button type="primary" onClick={this.showModal}>新增需求</Button>
        <Modal
          title='需求填写'
          footer={null}
          visible={updateMdVisible}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
          destroyOnClose={true}
          width={1260}
        > 
          <Steps className="steps" current={addStep}>
            <Step title="创建需求" />
            <Step title="创建站点" />
            <Step title="创建栏目" />
          </Steps>
          <div className="first-pane add-demand">
            <Form onSubmit={this.addDemand}>  
              <Form.Item label="需求标题">
              {getFieldDecorator('title', {
                rules: [{
                  max: 20,
                  message: '最多不超过20个字符'
                }, {
                  required: true,
                  message: '标题为必填'
                }]
              })(
                <Input placeholder="请填写需求标题" />
              )}
            </Form.Item>
              <Form.Item label="需求来源">
              {getFieldDecorator('source', {
                rules: [{
                  required: true,
                  message: '来源为必填'
                }]
              })(
                <Select>
                  <Option value={'1'}>天目云</Option>
                  <Option value={'2'}>媒立方</Option>
                  <Option value={'3'}>本系统</Option>
                </Select>
              )}
            </Form.Item>
              <Form.Item label="备注">
              {getFieldDecorator('comment')(
                <Input placeholder="请填写备注" />
              )}
            </Form.Item>
              <Form.Item>
              <Button htmlType="submit" loading={addDemandLoding}>创建需求</Button>
            </Form.Item>
            </Form>
          </div>
          <div className="second-pane">
            <Form onSubmit={this.addNetStation}>
              {
                netProperties.map((item: PropertyItem, index: number) => {
                  const { editable, length_max, nullable, property_alias, property_name, property_type } = item
                  return (
                    <Form.Item label={property_alias} key={'netProperty' + index}>
                      {getFieldDecorator(property_name, {
                        rules: [{
                          max: length_max,
                          message: '超过最大长度'
                        }]
                      })(
                        <Input placeholder={'请输入' + property_alias}/>
                      )}
                    </Form.Item>
                  )
                })
              }
              <Button htmlType="submit" loading={addNetLoding}>添加站点</Button>
            </Form>
          </div>
          <div className="third-pane">
            <Form onSubmit={this.addChannel}>
              {
                channelProperties.map((item: PropertyItem, index: number) => {
                  const { editable, length_max, nullable, property_alias, property_name, property_type } = item
                  return (
                    <Form.Item label={property_alias} key={'netProperty' + index}>
                      {getFieldDecorator(property_name, {
                        rules: [{
                          max: length_max,
                          message: '超过最大长度'
                        }]
                      })(
                        <Input placeholder={'请输入' + property_alias}/>
                      )}
                    </Form.Item>
                  )
                })
              }
            </Form>
          </div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  const { record, updateMdVisible, addDemandLoding, netStation, addStep, addNetLoding, netProperties, channelProperties } = state.collectionDemand
  return {
    record,
    updateMdVisible,
    addDemandLoding,
    netStation,
    addStep,
    addNetLoding,
    netProperties,
    channelProperties
  }
}

export default connect(mapStateToProps)(Form.create()(UpdateModal))