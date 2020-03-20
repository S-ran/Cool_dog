<template>
    <div class="bom_item">
        <div class="item_img" v-for="(item,index) in radio" :key="index" @mouseover="onOver(index)" @mouseout="onOut">
            <a :href="'https://www.kugou.com/fmweb/html/index.html?chanelId='+item.link">
                <img :src="item.url" alt="">
                <div>{{item.name}}</div>
                <div class="bian"  v-show='isShow==index' />
            </a>
        </div>
    </div>
</template>

<script>
    export default{
        name:'bomootItem',
        data(){
            return{
                isShow:99
            }
        },
        props:{
            radio:{
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
.bom_item{
    width:650px;
    height: 309px;
    display: flex;
    flex-flow: wrap row ;
    justify-content: space-between;
     overflow: hidden;
}
.item_img{
    width: 114px;
    text-align: center;
    font-size: 15px;
    position: relative;
}
.bian{
    width: 100%;
    height: 114px;
    border-radius: 50%;
    position: absolute;
    top: 0;left: 0;
    background:  rgba(8, 8, 8, .4);
    font-size: 50px;
    color: cornflowerblue;
}
</style>