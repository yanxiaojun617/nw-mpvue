<template>
  <div>home
    <button @click="test()">测试</button>
  </div>
</template>

<script>
import http from '@/providers/http'

export default {
  data () {
    return {
      show: false,
      dateTime: new Date().getTime(),
      maxDate: new Date().getTime(),
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },
  methods: {
    test () {
      http.get('/').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
