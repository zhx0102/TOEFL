<template>
  <div id="app">
    <div>
        <Header/>
        <Container/>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header.vue"
import Container from "./components/Container.vue"
export default {
  name: "App",
  components:{
      Header,
      Container
  }
};
</script>
<style scoped></style>
