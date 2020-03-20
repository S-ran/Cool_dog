<template>
    <div class="bomoot">
        <div class="bomoot_item" >
            <nave-title>
                 <span slot="left">热门</span>
                 <span slot="right">电台</span>
                  <a slot="tail" href="https://www.kugou.com/yy/html/special.html" class="more">更多</a>
            </nave-title>
            <bomoot-item :radio="radio" />
             <nave-title class="nave">
                <span slot="left" >新歌</span>
                <span slot="right" >首发</span>
                <div slot="middles" 
                     class="middles"
                     :class="{active:nowIndex==index}"
                     v-for="(item,index) in smallTitle" 
                     :key="index" 
                     @mouseover="onOver(index)">
                    <span>{{item}}</span>
                </div>
                <a slot="tail" href="https://www.kugou.com/yy/html/special.html" class="more">更多</a>
            </nave-title>
            <singer-item :singers="goods" />
        </div> 
        <a href="https://fanxing.kugou.com/1060864" class="guanggao">
            <img src="https://adsfile.kugou.com/4dbf23659748a2c592fe6fac4cf2aff6.jpg" alt="">
        </a>  
    </div>
</template>

<script>
import NaveTitle from '../../../components/content/navTitle'
import BomootItem from '../../../components/content/bomootItem'
import SingerItem from '../../../components/content/singerItem'

    export default{
        name:'MainBottom',
        data(){
            return{
               smallTitle:['华语','欧美','日韩'],
               nowIndex:0,
               singTi:[
                    {now:[]},
                    {now:[]},
                    {now:[]}
                ],
            }
        },
        props:{
            radio:{
                type:Array,
                default(){
                    return []
                }
            },
            singers:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
          NaveTitle,
          BomootItem,
          SingerItem  
        },
        computed:{
             goods(){
                return this.singers[this.nowIndex].singer
            }
        },
        methods:{
            onOver(index){
                this.nowIndex = index
            }
        }
}
</script>

<style scoped>

.bomoot_item{
    height:375px ;
    display: flex;
    flex-flow: column wrap;
}
.nave{
    width: 330px;
}
.more{
    line-height: 40px;
}
.middles{
    display: inline;
    margin-left: 15px;
    cursor: pointer;/*光标：指针*/ 
}
.active{
    color: violet;
}
.guanggao{
    display: block;
    margin: 30px auto;
}
</style>