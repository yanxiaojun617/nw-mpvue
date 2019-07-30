/**
 * http
 */
import globalData from '@/providers/globalData'
import helper from '@/providers/helper'

const httpUtils = {
  buildURLParams: (url, data) => {
    if (!data || JSON.stringify(data) === '{}' || Array.isArray(data)) {
      return url
    }
    let arr = []
    for (let i in data) {
      arr.push(i + '=' + encodeURIComponent(data[i]))
    }
    let str = arr.join('&')
    return url + (url.lastIndexOf('?') === -1 ? '?' : '&') + str
  },
  useBaseApi: url => { // 使用默认api
    const hasApi = url.indexOf('http') !== -1
    return hasApi ? url : globalData.config.api + url
  },
  formatterURL: url => { // 把url中的双斜杠替换为单斜杠
    let index = 0
    if (url.startsWith('http')) {
      index = 7
    }
    return url.substring(0, index) + url.substring(index).replace(/\/\/*/g, '/')
  }
}

const request = function (url, data = {}, method = 'POST', config = {}) {
  mpvue.showNavigationBarLoading()
  return new Promise((resolve, reject) => {
    mpvue.request({
      url: httpUtils.formatterURL(httpUtils.useBaseApi(url)),
      method: method,
      data: data,
      dataType: 'json',
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          reject(res)
          // alert('message')
        }
      },
      fail: (err) => {
        reject(err)
        helper.getNetworkType().then(res => {
          res === 'none' ? helper.alert('请连接网络') : helper.alert('请求失败')
        })
      },
      complete: (res) => {
        mpvue.hideNavigationBarLoading()
      },
      ...config
    })
  })
}

const get = function (url, data) {
  url = httpUtils.buildURLParams(url, data)
  const header = Object.assign({
    'Content-Type': 'application/json; charset=UTF-8'
    // 'Authorization': 'Bearer ' + globalData.accessToken
  })
  return request(url, {}, 'GET', {header})
}

const post = (url, data) => {
  const header = Object.assign({
    'Content-Type': 'application/json; charset=UTF-8'
    // 'Authorization': 'Bearer ' + globalData.accessToken
  })
  return request(url, data, 'POST', {header})
}

const postFormData = (url, data) => {
  const header = Object.assign({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    // 'Authorization': 'Bearer ' + globalData.accessToken
  })
  return request(url, data, 'POST', {header})
}

const http = {
  get,
  post,
  postFormData,
  request
}
export default http
