<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isSelectAll"/>
    </label>
    <span> <span>已完成{{completedSlecte}}</span> / 全部{{todos.length}} </span>
    <button class="btn btn-danger" v-show="completedSlecte" @click="clearCompletedTodos">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props:{
    todos:Array,
    selectAll:Function,
    clearCompletedTodos:Function
  },
  data(){
    return{
      
    }
  },
  computed:{
    completedSlecte(){
      return this.todos.reduce((pre,todo)=>pre+(todo.completed?1:0),0)
    },
    isSelectAll:{
      get(){
        return this.completedSlecte===this.todos.length;
      },
      set(value){
        this.selectAll(value)
      }
    }
  }
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
