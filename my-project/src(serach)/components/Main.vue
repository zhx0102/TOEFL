<template>
  <div>
      <h2 v-if="firstMsg">请输入关键字进行搜索</h2>
      <h2 v-else-if="Loading">请求搜索中.....</h2>
      <h2 v-else-if="errorMsg"></h2>
    <div class="row" v-else>
      <div class="card" v-for="user in users" :key="user.name">
        <a :href="user.url">
          <img
            :src="user.avatar_url"
            style="width: 100px"
          />
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "Main",
  data(){
      return{
          firstMsg:true,
          Loading:false,
          errorMsg:false,
          users:[],
      }
  },
  created(){
      this.$bus.$on("search",this.search);
  },
  methods:{
      search(searchName){
          //更新请求中的状态
          this.firstMsg=false,
          this.Loading=true;
          axios.get("https://api.github.com/search/users",{
              params:{
                  q:searchName
              }
          }).then(response=>{
              //请求成更新为成功状态
              this.Loading=false;
              const data = response.data;
            //   console.log(data);
            const users = data.items.map(item=>({
                name:item.login,
                avatar_url:item.avatar_url,
                url:item.html_url
            }))
            this.users=users;
          }).catch(error=>{
              this.Loading=false;
              this.errorMsg=error.message
          })
      }
  }
};
</script>
<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
