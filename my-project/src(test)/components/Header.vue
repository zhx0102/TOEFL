<template>
  <div class="todo-header">
    <input type="text" v-model="title" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="handerEnter"/>
  </div>
</template>
<script>
export default {
  name: "Header",
  props:{
      //声明传递
      //接收到父组件App传过来的todos
      todos:Array,
      // addTodo:Function
  },
  watch:{
    title(value){
      //当title变化时自动去空格
      this.title=value.trim();
    }
  },
  data(){
      return{
          //既然要生成新的todo，就在这里定义一个变量
          title:""
      }
  },
  methods:{
      handerEnter(){
        // // 优化一下，不让空格进去
        const title = this.title;
        // //为空的时候也不允许添加
        if(!title){
            this.title="";
            return;
        }


        // 2.
        this.$emit('addTodo',this.title);

        // //   console.log(this.title);
        // this.addTodo(this.title);
        //添加完一个以后把输入框清空
        this.title="";
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
