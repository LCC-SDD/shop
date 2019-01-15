import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)
const state = {
    goodList:[],
}
if(localStorage&&localStorage['list']){
     state.goodList= JSON.parse(localStorage['list'])
}
export default new Vuex.Store({
    // strict: true,
    state,
    actions,
    mutations,
    getters,
    modules:{
        user
    }
    // plugins:[createLogger()]
})