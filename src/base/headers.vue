<template>
  <div class="header">
      <i v-if="showArrow" class="iconfont icon-fanhui" @click="goBack"></i>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props:{
        showArrow:{
            type:Boolean,
            default:false
        }
    },
    data () {
        return {
           
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
  .header{
      width: 100%;
      height: 40px;
      position: fixed;
      background: hotpink;
      line-height: 40px;
      text-align: center;
      z-index: 3;
      .iconfont{
          position: absolute;
          left: 30px;
      }
  }
</style>
