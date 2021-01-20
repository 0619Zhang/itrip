<template>
  <div class="hotWrap">
    <div class="left">
      <ul>
        <li :class="{active:tabNum==1}" @click="changeTab(1)">
          <span class="pic p1"></span>
          <br />热门
        </li>
        <li :class="{active:tabNum==2}" @click="changeTab(2)">
          <span class="pic p2"></span>
          <br />国内
        </li>
        <li :class="{active:tabNum==3}" @click="changeTab(3)">
          <span class="pic p3"></span>
          <br />国外
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="content" v-show="tabNum==1">
            <HotList :hotList="hotList"></HotList>
      </div>
      <div class="content" v-show="tabNum==2">
            <HotList :hotList="guoneiList"></HotList>
      </div>
      <div class="content" v-show="tabNum==3">
            <HotList :hotList="guowaiList"></HotList>
      </div>
    </div>
  </div>
</template>

<script>
import HotList from "@/components/hot/hotList";
export default {
  data() {
    return {
        tabNum:1,
      hotList: [
        { imgUrl: "/images/img/search0407_01.jpg", title: "上海迪士尼" },
        { imgUrl: "/images/img/search0407_02.jpg", title: "云南" },
        { imgUrl: "/images/img/search0407_03.jpg", title: "厦门" },
        { imgUrl: "/images/img/search0407_04.jpg", title: "香港" },
        { imgUrl: "/images/img/search0407_05.jpg", title: "法国" },
        { imgUrl: "/images/img/search0407_06.jpg", title: "泰国" },
        { imgUrl: "/images/img/search0407_07.jpg", title: "美国" },
        { imgUrl: "/images/img/search0407_08.jpg", title: "英国" },
        { imgUrl: "/images/img/search0407_01.jpg", title: "上海迪士尼" },
        { imgUrl: "/images/img/search0407_02.jpg", title: "云南" },
        { imgUrl: "/images/img/search0407_03.jpg", title: "厦门" },
        { imgUrl: "/images/img/search0407_04.jpg", title: "香港" },
        { imgUrl: "/images/img/search0407_05.jpg", title: "法国" },
        { imgUrl: "/images/img/search0407_06.jpg", title: "泰国" },
        { imgUrl: "/images/img/search0407_07.jpg", title: "美国" },
        { imgUrl: "/images/img/search0407_08.jpg", title: "英国" }
      ],
      guoneiList:[
          { imgUrl: "/images/img/guonei0407_03.jpg", title: "上海" },
        { imgUrl: "/images/img/guonei0407_05.jpg", title: "大连" },
        { imgUrl: "/images/img/guonei0407_09.jpg", title: "青岛" },
        { imgUrl: "/images/img/guonei0407_10.jpg", title: "武夷山" },
        { imgUrl: "/images/img/guonei0407_13.jpg", title: "桂林" },
        { imgUrl: "/images/img/guonei0407_14.jpg", title: "昆明" },
        { imgUrl: "/images/img/guonei0407_17.jpg", title: "西安" },
        { imgUrl: "/images/img/guonei0407_18.jpg", title: "杭州" },
        { imgUrl: "/images/img/guonei0407_13.jpg", title: "桂林" },
        { imgUrl: "/images/img/guonei0407_14.jpg", title: "昆明" },
        { imgUrl: "/images/img/guonei0407_17.jpg", title: "西安" },
        { imgUrl: "/images/img/guonei0407_18.jpg", title: "杭州" },
      ],
      guowaiList:[
          { imgUrl: "/images/img/waiguo0407_03.jpg", title: "澳大利亚" },
        { imgUrl: "/images/img/waiguo0407_05.jpg", title: "意大利" },
        { imgUrl: "/images/img/waiguo0407_09.jpg", title: "英国" },
        { imgUrl: "/images/img/waiguo0407_10.jpg", title: "泰国" },
        { imgUrl: "/images/img/waiguo0407_13.jpg", title: "马来西亚" },
        { imgUrl: "/images/img/waiguo0407_14.jpg", title: "塞内加尔" },
        { imgUrl: "/images/img/waiguo0407_17.jpg", title: "法国" },
        { imgUrl: "/images/img/waiguo0407_18.jpg", title: "西班牙" },
        { imgUrl: "/images/img/waiguo0407_05.jpg", title: "意大利" },
        { imgUrl: "/images/img/waiguo0407_09.jpg", title: "英国" },
        { imgUrl: "/images/img/waiguo0407_10.jpg", title: "泰国" },
        { imgUrl: "/images/img/waiguo0407_13.jpg", title: "马来西亚" },
        { imgUrl: "/images/img/waiguo0407_14.jpg", title: "塞内加尔" },
        { imgUrl: "/images/img/waiguo0407_17.jpg", title: "法国" },
        { imgUrl: "/images/img/waiguo0407_18.jpg", title: "西班牙" },
      ]
    };
  },
  components: {
    HotList: HotList
  },
  methods:{
      changeTab(index){
          this.tabNum=index
      }
  }
};
</script>

<style lang="less" scoped>
    @rate:0.5;
    .pic{
        background: url(/images/icon/sprites.png) 0 0 no-repeat;
        background-size: @rate*7.5rem @rate*9.5rem;
        width: 0.3rem;
        height: 0.3rem;
        display: block;
        margin:0 auto;
    }
    .hotWrap{
        position: relative;
        .left{
            flex: 1;
            position: fixed;
            top: 1rem;
            width: 0.6rem;
            height: 6rem;
            background-color: #efefef;
            
            ul{
                width: 100%;
                li{
                    text-align: center;
                    padding: 0.2rem 0;
                    
                    .p1{
                        background-position: @rate*-4.5rem @rate*-1rem;
                    }
                    .p2{
                        background-position: @rate*-5.4rem @rate*-1rem;
                    }
                    .p3{
                        background-position: @rate*-6.2rem @rate*-1rem;
                    }
                }
                li.active{
                    background-color: white;
                    color: red;
                    border-left: 3px solid orange;
                    transition: all 1s;
                    .p1{
                        background-position: @rate*-4.5rem @rate*-1.8rem;
                    }
                    .p2{
                        background-position: @rate*-5.4rem @rate*-1.8rem;
                    }
                    .p3{
                        background-position: @rate*-6.2rem @rate*-1.8rem;
                    }
                }
            }
        }
        .right{
            position: absolute;
            top: 0;
            left: 0.6rem;
            margin-bottom: 0.6rem;
        }
    }
</style>