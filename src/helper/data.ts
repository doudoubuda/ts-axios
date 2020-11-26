import { isObject } from './util'

export function tranformRequest (data: any): any {
    if(isObject(data)){
        return JSON.stringify(data)
    }
    return data
}