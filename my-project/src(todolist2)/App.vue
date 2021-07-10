<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 因为要通过header中的input输入框添加todo，因此给header传递todos -->
        <Header :todos="todos" :addTodo="addTodo" />
        <!-- 传递todos用于展示 -->
        <List :todos="todos" :deleteTodo="deleteTodo" :isSelect="isSelect" />
        <Footer
          :isSelectNum="isSelectNum"
          :todos="todos"
          :isSelectAll="isSelectAll"
          :clearSelectAll="clearSelectAll"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  data() {
    return {
      //定义list里面的数据,select：是否被选中
      //这个数据需要传递给list展示出来，因此用props来传递（父传子）
      todos: [],
    };
  },
  watch: {
    todos: {
      handler(value) {
        localStorage.setItem("todos_key", JSON.stringify(value));
      },
      deep: true, //深度监视
    },
  },
  mounted() {
    setTimeout(() => {
      this.todos = JSON.parse(localStorage.getItem("todos_key")) || [];
    }, 2000);
  },
  computed: {
    //计算选中的有多少个
    isSelectNum() {
      return this.todos.reduce((pre, todo) => {
        return pre + (todo.select ? 1 : 0);
      }, 0);
    },
  },
  methods: {
    //定义添加todo的函数，并且传给header，用于子组件给父组件传值
    addTodo(title) {
      // console.log(title);
      // 收到数据以后，首先定义一个新的对象用于存储
      const newTodo = { id: Date.now(), title: title, select: false };
      this.todos.unshift(newTodo);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    //动态修改todo的select的值
    isSelect(todo) {
      // console.log(todo.select);
      todo.select = !todo.select;
    },
    //全选
    isSelectAll(isCheck) {
      // console.log(isCheck);
      this.todos.forEach((item) => {
        item.select = isCheck;
        console.log(item.select);
      });
    },
    clearSelectAll() {
      //清除已完成
      //过滤已完成的
      this.todos = this.todos.filter((p) => {
        return !p.select;
      });
    },
  },
  components: {
    Header,
    List,
    Footer,
  },
};
</script>
<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
