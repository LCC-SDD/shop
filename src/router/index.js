import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home', },
    { path: '/home', component: () => import('../components/home'), meta: { keepAlive: true } },
    { path: '/list', component: () => import('../components/list'), },
    { path: '/car', component: () => import('../components/car'), },
    { path: '/my', component: () => import('../components/my'), },
    { path: '/detail/:id', component: () => import('../components/detail'), name: 'detail' },
    { path: '/todoList', component: () => import('../components/todoList'), },
    { path: '/kaoshi', component: () => import('../components/kaoshi'), name: 'kaoshi'},
    // { path: '/vuexDemo',component: ()=>import('../components/vuexDemo')},
    // { path: '/vuexDemo2',component: ()=>import('../components/vuexDemo2')},
    { path: '/*', redirect: '/home', }
  ]
})
