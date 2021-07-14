<template>
  <div>
    <ul>
      <li>{{ msg.id }}</li>
      <li>{{ msg.name }}</li>
      <li>{{ msg.title }}</li>
    </ul>
  </div>
</template>
<script>
const allMsg = [
  { id: 1, name: "Tom", title: "hello00001" },
  { id: 2, name: "Lina", title: "hello00002" },
  { id: 3, name: "Bob", title: "hello00003" },
  { id: 4, name: "Toy", title: "hello00004" },
];
export default {
  name: "MsgItem",
  props: ["id", "title",'name'],
  data() {
    return {
      msg: {},
    };
  },
  mounted() {
      this.updateUI(this.$route);
  },
 watch:{
     $route: function (value) {
      this.updateUI(value)
    }
 },
  methods: {
    updateUI(route) {
      const id = route.params.id * 1;
      setTimeout(() => {
        const detail = allMsg.find(item => item.id===id)
        this.msg = detail;
      }, 1000);
    },
  },
};
</script>
<style scoped></style>
