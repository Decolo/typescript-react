import * as React from 'react'
import { connect } from 'react-redux'
import { Modal, Button, Form, Input } from 'antd'
import { configList } from '../../config'
import { 
  doToggleUserInfoUpdateMd,
  doRequestEditUser
} from '../../../../../action'
class UpdateModal extends React.Component<any, {}> {
  showModal = () => {
    this.props.dispatch(doToggleUserInfoUpdateMd({}))
  }

  handleCancel = () => {
    this.props.dispatch(doToggleUserInfoUpdateMd({}))
  }
  
  handleSubmit = () => {
    const { validateFields } = this.props.form     
    validateFields({
      first: true,
      force: true
    }, async(errors: {}, values: {}) => {
      if (errors) {
        return 
      } else {
        this.props.dispatch(doRequestEditUser(values))
      }
    })
  }

  render() {
    const { record, updateMdVisible } = this.props
    const { getFieldDecorator } = this.props.form
    
    const formItemLayout = {
      labelcol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrappercol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    
    const formConfigs = configList.filter(config => config.formRules).map(config => {
      const { key } = config
      return {
        ...config,
        initialValue: record[key]
      }
    })
    
    return (
      <div className="update-modal">
        <Button type="primary" onClick={this.showModal}>新增</Button>
        <Modal
          title=''
          visible={updateMdVisible}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
          <Form {...formItemLayout}>
            {
              formConfigs.map(config => {
                const { title, key, formRules, initialValue } = config
                return (
                  <Form.Item
                    key={key}
                    label={title}
                  >
                    {getFieldDecorator(key, {
                      rules: formRules,
                      validateFirst: true,
                      validateTrigger: 'onBlur',
                      initialValue
                    })(
                      <Input placeholder={"请输入" + title} />
                    )}
                  </Form.Item>
                )
              })
            }
            <Form.Item
              label="确认密码"
            >
              {getFieldDecorator('rePassword', {
                rules: [{
                  validator: (rule: string, value: string, callback: (param: string | undefined) => void) => {
                    const { getFieldValue } = this.props.form
                    if (getFieldValue('password') !== value) {
                      callback('两次输入密码不相同')
                    } else {
                      callback(undefined)
                    }
                  }
                }],
                validateFirst: true,
                validateTrigger: 'onBlur',
              })(
                <Input placeholder="请输入确认密码" />
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  const { record, updateMdVisible } = state.userInfo
  return {
    record,
    updateMdVisible
  }
}

export default connect(mapStateToProps)(Form.create()(UpdateModal))

