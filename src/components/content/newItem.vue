<template>
    <div class="new_item" >
        <div class="goods_item" 
             v-for="(item,index) in goods" 
             :key="index"
             :class="{active:isActive==index}"
             @mouseover="onOver(index)"
             @mouseout="onOut">
            <a :href="'https://www.kugou.com/song/#hash='+item.hash+'&album_id='+item.album_id" >
            <p>{{item.filename}}</p>
            <span  v-show="isActive!=index">独家</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default{
        name:'newItem',
        data(){
            return{
                isActive:999,
            }
        },
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        mounted(){
            //console.log(this.goods)
        },
        methods:{
            onOver(index){
                this.isActive = index
            },
            onOut(){
                this.isActive = 999
            }
        }
}
</script>

<style scoped>
.new_item{
    width: 650px;
    height: 313px;
    overflow-y: scroll;
    border-top:2px #ccc solid;  
}
.goods_item{
    width: 100%;
    height: 55px;
    line-height: 55px;
    border-bottom:1px #ccc solid;  
    overflow: hidden;
}
a > span{
   border: 2px orange solid; 
   border-radius: 3px;
   font-size: 3px;
   color: orange;
}
a{
    display: block;
    width: 100%;
    height: 100%;
}
p{
    display: inline;
    font-size: 20px;
}
.active{
   color: red; 
   background-color: rgba(8, 8, 8, .2);;
}
.active a{
    color: red; 
}
</style>