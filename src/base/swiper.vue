<template>
<div>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div> 
</template>
<script>
  export default {
    name: 'carrousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay:true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
      }
    }
  }
</script>
<style lang="scss" scope>
  .swiper-slide{
    width: 100%;
    margin-top:40px;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>