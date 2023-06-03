<template>
  <div class="header">
    <div class="logo">logo</div>
    <router-link :to="{ path: '/layout/home', query: category[0].id }">默认2</router-link>
    <span v-for="i in category" :key="i.id">
      <router-link :to="{ path: '/layout/home', query: i.id }">{{ i.name }}</router-link>
    </span>
    <div><input type="text" name="" id="" placeholder="搜索" /></div>
  </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'

const stores = useCategoryStore()

const { category } = storeToRefs(stores)
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
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
