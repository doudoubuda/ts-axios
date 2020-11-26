import { AxiosRequestConfig } from './types/index'


export default function xhr ( config: AxiosRequestConfig ): void {
  const { params=null, url, method="get"} = config

  const request = new XMLHttpRequest()
  request.open( method.toUpperCase(), url, true)  //async: true 异步
  request.send(params)
}

