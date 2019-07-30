/**
 * 全局数据
 */

const env = {
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production'
}

const config = {
  api: env.isDev ? 'https://www.yanxiaojun617.com/invoice/api/' : 'https://www.yanxiaojun617.com/invoice/api/',
  pageSize: 5
}

const userInfo = {
  userId: '',
  username: '',
  realName: ''
}

const globalData = {
  env,
  config,
  userInfo
}

export default globalData
