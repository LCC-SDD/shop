<template>
  <div class="box">
    <Header :showArrow=true>我的</Header>
  </div>
</template>

<script>
import Header from '../base/headers';
export default {
  name: 'my',
  data () {
    return {

    }
  },
  components:{
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
  
</style>
