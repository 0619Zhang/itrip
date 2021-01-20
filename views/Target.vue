<template>
    <div class="targetWrap">
        <div class="header">
            <myheader title="选择目的地" right='' ts='春季旅游节'></myheader>
        </div>
        <div class="kong"></div>
        <div class="hot">
            <hot></hot>
        </div>
        <div class="kong1"></div>
    </div>
</template>
<script>
import myheader from '@/components/head/header'
import hot from '@/components/hot/hot'
export default {
    components:{
        myheader:myheader,
        hot:hot
    }
}
</script>

<style lang="less" scoped>
    .targetWrap{
        width: 100%;
        .kong{
            height: 1rem;
        }
        .header{
            width: 100%;
            position: fixed;
            top: 0;
            background-color: #1448AE;
            z-index: 10;
        }
    }
</style>