<template>
  <div class="box">
      <label for="">
        请输入：
        <input type="text" class="inp1" v-model="aa"><button @click="getAdd()">添加</button>
      </label>
      <br />
      <p class="zheng">正在进行中</p>
      <ul>
          <li v-for="(item,index) in datas" :key="index">
              <span class="data">{{item}}<p class="remov" @click="getRemove(index)">删除</p></span>
              <input type="submit" value="点击完成" @click='getComplete(index)'>
          </li>
      </ul> 
      <p class="zheng">已经完成的</p>
      <ul>
          <li v-for="(items,index) in list" :key="index">
              <span class="data">{{items}}<p class="remov" @click="getRemoveTow(index)">删除</p></span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'todoList',
  data () {
    return {
        datas:[],
        list:[],
        aa:''
    }
  },
  methods:{
      getAdd(){
          this.datas.push(this.aa)
      },
      getRemove(index){
          this.datas.splice(index,1)
      },
      getComplete(index){
          this.list.push(this.datas[index]) 
      },
      getRemoveTow(index){
          this.list.splice(index,1)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
.box{
    label{
        margin-left: 30px;
        .inp1{
            width: 200px;
            height: 20px;
        }
    }
    .zheng{
        margin-left: 30px;
    }
    ul{
        li{
            margin-left: 30px;
            .data{
                display: inline-block;
                width: 200px;
                height: 20px;
                border: 1px solid #ccc;
                p{
                    float: right;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
