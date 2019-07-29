<template>
  <div>
    <van-cell-group>
      <van-field
        :value="username"
        @change="changeVanFiledValue('username',$event.mp.detail)"
        :error-message="usernameErrorMessage"
        placeholder="请输入用户名"
        label="用户名"
        left-icon="contact"
        clearable
      />
      <van-field
        v-model="password"
        @change="changeVanFiledValue('password',$event.mp.detail)"
        :error-message="passwordErrorMessage"
        placeholder="请输入密码"
        label="密码"
        password
        left-icon="peer-pay"
        clearable
      />
    </van-cell-group>
    <div class="margin">
      <van-button type="primary" block :loading="loading" :disabled="loading" @click="login">登 陆</van-button>
    </div>
  </div>
</template>

<script>
import md5 from 'js-md5'

export default {
  data () {
    return {
      loading: false,
      username: 'test',
      password: '123456',
      usernameErrorMessage: '',
      passwordErrorMessage: '',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },
  methods: {
    changeVanFiledValue (filed, value) {
      this[filed] = value
    },
    validationData () {
      this.usernameErrorMessage = this.username ? '' : '请输入用户名'
      this.passwordErrorMessage = this.password ? '' : '请输入密码'
      return this.username && this.password
    },
    login () {
      if (this.validationData()) {
        this.loading = true
        this.$http.post('/v1/login', {
          'client_id': 'app',
          username: this.username,
          password: md5(this.password)
        }).then(res => {
          this.loginSuccess(res.data)
          this.loading = false
        }).catch(err => {
          console.log(err)
          this.loading = false
        })
      }
    },
    loginSuccess (token) {
      this.$globalData.username = 'test'
      this.$globalData.realName = '闫小军'
      this.$globalData.token = token
      this.$helper.setStorageSync('token', token)
      this.$helper.switchTab('../home/main')
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
