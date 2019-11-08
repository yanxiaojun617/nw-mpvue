<template>
  <div>
    <img src="/static/images/home/banner.png" alt="" class="banner">
    <div class="project-name" @click="switchProject">
      <div>试点建设项目1</div>
      <img src="/static/images/home/down.png" alt="">
    </div>
    <div class="project-total">
      <div>
        <div class="count">70</div>
        <div>
          <img src="/static/images/home/person-small.png" alt="">总人数
        </div>
      </div>
      <div class="right">
        <div class="count">50</div>
        <div>
          <img src="/static/images/home/calendar-small.png" alt="">今日出勤人数
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="row">
        <div @click="pageTo()">
          <img src="/static/images/home/idcard-checked.png" alt="">
          <div>实名认证</div>
        </div>
        <div @click="pageTo()">
          <img src="/static/images/home/scan.png" alt="">
          <div>扫一扫</div>
        </div>
        <div @click="pageTo()">
          <img src="/static/images/home/idcard.png" alt="">
          <div>人员信息</div>
        </div>
      </div>
      <div class="row">
        <div @click="pageTo()">
          <img src="/static/images/home/calendar.png" alt="">
          <div>出勤记录</div>
        </div>
        <div @click="pageTo()">
          <img src="/static/images/home/warn.png" alt="">
          <div>违章扣分</div>
        </div>
        <div @click="pageTo('/pages/personal/main')">
          <img src="/static/images/home/person.png" alt="">
          <div>个人中心</div>
        </div>
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
    pageTo(pageUrl) {
      this.$helper.navigateTo(pageUrl)
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
  height: 140px;
}

.project-name {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 16px;
  color: #fff;
  display: flex;
  width: 100%;
  align-items: center;
  > img {
    margin-left: 4px;
    width: 24px;
    height: 24px;
  }
}

.project-total {
  position: absolute;
  left: 15px;
  right: 15px;
  height: 100px;
  background: #fff;
  margin-top: -50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  > div {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    img {
      width: 16px;
      height: 16px;
      vertical-align: bottom;
      margin-right: 2px;
    }
    .count {
      font-size: 24px;
      margin-bottom: 6px;
    }
  }
  .right {
    border-left: 1px solid #eee;
  }
}

.menu {
  margin-top: 65px;
  .row {
    margin: 15px 0;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    > div {
      &:active {
        background: #f2f3f5;
      }
      width: 105px;
      height: 105px;
      border-radius: 5px;
      background: #fff;
      font-size: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        margin-bottom: 6px;
      }
    }
  }
}

</style>
