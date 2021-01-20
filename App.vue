<template>
  <div id="app">
    <router-view/>
    <div class="footer">
      <myfooter :tabList='tabList'></myfooter>
    </div>
  </div>
</template>

<script>
import myfooter from '@/components/foot/footer'
export default {
    data(){
      return{
        tabList:[
          {n_img:'/images/icon/footer_0322_05.png',a_img:'/images/icon/footer_0322_01.png',title:'首页',flag:true,path:'/'},
          {n_img:'/images/icon/footer_0322_06.png',a_img:'/images/icon/footer_0322_02.png',title:'目的地',flag:false,path:'/target'},
          {n_img:'/images/icon/footer_0322_07.png',a_img:'/images/icon/footer_0322_03.png',title:'浏览历史',flag:false,path:'/history'},
          {n_img:'/images/icon/footer_0322_08.png',a_img:'/images/icon/footer_0322_04.png',title:'个人',flag:false,path:'/mine'},
          ]
      }
    },
    components:{
      myfooter:myfooter
    }
}
</script>

<style lang="less">
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-size: 0.12rem;
    }
  li{
    list-style-type: none;
  }
  #app{
    width: 100%;
    .footer{
      width: 100%;
      position: fixed;
      bottom: 0;
    }
  }
</style>
