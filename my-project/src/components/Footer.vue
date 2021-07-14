<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllSelect" />
    </label>
    <span>
      <span>已完成{{ allCheck }}</span> / 全部{{ todos.length }}
    </span>
    <button @click="deleteSelectAll" class="btn btn-danger">清除已完成任务</button>
  </div>
</template>
<script>
import {mapGetters, mapState} from 'vuex'
export default {
  name: "Footer",
  computed:{
    ...mapState(['todos']),
    ...mapGetters(['allCheck','allSelect']),
    isAllSelect:{
      get(){
        return this.allSelect
      },
      set(value){
        this.$store.commit('selectAll',value)
      }
    }
  },
  methods:{
    deleteSelectAll(){
      this.$store.commit('deleteSelectAll');
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
