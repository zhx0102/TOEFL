<template>
  <li  @mouseenter="handelEnter(true)" @mouseleave="handelEnter(false)" :style="{background:bgColor}">
    <label>
      <input type="checkbox" v-model="isCheck" />
      <span>{{item.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteTodo(index)">删除</button>
  </li>
</template>
<script>
export default {
  name: "Item",
  props:{
    item:Object,
    index:Number
  },
  data(){
    return{
      bgColor:"#fff",
      isShow:false
    }
  },
  computed:{
    isCheck:{
      get(){
        return this.item.select;//得到item.select
      },
      set(value){
        this.$store.commit('isCheck',this.item);//给每个item修改select值
      }
    },
  },
  methods:{
    
    deleteTodo(index){
      this.$store.dispatch('deleteTodo',index);
    },
    handelEnter(flag){
      if(flag){
        //如果为true就是移入，false为移出
        this.bgColor='#eee',
        this.isShow=true
      }else{
        this.bgColor='#fff',
        this.isShow=false
      }
    }
  }
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
