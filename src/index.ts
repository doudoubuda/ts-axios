import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
import { buildURL } from './helper/url'

export default function axios ( config: AxiosRequestConfig ): void {
  processConfig(config)
  xhr(config)
}

//处理url
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params} = config
  return buildURL(url, params)
}


