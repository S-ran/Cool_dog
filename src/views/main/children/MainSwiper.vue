<template>
       <swiper>
           <swiper-item v-for="(item, index) in banners" :key="index" >
               <img :src="item.image">  
            </swiper-item>
        </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/compon/swiper/index'

    export default{
        name:'MainSwiper',
        data(){
            return{
            }       
        },
        props:{
            banners:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            Swiper, SwiperItem
        }
}
</script>

<style scoped>
img{
    width: 1600px;
    height: 326px;
    display: block;
    margin: 0 auto;

}
</style>