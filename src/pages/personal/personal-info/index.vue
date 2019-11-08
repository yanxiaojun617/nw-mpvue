<template>
  <div>
    <van-tabs v-model="active" color="#333" nav-class="van-tabs-nav">
      <van-tab title="个人信息">
        <van-cell-group>
          <van-field
            :value="form.realname"
            label="姓名"
            placeholder="请输入姓名"
          />
          <van-field
            :value="form.phone"
            label="手机号码"
            placeholder="请输入手机号码"
            type="number"
            maxlength="11"
          />
        </van-cell-group>
      </van-tab>
      <van-tab title="岗位信息 2">内容 2</van-tab>
    </van-tabs>

    <van-popup
      :show="showPopup"
      position='bottom'
      close-on-click-overlay
    >
      asdf 的萨芬<br>
      asdf 的萨芬<br>
      asdf 的萨芬<br>
      asdf 的萨芬<br>
    </van-popup>
    <van-button type="primary" @click="test1">默认按钮</van-button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: 1,
      showPopup: false,
      form: {
        realname: '',
        phone: '18688498342'
      }
    }
  },
  mounted() {
  },
  methods: {
    test1() {
      console.log(this.$root.$mp)
      console.log(this.$helper.getPageQuery())
      this.showPopup = true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>


<!--用于覆盖组件样式，不能添加scoped-->
<style>
.van-tabs-nav {
  background-color: #f5f7f7;
}
</style>
