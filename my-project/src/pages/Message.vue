<template>
  <div>
    <ul>
      <li v-for="item in message" :key="item.id">
        <router-link :to="`/home/message/detail${item.id}?id2=${item.id}&title=${item.title}`">{{
          item.title
        }}</router-link>
        ------
        <button @click="pushShow(item)">push</button>
        <button @click="replaceShow(item)">replace</button>
      </li>
      <button @click="$router.back()">返回</button>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Message",
  props:[],
  methods:{
    pushShow(item){
      this.$router.push(`/home/message/detail${item.id}?id2=${item.id}&title=${item.title}`);
    },
    replaceShow(item){
      this.$router.replace(`/home/message/detail${item.id}?id2=${item.id}&title=${item.title}`);
    }
  },
  data() {
    return {
      message: [],
    };
  },
  mounted() {
    //模拟请求获取message
    setTimeout(() => {
      const messages = [
        { id: 1, title: "Message0000001" },
        { id: 2, title: "Message0000002" },
        { id: 3, title: "Message0000003" },
        { id: 4, title: "Message0000004" },
      ];
      this.message=messages;
    },1000);
  },
 
};
</script>
<style scoped></style>
