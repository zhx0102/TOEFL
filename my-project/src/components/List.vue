<template>
  <ul class="todo-main">
      <!-- 遍历以后要把todo传递给item组件展示 -->
    <!-- <Item v-for="(todo,index) in todos" :key="todo.id" :todo="todo" 
    :deleteTodo="deleteTodo" :index="index" :isSelect="isSelect"></Item> -->
    <Item v-for="(todo,index) in todos" :key="todo.id" :todo="todo" 
     :index="index" :isSelect="isSelect"></Item>
  </ul>
</template>
<script>
import Item from "./Item.vue";
export default {
  name: "List",
  props:{
    //   声明接收
    //   1.接收到父组件App传来的todos数组，用于展示在item上面
    todos:Array,
    //将删除函数通过list传递给item，list同时要通过这个函数传递index
    // deleteTodo:Function,
    //动态的修改select的值，因此要把是否选中从item传到父组件App
    isSelect:Function,
  },
  components: {
    Item,
  },
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
