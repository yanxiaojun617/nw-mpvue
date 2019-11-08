<template>
  <div>

    <div class="echarts-wrap">
      <mpvue-echarts :echarts="echarts" :onInit="onInit" canvasId="demo-canvas"/>
    </div>

    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <van-row>
      <van-col span="10">
        <van-field title-width="44px" label="姓名：" value="闫小军" readonly/>
      </van-col>
      <van-col span="14" @click="show=true">
        <van-field title-width="44px" label="日期：" :value="dateTimeStr" right-icon="calender-o" readonly/>
      </van-col>
    </van-row>
    <van-popup position='bottom' :show="show">
      <van-datetime-picker :value="dateTime" :maxDate="maxDate" type="year-month" @cancel="show=false"
                           @confirm="confirmDate"/>
    </van-popup>


    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover"/>
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover"/>

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model"/>
      <input type="text" class="form-control" v-model="motto" placeholder="v-model"/>
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy"/>
    </form>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
      <div class="left">
      </div>
      <div class="right">
      </div>
    </div>

    <div class="row">
      <div class="left">left</div>
      <div>right</div>
    </div>

  </div>
</template>

<script>
import echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'
import card from '@/components/card'

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  })
  canvas.setChart(chart)
  var option = {
    backgroundColor: '#fff',
    color: ['#37A2DA', '#67E0E3'],

    legend: {
      data: ['A', 'B']
    },
    grid: {
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [{
      name: 'A',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33]
    }, {
      name: 'B',
      type: 'line',
      smooth: true,
      data: [12, 50, 51, 35, 70, 30, 20]
    }]
  }
  chart.setOption(option)
  return chart
}

export default {
  components: {
    mpvueEcharts,
    card
  },
  computed: {
    dateTimeStr: function () {
      let year = new Date(this.dateTime).getFullYear()
      let month = new Date(this.dateTime).getMonth() + 1
      return ` ${year}年${month}月`
    }
  },
  data() {
    return {
      echarts,
      onInit: initChart,
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
    confirmDate(target) {
      this.dateTime = target.mp.detail
      this.show = false
    },
    bindViewTap() {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({url})
      } else {
        mpvue.navigateTo({url})
      }
    },
    clickHandle(ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created() {
    // let app = getApp()
  }
}
</script>

<style scoped lang='scss'>
.echarts-wrap {
  width: 400px;
  height: 400px;
  background: #aaaaaa;
}

.row {
  display: flex;
  background: gold;

  .left {
    background: aqua;
  }

  & > div {
    width: 100%;
    height: 50px;
  }
}

.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128px;
  height: 128px;
  margin: 20px;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}

.all:after {
  display: block;
  content: '';
  clear: both;
}

.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
