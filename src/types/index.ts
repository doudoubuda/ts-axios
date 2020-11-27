// 公共类型定义文件

//字面量类型
export type Methods = 'get' | 'GET'
|'delete' | 'DELETE'
|'head' | 'HEAD'
|'options' | 'OPTIONS'
|'post' | 'POST'
|'put' | 'PUT'
|'patch' | 'PATCH'

export interface AxiosRequestConfig {
    url: string
    method?: Methods
    data?: any
    params?: any
    headers?: any
    responseType: XMLHttpRequestResponseType
}

// type XMLHttpRequestResponseType = '' || 'arrayBuffer' || 'blob' || 'documet' || 'json' || 'text'
export interface AxiosResponse {
    data: any
    status: number
    statusText: string
    headers: any
    config: AxiosRequestConfig
    request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {

}