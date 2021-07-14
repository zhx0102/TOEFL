<template>
  <li @mouseenter="btnShow(true)" @mouseleave="btnShow(false)" :style="{background:bgColor}">
    <label>
      <input type="checkbox" v-model="isCheck"/>
      <span>{{ item.title }}</span>
    </label>
    <button @click="deleteTodo(index)" class="btn btn-danger" v-show="isShow">删除</button>
  </li>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Item",
  data() {
    return {
      isShow: false,
      bgColor: "#fff",
    };
  },
  props: {
    item: Object,
    index: Number,
  },
  computed: {
    isCheck:{
      get(){
        return this.item.select;
        
      },set(value){
        this.totalSelect(this.item);
      }
    }
  },
  methods: {
    btnShow(flag) {
      if (flag) {
        this.bgColor="#eee",
        this.isShow=true
      }else{
        this.bgColor="#fff",
        this.isShow=false
      }
    },
    deleteTodo(index){
      this.$store.dispatch('confirmDelete',index);
    },
    totalSelect(item){
      this.$store.commit('totalSelect',item);
    }
  },
};
</script>
<style scoped>
/*item*/
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
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
