<template>
  <div class="lbWrap">
    <div class="block">
      <el-carousel height="2.5rem" trigger='click'>
        <el-carousel-item v-for="(item,index) in lbList" :key="index">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
    props:['lbList']
}
</script>

<style lang="less" scoped>
    .lbWrap{
        img{
            width: 100%;
        }
    }
</style>