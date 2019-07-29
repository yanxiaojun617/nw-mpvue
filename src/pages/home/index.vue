<template>
  <div>home
    <button @click="test()">测试</button>
  </div>
</template>

<script>

export default {
  data() {
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
  created() {
  },
  methods: {
    test() {
      this.$http.get('/').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
