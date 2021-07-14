<template>
    <ul>
        <li v-for="item in news" :key="item.id">
            {{item.id}}----{{item.new}}
        </li>
    </ul>
</template>
<script>
export default {
    name:"News",
    data(){
        return{
            news:[
                {id:1,new:"news00001"},
                {id:2,new:"news00002"},
                {id:3,new:"news00003"},
                {id:4,new:"news00004"},
            ]
        }
    }
}
</script>
<style  scoped>
</style>