<template>
  <li
    @mouseenter="handelEnter(true)"
    @mouseleave="handelEnter(false)"
    :style="{ backgroundColor: bgColor }"
  >
    <label>
      <input type="checkbox" v-model="Check" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="confirmDelete">
      删除
    </button>
  </li>
</template>
<script>
export default {
  name: "Item",
  props: {
    //接收从父组件list传递过来的todo，用于展示页面
    todo: Object,
    //接收App父组件传过来的删除函数
    deleteTodo: Function,
    index: Number,
    //接收App传递过来的，isSelect函数，动态记录是否选中，修改select值
    isSelect: Function,
  },
  computed: {
    Check: {
      get() {
        return this.todo.select;
      },
      set(value) {
        //如果选中，则传值给App
        //   console.log(this.todo.title);
        this.isSelect(this.todo);
      },
    },
  },
  methods: {
    //写一个鼠标移入移出效果函数
    handelEnter(flag) {
      //用flag来分辨鼠标是移入还是移出
      if (flag) {
        //鼠标移入,修改背景颜色，显示删除按钮
        this.bgColor = "#eee";
        this.isShow = true;
      } else {
        this.bgColor = "#fff";
        this.isShow = false;
      }
    },
    confirmDelete() {
      const {
        // deleteTodo,
        index,
        todo: { title },
      } = this;
      //加一个“是否确定删除”的提示
      if (confirm(`是否确定删除${title}？`)) {
        // deleteTodo(index);
        this.$globalEventBus.$emit("deleteTodo",index)
      }
    },
  },
  data() {
    return {
      bgColor: "#fff", //定义item初始背景颜色，让背景颜色不是设死的值
      isShow: false, //这是定义按钮是否显示
    };
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
