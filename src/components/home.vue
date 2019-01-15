<template>
  <div>
   <Header>首页</Header>
   <div class="container">
     <Loading v-if="load"></Loading>
     <template v-else>
       <Swiper :swiperSlides='slider'></Swiper>
        <div class="selected">
          <ul>
            <li v-for="(item,index) in list" :key="index">
              <p>
                <img :src="item.img" alt="">
              </p>
              <p>
                <span class="name">名称：{{item.name}}</span>
                <span class="price">$：{{item.price}}</span>
              </p>
            </li>
          </ul>
        </div>
     </template>
   </div> 
  </div>
</template>

<script>
import Header from "../base/headers";
import Swiper from "../base/swiper";
import Loading from "../base/loading"
import { getAll } from "../api";
export default {
  name: "home",
  data() {
    return {
      slider: [],
      list:[],
      load:true
    };
  },
  //在components里面挂载组件
  components: {
    Header,
    Swiper,
    Loading
  },
  //在created里面调用方法
  created() {
    this.getAllData()
  },
  //在methods里面写方法
  methods:{
    async getAllData(){
      [this.slider,this.list] = await getAll()
      this.load = false
    }
  },
  mounted(){
    this.$message()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-decoration: none;
}
.container{
  position: relative;
  overflow: hidden;
  margin-bottom: 50px;
  .selected{
    width: 100%;
    ul{
      padding: 6%;
      li{
         float: left;
         margin: 0 3%; 
         height: 180px;
         p:nth-of-type(1){
           width: 100%;
           height: 70%;
           img{
             width: 100%;
             height: 100%;
           }
         }
         p:nth-of-type(2){
          line-height: 30px;
          display:flex;
          justify-content: space-between;
          font-size: 12px;
          padding: 0 2%;
         }
      } 
    }
  }
}
</style>
