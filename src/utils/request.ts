/* eslint-disable @typescript-eslint/no-unused-vars */
//封装axios，请求和响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'
import useuserStore from '@/store/modules/user'
//创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, //基础路径上会携带的/api
  timeout: 5000, //超时时间设置
})

//将request实例添加请求拦截器
request.interceptors.request.use((config) => {
  const userStore = useuserStore()
  if (userStore.token) {
    config.headers.token = userStore.token
  }

  return config
})
//响应拦截器
request.interceptors.response.use(
  (response) => {
    //成功的回调
    return response.data
  },
  (error) => {
    //失败回调处理http网络错误
    //定义变量
    let message = ''
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器错误'
        break
      default:
        message = '网络错误'
        break
    }
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)
export default request
