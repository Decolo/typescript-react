import * as React from 'react'
import md5 from 'md5'
import TopBar from '../components/topBar'
import { Form, Icon, Input, Button, message, Row, Col } from 'antd'
import { fetch, api } from '../api'

const FormItem = Form.Item;

interface LoginProps {
  form: {
    getFieldDecorator: Function,
    resetFields: Function,
    validateFields: Function
    [propName: string]: any
  };
  [propName: string]: any
}
interface LoginState {
  index: number,
  captchaUrl: string
}

class Login extends React.Component<LoginProps, LoginState> {
  state = {
    index: 0,
    captchaUrl: '/datamanage/system/login/captcha?0',
  }
  // fetchAllReadMsg = () => {
  //   const params = {
  //     ...api['getSystemMsg'],
  //     page: 1,
  //     num: 99999
  //   };

  //   fetch(params)
  //     .then(result => {
  //       let unreadNum = 0;
  //       result.data.data.forEach(item => {
  //         if (!!!item.status) unreadNum++;
  //       });
  //       localStorage.setItem('systemInfoNum', unreadNum);
  //     })
  // }

  changeCaptcha = () => {
    const { index } = this.state
    const newIndex = index + 1
    this.setState({
      index: newIndex,
      captchaUrl: `/datamanage/system/login/captcha?${newIndex}`
    })
  }

  handleSubmit = (e: Event) => {
    e.preventDefault()
    const { resetFields, validateFields } = this.props.form

    validateFields((errs, values) => {
      if (errs) return

      const params = {
        data: {
          info: JSON.stringify({
            account: values.userName,
            passwd: md5(values.password),
            captcha: values.captcha
          })
        },
        ...api.login
      }

      fetch(params).then(result => {
        const { msg, data, code } = result
          if (code !== 1) {
            message.error(msg)
            // change captcha
            this.changeCaptcha()
            // reset form
            resetFields()
          } else {
            const { account, allow, token } = data
            const timestamp = Date.now()
            localStorage.setItem('account', account)
            localStorage.setItem('allow', allow)
            localStorage.setItem('timestamp', timestamp)
            const string = '' + token + timestamp + account + '53cR29cMA2H*IrEKI'
            localStorage.setItem('token', sha256(string))
            localStorage.setItem('isLogin', true)

            // goto '/index'
            setTimeout(() => {
              this.props.history.push('/index')
            }, 400)
          }
        })
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login-body">
        <TopBar isLogin={true} />
        <div className="loginBg">
          <Form className="login-form" onSubmit={this.handleSubmit}>
            <h1 className="login_h1">用户登录</h1>
            <div className="input_box">
              <Row>
                <Col span={24}>
                  <FormItem>
                    {getFieldDecorator('userName', {
                      rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                      <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="请输入用户名" />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [{
                        required: true,
                        message: '请输入密码!'
                      }, {
                        min: 8,
                        message: '密码最少为8位'
                      }, {
                        validator: (rule: {}, value: string, callback: Function) => {
                          const pattern = /^.*(?=.{8})(?=.*\d)(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[_!@#$%^&*?\(\)]).*$/
                          if (value.trim().length >= 8 && !pattern.test(value)) {
                            callback('密码格式错误')
                          } else {
                            callback()
                          }
                        }
                      }]
                    })(
                      <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password" placeholder="请输入密码" />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem>
                    {getFieldDecorator('captcha', {
                      rules: [{ required: true, message: '请输入验证码' }],
                    })(
                      <Input
                        prefix={<Icon type="info" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="请输入验证码" />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <img src={this.state.captchaUrl}
                    onClick={this.changeCaptcha} />
                  <p>看不清楚，点击图片换一张</p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Button type="primary"
                    className="login-form-button"
                    htmlType="submit"
                  >登录</Button>
                </Col>
              </Row>
            </div>
          </Form>
        </div>
      </div>
    )
  }

  // componentWillUnmount() {
  //   const userAllow = Number(localStorage.getItem('allow'))

  //   if (!isNaN(userAllow) && ((userAllow & 3) >= 3)) {
  //     this.fetchAllReadMsg()
  //   }
  // }
}

const _Login = Form.create()(Login)
export default _Login
