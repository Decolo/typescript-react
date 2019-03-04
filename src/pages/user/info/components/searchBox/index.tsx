import * as React from 'react'
import { Input, Select } from 'antd'
// import { configList } from '../../containers'

const Search = Input.Search
// const Option = Select.Option
// const options = configList.filter(item => item.isSearchOption)

export default class SearchBox extends React.Component<{}, {}> {
  render() {
    return (
      <div className="search-box">
        {/* <Select defaultValue={options[0].key}>
          {
            options.filter(item => {
              const { key, title } = item
              return (<Option value={key}>{title}</Option>)
            })
          }
        </Select> */}
        <Search
          placeholder="请输入关键字搜索"
          enterButton
          onSearch={value => console.log(value)}
        />
      </div>
    )
  }
}