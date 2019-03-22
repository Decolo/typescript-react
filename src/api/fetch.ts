import qs from 'qs'
import axios from 'axios'
import { message } from 'antd'
import { APIBaseUrl } from './api'
interface Options {
  headers ? : {}
  data: {
    info: string
  },
  method: string,
  url: string,
  handleError?: (data: Data) => void
}
interface Fetch  {
  (options: Options): Promise<{}>
}
interface Params {
  url: string
  headers? : {};
  baseURL: string;
  data?: {
    timestamp: string;
    token: string;
    account: string;
    [propName: string]: any
  } | string
  params?: {}
}
export interface Data  {
  code: number,
  msg: string,
  data?: any,
  result?: any
}

const fetch:Fetch = options => {
  const token = localStorage.getItem('token') || ''
  const account = localStorage.getItem('account') || ''
  const timestamp = localStorage.getItem('timestamp') || ''
  const params: Params = {
    baseURL: APIBaseUrl,
    ...options,
    data: {
      ...options.data,
      timestamp,
      token,
      account
    }
  }
  const { method } = options
  
  switch(method.toUpperCase()) {
    case 'GET': 
      params.params = params.data
      delete params.data
      break
    case 'DOWNLOAD':
      params.data = qs.stringify(params.data)
      window.open(`${params.url}?${params.data}`)
      return Promise.resolve(false)
    default:
      params.data = qs.stringify(params.data)
  }
    
  return axios(params).then(res => {
    const { status } = res
    if (status == 200 || status == 302) {
      const data: Data = res.data  
      const { code } = data
      if (code === 1 || code === 200) {
        return data.data || data
      } else if (code === -6) {
        setTimeout(() => {
          window.location.assign('/dataManagement/login')
        }, 2000)
      }
    }
    return Promise.reject(res)
  }).catch(err => {
    if (err instanceof Error) {
      message.error('请联系相关开发人员')
    } else {
      const data: Data | string | undefined = err.data
      const { handleError } = options
      if (data) {
        if (typeof data === 'string') {
          message.error(data)
        } else {
          if (handleError) {
            handleError(data)
          }
          message.error(data.msg)
        }
      } else {
        message.error(err.statusText)
      }
    }
    
    return Promise.reject(err)
  })
}

export default fetch
