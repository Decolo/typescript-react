import { ConfigItem } from '../../../../declaration'

export const configList: Array<ConfigItem> = [{
  title: '用户名',
  dataIndex: 'username',
  key: 'username',
  isTableColumn: true,
  isSearchOption: true,
  formRules: [{
    required: true, message: '必填'
  }]
}, {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  isTableColumn: true,
  isSearchOption: true,
  formRules: [{
    required: true, message: '必填'
  }]
}, {
  title: '手机号',
  dataIndex: 'phone',
  key: 'phone',
  isTableColumn: true,
  isSearchOption: true,
  formRules: [{
    required: true, message: '必填'
  }, {
    validator: (rule: string, value: string, callback: (param: string | undefined) => void) => {
      const reg = /^1[34578]\d{9}$/
      if (reg.test(value.trim())) {
        callback(undefined)
      } else {
        callback('格式不正确')
      }
    }
  }]
}, {
  title: '邮箱',
  dataIndex: 'email',
  key: 'email',
  isTableColumn: true,
  isSearchOption: true,
  formRules: [{
    required: true, message: '必填'
  }, {
    validator: (rule: string, value: string, callback: (param: string | undefined) => void) => {
      // 只允许英文字母、数字、下划线、英文句号、以及中划线组成 zhangsan-001@gmail.com 
      const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (reg.test(value.trim())) {
        callback(undefined)
      } else {
        callback('格式不正确')
      }
    }
  }]
}, {
  title: '创建时间',
  dataIndex: 'create_at',
  key: 'create_at',
  isTableColumn: true,
  isSearchOption: false,
}, {
  title: '最后登录时间',
  dataIndex: 'update_at',
  key: 'update_at',
  isTableColumn: true,
  isSearchOption: false,
}, {
  title: '密码',
  dataIndex: 'password',
  key: 'password',
  isTableColumn: false,
  isSearchOption: false,
  formRules: [
  {
    validator: (rule: string, value: string, callback: (param: string | undefined) => void) => {
      // 只允许英文字母、数字、下划线、英文句号、以及中划线组成 zhangsan-001@gmail.com 
      const reg = /^.*(?=.{8})(?=.*\d)(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[_!@#$%^&*?\(\)]).*$/
      if (reg.test(value)) {
        callback(undefined)
      } else {
        callback('格式不正确')
      }
    }
  }]
}]