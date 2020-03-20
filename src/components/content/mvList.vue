<template>
    <div class="mv_list">
        <div class="mv_item" v-for="(item,index) in mvInfo" :key="index"  @mouseover="onOver(index)" @mouseout="onOut" >
            <a :href="'https://www.kugou.com/mvweb/html/mv_'+item.videoid+'.html'">
                <img :src="item.img" alt="">
                <div class="title">
                   <p class="sing">{{item.title}}</p>
                   <p class="singname">{{item.singname}}</p>
                </div>
                <div class="bian iconfont icon-bofang"  v-show='isShow==index' />
            </a>
        </div>
    </div>  
</template>

<script>
    export default{
        name:'mvList',
        data(){
            return{
                isShow:99
            }
        },
        props:{
            mvInfo:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        mounted(){
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
.mv_list{
    width: 330px;  
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  
}
/* first */
.mv_item{
    position: relative;
}
.mv_item:first-child{
    margin-bottom:8px ;
    position: relative;
}
.mv_item:first-child img{
    width: 100%;   
    height: 175px;
}
.mv_item:first-child .title{
    width: 100%;
    line-height: 25px;
    bottom: 4px;
    left: 0px;
    box-sizing: border-box;
    padding-left:10px;
    background-color: rgba(8, 8, 8, .4);
}
.mv_item:first-child .title:nth-child(0){
    color: violet;
}
.title{
    position: absolute;
    line-height: 20px;
    bottom: -38px;
    left: 10px;
    width: 154px;
    overflow: hidden;
}
.singname{
    color: rgb(139, 136, 136);
}
p{
    color: #0c8ed9;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap; 
    margin: 0 auto;
}
img{
    width: 154px;
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