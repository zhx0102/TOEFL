<template>
<div>
    <router-link to="/home" tag="button" replace active-class="active"> 首页</router-link>
    <router-link to="/about" replace active-class="active">关于</router-link>
    <router-view></router-view>
</div>
</template>
<script>
export default {
    name:"App"
}
</script>
<style  scoped>
/* .router-link-active{
    color:blueviolet
} */
.active{
    color:blueviolet
}
</style>