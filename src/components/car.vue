<template>
  <div class="box">
    <Header :showArrow=true>购物车</Header>
    <div class="bodybox"  v-if="goodList.length">
      <table>
        <thead>
          <tr>
            <th class="forever">全选：
                <input type="checkbox" class="check" v-model="checkallA">
            </th>
            <th></th>
            <th>商品名称</th>
            <th>商品单价</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <!-- {{$store.state.goodList}} -->
        <tbody>
          <tr v-for="(items,index) in goodList" :key="index">
            <label for="check">
              <input type="checkbox" class="chec" @change="changeone(items)" v-model="items.sele">
            </label>
            <td>
              {{index+1}}
            </td>
            <td>
              {{items.name}}
            </td>
            <td>
              {{items.price}}
            </td>
            <td>
              <button class="btn" @click="minu(index)">-</button>
              {{items.count}}
              <button class="btn" @click="increase(index)">+</button>
            </td>
            <td>
              <input type="submit" value="删除" class="removes" @click="delet(index)">
            </td>
          </tr>
        </tbody>
      </table>
      <div>总数量：{{allCount}}</div>
      <div>总价格：${{totalPrice}}</div>
    </div>
    <div class="kong" v-else>购物车为空！</div>
  </div>
</template>

<script>
import Header from '../base/headers'
import { mapState, mapMutations,mapGetters } from 'vuex'
export default {
  name: 'car',
  data () {
    return {
      
    }
  },
  components:{
    Header
  },
  created(){
    
  },
  methods:{
    ...mapMutations({
      delet:'REMOVE_GOODS'
    }),
    changeone(items){
      this.$store.commit('change',items)
    },
    minu(index){
      this.$store.commit('jianfa',index)
    },
    increase(index){
      this.$store.commit('jiafa',index)
    }
  },
  computed:{
    ...mapGetters(['checkall','allCount','totalPrice']),
    ...mapState(['goodList']),
    checkallA:{
      get(){
        return this.$store.getters.checkall 
      },
      set(val){
        // this.checkall(val)
        this.$store.commit('checkall',val)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
 *{
   margin: 0;
   padding: 0;
 }
  .box{
    overflow: hidden;
    .bodybox{
      margin-top: 50px;
      margin-left: 50px;
      margin-bottom: 55px;
      table{
          border: 1px solid #e9e9e9;
          border-collapse: collapse;
          border-spacing: 0;
          empty-cells: show;
          th,td{
              padding: 8px 16px;
              border: 1px solid #e9e9e9;
              .btn{
                width: 20px;
              }
              .removes{
                width: 50px;
              }
          }
          th{
              background: #f7f7f7;
              color: #5c6b77;
              font-weight: 600;
              white-space: nowrap;
          }
          .chec{
            -webkit-appearance: none;
            display: block;
            width: 15px;
            height: 15px;
            border: 1px solid #000;
            border-radius: 5px;
            margin: 0 auto;
            margin-top: 12px;
            outline: none;
          }
          .chec:checked::before{
            content: '\00a0';
            display: inline-block;
            border: 3px solid #000;
            border-top-width: 0;
            border-right-width: 0; 
            width: 8px;
            height: 5px;
            transform: rotate(-50deg);
          }
          .forever{
            font-size: 14px;
            text-align: left;
            .check{
              float: right;
              margin-top: 3px;
              -webkit-appearance: none;
              display: block;
              width: 15px;
              height: 15px;
              border: 1px solid #000;
              border-radius: 5px;
              outline: none;
            }
            .check:checked::before{
              content: '\00a0';
              display: inline-block;
              border: 3px solid #000;
              border-top-width: 0;
              border-right-width: 0; 
              width: 8px;
              height: 5px;
              transform: rotate(-50deg);
            }
          }
      }
    }
    .kong{
      margin-top: 50px;
      margin-left: 20px;
      font-size: 18px;
    }
  }
  
</style>
