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
    methods?: Methods
    data?: any
    params?: any
}