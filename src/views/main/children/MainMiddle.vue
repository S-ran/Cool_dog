<template>
    <div class="middle">
        <nave-title>
            <span slot="left" >新歌</span>
            <span slot="right" >首发</span>
            <div slot="middles" 
                 class="middles"
                 :class="{active:newIndex==index}"
                 v-for="(item,index) in smallTitle" 
                 :key="index" 
                 @mouseover="onOver(index)">
                <span>{{item}}</span>
            </div>
            <a slot="tail" href="https://www.kugou.com/yy/html/special.html" class="iconfont icon-bofang">全部播放</a>
        </nave-title>
        <new-item :goods="goods" />
        <nave-title class="middle_mvtitle">
            <span slot="left" >推荐</span>
            <span slot="right" >MV</span> 
            <a slot="tail" href="https://www.kugou.com/yy/html/special.html" class="more">更多</a>
        </nave-title>
        <mv-list :mvInfo="mvInfo" />
    </div>
</template>

<script>
import NaveTitle from '../../../components/content/navTitle'
import NewItem from '../../../components/content/newItem'
import MvList from '../../../components/content/mvList'

    export default{
        name:'MainMiddle',
        data(){
            return{
                newIndex:0,
                smallTitle:['华语','欧美','韩国','日本']
            }
        },
        components:{
          NaveTitle,
          NewItem,
          MvList  
        },
        props:{
            newsItem:{
                type:Array,
                default(){
                    return []
                }
            },
            mvInfo:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        computed:{
             goods(){
                return this.newsItem[this.newIndex].new
            }
        },
        mounted(){
            //console.log(this.newsItem)
        },
        methods:{
           onOver(index){
               this.newIndex = index
           }
        }
}
</script>

<style scoped>
.middle{
    margin-top: 30px;
    width: 100%;
    height: 375px;
    display: flex;
    flex-flow: column wrap;
}
.middles{
    display: inline;
    margin-left: 30px;
}
.middles >span{
    font-size: 20px;
    cursor: pointer;/*光标：指针*/ 
}
.active{
    color:blueviolet;
}
.middle_mvtitle{
    width: 330px;
}
</style>