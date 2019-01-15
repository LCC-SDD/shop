<template>
  <div>
    <Header :showArrow=true>列表</Header>
    <div class="selected" ref="scroll" @scroll="loader">
      <ul>
        <router-link :to="{name:'detail',params:{id:item.id}}" v-for="(item,index) in list" :key="index" tag='li'>
          <!-- 图片懒加载 -->
          <!-- <img v-lazy="item.img" alt=""> -->
          <img :src="item.img" alt="">
          <div class="content">
            <p>商品号：{{item.id}}</p>
            <p>商品名称：{{item.name}}</p>
            <p>$：{{item.price}}</p>
          </div>
          <button class="btn1" @click.stop="delet(item.id)">删除</button>
          <button class="btn2" @click.stop="addCar(item)">添加到购物车</button>
        </router-link>
        <div class="but">
          <button @click="loadMore()">{{aa}}</button>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../base/headers';
import { getPage,deleteGood } from '../api';
import * as Types from '../store/mutations-type'
export default {
  name: 'list',
  data () {
    return {
      list:[],
      page:1,
      hasmore:true,
      aa:'点击加载更多'
    }
  },
  components:{
    Header
  },
  created(){
    this.getList()
  },
  methods:{
    async getList(){
      let {data:list,hasmore} = await getPage(this.page)
      this.list = [...this.list,...list]
      this.hasmore = hasmore
      if(!hasmore){
        this.aa = '没有更多数据了'
      }
    },
    //加载更多
    loadMore(){
      if(this.hasmore){
        this.page+=1
        this.getList()
      }
    },
    //滚动加载更多
    loader(){
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        let {
            scrollHeight,
            clientHeight,
            scrollTop
          } = this.$refs.scroll;
          if(clientHeight + scrollTop + 40 > scrollHeight){
            this.loadMore();
          }
      }, 13);
    },
    //删除商品
    async delet(detid){
      await deleteGood(detid)
      this.list = this.list.filter(item=>item.id!==detid) 
    },
    //添加商品到购物车
    addCar(list){
      this.$store.commit({
        type:Types.ADD_CAR,
        list
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  *{
    padding: 0;
    margin: 0;
    list-style-type: none;
      .selected{
        display: inline-block;
        width: 100%;
        height: 100%;
        margin-top: 40px;
        position: fixed;
        overflow: scroll;
        ul{
          padding: 20px 20px;
          li{
            margin: 10px 0px;
            height: 200px;
            overflow: hidden;
            img{
              float: left;
              margin-top: 30px;
            }
            .content{
              margin-left: 170px;
              margin-top: 25px;
              p{
                padding: 13px 0px;
              }
            }
            .btn1{
              width: 30%;
              float: right;
              margin-top: -120px;
            }
            .btn2{
              width: 30%;
              float: right;
              margin-top: -60px;
            }
          }
            button{
              width: 50%;
              height: 40px;
              margin-bottom: 70px;
              margin-left: 30%;
              text-align: center;
              outline: none;
              border: none;
              background: yellowgreen;
              border-radius: 5px;
            }
        }
      }
  }
</style>
