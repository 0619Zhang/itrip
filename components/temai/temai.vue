<template>
    <div class="temaiWrap">
        <div class="item" v-for="(item,index) in temaiList" :key="index">
            <img :src="item.imgUrl" alt=""><br>
            <div class="zhuTi">{{item.zhuTi}}</div><br>
            <span class="left">席位充足</span>
            <span class="right">{{item.price}}起</span>
        </div>
    </div>
</template>

<script>
export default {
    props:['temaiList'] 
}
</script>

<style lang="less" scoped>
    .temaiWrap{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .item{
            width: 47%;
            border: 1px solid #C9C9C9;
            flex: 1;
            margin-top: 0.1rem;
            line-height: 0.15rem;
            margin-left: 0.05rem;
            img{
                width: 100%;
            }
            .zhuTi{
                width: 100%;
                word-wrap: break-word;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                -moz-line-clamp: 2;  
            }
            .left{
                color:#C9C9C9;
                float: left;
            }
            .right{
                color:#FEA82F;
                float: right;
            }
        }
    }
</style>