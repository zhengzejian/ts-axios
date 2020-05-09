// import {AxiosRequestConfig,AxiosPromise, AxiosResponse} from './types/index'
// import xhr from './core/xhr'
// import {buildURL} from './helpers/url'
// import {transformRequest, transformResponse} from './helpers/data'
// import {precessHeaders} from './helpers/headers'

// function axios(config: AxiosRequestConfig): AxiosPromise {
//     processConfig(config)
//     return xhr(config).then(res => {
//         return transformResponseData(res)
//     })
// }

// function processConfig(config: AxiosRequestConfig): void {
//     config.headers = transformHeaders(config)
//     config.url = transformURL(config)
//     config.data = transformRequestData(config)
// }

// function transformURL(config: AxiosRequestConfig): string{
//     const {url, params} = config
//     return buildURL(url,params)
// }

// function  transformRequestData(config: AxiosRequestConfig): any {
//     return transformRequest(config.data)
// }

// function transformHeaders(config:AxiosRequestConfig): any {
//     const {headers = {},data} = config
//     return precessHeaders(headers,data)
// }

// function transformResponseData(res:AxiosResponse): AxiosResponse {
//     res.data = transformResponse(res.data)
//     return res
// }

// export default axios

import axios from './axios'

// 暴露给 example 文件使用
export * from './types'

export default axios
