<template>
  <ul>
    <li>{{ detail.id }}</li>
    <li>{{ detail.title }}</li>
    <li>{{ detail.content }}</li>
  </ul>
</template>
<script>
const msgAll = [
  { id: 1, title: "hello0001", content: "world 000001" },
  { id: 2, title: "hello0002", content: "world 000002" },
  { id: 3, title: "hello0003", content: "world 000003" },
  { id: 4, title: "hello0004", content: "world 000004" },
];
export default {
  name: "MsgItem",
  props: ["id", "name", "title"],
  data() {
    return {
      detail: {},
    };
  },
  mounted() {
    this.updateUI(this.$route);
  },
  watch: {
    $route: function(value) {
      this.updateUI(value);
    },
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
