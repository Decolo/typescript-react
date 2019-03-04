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
  url: string
}

interface Fetch {
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

export type Data = {
  code: number,
  msg: string,
  data: any
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
    if (!res.data) {
      return Promise.reject(false)
    }

    const data: Data = res.data
    const { code } = data
    
    if (code === -6) {
      // 身份过期
      localStorage.clear()
      window.location.href = '/dataManagement/login'
      return false
    } else if (code === -9 || code === -1 || code === -2 || code === 0) {
      return data
    } else if (data.code === 1) {
      return data.data
    } else {
      return Promise.reject(res)
    }
  }).catch(err => {
    if (err instanceof Error) {
      message.error('发生错误,请检查网络设置或联系技术人员');
    } else {
      if (err.data.msg === 'cant dele site') {
        message.error('删除失败，您删除的站点正在被采集点使用，请先确定没有采集点使用此站点后再次尝试');
      } else {
        message.error(err.data.msg)
      }
    }
    return Promise.reject(err)
  })
}

export default fetch
