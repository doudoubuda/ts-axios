import { AxiosRequestConfig, AxiosPromise, AxiosResponse} from './types/index'
import { resolve } from 'path';
import { parseResponseHeaders } from './helper/header'

export default function xhr ( config: AxiosRequestConfig ): AxiosPromise {
  
  return new Promise( (resolve) => {
    const { data=null, url, method="get", headers, responseType} = config

    const request = new XMLHttpRequest()
    if(responseType) {
      request.responseType = responseType
    }
    request.open( method.toUpperCase(), url, true)  //async: true 异步
    //处理返回的数据
    request.onreadystatechange = function handleLoad (){
      if( request.readyState != 4) {
        return
      }
      const responseHeaders =parseResponseHeaders( request.getAllResponseHeaders())
      const resposeData = responseType == 'text' ? request.responseText : request.response
      const response: AxiosResponse =  {
        data: resposeData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      resolve(response)
    }
    //设置header
    Object.keys(headers).forEach( (name)=> {
      if(data == null && name.toLowerCase() == 'content-type') {
        delete headers[name]
      }else {
        request.setRequestHeader(name, headers[name])
      }
    })
  
    request.send(data)
  })
}

