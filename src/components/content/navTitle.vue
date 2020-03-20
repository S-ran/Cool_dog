<template>
        <div class="itemTitle">
            <h3><b><slot name="left" /></b><slot name="right" /></h3>
            <slot name="middles"/>
            <slot name="tail"/>
        </div>
</template>

<script>
    export default{
        name:'navTitle',
        
}
</script>

<style scoped>
.itemTitle{
    width: 650px;
    height: 60px;
    line-height: 150%;
}
h3{
    display: inline;
    font-size: 30px;
    font-style: normal;
}
h3 b{
    color: violet;
}
a{
    float: right;
}
</style>