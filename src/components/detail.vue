<template>
  <div class="content">
      <Header :showArrow=true>详情页</Header>
      <div class="frombox">
          <img :src="list.img" alt="">
          <div class="xiangqing">
            <p>商品号：
              <br />
              <input type="text" v-model="list.id">
            </p>
            <p>商品名称：
              <br />
              <input type="text" v-model="list.name">
            </p>
            <p>$：
              <br />
              <input type="text" v-model="list.price">
            </p>
          </div>
          
      </div>
      <div class="info">
            <p>简介：</p>
            <p>{{list.info}}</p>
      </div>
      <div class="btn">
        <button @click="update">确认修改</button>
        <button @click="add">确认添加</button>
      </div>
  </div>
</template>

<script>
import Header from "../base/headers";
import { getOne,getUpdate,addNew } from "../api";
export default {
  name: "detail",
  data() {
    return {
      list: {}
    };
  },
  components: {
    Header
  },
  created() {
    this.getData();
  },
  computed: {
    gid() {
      return this.$route.params.id;
    }
  },
  methods: {
    async getData() {
      let list = await getOne(this.gid);
      this.list = list;
    },
    async update(){
      await getUpdate(this.gid,this.list)
      this.$router.push('/list')
    },
    async add(){
      await addNew(this.list)
      this.$router.push('/list')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  list-style-type: none;
  .content {
    overflow: hidden;
    width: 100%;
    height: 100%;
    .frombox {
        position: relative;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        width: 100%;
        height: 100%;
        background: #fff;
        z-index: 5;
        margin-top: 40px;
        padding: 20px 5px;
        display: flex;
      .xiangqing {
          flex: 1;
          margin-left: 20px;
          input {
            margin-left: 46px;
            outline: none;
            border: none;
          }
      }
    }
    .info {
        width: 100%;
        height: 100%;
        position: relative;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: #fff;
        z-index: 5;
        p:nth-of-type(1){
            margin-left: 20px;
        }
        p:nth-of-type(2){
            width: 80%;
            margin-left: 35px;
            text-indent: 35px;
        }
      }
      .btn{
        margin-top: 30px;
        text-align: center;
        button{
          display: inline-block;
          width: 40%;
          height: 30px;
          background: greenyellow;
          border-radius: 5px;
          outline: none;
          border: none;
        }
      }
  }
}
</style>