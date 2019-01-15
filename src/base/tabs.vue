<template>
  <div class="footer">
    <router-link to='/home'>
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to='/list'>
      <i class="iconfont icon-liebiao"></i>
      <span>列表页</span>
    </router-link>
    <router-link to='/car'>
      <i class="iconfont icon-ziyuan"></i>
      <span>购物车</span>
    </router-link>
    <router-link to='/my'>
      <i class="iconfont icon-wode"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
    .footer{
      display: flex;
      width: 100%;
      position: fixed;
      bottom: 0;
      height: 50px;
      justify-content: center;
      align-items: center;
      border-top: 1px solid #ccc;
      z-index: 3;
      background: #fff;
      a{
        flex: 1;
        text-align: center;
      }
      a.router-link-active{
        color: skyblue;
      }
    }
</style>
