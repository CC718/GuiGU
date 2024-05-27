// 登录接口需要携带参数ts类型
export interface loginForm {
   username: string,
   password: string
}

//服务器返回的数据的类型
interface dataType {
   toke: string
}

export interface loginResponseData {
   code: number,
   data: dataType
}
// 定义服务器返回用户信息相关的数据类型
interface userInfo {
   checkUser: {
      userId: number,
      avatar: string,
      username: string,
      password: string,
      desc: string,
      roles: string[],
      buttons: string[],
      routes: string[],
      token: string,
   }
}
export interface userInfoReponseData {
   code: number,
   data: userInfo
}