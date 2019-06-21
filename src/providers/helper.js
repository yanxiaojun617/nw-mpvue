/**
 * util:业务无关的工具方法
 * helper:业务或框架有关的工具方法
 */

const alert = function (content = '', title = '') {
  mpvue.showModal({
    content: content,
    title: title,
    showCancel: false
  })
}

const pageTo = function (type) {
  return function (url, successFunc, failFunc, completeFunc) {
    if (!url) {
      alert('页面跳转url参数不能为空', '错误')
      return
    }
    let config = {
      url
    }
    successFunc && (config.success = successFunc)
    failFunc && (config.success = failFunc)
    completeFunc && (config.success = completeFunc)
    type === 'switchTab' && mpvue.switchTab(config)
    type === 'reLaunch' && mpvue.reLaunch(config)
    type === 'redirectTo' && mpvue.redirectTo(config)
    type === 'navigateTo' && mpvue.navigateTo(config)
  }
}

const helper = {
  alert,
  switchTab: pageTo('switchTab'),
  reLaunch: pageTo('reLaunch'),
  redirectTo: pageTo('redirectTo'),
  navigateTo: pageTo('navigateTo'),
  setStorageSync: mpvue.setStorageSync,
  getStorageSync: mpvue.getStorageSync,
  removeStorageSync: mpvue.removeStorageSync,
  clearStorageSync: mpvue.clearStorageSync
}
export default helper
