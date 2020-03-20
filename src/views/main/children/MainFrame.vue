<template>
    <div class="frame">
        <div class="left">
             <frame-left :frame="frame"/>
        </div>  
        <div class="right">
            <list-item v-for="(item,index) in listinfo" :key="index" @mouseover.native="onOver(index)" @mouseout.native="onOut">
                <img :src="item.url" slot="img" alt="">       
                    <p class="list_title" slot="title">{{item.rankname}}</p>
                <div class="list_content" slot="content">
                    <p>1.{{item.songinfo[0].songname}}</p>
                    <p>2.{{item.songinfo[1].songname}}</p>
                </div>
                <div slot="link" class="top_link" v-show='isShow==index'>
                    <a :href="'https://www.kugou.com/yy/rank/home/1-'+item.rankid+'.html?from=homepage'"></a>
                </div>
            </list-item>
        </div>     
        <div class="link">
            <a href="https://fanxing.kugou.com/1086703">
            <img src="https://adsfile.kugou.com/8f30ef49f8fb242d4ec935e748610142.jpg"/>
            </a>
        </div>
    </div>
</template>

<script>
import frameLeft from '../../../components/content/frameLeft'
import listItem from '../../../components/content/listItem'

    export default{
        name:'MainFrame',
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
            },
            listinfo:{
                 type:Array,
                default(){
                    return []
                }
            }
        },
        mounted(){
        },
        components:{
            frameLeft,
            listItem
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
.frame{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
}
.left{
    width: 660px;
    height: 330px; 
}
.right{
    width: 320px;
    height: 330px;
    margin-left:20px;
    display: flex;
    justify-content: space-between;
    flex-flow: column ;
}
.list_title{
    font-weight: bold;
}
.link{
    margin: 40px auto;
}
.top_link{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;left: 0;
    background-color: rgba(8, 8, 8, 0.2);
}
.top_link a{
    display: block;
    width: 100%;
    height: 100%;
}
</style>