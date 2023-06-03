<template>
  <div class="fixedhead" :class="{ show: y > 10 }">
    <div class="header">
      <div class="logo">{{ y }}{{ 'px' }}</div>

      <span>
        <router-link to="/layout/home">默认1</router-link>
      </span>

      <span v-for="i in category" :key="i.id">
        <router-link :to="{ path: '/layout/home', query: i.id }">{{ i.name }}</router-link>
      </span>
      <div><input type="text" name="" id="" placeholder="搜索" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScroll } from '@vueuse/core'

import { useCategoryStore } from '@/stores/category'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
const { y } = useScroll(window)

const stores = useCategoryStore()

const { category } = storeToRefs(stores)
</script>

<style lang="scss" scoped>
.fixedhead {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  transform: translateY(-100%);
  opacity: 0.3;

  &.show {
    transition: all 0.3s;
    transform: none;
    opacity: 1;
  }
}

.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  // background-color: deeppink;
  a {
    color: black;
    text-decoration: none;
    font-size: large;
  }
}
</style>
