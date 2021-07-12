<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="todo.id">
      <!-- slot标签上的所有属性都会自动传递给父组件 -->
      <slot :row="todo" :$index="index"></slot>
      <!-- <span :style="{color: todo.completed ? 'green': ''}">{{index + 1}}--{{todo.title}}</span> -->
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: Array
  }
}
</script>

<style scoped>

</style>
