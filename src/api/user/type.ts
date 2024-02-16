//登陆接口
export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token?: string
  message?: string
}

//登陆接口返回类型
export interface loginResponseData {
  code: number
  data: dataType
}

interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  button: string[]
  routes: string[]
  token: string
}

interface user {
  checkUser: userInfo
}

//服务器返回用户信息相关的数据类型
export interface userResponseData {
  code: number
  data: user
}