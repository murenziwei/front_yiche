import Vue from 'vue';
import AMap from 'vue-amap';
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: '538ee8ab03854820da5663c9f587e914',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});
