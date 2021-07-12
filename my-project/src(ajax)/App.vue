<template>
<div>
    <h2 v-if="!repoName">LOADING...</h2>
    <p v-else>
      most star repo is 
      <a :href="repoUrl">{{repoName}}</a>
    </p>
</div>
</template>
<script>
import    axios from 'axios'
export default {
    name:"App",
    data(){
        return{
            repoName:"",//仓库名称
            repoUrl:"",//仓库地址
        }
    },
    mounted(){
        //使用axios发送ajax请求
        axios.get("https://api.github.com/search/repositories?q=r&sort=stars")
        .then(response=>{
            console.log('+++',response);
            const result=response.data;
            console.log(result);
            const {name,html_url}=result.items[0];
            //更新数据
            this.repoName=name;
            this.repoUrl=html_url;
        }).catch(error=>{
            console.dir(error);
            alert(error.message)
        })
    }
}
</script>
<style  scoped>
</style>