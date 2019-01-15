import model from './msg.vue'
const message = {
    //此对象上面应该有一个install的方法
}
// this.$message({msg:'',opt:300})
message.install = (Vue,option={delay:300})=>{
    Vue.prototype.$message = (msg,opt)=>{
        opt = {...option,...opt}
        //用传的参数覆盖默认参数
        let V = Vue.extend(model)
        //会构建一个基于model的实例
        let vm = new V()
        let el = document.createElement('div')
        vm.$mount(el)
        document.body.appendChild(vm.$el)
        this.msg = msg
    }
}
export default message