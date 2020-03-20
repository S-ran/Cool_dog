<template>
    <div class="head_bottom">
        <div  class="head_left">
                <ul>
                    <li v-for="(item,index) in bottom.lable" :key="index" 
                        :class="{active:isActive==index}" 
                        @mouseover="onOver(index)"
                        @mouseout="onOut">
                      <a :href="item.url">
                        {{item.name}}
                      </a> 
                    </li>
                </ul>
                <ul v-show="isShow" >
                    <li v-for="(item,index) in bottom.toMore" :key="index"
                        :class="{active_show:isActive_show==index}" 
                        @mouseover="onOver_show(index)" 
                        @mouseout="onOut_show"  >
                        <a :href="item.url">
                        {{item.name}}
                      </a> 
                    </li>
                </ul>
        </div>
        <div class="head_right">
            <ul>
                <li class="iconfont" v-for="(item,index) in bottom.toOther" :key="index" 
                    :class="{active_right:isActive_right==index}"
                    @mouseover="onOver_right(index)"
                    @mouseout="onOut_right">
                    <a :href="item.url" :class="item.style_name">{{item.name}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        name:'HeadBottom',
        data(){
            return{
                isActive:0,
                isShow:false,
                isActive_show:5,
                isActive_right:6,
            }
        },
        props:{
            bottom:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        methods:{
            onOver(index){
                this.isActive = index;
                index==3?this.isShow = true:this.isShow = false;
            },
            onOut(){
                this.isActive = 0;
                this.isShow = false;
            },
            onOver_show(index){
                this.isActive = 3;
                this.isShow = true;
                this.isActive_show = index;
            },
            onOut_show(){
                this.isActive = 0;
                this.isActive_show = 5;
                this.isShow = false;
            },
            onOver_right(index){
                this.isActive_right = index;
            },
            onOut_right(){
                this.isActive_right = 6;
            }
        }
}
</script>

<style scoped>
.a{
    font-size:300px; 
}
.head_bottom{
    width: 1000px;
    height:55px;
    /* display: flex;
    overflow: hidden; 
    justify-content: center;*/
    margin: 0 auto;
}
ul{
    margin-top:0; 
    height: 100%;
    line-height: 55px;   
}
li{
    list-style: none;
    color: #fff;
    font-size:90%;
}
a{
    color: #fff
}
/* left */
.head_left{
    width: 500px;
    height: 100%;
    margin: 0 auto;
    float: left;
    position: relative;
    /* overflow: hidden; */
}
.head_left ul:first-child{ 
    margin: 0 auto;
    width: 500px;
    padding: 0;
    background-color: black;
}
.head_left ul:first-child >li{
    width: 125px;
    height: 100%;
    float: left;
    text-align: center;
}
/* show */
.head_left ul:last-child{ 
    width: 125px;
    height: 400%;
    padding: 0;
    background-color: black;
    position: absolute;
    right: 0;
    z-index: 9;
}
.head_left ul:last-child >li{
    width: 125px;
    height: 25%;
    text-align: center;
}
/* right */
.head_right{
    width: 500px;
    height: 100%;
    margin: 0 auto;
    float: right;
    overflow: hidden;
}
.head_right ul{
     padding: 0;
  background-color: black;
}
.head_right ul >li{
     width: 83px;
     height: 100%;
     float: left;
     text-align: center;
}
/* font */
.iconfont{
    font-size:90%;
}
.active{
    background-color: #0c8ed9;
}
/* .active_show{
    background-color:#0c8ed9;
   
} */
.active_show > a{
     color: greenyellow
}
.active_right > a{
    color:#0c8ed9;
}
</style>