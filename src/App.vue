<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive> 
    <router-view v-if="!$route.meta.keepAlive"/>
    <Tabs></Tabs>
  </div>
</template>

<script>
import Tabs from './base/tabs'
export default {
  name: 'App',
  components:{
    Tabs
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
    color: #000;
  }
</style>
