<template>
  <div>
    <div>
      <img src="/static/images/personal/banner.png" alt="" class="banner">
      <div class="header">
        <img src="/static/images/personal/avatar.png" alt="">
        <div>龙晁至</div>
      </div>
    </div>
    <div class="list">
      <div class="item" @click="pageTo">
        <div class="left">
          <img src="/static/images/personal/info.png" alt="">
          <span>个人信息</span>
        </div>
        <img src="/static/images/personal/right.png" alt="" class="right">
      </div>
      <div class="item">
        <div class="left">
          <img src="/static/images/personal/lock.png" alt="">
          <span>修改密码</span>
        </div>
        <img src="/static/images/personal/right.png" alt="" class="right">
      </div>
      <div class="item">
        <div class="left">
          <img src="/static/images/personal/out.png" alt="">
          <span>退出登录</span>
        </div>
        <img src="/static/images/personal/right.png" alt="" class="right">
      </div>
    </div>
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
    switchProject() {
      console.log(1)
    },
    pageTo() {
      this.$helper.navigateTo('/pages/personal/personal-info/main?id=11')
    },
    test() {
      this.$http.get('/').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  display: block;
  width: 100%;
  height: 97px;
}

.header {
  position: absolute;
  left: 15px;
  right: 15px;
  top: 16px;
  height: 120px;
  background: #fff;
  border-radius: 5px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 6px;
  }
}

.list {
  margin: 60px 15px 15px;
  padding: 0 15px;
  font-size: 14px;
  background: #fff;
  border-radius: 5px;
  .item {
    &:active {
      background: #f2f3f5;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    img {
      width: 24px;
      height: 24px;
    }
    .left {
      display: flex;
      align-items: center;
      span {
        margin-left: 10px;
      }
    }
  }
  .item + .item {
    border-top: 1px solid #eee;
  }
}


</style>
