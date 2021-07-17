<template>
<ul>
    <li v-for="item in news" :key="item.id">
        {{item.id}} ---- {{item.title}}
    </li>
</ul>
</template>
<script>
export default {
    name:"News",
    data(){
        return{
            news:[
                {id:1,title:"news   00000001"},
                {id:2,title:"news   00000002"},
                {id:3,title:"news   00000003"},
                {id:4,title:"news   00000004"},
            ]
        }
    }
}
</script>
<style  scoped>
</style>