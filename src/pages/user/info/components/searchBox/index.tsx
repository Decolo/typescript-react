import * as React from 'react'
import { Input, Select } from 'antd'
import { configList } from '../../configs'

const Search = Input.Search
const Option = Select.Option
const options = configList.filter(config => config.isSearchOption)

export default class SearchBox extends React.Component<{}, {}> {
  render() {
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