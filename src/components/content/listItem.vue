<template>
    <div class="list_item">
        <div class="item_img">
            <slot name="img" />    
        </div> 
        <div class="item_title">
            <slot name="title" />
            <slot name="content"/>
            <slot name="link" />    
        </div>  
    </div>
</template>

<script>
    export default{
        name:'lidtItem',
        
}
</script>

<style scoped>
.list_item{
    width: 320px;
    height: 97px;
    display: flex;
    flex-flow: nowrap row;
    background-color: #f6f6f6;
    position: relative;
}
.item_img{
    width: 97px;
}
.item_img img{
    width: 97px;
    height: 97px;
    background-color: tomato;
}
.item_title {
    width: 100%;
    height: 100%;
    line-height: 70%;
    margin-left:10px ;
    overflow: hidden;
}

p{
    color: #333;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap; 
    margin: 0 auto;
    line-height: 30px;
}

</style>