import * as React from 'react'
import md5 from 'md5'
import sha256 from 'sha256'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Card, Form, Icon, Input, Button, Row, Col, message } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import { api, fetch } from '../api/'
import { Data } from '../api/fetch'

interface Props extends FormComponentProps {
  history: {
    push(path: string, state?: {}): void
  }
  dispatch: Dispatch
}

type State = {
  index: number,
  captchaUrl: string
}

class Login extends React.Component<Props, State> {
  private clock: number = 0
  state = {
    index: 0,
    captchaUrl: '/datamanage/system/login/captcha?0',
  }

  componentDidMount() {
    this.clock = window.setInterval(() => {
      this.changeCaptcha()
    }, 60 * 1000)
  }

  handleSubmit = (e: React.FormEvent<{}>): void => {
    e.preventDefault()
    const { resetFields, validateFields } = this.props.form

    validateFields((errs, values) => {
      if (errs) {
        return
      }

      const params = {
        data: {
          info: JSON.stringify({
            account: values.userName,
            passwd: md5(values.password),
            captcha: values.captcha
          })
        },
        ...api.login, 
        handleError: (error: Data) => {
          localStorage.clear()
          resetFields()
          this.changeCaptcha()
        }
      }
      fetch(params)
        .then((json: any) => {
          const { account, allow, token } = json
          const timestamp = Date.now().toString()
          localStorage.setItem('account', account)
          localStorage.setItem('allow', allow)
          localStorage.setItem('timestamp', timestamp)
          const string = '' + token + timestamp + account + '53cR29cMA2H*IrEKI'
          localStorage.setItem('token', sha256(string))
          localStorage.setItem('isLogin', 'true')
          // goto '/index'
          setTimeout(() => {
            this.props.history.push('/index')
          }, 400)
        })
    })
  }

  changeCaptcha = () => {
    const index = this.state.index + 1
    this.setState({
      index,
      captchaUrl: `/datamanage/system/login/captcha?${index}`
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login-layout">
        <div className="cover"></div>
        <div className="input-container">
          <Card title="浙报数据管理系统" bordered={false} headStyle={{ fontSize: 20 }}>
            <Form className="login-form" onSubmit={this.handleSubmit}>
              <Row>
                <Col span={24}>
                  <Form.Item>
                    {getFieldDecorator('userName', {
                      rules: [{ required: true, message: '请输入用户名' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="请输入用户名" />
                    )}
                  </Form.Item>  
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Form.Item>
                    {getFieldDecorator('password', {
                      rules: [{
                        validator: (rule, value, callback) => {
                          if (typeof value !== 'string') {
                            callback('输入错误')
                            return
                          }
                          const _value = value.trim()
                          const pattern = /^.*(?=.{8})(?=.*\d)(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[_!@#$%^&*?\(\)]).*$/
                          if (_value.length <= 0) {
                            callback('输入不得为空')
                          } else if (_value.length < 8) {
                            callback('密码最少为8位')
                          } else if (!pattern.test(_value)) {
                            callback('密码格式错误, 须包含至少一个大写、小写和特殊符号')
                          } else {
                            callback()
                          }
                        }
                      }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password" 
                        placeholder="请输入密码" />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={3}>
                <Col span={17}>
                  <Form.Item>
                    {getFieldDecorator('captcha', {
                      rules: [{ required: true, message: '请输入验证码' }],
                    })(
                      <Input prefix={<Icon type="info" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="请输入验证码" />
                    )}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <img className="captcha-img" src={this.state.captchaUrl} onClick={this.changeCaptcha} />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Form.Item>
                    <Button className="login-form-button" type="primary" htmlType="submit" block>登录</Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      </div>
    )
  }

  componentWillUnmount() {
    window.clearInterval(this.clock)
  }
}

const wrapperLogin = Form.create()(Login)
export default connect()(wrapperLogin)
