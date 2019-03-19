export interface configItem {
  title: string,
  dataIndex: string,
  key: string,
  isTableColumn: boolean,
  isSearchOption: boolean
}

export const configList: Array<configItem> = [{
  title: '用户名',
  dataIndex: 'username',
  key: 'username',
  isTableColumn: true,
  isSearchOption: true
}, {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  isTableColumn: true,
  isSearchOption: true
}, {
  title: '手机号',
  dataIndex: 'mobile',
  key: 'mobile',
  isTableColumn: true,
  isSearchOption: true
}, {
  title: '邮箱',
  dataIndex: 'email',
  key: 'email',
  isTableColumn: true,
  isSearchOption: true
}, {
  title: '创建时间',
  dataIndex: 'createTime',
  key: 'createTime',
  isTableColumn: true,
  isSearchOption: false
}, {
  title: '最后登录时间',
  dataIndex: 'lastLoginTime',
  key: 'lastLoginTime',
  isTableColumn: true,
  isSearchOption: false  
}]