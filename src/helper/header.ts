
import { isObject } from './util'

function normalizeHeaderName (headers: any, normalizeName: string): void{
  if ( !headers ){
      return
  }
  Object.keys(headers).forEach( (name)=> {
      if(name!= normalizeName && name.toUpperCase() == normalizeName.toUpperCase()) {
        headers[normalizeName] =  headers[name] 
        delete headers[name]
      }
  })
}

export function processHeaders (headers: any, data: any): any {
    normalizeHeaderName(headers, 'Content-Type')
    if (isObject(headers)) {
        if(headers && !headers['Content-Type']){
            headers['headers'] = 'application/json;charset=utf-8'
        }
    }

    return headers
}

//处理响应数据里面的header string -> object
export function parseResponseHeaders (header: string): any {
    let parsed = Object.create(null)
    if (!header) {
        return parsed
    }
    
    header.split('\r\n').forEach(line => {
        let [key, val] = line.split(':')
        key = key.trim().toLowerCase()
        if( !key) {
            return
        }
        if(val) {
            val = val.trim()
        }
        parsed[key] = val
    });

    return parsed
}