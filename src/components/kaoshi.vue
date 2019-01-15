<template>
  <div class="box">
      <div class="selected">
          <ul>
              <router-link :to="{name:'kaoshi',params:{id:item.id}}" v-for="(item,index) in list" :key="index" tag="li">
                  <img :src="item.img" alt="">
                  <div class="content">
                    <p>商品号：{{item.id}}</p>
                    <p>商品名称：{{item.name}}</p>
                    <p>$：{{item.price}}</p>
                  </div>
                  <button class="btn1" @click.stop="delet(item.id)">删除</button>
              </router-link>
          </ul>
      </div>
  </div>
</template>

<script>
import { getSelect,deleteGood } from '../api'
export default {
  name: 'my',
  data () {
    return {
        list:[]
    }
  },
  components:{

  },
  created(){
      this.getList()
  },
  methods:{
      async getList(){
          let list = await getSelect()
          this.list = list
      },
      async delet(detid){
          await deleteGood(detid)
          this.list = this.list.filter(item=>item.id!==detid) 
      },
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
            margin-bottom: 70px;
            img{
              float: left;
              margin-top: 45px;
            }
            .content{
              margin-left: 170px;
              margin-top: 25px;
              p{
                padding: 13px 0px;
              }
            }
            .btn1{
              width: 15%;
              height: 30px;
              margin-left: 30px;
              outline: none;
              background: #fff;
              border-radius: 10px;
              border: 1px solid #000;
              margin-top: -10px;
            }
          }
        }
      }
  }
</style>
