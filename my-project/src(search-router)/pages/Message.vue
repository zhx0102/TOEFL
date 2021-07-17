<template>
  <div>
    <ul>
      <li v-for="item in users" :key="item.id">
        <router-link
          :to="{
            name: 'msgItem',
            params: { id: item.id },
            query: { id2: item.id, name: item.name, title: item.title },
          }"
        >
          {{ item.id }} --- {{ item.name }} --- {{ item.title }}
        </router-link>
        <button @click="pushShow(item)">push</button>
        <button @click="replaceShow(item)">replace</button>
      </li>
      <button @click="this.$router.back()">back</button>
    </ul>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Message",
  methods:{
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
      },
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
      }
  },
  data() {
    return {
      users: [
        { id: 1, name: "Bob", title: "hello 00001" },
        { id: 2, name: "Lisa", title: "hello 00002" },
        { id: 3, name: "Toy", title: "hello 00003" },
      ],
    };
  },
};
</script>
<style scoped></style>
