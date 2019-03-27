import * as React from 'react'
import { Input, Select } from 'antd'
import './index.less'

const Search = Input.Search
const Option = Select.Option

interface Props {
  options: Array<{
    readonly key: string,
    readonly title: string
  }>  
}

export default class SearchBox extends React.Component<Props, {}> {
  render() {
    const { options } = this.props
    return (
      <div className="search-box">
        <Select defaultValue={options[0].key}>
          {
            options.map(option => {
              const { key, title } = option
              return (<Option key={key} value={key}>{title}</Option>)
            })
          }
        </Select>
        <Search
          placeholder="请输入关键字搜索"
          enterButton
          onSearch={value => console.log(value)}
        />
      </div>
    )
  }
}