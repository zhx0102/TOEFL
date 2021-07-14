<template>
  <ul class="todo-main">
      <Item v-for="(item,index) in todos" :key="item.id" :item="item" :index="index"/>
  </ul>
</template>
<script>
import Item from './Item'
import {mapState} from 'vuex'

export default {
  name: "List",
  computed:{
    ...mapState(['todos'])
  },
  components:{
      Item
  }
};
</script>
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
