import { Action } from 'redux'
export interface ContainerProps {
  dispatch: (action: Action) => void
}

export interface Action {
  type: string,
  payload?: any 
}