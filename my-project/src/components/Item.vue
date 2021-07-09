<template>
  <li :style="{backgroundColor:bgColor}" @mouseenter="handelEnter(true)" @mouseleave="handelEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.completed"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="confirmDelete">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props:{
    todo:Object,
    deleteTodo:Function,
    index:Number
  },
  methods:{
    handelEnter(flag){
      if(flag){
        this.bgColor="#ccc";
        this.isShow=true;
      }else{
        this.bgColor="#fff";
        this.isShow=false;
      }
    },
    confirmDelete(){
      const {deleteTodo,index,todo:{title}}=this;
      if(confirm(`你确定要删除${title}吗?`)){
        deleteTodo(index);
      }
    }
  },
  data(){
    return{
      bgColor:"#fff",
      isShow:false 
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
