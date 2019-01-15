<template>
  <div class="box">
      vuexDemo
      <!-- <button class="btn" @click="addCount(10)">+</button> -->
      <button class="btn" @click="increase">+</button>
        <span>{{count}}</span>
      <button class="btn" @click="minus">-</button>
      {{$store.getters.countType}}
  </div>
</template>

<script>
import {mapState,mapGetters, mapMutations} from 'vuex'
import * as Types from '../store/mutations-type'
// console.log(Types.ADD_COUNT)
export default {
  name: 'vuexDemo',
  data () {
    return {

    }
  },
  components:{

  },
  computed:{
    //   ...mapState({
    //       count:state=>state.count
    //   }),
    ...mapState(['count']),
    ...mapGetters(['countType'])
  },
  methods:{
      //加
      //map方法
    //   ...mapMutations(['addCount']),
    ...mapMutations({
        increase:'ADD_COUNT',
        // increase:'addCount'
    }),

    //普通方法
    //   increase(){
    //       //只有一个参数提交到mutations方法里
    //     //   this.$store.commit('addCount')
    //     // 两个或过个参数
    //     this.$store.commit({
    //         type:'addCount',
    //         a:10,
    //         b:20
    //     })
    //   },
      //减
      minus(){
          this.$store.dispatch('minusDemo')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .box{
        text-align: center;
        button,span{
            display: inline-block;
            width: 100px;
            height: 30px;
            background: greenyellow;
            margin-top: 50px;
            outline: none;
            border: none;
        }
    }
</style>
