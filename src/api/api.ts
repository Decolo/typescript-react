export const APIBaseUrl: string = '/';
export default {
  // 登录
  login: {
    url: '/datamanage/system/login',
    method: 'POST'
  },
  // 获取验证码
  captcha: {
    url: '/datamanage/system/login/captcha',
    method: 'GET'
  },
  // 用户
  fetchUserList: {
    url: '/mock/user/list',
    method: 'GET'
  },
  addUser: {
    url: '/mock/user/add',
    method: 'POST'
  },
  editUser: {
    url: '/mock/user/edit',
    method: 'POST'
  },
  deleteUser: {
    url: '/mock/user/dele',
    method: 'POST'
  },
  getRole: {
    url: '/datamanage/user/role',
    method: 'GET'
  },
  resetPwd: {
    url: '/datamanage/user/restpwd',
    method: 'POST'
  },
  // 用户角色管理
  updateRole: {
    url: '/datamanage/role/upsert',
    method: 'POST'
  },
  getRoleList: {
    url: '/datamanage/role/get',
    method: 'GET'
  },
  deleteRole: {
    url: '/datamanage/role/dele',
    method: 'POST'
  },

  fetchDemandList: {
    url: '/ticket/netStation',
    method: 'GET'
  },
  setDemand: {
    url: '/ticket/netStation/status/restart',
    method: 'POST'
  },
  deleteDemand: {
    url: '/ticket/netStation/dele',
    method: 'POST'
  },
  changeOperator: {
    url: '/ticket/netStation/operator/edit',
    method: 'POST'
  },
  





  // 自定义规则检查
  getRuleList: {
    url: '/datamanage/customrule/get',
    method: 'GET'  
  },
  addRule: {
    url: '/datamanage/customrule/upsert',
    method: 'POST'
  },
  updateRule: {
    url: '/datamanage/customrule/upsert',
    method: 'POST'
  },
  deleteRule: {
    url: '/datamanage/customrule/dele',
    method: 'POST'
  },
  getCheckResults: {
    url: '/datamanage/customrule/result',
    method: 'GET'
  },
  getCollectorInfo: {
    url: '/datamanage/customrule/content',
    method: 'GET'
  },

  // 采集点问题管理
  getIssueList: {
    url: '/datamanage/issue/get',
    method: 'GET'
  },
  deleteIssue: {
    url: '/datamanage/issue/dele',
    method: 'POST'
  },
  // 采集点信息维护
  getCollector: {
    url: '/datamanage/collector/get',
    method: 'GET'
  },
  getTicket: {
    url: '/datamanage/ticket/get',
    method: 'GET'
  },
  deleTicket: {
    url: '/datamanage/ticket/dele',
    method: 'POST'
  },
  upsertCollector: {
    url: '/datamanage/collector/upsert',
    method: 'POST'
  },
  getTitleList: {
    url: '/datamanage/collector/titlelist',
    method: 'GET'
  },
  getCollectorContent: {
    url: '/datamanage/collector/content',
    method: 'GET'
  },
  deleCollector: {
    url: '/datamanage/collector/dele',
    method: 'POST'
  },
  //配置信息-采集点配置管理
  upsertTicket: {
    url: '/datamanage/ticket/upsert',
    method: 'POST'
  },
  getAttrList: {
    url: '/datamanage/system/attrlist',
    method: 'GET'
  },
  getAttrContent: {
    url: '/datamanage/system/attrcontent',
    method: 'GET'
  },
  newAttrlist: {
    url: '/datamanage/system/attrch',
    method: 'POST'
  },
  chAttrDesc: {
    url: '/datamanage/system/attrdesch',
    method: 'POST'
  },
  attrDele: {
    url: '/datamanage/system/attrdele',
    method: 'POST'
  },
  syncAttr: {
    url: '/datamanage/system/syncdict',
    method: 'POST'
  },
  systemDownload: {
    url: '/datamanage/system/download',
    method: 'DOWNLOAD'
  },
  getTmList: {
    url: '/datamanage/system/tmlist',
    method: 'GET'
  },
  getJob: {
    url: '/datamanage/job/get',
    method: 'GET'
  },
  getAttrMap: {
    url: '/datamanage/attrmap/get',
    method: 'GET'
  },
  updateAttrMap: {
    url: '/datamanage/attrmap/update',
    method: 'POST'
  }, 
  //站点信息维护
  getSites: {
    url: '/datamanage/sites/get',
    method: 'GET'
  },
  deleSites: {
    url: '/datamanage/sites/dele',
    method: 'POST'
  },
  upsertSites: {
    url: '/datamanage/sites/upsert',
    method: 'POST'
  },
  //采集点变更需求
  addJob: {
    url: '/datamanage/job/add',
    method: 'POST'
  },
  updateJob: {
    url: '/datamanage/job/update',
    method: 'POST'
  },
  attrcontentSystem: {
    url: '/datamanage/system/attrcontent',
    method: 'GET'
  },
  //采集点问题管理
  upsertIssue: {
    url: '/datamanage/issue/upsert',
    method: 'POST'
  },
  //采集点信息维护导出模板
  exportExample: {
    url: '/datamanage/collector/example',
    method: 'DOWNLOAD'
  },
  //采集点信息维护导出数据
  exportExcelBySearch: {
    url: '/datamanage/collector/download',
    method: 'DOWNLOAD'
  },
  //采集点信息维护导入数据
  importExcel: {
    url: '/datamanage/collector/upload',
    method: 'UPLOAD'
  },
  //采集点变更管理导出模板
  changeMExportExample: {
    url: '/datamanage/changema/example',
    method: 'DOWNLOAD'
  },
  //采集点变更管理导出数据
  changeMExportExcelBySearch: {
    url: '/datamanage/changema/download',
    method: 'DOWNLOAD'
  },
  //采集点变更管理导入数据
  changeMImportExcel: {
    url: '/datamanage/changema/upload',
    method: 'UPLOAD'
  },
   //采集点问题管理导出模板
   issueExportExample: {
    url: '/datamanage/issue/example',
    method: 'DOWNLOAD'
  },
  //采集点问题管理导出数据
  issueExportExcelBySearch: {
    url: '/datamanage/issue/download',
    method: 'DOWNLOAD'
  },
  //采集点问题管理导入数据
  issueImportExcel: {
    url: '/datamanage/issue/upload',
    method: 'UPLOAD'
  },
  //采集点变更管理
  getChangeM: {
    url: '/datamanage/changema/get',
    method: 'GET'
  },
  updateChangeM: {
    url: '/datamanage/changema/update',
    method: 'POST'
  },
  //下载模板，导入模板
  exampleJob: {
    url: '/datamanage/job/example',
    method: 'DOWNLOAD'
  },
  uploadJob: {
    url: '/datamanage/job/upload',
    method: 'DOWNLOAD'
  },
  exampleSites: {
    url: '/datamanage/sites/example',
    method: 'DOWNLOAD'
  },
  uploadSites:{
    url: '/datamanage/sites/upload',
    method: 'DOWNLOAD'
  },
  downloadSites:{
    url: '/datamanage/sites/download',
    method: 'DOWNLOAD'
  },
  // 系统消息
  getSystemMsg: {
    url: '/datamanage/system/message',
    method: 'GET'
  },  
  readMsg: {
    url: '/datamanage/system/messageread',
    method: 'POST'
  },
  attrcontentdict: {
    url: '/datamanage/system/attrcontentdict',
    method: 'GET'
  }
}