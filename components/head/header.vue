<template>
    <div class="headerWrap">
        <slot name="top">
            <div class="header_top">
                <span class="left"><i class="el-icon-arrow-left"></i></span>
                {{title}}
                <span class="right">{{right}}</span>
            </div>
        </slot>
        <slot name="search">
            <div class="header_search">
                <input type="text" :placeholder="ts">
                <i class="el-icon-search"></i>
            </div>
        </slot>
    </div>
</template>
<script>
export default {
    props:['title','right','ts']
}
</script>

<style lang="less" scoped>
    .headerWrap{
        width: 100%;
        line-height: 40px;
        padding: 0.1rem;
        color: #fff;
        .header_top{
            text-align: center;
            font-size: 0.16rem;
            .left{
                float: left;
                font-size: 0.16rem;
            }
            .right{
                float: right;
                font-size: 0.16rem;
            }
        }
        .header_search{
            position: relative;
            input{
                width: 100%;
                line-height: 0.3rem;
                background-color: transparent;
                border: 1px solid rgba(255, 255, 255, 0.5);
                outline: none;
                border-radius: 0.2rem;
                padding-left: 0.3rem;
            }
            input::placeholder{
                color: #efefef;
                font-size: 0.16rem;
            }
            .el-icon-search{
                position: absolute;
                top: 0.15rem;
                left: 0.15rem;
            }
        }
    }
</style>