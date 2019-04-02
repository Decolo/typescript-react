import * as React from 'react'
import { ConfigItem } from 'declaration/index'
import { TabItem } from 'declaration/index'

export const configList: Array<ConfigItem> = [{
  title: '需求ID',
  dataIndex: 'id',
  key: 'id',
  isTableColumn: true,
  isSearchOption: true,
}, {
  title: '需求标题',
  dataIndex: 'title',
  key: 'title',
  isTableColumn: true,
  isSearchOption: true
}, {
  title: '需求来源',
  dataIndex: 'source',
  key: 'source',
  isTableColumn: true,
  isSearchOption: true,
  renderColumn: (text: string, record: any) => {
    switch(record.source) {
      case 1:
        return <p>天目云</p>
      case 2:
        return <p>媒立方</p>
      default:
        return <p>本系统</p>
    }
  }
}, {
  title: '需求提交人',
  dataIndex: 'create_by',
  key: 'create_by',
  isTableColumn: true,
  isSearchOption: true,
}, {
  title: '需求创建时间',
  dataIndex: 'create_at',
  key: 'create_at',
  isTableColumn: true,
  isSearchOption: false,
}, {
  title: '需求状态',
  dataIndex: 'status',
  key: 'status',
  isTableColumn: true,
  isSearchOption: true,
  renderColumn: (text: string, record: any) => {
    switch(record.status) {
      case 1: 
        return <p>未分配</p>
      case 2:
        return <p>未开始</p>
      case 3:
        return <p>进行中</p>
      case 4:
        return <p>已完成</p>
      default:
        return <p>已拒绝</p>
    }   
  }
}]

export const tabList: Array<TabItem> = [{
    title: '网站',
    key: 'website'
  }, {
    title: '客户端',
    key: 'app'
  }, {
    title: '微信',
    key: 'weixin'
  }, {
    title: '微博',
    key: 'weibo'
  }, {
    title: '数字报',
    key: 'epaper'
  }, {
    title: '音频站点',
    key: 'audio'
  }, {
    title: '视频站点',
    key: 'video'
  }
]