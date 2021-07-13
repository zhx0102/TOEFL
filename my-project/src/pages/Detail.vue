<template>
  <ul>
    <li>props id:{{id}}</li>
    <li>props name:{{name}}</li>
    <li>props title:{{title}}</li>
      <li>query----{{$route.query.id}}----{{$route.query.title}}</li>
    <li>{{ $route.params.id }}</li>
    <li>{{ detail.title }}</li>
    <li>{{ detail.msgContent }}</li>
  </ul>
</template>
<script>
const allMsg = [
  { id: 1, title: "Message0000001", msgContent: "msgContent1" },
  { id: 2, title: "Message0000002", msgContent: "msgContent2" },
  { id: 3, title: "Message0000003", msgContent: "msgContent3" },
  { id: 4, title: "Message0000004", msgContent: "msgContent4" },
];
export default {
  name: "PropsTest",
  props:["id",'name','title'],
  data() {
    return {
      detail: {},
    };
  },
  mounted() {
      this.updateUI(this.$route);
  },
  watch: {
    $route(value) {
      this.updateUI(value);
    },
  },
  methods: {
    updateUI(route) {
      const id = this.$route.params.id * 1;
      setTimeout(() => {
        const detail = allMsg.find((item) => (item.id === id));
        this.detail = detail;
      }, 1000);
    },
  },
};
</script>
<style scoped></style>
