/**
 * 全局数据
 */
const globalData = {
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
  userId: '',
  username: '',
  realName: ''
}

export default globalData
