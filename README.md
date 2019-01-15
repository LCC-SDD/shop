# vue_shop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

#目录结构
    .mock    放数据的
    .src  
        .api      放所有请求
        .assets   静态文件
        .components   放页面级组件 
        .router     路由
        .base     放公用组件
        .vuex/store  放vuex
组件引入步骤
    1.引入
    2.注册
    3.标签形式使用
使用less
    npm install less less-loader
使用sass
    npm install node-sass
    npm install sass-loader
路由激活样式
    router-link-exact-active
    router-link-active
通过solt插槽来解决头部显示问题
通过props传值控制返回箭头是否显示
ajax请求使用axios
    npm install axios -s
    是基于promise封装的
export会把当前模块的变量放在一个默认对象里导出
* as T 把变量都放在一个有命名(T)对象里  as后面是对象名字   *表示所有对象
import * as T  from '../api'
T.getBanner()

路由需要传参的要有name

redirect  重定向

ref 获取原生dom/获取子组件

js节流和防抖  _.debounce  _.throttle  

keep-alive  

路由传值的方法
1.params   http://localhost:8080/#/detail/4
2.query    http://localhost:8080/#/detail/?id=4

vuex
vue 组件  通过dispatch  提交到 actions   actions通过 commit 触发 mutations
mutations 负责修改state所有的组件就可以拿到state  进行渲染了
actions  是异步的
mutations 是同步的
如果是同步的话可以直接用store.commit提交到mutations
只有mutations能够修改state的状态
getters 是vuex的计算属性  计算state相关的值   相当于组件的computed
dispatch或commit 一个参数的时候可以直接传递
多个参数可以用对象传递
mapState,mapGetters,mapMutations,mapActions 辅助工具函数
actions  需要注意的点
    需要把commit通过结构赋值得到  通过commit找打mutations里的方法


辅助函数运用时候的特点
值：mapState mapGetters 放在computed里面
函数：mapActions mapMutations 放在methods里面
有命名空间的mapState的时候  可以传递模块名‘’‘’‘’‘’‘’‘
没有命名空间的不能传递模块名

没有命名空间的action和 mutatiosn会注册在全局上
有命名空间的在自己模块上

如果创建的模块(module/user)里没有namespaced: true,  然后模块的...mapState里
...mapState({
          username:state=>state.user.username
      }),

如果创建的模块(module/user)里有namespaced: true,  然后模块的...mapState里要传入
...mapState('user',{
          username:state=>state.username
      }),


logger插件

vuex拆分流程
    默认导出  export default
    引入      用import引入
    挂载      放在Vuex.store实例对象上

辅助工具类  所有通过辅助函数拿到的，无论是值还是方法，都会挂载在实例(this)上

mapNutations和mapActions 会把他们里面的方法直接映射得到实例上面（this） 
可以通过this.methods直接调用
mapMutations = {
    add(state){
        //执行逻辑
    }
}
import {mapMutations} from 'vuex'
组件里面调用 this.add()

vuex书写编辑流程
    1.先定义事件 mutations-types
    2.触发事件

vuex表单
    如果是双向绑定的值使用vuex，一般通过设置值的get和set，或者用监听事件的形式来实现

localStorage 
sessionStorage 