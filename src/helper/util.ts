
const toString = Object.prototype.toString

//判断是不是Date类型
export function isDate (val: any): val is Date {
    return toString.call(val) == '[object Date]'
}

//判断是不是对象类型
export function isObject (val: any): val is Object {
    return toString.call(val) == '[object object]'
}