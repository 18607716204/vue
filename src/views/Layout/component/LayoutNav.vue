<template>
  <div class="nav">
    <div class="login" v-if="flag">登录</div>
    <div class="logout" v-else>退出</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const flag = ref<boolean>(false)
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

.login {
  width: 200px;
  height: 100%;
  // background-color: blueviolet;
}

.logout {
  width: 200px;
  height: 100%;
  // background-color: green;
}
</style>
