const getters = {
    checkall(state){
        //已经选中的商品的数量等于所有商品的数量
        //已经选中的商品放到hahsel数组里
        let hahsel = state.goodList.filter(item=>item.sele === true)
        let checkval =  hahsel.length === state.goodList.length
        return checkval

        //every
        // return state.goodList.every(item=>item.sele === true)
        //some
        // return state.goodList.some(item=>item.sele === false)
    },
    allCount(state){
        let Count = state.goodList.filter(item=>item.sele === true)
        return Count.reduce((prev,next)=>
            prev+next.count,0
        )
    },
    totalPrice(state){
        return state.goodList.filter(item=>item.sele === true)
        .reduce((prev,next)=>prev+next.count*next.price,0)
    }
}
export default getters