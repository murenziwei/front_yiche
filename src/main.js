// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './config/js/router'
import store from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './config/js/rem'
import './config/style/reset.css'
import './config/style/iconfont.css'
import vMessage from './components/msg/index'
import './view/apply/lw-map'
import Vant from 'vant'
import 'vant/lib/index.css'
import api from './config/js/api'
Vue.use(Vant);
// Vue.use(Vant)
Vue.config.productionTip = false;
Vue.use(vMessage);
Vue.use(VueAwesomeSwiper);

Vue.prototype.api = api
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
