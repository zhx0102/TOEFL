<template>
  <ul>
    <li>{{ detail.id }}</li>
    <li>{{ detail.title }}</li>
    <li>{{ detail.content }}</li>
  </ul>
</template>
<script>
const msgAll = [
  { id: 1, title: "Message00001", content: "Message Content001" },
  { id: 2, title: "Message00003", content: "Message Content003" },
  { id: 3, title: "Message00005", content: "Message Content005" },
];
export default {
  name: "msgItem",
  props: ["id", "name", "title"],
  data() {
    return {
      detail: {},
    };
  },
  mounted() {
      this.updateUI(this.$route)
  },
  watch:{
      $route:function(value){
          this.updateUI(value);
      }
  },
  methods: {
    updateUI(route) {
      const id = route.params.id * 1;
      setTimeout(() => {
        const detail = msgAll.find((item) => {
          return item.id === id;
        });
        this.detail = detail;
      }, 1000);
    },
  },
};
</script>
<style scoped></style>
