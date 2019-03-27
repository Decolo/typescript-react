export type menuItem = {
  title: string,
  icon?: string,
  key: string,
  path?: string,
  children?: Array<menuItem> | null
}

const menu: Array<menuItem> = [{
  title: '采集点管理',
  icon: 'solution',
  key: 'sub1',
  children: [{
    title: '采集点需求管理',
    key: 'sub2',
    children: [{
      title: '需求列表',
      key: '1',
      path: '/collection/demand/list'
    }]
    // }, {
    //   title: '需求审核列表',
    //   key: '2',
    //   path: '/collection/demand/auditList'
    // }]
  }, {
    title: '采集点打标管理',
    key: 'sub3',
    children: [{
      title: '需求列表',
      key: '2',
      path: '/collection/mark/list'
    }, {
      title: '未通过需求',
      key: '3',
      path: '/collection/mark/notPassedList'
    }, {
      title: '任务列表',
      key: '4',
      path: '/collection/mark/taskList'
    }]
  }, {
    title: '采集点雷达管理',
    key: 'sub4',
    children: [{
      title: '分配列表',
      key: '5',
      path: '/collection/radar/list'
    }, {
      title: '审核列表',
      key: '6',
      path: '/collection/radar/auditList'
    }, {
      title: '任务列表',
      key: '7',
      path: '/collection/radar/taskList'
    }, {
      title: '未通过任务列表',
      key: '8',
      path: '/collection/radar/unPassedTaskList'
    }, {
      title: '采集成果列表',
      key: '9',
      path: '/collection/radar/resultList'
    }]
  }, {
    title: '采集点检查',
    key: '10',
    path: '/collection/check'
  }]
}, {
  title: '指标管理',
  icon: 'schedule',
  key: 'sub4',
  children: [{
    title: '码值管理',
    key: '11',
    path: '/indicator/code'
  }, {
    title: '自建指标',
    key: '12',
    path: '/indicator/selfBuild'
  }, {
    title: '需求指标管理',
    key: '13',
    path: '/indicator/demandManage'
  }, {
    title: '采集点指标管理',
    key: '14',
    path: '/indicator/collectorManage'
  }]
}, {
  title: '用户管理',
  icon: 'user',
  key: 'sub5',
  children: [{
    title: '用户信息管理',
    key: '15',
    path: '/user/info'
  }, {
    title: '用户角色管理',
    key: '16',
    path: '/user/role'
  }]
}]

export default menu
