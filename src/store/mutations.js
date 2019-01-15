import Vue from 'vue'
import * as Types from './mutations-type';
const mutations = {
    [Types.ADD_CAR](state,params){
        let list = params.list
        Vue.set(list,'sele',true)
        // state.goodList.push(params.list)
        //判断购物车里有没有这个商品，有的话数量加1，没有数量等于1
        let haslist = state.goodList.find(item=>item.id === list.id)
        if(haslist){
            haslist.count+=1
            state.goodList = [...state.goodList]
        }else{
            list.count = 1
            state.goodList = [...state.goodList,list]
        }
        localStorage['list'] = JSON.stringify(state.goodList)
    },
    //商品删除事件
    [Types.REMOVE_GOODS](state,index){
        state.goodList.splice(index,1)
        localStorage['list'] = JSON.stringify(state.goodList)
    },
    //单选事件
    change(state,list){
        //找到点击的值
        let prod = state.goodList.find(item=>item.id === list.id)
        //改变点击这一项的值
        prod.sele = list.sele
        //手动修改state
        state.goodList = [...state.goodList]
    },
    checkall(state,val){
        state.goodList.forEach(item=>item.sele = val)
        state.goodList = [...state.goodList]
    },
    jianfa(state,index){
        let list = state.goodList[index]
        if(list.count < 2){
            return 
        }
        list.count--
        state.goodList = [...state.goodList]
    },
    jiafa(state,index){
        let list = state.goodList[index]
        list.count++
        state.goodList = [...state.goodList]
    }
}
export default mutations