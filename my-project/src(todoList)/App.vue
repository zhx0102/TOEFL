<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addTodo="addTodo"/>
        <List :todos="todos" :deleteTodo="deleteTodo" :toggleTodo="toggleTodo"/>
        <Footer :todos="todos" :selectAll="selectAll" :clearCompletedTodos="clearCompletedTodos"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  methods:{
    addTodo(todo){
      todo.key=Date.now();
      this.todos.unshift(todo)
    },
    deleteTodo(index){
      this.todos.splice(index,1);
    },
    selectAll(isCheck){
      this.todos.forEach(todo=>todo.completed=isCheck);
    },
    // 消除已完成的
    clearCompletedTodos (){
      this.todos=this.todos.filter(todo=>!todo.completed);
    },
    //将一个指定todo切换勾选状态
    toggleTodo(todo){
      todo.completed=!todo.completed;
    }
  },
  components: {
    Header,
    List,
    Footer,
  },
  data(){
    return {
      todos:[]
    }
  },
  watch:{
    todos:{
      handler(value){
        localStorage.setItem('todos_key',JSON.stringify(value));
      }
    ,deep:true
    }
  },
  mounted(){
    setTimeout(()=>{
      this.todos=JSON.parse(localStorage.getItem('todos_key')) || [];
    },2000)
  }
};
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
