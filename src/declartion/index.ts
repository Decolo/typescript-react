import { Action } from 'redux'
export interface ContainerProps {
  dispatch: (action: Action) => void
}

export interface Action {
  type: string,
  payload?: any 
}

export interface configItem {
  title: string,
  dataIndex: string,
  key: string,
  isTableColumn: boolean,
  isSearchOption: boolean,
  formRules?: Array<any>
}

export interface tabItem {
  title: string,
  key: string
}