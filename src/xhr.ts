import { AxiosRequestConfig } from './types/index'


export default function xhr ( config: AxiosRequestConfig ): void {
  const { params=null, url, methods="get"} = config

  const request = new XMLHttpRequest()
  request.open( methods.toUpperCase(), url, true)  //async: true 异步
  request.send(params)
}

