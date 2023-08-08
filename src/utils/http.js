import axios from 'axios'
import { useUserStore } from "@/stores/userStore"
import router from "@/router"





// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  // 1. 从pinia获取token数据
  const userStore = useUserStore()
  // 2. 按照后端的要求拼接token数据

  const token = userStore.userInfo.token

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  // 1. 从pinia获取token数据
  const userStore = useUserStore()


  if (e.request.status == 401) {
    ElMessageBox.confirm(
      "登录状态已过期，您可以继续留在该页面，或者重新登录",
      "系统提示",
      {
        confirmButtonText: "重新登录",
        cancelButtonText: "取消",
        type: "warning",
      }
    ).then(() => {

      userStore.clearStore()
      router.push("/login")
    })
    return Promise.reject("无效的会话，或者会话已过期，请重新登录。")

  } else {
    return Promise.reject(e)
  }

})


export default httpInstance