<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="selectAllBtn" />
    </label>
    <span> <span>已完成{{isSelectNum}}</span> / 全部{{todos.length}} </span>
    <button class="btn btn-danger" @click="clearSelect">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: "Footer",
  props:{
      todos:Array,
      //选中的todo的个数
      isSelectNum:Number,
      //全选的函数
      isSelectAll:Function,
      //清楚已完成的
      clearSelectAll:Function
  },
  computed:{
       selectAllBtn:{
          get(){
              return this.isSelectNum===this.todos.length;
          },
          set(value){
              this.isSelectAll(value);
          }
      }
  },
  methods:{
     clearSelect(){
      //  console.log(111111111);
       this.clearSelectAll();
     }
  }
};
</script>
<style scoped>
/*footer*/
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
