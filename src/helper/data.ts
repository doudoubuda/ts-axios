import { isObject } from './util'

export function tranformRequest (data: any): any {
    if(isObject(data)){
        return JSON.stringify(data)
    }
    return data
}

export function tranformResponse(data: any): any {
    if (typeof data == "string") {
        try {
            data = JSON.parse(data)
        }catch (e) {
            // do nothing
        }
    }

    return data
}