<template>
  <div class="menu">
    <div>
      <img src="/static/images/people/statistics.png" alt="">
      <div>人员信息统计</div>
    </div>
    <div>
      <img src="/static/images/people/query.png" alt="">
      <div>人员信息查询</div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      show: false
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

<style lang="scss" scoped>
.menu {
  &:active {
    background: #f2f3f5;
  }
  margin-top: 24px;
  display: flex;
  justify-content: space-evenly;
  > div {
    width: 160px;
    height: 160px;
    background: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      margin-bottom: 5px;
    }
  }
}


</style>
