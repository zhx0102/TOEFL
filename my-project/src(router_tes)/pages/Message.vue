<template>
  <div>
    <ul>
      <li v-for="item in msg" :key="item.id">
        <router-link
          :to="{
            name: 'msgItem',
            params: { id: item.id },
            query: { id2: item.id, title: item.title },
          }"
        >
          {{ item.id }}---{{ item.title }}
        </router-link>

        <!-- <router-link :to="`/home/message/msgItem${item.id}?id2=${item.id}&title=${item.title}`">{{
          item.title
        }}</router-link> -->

        <button @click="pushShow(item)">push</button>
        <button @click="replaceShow(item)">replace</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Message",
  data() {
    return {
      msg: [],
    };
  },
  methods: {
    pushShow(item) {
      this.$router.push(
        // `/home/message/msgItem/${item.id}?id2=${item.id}&title=${item.title}`
        {
          name: "msgItem",
          // path: '/home/message/detail', // 一旦需要指定params, 只能用name
          params: { id: item.id },
          query: {
            id2: item.id,
            title: item.title,
          },
        }
      );
    },
    replaceShow(item) {
      this.$router.replace(
        // `/home/message/msgItem/${item.id}?id2=${item.id}&title=${item.title}`
        // `/home/message/msgItem/${item.id}?id2=${item.id}&title=${item.title}`
        {
          name: "msgItem",
          // path: '/home/message/detail', // 一旦需要指定params, 只能用name
          params: { id: item.id },
          query: {
            id2: item.id,
            title: item.title,
          },
        }
      );
    },
  },
  mounted() {
    setTimeout(() => {
      const msg = [
        { id: 1, title: "message0001" },
        { id: 2, title: "message0002" },
        { id: 3, title: "message0003" },
        { id: 4, title: "message0004" },
      ];
      this.msg = msg;
    }, 1000);
  },
};
</script>
<style scoped></style>
