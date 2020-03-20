<template>
    <div class="head">
        <head-top :lable="lable"/>
        <div class="bottom">
            <head-bottom :bottom="bottom" />
        </div>
    </div>
</template>

<script>
import HeadTop from './children/HeadTop'
import HeadBottom from './children/HeadBottom'

import {getHead} from '../../network/heade'

export default{
        name:'Head',
        data(){
            return{
               lable:[],
               bottom:{}
            }
        }, 
        components:{
            HeadTop,
            HeadBottom
        },     
        created(){
            this._getHead()
        },
        methods:{
           _getHead(){
               getHead().then(res =>{
                   this.lable = res.data.top
                   this.bottom = res.data.bottom
               })
           } 
        }
        
}
</script>

<style scoped>
.head{
    width: 100%;
    height: 20%;
}
.bottom{
    width: 100%;
    background-color: black
}
</style>