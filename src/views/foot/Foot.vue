<template>
    <div class="foot">
        <div class="foot_top">
            <div class="top_item" 
                 v-for="(item,index) in foots" 
                 :key="index" 
                 :class="{active:isActive==index}" 
                 @mouseover="onOver(index)"  
                 @mouseout="onOut">
                <a :href="item.link">
                    <p>{{item.name}}</p>
                </a>
            </div>
        </div>
        <div class="foot_bomoot">
            <p>纯属仿站切勿盗用</p>
            <p>纯属仿站切勿盗用</p>
            <p>纯属仿站切勿盗用</p>
            <p>纯属仿站切勿盗用</p>
            <p>纯属仿站切勿盗用</p>
            <p>纯属仿站切勿盗用</p>
            <p>纯属仿站切勿盗用</p>
        </div>
    </div>
</template>

<script>
import {getFoot} from '../../network/foot'

    export default{
        name:'Foot',
        data(){
            return{
                foots:[],
                isActive:99
            }
        },
        created(){
            this._getFoot()
        },
        methods:{
            _getFoot(){
                getFoot().then(res =>{
                    this.foots = res.data.about
                })
            },
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
.foot{
    width: 100%;
    background-color: #3d424a;
    color: #b1b3b9;
}
.foot_top{
    width: 100%;
    padding-top: 10px;
    padding-bottom:7px ;
    display: flex;
    border-bottom:1px rgba(185, 192, 185,.4) solid; ;
    flex-flow: wrap row;
    justify-content: center;
}
.top_item{
    height: 24px;
    margin: 3px 5px;
    line-height: 24px;
    border-right:2px rgb(185, 192, 185) solid;
}
.top_item p{
    display: inline;
    padding-right:20px ;
    color:  rgb(185, 192, 185)
}
.foot_bomoot{
    padding-top: 40px;
    padding-bottom:40px ;
    flex: 9;
    text-align: center;
}
.active a p{
    color: #0c8ed9;
}
</style>