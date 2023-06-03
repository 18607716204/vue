<template>
  <div class="home">
    <div class="container">
      <Category />
      <Banner />
    </div>
    <Pannel title="答辩" subTitle="压缩毛巾" />
    <Pannel />
    <New />
    <Hot />
    <Product />
  </div>
</template>

<script setup lang="ts">
import Banner from './component/HomeBanner.vue'
import Category from './component/HomeCategory.vue'
//
import Pannel from './component/HomePannel.vue'
import New from './component/HomeNew.vue'
import Hot from './component/HomeHot.vue'
import Product from './component/HomeProduct.vue'
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 800px;
}

.container {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
</style>
