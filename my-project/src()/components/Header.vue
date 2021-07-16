<template>
  <div class="todo-header">
    <input type="text" v-model="title" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addTodo"/>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "Header",
  data(){
    return{
      title:""
    }
  },
  computed:{
    ...mapState(["todos","todo"])  
  },
  methods:{
      //添加信息效果
      addTodo(title){
          this.$store.dispatch("addTodo",this.title);
          this.title=""
      }
  }
};
</script>
<style scoped>
/*header*/
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
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>
