<style>
page {
  background-color: #f5f7f7;
}
</style>
<script>
import helper from '@/providers/helper'
import globalData from '@/providers/globalData'

export default {
  created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    // const token = helper.getStorageSync('token')
    // if (!token) {
    //   helper.reLaunch('./pages/login/main')
    //   return
    // }
    // globalData.token = token
  }
}
</script>
