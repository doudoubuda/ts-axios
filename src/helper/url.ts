import {isDate,isObject} from './util'

// 处理特殊字符
function encode(val: string): string {
    return encodeURIComponent(val)
        .replace(/%40/g, '@')
        .replace(/%3A/ig, ':')
        .replace(/%24/g, '$')
        .replace(/%20/g, '+')
        .replace(/%5B/ig, '[')
        .replace(/%5D/ig, ']')
}
export function buildURL(url: string, params?: any): string {
    if(!params) {
        return url
    }
    
    let part: string[] = []
    Object.keys(params).forEach( (key, index) => {
        let val = params[key]
        //若值为null或undefined，则直接返回
        if( val === null || typeof val === 'undefined') {
            return
        }

        let values = []
        if(Array.isArray(val)){
            values = val
            key += '[]'
        }else {
            values = [val]
        }

        values.forEach( (item, index) => {
            if( isDate(item)) {
                val = item.toISOString()
            }else if ( isObject(item)) {
                val = JSON.stringify(item)
            }
            part.push(`${encode(key)}=${encode(val)}`)
        })
    })
    let serializedParams =  part.join('&')

    if(serializedParams) {
        //去掉hash
        let hashIndex = url.indexOf('hash')
        if(hashIndex != -1) {
            url = url.slice(0, hashIndex)
        }
        //判断url本身是否存在参数
        url += (url.indexOf('?')===-1 ? "?" : '&') + serializedParams
    }

    return url
}