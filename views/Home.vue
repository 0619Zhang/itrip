<template>
  <div class="home">
    <!-- 头部 -->
    <div class="header">
      <myheader title="" ts="搜索旅行地/酒店/景点">
        <div slot="top"></div>
      </myheader>
    </div>
    <!-- 轮播 -->
    <div class="lb">
      <mylb :lbList="lbList"></mylb>
    </div>
    <!-- 选择栏 -->
    <div class="sel">
      <dl v-for="(item, index) in selList" :key="index">
        <dt>
          <img :src="item.imgUrl" alt="" />
          <span>{{ item.name }}</span>
        </dt>
        <dd>
          <ul>
            <li style="background-color: orange">{{ item.r1 }}</li>
            <li style="background-color: yellowgreen">{{ item.r2 }}</li>
            <li style="background-color: pink">{{ item.r3 }}</li>
            <li style="background-color: skyblue">{{ item.r4 }}</li>
          </ul>
        </dd>
      </dl>
    </div>
    <!-- 图片 -->
    <div class="pic">
      <img src="images/img/ad_0328_02.jpg" alt="" />
    </div>
    <!-- 特卖汇 -->
    <div class="teMai">
      <div class="title">
        <div class="teMaiLogo"></div>
        <span>特卖汇</span>
      </div>
      <div class="content">
        <mytemai :temaiList='temaiList'></mytemai>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from "@/components/head/header";
import mylb from "@/components/lb/lb";
import mytemai from "@/components/temai/temai";
export default {
  name: "Home",
  data() {
    return {
      lbList: [
        "images/img/banner1.jpg",
        "images/img/banner2.jpg",
        "images/img/banner3.jpg",
        "images/img/banner4.jpg",
      ],
      temaiList:[
        {
          imgUrl:"images/img/item-img0329_01.jpg",
          zhuTi:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          price:'￥1999'
        },
        {
          imgUrl:"images/img/item-img0329_02.jpg",
          zhuTi:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          price:'￥2989'
        },
        {
          imgUrl:"images/img/item-img0329_03.jpg",
          zhuTi:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          price:'￥1699'
        },
        {
          imgUrl:"images/img/item-img0329_04.jpg",
          zhuTi:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          price:'￥3099'
        },
        {
          imgUrl:"images/img/item-img0329_05.jpg",
          zhuTi:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          price:'￥1888'
        },
        {
          imgUrl:"images/img/item-img0329_06.jpg",
          zhuTi:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          price:'￥2689'
        },
      ],
      selList: [
        {
          imgUrl: "images/icon/btnlist0323_03.jpg",
          r1: "出境游",
          r2: "国内游",
          r3: "周边游",
          r4: "当地游",
          name: "旅游",
        },
        {
          imgUrl: "images/icon/btnlist0323_06.jpg",
          r1: "低价机票",
          r2: "汽车票/船票",
          r3: "火车票",
          r4: "专车/自驾",
          name: "机票",
        },
        {
          imgUrl: "images/icon/btnlist0323_12.jpg",
          r1: "海外酒店",
          r2: "国内酒店",
          r3: "热门酒店",
          r4: "特色酒店",
          name: "酒店",
        },
      ],
    };
  },
  components: {
    myheader: myheader,
    mylb: mylb,
    mytemai:mytemai
  },
  methods:{
    getData(){
     /*  this.axios.get("http://127.0.0.1:3721/api/index/floor").then((res) => {
        // console.log(res.data.data)
        this.temaiList = res.data.data
      }); */
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="less" scoped>
@rate: 0.5;
.home {
  margin-bottom: 0.7rem;
}
.header {
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
}
.sel {
  width: 100%;
  padding: 0.1rem;
  dl {
    display: flex;
    margin-bottom: 0.1rem;
    dt {
      width: 33.33333%;
      flex: 1;
      text-align: center;
      position: relative;
      span {
        width: 50%;
        color: white;
        position: absolute;
        left: 0.3rem;
        top: 0.1rem;
        font-size: 0.15rem;
        font-family: "幼圆";
      }
      img {
        width: 100%;
      }
    }
    dd {
      width: 66.66666%;
      flex: 2;

      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 49%;
          height: 0.48rem;
          line-height: 0.5rem;
          float: left;
          text-align: center;

          margin: 0.01rem 0.01rem;
          color: white;
        }
      }
    }
  }
}
.pic {
  width: 100%;
  img {
    width: 100%;
  }
}
.teMai {
  padding: 0.1rem;
  .title {
    display: flex;
    flex-wrap: wrap;
    .teMaiLogo {
      width: 0.3rem;
      height: 0.3rem;
      background: url(/images/icon/sprites.png) 0 0 no-repeat;
      background-size: @rate*7.5rem @rate*9.5rem;
      background-position: @rate*-3.7rem @rate*-1rem;
    }
    span{
      font-size: 0.2rem;
      color: #3F68BC;
    }
  }
}
</style>