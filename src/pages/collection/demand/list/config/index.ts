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
  isSearchOption: true,
}, {
  title: '需求来源',
  dataIndex: 'source',
  key: 'source',
  isTableColumn: true,
  isSearchOption: true,
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