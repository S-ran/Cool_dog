<template>
  <div class="bo" >
        <div id="ap" class="ap" @mouseover="onOver"
					    @mouseout="onOut">          
             <slot ></slot>
        </div>
		<div class="iconfont icon-huabanfuben1" 
			 :class="{active_show:isActive}"
			 v-show="isShow"  
			 @mouseover="onZi" 
			 @click="onPric"
			 @mouseout="onOut_Pric"/>
		<div class="iconfont icon-huabanfuben" 
		     :class="{active_show:isActive}" 
			 v-show="isShow"  
			 @mouseover="onZi"
			 @mouseout="onOut_Next"
			 @click="onNext"/>
        <ol class="biao">
				<li class="biao_item"
				    :class="{active:now==index}" 
					v-for="(item,index) in message" :key="index"
					@mouseover="onOver_item(index)"
					@mouseout="onOut_item(index)">
					{{item}}
				</li>
		</ol>
    </div>
</template>

<script>

  export default {
		name: "Swiper",
		data(){
		return{
					message:[],
					now:0,			//索引值
                    Lenght:0,		//item长度
                    time:null,
                    fa:true,  	   
					time:null,
					isShow:false,
					pric:false,
					isActive:false
		}
	},
		mounted(){		
            setTimeout(()=>{
				this.Lenght = document.getElementById('ap').children.length;
				for(var j=0;j<this.Lenght;j++){
					this.message.push(' ')
				}
				const oDiv = document.querySelectorAll('.slide')
				this.timer(oDiv)
			},500)	    
		},
		methods:{
			timer(obj){	               
                        this.time = setInterval(()=>{this.next(obj)},3000)
                },	
            //上下一张
            next(obj){
				if(this.pric==true){
					this.now--;
					for(let i = 0;i<this.Lenght;i++){
                        obj[i].style.zIndex = 0;   
                    }
					if(this.now<0){
                            this.now=this.Lenght-1;
                            for(let i = 0;i<this.Lenght;i++){
                                obj[i].style.zIndex = 0;   
                            }
						}	
				}else{
					
					this.now++;
               		if(this.now==this.Lenght){
                            this.now=0;
                            for(let i = 0;i<this.Lenght;i++){
                                obj[i].style.zIndex = 0;   
                            }
						}			
				}
                this.next_Item(obj,this.now)        
            },
            next_Over(index){
					clearInterval(this.time)
                    const oDiv = document.querySelectorAll('.slide')
                    this.now = index
                    for(let i = 0;i<this.Lenght;i++){
                                oDiv[i].style.zIndex = 0;   
                            }
                            this.next_Item(oDiv,this.now,()=>{    
                                this.fa = false       
                            })        
            },
            next_Item(obj,index,Fn){   
                obj[index].style.zIndex=index+1;
                obj[index].style.opacity = 0;
                get_Move(obj[index],{'opacity':100},9,()=>{
                    if(Fn)Fn()
                })
            },
            onOver(){
				this.isShow = true
                clearInterval(this.time)
            },
            onOut(){
				this.isShow = false
                const obj = document.querySelectorAll('.slide')
                this.time = setInterval(()=>{this.next(obj)},3000)
            },
			onOver_item(index){
						this.isShow = true
                        if(this.fa == true){   
                            this.next_Over(index);
                        }
                        else if(this.now!=index&&this.fa == false){
                            this.fa = true;
                            this.next_Over(index);
                        }                    
				},
            onOut_item(index){ 
                    if(this.fa == false){
                        this.fa = true
                    }         
				},
			onZi(){
				this.isShow = true
				this.isActive = true
				clearInterval(this.time)
			},
			onNext(){
				const obj = document.querySelectorAll('.slide')
				this.next(obj)
			},
			onPric(){
				this.pric=true
				const obj = document.querySelectorAll('.slide')
				this.next(obj)
			},
			onOut_Pric(){
				this.isActive = false
				this.pric=false
			},
			onOut_Next(){
				this.isActive = false
			}
		}   
}
function get_Move(obj,json,n,fnEnd){/*对象，{样式名:修改变量}，回调函数*/
					clearInterval(obj.timer)/*首先要先清除定时器*/
					obj.timer=setInterval(function(){/*开启定时器*/
						var Bstop = true/*假设所有目标到达地点*/
						for(var attr in json){/*for in 循环，每次一个变量只走一点*/
						var cur = 0  /*设定接受实际路程量*/
						/*处理透明度兼容问题*/
						if(attr=='opacity')/*如果该参数为oppacity*/
							cur =Math.round(parseFloat(Get_style(obj,attr))*100)/*将获取到的目标值化整*/
						else
							cur = parseInt(Get_style(obj,attr))/*将获取到的目标值化整*/
						var spend = (json[attr]-cur)/n;/*设定速度为实际路程-当前路程/6*/
						spend=spend>0?Math.ceil(spend):Math.floor(spend)/*防止过头，如果>0往后取整,<0w往前取整*/
						if(cur!=json[attr])/*如果有一个目标没到*/
						Bstop = false//那就是没到
						if(attr=='opacity'){//如果是不透明度,这里处理兼容问题
							obj.style.filter='alpha(opacity:'+(cur+spend)+')'
							obj.style.opacity=(cur+spend)/100
						}
						else
							obj.style[attr]=cur+spend+'px'/*将实际路程+速度赋给当前obj*/
						if(Bstop){/*如果都到了*/
							clearInterval(obj.timer)/*清除定时器*/
							if(fnEnd)fnEnd()/*如果有回调则执行*/
						}
					}
					},30)
		}
function Get_style(obj,name){/*对象，样式名*//*这里处理浏览器透明度兼容问题*/
		if(obj.currentStyle) return obj.currentStyle[name]/*获取当前样式*/
				else return getComputedStyle(obj,false)[name]/*获取计算后的样式*/
}


</script>

<style scoped>
/*大插槽*/
.bo{
		 width: 100%;
		 height: 326px;  
		 position: relative;
		 
	}
.ap{
		width: 100%;
		height: 326px; 
		position: relative;	
	}
.ap >div {
	position: absolute;
	top: 0;left:0;
	z-index: 0;
	overflow: hidden;
} 
.icon-huabanfuben1{
	width: 95px;
	height: 120px;
	background-color: #fff;
	opacity: .3;
	position:absolute;
	top: 50%;
	left: -18px;
	transform: translate(0,-50%);
	z-index: 999;
	font-size: 100px;
}
.icon-huabanfuben{
	width: 80px;
	height: 120px;
	background-color: #fff;
	opacity: .3;
	position:absolute;
	top: 50%;
	right: -40px;
	transform: translate(-50%,-50%);
	z-index: 999;
	font-size: 100px;
}
/* .bo::after{
    content:"";				设置内容为空
    height:300px;				高度为0
    line-height:100%;			行高为0
    display:block;			将文本转为块级元素
    visibility:hidden;		将元素隐藏
    clear:both;				清除浮动
} */
.biao{
	position: absolute;
	text-align:center;
	line-height: 10px;z-index: 99;
	bottom: 2px;left: 50%; transform: translate(-70%,-50%);}
ol li{
	list-style: none;		
	width: 8px;height: 8px;
	border-radius: 50%;
	float: left;
	background-color: black;
	margin: 0 8px 8px 8px;
	opacity: 0.4;
	cursor: pointer;/*光标：指针*/ 
	}
.active { background: red;
		  width: 14px;height:14px;
		  margin: -2px 8px 8px 8px;
		  opacity: 1;
		  }
.active_show{
	opacity: .8;
}
</style>