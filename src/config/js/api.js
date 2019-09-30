import axios from 'axios'
import Vue from 'vue'
import router from './router'

const apiHttp = 'http://yiche.edinmed.cn/api';

axios.interceptors.request.use(config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie

    config.headers = {
      'access_token': localStorage.getItem('token') || '',
      'resource': 1
    };
    return config;
  }, err => {
    console.log(err)
  }
);


axios.interceptors.response.use(response => {
    return response;
  }, err => {
    console.log(err)
  }
);

function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: apiHttp + url,
      data: data
    }).then(res => {
      if (res.data.code === 401) {
        /*token过期*/
        Vue.prototype.$message.info(res.data.msg);
        localStorage.removeItem('token');
        router.replace('login')
      } else if (res.data.code === 0) {
        Vue.prototype.$message.info(res.data.msg)
        resolve(res.data)
      } else if (res.data.code === 203) {
        /*被顶下线*/
        Vue.prototype.$message.info(res.data.msg);
        localStorage.removeItem('token');
        router.replace('login')
      } else if (res.data.code === 204) {
        /*没有绑定手机号*/
        Vue.prototype.$message.info(res.data.msg);
        router.replace('binding')
      } else {
        resolve(res.data)
      }
    }).catch(err => {
      Vue.prototype.$message.info(err.msg)
    })
  })
}

function get(url, data) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: apiHttp + url,
      params: data
    }).then(res => {
      if (res.data.code === 401) {
        /*token过期*/
        Vue.prototype.$message.info(res.data.msg);
        localStorage.removeItem('token');
        router.replace('login')
      } else if (res.data.code === 0) {
        Vue.prototype.$message.info(res.data.msg)
        reject(res.data)
      } else if (res.data.code === 203) {
        /*被顶下线*/
        Vue.prototype.$message.info(res.data.msg);
        localStorage.removeItem('token');
        router.replace('login')
      } else if (res.data.code === 204) {
        /*没有绑定手机号*/
        Vue.prototype.$message.info(res.data.msg);
        router.replace('binding')
      } else {
        resolve(res.data)
      }
    }).catch(err => {
      Vue.prototype.$message.info(err.msg)
    })
  })
}

function upload(url,file){

  return new Promise((resolve, reject) => {

    let param = new FormData(); //创建form对象
    param.append('images',file);//添加form表单中其他数据
    let config = {
      headers:{'Content-Type':'multipart/form-data'}
    };  //添加请求头
    axios.post((apiHttp + url),param,config)
      .then(res=>{
        if(res.status==200){
          resolve(res.data);
        }else{
          reject(res)
        }
      })
  })
}
export default {
  get(url, data) {
    return get(url, data)
  },
  post(url, data) {
    return post(url, data)
  },
  upload
}

