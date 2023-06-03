<template>
  <div class="hbanner">
    <el-carousel height="500px" :interval="5000" arrow="hover">
      <el-carousel-item v-for="item in bannerlist" :key="item">
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { getBanner } from '@/apis/home'
import { onMounted, ref, reactive } from 'vue'

const bannerlist = ref([
  {
    hrefUrl: '/category/1019000',
    id: '17',
    imgUrl: 'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/4a79180a-1a5a-4042-8a77-4db0b9c800a8.jpg',
    type: '1'
  }
])

onMounted(async () => {
  const res = await getBanner()

  bannerlist.value = res.result
  console.log(res)
})
</script>

<style scoped lang="scss">
.hbanner {
  width: 100%;
  height: 100%;
}

.el-carousel {
  height: 500px;
}

.el-carousel__item {
  height: 500px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
