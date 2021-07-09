<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" 
    v-model="title" @keyup.enter="handleEnter(index)"/>
  </div>
</template>

<script>
export default {
  name: "Header",
  props:{
    addTodo:Function,
    index:Number
  },
  data(){
    return{
      title:''
    }
  },
  methods:{
    // 根据输入的title创建todo
    handleEnter(){
      const title=this.title.trim().replace(/\s/g,"");
      if(!title){
        this.title="";
        return;
      }
      const todo={
        title,
        completed:false
      }
      // 向todos中添加一个todo
      this.addTodo(todo);
      this.title="";
    }
  }
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}

</style>
