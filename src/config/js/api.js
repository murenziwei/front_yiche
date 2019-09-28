import axios from 'axios'
import Vue from 'vue'
import router from './router'


const apiHttp = 'https://ydl.edinmed.cn/api';

function request(url, method, data = {}, query) {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: apiHttp + url,
      data: data,
      params: query,
    }).then(res => {
      if (res.data.code == 401) {
        Vue.prototype.$message.info(res.data.msg)
        router.replace('login')
      } else if (res.data.code == 0 || res.data.code == 403 || res.data.code == 402) {
        Vue.prototype.$message.info(res.data.msg)
        reject(res.data)
      } else {
        resolve(res.data)
      }
    }).catch(err => {
      Vue.prototype.$message.info(err.msg)
    })
  })
}

export default {
  get(url, data, query) {
    return request(url, 'GET', data, query)
  },
  post(url, data) {
    return request(url, 'POST', data)
  }
}

