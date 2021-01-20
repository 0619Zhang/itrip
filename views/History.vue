<template>
  <div class="historyWrap">
    <div class="header">
      <myheader title="浏览历史" right="清空">
        <div slot="search"></div>
      </myheader>
    </div>
    <div class="kong"></div>
    <!-- 中间部分 -->
    <div class="content">
      <mytoday :todayList='todayList' :yesterdayList='yesterdayList' :beforedayList='beforedayList'></mytoday>
    </div>
  </div>
</template>

<script>
import myheader from "@/components/head/header";
import mytoday from "@/components/history/history"
export default {
  components: {
    myheader: myheader,
    mytoday:mytoday
  },
  data(){
    return{
      todayList:[
        {content:"aaaaaaaaaaaaaaaanmmmmmaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",price:"￥2900", pic:"images/img/history-lis0421_03.jpg",},
        {content:"aaaaaaaaaaaaaaaanmmmmmaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",price:"￥3969", pic:"images/img/history-lis0421_06.jpg",},
        {content:"aaaaaaaaaaaaaaaanmmmmmaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",price:"￥3021", pic:"images/img/history-lis0421_08.jpg",},
      ],
      yesterdayList:[
        {content:"aaaaaaaaaaaaaaaanmmmmmaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",price:"￥5596", pic:"images/img/history-lis0421_10.jpg",}
      ],
      beforedayList:[
        {content:"aaaaaaaaaaaaaaaanmmmmmaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",price:"￥5963", pic:"images/img/history-lis0421_12.jpg",},
        {content:"aaaaaaaaaaaaaaaanmmmmmaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",price:"￥2966", pic:"images/img/history-lis0421_14.jpg",},
      ]
    }
  }
};
</script>

<style lang="less" scoped>
.historyWrap {
  // background-color: grey;
  width: 100%;
  margin-bottom: 0.7rem;
  .header {
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #1448ae;
  }
  .kong{
    height: 0.6rem;
  }
}
</style>