import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types/index'
import xhr from './xhr'
import { buildURL } from './helper/url'
import { tranformRequest, tranformResponse } from './helper/data'
import { processHeaders } from './helper/header'

export default function axios ( config: AxiosRequestConfig ): AxiosPromise {
  processConfig(config)
  return xhr(config).then((res) => {
    return tranformResponseData(res)
  })
}

//处理url
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformRequestHeader(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params} = config
  return buildURL(url, params)
}

// 处理body
function transformRequestData (config: AxiosRequestConfig): any {
  return tranformRequest(config.data)
}

//处理headers
function transformRequestHeader (config: AxiosRequestConfig): any {
  const { headers= {}, data } = config
  return processHeaders(headers, data)
}

//处理data 变成对象
function tranformResponseData (res: AxiosResponse): AxiosResponse {
  res.data = tranformResponse(res.data)
  return res
}










