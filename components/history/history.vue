<template>
    <div class="historyWrap">
        <div class="today">
            <h2>今天</h2>
            <ul>
                <li v-for="(item,index) in todayList" :key="index">
                    <div class="leftLogo"></div>
                    <div class="right">
                        <div class="content">
                            <div class="font">{{item.content}}</div>
                            <div class="price"><span>{{item.price}}</span>起</div>
                        </div>
                        <div class="pic">
                            <img :src="item.pic" alt="">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="yesterday">
            <h2>昨天</h2>
            <ul>
                <li v-for="(item,index) in yesterdayList" :key="index">
                    <div class="leftLogo"></div>
                    <div class="right">
                        <div class="content">
                            <div class="font">{{item.content}}</div>
                            <div class="price"><span>{{item.price}}</span>起</div>
                        </div>
                        <div class="pic">
                            <img :src="item.pic" alt="">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
         <div class="brforeday">
            <h2>前天</h2>
            <ul>
                <li v-for="(item,index) in beforedayList" :key="index">
                    <div class="leftLogo"></div>
                    <div class="right">
                        <div class="content">
                            <div class="font">{{item.content}}</div>
                            <div class="price"><span>{{item.price}}</span>起</div>
                        </div>
                        <div class="pic">
                            <img :src="item.pic" alt="">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:['todayList','yesterdayList','beforedayList']
}
</script>

<style lang="less" scoped>
   
    .historyWrap{
        .today{
            padding: 0.1rem 0.2rem;
            h2{
                color: grey;
            }
            ul{
                li{
                    width: 100%;
                    display: flex;
                    margin-top: 0.1rem;
                    // background-color: red;
                    .leftLogo{
                        
                        height: 0.3rem;
                        border-radius: 50%;
                        background: url(/images/icon/sprites.png) 0 0 no-repeat #1AB2DB;
                        background-size: 5.6rem 9rem;
                        background-position: -5.08rem -2.49rem;
                        flex: 1;
                    }
                    .right{
                        height: 0.7rem;
                        background-color:#e7e7e7;
                        border-radius: 0.1rem;
                        margin-left: 0.2rem;
                        flex: 9;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .content{
                            flex: 3;
                           margin-left: 0.1rem;
                            .font{
                                 width: 2rem;
                                 overflow: hidden;
                                //  background-color: red;
                                color: grey;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                -moz-line-clamp: 2;  
                                 word-wrap: break-word;
                                text-overflow: ellipsis;
                            }
                            .price{
                                margin-top: 0.05rem;
                                color: grey;
                                span{
                                    font-size: 0.15rem;
                                    color:#F98413;
                                }
                            }
                        }
                        .pic{
                            flex:1;
                            img{
                                width: 0.6rem;
                            }
                        }
                    }
                }
            }
        }




        .yesterday{
            padding: 0.1rem 0.2rem;
            h2{
                color: grey;
            }
            ul{
                li{
                    width: 100%;
                    display: flex;
                    margin-top: 0.1rem;
                    // background-color: red;
                    .leftLogo{
                        
                        height: 0.3rem;
                        border-radius: 50%;
                        background: url(/images/icon/sprites.png) 0 0 no-repeat #1AB2DB;
                        background-size: 5.6rem 9rem;
                        background-position: -5.08rem -2.49rem;
                        flex: 1;
                    }
                    .right{
                        height: 0.7rem;
                        background-color:#e7e7e7;
                        border-radius: 0.1rem;
                        margin-left: 0.2rem;
                        flex: 9;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .content{
                            flex: 3;
                           margin-left: 0.1rem;
                            .font{
                                 width: 2rem;
                                 overflow: hidden;
                                //  background-color: red;
                                color: grey;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                -moz-line-clamp: 2;  
                                 word-wrap: break-word;
                                text-overflow: ellipsis;
                            }
                            .price{
                                margin-top: 0.05rem;
                                color: grey;
                                span{
                                    font-size: 0.15rem;
                                    color:#F98413;
                                }
                            }
                        }
                        .pic{
                            flex:1;
                            img{
                                width: 0.6rem;
                            }
                        }
                    }
                }
            }
        }


        .brforeday{
            padding: 0.1rem 0.2rem;
            h2{
                color: grey;
            }
            ul{
                li{
                    width: 100%;
                    display: flex;
                    margin-top: 0.1rem;
                    // background-color: red;
                    .leftLogo{
                        
                        height: 0.3rem;
                        border-radius: 50%;
                        background: url(/images/icon/sprites.png) 0 0 no-repeat #1AB2DB;
                        background-size: 5.6rem 9rem;
                        background-position: -5.08rem -2.49rem;
                        flex: 1;
                    }
                    .right{
                        height: 0.7rem;
                        background-color:#e7e7e7;
                        border-radius: 0.1rem;
                        margin-left: 0.2rem;
                        flex: 9;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .content{
                            flex: 3;
                           margin-left: 0.1rem;
                            .font{
                                 width: 2rem;
                                 overflow: hidden;
                                //  background-color: red;
                                color: grey;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                -moz-line-clamp: 2;  
                                 word-wrap: break-word;
                                text-overflow: ellipsis;
                            }
                            .price{
                                margin-top: 0.05rem;
                                color: grey;
                                span{
                                    font-size: 0.15rem;
                                    color:#F98413;
                                }
                            }
                        }
                        .pic{
                            flex:1;
                            img{
                                width: 0.6rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>