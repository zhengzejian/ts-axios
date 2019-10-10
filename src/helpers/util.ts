const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
    return toString.call(val) === '[object Date]'
}
//判断是否为对象
export function isObject(val: any): val is Object{
    return val !== null && typeof val === 'object'
}
//判断是否为普通对象
export function isPlainObject(val: any): val is Object {
    return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T,from: U): T & U {
    for (const key in from) {
        ;(to as T & U)[key] = from[key] as any
    }
    return to as T & U
}