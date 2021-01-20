<template>
    <div class="footerWrap">
        <ul>
            <li v-for="(item,index) in tabList" :key="index" :class="{active:item.flag}" @click="change(index)"> 
                <img :src="item.n_img" alt="" v-if="!item.flag">
                <img :src="item.a_img" alt="" v-else><br>
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['tabList'],
    methods:{
        change(index){
            for(var i=0;i<this.tabList.length;i++){
                this.tabList[i].flag=false
            }
            this.tabList[index].flag=true;
            this.$router.push(this.tabList[index].path)
        }
    }
}
</script>

<style lang="less" scoped>
    .footerWrap{
        width: 100%;
        background-color: white;
        padding: 0.1rem 0;
        ul{
            width: 100%;
            display: flex;
            li{
                flex: 1;
                text-align: center;
                img{
                    height: 0.24rem;
                }
            }
            .active{
                color: #1AB2DB;
            }
        }
    }
</style>