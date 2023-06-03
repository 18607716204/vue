<template>
  <div class="layout">
    <Fixed />
    <Nav />
    <Header />
    <div class="rview">
      <router-view></router-view>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Fixed from './component/layoutFixed.vue'
import Nav from '@/views/Layout/component/LayoutNav.vue'
import Header from '@/views/Layout/component/LayoutHeader.vue'
import Footer from '@/views/Layout/component/LayoutFooter.vue'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const stores = useCategoryStore()

onMounted(() => {
  stores.getsomthing()
})
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  position: relative;
}
.rview {
  width: 100%;
  height: 700px;
  overflow-y: scroll;
}
</style>
