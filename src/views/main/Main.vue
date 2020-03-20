<template>
    <div class="mains">
        <swiper :banners="banners" />
        <div class="mains_frame">
             <nave-title>
                 <span slot="left">精选</span>
                 <span slot="right">歌单</span>
                  <a slot="tail" href="https://www.kugou.com/yy/html/special.html" class="more">更多</a>
            </nave-title>
            <nave-title class="nav_right">
                 <span slot="left">热门</span>
                 <span slot="right">榜单</span>
                 <a slot="tail" href="https://www.kugou.com/yy/html/rank.html?from=homepage" class="more">更多</a>
            </nave-title>
            <main-frame :frame="frame" :listinfo="listinfo" />
            <main-middle :newsItem="newsItem" :mvInfo='mvInfo' />   
            <a class="a_img" href="https://fanxing.kugou.com/3170258">
            <img src="https://adsfile.kugou.com/5c12de72ba68a5ac0c2abefa911d8b54.jpg" alt="">
            </a>
            <main-bottom :radio="radio" :singers="singerItem" />
            <main-foot :scrap="scrap" />
        </div>
    </div>
</template>

<script>
import Swiper from './children/MainSwiper'
import MainFrame from './children/MainFrame'
import NaveTitle from '../../components/content/navTitle'
import MainMiddle from './children/MainMiddle'
import MainBottom from './children/MainBottom'
import MainFoot from './children/MainFoot'

import {getBody,getList,getNew,getMv,getRadio,getSinger,getScrap} from '../../network/body'

    export default{
        name:'Mains',
        data(){
            return{
                banners:[],
                frame:[],
                listinfo:[
                   {rankname:'',url:'',songinfo:[{songname:''},{songname:''},{songname:''}],rankid:''},
                   {rankname:'',url:'',songinfo:[{songname:''},{songname:''},{songname:''}],rankid:''},
                   {rankname:'',url:'',songinfo:[{songname:''},{songname:''},{songname:''}],rankid:''}
                ],
                newsItem:[{new:[]},{new:[]},{new:[]},{new:[]}],
                mvInfo:[
                    {img:'',title:'',singname:'',videoid:''},
                    {img:'',title:'',singname:'',videoid:''},
                    {img:'',title:'',singname:'',videoid:''}
                ],
                radio:[],
                singerItem:[
                    {singer:[]},
                    {singer:[]},
                    {singer:[]},
                ],
                scrap:[]
            }
        },
        components:{
            Swiper,
            MainFrame,
            NaveTitle,
            MainMiddle,
            MainBottom,
            MainFoot
        },
        created(){
            this._getBody() //获取轮播及精选
            this._getList() //获取热门榜单数据
            this._getNew(1) //获取新歌华语
            this._getNew(2) //获取新歌欧美
            this._getNew(3) //获取新歌韩国
            this._getNew(4) //获取新歌日本
            this._getMv()   //获取mv推荐
            this._getRadio()//获取热门电台
            this._getSinger(1)//获取华语歌手
            this._getSinger(2)//获取欧美歌手
            this._getSinger(3)//获取日韩歌手
            this._getScrap()  //获取赞助商
        },
        methods:{
            //获取轮播及精选
            _getBody(){
                getBody().then(res =>{
                    this.banners = res.data.swip
                    this.frame = res.data.frame
                })
            },
            //获取热门榜单数据
            _getList(){
                getList().then(res =>{                 
                    let datamusic = res.data.replace('<!--KG_TAG_RES_START-->','').replace('<!--KG_TAG_RES_END-->','')   
                    datamusic =  JSON.parse(datamusic)  
                    const data = datamusic.data.info         
                    //console.log(data) 
                    let arr = [];let ar = [];
                    data.map( i =>{ arr.push(i.imgurl)})
                    arr.forEach(i =>{ ar.push(i.replace('/{size}','')) })
                    arr = [];
                    this.listinfo[0].url = ar[0];this.listinfo[0].rankname = data[0].rankname;this.listinfo[0].songinfo = (data[0].songinfo)
                    this.listinfo[0].rankid = data[0].rankid
                    this.listinfo[1].url = ar[1];this.listinfo[1].rankname = data[1].rankname;this.listinfo[1].songinfo = (data[1].songinfo)
                    this.listinfo[1].rankid = data[1].rankid
                    this.listinfo[2].url = ar[5];this.listinfo[2].rankname = data[5].rankname;this.listinfo[2].songinfo = (data[5].songinfo)
                    this.listinfo[2].rankid = data[5].rankid
                    ar = [];
                    //console.log(this.listinfo)
                })
            },
            //获取新歌分类数据
            _getNew(type){
                getNew(type).then(res =>{
                    let datamusic = res.data.replace('<!--KG_TAG_RES_START-->','').replace('<!--KG_TAG_RES_END-->','')   
                    datamusic =  JSON.parse(datamusic)
                    const data = datamusic.data.info
                    //console.log(data) 
                    this.newsItem[type-1].new = data
                    //console.log(this.newsItem) 
                })
            },
            //获取推荐mv信息
            _getMv(){
                getMv().then(res =>{
                    const data = res.data.data.info
                    console.log(data)
                    let arr = [];let ar = [];
                    data.map( i =>{ arr.push(i.img)})
                    arr.forEach(i =>{ ar.push(i.replace('/{size}','')) })
                    arr = [];
                    this.mvInfo[0].img = ar[13]; this.mvInfo[0].title = data[13].videoname;
                    this.mvInfo[0].singname = data[13].singername; this.mvInfo[0].videoid = data[13].videoid;
                    this.mvInfo[1].img = ar[9]; this.mvInfo[1].title = data[9].videoname;
                    this.mvInfo[1].singname = data[9].singername; this.mvInfo[1].videoid = data[9].videoid;
                    this.mvInfo[2].img = ar[12]; this.mvInfo[2].title = data[12].videoname;
                    this.mvInfo[2].singname = data[12].singername; this.mvInfo[2].videoid = data[12].videoid;
                    //console.log(this.mvInfo)
                })
            },
            //获取热门电台
            _getRadio(){
                getRadio().then(res =>{
                    this.radio = res.data.top
                })
            },
            //获取热门歌手
            _getSinger(type){
                getSinger(type).then(res =>{
                    const data = res.data.data.info
                    let arr =[];let ar = [];
                    for(var i = 0;i<15;i++){
                        this.singerItem[type-1].singer.push(data[i])
                        arr.push(data[i].imgurl)
                    } 
                    arr.forEach(i =>{ ar.push(i.replace('http://singerimg.kugou.com/uploadpic/softhead/{size}','https://imgessl.kugou.com/uploadpic/softhead/240')) })
                    for(var i = 0;i<15;i++){
                        this.singerItem[type-1].singer[i].imgurl = ar[i]
                    }
                    arr = [];ar = [];            
                    // console.log(this.singerItem)
                })
            },
            //获取赞助商
            _getScrap(){
                getScrap().then(res =>{
                    this.scrap = res.data.top
                })
            }
        }
}
</script>

<style scoped>

.mains_frame{
    width: 1000px;
    height: 1862px;
    background-color: white;
    margin: 50px auto;
    position: relative;
}
.nav_right{
    position:absolute;
    width: 320px;
    right: 0;
    top: 0;
}
.a_img{
    display: block;
    margin: 50px auto;
}
</style>
