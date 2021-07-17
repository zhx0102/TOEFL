<template>
<div>
    <ul>
        <li v-for="item in msg" :key="item.id">
            <router-link :to="{
                name:'msgItem',
                params:{id:item.id},
                query:{id2:item.id,name:item.name,title:item.title}
            }">
                {{item.id}} --- {{item.name}} --- {{item.title}}
            </router-link>
            <button @click="pushShow(item)">push</button>
            <button @click="replaceShow(item)">replace</button>
        </li>
        <button @click="$router.back()">back</button>
    </ul>
    <router-view></router-view>
</div>
</template>
<script>
const msgAll=[
                {id:1,name:"Bob",title:"hello 0000001"},
                {id:2,name:"Lisa",title:"hello 0000002"},
                {id:3,name:"Linda",title:"hello 0000003"},
                {id:4,name:"Lulu",title:"hello 0000004"},
            ]
export default {
    name:"Message",
    data(){
        return {
            msg:{}
        }
    },
    mounted(){
        setTimeout(()=>{
            this.msg=msgAll;
        },1000)
    },
    methods:{
        replaceShow(item){
            this.$router.replace({
                name:'msgItem',
                params:{id:item.id},
                query:{
                    id2:item.id,
                    name:item.name,
                    title:item.title
                }
            })
        },
        pushShow(item){
            this.$router.push({
                name:'msgItem',
                params:{id:item.id},
                query:{
                    id2:item.id,
                    name:item.name,
                    title:item.title
                }
            })
        }
    }
}
</script>
<style  scoped>
</style>