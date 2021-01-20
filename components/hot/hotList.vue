<template>
    <div class="hotList">
        <div class="item" v-for="(item,index) in hotList" :key="index">
            <img :src="item.imgUrl" alt=""><br>
            {{item.title}}
        </div>
    </div>
</template>
<script>
export default {
    props:['hotList']
}
</script>

<style lang="less" scoped>
    .hotList{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .item{
            width: 45%;
            text-align: center;
            border: 1px solid #ccc;
            margin: 0.05rem;
            img{
                width: 100%
            }
        }
    }
</style>