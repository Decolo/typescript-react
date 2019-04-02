import { Action } from 'redux'

export interface ContainerProps {
  dispatch: (action: Action) => void
}

export interface Action {
  type: string,
  payload?: any 
}

export interface ConfigItem {
  title: string,
  dataIndex: string,
  key: string,
  isTableColumn: boolean,
  isSearchOption: boolean,
  formRules?: Array<any>,
  renderColumn?: (text: string, record: any) => any
}

export interface ColumnItem{
  title: string,
  dataIndex: string,
  key: string,
  render?: (text: string, record: any) => any
}

export interface TabItem {
  title: string,
  key: string
}