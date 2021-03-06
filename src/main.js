import Vue from 'vue'
import App from './App'
import utils from '@/providers/utils'
import http from '@/providers/http'
import helper from '@/providers/helper'
import globalData from '@/providers/globalData'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^van-/]
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

Vue.prototype.$utils = utils
Vue.prototype.$http = http
Vue.prototype.$helper = helper
Vue.prototype.$globalData = globalData
