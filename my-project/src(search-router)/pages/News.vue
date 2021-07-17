<template>
<ul>
    <li v-for="item in news" :key="item.id">{{item.title}}</li>
</ul>
</template>
<script>
export default {
    name:"News",
    data(){
        return{
            news:[
                {id:1,title:'news 000001'},
                {id:2,title:'news 000002'},
                {id:3,title:'news 000003'},
                {id:4,title:'news 000004'},
                {id:5,title:'news 000005'},
            ]
        }
    }
}
</script>
<style  scoped>
</style>