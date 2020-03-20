<template>
     <div class="head_top">
            <div class="head_logo">
            <a href="www.kugou.com">
                <img src="https://staticssl.kugou.com/public/root/images/logo.png" alt="">
            </a>
            </div>
            <div class="head_input">
                <input type="text" placeholder="" @input="onInput" @blur="onBlur"/>
                <a :href="url+url_config" class="iconfont icon-sousuo"></a>
            </div>
            <div  class="head_lable">
                <ul>
                    <li v-for="(item,index) in lable" :key="index">
                        <a :href="item.url" 
                           :class="{active:isActive==index}"
                           @mouseover="onOver(index)"
                           @mouseout="onOut">
                            {{item.name}}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="head_but">
                   <a href="#">登录</a>           
            </div>
    </div>
</template>

<script>
    export default{
        name:'HeadTop',
        data(){
            return{
               url:'https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=',
               url_config:'像🐟-薛之谦',
               isActive:3
            }
        },
        props:{
            lable:{
                type:Array,
                default(){
                return []
              }
            }

        },
        mounted(){
            const oDiv = document.querySelector('input')
            oDiv.placeholder = this.url_config
        },
        methods:{
            onOver(index){
                this.isActive = index
            },
            onOut(){
                this.isActive = 3;
            },
            onInput(e){
                console.log(e.target.value)
                this.url_config = e.target.value 
            },
            onBlur(e){
                e.target.value = ''
            }
        }
}
</script>

<style scoped>
.head_top{
    height:80px;
    display: flex;
    overflow: hidden;
    justify-content: center;
}
.head_logo{
    margin: auto 0;
   /* margin-left: -100px; */
}
/* 输入框部分 */
.head_input{
    margin: auto 0;
    margin-left: 22px;
    position: relative;
}
.head_input input{
     height: 30px;
}
.head_input > a{
    z-index: 9;
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 7px;
    top: 5px;
    font-size: 24px;
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:17px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: black ;
    background-color: white;
}

/* 标签 */
.head_lable{
   width:260px;
   height:45px ;
}
.head_lable ul{
   width:70%;
   height:130%; 
   margin-top:10px; 
   border-right:2px #eee solid 
}
.head_lable ul > li{
    padding-top: 10px;
    float: left;
    margin-left: 8px;
    list-style: none;
}
a{
    color: cadetblue
}
/* 登录 */
.head_but{
    width: 55px;
    height: 33px;
    margin: auto 0; 
    margin-left: 30px;
    background-color: #0c8ed9;
    text-align: center;
    line-height: 33px;
    border-radius:8px;
}
.head_but a{
    font-size: 20px;
    color: azure;
}
/* active */
.active{
    color:greenyellow; 
}
</style>