<template>
    <div class="main_foot">
        <nave-title class="foot_nave">
                 <span slot="left">友情</span>
                 <span slot="right">链接</span>
                 <a slot="tail" href="https://www.kugou.com/yy/html/special.html" class="more">更多</a>
        </nave-title>
        <div class="foot_scrap">
            <div class="scrap_item" 
                 v-for="(item,index) in scrap" 
                 :key="index" 
                 :class="{active:isActive==index}"
                 @mouseover="onOver(index)"
                 @mouseout="onOut">
                <a :href="item.link">
                    <span>{{item.name}}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import NaveTitle from '../../../components/content/navTitle'

    export default{
        name:'MainFoot',
        data(){
            return{
                isActive:99
            }
        },
        components:{
          NaveTitle  
        },
        props:{
            scrap:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            onOver(index){
                this.isActive = index
            },
            onOut(){
                this.isActive = 99
            }
        }
        
}
</script>

<style scoped>
.main_foot{
    width: 100%;
}
.foot_nave{
    width: 100%;
}
.foot_scrap{
    margin-top: 20px;
    width: 100%;
    height: 100px;
    display: flex;
    flex-flow: wrap row;
}
.scrap_item{
    width:125px;
    height: 22px;
}
.active a span{
    color: #0c8ed9;
}
</style>