<template>
    <div class="frame_left">
        <div class="item" v-for="(item,index) in frame" :key="index" @mouseover="onOver(index)" @mouseout="onOut" > 
            <p class="iconfont icon-yinfu">{{item.num}}</p>
            <img :src="item.img" alt="">
            <div class="list">
                <p class="listname">{{item.listname}}</p>
                <p class="listsinger">{{item.listsinger}}</p>
            </div>
            <a :href="item.url">
                <div class="bian iconfont icon-bofang"  v-show='isShow==index' />
            </a>
        </div>
    </div>
</template>

<script>
    export default{
        name:'frameLeft',
        data(){
           return{
               isShow:99
           }
        },
        props:{
            frame:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            onOver(index){
                this.isShow = index
            },
            onOut(){
                this.isShow = 99
            }
        }
}
</script>

<style scoped>
p{
    color: #fff;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
img{
    width: 160px;
    height: 160px;
}
.frame_left{
    width: 660px;
    height: 330px; 
    display: flex;
    flex-flow: wrap column;
    position: relative;
}
.item{
    width: 160px;
    height: 160px;
    position: relative;
    margin: 2px 2px;
}
/* first */
.item:first-child{
    width: 325px;
    height: 325px;
    margin: 0;
}
.item:first-child img{
    width: 325px;
    height: 325px;
}
.item:first-child .list> p{
    width: 295px;
    height: 20px;
    line-height: 15px;
    display: block;
    margin: 0;padding: 0;
    position: absolute;
    bottom: 0;
}
.item:first-child .list> .listname{
   bottom: 24px;
}
.item:first-child .list> .listsinger{
    bottom: 0px;
}
/* 1/ */
.item> .list{
    width: 100%;
    height: 50px;
    position:absolute;
    left: 0;
    bottom:0px;
    background-color: rgba(8, 8, 8, .4);
}
.icon-yinfu{
    margin: 0;
    padding:0;
    display: block;
    position:absolute;
    right: 0;
    top:0;
    background-color: rgba(8, 8, 8, 0.4);
}
.list .listname{
    width: 100px;
    position:absolute;
    left: 7px;
    bottom: 13px;
    font-weight: bold;
}
.list .listsinger{
    position:absolute;
    left: 7px;
    bottom: -10px;  
}
a{
    display: block;
    width: 100%;
    height: 100%; 
     position: absolute;
    top: 0;left: 0; 
}
.bian{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;left: 0;
    background:  rgba(8, 8, 8, .4);
    font-size: 50px;
    color: cornflowerblue;
}
</style>