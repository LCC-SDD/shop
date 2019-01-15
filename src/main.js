// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import VueLazyload from 'vue-lazyload'
import 'swiper/dist/css/swiper.css'
import message from './publin/index'

// Vue.use(VueLazyload,{
//   preLoad: 1.3,
//   error: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3016951800,1109997359&fm=26&gp=0.jpg',
//   loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543982406490&di=92701aa150af02c1d64c3f40f4397488&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0198c458ddfd88a801219c772c8902.gif',
//   attempt: 1
// })

Vue.use(message)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App)
})
