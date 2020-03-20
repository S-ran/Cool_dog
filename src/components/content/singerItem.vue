<template>
    <div id="singer">
        <div class="singer-item">
            <div class="item_sing" 
                 v-for="(item,index) in singers" 
                 :key="index"
                 @mouseover="imgOver"
                 @mouseout="imgOut" >
                <a :href='"https://www.kugou.com/yy/singer/home/"+item.singerid+".html"'>
                <img :src="item.imgurl" alt="">
                <p>{{item.singername}}</p>
                </a>
            </div>
            
        </div>
            <div class="left iconfont icon-back"
                 :class="{active:isActive}"
                 @mouseover="onOver"
                 @mouseout="onOut" 
                 @click="onClickpric">

            </div>
            <div class="right iconfont icon-label_arrow"
                 :class="{active:isActive}"
                 @mouseover="onOver"
                 @mouseout="onOut" 
                 @click="onClicknext">

            </div>
    </div>
</template>

<script>

    export default{
        name:'singerItem',
        data(){
            return{
                nowIndex:0,
                timer:null,
                deg:0,
                now:0,
                isActive:false,
                fa:0
            }
        },
        props:{
            singers:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        mounted(){
            setTimeout(()=>{
                var oImg = document.getElementsByClassName('item_sing') 
                var oItem = document.querySelector('.singer-item')
                this.times(oImg,oItem)
            },500)
            
        },
        methods:{
            times(obj,item){
                this.deg = 360/obj.length
                this.now = this.deg
               Array.prototype.forEach.call(obj,(oImg,index,self)=>{
                   oImg.style.transform ='rotateY('+(this.deg*index)+'deg) translatez(350px)';
                   oImg.style.transition = '1s+'+(self.length-index)*0.1+'s';
               })
                this.setTimme(item)
            },
            setTimme(item){
                this.timer = setInterval(() => {
                  item.style.transform = 'rotateY('+-this.now+'deg)';
                  this.now+=this.deg
                },2000);
            },
            onOver(){
                clearInterval(this.timer)
                this.isActive =true;
            },
            onOut(){
                this.isActive =false;
                var oItem = document.querySelector('.singer-item')
                this.setTimme(oItem) 
            },
            onClicknext(){
                 if(this.fa == 3) this.now+=this.deg*2
                 this.fa = 2 
                 var oItem = document.querySelector('.singer-item')
                 oItem.style.transform = 'rotateY('+-this.now+'deg)';    
                 this.now+=this.deg 
            },
            onClickpric(){
                if(this.fa == 2) this.now-=this.deg*2
                this.fa = 3;
                var oItem = document.querySelector('.singer-item')
                console.log(this.now) 
                oItem.style.transform = 'rotateY('+-this.now+'deg)';    
                 this.now-=this.deg       
            },
            imgOver(){
                clearInterval(this.timer)
            },
            imgOut(){
                var oItem = document.querySelector('.singer-item')
                this.setTimme(oItem) 
            }
        }
}
</script>

<style scoped>
#singer{
    width:330px ;
    height: 310px;
    perspective: 800px;
    background-color: black;
    border-radius: 10px;
    overflow: hidden;
}
.singer-item{
    width:162px ;
    height: 182px;
    margin: 100px 100px;
    position: relative; 
    /* border: 1px red solid; */
    transform-style: preserve-3d;
    transform: rotateX(0deg) rotateY(0deg);
    transition:1s;
}
.item_sing{
    position: absolute;
    width:160px;
    height: 180px; 
    transform: rotateX(0deg) rotateY(0deg);
}
img{
    width:110px;
    height: 110px;
}
p{
    width: 100%;
    position: absolute;
    margin:20px -20px;
    bottom: 50px;
    line-height: 30px;
    font-size:5px;
    color: #fff;
    text-align: center;
    background-color: rgba(8, 8, 8, .4);
}
a{
    height: 110px;
    width: 110px;
}
.left{
    position:absolute;
    left: 0;bottom: 0;
    background-color: rgb(250, 249, 249,.3);
    color: #0c8ed9;
    width:50px;
    height: 50px;
    cursor: pointer;
    text-align: center;
    line-height: 50px;
    font-size: 50px;
    padding-left:15px ;
}
.right{
    position:absolute;
    right: 0;bottom: 0;
    background-color:rgb(250, 249, 249,.3);
    color:#0c8ed9 ;
    width:50px;
    height: 50px;
    cursor: pointer;
    text-align: center;
    line-height: 50px;
    font-size: 50px;
    padding-right:15px ;
    
}
.active{
  background-color:rgb(250, 249, 249,.9);
}
</style>