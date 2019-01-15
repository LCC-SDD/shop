<template>
  <div class="box">
      <div>{{$store.state.user.username}}</div>
      <div>模板：{{username}}</div>
      <button @click="updates('呵呵')">修改用户名</button>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import * as Types from '../store/module/mutations-type'
export default {
  name: 'vuexDemo',
  data () {
    return {

    }
  },
  components:{

  },
  computed:{
    //   ...mapState('user',['username'])

      ...mapState('user',{
          username:state=>state.username
      }),

    //   ...mapState({
    //       username:state=>state.user.username
    //   })
   

  },
  methods:{
    ...mapMutations({
      updates:'user/ADD_UPDATE'
    })
    //    updates(){
    //     this.$store.commit('user/updataes','呵呵')
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
   
</style>
